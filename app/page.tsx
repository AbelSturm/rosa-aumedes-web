import Link from "next/link";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";
import AuthorPhoto from "@/components/AuthorPhoto";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 order-2 md:order-1">
          <p className="text-xs uppercase tracking-widest text-acento mb-4 font-inter">
            Trilogía de autoayuda
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-texto leading-tight mb-6 text-balance">
            Escribo desde la experiencia, no desde la teoría.
          </h1>
          <p className="font-inter text-lg text-stone-500 leading-relaxed mb-8 max-w-lg">
            Tres libros para acompañarte en los momentos que más importan.
          </p>
          <Link
            href="#libros"
            className="inline-block bg-acento text-white font-medium px-8 py-3.5 rounded-lg hover:bg-acento/90 transition-colors font-inter"
          >
            Conoce los libros
          </Link>
        </div>
        <div className="order-1 md:order-2 flex-shrink-0">
          <AuthorPhoto large />
        </div>
      </section>

      {/* Grid de libros */}
      <section id="libros" className="bg-stone-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-3xl font-semibold text-texto mb-2 text-center">
            La trilogía
          </h2>
          <p className="text-stone-400 text-center font-inter mb-12">
            Tres libros, una misma voz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Bloque sobre Rosa */}
      <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <AuthorPhoto />
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-suave mb-3 font-inter">
            La autora
          </p>
          <h2 className="font-playfair text-3xl font-semibold text-texto mb-5">
            Rosa Aumedes Sánchez
          </h2>
          <p className="font-inter text-stone-500 leading-relaxed mb-6">
            Nací en Torregrosa (Lleida) y vivo en la Costa Brava desde los 12
            años. Soy madre de trillizos. En 2020 escribí una trilogía de
            autoayuda basada en mis propias experiencias: la maternidad
            intensa, la búsqueda de la felicidad y el duelo.
          </p>
          <Link
            href="/sobre-rosa"
            className="inline-flex items-center gap-2 text-acento font-medium font-inter hover:gap-3 transition-all"
          >
            Conocer mi historia
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-3xl font-semibold text-texto mb-2 text-center">
            Lo que dicen los lectores
          </h2>
          <p className="text-stone-400 text-center font-inter mb-12">
            Opiniones de quienes han leído la trilogía.
          </p>
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA pack trilogía */}
      <section className="bg-texto py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-inter">
            Los tres juntos
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white mb-6">
            La trilogía completa
          </h2>
          <p className="font-inter text-stone-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Tres libros escritos desde mi propia voz: la de alguien que ha
            vivido lo que cuenta. La maternidad, la felicidad y la pérdida.
          </p>
          <Link
            href="/pack"
            className="inline-block bg-acento text-white font-medium px-8 py-3.5 rounded-lg hover:bg-acento/90 transition-colors font-inter"
          >
            Ver la trilogía
          </Link>
        </div>
      </section>
    </>
  );
}
