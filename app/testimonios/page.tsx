import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios — Rosa Aumedes Sánchez",
  description:
    "Lo que dicen los lectores y compañeros autores sobre los libros de Rosa Aumedes Sánchez.",
};

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Me ha encantado este maravilloso libro. Como madre, sé que educar y criar es una gran responsabilidad, pero si lo haces desde el amor y respetando la libertad y la opinión de tus hijos, hablándoles con el mismo respeto con el que nos gusta ser tratados a los adultos, tal y como sugiere la autora en el libro, la magia sucede, y esos niños van creciendo sosteniéndose en unas raíces sanas y fuertes. Gracias Rosa, por tu gran aportación, me has hecho valorar mi papel como madre y gracias a tu libro me doy cuenta de la importancia de la educación consciente.",
    name: "Carmen Funes",
    role: "Autora de la trilogía «Vale la alegría»",
  },
  {
    text: "A más de un padre o madre le gustará contar con la experiencia y los consejos que explica Rosa como experimentada madre de trillizos. Te animo a que conozcas su trilogía ya que mediante la lectura de sus libros Rosa te abre los ojos al mundo de los hijos y a enseñarte lo que nadie nunca te ha enseñado de una forma serena, tranquila, sensata, humana y probada con muchísimo amor por su parte. Rosa tiene la experiencia que a muchos les hace falta y que todos hemos de querer transmitir a nuestros hijos para que aprendan a hacerse independientes, tengan los recursos suficientes para sobresalir en el mundo que han venido a vivir y no se sientan jamás frustrados ante las adversidades.",
    name: "Óscar Grau Gabernet",
    role: "Autor de la trilogía «Despierta tus sueños»",
  },
  {
    text: "Es un libro que habla de la educación de los hijos en el que Rosa, su autora, comparte un montón de anécdotas personales ocurridas con sus trillizos. Es un libro muy práctico que te aporta ideas y recursos para mejorar el día a día con tus hijos. Seguro que va a ayudar a muchas familias con su experiencia y sentido común. Su lectura no te va a dejar indiferente.",
    name: "Cristina López Coll",
    role: "Maestra y autora de la trilogía «El blanco y negro de tu vida»",
  },
];

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
