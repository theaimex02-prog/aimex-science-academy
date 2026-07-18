"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Expand } from "lucide-react";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  featured?: boolean;
  category?: string;
  createdAt?: any;
}

export default function Gallery() {

  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadGallery = async () => {

      try {

        const q = query(
          collection(db, "gallery"),
          orderBy("createdAt", "desc")
        );

        const snap = await getDocs(q);

        const images = snap.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<GalleryItem, "id">),
        }));

        setGallery(images);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    loadGallery();

  }, []);

  return (

    <section
      id="gallery"
      className="relative overflow-hidden bg-[#08111F] py-28 text-white"
    >

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[170px]" />

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
            duration: .8,
          }}

          viewport={{
            once: true,
          }}

          className="text-center"

        >

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">

            GALLERY

          </p>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">

            Life At

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              AimEx Science Academy

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

            Explore our classrooms, seminars, activities,
            practical sessions and memorable moments.

          </p>

        </motion.div>

        {/* Gallery */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {loading ? (

            <div className="col-span-full text-center text-slate-400">

              Loading gallery...

            </div>

          ) : gallery.length === 0 ? (

            <div className="col-span-full text-center text-slate-400">

              No images uploaded yet.

            </div>

          ) : (

            gallery.map((item, index) => (

              <motion.div

                key={item.id}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -8,
                }}

                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-500/20"

              >

                {/* Image */}

                <div className="relative h-72 overflow-hidden">

                  <img

                    src={item.imageUrl}

                    alt={item.title}

                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"

                  />

                </div>

                {/* Hover Overlay */}

                <motion.div

                  initial={{
                    opacity: 0,
                  }}

                  whileHover={{
                    opacity: 1,
                  }}

                  className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-0 transition-all duration-500"

                >

                  <span className="w-fit rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                    {item.category || "Gallery"}

                  </span>

                  <div className="flex h-48 flex-col justify-between">

  <div className="flex items-start justify-between gap-4">

    <div className="min-w-0 flex-1">

      <h3 className="line-clamp-2 break-all text-2xl font-bold leading-tight">

        {item.title}

      </h3>

      <p className="mt-2 text-slate-300">

        AimEx Science Academy

      </p>

    </div>

    <motion.div

      whileHover={{
        rotate: 20,
        scale: 1.1,
      }}

      className="flex-shrink-0 rounded-full bg-white/10 p-3 backdrop-blur-md"

    >

      <Expand
        size={22}
        className="text-white"
      />

    </motion.div>

  </div>

  <button

    className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"

  >

    View Image

  </button>

</div>

                </motion.div>

              </motion.div>

            ))

          )}
                  </div>

        {/* Bottom Text */}

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
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 text-center"
        >

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-400">

            Every classroom, seminar, achievement and learning experience
            represents our commitment to creating a motivating environment
            where students grow with confidence and excellence.

          </p>

        </motion.div>

      </div>

    </section>

  );

}