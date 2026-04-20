// app/post/page.jsx (or your route)

import Container from "@/src/components/container/Container";
import { Pencil, Trash2, FilePlus } from "lucide-react";
import Image from "next/image";
import PostCard from "./PostCard";

// 🔥 Fetch with caching (ISR)
const getPosts = async () => {
    const res = await fetch("http://localhost:4000/api/slide/data/admin", {
        next: { revalidate: 60 }, // cache for 60 sec
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
};

const Post = async () => {
    const posts = await getPosts();

    return (
        <div className="py-6 min-h-screen bg-gray-50">
            <Container>

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Post Management</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Manage your posts, edit or remove content.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg">
                        <FilePlus />
                        Create Post
                    </button>
                </div>

                {/* Posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post._id || post.id} post={post} />
                    ))}
                </div>

            </Container>
        </div>
    );
};

export default Post;