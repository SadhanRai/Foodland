import React from 'react';
import Image from 'next/image';
import Container from "../container/Container";

const INSTAGRAM_DATA = {
    header: "Check out @foodieland on Instagram",
    subHeader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.",
    buttonText: "Visit Our Instagram",
    // In a real app, these would be your Cloudinary URLs
    posts: [
        { id: 1, src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", alt: "Salad post" },
        { id: 2, src: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445", alt: "Pancake post" },
        { id: 3, src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", alt: "Veggie post" },
        { id: 4, src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55", alt: "Meat post" },
    ]
};

const InstagramSection = () => {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50/30">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {INSTAGRAM_DATA.header}
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        {INSTAGRAM_DATA.subHeader}
                    </p>
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {INSTAGRAM_DATA.posts.map((post) => (
                        <div key={post.id} className="relative group overflow-hidden  aspect-square shadow-sm">
                            <Image
                                src={post.src}
                                alt={post.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-3xl">📷</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visit Button */}
                <div className="flex justify-center">
                    <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                        {INSTAGRAM_DATA.buttonText}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default InstagramSection;