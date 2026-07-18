"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PracticalAnimation() {

  const [mixed, setMixed] = useState(false);

  return (
    <div className="flex h-[420px] flex-col items-center justify-center rounded-3xl bg-[#0F172A]">

      <div className="relative flex items-center gap-20">

        {/* Left Beaker */}

        <motion.div
          animate={
            mixed
              ? {
                  rotate: -25,
                  x: 40,
                  y: 30,
                }
              : {}
          }
          transition={{ duration: 1 }}
          className="relative h-32 w-20 rounded-b-3xl border-4 border-white"
        >

          <motion.div
            animate={{
              height: mixed ? "10%" : "70%",
            }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 w-full rounded-b-2xl bg-cyan-400"
          />

        </motion.div>

        {/* Flask */}

        <div className="relative h-40 w-28 rounded-b-full border-4 border-white">

          <motion.div
            animate={{
              height: mixed ? "70%" : "0%",
              backgroundColor: mixed
                ? "#22c55e"
                : "#06b6d4",
            }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 w-full rounded-b-full"
          />

        </div>

        {/* Right Beaker */}

        <motion.div
          animate={
            mixed
              ? {
                  rotate: 25,
                  x: -40,
                  y: 30,
                }
              : {}
          }
          transition={{ duration: 1 }}
          className="relative h-32 w-20 rounded-b-3xl border-4 border-white"
        >

          <motion.div
            animate={{
              height: mixed ? "10%" : "70%",
            }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 w-full rounded-b-2xl bg-yellow-400"
          />

        </motion.div>

      </div>

      <button
        onClick={() => setMixed(!mixed)}
        className="mt-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition hover:scale-105"
      >
        {mixed ? "Reset Experiment" : "Mix Chemicals"}
      </button>

    </div>
  );
}