"use client";

import axios from "axios";
import React, { createContext } from "react";
import { useState, useEffect } from "react";
export const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ratelimit, setRatelimit] = useState(true)

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                console.log("fetch menu function workin");
                const res = await axios.get("http://localhost:4000/api/menu/data");
                console.log("what i fetche is ", res)


                const menus = res.data[0];
                setMenus(menus);
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
        fetchMenu();

    }, [])



    console.log("menu provider is runnig ");
    return (


        <MenuContext.Provider value={{ menus, loading, ratelimit, error }}>
            {children}
        </MenuContext.Provider>

    )
}

export default MenuProvider