"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Package, ShoppingCart, Users, Settings, Menu, X, Utensils } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Slides", href: "/admin/homeslide", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* --- MOBILE HEADER (Visible only on small screens) --- */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
                <div className="text-2xl lobster tracking-wide text-black">Foodieland</div>
                <button onClick={toggleSidebar} className="p-2 text-gray-600 focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* --- OVERLAY (Darkens background when mobile menu is open) --- */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* --- SIDEBAR --- */}
            <aside className={`
    fixed top-0 left-0 z-40 h-screen w-64 bg-white flex flex-col p-5 shadow-xl transition-transform duration-300 ease-in-out
    /* Mobile: Slide in/out */
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    /* Desktop: Always fixed to the left */
    lg:translate-x-0 
`}>
                {/* Brand */}
                <div className="text-3xl lobster mb-10 tracking-wide border-b border-gray-200 pb-4 flex items-center gap-2">
                    <Utensils className="text-orange-500" />
                    Foodieland
                </div>

                {/* Menu */}
                <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
                                    ${active
                                        ? "bg-gray-800 text-white shadow-md"
                                        : "text-gray-500 hover:bg-gray-100"
                                    }
                                `}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Optional: Bottom Logout or Profile */}
                <div className="mt-auto pt-5 border-t border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Admin Panel</p>
                </div>
            </aside>
        </>
    );
}