"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, PenTool } from "lucide-react";

export default function StudyMaterialAnimation() {

  const [opened, setOpened] = useState(false);

  return (
    <div className="flex h-[420px] flex-col items-center justify-center rounded-3xl bg-[#0F172A]">

      {/* Book */}

      <motion.div
        animate={{
          rotateY: opened ? -20 : 0,
          scale: opened ? 1.05 : 1,
        }}
        transition={{ duration: .6 }}
        className="flex h-40 w-52 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 shadow-2xl"
      >

        <BookOpen
          size={80}
          className="text-white"
        />

      </motion.div>

      {/* Notes */}

      <div className="mt-8 flex gap-5">

        {[0,1,2].map((item)=>(

          <motion.div
            key={item}
            initial={{
              opacity:0,
              y:20,
            }}
            animate={{
              opacity:opened?1:0,
              y:opened?0:20,
            }}
            transition={{
              delay:item*.2,
            }}
            className="rounded-xl bg-white p-4 shadow-xl"
          >

            <FileText
              size={34}
              className="text-cyan-600"
            />

          </motion.div>

        ))}

      </div>

      {/* Pen */}

      <motion.div
        animate={{
          x:opened?50:0,
          rotate:opened?25:0,
        }}
        transition={{
          duration:.8,
        }}
        className="mt-8"
      >

        <PenTool
          size={38}
          className="text-yellow-400"
        />

      </motion.div>

      <button
        onClick={()=>setOpened(!opened)}
        className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold transition hover:scale-105"
      >
        {opened ? "Close Book" : "Open Book"}
      </button>

    </div>
  );
}