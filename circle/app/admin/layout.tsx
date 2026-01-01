import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SlideProvider from "../context/slideProvider";

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            {/* 1. Sidebar - Fixed on the left */}
            <Sidebar />

            {/* 2. Main Area - Everything here needs to be pushed right on desktop */}
            <div className="flex-1 flex flex-col min-h-screen lg:ml-64">

                {/* 3. Header - Now it will start after the sidebar */}
                <Header />

                {/* 4. Scrollable Content */}
                <main className="flex-1 p-5 bg-gray-50 no-scrollbar">
                    {/* Mobile Spacer (for the mobile hamburger header) */}
                    <div className="h-16 lg:hidden" />
                    <SlideProvider isAdmin={true}>

                        {children}
                    </SlideProvider>
                </main>
            </div>
        </div>
    );
};

export default Layout;