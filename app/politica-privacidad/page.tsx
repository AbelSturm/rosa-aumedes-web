import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Rosa Aumedes Sánchez",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 font-inter text-stone-600 leading-relaxed">
      <h1 className="font-playfair text-3xl font-semibold text-texto mb-10">
        Política de Privacidad
      </h1>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          1. Responsable del tratamiento
        </h2>
        <ul className="space-y-1 text-stone-500">
          <li>
            <strong className="text-texto">Titular:</strong> Rosa Maria Aumedes
            Sánchez
          </li>
          <li>
            <strong className="text-texto">Domicilio:</strong> Av. América 35 6e
            4a, 17310 Lloret de Mar, Girona
          </li>
          <li>
            <strong className="text-texto">Contacto:</strong>{" "}
            abelsturmaumedes@gmail.com
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          2. Datos que recogemos
        </h2>
        <p>
          Este sitio web no recoge datos personales de forma automática. Si nos
          contactas por correo electrónico, trataremos los datos que nos
          facilites (nombre y dirección de correo) únicamente para responderte.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          3. Finalidad del tratamiento
        </h2>
        <p>
          Los datos facilitados a través del formulario de contacto se utilizan
          exclusivamente para gestionar las consultas recibidas. No se ceden a
          terceros ni se utilizan con fines comerciales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          4. Base jurídica
        </h2>
        <p>
          El tratamiento de datos se basa en el consentimiento del interesado,
          otorgado al enviarnos un mensaje de forma voluntaria, de acuerdo con
          el artículo 6.1.a del Reglamento General de Protección de Datos (RGPD).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          5. Conservación de los datos
        </h2>
        <p>
          Los datos se conservan durante el tiempo necesario para atender tu
          consulta y, una vez resuelta, se eliminan salvo obligación legal de
          conservarlos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-playfair text-xl font-semibold text-texto mb-3">
          6. Tus derechos
        </h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición y portabilidad enviando un correo a abelsturmaumedes@gmail.com.
          También tienes derecho a presentar una reclamación ante la Agencia
          Española de Protección de Datos (aepd.es).
        </p>
      </section>
    </div>
  );
}
