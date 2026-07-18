"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSettings, WebsiteSettings } from "@/lib/getSettings";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Navigation,
} from "lucide-react";

import { db } from "@/firebase/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";


export default function Contact() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
const [settings, setSettings] = useState<WebsiteSettings | null>(null);
useEffect(() => {
  const loadSettings = async () => {
    const data = await getSettings();
    if (data) setSettings(data);
  };

  loadSettings();
}, []);
const contactInfo = [
  {
  icon: MapPin,
  title: "Address",
  content: (
    <a
      href={settings?.maps || "https://www.google.com/maps/place/Aimex+Science+Academy/"}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1 block text-sm leading-6 text-slate-300 transition hover:text-cyan-400"
    >
      {settings?.address ||
        "Flat No. 206, Samruddhi Business Square, Nashik, Maharashtra"}
    </a>
  ),
},
  
  {
  icon: Phone,
  title: "Phone",
  content: settings?.phone || "+91 93709 06120",
},
  {
  icon: Mail,
  title: "Email",
  content: settings?.email || "aimex.desk@gmail.com",
},
  {
    icon: Clock,
    title: "Office Hours",
    content: (
      <>
        Monday – Sunday
        <br />
        9:00 AM – 9:00 PM
      </>
    ),
  },
];
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (
      !name ||
      !phone ||
      !course
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {

      setLoading(true);

      await addDoc(
        collection(db, "enquiries"),
        {
          name,
          phone,
          email,
          course,
          message,
          status: "new",
          createdAt: serverTimestamp(),
        }
      );

      alert("Enquiry sent successfully!");

      setName("");
      setPhone("");
      setEmail("");
      setCourse("");
      setMessage("");

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      id="contact"
      className="relative overflow-hidden bg-[#08111F] py-24 text-white"
    >

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            CONTACT US
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            Let's Build
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Future
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            We'd love to hear from you. Reach out for admissions,
            counselling, scholarships or any academic queries.
          </p>

        </motion.div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT STARTS HERE */}
                    <div>

            {/* Contact Cards */}

            <div className="space-y-4">

              {contactInfo.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >

                    <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 shadow-lg">

                      <Icon
                        size={22}
                        className="text-white"
                      />

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <div className="mt-1 text-sm leading-6 text-slate-300">
                        {item.content}
                      </div>

                    </div>

                  </motion.div>

                );

              })}

            </div>

            {/* Google Map */}

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
              }}
              viewport={{
                once: true,
              }}
              className="mt-6 overflow-hidden rounded-2xl border border-white/10"
            >

              <iframe
                src={
  settings?.maps
    ? `${settings.maps}${settings.maps.includes("?") ? "&" : "?"}output=embed`
    : "https://www.google.com/maps?q=AimEx+Science+Academy+Nashik&output=embed"
}
                loading="lazy"
                className="h-[260px] w-full border-0"
                allowFullScreen
              />

            </motion.div>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="self-start rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <h3 className="text-3xl font-bold">
              Send an Enquiry
            </h3>

            <p className="mt-2 text-slate-400">
              Fill in your details and we'll contact you soon.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
                            <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Student Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 outline-none transition focus:border-cyan-400"
                  required
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 outline-none transition focus:border-cyan-400"
                  required
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 outline-none transition focus:border-cyan-400"
              />

              <select
  value={course}
  onChange={(e) => setCourse(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 outline-none transition focus:border-cyan-400"
  required
>
  <option value="" className="bg-slate-900 text-white">
    Select Course
  </option>

  <option value="8th Foundation" className="bg-slate-900 text-white">
    8th Foundation
  </option>

  <option value="9th Foundation" className="bg-slate-900 text-white">
    9th Foundation
  </option>

  <option value="10th Foundation" className="bg-slate-900 text-white">
    10th Foundation
  </option>

  <option value="11th Science" className="bg-slate-900 text-white">
    11th Science
  </option>

  <option value="12th Science" className="bg-slate-900 text-white">
    12th Science
  </option>

  <option value="NEET Preparation" className="bg-slate-900 text-white">
    NEET Preparation
  </option>

  <option value="JEE Preparation" className="bg-slate-900 text-white">
    JEE Preparation
  </option>

  <option value="MHT-CET" className="bg-slate-900 text-white">
    MHT-CET
  </option>
</select>

              <textarea
                rows={4}
                placeholder="Tell us how we can help..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-bold transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={20} />
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

            </form>

            <p className="mt-5 text-center text-sm text-slate-400">
              We usually respond within{" "}
              <span className="font-semibold text-cyan-400">
                24 Hours
              </span>.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <a
                href={`https://wa.me/${(settings?.whatsapp || "919370906120").replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 py-3 font-semibold transition hover:bg-green-500/20"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href={`tel:${settings?.phone || "+919370906120"}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-3 font-semibold transition hover:bg-cyan-500/20"
              >
                <Phone size={18} />
                Call
              </a>

              <a
                href={settings?.maps || "https://www.google.com/maps/place/Aimex+Science+Academy/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 py-3 font-semibold transition hover:bg-blue-500/20"
              >
                <Navigation size={18} />
                Directions
              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}