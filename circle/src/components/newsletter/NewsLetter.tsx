"use client"
import React from 'react';
import Image from 'next/image';
import Container from "../container/Container";

const NEWSLETTER_DATA = {
    title: "Deliciousness to your inbox",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    placeholder: "Your email address...",
    buttonText: "Subscribe",
    // Update these with your Cloudinary links
    leftFoodImg: "https://res.cloudinary.com/df1xdotaq/image/upload/v123/newsletter/left-veg.png",
    rightFoodImg: "https://res.cloudinary.com/df1xdotaq/image/upload/v123/newsletter/right-salad.png"
};

const Newsletter = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                {/* Main Blue Card */}
                <div className="relative bg-[#E7FAFE] rounded-[40px] px-6 py-16 md:py-24 overflow-hidden text-center">

                    {/* Decorative Floating Image - Left (Hidden on mobile for better focus) */}
                    <div className="hidden lg:block absolute left-0 bottom-0 w-[280px] h-[220px]">
                        <Image
                            src={NEWSLETTER_DATA.leftFoodImg}
                            alt="Fresh vegetables"
                            fill
                            className="object-contain object-left-bottom"
                        />
                    </div>

                    {/* Decorative Floating Image - Right */}
                    <div className="hidden lg:block absolute right-0 bottom-0 w-[300px] h-[250px]">
                        <Image
                            src={NEWSLETTER_DATA.rightFoodImg}
                            alt="Salad bowl"
                            fill
                            className="object-contain object-right-bottom"
                        />
                    </div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                            {NEWSLETTER_DATA.title}
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base mb-10 px-4 md:px-10 leading-relaxed">
                            {NEWSLETTER_DATA.description}
                        </p>

                        {/* Subscription Form */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-2xl md:rounded-[24px] shadow-sm max-w-lg mx-auto"
                        >
                            <input
                                type="email"
                                placeholder={NEWSLETTER_DATA.placeholder}
                                className="w-full bg-transparent px-6 py-4 outline-none text-gray-700 placeholder:text-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-xl md:rounded-[18px] font-semibold hover:bg-gray-800 transition-all active:scale-95 whitespace-nowrap"
                            >
                                {NEWSLETTER_DATA.buttonText}
                            </button>
                        </form>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Newsletter;