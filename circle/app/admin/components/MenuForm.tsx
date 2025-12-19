"use client";
import Form from "./Form"
import Navbar from "../../home/components/Navbar"
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const MenuForm = () => {

    const [form, setForm] = useState(false);
    console.log("form is clicked ", form)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-gray-300 h-15 rounded-2xl flex items-center justify-center p-10 cursor-pointer" onClick={() => setForm(true)}>
                <Navbar />

                + Add Menu Item

            </div>


            {form && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
                    onClick={() => setForm(false)}
                >
                    <div
                        className="bg-white w-full max-w-lg md:max-w-2xl rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b-1 border-gray-300 shadow-2xs">
                            <h2 className="text-lg font-semibold">Menu Form </h2>
                            <button className='text-black text-2xl cursor-pointer' onClick={() => setForm(false)}>

                                <RxCross2 />
                            </button>
                        </div>

                        <div className="px-4 pt-4">

                            <Form
                                title="Create Menu"
                                showMenuItems={true}
                                showSocials={true}
                                submitText="Save Menu"
                            />


                        </div>
                    </div>
                </div>
            )}



        </div>
    )
}

export default MenuForm