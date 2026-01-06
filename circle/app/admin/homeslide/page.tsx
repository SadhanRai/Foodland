"use client";
import React from "react";
import Container from "../../../src/components/container/Container";
// Consistency: Using Plus from lucide-react instead of mixing libraries
import { Pencil, Trash2, ExternalLink, Clock, Plus } from "lucide-react";
import { useSlide } from "../../../src/hooks/useSlide";

const HomeSlide = () => {


    const formatCreatedAt = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        // 'en-GB' results in Day Month Year (1 January 2026)
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    // Assuming useSlide returns { slides, setSlides, isLoading }
    const { slides, setSlides } = useSlide();

    const toggleStatus = (_id) => {
        // 1. Update local state immediately for snappy UI
        setSlides((prev) =>
            prev.map((item) =>
                item._id === _id ? { ...item, isActive: !item.isActive } : item
            )
        );

        // NOTE: If you have an API, you should call it here:
        // axios.patch(`/api/slides/${_id}`, { isActive: !currentStatus })
    };

    const deleteSlide = (_id) => {
        if (confirm("Are you sure you want to delete this slide?")) {
            setSlides((prev) => prev.filter((item) => item._id !== _id));
        }
    };

    // Handle case where slides might be loading or undefined
    if (!slides) return <div className="p-10 text-center">Loading slides...</div>;

    return (
        <div className="py-8 bg-gray-50 min-h-screen">
            <Container>
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Slider Management</h2>
                        <p className="text-sm text-gray-500 mt-1">Manage your homepage hero images and content.</p>
                    </div>
                    <button className="bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-950 transition-all text-sm font-semibold shadow-sm flex items-center gap-2 cursor-pointer">
                        <Plus size={18} /> Add New Slide
                    </button>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Recipe / Content</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Author</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {slides.length > 0 ? (
                                    slides.map((item) => (
                                        <tr
                                            key={item._id}
                                            className={`transition-colors ${item.isActive ? "bg-white" : "bg-gray-50/50"}`}
                                        >
                                            {/* Info Column */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4 min-w-[280px]">
                                                    <div className="relative">
                                                        <img
                                                            src={item.link}
                                                            alt={item.title}
                                                            className={`w-14 h-14 rounded-lg object-cover shadow-sm transition-all ${item.isActive ? "opacity-100" : "opacity-40 grayscale"
                                                                }`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className={`font-bold text-sm transition-colors ${item.isActive ? "text-gray-900" : "text-gray-400"
                                                            }`}>
                                                            {item.title}
                                                        </h3>
                                                        <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                                                            <span className="flex items-center gap-1">
                                                                <Clock size={12} /> {item.time}
                                                            </span>
                                                            <span>•</span>
                                                            <span className="capitalize">
                                                                {item.type?.replace(/"/g, "")}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* FIXED DATE CELL */}
                                            <td className="px-2 py-4 text-sm">
                                                {formatCreatedAt(item.createdAt)}
                                            </td>

                                            {/* Status Toggle Column */}
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => toggleStatus(item._id)}
                                                    aria-label="Toggle Status"
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${item.isActive ? "bg-green-500" : "bg-gray-300"
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.isActive ? "translate-x-6" : "translate-x-1"
                                                            }`}
                                                    />
                                                </button>
                                            </td>

                                            {/* Author Column */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={item.author?.image || "https://ui-avatars.com/api/?name=" + item.author?.name}
                                                        className="w-7 h-7 rounded-full border border-gray-100"
                                                        alt="avatar"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">{item.author?.name}</span>
                                                </div>
                                            </td>

                                            {/* Date Column */}
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {new Date(item.createdAt).toLocaleDateString(undefined, {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </td>

                                            {/* Actions Column */}
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-1">
                                                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Pencil size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteSlide(item._id)}
                                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                                    >
                                                        <ExternalLink size={18} />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                                            No slides found. Click "Add New Slide" to get started.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeSlide;