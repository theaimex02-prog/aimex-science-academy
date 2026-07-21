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
  
const [loadingSettings, setLoadingSettings] = useState(true);

  useEffect(() => {
  const loadSettings = async () => {
    try {
      const data = await getSettings();

      if (data) {
        setSettings(data);
      }
    } finally {
      setLoadingSettings(false);
    }
  };

  loadSettings();
}, []);

  
  return (
<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#071126] to-[#0B1B38] pt-32 text-white">
      {/* Background Glow */}
      

      {/* Grid Pattern */}

      {/* Premium Background */}

<div className="absolute inset-0">

  {/* Blue Glow */}
  <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

  {/* Top Glow */}
  <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

  {/* Bottom Glow */}
  <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[140px]" />

</div>
<div className="relative z-10 flex min-h-[calc(100vh+120px)] items-center lg:min-h-[calc(100vh-80px)]">
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
  {settings?.heroTitle ? (
    <>
      {settings.heroTitle.replace(" Starts Here", "")}
      <span className="mt-2 block text-cyan-400">
        Starts Here
      </span>
    </>
  ) : (
    <>
      Your Future
      <span className="mt-2 block text-cyan-400">
        Starts Here
      </span>
    </>
  )}
</h1>


{/* Subtitle */}

{!loadingSettings && (
  <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
    {settings?.heroSubtitle || (
      <>
        Join AimEx Science Academy and prepare for
        <span className="font-semibold text-white">
          {" "}NEET, JEE, MHT-CET, Board Exams
        </span>
        {" "}with expert faculty, smart classrooms,
        personalized mentoring and result-oriented guidance.
      </>
    )}
  </p>
)}

{/* Buttons */}

<div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

  <button
onClick={() => scrollToSection("enquiry-form")}
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

<div className="mt-14 grid grid-cols-4 gap-2 lg:mt-20 lg:gap-6">

  <div className="group rounded-xl border border-white/10 bg-white/5 p-2 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6">

    <GraduationCap
      size={20}
      className="mx-auto mb-2 text-cyan-400 transition-transform duration-500 group-hover:scale-110 sm:mb-3 sm:h-7 sm:w-7 lg:mb-5 lg:h-10 lg:w-10"
    />

    <h2 className="text-sm font-bold text-cyan-400 sm:text-2xl lg:text-4xl">
      <Counter end={5000} suffix="+" />
    </h2>

    <p className="mt-1 text-[10px] leading-tight text-slate-300 sm:text-xs lg:mt-2 lg:text-base">
      Students
    </p>

  </div>

  <div className="group rounded-xl border border-white/10 bg-white/5 p-2 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6">

    <Trophy
      size={20}
      className="mx-auto mb-2 text-blue-400 transition-transform duration-500 group-hover:scale-110 sm:mb-3 sm:h-7 sm:w-7 lg:mb-5 lg:h-10 lg:w-10"
    />

    <h2 className="text-sm font-bold text-blue-400 sm:text-2xl lg:text-4xl">
      <Counter end={98} suffix="%" />
    </h2>

    <p className="mt-1 text-[10px] leading-tight text-slate-300 sm:text-xs lg:mt-2 lg:text-base">
      Success
    </p>

  </div>

  <div className="group rounded-xl border border-white/10 bg-white/5 p-2 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6">

    <Users
      size={20}
      className="mx-auto mb-2 text-indigo-400 transition-transform duration-500 group-hover:scale-110 sm:mb-3 sm:h-7 sm:w-7 lg:mb-5 lg:h-10 lg:w-10"
    />

    <h2 className="text-sm font-bold text-indigo-400 sm:text-2xl lg:text-4xl">
      <Counter end={15} suffix="+" />
    </h2>

    <p className="mt-1 text-[10px] leading-tight text-slate-300 sm:text-xs lg:mt-2 lg:text-base">
      Faculty
    </p>

  </div>

  <div className="group rounded-xl border border-white/10 bg-white/5 p-2 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6">

    <Headphones
      size={20}
      className="mx-auto mb-2 text-sky-400 transition-transform duration-500 group-hover:scale-110 sm:mb-3 sm:h-7 sm:w-7 lg:mb-5 lg:h-10 lg:w-10"
    />

    <h2 className="text-sm font-bold text-sky-400 sm:text-2xl lg:text-4xl">
      24×7
    </h2>

    <p className="mt-1 text-[10px] leading-tight text-slate-300 sm:text-xs lg:mt-2 lg:text-base">
      Support
    </p>

  </div>

</div>

          </motion.div>
{/* Right Side */}

<div className="relative -mt-12 flex h-[240px] items-center justify-center lg:mt-0 lg:h-[650px]">
  {/* Glow */}
  <div className="absolute h-[250px] w-[250px] rounded-full bg-cyan-500/20 blur-[100px] lg:h-[500px] lg:w-[500px]" />

  {/* Atom */}
  <div className="relative h-full w-full max-w-[600px]">
    <AtomScene />
  </div>

</div>
        </div>

      </div>


 
    </section>
  );
}