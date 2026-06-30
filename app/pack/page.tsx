import type { Metadata } from "next";
import { books } from "@/lib/books";
import BookCover from "@/components/BookCover";

export const metadata: Metadata = {
  title: "La trilogía completa — Rosa Aumedes Sánchez",
  description:
    "Los tres libros de Rosa Aumedes Sánchez: maternidad, felicidad y duelo. Disponibles en Amazon.",
};

export default function Pack() {
  return (
    <>
      {/* Header */}
      <section className="bg-texto py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-inter">
            Los tres juntos
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-white mb-6">
            La trilogía completa
          </h1>
          <p className="font-inter text-stone-300 leading-relaxed text-lg">
            Tres libros escritos desde la misma voz: la de alguien que ha
            vivido lo que cuenta. La maternidad, la felicidad y la pérdida. Un
            camino completo.
          </p>
        </div>
      </section>

      {/* Grid de libros */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {books.map((book, i) => (
            <div key={book.slug} className="flex flex-col items-center gap-5">
              <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-md" style={{ backgroundColor: book.color }}>
                <BookCover
                  src={book.image}
                  alt={book.title}
                  color={book.color}
                  shortTitle={book.shortTitle}
                />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-inter mb-1">
                  Libro {i + 1}
                </p>
                <h2 className="font-playfair text-lg font-semibold text-texto mb-1 leading-snug">
                  {book.title}
                </h2>
                <p className="text-acento font-semibold font-inter mb-4">
                  {book.price}
                </p>
                <a
                  href={book.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-acento text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-acento/90 transition-colors font-inter"
                >
                  Comprar en Amazon
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nota sobre precios */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <div className="bg-stone-50 rounded-xl p-8">
          <p className="font-playfair text-lg text-texto mb-3">
            Cada libro, 18,99€
          </p>
          <p className="font-inter text-stone-500 text-sm leading-relaxed">
            Los libros se venden por separado a través de Amazon. Cada enlace
            te lleva directamente a la página de compra del libro seleccionado.
          </p>
        </div>
      </section>
    </>
  );
}
