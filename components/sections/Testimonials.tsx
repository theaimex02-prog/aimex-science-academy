"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Khan Misbah",
    role: "Student",
    review:
      "I had a wonderful experience here. The teaching is very clear, simple and easy to understand. The teachers are highly supportive, friendly and always ready to help. The learning environment is positive and motivating.",
  },
  {
    name: "Shabana Pinjari",
    role: "Parent",
    review:
      "Great teaching and a friendly environment. Sir teaches very well, clears every doubt and is always supportive. Highly recommended.",
  },
  {
    name: "Danish Khan",
    role: "Student",
    review:
      "One of the best academies in Nashik. Providing high-quality education with an excellent study environment. Highly recommended.",
  },
  {
    name: "Iqbal Sayyed",
    role: "Parent",
    review:
      "Very nice experience with AimEx Science Academy. All the teachers are hardworking and supportive.",
  },
  {
    name: "Adiba Jahagirdar",
    role: "Student",
    review:
      "Best faculty and an excellent learning environment created for every student.",
  },
  {
    name: "Zeba Naaj",
    role: "Student",
    review:
      "The way they teach us is amazing. The concepts are explained in a very simple and effective manner.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
className="relative -mt-16 overflow-hidden bg-[#08111F] pt-8 pb-24 text-white"    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[170px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            GOOGLE REVIEWS
          </p>

<h2 className="mt-3 text-4xl font-black leading-tight md:mt-4 md:text-6xl">
              Trusted By
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Students & Parents
            </span>
          </h2>

<p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Real feedback from our students and parents who have experienced
            quality education at AimEx Science Academy.
          </p>

        </motion.div>

        {/* Google Rating */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-cyan-500/20 bg-white/5 p-8 md:p-10 backdrop-blur-xl"        >

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>

              <div className="flex items-center gap-2">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={24}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <h3 className="mt-4 text-5xl font-black">
                4.9<span className="text-cyan-400">/5</span>
              </h3>

              <p className="mt-2 text-slate-300">
                Based on 20+ Google Reviews
              </p>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-3">

              <BadgeCheck className="text-emerald-400" />

              <span className="font-semibold text-emerald-300">
                Verified Google Reviews
              </span>

            </div>

          </div>

        </motion.div>

        {/* Reviews */}

<div className="mt-12 md:hidden">
  <Swiper
    modules={[Pagination, Autoplay]}
    slidesPerView={1.15}
    centeredSlides
    spaceBetween={18}
    loop
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
  >
    {testimonials.map((item, index) => (
      <SwiperSlide key={index}>
        <motion.div
          whileHover={{ y: -8 }}
          className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20"
        >
          <Quote
            size={34}
            className="mb-5 text-cyan-400"
          />

          <div className="mb-4 flex">
            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="min-h-[170px] leading-8 text-slate-300">
            "{item.review}"
          </p>

          <div className="mt-6 flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold">
              {item.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-bold">
                {item.name}
              </h3>

              <p className="text-cyan-400">
                {item.role}
              </p>
            </div>

          </div>

        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
<div className="mt-20 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">

  {testimonials.map((item,index)=>(

    <motion.div
      key={item.name}
      initial={{opacity:0,y:40}}
      whileInView={{opacity:1,y:0}}
      transition={{
        delay:index*.12,
        duration:.6,
      }}
      viewport={{once:true}}
      whileHover={{
        y:-8,
        scale:1.02,
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20"
    >

      <Quote
        size={38}
        className="mb-6 text-cyan-400"
      />

      <div className="mb-5 flex">

        {[1,2,3,4,5].map((star)=>(

          <Star
            key={star}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

        ))}

      </div>

      <p className="min-h-[160px] leading-8 text-slate-300">

        "{item.review}"

      </p>

      <div className="mt-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold">

          {item.name.charAt(0)}

        </div>

        <div>

          <h3 className="text-lg font-bold">
            {item.name}
          </h3>

          <p className="text-cyan-400">
            {item.role}
          </p>

        </div>

      </div>

    </motion.div>

  ))}

</div>
        {/* Bottom CTA */}

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
  className="mt-10 flex justify-center md:mt-20"
>

          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            Read More Google Reviews

            <ExternalLink size={20} />

          </a>

        </motion.div>

      </div>

    </section>
  );
}