// /* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { TextalignJustifycenter } from "iconsax-react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import Button, { ButtonSize, ButtonTheme } from "../button/Button";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type Column = {
  title: string;
  minWidth?: string;
  maxWidth?: string;
  truncate?: boolean;
  hidden?: boolean;
};

export type Row = React.ReactNode[];

export type Actions = {
  minWidth?: string;
  onView?: (row: Row) => void;
  onEdit?: (row: Row) => void;
  onDelete?: (row: Row) => void;
};

export type Pagination = {
  entriesShown: number;
  totalEntries: number;
  onShowAll?: () => void;
};

export type TableProps = {
  columns?: Column[];
  rows?: Row[];
  actions?: Actions;
  pagination?: Pagination;
  draggable?: boolean;
  onDrag?: (dragged: Row, dropped: Row) => void;
};

const defaultColumns: Column[] = [
  { title: "Title", minWidth: "200px", truncate: true },
  { title: "Author", minWidth: "150px" },
  { title: "Category", minWidth: "150px" },
  { title: "Content", truncate: true, maxWidth: "350px" },
  { title: "Created Date", minWidth: "150px" },
  { title: "Last Modified", minWidth: "150px" },
  { title: "Status", minWidth: "120px" },
];

const defaultRows: Row[] = [
  [
    "The Future of AI",
    "John Doe",
    "Technology",
    "An article about the future advancements in AI. The article discusses the current state of AI and its future. It also talks about the ethical implications of AI.",
    "2023-01-01",
    "Jane Doe",
    <div
      key={2}
      className="bg-success-50 border-success-500 text-success-500 border-[1px] px-3 py-1 rounded-full"
    >
      Published
    </div>,
  ],
  [
    "React Best Practices",
    "Jane Smith",
    "Programming",
    "Tips and tricks for writing better React code.",
    "2023-01-05",
    "John Doe",
    <div
      key={2}
      className="bg-error-50 border-error-500 text-error-500 border-[1px] px-3 py-1 rounded-full"
    >
      Unpublished
    </div>,
  ],
];

const Table: React.FC<TableProps> = ({
  columns = defaultColumns,
  rows = defaultRows,
  actions,
  pagination,
  draggable = true,
  onDrag,
}) => {
  const [rowsState, setRowsState] = useState<Row[]>(rows);

  useEffect(() => {
    setRowsState(rows);
  }, [rows]);

  // const tableBorder = "border-[1px] border-grayscale-100";
  const tableBorder = "border-none";
  const tableItemPadding = "p-[16px] text-left";

  const columnsWithAction = actions
    ? [...columns, { title: "Actions", minWidth: actions.minWidth }]
    : columns;

  if (rows.some((row) => row.length !== columns.length)) {
    throw new Error("Each row must match the number of columns in the table.");
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = active.id;
    const newIndex = over.id;

    if (oldIndex !== -1 && newIndex !== -1) {
      const updatedRows = arrayMove(rowsState, oldIndex, newIndex);
      setRowsState(updatedRows);

      if (onDrag) {
        onDrag(updatedRows[newIndex], updatedRows[oldIndex]);
      }
    }
  };

  const RowComponent: React.FC<{ row: Row; rowIndex: number }> = ({
    row,
    rowIndex,
  }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: String(rowIndex) });

    return (
      <tr
        ref={setNodeRef}
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
        }}
        className="cursor-pointer"
      >
        <td className={`${tableBorder} ${tableItemPadding} min-w-[50px]`}>
          <div className="flex items-center justify-center gap-3">
            {draggable && (
              <span {...listeners} {...attributes} className="cursor-move">
                <TextalignJustifycenter size="14" color="#292D32" />
              </span>
            )}
            {rowIndex < 9 ? `0${rowIndex + 1}` : rowIndex + 1}
          </div>
        </td>

        {row.map((cell, colIndex) =>
          columns[colIndex]?.hidden ? null : (
            <td
              key={colIndex}
              className={`${tableBorder} ${tableItemPadding} ${
                columns[colIndex]?.truncate ? "truncate overflow-hidden" : ""
              }`}
              style={{
                minWidth: columns[colIndex].minWidth,
                maxWidth: columns[colIndex].maxWidth,
              }}
              title={columns[colIndex]?.truncate ? String(cell) : undefined}
            >
              {cell}
            </td>
          )
        )}

        {actions && (
          <td className={`${tableBorder} ${tableItemPadding}`}>
            <div className="flex gap-3 justify-center items-center">
              {actions.onView && (
                <button
                  className="text-success-500 hover:underline"
                  onClick={() => actions.onView?.(row)}
                >
                  <IoMdEye size={20} />
                </button>
              )}
              {actions.onEdit && (
                <button
                  className="text-info-500 hover:underline"
                  onClick={() => actions.onEdit?.(row)}
                >
                  <BiSolidMessageSquareEdit size={18} />
                </button>
              )}
              {actions.onDelete && (
                <button
                  className="text-error-500 hover:underline"
                  onClick={() => actions.onDelete?.(row)}
                >
                  <FaTrash size={18} />
                </button>
              )}
            </div>
          </td>
        )}
      </tr>
    );
  };

  return (
    // <div className="overflow-x-auto mt-[32px] rounded-[12px] border-grayscale-100 border-[1px]">  -- Original
    // Modified to remove border
    // <div className="w-full h-full flex flex-col overflow-x-hidden">
    <div className="w-full h-full flex flex-col overflow-x-hidden">
          <div className="relative">
      <div className="overflow-auto mt-[32px] rounded-[12px] relative">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={rowsState.map((_, index) => String(index))}>
            <table className="table-auto w-full border-collapse rounded-[12px] overflow-hidden tracking-[0.02em]">
              <thead className="bg-grayscale-25 font-bold text-grayscale-800 leading-[150%]">
                <tr>
                  <th
                    className={`${tableBorder} ${tableItemPadding} min-w-[50px]`}
                  >
                    S.N
                  </th>
                  {columnsWithAction.map((column, index) =>
                    column.hidden ? null : (
                      <th
                        key={index}
                        className={`${tableBorder} ${tableItemPadding}`}
                        style={{
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
                        }}
                      >
                        {column.title}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody className="font-medium tracking-[0.02em] leading-[21.6px] text-grayscale-700">
                {rowsState.map((row, rowIndex) => (
                  <RowComponent row={row} rowIndex={rowIndex} key={rowIndex} />
                ))}
              </tbody>
            </table>
          </SortableContext>
        </DndContext>
      </div>

      <div>
        {pagination && (
          <div className="absolute w-full">
            <div className="flex w-full justify-between text-grayscale-700 items-center px-[16px] py-[20px] border-t-[1px] border-grayscale-100">
              <span className="text-body-lg-regular">
                Showing{" "}
                <span className="bg-[#EBEBEB80] inline-block py-[7px] px-[10px] mx-2">
                  {pagination.entriesShown}
                </span>{" "}
                of {pagination.totalEntries} entries
              </span>
              <Button
                text="Show All"
                theme={ButtonTheme.ghost}
                size={ButtonSize.small}
                onClick={pagination.onShowAll}
                extraClass="text-grayscale-700 text-[14px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Table;
