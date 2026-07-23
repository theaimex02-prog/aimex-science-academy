"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Star,
  BookOpen,
  Award,
} from "lucide-react";

export default function CTA() {
  return (
    <section
  className="relative -mt-16 overflow-hidden bg-[#07101D] pt-12 pb-24 text-white"
>
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[170px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
className="overflow-hidden rounded-[32px] border border-cyan-500/20 bg-white/5 p-6 md:p-12 backdrop-blur-xl"        >

          {/* Badge */}

          <motion.div
            initial={{
              scale: .8,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: .2,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3"
          >

            <GraduationCap
              size={22}
              className="text-cyan-400"
            />

            <span className="font-semibold text-cyan-300">
              Admissions Open • 2026 – 27
            </span>

          </motion.div>

          {/* Heading */}

          <h2 className="mt-6 text-center text-4xl font-black leading-tight md:mt-8 md:text-7xl">

            Shape Your

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              Future With AimEx

            </span>

          </h2>

          
          {/* Stats */}

<div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

            <div className="group rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">

              <Award
  size={30}
  className="mx-auto text-cyan-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
/>

              <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
                33+
              </h3>

              <p className="mt-1 text-sm leading-5 text-slate-300 md:text-base">
                Years Experience
              </p>

            </div>

            <div className="group rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
  <BookOpen
    size={30}
    className="mx-auto text-cyan-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
  />

  <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
    NEET
  </h3>
</div>

            <div className="group rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
  <GraduationCap
    size={30}
    className="mx-auto text-cyan-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
  />

  <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
    JEE
  </h3>
</div>

            <div className="group rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
  <Star
    size={30}
    className="mx-auto text-yellow-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
  />

  <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
    CET
  </h3>
</div>

          </div>

          {/* Buttons */}
                    <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >

            {/* Apply Now */}

            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              Apply Now

              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </a>

            {/* Explore Courses */}

            <a
              href="#courses"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              Explore Courses
            </a>

          </motion.div>

          {/* Bottom Message */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="mt-12 text-center"
          >

            <p className="text-lg text-slate-300">
              Admissions are now open for the academic year
              <span className="font-semibold text-cyan-400">
                {" "}2026–27
              </span>.
              Secure your seat today and begin your journey toward academic excellence.
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}