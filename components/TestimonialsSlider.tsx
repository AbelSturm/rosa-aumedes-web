"use client";

import { useState } from "react";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Card */}
        <div className="bg-card rounded-xl p-8 md:p-10 shadow-sm border border-stone-100 min-h-[220px] flex flex-col gap-4">
          <svg
            className="w-7 h-7 text-acento/30 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-inter text-stone-600 leading-relaxed italic flex-1">
            {t.text}
          </p>
          <div className="pt-3 border-t border-stone-100">
            <p className="font-playfair font-semibold text-texto">{t.name}</p>
            <p className="text-xs text-stone-400 font-inter mt-0.5">{t.role}</p>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-fondo border border-stone-200 shadow-sm flex items-center justify-center text-texto hover:text-acento hover:border-acento transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-fondo border border-stone-200 shadow-sm flex items-center justify-center text-texto hover:text-acento hover:border-acento transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir al testimonio ${i + 1}`}
            className={`rounded-full transition-all ${
              i === current
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
