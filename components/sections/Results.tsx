"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Trophy,
  GraduationCap,
  Medal,
  Award,
  ArrowRight,
} from "lucide-react";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

import Counter from "@/components/common/Counter";

interface ResultItem {
  id: string;
  name: string;
  exam: string;
  score: string;
  rank?: string;
  year?: string;
  description?: string;
  imageUrl: string;
  featured?: boolean;
}

export default function Results() {

  const [results, setResults] = useState<ResultItem[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadResults = async () => {

      try {

        const q = query(
          collection(db, "results"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<ResultItem, "id">),
        }));

        setResults(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    loadResults();

  }, []);

  return (
    <section
  id="results"
  className="relative overflow-hidden bg-[#08111F] py-28 text-white"
>

  {/* Background Glow */}

  <div className="absolute inset-0">

    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

    <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}

    <motion.div

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      viewport={{
        once: true,
      }}

      className="text-center"

    >

      <p className="font-semibold uppercase tracking-[6px] text-cyan-400">

        OUR RESULTS

      </p>

      <h2 className="mt-4 text-5xl font-black md:text-6xl">

        Real Success.

        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

          Real Students.

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

        Our students consistently achieve outstanding results in
        NEET, JEE, MHT-CET and Board examinations through
        expert guidance, dedication and continuous mentoring.

      </p>

    </motion.div>

    {/* Results Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (

  <div className="col-span-full py-20 text-center">

    <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

    <p className="mt-6 text-xl text-slate-400">

      Loading Results...

    </p>

  </div>

) : results.length === 0 ? (

  <div className="col-span-full rounded-3xl border border-dashed border-white/10 p-16 text-center">

    <GraduationCap
      size={70}
      className="mx-auto text-cyan-400"
    />

    <h3 className="mt-8 text-3xl font-bold">

      No Results Yet

    </h3>

    <p className="mt-4 text-slate-400">

      Publish student achievements from the admin panel.

    </p>

  </div>

) : (

  results.map((student, index) => (

    <motion.div

      key={student.id}

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        delay: index * 0.12,
        duration: .7,
      }}

      viewport={{
        once: true,
      }}

      whileHover={{
        y: -10,
        scale: 1.02,
      }}

      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"

    >

      {/* Student Image */}

      <div className="relative h-80 overflow-hidden">

        <img

          src={student.imageUrl}

          alt={student.name}

          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"

        />

        {student.featured && (

          <div className="absolute left-4 top-4 rounded-full bg-yellow-500 px-4 py-2 text-sm font-bold text-black">

            ⭐ Featured

          </div>

        )}

      </div>

      {/* Content */}

      <div className="flex min-h-[280px] flex-col p-8">

        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">

          <Trophy size={16} />

          {student.exam}

        </div>

        <h3 className="mt-6 line-clamp-2 break-all text-3xl font-black">

          {student.name}

        </h3>

        <p className="mt-4 text-xl font-semibold text-white">

          {student.score}

        </p>

        {student.rank && (

          <p className="mt-2 text-cyan-400">

            🏅 {student.rank}

          </p>

        )}

        {student.year && (

          <p className="mt-2 text-slate-400">

            📅 {student.year}

          </p>

        )}

        {student.description && (

          <p className="mt-4 line-clamp-3 text-slate-300">

            {student.description}

          </p>

        )}

        <button

          className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"

        >

          View Success Story

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>

  ))

)}
    </div>

    {/* Achievement Statistics */}

    <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* Students Trained */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
      >

        <GraduationCap
          size={42}
          className="mx-auto mb-5 text-cyan-400 transition duration-300 group-hover:scale-110"
        />

        <h3 className="text-5xl font-bold text-cyan-400">

          <Counter end={5000} suffix="+" />

        </h3>

        <p className="mt-3 text-slate-300">

          Students Trained

        </p>

      </motion.div>

      {/* Success Rate */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
      >

        <Trophy
          size={42}
          className="mx-auto mb-5 text-cyan-400 transition duration-300 group-hover:scale-110"
        />

        <h3 className="text-5xl font-bold text-cyan-400">

          <Counter end={98} suffix="%" />

        </h3>

        <p className="mt-3 text-slate-300">

          Success Rate

        </p>

      </motion.div>

      {/* Expert Faculty */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
      >

        <Award
          size={42}
          className="mx-auto mb-5 text-cyan-400 transition duration-300 group-hover:scale-110"
        />

        <h3 className="text-5xl font-bold text-cyan-400">

          <Counter end={15} suffix="+" />

        </h3>

        <p className="mt-3 text-slate-300">

          Expert Faculty

        </p>

      </motion.div>

      {/* Years of Excellence */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
      >

        <Medal
          size={42}
          className="mx-auto mb-5 text-cyan-400 transition duration-300 group-hover:scale-110"
        />

        <h3 className="text-5xl font-bold text-cyan-400">

          <Counter end={10} suffix="+" />

        </h3>

        <p className="mt-3 text-slate-300">

          Years of Excellence

        </p>

      </motion.div>

    </div>

  </div>

</section>

);

}