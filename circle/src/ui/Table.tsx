
import React, { useState, useEffect } from "react";

// 1. Bringing back your original Types
export type Column = {
  title: string;
  minWidth?: string;
  maxWidth?: string;
  truncate?: boolean;
  hidden?: boolean;
};

export type Row = React.ReactNode[];

export type Actions = {
  onView?: (row: Row) => void;
  onEdit?: (row: Row) => void;
  onDelete?: (row: Row) => void;
};

const Table = () => {
  // 2. Original column structure as Objects
  const columns: Column[] = [
    { title: "Title", minWidth: "200px", truncate: true },
    { title: "Category", minWidth: "150px" },
    { title: "Status", minWidth: "120px" },
  ];

  // 3. Original row structure (Arrays with JSX)
  const initialRows: Row[] = [
    [
      "The Future of AI",
      "Technology",
      <div key="1" className="bg-green-50 text-green-500 px-3 py-1 rounded-full">Published</div>,
    ],
    [
      "React Best Practices",
      "Programming",
      <div key="2" className="bg-red-50 text-red-500 px-3 py-1 rounded-full">Unpublished</div>,
    ],
  ];

  const [rowsState, setRowsState] = useState<Row[]>(initialRows);

  // 4. Action functions (as defined in your original "Actions" type)
  const actions: Actions = {
    onView: (row) => console.log("Viewing:", row[0]),
    onEdit: (row) => console.log("Editing:", row[0]),
    onDelete: (row) => setRowsState(rowsState.filter((r) => r !== row)),
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 font-bold">
          <tr>
            <th className="p-4 border">S.N</th>
            {columns.map((col, index) => (
              !col.hidden && (
                <th key={index} style={{ minWidth: col.minWidth }} className="p-4 border text-left">
                  {col.title}
                </th>
              )
            ))}
            {/* If actions exist, add an "Actions" header */}
            {actions && <th className="p-4 border">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rowsState.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              <td className="p-4 border text-center">
                {rowIndex + 1 < 10 ? `0${rowIndex + 1}` : rowIndex + 1}
              </td>

              {row.map((cell, colIndex) => (
                !columns[colIndex]?.hidden && (
                  <td key={colIndex} className="p-4 border">
                    {cell}
                  </td>
                )
              ))}

              {/* Mapping the Action buttons from the Actions object */}
              <td className="p-4 border">
                <div className="flex gap-2 justify-center">
                  {actions.onView && <button onClick={() => actions.onView!(row)}>View</button>}
                  {actions.onEdit && <button onClick={() => actions.onEdit!(row)}>Edit</button>}
                  {actions.onDelete && <button onClick={() => actions.onDelete!(row)}>Delete</button>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;