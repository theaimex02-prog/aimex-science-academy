"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Laptop,
  FlaskConical,
} from "lucide-react";

export default function CareerAnimation() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex h-[420px] flex-col items-center justify-center rounded-3xl bg-[#0F172A] px-6">

      {/* Student */}

      <motion.div
        animate={{
          scale: show ? 1.08 : 1,
          y: show ? -5 : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <GraduationCap
          size={80}
          className="text-cyan-400"
        />
      </motion.div>

      <h2 className="mt-5 text-3xl font-bold text-white">
        Your Future Starts Here
      </h2>

      <p className="mt-2 text-center text-slate-400">
        Discover exciting career opportunities with expert guidance.
      </p>

      {/* Career Options */}

      <div className="mt-12 flex flex-wrap items-center justify-center gap-10">

        {/* Doctor */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: show ? 1 : 0,
            y: show ? 0 : 25,
          }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full bg-emerald-500/15 p-4">
            <HeartPulse
              size={42}
              className="text-emerald-400"
            />
          </div>

          <p className="mt-3 font-semibold">
            Doctor
          </p>
        </motion.div>

        {/* Engineer */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: show ? 1 : 0,
            y: show ? 0 : 25,
          }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full bg-cyan-500/15 p-4">
            <Laptop
              size={42}
              className="text-cyan-400"
            />
          </div>

          <p className="mt-3 font-semibold">
            Engineer
          </p>
        </motion.div>

        {/* Scientist */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: show ? 1 : 0,
            y: show ? 0 : 25,
          }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full bg-yellow-500/15 p-4">
            <FlaskConical
              size={42}
              className="text-yellow-400"
            />
          </div>

          <p className="mt-3 font-semibold">
            Scientist
          </p>
        </motion.div>

      </div>

      {/* Button */}

      <button
        onClick={() => setShow(!show)}
        className="mt-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
      >
        {show ? "Reset" : "Explore Careers"}
      </button>

    </div>
  );
}