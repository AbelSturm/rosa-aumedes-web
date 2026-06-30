"use client";

import { useState } from "react";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

const STEP = 2;
const total = testimonials.length;
const pages = Math.ceil(total / STEP);

function TestimonialCard({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <div className="bg-card rounded-xl p-7 shadow-sm border border-stone-100 flex flex-col gap-4 h-full">
      <svg className="w-7 h-7 text-acento/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="font-inter text-stone-600 leading-relaxed italic flex-1">{text}</p>
      <div className="pt-3 border-t border-stone-100">
        <p className="font-playfair font-semibold text-texto">{name}</p>
        <p className="text-xs text-stone-400 font-inter mt-0.5">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSlider() {
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (next: number) => {
    setVisible(false);
    setTimeout(() => {
      setPage(next);
      setVisible(true);
    }, 220);
  };

  const prev = () => goTo((page - 1 + pages) % pages);
  const next = () => goTo((page + 1) % pages);

  const first = testimonials[page * STEP];
  const second = testimonials[page * STEP + 1];

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-full px-8 md:px-10">
        {/* Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ease-in-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <TestimonialCard {...first} />
          {second && <TestimonialCard {...second} />}
        </div>

        {/* Arrow left */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-fondo border border-stone-200 shadow-sm flex items-center justify-center text-texto hover:text-acento hover:border-acento transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Arrow right */}
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-fondo border border-stone-200 shadow-sm flex items-center justify-center text-texto hover:text-acento hover:border-acento transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 items-center">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Página ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === page
                ? "w-6 h-2 bg-acento"
                : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
            }`}
          />
        ))}
      </div>

      <Link
        href="/testimonios"
        className="inline-block border border-acento text-acento font-medium px-7 py-3 rounded-lg hover:bg-acento hover:text-white transition-colors font-inter text-sm"
      >
        Ver todos los testimonios
      </Link>
    </div>
  );
}
