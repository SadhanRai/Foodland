"use client";

import React, { useState } from "react";
import Sidebar from "../../../src/components/admin/sidebar/Sidebar";
import Header from "../../../src/components/admin/header/Header";
import SlideProvider from "../../../src/context/slideProvider";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    // toggle function
    const tbar = () => setIsOpen(prev => !prev);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">

            {/* 1. Sidebar */}
            <Sidebar isOpen={isOpen} toggleSidebar={tbar} />

            {/* 2. Main Wrapper */}
            <div className="flex-1 lg:ml-64 h-full flex flex-col">

                {/* 3. Sticky Header */}
                <Header toggleSidebar={tbar} />

                {/* 4. Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-6 mt-20  lg:p-8 ">
                    <SlideProvider isAdmin>
                        {children}
                    </SlideProvider>
                </main>

            </div>
        </div>
    );
};

export default Layout;
