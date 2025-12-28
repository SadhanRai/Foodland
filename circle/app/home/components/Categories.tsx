"use client"
import React from 'react'
import Image from 'next/image'
import Container from "../components/Container"

const Categories = () => {
    // 1. Data array for easy maintenance
    const categoryData = [
        { id: 1, name: "Breakfast", img: "https://cdn3d.iconscout.com/3d/premium/thumb/rice-3d-icon-png-download-8738419.png", color: "bg-[#E7FAFE]" },
        { id: 2, name: "Vegan", img: "https://cdn3d.iconscout.com/3d/premium/thumb/vegan-3d-icon-png-download-11245718.png", color: "bg-[#7082461a]" },
        { id: 3, name: "Meat", img: "https://png.pngtree.com/png-vector/20240917/ourlarge/pngtree-rice-on-the-plate-png-image_13851683.png", color: "bg-[#CC26281a]" },
        { id: 4, name: "Dessert", img: "https://cdn3d.iconscout.com/3d/premium/thumb/ice-cream-cone-3d-icon-png-download-5807891.png", color: "bg-[#F7921E1a]" },
        { id: 5, name: "Lunch", img: "https://png.pngtree.com/png-vector/20240917/ourlarge/pngtree-rice-on-the-plate-png-image_13851683.png", color: "bg-[#0000000d]" },
        { id: 6, name: "Chocolate", img: "https://png.pngtree.com/png-vector/20240917/ourlarge/pngtree-rice-on-the-plate-png-image_13851683.png", color: "bg-[#0000000d]" },
    ];

    return (
        <Container>
            <section className="py-10 mt-10 px-4 md:px-0">
                {/* HEADER SECTION */}
                <div className="flex  gap-4 sm:flex-row sm:justify-between sm:items-center mb-10">
                    <h2 className="font-inter font-semibold text-3xl lg:text-[48px] leading-tight text-[#000000]">
                        Categories
                    </h2>

                    <div className="bg-[#E7FAFE] w-[160px] lg:w-[200px] h-[50px] lg:h-[60px] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#d1f1f8] transition-all duration-300">
                        <span className="font-semibold text-sm lg:text-base font-inter">
                            View all
                        </span>
                    </div>
                </div>

                {/* CATEGORIES GRID */}
                {/* 2 cols on mobile, 3 on tablet, 6 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categoryData.map((item) => (
                        <div
                            key={item.id}
                            className={`${item.color} flex flex-col items-center p-6 rounded-[30px] transition-transform hover:scale-105 cursor-pointer`}
                        >
                            {/* Image Wrapper (Fixed the Relative issue) */}
                            <div className="relative w-24 h-24 mb-4 drop-shadow-xl">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 768px) 100px, 150px"
                                    className="object-contain"
                                />
                            </div>
                            <p className="font-bold text-center font-inter text-[#000000]">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}

export default Categories