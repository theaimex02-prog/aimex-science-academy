"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, GraduationCap, ArrowRight } from "lucide-react";

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

interface Announcement {
  id: string;
  title: string;
  message: string;
  published: boolean;
  priority?: string;
  category?: string;
  createdAt?: any;
}

export default function AnnouncementBar() {
  const [announcement, setAnnouncement] =
    useState<Announcement | null>(null);

  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loadAnnouncement = async () => {
      try {
        const q = query(
          collection(db, "announcements"),
          orderBy("createdAt", "desc"),
          limit(1)
        );

        const snapshot = await getDocs(q);

console.log("Snapshot empty:", snapshot.empty);
console.log("Documents:", snapshot.docs.length);

        if (!snapshot.empty) {
          const doc = snapshot.docs[0];

          const data = {
            id: doc.id,
            ...doc.data(),
          } as Announcement;
console.log("Announcement:", data);
          console.log("Announcement Data:", data);

setAnnouncement(data);
setOpen(true);
        }
      } catch (err) {
        console.error("Failed to load announcement:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAnnouncement();
  }, []);

  useEffect(() => {
  if (open && announcement) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    document.body.style.height = "100vh";
    document.documentElement.style.height = "100vh";

    document.body.style.touchAction = "none";
    document.documentElement.style.touchAction = "none";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    document.body.style.height = "";
    document.documentElement.style.height = "";

    document.body.style.touchAction = "";
    document.documentElement.style.touchAction = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    document.body.style.height = "";
    document.documentElement.style.height = "";

    document.body.style.touchAction = "";
    document.documentElement.style.touchAction = "";
  };
}, [open, announcement]);

  if (loading || !announcement || !open) {
    return null;
  }

  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-5"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}
      >

        <motion.div
          initial={{
            scale: .9,
            opacity: 0,
            y: 40,
          }}

          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}

          exit={{
            scale: .9,
            opacity: 0,
          }}

          transition={{
            duration: .35,
          }}

className="relative w-[94vw] max-w-5xl rounded-[28px] overflow-hidden border border-cyan-500/20 bg-[#081321] shadow-[0_0_80px_rgba(6,182,212,.15)]">
          {/* Close */}

          <button
            onClick={() => {
  sessionStorage.setItem("announcementShown", "true");
  setOpen(false);
}}
className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition hover:scale-110 lg:h-12 lg:w-12"          >
            <X size={22} />
          </button>

          {/* Glow */}

          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

<div className="relative grid max-h-[90vh] overflow-y-auto overflow-x-hidden lg:grid-cols-2 scrollbar-hide">              {/* Left Side */}

<div className="flex flex-col justify-center p-5 lg:p-14">

  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
    <GraduationCap size={18} />
    AIMEX SCIENCE ACADEMY
  </p>

  <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:mt-8 lg:text-5xl">
    🎓 {announcement.title}
  </h2>

  <p className="mt-6 whitespace-pre-wrap break-words [overflow-wrap:anywhere] text-base leading-7 text-slate-300 sm:text-lg">
    {announcement.message}
  </p>

  <div className="mt-8 grid grid-cols-2 gap-3">

    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
      ✅ Expert Faculty
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
      ✅ Limited Seats
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
      ✅ Personal Mentorship
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
      ✅ Weekly Tests
    </div>

  </div>

  <div className="mt-10 flex flex-wrap gap-4">

    <button
      onClick={() => {
        setOpen(false);

        setTimeout(() => {
          document.getElementById("enquiry-form")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 200);
      }}
className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-base font-bold text-white transition hover:scale-[1.02] lg:inline-flex lg:w-auto"    >
      🚀 Apply for Admission

      <ArrowRight
        size={20}
        className="transition group-hover:translate-x-1"
      />
    </button>

  </div>

  <div className="mt-8 flex flex-wrap gap-3">

    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3 py-1.5 text-xs sm:text-sm font-semibold text-cyan-300">
      📂 {announcement.category || "Announcement"}
    </span>

    <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1.5 text-xs sm:text-sm font-semibold text-amber-300">
      ⭐ {announcement.priority || "High"}
    </span>

  </div>

</div>


{/* Right Side */}
<div className="relative hidden items-center justify-center lg:flex">

  <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />

  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [0, 1, 0, -1, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative w-[380px] rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-10 backdrop-blur-xl"
  >

    <GraduationCap
      size={90}
      className="mx-auto text-cyan-400"
    />

    <h3 className="mt-6 text-center text-3xl font-black text-white">
      📢 Announcement
    </h3>

    <p className="mt-2 text-center text-slate-300">
      Latest Update
    </p>

    <div className="mt-10 space-y-4">

      <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 sm:p-4">

        <p className="text-xs uppercase text-slate-400">
          Category
        </p>

        <p className="mt-1 font-semibold text-white">
          {announcement.category || "General"}
        </p>

      </div>

      <div className="rounded-xl border border-amber-500/20 bg-white/5 p-3 sm:p-4">

        <p className="text-xs uppercase text-slate-400">
          Priority
        </p>

        <p className="mt-1 font-semibold text-white">
          {announcement.priority || "High"}
        </p>

      </div>

      <div className="rounded-xl border border-green-500/20 bg-white/5 p-3 sm:p-4">

        <p className="text-xs uppercase text-slate-400">
          Status
        </p>

        <p className="mt-1 font-semibold text-green-400">
          ● Published
        </p>

      </div>

    </div>

  </motion.div>

</div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );
}