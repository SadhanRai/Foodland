"use client";

import { useContext } from 'react';
import { SlideContext } from '../context/slideProvider';
export const useSlide = () => {
    const context = useContext(SlideContext);

    if (!context) {
        throw new Error("useSlide must be used inside Menuprovider");
    }
    return context;
}

