"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RiAiGenerate2 } from 'react-icons/ri';
import { ArrowUpRight } from 'lucide-react';
import Container from "../container/Container";
import { useMenu } from "../../hooks/useMenu";

// Same icon map as Navbar to keep consistency
const iconMap = {
    facebook: FaFacebookF,
    twitter: FaTwitter,
    ai: RiAiGenerate2,
    instagram: FaInstagram
};

const Footer = () => {
    // Fetching dynamic data from your custom hook
    const { menus, loading, error } = useMenu();

    if (loading) return null; // Or a simple skeleton

    return (
        <footer className="w-full bg-[#e3e3f0] text-black pt-16 pb-8 mt-auto border-t border-zinc-300">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">

                    {/* Brand Section - Dynamic */}
                    <div className="space-y-4">
                        <Link
                            href="/home"
                            className="text-3xl font-normal text-black lobster"
                        >
                            {menus.brandName}.
                        </Link>
                        <p className="text-zinc-600 text-sm max-w-xs leading-relaxed italic">
                            Sadhan Rai Fullstack Project. <br />
                            Building digital experiences with passion.
                        </p>
                    </div>

                    {/* Navigation & Admin - Mapped from menus.items */}
                    <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm font-semibold items-center">
                        {menus?.items?.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="hover:opacity-70 underline underline-offset-4 decoration-zinc-400 hover:decoration-black transition-all"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/admin"
                            className="flex items-center gap-1 bg-black text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-sm"
                        >
                            Dashboard <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-zinc-300 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-500 text-xs tracking-wide uppercase font-medium">
                        © {new Date().getFullYear()} <span className="text-black font-[family-name:var(--font-lobster)] normal-case text-sm">{menus.brandName}</span>
                    </p>

                    {/* Social Icons - Mapped from menus.socials */}
                    <div className="flex items-center gap-6">
                        {menus?.socials?.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            if (!Icon) return null;

                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black transition-transform duration-300 transform hover:scale-125 hover:opacity-70"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;