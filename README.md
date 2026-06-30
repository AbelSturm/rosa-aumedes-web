# rosa-aumedes-web

Web portfolio y escaparate de libros para Rosa Aumedes Sánchez.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Deploy: Vercel

## Descripción
Web minimalista para presentar a la autora y sus tres libros. La compra redirige a Amazon, sin carrito propio por ahora.

## Autora
Rosa Aumedes Sánchez. Nacida en 1970 en Torregrosa (Lleida). Vive en la Costa Brava. Madre de trillizos. En 2020 escribe una trilogía de autoayuda basada en sus experiencias personales.

## Libros

### Madre de trillizos: ¡Sí se puede! Es fácil y soy feliz
- Amazon: https://www.amazon.es/Madre-trillizos-puede-f%C3%A1cil-feliz/dp/8409200066
- Precio: 18,99€
- Slug: madre-de-trillizos
- Imagen: /public/images/madre-de-trillizos.jpg (pendiente)

### Encuentra tu felicidad: ¡Sí se puede! Mira en tu interior
- Amazon: https://www.amazon.es/Encuentra-felicidad-puede-Mira-interior/dp/8409213370
- Precio: 18,99€
- Slug: encuentra-tu-felicidad
- Imagen: /public/images/encuentra-tu-felicidad.jpg (pendiente)

### Despedirte de tu ser querido: ¡Sí se puede!
- Amazon: https://www.amazon.es/Despedirte-ser-querido-Si-puede/dp/8409213389
- Precio: 18,99€
- Slug: despedirte-de-tu-ser-querido
- Imagen: /public/images/despedirte-de-tu-ser-querido.jpg (pendiente)

## Páginas
- / — Home: hero, grid de libros, bloque sobre Rosa, CTA pack
- /sobre-rosa — Biografía y contexto de la trilogía
- /libros/madre-de-trillizos
- /libros/encuentra-tu-felicidad
- /libros/despedirte-de-tu-ser-querido
- /pack — Los tres libros juntos, cada uno con link a su Amazon
- /contacto — Formulario simple

## Paleta
- Fondo: #FAF7F2
- Texto: #2C2C2C
- Acento cálido: #C4804A
- Acento suave: #8FA68C
- Cards: #FFFFFF

## Tipografía
- Títulos: Playfair Display
- Cuerpo: Inter

## Componentes principales
- BookCard — portada + título + botón CTA
- BookHero — layout interior de cada libro
- Navbar — logo + links con dropdown Libros
- Footer — nombre autora + links + copyright

## Imágenes pendientes
- /public/images/rosa-foto.jpg (foto autora, pendiente)
- Las portadas de los libros hay que añadirlas manualmente en /public/images/

## Roadmap futuro
- Venta directa con carrito propio
- Multiidioma (castellano / catalán)
- Blog o sección de artículos
