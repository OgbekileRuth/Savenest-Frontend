// src/app/login/page.tsx
'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import apiManager from "../../../apiManager";
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loading-icons'

export default function SigninPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

 const loginAction = async (email: string, password: string) => {
   const result = await apiManager('/api/auth/login', {
     method: 'POST',
      data: {
       email,
        password
     }
   })
    setLoading(false)
   return result
 }


  const handleLogin = (email: string, password: string) => {
    // add auth validation here
    setLoading(true);

     //Call API
    loginAction(email, password)
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

   useEffect(() => {
    if (success) {
      // Call Toastify to show success message
   toast.success("Login successful!");

     setTimeout(() => {
        // Redirect to dashboard after login
       router.push("/dashboard");
       setLoading(false); // Reset success state
     }, 700);
   }

    if (error) {
      // Call Toastify to show wrong message
     toast.error("Login failed!");
     setError(null); // Reset error state
    }

  }, [success, error, router]);


  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      {/* TOP: Navbar row / logo */}
      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden w-full max-w-7xl py-2 flex flex-col lg:flex-row items-center gap-8">
          {/* LEFT: Logo + Name */}
          <div className="flex-1 w-full flex justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Logo-blue2.png"
                alt="Logo"
                height={40}
                width={40}
              />
              <span className="text-xl font-bold text-[#1F299C] font-[Poppins]">
                Savenest
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Login section */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        {/* This wrapper reserves full remaining viewport height minus navbar, and centers content */}
        <div className="w-full max-w-7xl min-h-[calc(100dvh-80px)] flex items-center justify-center py-8">
          <div className="w-full rounded-3xl flex flex-col lg:flex-row items-center gap-10 md:gap-20">
            {/* Left side */}
            <div className="w-full flex-1 md:w-[60%] flex flex-col items-start justify-center p-6 md:p-10 relative">
              <h1 className="text-4xl md:text-6xl font-black text-[#1F299C] font-grotesk">
                Login to Your Nest
              </h1>

              <p className="mt-4 md:mt-6 text-base md:text-2xl font-black text-black font-grotesk max-w-lg">
                Fill in all your details to log in to your account.
              </p>

              <ul className="mt-4 md:mt-6 space-y-3 text-sm md:text-lg text-gray-900 max-w-md font-black font-grotesk">
                <li className="flex items-start">
                  <span className="mr-3 text-[#1F299C] font-bold">✓</span>
                  <span>Fast setup — get started in less than a minute.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#1F299C] font-bold">✓</span>
                  <span>Secure & private — we encrypt your data end-to-end.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#1F299C] font-bold">✓</span>
                  <span>Personalized recommendations tailored to your needs.</span>
                </li>
              </ul>

              <div className="mt-5 md:mt-6">
                <Link
                  href="/signup"
                  className="text-sm md:text-md text-[#1F299C] font-bold hover:underline font-grotesk"
                >
                  Don&apos;t have an account? <br />
                  Create one in 60 seconds
                </Link>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full flex-1 md:w-[80%] flex items-center justify-center bg-white">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-xl border border-[#0466C8] rounded-xl p-6 md:p-8 shadow-md m-4"
              >
                <div className="max-w-lg flex flex-col gap-2 lg:py-2 mb-4 md:mb-5">
                  <p className="text-base md:text-2xl font-black text-[#1F299C] font-grotesk">
                    Enter Your Details
                  </p>
                </div>

                {/* Email input */}
                <div className="mb-4 md:mb-5 lg:py-1 md:lg:py-3">
                  <input
                    type="email"
                    placeholder="janedoe@gmail.com"
                    className="w-full p-4 md:p-5 border rounded-xl bg-[#F3F4F6] border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password input */}
                <div className="mb-3 lg:py-1 md:lg:py-3">
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full p-4 md:p-5 border rounded-xl bg-[#F3F4F6] border-[#343fb4] focus:outline-none focus:ring-2 focus:ring-[#1F299C] focus:border-transparent"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Login button */}
                <button
                  onClick={() => handleLogin(email, password)}
                  className="w-full bg-[#1F299C] hover:bg-[#343fb4] text-white font-bold py-3 rounded-full transition mt-4 md:mt-5 disabled:opacity-60"
                  disabled={loading || !email || !password}
                >
                  {loading ? (
                    <span
                      className="w-5 mx-auto h-full justify-center flex"
                      style={{ height: "calc(3vh)" }}
                    >
                      <TailSpin stroke="#fff" strokeWidth="4" color="#fff" />
                    </span>
                  ) : (
                    "Login"
                  )}
                </button>

                {/* Forgot password */}
                <div className="text-right mt-3">
                  <Link
                    href="/forgot-password"
                    className="text-sm font-black text-[#0466C8] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

