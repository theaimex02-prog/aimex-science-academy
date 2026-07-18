"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

export default function CourseFAQ({
  faqs,
}: {
  faqs: FAQ[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <div className="text-center">

        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          FREQUENTLY ASKED QUESTIONS
        </span>

        <h2 className="mt-6 text-4xl font-black text-white">
          Have Questions?
        </h2>

        <p className="mt-5 text-slate-400">
          We've answered the most common questions students and parents ask.
        </p>

      </div>

      <div className="mt-14 space-y-5">

        {faqs.map((faq, index) => {

          const isOpen = open === index;

          return (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >

              <button
                onClick={() =>
                  setOpen(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {isOpen && (

                <div className="border-t border-white/10 px-7 py-6 text-slate-300 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          );
        })}

      </div>

    </section>
  );
}