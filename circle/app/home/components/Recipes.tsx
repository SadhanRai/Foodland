"use client"
import React from 'react'
import Image from 'next/image'
import Container from "../components/Container"
import { BiTimeFive } from "react-icons/bi" // Timer icon
import { GiForkKnifeSpoon } from "react-icons/gi" // Fork and Knife icon

const Recipes = () => {
    // Mock data for your recipes
    const recipeData = [
        { id: 1, title: "Big and Juicy Wagyu Beef Cheeseburger", time: "30 Minutes", type: "Snack" },
        { id: 2, title: "Fresh Lime Roasted Salmon with Ginger", time: "25 Minutes", type: "Fish" },
        { id: 3, title: "Strawberry Oatmeal Pancake with Honey", time: "15 Minutes", type: "Breakfast" },
        { id: 4, title: "Fresh Salad with Mixed Lettuce and Red Onion", time: "10 Minutes", type: "Healthy" },
        { id: 5, title: "Chicken Meatballs with Creamy Sauce", time: "35 Minutes", type: "Meat" },
        { id: 6, title: "Fruity Pancake with Orange & Blueberry", time: "20 Minutes", type: "Sweet" },
    ];

    const imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/rice-3d-icon-png-download-8738419.png";

    return (
        <Container>
            <section className="py-16">
                {/* Heading Section */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-5xl font-inter font-semibold mb-4 text-[#000000]">
                        Simple and tasty recipes
                    </h2>
                    <p className="text-gray-500 text-sm lg:text-base leading-relaxed px-4">
                        Discover a world of flavors with our easy-to-follow recipes, perfect for any occasion. From quick snacks to hearty meals, we've got you covered.
                    </p>
                </div>

                {/* Recipes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                    {recipeData.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-gradient-to-b from-white to-[#E7FAFE] p-4 rounded-[30px] shadow-sm hover:shadow-md transition-all group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-[250px] bg-white rounded-[20px] overflow-hidden mb-4">
                                <Image
                                    src={imgUrl}
                                    alt={recipe.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold font-inter mb-6 line-clamp-2 min-h-[56px]">
                                {recipe.title}
                            </h3>

                            <div className="flex gap-6 items-center">
                                {/* Time */}
                                <div className="flex items-center gap-2 text-gray-600">
                                    <BiTimeFive className="text-xl" />
                                    <span className="text-sm font-medium">{recipe.time}</span>
                                </div>

                                {/* Type */}
                                <div className="flex items-center gap-2 text-gray-600">
                                    <GiForkKnifeSpoon className="text-xl" />
                                    <span className="text-sm font-medium">{recipe.type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}

export default Recipes