
"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { createContext } from 'react';
export const LoginMeContext = createContext(null);

const LoginMeProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {

            const endpoint = "http://localhost:4000/api/admin/me";
            try {
                const res = await axios.get(endpoint, {
                    withCredentials: true
                });
                const User = res.data;
                console.log("what i fetche is ", User);
                setUser(User);





            } catch (error) {
                console.error("An unexpected error occurred.");
            }


        }

        fetchUser();

    }, [])


    return (

        <LoginMeContext.Provider value={{ user }}>
            {children}
        </LoginMeContext.Provider>
    )
}

export default LoginMeProvider