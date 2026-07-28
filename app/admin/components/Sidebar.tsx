"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, GraduationCap } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

import {
  LayoutDashboard,
  Inbox,
  Image,
  Trophy,
  Users,
  Star,
  Bell,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Enquiries",
    href: "/admin/enquiries",
    icon: Inbox,
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: Image,
  },
  {
    name: "Results",
    href: "/admin/results",
    icon: Trophy,
  },
  {
    name: "Faculty",
    href: "/admin/faculty",
    icon: Users,
  },
  {
    name: "Testimonials",
    href: "/admin/testimonials",
    icon: Star,
  },
  {
    name: "Announcements",
    href: "/admin/announcements",
    icon: Bell,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          bg-[#07111f] border-r border-white/10
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="border-b border-white/10 p-8 pt-2 lg:pt-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <GraduationCap size={28} className="text-white" />
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-black text-transparent">
                AimEx
              </h1>

              <p className="text-slate-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                  }`}
                >
                  <Icon size={22} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-6">
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-sm text-slate-400">
              AimEx Science Academy
            </p>

            <h3 className="mt-2 text-lg font-bold">
              Administration
            </h3>

            <p className="mt-2 text-xs text-slate-500">
              Version 1.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}