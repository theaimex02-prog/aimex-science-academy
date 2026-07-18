"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Inbox,
  Image,
  Trophy,
  Users,
  Star,
  Bell,
  Settings,
  GraduationCap,
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-[#07111f] border-r border-white/10">

      {/* Logo */}

      <div className="border-b border-white/10 p-8">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">

            <GraduationCap
              size={28}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              AimEx

            </h1>

            <p className="text-slate-400">

              Admin Panel

            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-6">

        <div className="space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (

              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                }`}
              >

                <Icon size={22} />

                <span>

                  {item.name}

                </span>

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

          <h3 className="mt-2 text-lg font-bold text-white">

            Administration

          </h3>

          <p className="mt-2 text-xs text-slate-500">

            Version 1.0

          </p>

        </div>

      </div>

    </aside>
  );
}