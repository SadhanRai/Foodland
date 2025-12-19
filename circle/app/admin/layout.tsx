import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar className="w-64 flex-shrink-0" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header */}
                <Header className="h-16 flex-shrink-0" />

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto  bg-gray-50">
                    {children}
                </main>

            </div>
        </div>

    )
}

export default Layout