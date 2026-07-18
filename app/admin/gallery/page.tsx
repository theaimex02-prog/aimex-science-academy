"use client";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

import GalleryUploader from "../components/GalleryUploader";

export default function GalleryPage() {

  const [images, setImages] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState<any>(null);

  const [viewOpen, setViewOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [editTitle, setEditTitle] = useState("");

  const [editCategory, setEditCategory] = useState("");

  const [editFeatured, setEditFeatured] = useState(false);

  const fetchImages = async () => {

    try {

      const q = query(
        collection(db, "gallery"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setImages(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchImages();

  }, []);

  const deleteImage = async (image: any) => {

    if (!window.confirm("Delete this image?")) return;

    try {

      await fetch("/api/cloudinary/delete", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          publicId: image.publicId,
        }),

      });

      await deleteDoc(doc(db, "gallery", image.id));

      fetchImages();

      alert("Image deleted successfully!");

    } catch (error) {

      console.error(error);

      alert("Failed to delete image.");

    }

  };

  const updateImage = async () => {

    if (!selectedImage) return;

    try {

      await updateDoc(

        doc(db, "gallery", selectedImage.id),

        {

          title: editTitle,

          category: editCategory,

          featured: editFeatured,

        }

      );

      fetchImages();

      setEditOpen(false);

      alert("Image updated successfully!");

    } catch (error) {

      console.error(error);

      alert("Failed to update image.");

    }

  };

  return (
    <div className="space-y-8">

  <h1 className="text-4xl font-black">
    Gallery Management
  </h1>

  <GalleryUploader
    onUploadComplete={fetchImages}
  />

  {loading ? (

    <p className="text-slate-400">
      Loading...
    </p>

  ) : (

    <>

      <p className="text-slate-400">

        Total Images : {images.length}

      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {images.map((image) => (

          <div
            key={image.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-xl"
          >

            {/* Image */}

            <img
              src={image.imageUrl}
              alt={image.title}
              className="h-52 w-full object-cover"
            />

            {/* Content */}

            <div className="flex h-72 flex-col p-5">

              <h2 className="line-clamp-3 break-all text-xl font-bold leading-tight">

                {image.title}

              </h2>

              <div className="mt-4 flex flex-wrap gap-2">

                {image.featured && (

                  <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">

                    ⭐ Featured

                  </span>

                )}

                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">

                  {image.category || "Gallery"}

                </span>

              </div>

              {/* Buttons */}

              <div className="mt-auto grid grid-cols-3 gap-3 pt-6">

                <button

                  onClick={() => {

                    setSelectedImage(image);

                    setViewOpen(true);

                  }}

                  className="rounded-xl bg-blue-600 py-2 font-semibold transition hover:bg-blue-700"

                >

                  👁 View

                </button>

                <button

                  onClick={() => {

                    setSelectedImage(image);

                    setEditTitle(image.title);

                    setEditCategory(image.category || "");

                    setEditFeatured(image.featured || false);

                    setEditOpen(true);

                  }}

                  className="rounded-xl bg-amber-500 py-2 font-semibold transition hover:bg-amber-600"

                >

                  ✏️ Edit

                </button>

                <button

                  onClick={() => deleteImage(image)}

                  className="rounded-xl bg-red-600 py-2 font-semibold transition hover:bg-red-700"

                >

                  🗑 Delete

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </>

  )}
  {/* =========================
      EDIT MODAL
========================= */}

{editOpen && selectedImage && (

  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">

    <div className="w-full max-w-xl rounded-3xl bg-[#111827] p-8 shadow-2xl">

      <h2 className="mb-8 text-3xl font-black">

        ✏️ Edit Image

      </h2>

      <div className="space-y-6">

        {/* Title */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-300">

            Image Title

          </label>

          <input

            value={editTitle}

            onChange={(e) => setEditTitle(e.target.value)}

            className="w-full rounded-xl border border-white/10 bg-[#1F2937] p-4 outline-none transition focus:border-cyan-500"

            placeholder="Enter image title"

          />

        </div>

        {/* Category */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-300">

            Category

          </label>

          <input

            value={editCategory}

            onChange={(e) => setEditCategory(e.target.value)}

            className="w-full rounded-xl border border-white/10 bg-[#1F2937] p-4 outline-none transition focus:border-cyan-500"

            placeholder="Category"

          />

        </div>

        {/* Featured */}

        <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1F2937] p-4">

          <input

            type="checkbox"

            checked={editFeatured}

            onChange={(e) => setEditFeatured(e.target.checked)}

            className="h-5 w-5"

          />

          <span className="font-semibold">

            ⭐ Featured Image

          </span>

        </label>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-4">

        <button

          onClick={() => setEditOpen(false)}

          className="flex-1 rounded-xl border border-white/20 py-3 font-semibold transition hover:bg-white/10"

        >

          Cancel

        </button>

        <button

          onClick={updateImage}

          className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold transition hover:scale-[1.02]"

        >

          💾 Save Changes

        </button>

      </div>

    </div>

  </div>

)}
    </div>

  );

}