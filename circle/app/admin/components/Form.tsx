"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface MenuItem {
    label: string;
    href: string;
}

interface SocialItem {
    icon: string;
    href: string;
}

interface FormProps {
    title?: string;
    showMenuItems?: boolean;
    showSocials?: boolean;
    submitText?: string;
    initialData?: {
        brandName: string;
        items: MenuItem[];
        socials: SocialItem[];
    };
}

const Form: React.FC<FormProps> = ({
    title = "Form",
    showMenuItems = true,
    showSocials = true,
    submitText = "Save Menu",
    initialData = null,
}) => {
    const [brandName, setBrandName] = useState("");
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [socials, setSocials] = useState<SocialItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [menuId, setMenuId] = useState(null);

    // Load initial data if editing
    useEffect(() => {
        if (initialData) {
            setBrandName(initialData.brandName || "");
            setMenuItems(initialData.items || []);
            setSocials(initialData.socials || []);
            setMenuId(initialData._id || (null));

        }
    }, [initialData]);


    // console.log("menu id from form", menuId);

    // Handlers
    const handleMenuChange = (index: number, field: keyof MenuItem, value: string) => {
        const updated = [...menuItems];
        updated[index][field] = value;
        setMenuItems(updated);
    };

    const handleSocialChange = (index: number, field: keyof SocialItem, value: string) => {
        const updated = [...socials];
        updated[index][field] = value;
        setSocials(updated);
    };

    const addMenuItem = () => setMenuItems([...menuItems, { label: "", href: "" }]);
    const removeMenuItem = (index: number) => {
        const updated = [...menuItems];
        updated.splice(index, 1);
        setMenuItems(updated);
    };

    const addSocial = () => setSocials([...socials, { icon: "", href: "" }]);
    const removeSocial = (index: number) => {
        const updated = [...socials];
        updated.splice(index, 1);
        setSocials(updated);
    };

    // const menuId = menus?.[0]?._id;
    // console.log("menu id from form", menuId);
    // Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!brandName.trim()) {
            toast.error("Brand name is required!");
            return;
        }

        const filteredMenuItems = menuItems.filter(item => item.label && item.href);
        const filteredSocials = socials.filter(item => item.icon && item.href);

        const payload = {
            Bn: brandName,        // backend expects Bn
            It: filteredMenuItems, // backend expects It
            Sc: filteredSocials,   // backend expects Sc
        };

        console.log("Payload being sent:", payload);

        try {
            setLoading(true);
            const response = await axios.put(`http://localhost:4000/api/menu/data/${menuId}`, payload);
            toast.success(response.data.message || "Menu created successfully!");

            // Reset form after submit
            setBrandName("");
            setMenuItems([]);
            setSocials([]);
        } catch (error) {
            console.error("Error creating menu:", error);
            toast.error("Failed to create menu!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium mb-1">Brand Name</label>
                <input
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Brand Name"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    required
                />
            </div>

            {/* Menu Items */}
            {showMenuItems && (
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Menu Items</h4>
                        <button type="button" onClick={addMenuItem} className="text-sm px-2 py-1 border rounded">
                            + Add
                        </button>
                    </div>
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex gap-2 items-center mb-2">
                            <input
                                value={item.label}
                                onChange={(e) => handleMenuChange(index, "label", e.target.value)}
                                placeholder="Label"
                                className="flex-1 border border-gray-300 px-3 py-2 rounded"
                            />
                            <input
                                value={item.href}
                                onChange={(e) => handleMenuChange(index, "href", e.target.value)}
                                placeholder="Href"
                                className="flex-1 border border-gray-300 px-3 py-2 rounded"
                            />
                            <button type="button" onClick={() => removeMenuItem(index)} className="px-2 py-1 bg-red-500 text-white rounded">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Social Links */}
            {showSocials && (
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Social Links</h4>
                        <button type="button" onClick={addSocial} className="text-sm px-2 py-1 border rounded">
                            + Add
                        </button>
                    </div>
                    {socials.map((social, index) => (
                        <div key={index} className="flex gap-2 items-center mb-2">
                            <input
                                value={social.icon}
                                onChange={(e) => handleSocialChange(index, "icon", e.target.value)}
                                placeholder="Icon"
                                className="flex-1 border border-gray-300 px-3 py-2 rounded"
                            />
                            <input
                                value={social.href}
                                onChange={(e) => handleSocialChange(index, "href", e.target.value)}
                                placeholder="Href"
                                className="flex-1 border border-gray-300 px-3 py-2 rounded"
                            />
                            <button type="button" onClick={() => removeSocial(index)} className="px-2 py-1 bg-red-500 text-white rounded">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={loading}
                    className={`px-5 py-2 rounded text-white ${loading ? "bg-gray-500" : "bg-black"}`}
                >
                    {loading ? "Submitting..." : submitText}
                </button>
            </div>
        </form>
    );
};

export default Form;
