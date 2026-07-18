"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/firebase";

import { db } from "@/firebase/firebase";
import EnquiryModal from "./components/EnquiryModal";
import {
  collection,
  getDocs,
  orderBy,
  query,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  Inbox,
  UserCheck,
  CalendarDays,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import StatCard from "./components/StatCard";

export default function AdminDashboard() {
    const router = useRouter();
    const [totalEnquiries, setTotalEnquiries] = useState(0);

const [recentEnquiries, setRecentEnquiries] = useState<any[]>([]);

const [loading, setLoading] = useState(true);
const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);

const [modalOpen, setModalOpen] = useState(false);
const [newEnquiries, setNewEnquiries] = useState(0);

const [contactedEnquiries, setContactedEnquiries] = useState(0);

const [todayEnquiries, setTodayEnquiries] = useState(0);
useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (user) => {

    if (!user) {

      router.replace("/login");

      return;

    }

    if (user.email !== "aimex.desk@gmail.com") {

      alert("Access Denied");

      router.replace("/login");

      return;

    }

  });

  return () => unsubscribe();

}, [router]);
useEffect(() => {
  fetchDashboard();
}, []);

const fetchDashboard = async () => {
  try {

    const q = query(
      collection(db, "enquiries"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    setTotalEnquiries(snapshot.size);

    const enquiries = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

setRecentEnquiries(enquiries);

// Dashboard Statistics

setNewEnquiries(
  enquiries.filter(
    (e: any) => e.status !== "contacted"
  ).length
);

setContactedEnquiries(
  enquiries.filter(
    (e: any) => e.status === "contacted"
  ).length
);

const today = new Date();
today.setHours(0, 0, 0, 0);

setTodayEnquiries(
  enquiries.filter((e: any) => {
    if (!e.createdAt?.toDate) return false;

    const enquiryDate = e.createdAt.toDate();
    enquiryDate.setHours(0, 0, 0, 0);

    return enquiryDate.getTime() === today.getTime();
  }).length
);

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
      doc(db, "enquiries", selectedEnquiry.id),
      {
        status: "contacted",
      }
    );

    await fetchDashboard();

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
      doc(db, "enquiries", selectedEnquiry.id)
    );

    await fetchDashboard();

    setModalOpen(false);

    setSelectedEnquiry(null);

  } catch (error) {

    console.error(error);

    alert("Failed to delete enquiry.");

  }

};

  return (
    <div>

      {/* Hero */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .6,
        }}
        className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-indigo-600/10 p-10"
      >

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <p className="uppercase tracking-[5px] text-cyan-400">
          AIMEX ADMIN
        </p>

        <h1 className="mt-4 text-5xl font-black">

          Welcome Back,

          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            Administrator

          </span>

        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">

          Monitor admissions, manage enquiries and keep
          track of your academy from one place.

        </p>

        <button
          className="mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-bold transition hover:scale-105"
        >

          View Enquiries

          <ArrowUpRight size={20} />

        </button>

      </motion.div>

      {/* Cards */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Enquiries"
          value={loading ? "..." : totalEnquiries}
          icon={Inbox}
          color="bg-gradient-to-br from-cyan-500 to-blue-600"
          change="+6 This Week"
        />

        <StatCard
          title="New Enquiries"
          value={loading ? "..." : newEnquiries}
          icon={Clock3}
          color="bg-gradient-to-br from-orange-500 to-red-500"
          change="+3 Today"
        />

        <StatCard
          title="Contacted"
          value={loading ? "..." : contactedEnquiries}
          icon={UserCheck}
          color="bg-gradient-to-br from-green-500 to-emerald-600"
          change="61% Completed"
        />

        <StatCard
          title="Today's Enquiries"
          value={loading ? "..." : todayEnquiries}
          icon={CalendarDays}
          color="bg-gradient-to-br from-purple-500 to-indigo-600"
          change="Live"
        />

      </div>
            {/* Quick Actions */}

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.5fr]">

        {/* Quick Actions */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-8 space-y-4">

            <button className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold transition hover:scale-[1.02]">
              📥 View Enquiries
            </button>

            <button className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition hover:border-cyan-400 hover:bg-cyan-500/10">
              🖼 Manage Gallery
            </button>

            <button className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition hover:border-cyan-400 hover:bg-cyan-500/10">
              🏆 Update Results
            </button>

            <button className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition hover:border-cyan-400 hover:bg-cyan-500/10">
              📢 Announcements
            </button>

          </div>

        </motion.div>

        {/* Recent Enquiries */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Recent Enquiries
            </h2>

            <button className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold transition hover:bg-cyan-500/20">
              View All
            </button>

          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

            <table className="w-full">
<thead>
<tr>

<th className="px-6 py-4 text-left">Student</th>
<th className="px-6 py-4 text-left">Course</th>
<th className="px-6 py-4 text-left">Phone</th>
<th className="px-6 py-4 text-left">Status</th>
<th className="px-6 py-4 text-left">Action</th>

</tr>
</thead>

              <tbody>

  {recentEnquiries.map((enquiry: any) => (

    <tr
      key={enquiry.id}
      className="border-t border-white/10 hover:bg-white/5"
    >
        

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

      <td className="px-6 py-5">

        {enquiry.course}

      </td>

      <td className="px-6 py-5">

        {enquiry.phone}

      </td>

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
<td className="px-6 py-5">

<button

onClick={()=>{
setSelectedEnquiry(enquiry);
setModalOpen(true);
}}

className="rounded-xl bg-cyan-500/20 px-4 py-2 text-cyan-300 transition hover:bg-cyan-500/40"

>

👁 View

</button>

</td>
    </tr>

  ))}

</tbody>

            </table>

          </div>

        </motion.div>

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