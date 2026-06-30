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
            Nacida en 1970 en Torregrosa, un pequeño pueblo de la provincia de
            Lleida, a los 12 años se mudó con su familia a la Costa Brava, donde
            sigue viviendo.
          </p>
          <p>
            En 1996 se fue a vivir y estudiar a Alemania durante cuatro años,
            una experiencia que marcó profundamente su visión del mundo y de las
            personas. De vuelta en España, trabajó durante 20 años en una
            correduría de seguros.
          </p>
          <p>
            En 2003, a los 33 años, se convirtió en madre de trillizos. Esa
            experiencia —intensa, caótica y transformadora— la llevó a
            interesarse, a partir de 2010, por todo lo relacionado con el
            crecimiento personal y el bienestar emocional.
          </p>

          <blockquote className="border-l-4 border-acento pl-6 py-2 italic text-texto text-lg font-playfair">
            &ldquo;No escribo desde los libros de texto. Escribo desde la vida.&rdquo;
          </blockquote>

          <p>
            A finales de 2019 dio un giro a su vida profesional y abrió
            Rosaservei, su propia empresa de acompañamiento y servicios para
            personas de habla alemana. Y en 2020, decidió plasmar lo aprendido
            en tres libros.
          </p>
          <p>
            Tres temas que había vivido en primera persona: la maternidad más
            exigente, la búsqueda de la felicidad interior y el duelo. Sin
            filtros. Sin teorías prestadas. Solo experiencia vivida y el deseo
            honesto de que le sirva a alguien más.
          </p>

          <div className="pt-2 flex flex-col gap-1 text-sm text-stone-400">
            <a
              href="https://www.instagram.com/rosaaumedes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-acento transition-colors"
            >
              Instagram: @rosaaumedes
            </a>
            <a
              href="https://www.facebook.com/RosaAumedes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-acento transition-colors"
            >
              Facebook: RosaAumedes
            </a>
          </div>
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
