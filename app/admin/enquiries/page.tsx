"use client";

import { useEffect, useMemo, useState } from "react";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/firebase";

import EnquiryModal from "../components/EnquiryModal";

interface Enquiry {
  id: string;
  name: string;
  email?: string;
  phone: string;
  course: string;
  message?: string;
  status?: string;
  createdAt?: any;
}

export default function EnquiriesPage() {

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<
    "all" | "new" | "contacted"
  >("all");

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const [selectedEnquiry, setSelectedEnquiry] =
    useState<Enquiry | null>(null);

  const [modalOpen, setModalOpen] =
    useState(false);

  useEffect(() => {

    fetchEnquiries();

  }, []);

  const fetchEnquiries = async () => {

    setLoading(true);

    try {

      const q = query(
        collection(db, "enquiries"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Enquiry[];

      setEnquiries(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const markContacted = async () => {

    if (!selectedEnquiry) return;

    try {

      await updateDoc(

        doc(
          db,
          "enquiries",
          selectedEnquiry.id
        ),

        {
          status: "contacted",
        }

      );

      await fetchEnquiries();

      setModalOpen(false);

      setSelectedEnquiry(null);

    } catch (error) {

      console.error(error);

    }

  };

  const deleteEnquiry = async () => {

    if (!selectedEnquiry) return;

    const confirmed = window.confirm(
      `Delete enquiry from "${selectedEnquiry.name}"?`
    );

    if (!confirmed) return;

    try {

      await deleteDoc(
        doc(
          db,
          "enquiries",
          selectedEnquiry.id
        )
      );

      await fetchEnquiries();

      setModalOpen(false);

      setSelectedEnquiry(null);

    } catch (error) {

      console.error(error);

    }

  };

  const filteredEnquiries = useMemo(() => {

    return enquiries.filter((e) => {

      const keyword =
        search.toLowerCase();

      const matchesSearch =

        e.name?.toLowerCase().includes(keyword) ||

        e.email?.toLowerCase().includes(keyword) ||

        e.phone?.toLowerCase().includes(keyword) ||

        e.course?.toLowerCase().includes(keyword);

      const matchesFilter =

        filter === "all"

          ? true

          : filter === "new"

          ? e.status !== "contacted"

          : e.status === "contacted";

      return (
        matchesSearch &&
        matchesFilter
      );

    });

  }, [

    enquiries,
    search,
    filter,

  ]);

  return (

    <div className="space-y-8">
              {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-black">

            Student Enquiries

          </h1>

          <p className="mt-2 text-slate-400">

            Manage all student enquiries from one place.

          </p>

        </div>

        <button
          className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:opacity-90"
        >
          📤 Export Excel
        </button>

      </div>

      {/* Search */}

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search by name, phone, email or course..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
      />

      {/* Filters */}

      <div className="flex flex-wrap gap-3">

        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-5 py-2 font-medium transition ${
            filter === "all"
              ? "bg-cyan-500 text-white"
              : "bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("new")}
          className={`rounded-full px-5 py-2 font-medium transition ${
            filter === "new"
              ? "bg-orange-500 text-white"
              : "bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          New
        </button>

        <button
          onClick={() => setFilter("contacted")}
          className={`rounded-full px-5 py-2 font-medium transition ${
            filter === "contacted"
              ? "bg-green-500 text-white"
              : "bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          Contacted
        </button>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-white/5">

              <tr>

                <th className="px-6 py-4 text-left">
                  Student
                </th>

                <th className="px-6 py-4 text-left">
                  Course
                </th>

                <th className="px-6 py-4 text-left">
                  Phone
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-left">
                  Date
                </th>

                <th className="px-6 py-4 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>
                              {loading ? (

                <tr>

                  <td
                    colSpan={6}
                    className="py-16 text-center text-slate-400"
                  >
                    Loading enquiries...
                  </td>

                </tr>

              ) : filteredEnquiries.length === 0 ? (

                <tr>

                  <td
                    colSpan={6}
                    className="py-16 text-center text-slate-400"
                  >
                    No enquiries found.
                  </td>

                </tr>

              ) : (

                filteredEnquiries.map((enquiry) => (

                  <tr
                    key={enquiry.id}
                    className="border-t border-white/10 transition hover:bg-white/5"
                  >

                    {/* Student */}

                    <td className="px-6 py-5">

                      <div>

                        <p className="font-semibold">

                          {enquiry.name}

                        </p>

                        <p className="text-sm text-slate-400">

                          {enquiry.email || "No Email"}

                        </p>

                      </div>

                    </td>

                    {/* Course */}

                    <td className="px-6 py-5">

                      {enquiry.course}

                    </td>

                    {/* Phone */}

                    <td className="px-6 py-5">

                      {enquiry.phone}

                    </td>

                    {/* Status */}

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          enquiry.status === "contacted"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {enquiry.status === "contacted"
                          ? "✓ Contacted"
                          : "New"}
                      </span>

                    </td>

                    {/* Date */}

                    <td className="px-6 py-5">

                      {enquiry.createdAt?.toDate
                        ? enquiry.createdAt
                            .toDate()
                            .toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                        : "--"}

                    </td>

                    {/* Actions */}

                    <td className="px-6 py-5">

                      <div className="flex flex-wrap gap-2">

                        <button
                          onClick={() => {
                            setSelectedEnquiry(enquiry);
                            setModalOpen(true);
                          }}
                          className="rounded-xl bg-cyan-500/20 px-4 py-2 text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
                        >
                          👁 View
                        </button>

                        <button
                          onClick={() => {

                            const phone = enquiry.phone.replace(/\D/g, "");

                            const message =
`Hello ${enquiry.name},

Thank you for your enquiry at AimEx Science Academy.

We received your enquiry for ${enquiry.course}.

Our admission team will contact you shortly.

Regards,
AimEx Science Academy`;

                            window.open(
                              `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
                              "_blank"
                            );

                          }}
                          className="rounded-xl bg-green-500/20 px-4 py-2 text-green-400 transition hover:bg-green-500 hover:text-white"
                        >
                          💬 WhatsApp
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}
                          </tbody>

          </table>

        </div>

      </div>

      <EnquiryModal
        open={modalOpen}
        enquiry={selectedEnquiry}
        onClose={() => {
          setModalOpen(false);
          setSelectedEnquiry(null);
        }}
        onContacted={markContacted}
        onDelete={deleteEnquiry}
      />

    </div>

  );

}
