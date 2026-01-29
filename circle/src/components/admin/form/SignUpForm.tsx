"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { handleError, handleSuccess } from '../../../ui/UtilToast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',

    });
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submit clicked")
        if (!formData.password || !formData.email || !formData.name) {

            return handleError("password, email or fullname is required to fill")
        }
        if (formData.password !== confirmPassword) {
            // alert("Passwords do not match!");
            return handleError("password did not matched !!!")

        }
        try {
            const url = "http://localhost:4000/api/admin/signup";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log("after submit result", result);
            //error printing

            if (!response.ok) {

                const errorMsg =
                    Array.isArray(result.errors) && result.errors.length > 0
                        ? result.errors[0]
                        : result.message || "Something went wrong";

                handleError(errorMsg);
                return;
            }

            handleSuccess("Account created successfully 🎉");
            setTimeout(() => {
                router.push('/admin/login')
            }, 1000)
            // clearing up the save useState
            setFormData({ name: "", email: "", password: "" });
            setConfirmPassword("");



        } catch (error) {
            console.log("signup Failed", error)
            return handleError(error);

        }
        console.log("Registering Admin:", formData);
    };


    return (
        <div className="w-full max-w-md bg-white rounded-3xl p-10 shadow-2xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-normal lobster mb-2">Foodieland.</h1>
                <p className="text-zinc-500 text-sm italic">Create Admin Account</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1">Full Name</label>
                    <input
                        type="text"
                        className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition-all bg-zinc-50"
                        placeholder="Sadhan Rai"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition-all bg-zinc-50"
                        placeholder="admin@foodieland.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1">Password</label>
                    <div className="relative flex items-center">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full px-5 py-3 pr-12 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition-all bg-zinc-50"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 flex items-center justify-center text-zinc-500 hover:text-black transition-colors"
                        >
                            {/* Logic: If showing password, show Eye (to hide). If hidden, show EyeSlash (to reveal) */}
                            {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1">Confirm Password</label>
                    <div className="relative flex items-center">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full px-5 py-3 pr-12 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition-all bg-zinc-50"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 flex items-center justify-center text-zinc-500 hover:text-black transition-colors"
                        >
                            {/* Logic: Same for confirm password */}
                            {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                        </button>
                    </div>
                </div>

                <button type="submit" className="w-full bg-black text-white py-4 mt-2 rounded-xl font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg">
                    Create Account
                </button>
            </form>

            <div className="mt-8 text-center border-t border-zinc-100 pt-6">
                <p className="text-zinc-500 text-sm">
                    Already have an account?
                    <Link href="/admin/login" className="ml-2 text-black font-bold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;