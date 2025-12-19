"use client";

import { usePathname } from "next/navigation";
import { Home, Package, ShoppingCart, Users, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="h-screen w-64 bg-white flex flex-col p-5 shadow-xl  ">
            {/* Brand */}
            <div className=" text-3xl lobster  mb-10 tracking-wide border-b-1 border-gray-300 pb-4">
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
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
                ${active ? "bg-gray-700 text-white" : "text-white-400 hover:bg-gray-200 "
                                }
              `}
                        >
                            <Icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
