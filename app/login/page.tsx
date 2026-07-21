"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { signInWithGoogle } from "@/lib/auth";

export default function LoginPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    try {

      setLoading(true);

      const result = await signInWithGoogle();

      if (result.user.email !== "theaimex02@gmail.com") {

        alert("Access Denied");

        return;

      }

      router.push("/admin");

    } catch (error) {

      console.error(error);

      alert("Login Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#050816] p-6">

      <motion.div

        initial={{
          opacity: 0,
          scale: .9,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 text-white backdrop-blur-xl"

      >

        <h1 className="text-center text-4xl font-black">

          AimEx Admin

        </h1>

        <p className="mt-3 text-center text-slate-400">

          Sign in with your administrator account.

        </p>

        <button

          onClick={handleLogin}

          disabled={loading}

          className="mt-10 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold transition hover:scale-[1.02]"

        >

          {loading ? "Signing In..." : "Continue with Google"}

        </button>

      </motion.div>

    </div>

  );

}