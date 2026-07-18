"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  User,
  Phone,
  Mail,
  GraduationCap,
  MessageSquare,
  CalendarDays,
} from "lucide-react";

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  course: string;
  message?: string;
  status?: string;
  createdAt?: any;
}

interface EnquiryModalProps {
  enquiry: Enquiry | null;
  open: boolean;
  onClose: () => void;
  onDelete?: () => void;
  onContacted?: () => void;
}

export default function EnquiryModal({
  enquiry,
  open,
  onClose,
  onDelete,
  onContacted,
}: EnquiryModalProps) {

  if (!enquiry) return null;

  return (

    <AnimatePresence>

      {open && (

        <motion.div

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
        >

          <motion.div

            initial={{
              opacity: 0,
              scale: .9,
              y: 30,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: .9,
              y: 30,
            }}

            transition={{
              duration: .25,
            }}

            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] shadow-2xl"
          >

            {/* Header */}

            <div className="relative border-b border-white/10 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 p-8">

              <button

                onClick={onClose}

                className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 transition hover:bg-red-500"

              >

                <X size={20} />

              </button>

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">

                  <User
                    size={38}
                    className="text-white"
                  />

                </div>

                <div>

                  <h2 className="text-3xl font-black text-white">

                    {enquiry.name}

                  </h2>
<p
  className={`mt-2 inline-flex rounded-full px-4 py-1 text-sm font-semibold ${
    enquiry.status === "contacted"
      ? "bg-green-500/20 text-green-400"
      : "bg-orange-500/20 text-orange-400"
  }`}
>
  {enquiry.status === "contacted"
    ? "✓ Contacted"
    : "New"}
</p>

                </div>

              </div>

            </div>

            {/* Body */}

            <div className="space-y-6 p-8">

              <div className="grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center gap-3">

                    <Phone
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="font-semibold">
                      Phone
                    </span>

                  </div>

                  <p className="mt-3 text-slate-300">

                    {enquiry.phone}

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center gap-3">

                    <Mail
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="font-semibold">
                      Email
                    </span>

                  </div>

                  <p className="mt-3 break-all text-slate-300">

                    {enquiry.email || "Not Provided"}

                  </p>

                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center gap-3">

                    <GraduationCap
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="font-semibold">
                      Course
                    </span>

                  </div>

                  <p className="mt-3 text-slate-300">

                    {enquiry.course}

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center gap-3">

                    <CalendarDays
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="font-semibold">
                      Submitted
                    </span>

                  </div>

                  <p className="mt-3 text-slate-300">

                    {enquiry.createdAt?.toDate
                      ? enquiry.createdAt
                          .toDate()
                          .toLocaleString()
                      : "Just Now"}

                  </p>

                </div>

              </div>

              {/* Message */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <div className="flex items-center gap-3">

                  <MessageSquare
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="font-semibold">
                    Student Message
                  </span>

                </div>

                <p className="break-all whitespace-pre-wrap">

                  {enquiry.message || "No message provided."}

                </p>

              </div>

              {/* Action Buttons */}

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">

                <button
                  onClick={onContacted}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 py-4 font-bold transition hover:scale-[1.02]"
                >
                  ✔ Mark Contacted
                </button>

                <button
                  onClick={onDelete}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 py-4 font-bold transition hover:scale-[1.02]"
                >
                  🗑 Delete Enquiry
                </button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}