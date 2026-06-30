import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { books, getBookBySlug } from "@/lib/books";
import Image from "next/image";
import BookCard from "@/components/BookCard";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = getBookBySlug(params.slug);
  if (!book) return {};
  return {
    title: `${book.title} — Rosa Aumedes Sánchez`,
    description: book.description,
  };
}

export default function BookPage({ params }: Props) {
  const book = getBookBySlug(params.slug);
  if (!book) notFound();

  const otherBooks = books.filter((b) => b.slug !== book.slug);

  return (
    <>
      {/* Hero del libro */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-14 items-start">
          {/* Portada */}
          <div className="flex-shrink-0 mx-auto md:mx-0 w-64">
            <Image
              src={book.image3d}
              alt={book.title}
              width={660}
              height={895}
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-acento mb-3 font-inter">
              Trilogía — Libro{" "}
              {books.findIndex((b) => b.slug === book.slug) + 1} de 3
            </p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-texto leading-snug mb-6">
              {book.title}
            </h1>

            <p className="font-inter text-stone-500 leading-relaxed mb-6">
              {book.description}
            </p>

            {book.quote && (
              <blockquote className="border-l-4 border-acento pl-5 py-2 mb-6 italic font-playfair text-lg text-texto">
                &ldquo;{book.quote}&rdquo;
              </blockquote>
            )}

            <div className="bg-stone-50 rounded-lg p-5 mb-8">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-inter">
                ¿Para quién es este libro?
              </p>
              <p className="font-inter text-texto">{book.forWho}</p>
            </div>

            <div className="flex items-center gap-6">
              <p className="font-playfair text-2xl font-semibold text-acento">
                {book.price}
              </p>
              <a
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-acento text-white font-medium px-7 py-3.5 rounded-lg hover:bg-acento/90 transition-colors font-inter"
              >
                Comprar en Amazon
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Otros libros */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-2xl font-semibold text-texto mb-2 text-center">
            Los otros libros de la trilogía
          </h2>
          <p className="text-stone-400 text-center font-inter mb-10">
            Tres perspectivas. Una misma autora.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {otherBooks.map((b) => (
              <BookCard key={b.slug} book={b} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA pack */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-playfair text-2xl font-semibold text-texto mb-4">
          ¿Los quieres todos?
        </h2>
        <p className="font-inter text-stone-500 mb-6">
          Ve a la página de la trilogía completa con el enlace directo a cada
          libro en Amazon.
        </p>
        <Link
          href="/pack"
          className="inline-block border border-acento text-acento font-medium px-8 py-3 rounded-lg hover:bg-acento hover:text-white transition-colors font-inter"
        >
          Ver la trilogía completa
        </Link>
      </section>
    </>
  );
}
