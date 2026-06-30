"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendContactEmail, FormState } from "@/app/contacto/actions";

const initialState: FormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="self-start bg-acento text-white font-medium px-8 py-3.5 rounded-lg hover:bg-acento/90 transition-colors font-inter disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Enviando..." : "Enviar mensaje"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className="bg-suave/10 border border-suave/30 rounded-xl p-8 text-center">
        <svg
          className="w-10 h-10 text-suave mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="font-playfair text-xl text-texto mb-2">
          Mensaje enviado
        </p>
        <p className="font-inter text-stone-500 text-sm">
          Gracias por escribir. Rosa te responderá en cuanto pueda.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nombre" className="text-sm font-medium text-texto font-inter">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          required
          className="bg-card border border-stone-200 rounded-lg px-4 py-3 text-texto placeholder:text-stone-300 font-inter focus:outline-none focus:ring-2 focus:ring-acento/30 focus:border-acento transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-texto font-inter">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
          className="bg-card border border-stone-200 rounded-lg px-4 py-3 text-texto placeholder:text-stone-300 font-inter focus:outline-none focus:ring-2 focus:ring-acento/30 focus:border-acento transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensaje" className="text-sm font-medium text-texto font-inter">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          placeholder="Tu mensaje..."
          required
          className="bg-card border border-stone-200 rounded-lg px-4 py-3 text-texto placeholder:text-stone-300 font-inter focus:outline-none focus:ring-2 focus:ring-acento/30 focus:border-acento transition-colors resize-none"
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-500 font-inter">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
