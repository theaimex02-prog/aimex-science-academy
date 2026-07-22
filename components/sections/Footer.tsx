"use client";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getSettings, WebsiteSettings } from "@/lib/getSettings";
export default function Footer() {
  const [settings, setSettings] = useState<WebsiteSettings | null>(null);

useEffect(() => {
  const loadSettings = async () => {
    const data = await getSettings();
    if (data) setSettings(data);
  };

  loadSettings();
}, []);
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 md:pt-12 md:pb-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

<div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-cyan-400">
  {settings?.academyName || "AimEx Science Academy"}
</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Building future doctors, engineers and achievers through
              quality education, experienced faculty and modern teaching.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-4 text-lg font-bold text-cyan-300">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="#about" className="block transition hover:text-cyan-400">
                About
              </Link>

              <Link href="#courses" className="block transition hover:text-cyan-400">
                Courses
              </Link>

              <Link href="#results" className="block transition hover:text-cyan-400">
                Results
              </Link>

              <Link href="#faculty" className="block transition hover:text-cyan-400">
                Faculty
              </Link>

              <Link href="#contact" className="block transition hover:text-cyan-400">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
  <Phone size={18} className="text-cyan-400" />

  <a
    href={`tel:${settings?.phone || "+919370906120"}`}
    className="text-slate-300 transition hover:text-cyan-400"
  >
    {settings?.phone || "+91 93709 06120"}
  </a>
</div>

<div className="flex items-center gap-3">
  <FaWhatsapp size={20} className="text-cyan-400" />

  <a
    href="https://wa.me/919370906120"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-300 transition hover:text-cyan-400"
  >
    +91 93709 06120
  </a>
</div>
              <div className="flex items-center gap-3">
  <Mail size={18} className="text-cyan-400" />

  <a
    href={`mailto:${settings?.email || "theaimex02@gmail.com"}`}
    className="text-slate-300 transition hover:text-cyan-400"
  >
    {settings?.email || "theaimex02@gmail.com"}
  </a>
</div>

              <div className="flex items-start gap-3">
  <MapPin
    size={20}
    className="mt-1 flex-shrink-0 text-cyan-400"
  />

  <a
    href={settings?.maps || "https://maps.google.com"}
    target="_blank"
    rel="noopener noreferrer"
    className="leading-7 text-slate-300 transition hover:text-cyan-400"
  >
    {settings?.address || (
      <>
        AimEx Science Academy, Flat No. 206,
        <br />
        Samruddhi Business Square,
        <br />
        Nashik, Maharashtra, India
      </>
    )}
  </a>
</div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Follow Us
            </h3>

            <div className="flex gap-5">

              <a
  href={settings?.facebook || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-white/5 p-4 transition hover:scale-110 hover:bg-blue-600"
>
  <FaFacebook size={22} />
</a>

              <a
  href={settings?.instagram || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-white/5 p-4 transition hover:scale-110 hover:bg-pink-500"
>
  <FaInstagram size={22} />
</a>

              <a
  href={settings?.youtube || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-white/5 p-4 transition hover:scale-110 hover:bg-red-500"
>
  <FaYoutube size={22} />
</a>

            </div>

          </div>

        </div>

        {/* Bottom */}

<div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-slate-400">
  © {new Date().getFullYear()} {settings?.academyName || "AimEx Science Academy"}. All Rights Reserved.
</p>

            <p className="text-sm text-slate-400">
              Designed with ❤️ by AimEx Science Academy
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}