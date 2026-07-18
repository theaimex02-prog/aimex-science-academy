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

import FacultyUploader from "../components/FacultyUploader";

export default function FacultyPage() {

  const [faculty, setFaculty] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  const [viewOpen, setViewOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [editName, setEditName] = useState("");

  const [editSubject, setEditSubject] = useState("");

  const [editQualification, setEditQualification] = useState("");

  const [editExperience, setEditExperience] = useState("");

  const [editDescription, setEditDescription] = useState("");

  const [editFeatured, setEditFeatured] = useState(false);

  const fetchFaculty = async () => {

    try {

      const q = query(
        collection(db, "faculty"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFaculty(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const deleteFaculty = async (teacher: any) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this faculty member?"
    );

    if (!confirmDelete) return;

    try {

      await fetch("/api/cloudinary/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          publicId: teacher.publicId,
        }),
      });

      await deleteDoc(
        doc(db, "faculty", teacher.id)
      );

      fetchFaculty();

      alert("Faculty deleted successfully!");

    } catch (error) {

      console.error(error);

      alert("Delete failed.");

    }

  };

  const updateFaculty = async () => {

    if (!selectedFaculty) return;

    try {

      await updateDoc(
        doc(db, "faculty", selectedFaculty.id),
        {
          name: editName,
          subject: editSubject,
          qualification: editQualification,
          experience: editExperience,
          description: editDescription,
          featured: editFeatured,
        }
      );

      fetchFaculty();

      setEditOpen(false);

      alert("Faculty updated successfully!");

    } catch (error) {

      console.error(error);

      alert("Update failed.");

    }

  };

  useEffect(() => {

    fetchFaculty();

  }, []);

  return (

    <div className="space-y-8">

      <h1 className="text-4xl font-black">

        Faculty Management

      </h1>

      <FacultyUploader
        onUploadComplete={fetchFaculty}
      />

      {loading ? (

        <p className="text-slate-400">

          Loading...

        </p>

      ) : (

        <>

          <p className="text-slate-400">

            Total Faculty : {faculty.length}

          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {faculty.map((teacher) => (

  <div
    key={teacher.id}
    className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-xl"
  >

    {/* Faculty Image */}

    <img
      src={teacher.imageUrl}
      alt={teacher.name}
      className="h-56 w-full object-cover"
    />

    {/* Content */}

    <div className="flex h-80 flex-col p-5">

      {/* Name */}

      <h2 className="line-clamp-2 break-all text-2xl font-bold">

        {teacher.name}

      </h2>

      {/* Subject */}

      <p className="mt-3 text-lg font-semibold text-cyan-400">

        {teacher.subject}

      </p>

      {/* Qualification */}

      <p className="mt-2 text-slate-300">

        🎓 {teacher.qualification}

      </p>

      {/* Experience */}

      <p className="mt-2 text-slate-400">

        💼 {teacher.experience}

      </p>

      {/* Featured */}

      <div className="mt-4 flex flex-wrap gap-2">

        {teacher.featured && (

          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">

            ⭐ Featured

          </span>

        )}

      </div>

      {/* Buttons */}

      <div className="mt-auto grid grid-cols-3 gap-3 pt-6">

        <button

          onClick={() => {

            setSelectedFaculty(teacher);

            setViewOpen(true);

          }}

          className="rounded-xl bg-blue-600 py-2 font-semibold hover:bg-blue-700"

        >

          👁 View

        </button>

        <button

          onClick={() => {

            setSelectedFaculty(teacher);

            setEditName(teacher.name);

            setEditSubject(teacher.subject);

            setEditQualification(teacher.qualification);

            setEditExperience(teacher.experience);

            setEditDescription(teacher.description || "");

            setEditFeatured(teacher.featured || false);

            setEditOpen(true);

          }}

          className="rounded-xl bg-amber-500 py-2 font-semibold hover:bg-amber-600"

        >

          ✏️ Edit

        </button>

        <button

          onClick={() => deleteFaculty(teacher)}

          className="rounded-xl bg-red-600 py-2 font-semibold hover:bg-red-700"

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

      {/* ================= VIEW MODAL ================= */}

      {viewOpen && selectedFaculty && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">

          <div className="relative w-full max-w-4xl rounded-3xl bg-[#111827] p-6">

            <button

              onClick={() => setViewOpen(false)}

              className="absolute right-4 top-4 rounded-full bg-red-600 px-4 py-2 font-bold hover:bg-red-700"

            >

              ✕

            </button>

            <img

              src={selectedFaculty.imageUrl}

              alt={selectedFaculty.name}

              className="max-h-[70vh] w-full rounded-2xl object-cover"

            />

            <div className="mt-6 space-y-3">

              <h2 className="break-words text-4xl font-black">

                {selectedFaculty.name}

              </h2>

              <p className="text-xl font-semibold text-cyan-400">

                {selectedFaculty.subject}

              </p>

              <p className="text-slate-300">

                🎓 {selectedFaculty.qualification}

              </p>

              <p className="text-slate-300">

                💼 {selectedFaculty.experience}

              </p>

              {selectedFaculty.featured && (

                <span className="inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-300">

                  ⭐ Featured Faculty

                </span>

              )}

              <div className="rounded-xl bg-white/5 p-4">

                <p className="whitespace-pre-wrap break-words text-slate-300">

                  {selectedFaculty.description || "No description added."}

                </p>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ================= EDIT MODAL ================= */}

      {editOpen && selectedFaculty && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">

          <div className="w-full max-w-2xl rounded-3xl bg-[#111827] p-8">
            <h2 className="mb-6 text-3xl font-black">

  Edit Faculty

</h2>

<div className="space-y-4">

  <input
    value={editName}
    onChange={(e) => setEditName(e.target.value)}
    placeholder="Faculty Name"
    className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white"
  />

  <input
    value={editSubject}
    onChange={(e) => setEditSubject(e.target.value)}
    placeholder="Subject"
    className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white"
  />

  <input
    value={editQualification}
    onChange={(e) => setEditQualification(e.target.value)}
    placeholder="Qualification"
    className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white"
  />

  <input
    value={editExperience}
    onChange={(e) => setEditExperience(e.target.value)}
    placeholder="Experience"
    className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white"
  />

  <textarea
    rows={5}
    value={editDescription}
    onChange={(e) => setEditDescription(e.target.value)}
    placeholder="Description"
    className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white"
  />

  <label className="flex items-center gap-3">

    <input
      type="checkbox"
      checked={editFeatured}
      onChange={(e) =>
        setEditFeatured(e.target.checked)
      }
    />

    Featured Faculty

  </label>

</div>

<div className="mt-8 flex gap-4">

  <button

    onClick={() => setEditOpen(false)}

    className="flex-1 rounded-xl border border-white/20 py-3 font-semibold hover:bg-white/10"

  >

    Cancel

  </button>

  <button

    onClick={updateFaculty}

    className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold"

  >

    Save Changes

  </button>

</div>

</div>

</div>

)}

</div>

);

}
