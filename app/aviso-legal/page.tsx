import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal — Rosa Aumedes Sánchez",
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 font-inter text-stone-600 leading-relaxed">
      <h1 className="font-playfair text-3xl font-semibold text-texto mb-10">
        Aviso Legal
      </h1>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          1. Datos identificativos
        </h2>
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSICE), se
          informa que el titular de este sitio web es:
        </p>
        <ul className="mt-3 space-y-1 text-stone-500">
          <li>
            <strong className="text-texto">Titular:</strong> Rosa Maria Aumedes
            Sánchez
          </li>
          <li>
            <strong className="text-texto">Domicilio:</strong> Av. América 35 6e
            4a, 17310 Lloret de Mar, Girona
          </li>
          <li>
            <strong className="text-texto">Correo electrónico:</strong>{" "}
            rosaaumedessanchez@gmail.com
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          2. Objeto y ámbito de aplicación
        </h2>
        <p>
          El presente Aviso Legal regula el acceso y uso del sitio web, así como
          la relación entre el titular y los usuarios que lo visitan. El acceso
          al sitio web implica la aceptación plena de las condiciones aquí
          expuestas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          3. Propiedad intelectual e industrial
        </h2>
        <p>
          Todos los contenidos de este sitio web —textos, imágenes, fotografías,
          diseño y código fuente— son propiedad de Rosa Maria Aumedes Sánchez o
          de terceros que han autorizado su uso. Queda expresamente prohibida su
          reproducción, distribución, comunicación pública o transformación sin
          autorización expresa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          4. Responsabilidad
        </h2>
        <p>
          El titular no se hace responsable de los daños que pudieran derivarse
          del uso del sitio web, de la imposibilidad de acceso al mismo, ni de
          los contenidos de terceros enlazados desde este sitio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          5. Legislación aplicable
        </h2>
        <p>
          Este aviso legal se rige por la normativa española vigente. Cualquier
          controversia se someterá a los juzgados y tribunales competentes de
          Girona, con renuncia a cualquier otro fuero que pudiera corresponder.
        </p>
      </section>
    </div>
  );
}
