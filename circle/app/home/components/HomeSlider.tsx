"use client"
import Image from "next/image";
import { FaBookDead } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdLocalDining } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { useSlide } from "@/app/hooks/useSlide";
import { format } from "date-fns";




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from "../components/Container"



const AutoSlider = () => {
    // Dummy dataset
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

    const { slides } = useSlide();

    console.log("slidebarhas", slides);
    const slidebar = [
        {
            id: 1,
            category: "Hot Recipes",
            title: "Spicy delicious Chicken wings",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident quis itaque velit delectus qui quisquam.",
            time: "30 M",
            type: "Chicken",
            author: "John Doe",
            date: "15 March 2025",
            authorImage: "https://cdn.pfps.gg/pfps/8333-funny-indian.png",
            image:
                "https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg",
            link: "https://www.example.com/recipe1",
        },
        {
            id: 2,
            category: "Popular",
            title: "Creamy Pasta Alfredo",
            description:
                "Pasta with creamy sauce and herbs, perfect for dinner or lunch.",
            time: "25 M",
            type: "Pasta",
            author: "Jane Smith",
            date: "20 March 2025",
            authorImage: "https://cdn.pfps.gg/pfps/8333-funny-indian.png",
            image:
                "https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg",
            link: "https://www.example.com/recipe2",
        },
        // Add more objects as needed
        {
            id: 3,
            category: "Popular",
            title: "Creamy Pasta Alfredo",
            description:
                "Pasta with creamy sauce and herbs, perfect for dinner or lunch.",
            time: "25 M",
            type: "Pasta",
            author: "Jane Smith",
            date: "20 March 2025",
            authorImage: "https://cdn.pfps.gg/pfps/8333-funny-indian.png",
            image:
                "https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg",
            link: "https://www.example.com/recipe2",
        },
        // Add more objects as needed
    ];

    return (
        <>
            <Swiper
                slidesPerView={1.1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper flex justify-center items-center"
            >

                <div className="items-center justify-center flex">




                    <div className="h-[700px] gap-8 mt-8 flex px-4 sm:px-6   ">






                        {slides.map((item) => (
                            <SwiperSlide key={item._id} >
                                <div
                                    key={item.id}
                                    className="bg-[#E7FAFE] h-[195px] lg:h-[495px] md:h-[350px] w-full min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:max-w-[1280px] flex flex-shrink-0 rounded-[30px] lg:rounded-[50px] overflow-hidden mt-10"
                                >
                                    {/* Left Side Content */}
                                    <div className="w-1/2 flex flex-col items-start justify-start p-3 sm:p-4 lg:p-6 space-y-1 sm:space-y-2">
                                        {/* Top Button */}
                                        <button className="bg-white rounded-xl lg:rounded-2xl h-7 sm:h-8 lg:h-10 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-3 flex items-center gap-1 sm:gap-1.5 lg:gap-2 text-[10px] sm:text-xs lg:text-sm font-medium shadow-md">
                                            <FaBookDead size={14} className="sm:!w-4 sm:!h-4 lg:!w-5 lg:!h-5" />
                                            <p className="hidden lg:block text-[10px] lg:text-sm">{item.category}</p>
                                        </button>

                                        {/* Title */}
                                        <h1 className="font-semibold text-sm sm:text-base lg:text-[64px] leading-4 sm:leading-6 lg:leading-[80px] line-clamp-2">
                                            {item.title}
                                        </h1>

                                        {/* Paragraph */}
                                        <p className="font-normal text-[10px] sm:text-xs lg:text-[16px] pt-1 sm:pt-2 lg:pt-2 line-clamp-2">
                                            {item.description}
                                        </p>

                                        {/* Tags (Time & Type) */}
                                        <div className="gap-2 sm:gap-3 flex mt-1 sm:mt-2 lg:mt-4">
                                            <button className="bg-gray-200 h-4 py-2 lg:px-4 lg:py-6 rounded-2xl flex items-center gap-1 sm:gap-2 lg:gap-2 text-[10px] sm:text-xs lg:text-[14px]">
                                                <IoIosTime size={14} className="sm:!w-4 sm:!h-4 lg:!w-5 lg:!h-5" /> {item.time}
                                            </button>
                                            <button className="bg-gray-200 h-4 py-2 lg:px-6 lg:py-6 rounded-2xl flex items-center gap-1 sm:gap-2 lg:gap-2 text-[10px] sm:text-xs lg:text-[14px]">
                                                <MdLocalDining size={14} className="sm:!w-4 sm:!h-4 lg:!w-5 lg:!h-5" /> {item.type}
                                            </button>
                                        </div>

                                        {/* Author & View Button */}
                                        <div className="flex items-center justify-between w-full mt-2 sm:mt-3 lg:mt-4">
                                            {/* Author */}
                                            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                                <div className="w-8 h-8 sm:w-11 sm:h-11 lg:w-16 lg:h-16 flex-shrink-0">
                                                    <Image
                                                        src={item.author?.image || "https://ui-avatars.com/api/?name=" + item.author?.name}
                                                        alt="author"
                                                        width={500}
                                                        height={500}
                                                        className="w-full h-full rounded-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="font-medium text-[10px] sm:text-xs lg:text-[20px] truncate">
                                                        {item.author.name}
                                                    </span>
                                                    <span className="text-[8px] sm:text-[10px] lg:text-[15px] text-gray-500 truncate">
                                                        <span>
                                                            {slides.length > 0 && formatCreatedAt(slides[0].createdAt)}
                                                        </span>


                                                    </span>
                                                </div>
                                            </div>

                                            {/* View Recipe Button */}
                                            <button
                                                onClick={() => window.open(item.link, "_blank")}
                                                className="bg-black cursor-pointer text-white hidden lg:flex items-center gap-1 sm:gap-2 lg:gap-3 text-[5px] sm:text-xs lg:text-xl py-1 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-6 rounded-xl whitespace-nowrap flex-shrink-0"
                                            >
                                                View Recipe
                                                <FaCirclePlay className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 shrink-0" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right Side Image */}
                                    <div className="w-1/2 h-full">
                                        <img
                                            className="w-full h-full object-cover rounded-tr-[3] rounded-br-[30px]"
                                            src={item.link}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div >
                </div>

            </Swiper >
        </>
    );
};

export default AutoSlider;
