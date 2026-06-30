import type { Metadata } from "next";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonios — Rosa Aumedes Sánchez",
  description:
    "Lo que dicen los lectores y compañeros autores sobre los libros de Rosa Aumedes Sánchez.",
};

export default function TestimoniosPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-widest text-acento mb-3 font-inter">
          Lo que dicen
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-texto mb-6">
          Testimonios
        </h1>
        <p className="font-inter text-stone-500 text-lg max-w-2xl">
          Palabras de lectores y compañeros autores que han leído los libros de
          Rosa.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-sm border border-stone-100 flex flex-col gap-4"
            >
              <svg
                className="w-8 h-8 text-acento/30 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-inter text-stone-600 leading-relaxed italic flex-1">
                {t.text}
              </p>
              <div className="pt-2 border-t border-stone-100">
                <p className="font-playfair font-semibold text-texto">
                  {t.name}
                </p>
                <p className="text-xs text-stone-400 font-inter mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
