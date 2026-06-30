import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Rosa Aumedes Sánchez",
  description: "Escríbele a Rosa Aumedes Sánchez.",
};

export default function Contacto() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-widest text-acento mb-3 font-inter">
        Escríbeme
      </p>
      <h1 className="font-playfair text-4xl font-semibold text-texto mb-4">
        Contacto
      </h1>
      <p className="font-inter text-stone-500 mb-12 leading-relaxed">
        Me alegra saber cómo te han llegado los libros, si tienes alguna
        pregunta o simplemente quieres decir hola.
      </p>
      <ContactForm />
    </section>
  );
}
