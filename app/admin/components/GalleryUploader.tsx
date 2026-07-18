"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/cloudinary";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

interface Props {
  onUploadComplete: () => void;
}

export default function GalleryUploader({
  onUploadComplete,
}: Props) {

  const [file, setFile] = useState<File | null>(null);

  const [title, setTitle] = useState("");

  const [featured, setFeatured] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if (!file) {

      alert("Please choose an image.");

      return;

    }

    try {

      setLoading(true);

      const uploaded = await uploadImage(file);

      await addDoc(collection(db, "gallery"), {

        title,

        imageUrl: uploaded.secure_url,

        publicId: uploaded.public_id,

        featured,

        createdAt: serverTimestamp(),

      });

      setFile(null);

      setTitle("");

      setFeatured(false);

      onUploadComplete();

      alert("Image uploaded successfully!");

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

        Upload Image

      </h2>

      <div className="mt-6 space-y-5">

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
          className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
        />

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Image Title"
          className="w-full rounded-xl border border-white/10 bg-white/10 p-3"
        />

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={featured}
            onChange={(e) =>
              setFeatured(e.target.checked)
            }
          />

          Featured Image

        </label>

        <button

          onClick={handleUpload}

          disabled={loading}

          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-bold"

        >

          {loading ? "Uploading..." : "Upload"}

        </button>

      </div>

    </div>

  );

}