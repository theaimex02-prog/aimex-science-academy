"use client";

import { useState } from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

import { uploadImage } from "@/lib/cloudinary";

interface Props {
  onUploadComplete: () => void;
}

export default function ResultUploader({
  onUploadComplete,
}: Props) {

  const [file, setFile] = useState<File | null>(null);

  const [name, setName] = useState("");

  const [exam, setExam] = useState("");

  const [score, setScore] = useState("");

  const [rank, setRank] = useState("");

  const [year, setYear] = useState("");

  const [description, setDescription] = useState("");

  const [featured, setFeatured] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if (!file) {

      alert("Please choose a student photo.");

      return;

    }

    try {

      setLoading(true);

      const uploaded = await uploadImage(file);

      await addDoc(collection(db, "results"), {

        name,

        exam,

        score,

        rank,

        year,

        description,

        featured,

        imageUrl: uploaded.secure_url,

        publicId: uploaded.public_id,

        createdAt: serverTimestamp(),

      });

      setFile(null);

      setName("");

      setExam("");

      setScore("");

      setRank("");

      setYear("");

      setDescription("");

      setFeatured(false);

      onUploadComplete();

      alert("Result published successfully!");

    } catch (error) {

      console.error(error);

      alert("Upload failed.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-2xl font-bold">

    Add Student Result

  </h2>

  <div className="mt-6 space-y-5">

    {/* Student Photo */}

    <input
      type="file"
      accept="image/*"
      onChange={(e) =>
        setFile(e.target.files?.[0] || null)
      }
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Student Name */}

    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Student Name"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Exam */}

    <select
  value={exam}
  onChange={(e) => setExam(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
>

  <option value="" className="bg-[#111827] text-white">
    Select Exam
  </option>

  <option value="JEE Main" className="bg-[#111827] text-white">
    JEE Main
  </option>

  <option value="JEE Advanced" className="bg-[#111827] text-white">
    JEE Advanced
  </option>

  <option value="NEET" className="bg-[#111827] text-white">
    NEET
  </option>

  <option value="MHT-CET" className="bg-[#111827] text-white">
    MHT-CET
  </option>

  <option value="HSC Board" className="bg-[#111827] text-white">
    HSC Board
  </option>

  <option value="SSC Board" className="bg-[#111827] text-white">
    SSC Board
  </option>

</select>

    {/* Score */}

    <input
      value={score}
      onChange={(e) => setScore(e.target.value)}
      placeholder="Score / Percentage / Percentile"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Rank */}

    <input
      value={rank}
      onChange={(e) => setRank(e.target.value)}
      placeholder="AIR / Rank (Optional)"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Year */}

    <input
      value={year}
      onChange={(e) => setYear(e.target.value)}
      placeholder="Year (Example: 2026)"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Description */}

    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Achievement Description"
      rows={4}
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Featured */}

    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={featured}
        onChange={(e) =>
          setFeatured(e.target.checked)
        }
      />

      Featured Result

    </label>

    {/* Publish */}

    <button

      onClick={handleUpload}

      disabled={loading}

      className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-bold text-white transition hover:scale-[1.02]"

    >

      {loading ? "Publishing..." : "Publish Result"}

    </button>

  </div>

</div>

);

}