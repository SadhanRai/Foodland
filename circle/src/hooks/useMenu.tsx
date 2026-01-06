"use client";
import React from 'react'
import { useContext } from 'react';
import { MenuContext } from '../context/menuProvider';
export const useMenu = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error("useMenu must be used inside Menuprovider");
    }
    return context;
}

