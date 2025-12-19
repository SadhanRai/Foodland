"use client";

const Form = ({
    title = "Form",
    showMenuItems = true,
    showSocials = true,
    submitText = "Save",
    variant = "default",
}) => {
    return (
        <form className="space-y-6">

            {/* Title */}
            <h3 className="text-lg font-semibold">{title}</h3>

            {/* Brand Name */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Brand Name
                </label>
                <input
                    type="text"
                    placeholder="Brand Name"
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            {/* Menu Items */}
            {showMenuItems && (
                <div>
                    <h4 className="font-medium mb-2">Menu Items</h4>
                    <div className="flex gap-2">
                        <input className="flex-1 border px-3 py-2 rounded" placeholder="Label" />
                        <input className="flex-1 border px-3 py-2 rounded" placeholder="Href" />
                    </div>
                </div>
            )}

            {/* Socials */}
            {showSocials && (
                <div>
                    <h4 className="font-medium mb-2">Social Links</h4>
                    <div className="flex gap-2">
                        <input className="flex-1 border px-3 py-2 rounded" placeholder="Icon" />
                        <input className="flex-1 border px-3 py-2 rounded" placeholder="Href" />
                    </div>
                </div>
            )}

            {/* Buttons */}
            <div
                className={`flex justify-end p-2  ${variant === "compact" ? "gap-2" : "gap-4"
                    }`}
            >
                <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded cursor-poi"
                >
                    {submitText}
                </button>
            </div>
        </form>
    );
};

export default Form;
