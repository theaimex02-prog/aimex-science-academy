"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PracticalAnimation from "./facility/PracticalAnimation";
import StudyMaterialAnimation from "./facility/StudyMaterialAnimation";
import TestAnimation from "./facility/TestAnimation";
import DigitalAnimation from "./facility/DigitalAnimation";
import CareerAnimation from "./facility/CareerAnimation";
import {
  Snowflake,
  FlaskConical,
  BookOpen,
  ClipboardCheck,
  Laptop,
  Target,
} from "lucide-react";

import ACAnimation from "./facility/ACAnimation";

const facilities = [
  {
    id: "practical",
    title: "Practical Learning",
    description:
      "Understand concepts through practical demonstrations and activity-based learning.",
    icon: FlaskConical,
  },
  {
    id: "study",
    title: "Premium Study Material",
    description:
      "Well-structured notes, assignments and practice material prepared by our expert faculty.",
    icon: BookOpen,
  },
  {
    id: "tests",
    title: "Weekly Test Series",
    description:
      "Regular tests with detailed analysis to continuously improve performance.",
    icon: ClipboardCheck,
  },
  {
    id: "digital",
    title: "Digital Learning",
    description:
      "Modern digital tools and smart learning methods for better understanding.",
    icon: Laptop,
  },
  {
    id: "career",
    title: "Career Guidance",
    description:
      "Professional guidance to help students choose the right career path.",
    icon: Target,
  },
  {
    id: "ac",
    title: "Air Conditioned Classrooms",
    description:
      "Comfortable air-conditioned classrooms that provide a peaceful learning environment throughout the year.",
    icon: Snowflake,
  },
];

export default function Facilities() {

const [activeFacility, setActiveFacility] = useState("practical");
  const active =
    facilities.find((item) => item.id === activeFacility)!;

  return (
    <section
      id="facilities"
className="relative -mt-16 overflow-hidden bg-[#08111F] pt-8 pb-24 text-white"    >

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[170px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            WHY CHOOSE AIMEX
          </p>

<h2 className="mt-3 text-4xl font-black leading-tight md:mt-4 md:text-6xl">
            Experience

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Smart Learning
            </span>

          </h2>

<p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Explore the facilities that make AimEx Science Academy
            a modern destination for quality education.

          </p>

        </motion.div>

        {/* Main Layout */}

<div className="mt-10 grid gap-8 lg:grid-cols-[340px_1fr]">
          {/* Left Panel */}

          <div className="space-y-4">

            {facilities.map((item) => {

              const Icon = item.icon;

              const activeButton =
                activeFacility === item.id;

              return (

                <button
                  key={item.id}
                  onClick={() => setActiveFacility(item.id)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300
                  ${
                    activeButton
                      ? "border-cyan-400 bg-cyan-500/15 shadow-xl shadow-cyan-500/20"
                      : "border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10"
                  }`}
                >

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl
                    ${
                      activeButton
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                        : "bg-white/10"
                    }`}
                  >

                    <Icon
                      size={28}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400">
                      Click to explore
                    </p>

                  </div>

                </button>

              );

            })}

          </div>

          {/* Right Panel Starts Here */}
                    {/* Right Panel */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeFacility}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-[32px] border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
            >

              {/* Animation */}

<div className="hidden overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] md:block">
                {activeFacility === "ac" && <ACAnimation />}

                {activeFacility === "practical" && <PracticalAnimation />}

                {activeFacility === "study" && <StudyMaterialAnimation />}
                {activeFacility === "tests" && <TestAnimation />}
                {activeFacility === "digital" && <DigitalAnimation />}

                {activeFacility === "career" && <CareerAnimation />}

              </div>

              {/* Description */}

              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-8"
              >

                <h3 className="text-3xl font-bold">
                  {active.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  {active.description}
                </p>

              </motion.div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}