"use client";

import { motion } from "framer-motion";
import DnaScene from "@/components/three/DnaScene";
export default function About() {
  return (
    <section
  id="about"
  className="relative overflow-hidden bg-[#0A0F1F] pt-20 pb-0 text-white lg:py-24"
>
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="mb-3 font-semibold uppercase tracking-[6px] text-cyan-400">
            ABOUT AIMEX
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Building Future
            <span className="block text-cyan-400">
              Doctors & Engineers
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            AimEx Science Academy is committed to providing quality education
            through experienced faculty, personalized mentoring, regular tests,
            and result-oriented teaching for NEET, JEE, MHT-CET and Board
            examinations.
          </p>

        </motion.div>

<div className="mt-12 grid items-center gap-8 lg:mt-20 lg:gap-14 lg:grid-cols-2">
              {/* Left Side */}

<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative"
>
  <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 p-2">

    <div className="h-[280px] sm:h-[350px] lg:h-[500px] rounded-3xl bg-[#071126]">
  <DnaScene />
</div>

  </div>

  <div className="absolute -bottom-4 -right-4 rounded-2xl bg-cyan-500 px-5 py-4 shadow-2xl md:-bottom-8 md:-right-8 md:rounded-3xl md:px-8 md:py-6">

  <h3 className="text-3xl font-bold md:text-4xl">
    20+
  </h3>

  <p className="text-sm font-medium md:text-base">
    Years of Excellence
  </p>

</div>
</motion.div>

{/* Right Side */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <h3 className="mb-6 text-4xl font-bold">
    Why Students Choose
    <span className="text-cyan-400"> AimEx</span>
  </h3>

  <p className="mb-8 text-lg leading-8 text-slate-300">
    We believe that every student deserves personal attention,
    expert guidance and a motivating learning environment.
    Our experienced faculty, regular assessments and modern
    teaching methods help students achieve outstanding academic success.
  </p>
<div className="grid grid-cols-2 gap-3 lg:gap-5">
  <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl lg:rounded-2xl lg:p-6">
<h4 className="mb-2 text-sm font-bold text-cyan-400 lg:text-xl">
        🎯 Our Mission
    </h4>

<p className="text-xs leading-5 text-slate-300 lg:text-base lg:leading-7">
        To empower students with quality education, strong fundamentals,
      disciplined learning, and continuous motivation to excel in
      competitive examinations.
    </p>
  </div>

  <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl lg:rounded-2xl lg:p-6">
<h4 className="mb-2 text-sm font-bold text-cyan-400 lg:text-xl">
        🌍 Our Vision
    </h4>

<p className="text-xs leading-5 text-slate-300 lg:text-base lg:leading-7">
        To become one of India's most trusted science academies by
      producing successful doctors, engineers and future leaders.
    </p>
  </div>

  <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl lg:rounded-2xl lg:p-6">
<h4 className="mb-2 text-sm font-bold text-cyan-400 lg:text-xl">
        👨‍🏫 Expert Faculty
    </h4>

<p className="text-xs leading-5 text-slate-300 lg:text-base lg:leading-7">
        Experienced mentors dedicated to every student's academic
      success with personal attention.
    </p>
  </div>

  <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl lg:rounded-2xl lg:p-6">
<h4 className="mb-2 text-sm font-bold text-cyan-400 lg:text-xl">
        📚 Smart Learning
    </h4>

<p className="text-xs leading-5 text-slate-300 lg:text-base lg:leading-7">
        Regular tests, doubt-solving sessions, study material,
      digital learning and complete exam preparation.
    </p>
  </div>

</div>

</motion.div>

</div>

</div>

</section>
  );
}