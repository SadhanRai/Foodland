"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import Form from "../../ui/Form";
import { useMenu } from "../../hooks/useMenu";

const MenuForm = () => {
    const { menus, error } = useMenu();
    const { loading } = useMenu();

    const [formOpen, setFormOpen] = useState(false);
    const [mode, setMode] = useState("create"); // create | edit
    const [selectedMenu, setSelectedMenu] = useState(null);

    const openCreateForm = () => {
        setMode("create");
        setSelectedMenu(null);
        setFormOpen(true);
    };

    const openEditForm = () => {
        setMode("edit");
        setSelectedMenu(menus);
        setFormOpen(true);
    };




    return (
        <>
            {/* MENU CARD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative bg-gray-900 rounded-2xl p-4 sm:p-6 text-white">

                    {/* Edit Button */}
                    <button
                        onClick={openEditForm}
                        className="absolute top-3 right-3 cursor-pointer bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
                    >
                        <FiEdit size={16} />
                    </button>

                    {/* Clickable area for create */}
                    <div
                        className="cursor-pointer"
                        onClick={openCreateForm}
                    >
                        <h3 className="text-lg font-semibold mb-3">
                            Menu Items
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {loading
                                ? Array.from({ length: 4 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 rounded-full text-sm bg-white/30 animate-pulse w-20 h-6"
                                    />
                                ))
                                : menus?.items?.map((item, index) => (
                                    <span
                                        key={index}
                                        className="bg-white/20 px-3 py-1 rounded-full text-sm"
                                    >
                                        {item.label}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {formOpen && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 px-4"
                    onClick={() => setFormOpen(false)}
                >
                    <div
                        className="bg-white w-full max-w-lg sm:max-w-xl md:max-w-2xl rounded-lg shadow-lg max-h-[90vh] overflow-y-auto "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-200 w-full max-w-lg sm:max-w-xl md:max-w-2xl   ">
                            <h2 className="text-lg font-semibold">
                                {mode === "create" ? "Create Menu" : "Edit Menu"}
                            </h2>
                            <button
                                className="text-2xl hover:opacity-70 transition cursor-pointer" onClick={() => setFormOpen(false)}
                            >

                                <RxCross2 />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="p-4 ">
                            <Form
                                title={mode === "create" ? "Create Menu" : "Edit Menu"}
                                showMenuItems={true}
                                showSocials={true}
                                submitText={mode === "create" ? "Save Menu" : "Update Menu"}
                                initialData={selectedMenu}   // 👈 pass menu data for edit
                                mode={mode}

                                loading={loading}

                            // tell form create or edit
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuForm;
