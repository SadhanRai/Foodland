"use client";
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export const SlideContext = createContext(null);



interface SlideProviderProps {
    children: ReactNode;
    isAdmin?: boolean;
}

const SlideProvider = ({ children, isAdmin = false }: SlideProviderProps) => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ratelimit, setRatelimit] = useState(true);

    useEffect(() => {
        const fetchSlide = async () => {
            const endpoint = isAdmin ? "/api/slide/data/admin" : "/api/slide/data";
            try {

                console.log("fetch Slide function workin");
                const res = await axios.get(`http://localhost:4000${endpoint}`);
                console.log("what i fetche is ", res)


                const Slide = res.data;
                setSlides(Slide);
                setRatelimit(false);




            } catch (error) {

                setError(error);
                setRatelimit(true);
                if (error.response?.status === 429) {
                    setRatelimit(true);
                } else {
                    console.error("An unexpected error occurred.");
                }

            } finally {
                setLoading(false);
            }
        }
        fetchSlide();

    }, [])



    console.log("Slide provider is runnig ", slides);
    return (


        <SlideContext.Provider value={{ slides, loading, ratelimit, error }}>
            {children}
        </SlideContext.Provider>

    )
}

export default SlideProvider