import Avatar from '@/src/ui/Avatar'
import { Camera } from 'lucide-react'
import React, { useRef, useState, } from 'react'
import { useUser } from '@/src/hooks/useUser';
import { handleError, handleSuccess } from '@/src/ui/UtilToast';



const Profile = () => {
    const user = useUser();
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null); // Ref for hidden input

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // 1. Validation (Optional but Pro)
            if (file.size > 2 * 1024 * 1024) return handleError("File too large (Max 2MB)");

            // 2. Create local URL for instant preview
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    console.log("user image url ", previewImage)


    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>




            <div className="relative inline-block mb-4">
                <Avatar className="ring-4 ring-slate-50 shadow-lg rounded-full" user={user?.user} image={previewImage} size={100} />
                <div className="absolute bottom-0 right-0 p-1.5 bg-green-500 border-2 border-white rounded-full" title="Online" />
                <button onClick={triggerFileInput} className="absolute bottom-0 right-0 p-1.5 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition cursor-pointer">
                    <Camera className="w-4 h-4" />
                </button>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                />
            </div>
            <h2 className="font-bold text-slate-900 leading-tight">{user?.user?.name || "User"}</h2>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Free Plan</p>
        </div>
    )
}

export default Profile