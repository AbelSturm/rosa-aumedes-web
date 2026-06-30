import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";
import AuthorPhoto from "@/components/AuthorPhoto";

export const metadata: Metadata = {
  title: "Sobre Rosa — Rosa Aumedes Sánchez",
  description:
    "Conoce a Rosa Aumedes Sánchez, autora de una trilogía de autoayuda basada en sus experiencias personales.",
};

export default function SobreRosa() {
  return (
    <>
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-widest text-acento mb-3 font-inter">
          La autora
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-texto">
          Rosa Aumedes Sánchez
        </h1>
      </section>

      {/* Contenido */}
      <section className="max-w-5xl mx-auto px-6 pb-20 flex flex-col md:flex-row gap-14 items-start">
        <div className="flex-shrink-0 md:sticky md:top-24">
          <AuthorPhoto large />
        </div>

        <div className="flex-1 font-inter text-stone-600 leading-relaxed space-y-6">
          <p className="text-lg text-texto leading-relaxed">
            Soy Rosa Aumedes, nacida en Torregrosa (Lleida) y vecina de la
            Costa Brava desde los 12 años.
          </p>
          <p>
            Madre de trillizos, y como tantas personas, he atravesado la
            pérdida y la búsqueda de sentido. No soy psicóloga ni experta. Soy
            alguien que ha vivido de frente la maternidad más intensa, el duelo
            más duro y la pregunta que todos nos hacemos alguna vez: ¿dónde
            está mi felicidad?
          </p>
          <p>
            En 2020 escribí una trilogía para compartir lo que aprendí. Por si
            a alguien le sirve.
          </p>

          <blockquote className="border-l-4 border-acento pl-6 py-2 italic text-texto text-lg font-playfair">
            &ldquo;No escribo desde los libros de texto. Escribo desde la vida.&rdquo;
          </blockquote>

          <p>
            Criar a tres hijos a la vez me enseñó más sobre la naturaleza
            humana que cualquier libro. La búsqueda de mi propia felicidad me
            llevó a entender que estaba mirando en la dirección equivocada. Y
            la pérdida de seres queridos me obligó a aprender a soltar.
          </p>
          <p>
            Esos tres caminos se convirtieron en tres libros. Sin filtros. Sin
            teorías prestadas. Solo experiencia vivida y el deseo honesto de
            que le sirva a alguien más.
          </p>
        </div>
      </section>

      {/* Trilogía */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-3xl font-semibold text-texto mb-2 text-center">
            Mi trilogía
          </h2>
          <p className="text-stone-400 text-center font-inter mb-12">
            Tres momentos, tres libros.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA contacto */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-playfair text-2xl font-semibold text-texto mb-4">
          ¿Quieres escribirme?
        </h2>
        <p className="font-inter text-stone-500 mb-6">
          Me alegra saber cómo te han llegado los libros.
        </p>
        <Link
          href="/contacto"
          className="inline-block border border-acento text-acento font-medium px-8 py-3 rounded-lg hover:bg-acento hover:text-white transition-colors font-inter"
        >
          Contactar
        </Link>
      </section>
    </>
  );
}
