"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";
import {
  GraduationCap,
  Award,
  BookOpen,
  FlaskConical,
  Atom,
  Calculator,
} from "lucide-react";

interface FacultyMember {

  id: string;

  name: string;

  subject: string;

  qualification: string;

  experience: string;

  description?: string;

  featured?: boolean;

  imageUrl: string;

}
export default function Faculty() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);

const [loading, setLoading] = useState(true);

useEffect(() => {

  const loadFaculty = async () => {

    try {

      const q = query(
        collection(db, "faculty"),
        orderBy("createdAt", "desc")
      );

      const snap = await getDocs(q);

      setFaculty(

        snap.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<FacultyMember, "id">),
        }))

      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  loadFaculty();

}, []);
  return (
    <section
      id="faculty"
      className="relative overflow-hidden bg-[#08111F] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6"> 

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            OUR FACULTY
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            Meet Our
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expert Mentors
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Passionate educators with years of experience in guiding students
            towards excellence in Boards, NEET, JEE and MHT-CET.
          </p>
        </motion.div>

        {/* Faculty Grid */}

        {/* Faculty Grid */}

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

  {loading ? (

    <div className="col-span-full py-20 text-center">

      <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

      <p className="mt-6 text-xl text-slate-400">

        Loading Faculty...

      </p>

    </div>

  ) : faculty.length === 0 ? (

    <div className="col-span-full rounded-3xl border border-dashed border-white/10 p-20 text-center">

      <GraduationCap
        size={70}
        className="mx-auto text-cyan-400"
      />

      <h3 className="mt-8 text-3xl font-bold">

        No Faculty Added Yet

      </h3>

      <p className="mt-4 text-slate-400">

        Faculty members published from the admin panel will appear here.

      </p>

    </div>

  ) : (

    faculty.map((teacher, index) => (

      <motion.div

        key={teacher.id}

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: index * 0.15,
          duration: 0.6,
        }}

        viewport={{
          once: true,
        }}

        whileHover={{
          y: -10,
          scale: 1.03,
        }}

        className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20"

      >

        {/* Faculty Image */}

        <div className="overflow-hidden rounded-xl">

          <div className="mx-auto h-60 w-full overflow-hidden rounded-2xl border border-white/10">

  <div className="mx-auto h-64 w-full overflow-hidden rounded-2xl border border-cyan-500/20 shadow-lg">

  <div className="overflow-hidden rounded-xl">

  <div className="overflow-hidden">

  {/* Faculty Image */}

<div className="overflow-hidden rounded-xl">

  <img
    src={teacher.imageUrl}
    alt={teacher.name}
    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
  />

</div>

</div>

</div>

</div>

</div>

        </div>

        <h3 className="mt-6 line-clamp-2 min-h-[60px] text-center text-xl font-bold">

          {teacher.name}

        </h3>

        <div className="mt-4 flex justify-center">

          <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-300">

            {teacher.subject}

          </span>

        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">

          <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm">

            🎓 {teacher.qualification}

          </span>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-300">

            ⭐ {teacher.experience}

          </span>

        </div>

        {teacher.featured && (

          <div className="mt-5 flex justify-center">

            <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-300">

              ⭐ Featured Faculty

            </span>

          </div>

        )}

      </motion.div>

    ))

  )}

</div>
</div>
       

    </section>
  );
}