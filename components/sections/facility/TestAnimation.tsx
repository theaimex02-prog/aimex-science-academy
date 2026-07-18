"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Trophy } from "lucide-react";

export default function TestAnimation() {

  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex h-[420px] flex-col items-center justify-center rounded-3xl bg-[#0F172A]">

      {/* Question Paper */}

      <motion.div
        animate={{
          scale: completed ? 1.05 : 1,
        }}
        transition={{ duration: .5 }}
        className="flex h-52 w-40 flex-col items-center justify-center rounded-2xl bg-white shadow-2xl"
      >

        <ClipboardCheck
          size={70}
          className="text-cyan-600"
        />

        <p className="mt-4 font-bold text-slate-700">
          Weekly Test
        </p>

      </motion.div>

      {/* Score */}

      <motion.h2
        animate={{
          opacity: completed ? 1 : 0,
          y: completed ? 0 : 20,
        }}
        className="mt-8 text-5xl font-black text-green-400"
      >
        100%
      </motion.h2>

      {/* Trophy */}

      <motion.div
        animate={{
          scale: completed ? 1 : 0,
          rotate: completed ? 360 : 0,
        }}
        transition={{
          duration: .8,
        }}
        className="mt-4"
      >

        <Trophy
          size={60}
          className="text-yellow-400"
        />

      </motion.div>

      <button
        onClick={() => setCompleted(!completed)}
        className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold transition hover:scale-105"
      >
        {completed ? "Reset Test" : "Complete Test"}
      </button>

    </div>
  );
}