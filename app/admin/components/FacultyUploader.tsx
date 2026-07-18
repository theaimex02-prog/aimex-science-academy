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

export default function FacultyUploader({
  onUploadComplete,
}: Props) {

  const [file, setFile] = useState<File | null>(null);

  const [name, setName] = useState("");

  const [subject, setSubject] = useState("");

  const [qualification, setQualification] = useState("");

  const [experience, setExperience] = useState("");

  const [description, setDescription] = useState("");

  const [featured, setFeatured] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if (!file) {

      alert("Please choose a faculty photo.");

      return;

    }

    try {

      setLoading(true);

      const uploaded = await uploadImage(file);

      await addDoc(collection(db, "faculty"), {

        name,

        subject,

        qualification,

        experience,

        description,

        featured,

        imageUrl: uploaded.secure_url,

        publicId: uploaded.public_id,

        createdAt: serverTimestamp(),

      });

      setFile(null);

      setName("");

      setSubject("");

      setQualification("");

      setExperience("");

      setDescription("");

      setFeatured(false);

      onUploadComplete();

      alert("Faculty added successfully!");

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

    Add Faculty Member

  </h2>

  <div className="mt-6 space-y-5">

    {/* Faculty Photo */}

    <input
      type="file"
      accept="image/*"
      onChange={(e) =>
        setFile(e.target.files?.[0] || null)
      }
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Name */}

    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Faculty Name"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Subject */}

    <input
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      placeholder="Subject (Physics, Chemistry, Mathematics...)"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Qualification */}

    <input
      value={qualification}
      onChange={(e) => setQualification(e.target.value)}
      placeholder="Qualification"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Experience */}

    <input
      value={experience}
      onChange={(e) => setExperience(e.target.value)}
      placeholder="Experience (Example: 12 Years)"
      className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
    />

    {/* Description */}

    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Faculty Description"
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

      Featured Faculty

    </label>

    {/* Publish */}

    <button

      onClick={handleUpload}

      disabled={loading}

      className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-bold text-white transition hover:scale-[1.02]"

    >

      {loading ? "Publishing..." : "Publish Faculty"}

    </button>

  </div>

</div>

);

}