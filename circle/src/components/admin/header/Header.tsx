// components/admin/header/Header.jsx
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Bell, MessageSquare, Menu, ChevronDown, Search, Plus, User, Settings, LogOut, } from 'lucide-react';
import Image from 'next/image';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef(null);
    // const [isOpen, setIsOpen] = useState(false)

    // const toggleSidebar = () => setIsOpen(!isOpen);
    const handleLogout = async () => {

        try {

        } catch (error) {

        }


    }

    return (
        <header className="
  fixed top-0 right-0 left-0 lg:left-64 z-70 h-20
  bg-white/10
  backdrop-blur-[18px]
  border-b border-white/20
  shadow-sm
  flex items-center justify-between
  px-4 lg:px-8
">



            <div className="flex items-center gap-4 lg:gap-8 ">
                <div className='lg:hidden  cursor-pointer' onClick={toggleSidebar}>

                    <Menu size={28} />
                </div>

                {/* {isOpen && (
                    <div>show this shit</div>
                )} */}
                <div className="relative hidden md:block w-48 lg:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-full bg-gray-50 border-1 border-gray-400 rounded-md py-2 pl-10 pr-4 text-sm  "
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
                {/* MID-GRAY BUTTON */}
                <button className="bg-gray-700 hover:bg-gray-800 text-white p-2 lg:px-4 lg:py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm">
                    <Plus className="w-4 h-4" /> <span className="hidden sm:inline">New Upload</span>
                </button>

                <div className="relative" ref={dropdownRef}>
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-lg transition-colors">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg overflow-hidden border">
                            <Image src="https://i.pinimg.com/736x/cf/d1/b8/cfd1b8dabcdb96c56807872afcd80277.jpg" alt="User" width={40} height={40} />
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isProfileOpen && (
                        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 p-2">
                            <div className="px-4 py-3 border-b border-gray-50 mb-1">
                                <p className="text-sm font-bold text-gray-800">TheMad</p>
                            </div>
                            {/* GRAY HOVER STATES */}
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <User size={16} /> My Profile
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <Settings size={16} /> Settings
                            </button>
                            <div className="h-px bg-gray-100 my-1 mx-2" />
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg font-semibold transition-colors" onClick={handleLogout}>
                                <LogOut size={16} /> Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
export default Header;