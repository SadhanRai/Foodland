
"use client";
import axios from 'axios';
import { handleError, handleSuccess } from '../ui/UtilToast';
import React, { useEffect, useState } from 'react'

import { createContext } from 'react';
import { setegid } from 'process';
export const LoginMeContext = createContext(null);


const LoginMeProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const endpoint = "http://localhost:4000/api/admin/me";
    const fetchUser = async () => {

        try {
            setLoading(true);
            const res = await axios.get(endpoint, {
                withCredentials: true
            });
            const User = res.data; //axisos auto put aboject inside data so res.data provide full obj data
            console.log("what i fetche is ", User);
            setUser(User);
            setError(null);





        } catch (error) {
            console.error("An unexpected error occurred.");
            setError(error.message);
        }finally {
            setLoading(false);
        }



    }
    //----for  PATCH request to update user data---//
    const updateUser = async (updateData: any) => {
        try {
            let config = { withCredentials: true };

            // If updateData is FormData, set multipart header
            if (updateData instanceof FormData) {
                config = { ...config, headers: { "Content-Type": "multipart/form-data" } };
            }



            const res = await axios.patch(endpoint, updateData, config);
            setUser(prev => ({
                ...prev,
                ...res.data
            })); // Update the user state with the new data
            const successMsg = "User data updated successfully..";
            handleSuccess(successMsg);
            return res.data;

        } catch (error) {
            console.error("An unexpected error occurred while updating user data:", error);
            let errorMsg = "Something went wrong.";

            if (error.response) {
                // Backend responded with error status
                errorMsg = error.response.data?.message || errorMsg;
            } else if (error.request) {
                // Request sent but no response received
                errorMsg = "Server not responding. Please try again later.";
            } else {
                // Something else happened
                errorMsg = error.message;
            }

            handleError(errorMsg);
        }
    }
    useEffect(() => {


        fetchUser();

    }, [])


    return (

        <LoginMeContext.Provider value={{ user, updateUser, fetchUser, loading, error }}>
            {children}
        </LoginMeContext.Provider>
    )
}

export default LoginMeProvider