"use client";

import Sidebar from "./components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}