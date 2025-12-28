
"use client";
import React, { useState } from 'react'
import Container from '../../home/components/Container';
import { Pencil, Trash2, ExternalLink, Clock } from 'lucide-react';
import { FaPlusCircle } from "react-icons/fa";


const HomeSlide = () => {
    // Initial Data with an added 'isActive' property
    const [recipeData, setRecipeData] = useState([
        {
            id: 1,
            category: "Hot Recipes",
            title: "Spicy delicious Chicken wings",
            time: "30 M",
            type: "Chicken",
            author: "John Doe",
            date: "15 March 2025",
            authorImage: "https://cdn.pfps.gg/pfps/8333-funny-indian.png",
            image: "https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg",
            link: "https://www.example.com/recipe1",
            isActive: true, // New Status Field
        },
        {
            id: 2,
            category: "Hot Recipes",
            title: "Spicy delicious Chicken wings",
            time: "30 M",
            type: "Chicken",
            author: "John Doe",
            date: "15 March 2025",
            authorImage: "https://cdn.pfps.gg/pfps/8333-funny-indian.png",
            image: "https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg",
            link: "https://www.example.com/recipe1",
            isActive: true, // New Status Field
        },
        {
            id: 3,
            category: "Hot Recipes",
            title: "Spicy delicious Chicken wings",
            time: "30 M",
            type: "Chicken",
            author: "John Doe",
            date: "15 March 2025",
            authorImage: "https://cdn.pfps.gg/pfps/8333-funny-indian.png",
            image: "https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg",
            link: "https://www.example.com/recipe1",
            isActive: true, // New Status Field
        },
        {
            id: 4,
            category: "Hot Recipes",
            title: "Spicy delicious Chicken wings",
            time: "30 M",
            type: "Chicken",
            author: "John Doe",
            date: "15 March 2025",
            authorImage: "https://cdn.pfps.gg/pfps/8333-funny-indian.png",
            image: "https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg",
            link: "https://www.example.com/recipe1",
            isActive: true, // New Status Field
        },
    ]);

    // Function to toggle status
    const toggleStatus = (id) => {
        setRecipeData(recipeData.map(item =>
            item.id === id ? { ...item, isActive: !item.isActive } : item
        ));
    };

    return (
        <div className="">
            <Container>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Slider Management</h2>
                    <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition text-sm font-medium shadow-sm flex items-center gap-2 cursor-pointer">
                        <FaPlusCircle />  Add New Slide
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-300">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Recipe</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Author</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {recipeData.map((item) => (
                                    <tr key={item.id} className={`transition-colors ${item.isActive ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 min-w-[250px]">
                                                <img src={item.image} alt="" className={`w-14 h-14 rounded-lg object-cover border transition-opacity ${item.isActive ? 'opacity-100' : 'opacity-50 grayscale'}`} />
                                                <div>
                                                    <h3 className={`font-semibold text-sm ${item.isActive ? 'text-gray-900' : 'text-gray-400'}`}>{item.title}</h3>
                                                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                        <Clock size={12} /> {item.time} • {item.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* --- THE TOGGLE SWITCH --- */}
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => toggleStatus(item.id)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${item.isActive ? 'bg-green-500' : 'bg-gray-300'}`}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.isActive ? 'translate-x-6' : 'translate-x-1'}`}
                                                />
                                            </button>
                                            <span className={`ml-2 text-xs font-medium ${item.isActive ? 'text-green-600' : 'text-gray-400'}`}>
                                                {item.isActive ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <img src={item.authorImage} alt="" className="w-6 h-6 rounded-full" />
                                                <span className="text-sm text-gray-600">{item.author}</span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                            {item.date}
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"><Pencil size={18} /></button>
                                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 size={18} /></button>
                                                <a href={item.link} target="_blank" className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition"><ExternalLink size={18} /></a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSlide;