"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FlaskConical,
  HeartPulse,
  Cog,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
  Clock3,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
const courses = [
  {
    slug: "foundation-programme",
    icon: BookOpen,
    title: "Foundation Programme",
    subtitle: "Classes 8th • 9th • 10th",
    duration: "1 Year",
    description:
      "Strong fundamentals with concept-based learning, weekly tests and complete board preparation.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "11th-12th-science",
    icon: FlaskConical,
    title: "11th & 12th Science",
    subtitle: "Science Stream",
    duration: "2 Years",
    description:
      "Integrated coaching for HSC Boards with preparation for competitive examinations.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    slug: "neet",
    icon: HeartPulse,
    title: "NEET Preparation",
    subtitle: "Medical Entrance",
    duration: "1–2 Years",
    description:
      "Expert Biology, Physics & Chemistry faculty with personal mentoring and test series.",
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    slug: "jee",
    icon: Cog,
    title: "JEE Preparation",
    subtitle: "Engineering Entrance",
    duration: "1–2 Years",
    description:
      "Advanced Mathematics, Physics and Chemistry with complete problem-solving practice.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    slug: "mht-cet",
    icon: ChartNoAxesColumnIncreasing,
    title: "MHT-CET Preparation",
    subtitle: "State Entrance",
    duration: "1 Year",
    description:
      "Specialized batches with chapter-wise practice, mock tests and full revision strategy.",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#08111F] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[160px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            OUR COURSES
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            Learn.
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Grow. Succeed.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Comprehensive academic programmes designed for board examinations,
            competitive entrance tests and long-term academic excellence.
          </p>

        </motion.div>

        {/* Course Cards */}

<div className="mt-12 grid grid-cols-2 gap-4 md:mt-20 lg:grid-cols-3">
          {courses.map((course, index) => (

            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-4 lg:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20"
            >

              {/* Icon */}

              <div
                className={`mb-8 flex h-14 w-14 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${course.gradient} shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
              >

                <course.icon
                  size={28}
                  className="text-white"
                />

              </div>

              <h3 className="text-lg leading-tight lg:text-3xl font-bold">
                {course.title}
              </h3>

              <p className="mt-1 text-sm font-medium lg:mt-2 lg:text-base text-cyan-400">
                {course.subtitle}
              </p>


<div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <Clock3 size={18} />

                <span>{course.duration}</span>

              </div>

<div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                <GraduationCap size={18} />

                <span>Expert Faculty</span>

              </div>

<div className="mt-auto pt-4">  <Link
  href={`/courses/${course.slug}`}
  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm lg:px-6 lg:py-3 lg:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
>
  <span className="inline-flex items-center gap-2">
    Explore Course

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
</Link>
</div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-10 backdrop-blur-xl"
        >

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h3 className="text-4xl font-bold">
                Not sure which course is right for you?
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Speak with our academic counsellors and get personalized guidance
                to choose the perfect programme based on your goals and current
                academic level.
              </p>

            </div>

            <button className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">

              Book Free Counselling

              <ArrowRight size={20} />

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}