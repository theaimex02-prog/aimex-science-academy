"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Results", href: "#results" },
  { name: "Faculty", href: "#faculty" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
  <div className="relative mx-auto mt-4 max-w-7xl px-4">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#08101f]/70 px-6 py-4 backdrop-blur-2xl shadow-2xl shadow-cyan-500/5">

        {/* Logo */}
<Link href="/" className="flex items-center gap-3">
  <Image
    src="/images/logo.png"
    alt="AimEx Science Academy"
    width={65}
    height={65}
    className="rounded-xl"
    priority
  />

  <div className="leading-none">
    <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-black text-transparent">
      AimEx
    </h1>

    <p className="text-xs tracking-wide text-slate-400">
      Science Academy
    </p>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
  {navItems.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className="
        group
        rounded-xl
        border
        border-white/10
        bg-[#111827]/70
        px-5
        py-2.5
        text-sm
        font-semibold
        text-slate-300
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-cyan-500/10
        hover:text-white
        hover:shadow-lg
        hover:shadow-cyan-500/30
      "
    >
      {item.name}
    </a>
  ))}
</nav>

        {/* Desktop Button */}
        <a
  href="#contact"
  className="hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 md:block"
>
  Admission Open
</a>

        {/* Mobile Menu */}
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-xl border border-white/10 p-2 text-white md:hidden"
>
  {menuOpen ? <X size={22} /> : <Menu size={22} />}
</button>

      </div>
     {menuOpen && (
  <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-white/10 bg-[#08101f]/95 p-4 backdrop-blur-2xl shadow-2xl md:hidden">
    <nav className="flex flex-col gap-3">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-cyan-500/10 hover:text-white"
        >
          {item.name}
        </a>
      ))}

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center font-semibold text-white"
      >
        Admission Open
      </a>
    </nav>
  </div>
)}
</div>
    </header>
  );
}