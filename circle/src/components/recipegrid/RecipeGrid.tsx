import React from 'react';
import Image from 'next/image';
import { Heart, Timer, ForkKnife } from 'lucide-react'; // Using lucide-react for icons
import Container from "../container/Container";

const RECIPE_DATA = {
    header: "Try this delicious recipe to make your day",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    recipes: [
        {
            id: 1,
            title: "Mixed Tropical Fruit Salad with Superfood Boosts",
            time: "30 Minutes",
            category: "Healthy",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        },
        {
            id: 2,
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            time: "30 Minutes",
            category: "Western",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445",
        },
        {
            id: 3,
            title: "Healthy Japanese Fried Rice with Asparagus",
            time: "30 Minutes",
            category: "Healthy",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        },
        {
            id: 4,
            title: "Cauliflower Walnut Vegetarian Taco Meat",
            time: "30 Minutes",
            category: "Eastern",
            image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55",
        },
        {
            id: 5,
            title: "Rainbow Chicken Salad with Almond Honey Mustard",
            time: "30 Minutes",
            category: "Healthy",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        },
        {
            id: 6,
            title: "Barbeque Spicy Sandwiches with Chips",
            time: "30 Minutes",
            category: "Snack",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445",
        },
        {
            id: 7,
            title: "Firecracker Vegan Lettuce Wraps - Spicy!",
            time: "30 Minutes",
            category: "Seafood",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        },
        {
            id: 8,
            title: "Chicken Ramen Soup with Mushroom",
            time: "30 Minutes",
            category: "Japanese",
            image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55",
        }
    ]
};

const RecipeGrid = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between  gap-6 mb-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                            {RECIPE_DATA.header}
                        </h2>
                    </div>
                    <div className="md:w-1/3">
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            {RECIPE_DATA.description}
                        </p>
                    </div>
                </div>

                {/* Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {RECIPE_DATA.recipes.map((recipe) => (
                        <div key={recipe.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] rounded-[30px] overflow-hidden mb-4">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Heart Icon Overlay */}
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
                                    <Heart size={20} className="text-red-400" />
                                </button>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-black mb-4 line-clamp-2 min-h-[56px] group-hover:text-gray-700 transition-colors">
                                {recipe.title}
                            </h3>

                            {/* Meta Info */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <Timer size={18} />
                                    <span>{recipe.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <ForkKnife size={18} />
                                    <span>{recipe.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default RecipeGrid;