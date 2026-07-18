"use client";

import { motion } from "framer-motion";
import AtomScene from "@/components/three/AtomScene";
import Counter from "@/components/common/Counter";
import { useEffect, useState } from "react";
import { getSettings, WebsiteSettings } from "@/lib/getSettings";

import {
  GraduationCap,
  Trophy,
  Users,
  Headphones,
} from "lucide-react";
export default function Hero() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [settings, setSettings] = useState<WebsiteSettings | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      const data = await getSettings();
      if (data) setSettings(data);
    };

    loadSettings();
  }, []);

  
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-32 text-white">

      {/* Background Glow */}
      

      {/* Grid Pattern */}

      {/* Premium Background */}

<div className="absolute inset-0">

  {/* Main Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#071126] to-[#0B1B38]" />

  {/* Blue Glow */}
  <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

  {/* Top Glow */}
  <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

  {/* Bottom Glow */}
  <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[140px]" />

</div>

      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="text-center lg:text-left"
          >

            {/* Badge */}

<div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 backdrop-blur-md">
  <span className="text-sm font-medium tracking-wide text-blue-300">
    🚀 Admissions Open 2026–27
  </span>
</div>

{/* Heading */}

<h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
  {settings?.heroTitle || (
    <>
      Empowering Future
      <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
        Doctors, Engineers
      </span>
      & Achievers
    </>
  )}
</h1>

{/* Subtitle */}

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
  {settings?.heroSubtitle || (
    <>
      Join AimEx Science Academy and prepare for
      <span className="font-semibold text-white">
        {" "}NEET, JEE, MHT-CET, Board Exams
      </span>
      {" "}with expert faculty, smart classrooms, personalized mentoring and
      result-oriented guidance.
    </>
  )}
</p>

{/* Buttons */}

<div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

  <button
  onClick={() => scrollToSection("contact")}
  className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
>
  Apply Now
</button>

  <button
  onClick={() => scrollToSection("courses")}
  className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20"
>
  Explore Courses
</button>

</div>

{/* Statistics */}

<div className="mt-20 grid gap-6 md:grid-cols-4">

  <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">

  <GraduationCap
    size={38}
    className="mb-5 text-cyan-400 transition-transform duration-500 group-hover:scale-110"
  />

  <h2 className="text-4xl font-bold text-cyan-400">
    <Counter end={5000} suffix="+" />
  </h2>

  <p className="mt-2 text-slate-300">
    Students Guided
  </p>

</div>

  <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10">

  <Trophy
    size={38}
    className="mb-5 text-blue-400 transition-transform duration-500 group-hover:scale-110"
  />

  <h2 className="text-4xl font-bold text-blue-400">
    <Counter end={98} suffix="%" />
  </h2>

  <p className="mt-2 text-slate-300">
    Success Rate
  </p>

</div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
  <Users
  size={38}
  className="mb-5 text-indigo-400 transition-transform duration-500 group-hover:scale-110"
/>
    <h2 className="text-4xl font-bold text-indigo-400">
  <Counter end={15} suffix="+" />
</h2>
    <p className="mt-2 text-slate-300">
      Expert Faculty
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
  <Headphones
  size={38}
  className="mb-5 text-sky-400 transition-transform duration-500 group-hover:scale-110"
/>
    <h2 className="text-4xl font-bold text-sky-400">
  24×7
</h2>
    <p className="mt-2 text-slate-300">
      Student Support
    </p>
  </div>

</div>

          </motion.div>
{/* Right Side */}

<div className="relative hidden h-[650px] lg:flex items-center justify-center">

  {/* Blue Glow */}
  <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

  {/* Atom */}
  <div className="absolute top-6 h-[550px] w-[550px]">
    <AtomScene />
  </div>

</div>
        </div>

      </div>


 
    </section>
  );
}