"use client";
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";
export default function AnnouncementsPage() {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState("");
const [message, setMessage] = useState("");
const [category, setCategory] = useState("General");
const [priority, setPriority] = useState("Medium");
const [loading, setLoading] = useState(false);
const publishAnnouncement = async () => {

  if (!title.trim() || !message.trim()) {
    alert("Please fill all required fields.");
    return;
  }

  try {

    setLoading(true);

    await addDoc(
      collection(db, "announcements"),
      {
        title,
        message,
        category,
        priority,
        published: true,
        createdAt: serverTimestamp(),
      }
    );

    alert("Announcement published!");

    setTitle("");
    setMessage("");
    setCategory("General");
    setPriority("Medium");

    setOpenModal(false);

  } catch (error) {

    console.error(error);

    alert("Failed to publish announcement.");

  } finally {

    setLoading(false);

  }

};
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-black">
          📢 Announcements
        </h1>

        <p className="mt-2 text-slate-400">
          Create and manage announcements for the website.
        </p>

      </div>

      {/* Empty State */}

      <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-16 text-center">

        <h2 className="text-2xl font-bold">
          No announcements yet
        </h2>

        <p className="mt-3 text-slate-400">
          Click the button below to create your first announcement.
        </p>

        <button
  onClick={() => setOpenModal(true)}
  className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:opacity-90"
>
  ➕ Create Announcement
</button>

      </div>
{openModal && (

  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

    <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0B1220] p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-black">

          New Announcement

        </h2>

        <button
          onClick={() => setOpenModal(false)}
          className="rounded-xl bg-red-500 px-4 py-2"
        >
          ✕
        </button>

      </div>

      <div className="mt-8 space-y-6">

  {/* Title */}

  <div>

    <label className="mb-2 block font-semibold">
      Announcement Title
    </label>

    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Admissions Open 2027"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
    />

  </div>

  {/* Message */}

  <div>

    <label className="mb-2 block font-semibold">
      Message
    </label>

    <textarea
      rows={5}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Write the announcement..."
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
    />

  </div>

  {/* Category & Priority */}

  <div className="grid gap-5 md:grid-cols-2">

    <div>

      <label className="mb-2 block font-semibold">
        Category
      </label>

      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none focus:border-cyan-400"
>
  <option value="General" className="bg-[#111827] text-white">
    General
  </option>
  <option value="Admission" className="bg-[#111827] text-white">
    Admission
  </option>
  <option value="Holiday" className="bg-[#111827] text-white">
    Holiday
  </option>
  <option value="Exam" className="bg-[#111827] text-white">
    Exam
  </option>
  <option value="Notice" className="bg-[#111827] text-white">
    Notice
  </option>
</select>
    </div>

    <div>

      <label className="mb-2 block font-semibold">
        Priority
      </label>

      <select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none focus:border-cyan-400"
>
  <option value="High" className="bg-[#111827] text-white">
    High
  </option>
  <option value="Medium" className="bg-[#111827] text-white">
    Medium
  </option>
  <option value="Low" className="bg-[#111827] text-white">
    Low
  </option>
</select>

    </div>

  </div>

  {/* Buttons */}

  <div className="flex justify-end gap-4 pt-4">

    <button
      onClick={() => setOpenModal(false)}
      className="rounded-2xl border border-white/10 px-6 py-3 transition hover:bg-white/10"
    >
      Cancel
    </button>

    <button
      onClick={publishAnnouncement}
      disabled={loading}
      className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-bold transition hover:opacity-90 disabled:opacity-50"
    >
      {loading ? "Publishing..." : "🚀 Publish"}
    </button>

  </div>

</div>

    </div>

  </div>

)}
    </div>
  );
}