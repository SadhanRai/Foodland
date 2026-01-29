"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { handleError, handleSuccess } from '../../../ui/UtilToast';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    if (!email || !password) {
      return handleError("email and password both required");
    }

    try {
      const url = "http://localhost:4000/api/admin/login";
      console.log("we are at try function ")
      const response = await fetch(url, {
        method: "POST",


        headers: {
          'Content-Type': 'application/json'

        },
        credentials: 'include',

        body: JSON.stringify({ email, password })
      });

      const result = await response.json();
      console.log("result after login is ", result);

      if (!response.ok) {
        console.log("response is not oky", result);
        const erroMsg = (Array.isArray(result) && result.length) ? result[0] : result.errors?.[0] || result.message || result;
        return handleError(erroMsg);
      }


      // Success

      localStorage.setItem("token", result.token);
      localStorage.setItem("LoggedInUser", result.username);


      handleSuccess("welcome back you have logedin", result.token);
      setTimeout(() => {
        router.push('/admin')
      }, 500)


    } catch (error) {
      handleError("Network error. Try again.");
      console.log("failed errror is ", error);
    }



  };
  console.log("email is ", email);
  console.log("password is ", password);



  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-10 shadow-2xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-normal lobster mb-2">Foodieland.</h1>
        <p className="text-zinc-500 text-sm ">Admin Control Center</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-bold mb-2 ml-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition-all bg-zinc-50"
            placeholder="admin@foodieland.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2 ml-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition-all bg-zinc-50"
            placeholder="••••••••"

          />
        </div>

        <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg">
          Sign In
        </button>
      </form>

      <div className="mt-8 text-center border-t border-zinc-100 pt-6">
        <Link href="/admin/signup" className="text-zinc-400 text-xs uppercase tracking-widest font-bold hover:text-black transition-colors">
          ← Dont have Account? signup
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;