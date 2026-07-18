"use client";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

import ResultUploader from "../components/ResultUploader";

export default function ResultsPage() {

  const [results, setResults] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {

    try {

      const q = query(
        collection(db, "results"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setResults(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchResults();

  }, []);

  return (

    <div className="space-y-8">

      <h1 className="text-4xl font-black">

        Results Management

      </h1>

      <ResultUploader
        onUploadComplete={fetchResults}
      />

      {loading ? (

        <p className="text-slate-400">

          Loading...

        </p>

      ) : 

        <>

          <p className="text-slate-400">

            Total Results : {results.length}

          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {results.map((result) => (

  <div
    key={result.id}
    className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-xl"
  >

    {/* Student Photo */}

    <img
      src={result.imageUrl}
      alt={result.name}
      className="h-56 w-full object-cover"
    />

    {/* Content */}

    <div className="flex h-80 flex-col p-5">

      {/* Student Name */}

      <h2 className="line-clamp-2 break-all text-2xl font-bold">

        {result.name}

      </h2>

      {/* Exam */}

      <p className="mt-2 text-cyan-400 font-semibold">

        {result.exam}

      </p>

      {/* Score */}

      <p className="mt-2 text-lg font-bold text-white">

        {result.score}

      </p>

      {/* Rank */}

      {result.rank && (

        <p className="text-slate-300">

          🏅 {result.rank}

        </p>

      )}

      {/* Year */}

      {result.year && (

        <p className="text-slate-400">

          📅 {result.year}

        </p>

      )}

      {/* Featured */}

      <div className="mt-4 flex flex-wrap gap-2">

        {result.featured && (

          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">

            ⭐ Featured

          </span>

        )}

      </div>

      {/* Buttons */}

      <div className="mt-auto grid grid-cols-3 gap-3 pt-6">

        <button
          className="rounded-xl bg-blue-600 py-2 font-semibold transition hover:bg-blue-700"
        >
          👁 View
        </button>

        <button
          className="rounded-xl bg-amber-500 py-2 font-semibold transition hover:bg-amber-600"
        >
          ✏️ Edit
        </button>

        <button
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

      }

    </div>

  );

}