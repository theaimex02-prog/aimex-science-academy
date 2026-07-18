"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#08111F]/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Left */}

        <div>

          <h1 className="text-3xl font-black">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Welcome back, Admin 👋
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="relative hidden lg:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              placeholder="Search..."
              className="w-72 rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 outline-none transition focus:border-cyan-400"
            />

          </div>

          {/* Notification */}

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10">

            <Bell size={20} />

          </button>

          {/* Admin */}

          <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400">

            <UserCircle2
              size={34}
              className="text-cyan-400"
            />

            <div className="text-left">

              <p className="text-sm font-semibold">
                Admin
              </p>

              <p className="text-xs text-slate-400">
                AimEx Science Academy
              </p>

            </div>

          </button>

        </div>

      </div>

    </header>
  );
}