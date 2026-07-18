"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Wifi, PlayCircle } from "lucide-react";

export default function DigitalAnimation() {
  const [started, setStarted] = useState(false);

  return (
    <div className="flex h-[420px] flex-col items-center justify-center rounded-3xl bg-[#0F172A]">

      {/* Laptop */}

      <motion.div
        animate={{
          scale: started ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="flex h-44 w-64 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-2xl"
      >
        <Laptop size={90} className="text-cyan-400" />
      </motion.div>

      {/* Icons */}

      <div className="mt-8 flex gap-8">

        <motion.div
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 20,
          }}
        >
          <PlayCircle size={42} className="text-cyan-400" />
        </motion.div>

        <motion.div
          animate={{
            opacity: started ? 1 : 0,
            scale: started ? 1 : 0,
          }}
          transition={{ delay: 0.2 }}
        >
          <Wifi size={42} className="text-green-400" />
        </motion.div>

      </div>

      <motion.h2
        animate={{
          opacity: started ? 1 : 0,
          y: started ? 0 : 20,
        }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-3xl font-bold text-cyan-400"
      >
        Smart Learning Active
      </motion.h2>

      <button
        onClick={() => setStarted(!started)}
        className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold transition hover:scale-105"
      >
        {started ? "Close Session" : "Start Learning"}
      </button>

    </div>
  );
}