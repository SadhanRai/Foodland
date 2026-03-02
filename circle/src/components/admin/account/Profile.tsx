import React, { useRef, useState } from "react";
import Avatar from "@/src/ui/Avatar";
import { Camera } from "lucide-react";
import { useUser } from "@/src/hooks/useUser";
import { handleError, handleSuccess } from "@/src/ui/UtilToast";

const Profile = () => {
    const { user, updateUser, loading, error } = useUser();
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // ------------------- Skeletons -------------------
    const ProfileSkeleton = () => (
        <div className="flex flex-col items-center gap-2 animate-pulse">
            <div className="w-24 h-24 rounded-full bg-gray-300" />
            <div className="h-5 w-32 bg-gray-300 rounded" />
            <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
    );

    // ------------------- Handle File Upload -------------------
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // 1️⃣ Validate
        if (file.size > 2 * 1024 * 1024) {
            return handleError("File too large (Max 2MB)");
        }

        // 2️⃣ Show local preview immediately
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);

        // 3️⃣ Upload to backend
        const formData = new FormData();
        formData.append("profileImage", file);

        try {
            await updateUser(formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
        } catch (err) {
            console.error("Error uploading image:", err);
            handleError("Failed to upload image. Please try again.");
            setPreviewImage(null); // Revert preview on error
        }
    };

    // ------------------- Trigger Hidden File Input -------------------
    const triggerFileInput = () => fileInputRef.current?.click();

    // ------------------- Loading / Error Handling -------------------
    if (loading) return <ProfileSkeleton />;
    if (error)
        return <p className="text-red-500 text-center">Error loading profile: {error}</p>;

    // ------------------- Main Profile UI -------------------
    return (
        <div className="flex flex-col items-center">
            <div className="relative inline-block mb-4">
                {/* Avatar */}
                <Avatar
                    className="ring-4 ring-slate-50 shadow-lg rounded-full"
                    user={user} // pass user object
                    image={previewImage || user?.profileImage} // show preview first
                    size={100}
                />

                {/* Online Indicator */}
                <div
                    className="absolute bottom-0 right-0 p-1.5 bg-green-500 border-2 border-white rounded-full"
                    title="Online"
                />

                {/* Camera Button */}
                <button
                    onClick={triggerFileInput}
                    className="absolute bottom-0 right-0 p-1.5 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition cursor-pointer"
                    title="Change profile picture"
                >
                    <Camera className="w-4 h-4" />
                </button>

                {/* Hidden File Input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                />
            </div>

            {/* Name */}
            <h2 className="font-bold text-slate-900 text-lg leading-tight">
                {user?.name || <span className="inline-block w-24 h-5 bg-gray-300 animate-pulse rounded"></span>}
            </h2>

            {/* Plan / Role */}
            {/* <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                {user?.plan || <span className="inline-block w-16 h-4 bg-gray-200 animate-pulse rounded"></span>}
            </p> */}
        </div>
    );
};

export default Profile;