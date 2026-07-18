"use client";

import { motion } from "framer-motion";

export default function ACAnimation() {
  return (
    <div className="flex h-[420px] w-full items-center justify-center rounded-3xl bg-[#0F172A]">

      <div className="relative">

        {/* AC Unit */}

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="h-20 w-72 rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-slate-100 to-slate-300 shadow-2xl"
        >

          <div className="absolute left-5 top-5 h-2 w-28 rounded-full bg-slate-400" />

          <div className="absolute right-5 top-5 flex gap-2">

            <div className="h-2 w-2 rounded-full bg-green-500" />

            <div className="h-2 w-2 rounded-full bg-cyan-500" />

          </div>

        </motion.div>

        {/* Air Waves */}

        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [20, 140],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute left-1/2 h-24 w-1 rounded-full bg-cyan-400/60"
            style={{
              marginLeft: `${(i - 2) * 22}px`,
            }}
          />
        ))}

      </div>

    </div>
  );
}