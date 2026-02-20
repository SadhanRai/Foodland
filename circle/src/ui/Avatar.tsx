"use client ";
import React from 'react'
import Image from 'next/image';

const Avatar = ({ user, image, size = 40 }) => {
    if (!user) return null;
    const getInitials = (name) => {

        if (!name) return "";

        const words = name.trim().split(" ");
        if (words.length === 1) {
            // words[0] = "Sadhan"
            // words[0][0] = "S"
            return words[0].charAt(0).toUpperCase();
        }

        // words = ["Sadhan", "Rai"] total = 2//
        const first = words[0][0];
        const last = words[words.length - 1][0];
        return (first + last).toUpperCase();
    };

    const initials = getInitials(user.name);

    const generateColor = (name) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = `hsl(${hash % 360}, 70%, 50%)`;
        return color;
    }
    const bgColor = generateColor(user.name);


    if (image || user.avatar) {
        return (
            <div
                className="relative overflow-hidden rounded-full"
                style={{ width: size, height: size }}
            >
                <Image
                    src={image || user.avatar}
                    alt="User Avatar"
                    fill
                    className="object-cover"
                />
            </div>
        );

    }









    return (
        <div
            style={{
                width: size,
                height: size,
                backgroundColor: bgColor,
            }}
            className="rounded-full flex items-center justify-center  text-white font-semibold"
        >
            {initials}
        </div>

    )
}

export default Avatar