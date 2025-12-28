"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiAiGenerate2 } from 'react-icons/ri';
import Container from './Container';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
// import { La_Belle_Aurore } from 'next/font/google';
// import path from 'path';

import { useMenu } from "../../hooks/useMenu"
import { usePathname } from 'next/navigation';




const iconMap = {
    facebook: FaFacebookF,
    twitter: FaTwitter,
    ai: RiAiGenerate2
};



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();



    const { menus, loading, ratelimit, error } = useMenu();


    return (

        <nav className=" bg-white  inter border-b border-gray-200 w-full ">
            <Container>

                {loading && <div className='text-center text-primary'>Loading...</div>}




                <button className='pt-2 cursor-pointer md:hidden  text-black   font-bold text-3xl  ' onClick={() => setOpen(true)}>

                    <RxHamburgerMenu />
                </button>
                {/* {Ratelimit && <  RateLimitedUi />} */}

                {/* For the desktop */}

                <div className='flex justify-between h-12 items-center w-full  hidden md:flex'>

                    {/* Brand */}
                    <div className="  text-2xl font-medium lobster sm:flex">
                        <Link href="/home">
                            {menus.brandName}


                        </Link>


                    </div>

                    {/* Menu Links */}




                    <ul className="flex space-x-10 font-medium inter ">


                        {menus?.items?.map((item, index) =>

                            <li key={index}><Link href={item.href}>{item.label}</Link></li>
                        )}
                    </ul>

                    {/* Social Icons */}
                    <div className="flex space-x-4 text-black">



                        {menus?.socials?.map((item, index) => {

                            const Icon = iconMap[item.icon];

                            if (!Icon) return null;

                            return (
                                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 transform hover:scale-125" rel="noopener noreferrer" >
                                    <Icon size={20} />
                                </a>
                            );
                        })}


                    </div>
                </div>



                {/* mobile device  */}
                <div className={`  px-4 md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className='flex justify-between  items-center border-b border-gray-200 h-20 '>
                        <div className="  text-2xl font-medium lobster sm:flex">
                            <Link href="/home">{menus.brandName}</Link>
                        </div>



                        <button className={` cursor-pointer text-3xl justify-end flex translate-transform duration-300 hover:rotate-90 `} onClick={() => setOpen(false)}> <RxCross2 /></button>
                    </div>
                    <div>
                        <ul className="flex flex-col mt-8 space-y-6 font-medium inter w-full  ">
                            {menus?.items?.map((item, index) => {

                                const active = pathname === item.href;
                                return (

                                    <li onClick={() => setOpen(false)} key={index}>
                                        <Link
                                            href={item.href}
                                            className={`
      block px-6 py-3 rounded-lg
      transition-all duration-300 ease-in-out
      ${active
                                                    ? "text-red-600  scale-105 "
                                                    : "text-gray-600 hover:text-red-600 hover:scale-105"
                                                }
    `}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>);
                            })}

                        </ul>
                    </div>



                </div>




            </Container>
            {
                open && (
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
                        onClick={() => setOpen(false)}
                        aria-hidden
                    />
                )
            }

        </nav >
    );
};

export default Navbar;
