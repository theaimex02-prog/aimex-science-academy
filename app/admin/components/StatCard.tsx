"use client";

import { LucideIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
  change?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  change,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
    >
      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm uppercase tracking-wider text-slate-400">
            {title}
          </p>

          <h2 className="mt-5 text-5xl font-black">
            {value}
          </h2>

          {change && (
            <div className="mt-5 flex items-center gap-2 text-sm text-green-400">

              <TrendingUp size={16} />

              {change}

            </div>
          )}

        </div>

        <div
          className={`rounded-2xl p-4 shadow-xl ${color}`}
        >
          <Icon
            size={32}
            className="text-white"
          />
        </div>

      </div>

    </motion.div>
  );
}