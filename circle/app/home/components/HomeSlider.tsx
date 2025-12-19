
import Image from "next/image";
import { FaBookDead } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdLocalDining } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import Container from "./Container";




const AutoSlider = () => {


    return (
        <div className=" h-[500px] gap-4 mt-8  flex px-6 justify-center bg-blue-300 overflow-x-scroll  ">
            <Container>

                <div className="bg-[#E7FAFE] h-[495px] w-full min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:max-w-[1280px] flex  flex-shrink-0 rounded-[50px] overflow-hidden ">
                    <div className="w-1/2 flex flex-col items-start justify-start p-10 space-y-2">
                        {/* Button at top-left */}
                        <button className="bg-white rounded-4xl h-10 px-4 py-3 flex items-center gap-2 text-sm font-medium shadow-md">
                            <FaBookDead />
                            Hot Recipes
                        </button>

                        {/* Title */}
                        <h1 className="font-semibold text-[64px] leading-20 ">

                            Spicy delicious Chicken wings
                        </h1>

                        {/* Paragraph */}
                        <p className="font-regular text-[16px]  pt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi
                            consectetur adipisicing elit. Obcaecati modi


                        </p>
                        <div className="gap-4 flex mt-4">

                            <button className="bg-gray-200 px-4 py-3 rounded-4xl items-center flex gap-2"><IoIosTime size={25} />
                                3o Minutes</button>
                            <button className="bg-gray-200  px-6 py-1 rounded-4xl flex items-center gap-2"> <MdLocalDining size={25} />Chicken</button>
                        </div>

                        <div className="flex items-center justify-between mt-8 w-full" >
                            {/* Left side: profile + name/date */}
                            <div className="flex items-start">
                                <img
                                    src="https://cdn.pfps.gg/pfps/8333-funny-indian.png"
                                    alt="profile"
                                    className="h-[50px] w-[50px] rounded-full"
                                />

                                <div className="ml-4 flex flex-col">
                                    <span className="font-medium">John Doe</span>
                                    <span className="text-sm text-gray-500">15 march 2025</span>
                                </div>
                            </div>

                            {/* Right side: button */}
                            <button className="bg-black py-3 px-8 text-white rounded-xl flex items-center gap-2">
                                View Recipe
                                <FaCirclePlay size={25} />

                            </button>
                        </div>




                    </div>


                    <div className="w-1/2 h-full">
                        <img
                            className="w-full h-full object-cover rounded-tr-[50px] rounded-br-[50px]"
                            src="https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/4:3/w_3748,h_2811,c_limit/ba-recipe-pasta-al-limone.jpg"
                            alt=""
                        />
                    </div>
                </div>

            </Container>


        </div >

    )
}

export default AutoSlider;