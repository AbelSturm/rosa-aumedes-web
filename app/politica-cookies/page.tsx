import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — Rosa Aumedes Sánchez",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 font-inter text-stone-600 leading-relaxed">
      <h1 className="font-playfair text-3xl font-semibold text-texto mb-10">
        Política de Cookies
      </h1>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          ¿Qué son las cookies?
        </h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan
          en tu dispositivo cuando los visitas. Permiten que el sitio recuerde
          información sobre tu visita para mejorar tu experiencia.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          Cookies que utilizamos
        </h2>
        <p>
          Este sitio web es de carácter informativo y no utiliza cookies propias
          de seguimiento ni publicidad. No se instalan cookies en tu dispositivo
          más allá de las estrictamente necesarias para el funcionamiento básico
          del sitio.
        </p>
        <p className="mt-3">
          Si en el futuro se incorporaran servicios de terceros (como análisis de
          tráfico o incrustaciones de redes sociales) que generen cookies, se
          actualizará esta política para informarte adecuadamente.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          Cómo gestionar las cookies
        </h2>
        <p>
          Puedes configurar tu navegador para rechazar todas las cookies o para
          que te avise cuando se envía una cookie. Consulta la ayuda de tu
          navegador para saber cómo hacerlo:
        </p>
        <ul className="mt-3 space-y-1 list-disc list-inside text-stone-500">
          <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
          <li>Firefox: Opciones → Privacidad y seguridad</li>
          <li>Safari: Preferencias → Privacidad</li>
          <li>Edge: Configuración → Privacidad, búsqueda y servicios</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          Más información
        </h2>
        <p>
          Si tienes dudas sobre nuestra política de cookies, puedes contactarnos
          en rosaaumedessanchez@gmail.com.
        </p>
      </section>
    </div>
  );
}
