import React from 'react';
import Image from 'next/image';
import Container from "../container/Container";

// Move this to your feature-specific constant folder later
const CHEF_SECTION_DATA = {
    title: "Everyone can be a chef in their own kitchen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.",
    buttonText: "Learn More",
    imageSrc: "https://res.cloudinary.com/df1xdotaq/image/upload/v1767209644/slides/jh2synt7hvppm3a1efgu.png",
    imageAlt: "Professional chef pointing to a healthy salad"
};

const Chef = () => {
    return (
        <section className="w-full bg-white overflow-hidden py-12 md:py-0">
            <Container>
                {/* Main Wrapper: Fixed height of 597px for desktop */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:h-[507px]">

                    {/* Left Side: Content */}
                    <div className="flex-1 flex flex-col justify-center items-start text-left order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 max-w-md inter">
                            {CHEF_SECTION_DATA.title}
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                            {CHEF_SECTION_DATA.description}
                        </p>
                        <button className="bg-black text-white px-10 py-3.5 rounded-xl font-semibold shadow-md hover:bg-gray-800 transition-all active:scale-95">
                            {CHEF_SECTION_DATA.buttonText}
                        </button>
                    </div>

                    {/* Right Side: Optimized Next.js Image */}
                    <div className="flex-1 w-full h-full relative order-1 md:order-2">
                        <div className="relative w-full h-[350px] md:h-full">
                            <Image
                                src={CHEF_SECTION_DATA.imageSrc}
                                alt={CHEF_SECTION_DATA.imageAlt}
                                fill // Fills the parent div
                                className="object-contain" // Keeps aspect ratio without cropping
                                priority // Ensures this loads fast as it's a main section
                                sizes="(max-width: 768px) 100vw, 50vw" // Helps Next.js serve the right size
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Chef;