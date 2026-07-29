"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-[#07111f] px-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 transition hover:bg-white/10"
        >
          <Menu size={26} />
        </button>

        <h1 className="text-lg font-bold">AimEx Admin</h1>

        <div className="w-10" />
      </header>

      <div className="flex min-h-[calc(100vh-64px)] lg:min-h-screen">
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        <main className="min-w-0 flex-1 overflow-hidden p-4 sm:p-6 lg:p-8">
  {children}
</main>
      </div>
    </div>
  );
}