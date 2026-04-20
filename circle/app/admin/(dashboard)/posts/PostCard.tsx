"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

const PostCard = ({ post }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

            <Image
                width={500}
                height={300}
                src={post.link || "/fallback.jpg"}
                alt="post"
                className="w-full h-44 object-cover"
            />

            <div className="p-4">
                <h3 className="font-semibold mb-2">{post.title}</h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Image
                        src={post.author?.image || "/avatar.png"}
                        width={24}
                        height={24}
                        alt="author"
                        className="rounded-full"
                    />
                    {post.author?.name}
                </div>

                <div className="flex gap-3">
                    <button className="text-blue-600 flex items-center gap-1">
                        <Pencil size={16} /> Edit
                    </button>
                    <button className="text-red-600 flex items-center gap-1">
                        <Trash2 size={16} /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;