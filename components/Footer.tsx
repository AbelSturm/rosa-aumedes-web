import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-texto text-stone-300 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-playfair text-xl text-white mb-2">
              Rosa Aumedes
            </p>
            <p className="text-sm text-stone-400 leading-relaxed">
              Autora de una trilogía de autoayuda basada en experiencias
              personales. Maternidad, felicidad y duelo.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              Páginas
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-acento transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-rosa"
                  className="hover:text-acento transition-colors"
                >
                  Sobre Rosa
                </Link>
              </li>
              <li>
                <Link
                  href="/pack"
                  className="hover:text-acento transition-colors"
                >
                  Pack trilogía
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-acento transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              Libros
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/libros/madre-de-trillizos"
                  className="hover:text-acento transition-colors"
                >
                  Madre de trillizos
                </Link>
              </li>
              <li>
                <Link
                  href="/libros/encuentra-tu-felicidad"
                  className="hover:text-acento transition-colors"
                >
                  Encuentra tu felicidad
                </Link>
              </li>
              <li>
                <Link
                  href="/libros/despedirte-de-tu-ser-querido"
                  className="hover:text-acento transition-colors"
                >
                  Despedirte de tu ser querido
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-10 pt-6 text-sm text-stone-500 text-center">
          © {new Date().getFullYear()} Rosa Aumedes Sánchez. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
