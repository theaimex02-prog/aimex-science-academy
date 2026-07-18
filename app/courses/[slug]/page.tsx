import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  GraduationCap,
  CheckCircle2,
  Users,
  Trophy,
  FileText,
  Star,
} from "lucide-react";
import { notFound } from "next/navigation";
import { courseData } from "@/lib/courseData";
import CourseFAQ from "@/components/courses/CourseFAQ";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;

  const course = courseData[slug as keyof typeof courseData];

  if (!course) {
    notFound();
  }
const faqs = [
  {
    question: "Who can join this course?",
    answer: `Students eligible for ${course.eligibility} can enroll in this course.`,
  },
  {
    question: "How long is the course?",
    answer: `The duration of this course is ${course.duration}.`,
  },
  {
    question: "Will study material be provided?",
    answer:
      "Yes. Every student receives structured notes, assignments and regular practice material.",
  },
  {
    question: "Are regular tests conducted?",
    answer:
      "Yes. Weekly tests, mock exams and performance analysis are conducted throughout the course.",
  },
];
  return (
    <main className="min-h-screen bg-[#08111F] text-white">

      {/* Hero */}

<section className="relative overflow-hidden border-b border-white/10">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-[#08111F] to-blue-600/15" />

  <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

  <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

  <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-20">

    <div className="max-w-3xl">

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
        <GraduationCap size={16} />
        AimEx Science Academy
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
        {course.title}
      </h1>

      <p className="mt-6 text-xl leading-9 text-slate-300">
        {course.subtitle}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
          <Clock3 className="text-cyan-400" size={22} />

          <div>
            <p className="text-xs text-slate-400">
              Duration
            </p>

            <p className="font-semibold">
              {course.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
          <BookOpen className="text-cyan-400" size={22} />

          <div>
            <p className="text-xs text-slate-400">
              Eligibility
            </p>

            <p className="font-semibold">
              {course.eligibility}
            </p>
          </div>
        </div>

      </div>

      <div className="mt-12 flex flex-wrap gap-4">

        <Link
          href="/#contact"
          className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold transition hover:scale-105"
        >
          Apply Now

          <ArrowRight size={20} />
        </Link>

        <Link
          href="/#courses"

          className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
        >
    ← Back to Courses
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* About */}

<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

    {/* Left */}

    <div>

      <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
        ABOUT THE COURSE
      </span>

      <h2 className="mt-6 text-4xl font-black">
        Learn Smarter.
        <br />
        Score Higher.
      </h2>

      <p className="mt-8 text-lg leading-9 text-slate-300">
        {course.description}
      </p>

      <div className="mt-10 space-y-5">

        <div className="flex items-start gap-4">
          <div className="mt-1 text-2xl">🎯</div>

          <div>
            <h3 className="font-bold text-white">
              Result-Oriented Teaching
            </h3>

            <p className="mt-1 text-slate-400">
              Every lecture is planned to maximize concept clarity and exam performance.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 text-2xl">👨‍🏫</div>

          <div>
            <h3 className="font-bold text-white">
              Experienced Faculty
            </h3>

            <p className="mt-1 text-slate-400">
              Learn from dedicated teachers with years of competitive exam coaching experience.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 text-2xl">📈</div>

          <div>
            <h3 className="font-bold text-white">
              Continuous Progress Tracking
            </h3>

            <p className="mt-1 text-slate-400">
              Regular tests, analysis, and personalized guidance help students improve consistently.
            </p>
          </div>
        </div>

      </div>

    </div>

    {/* Right */}

    <div className="grid gap-6 sm:grid-cols-2">

      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400">
        <div className="text-5xl">📚</div>

        <h3 className="mt-6 text-xl font-bold">
          Complete Study Material
        </h3>

        <p className="mt-3 text-slate-400">
          Well-structured notes and practice material for every chapter.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400">
        <div className="text-5xl">📝</div>

        <h3 className="mt-6 text-xl font-bold">
          Weekly Tests
        </h3>

        <p className="mt-3 text-slate-400">
          Frequent assessments with detailed performance analysis.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400">
        <div className="text-5xl">💬</div>

        <h3 className="mt-6 text-xl font-bold">
          Doubt Solving
        </h3>

        <p className="mt-3 text-slate-400">
          Dedicated doubt sessions to strengthen concepts and confidence.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400">
        <div className="text-5xl">🏆</div>

        <h3 className="mt-6 text-xl font-bold">
          Proven Results
        </h3>

        <p className="mt-3 text-slate-400">
          A strong record of students achieving top ranks and excellent board scores.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* Features */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="text-center">

    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
      COURSE BENEFITS
    </span>

    <h2 className="mt-6 text-4xl font-black">
      What You'll Get
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
      Everything you need to achieve excellent academic performance and prepare confidently for your exams.
    </p>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    {course.features.map((feature, index) => (

      <div
        key={feature}
        className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/5"
      >

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15">

          <CheckCircle2
            size={28}
            className="text-cyan-400"
          />

        </div>

        <p className="mt-8 text-xl font-bold text-white">
          {feature}
        </p>

        <p className="mt-3 text-slate-400">
          Benefit #{index + 1} designed to help students build stronger concepts, improve confidence, and score higher in examinations.
        </p>

      </div>

    ))}

  </div>

</section>
{/* Statistics */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-12">

    <div className="text-center">

      <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
        AIMEX IN NUMBERS
      </span>

      <h2 className="mt-6 text-4xl font-black">
        Trusted By Hundreds Of Students
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
        We focus on concept clarity, disciplined preparation and consistent
        performance improvement.
      </p>

    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl bg-white/5 p-8 text-center">

        <Users
          size={42}
          className="mx-auto text-cyan-400"
        />

        <h3 className="mt-5 text-5xl font-black">
          500+
        </h3>

        <p className="mt-2 text-slate-400">
          Students Guided
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 p-8 text-center">

        <Trophy
          size={42}
          className="mx-auto text-yellow-400"
        />

        <h3 className="mt-5 text-5xl font-black">
          95%
        </h3>

        <p className="mt-2 text-slate-400">
          Success Rate
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 p-8 text-center">

        <FileText
          size={42}
          className="mx-auto text-green-400"
        />

        <h3 className="mt-5 text-5xl font-black">
          100+
        </h3>

        <p className="mt-2 text-slate-400">
          Practice Tests
        </p>

      </div>

      <div className="rounded-3xl bg-white/5 p-8 text-center">

        <Star
          size={42}
          className="mx-auto text-pink-400"
        />

        <h3 className="mt-5 text-5xl font-black">
          5★
        </h3>

        <p className="mt-2 text-slate-400">
          Student Satisfaction
        </p>

      </div>

    </div>

  </div>

</section>
<CourseFAQ faqs={faqs} />
      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Join?
          </h2>

          <p className="mt-4 text-lg">
            Admissions are now open for {course.title}.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              href="/#contact"
              className="rounded-xl bg-white px-8 py-3 font-semibold text-black"
            >
              Enquire Now
            </Link>

            <Link
             href="/#courses"
              className="rounded-xl border border-white px-8 py-3"
            >
              ← Back to Courses
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}