export type Book = {
  slug: string;
  title: string;
  shortTitle: string;
  price: string;
  amazon: string;
  image: string;
  image3d: string;
  color: string;
  description: string;
  quotes: string[];
  forWho: string;
  isbn: string;
};

export const books: Book[] = [
  {
    slug: "madre-de-trillizos",
    title: "Madre de trillizos: ¡Sí se puede! Es fácil y soy feliz",
    shortTitle: "Madre de trillizos",
    price: "18,99€",
    amazon:
      "https://www.amazon.es/Madre-trillizos-puede-f%C3%A1cil-feliz/dp/8409200066",
    image: "/images/madre-de-trillizos.jpg",
    image3d: "/images/madre-de-trillizos-3d.png",
    color: "#E8D5C4",
    description:
      "Todos imaginamos cómo será tener hijos, pero nadie nos enseña cómo guiarlos. Rosa no escribe desde los libros de texto, escribe desde el caos organizado de criar a tres a la vez. Un libro honesto sobre educación, maternidad y el día a día real con hijos. Basado en experiencia propia y aprendizajes concretos.",
    quotes: [
      "Nadie nos enseña a ser padres. Pero la vida, si la escuchas, lo hace.",
      "Los hijos no necesitan padres perfectos. Necesitan padres presentes.",
      "En el caos de criar a tres a la vez, aprendí que el amor siempre encuentra la manera.",
    ],
    forWho:
      "Padres y madres que buscan orientación práctica, sin juicios y con mucho corazón.",
    isbn: "978-84-09-20006-1",
  },
  {
    slug: "encuentra-tu-felicidad",
    title: "Encuentra tu felicidad: ¡Sí se puede! Mira en tu interior",
    shortTitle: "Encuentra tu felicidad",
    price: "18,99€",
    amazon:
      "https://www.amazon.es/Encuentra-felicidad-puede-Mira-interior/dp/8409213370",
    image: "/images/encuentra-tu-felicidad.jpg",
    image3d: "/images/encuentra-tu-felicidad-3d.png",
    color: "#C8D8C4",
    description:
      "Buscamos la felicidad en el trabajo, en las relaciones, en lo que aún no tenemos. Rosa propone lo contrario: dejar de mirar fuera. Un libro para aprender a quererse, a encontrar paz dentro y a dejar de posponer lo que ya tienes delante.",
    quotes: [
      "Si tú no te quieres, nadie te querrá. Si tú no tienes paz, nadie te la dará.",
      "La felicidad no está en lo que aún no tienes. Está en lo que ya eres.",
      "Cuando dejas de buscar fuera, empieza el verdadero encuentro.",
    ],
    forWho:
      "Para quien siente que algo falta, aunque aparentemente lo tenga todo.",
    isbn: "978-84-09-21337-5",
  },
  {
    slug: "despedirte-de-tu-ser-querido",
    title: "Despedirte de tu ser querido: ¡Sí se puede!",
    shortTitle: "Despedirte de tu ser querido",
    price: "18,99€",
    amazon:
      "https://www.amazon.es/Despedirte-ser-querido-Si-puede/dp/8409213389",
    image: "/images/despedirte-de-tu-ser-querido.jpg",
    image3d: "/images/despedirte-de-tu-ser-querido-3d.png",
    color: "#D4C8D8",
    description:
      "Perder a alguien es de las experiencias más duras que existen. Y a menudo nos quedamos solos con ello, sin saber cómo seguir. Rosa escribe desde la vivencia propia para acompañar a quien está en ese momento. Sin fórmulas mágicas. Con honestidad y cercanía.",
    quotes: [
      "Soltar no es olvidar. Es aprender a amar de otra manera.",
      "El duelo no se supera. Se integra. Y en ese proceso, uno también se transforma.",
      "No estás solo en esto. Nadie que ha amado lo está.",
    ],
    forWho:
      "Para quien está atravesando un duelo y necesita sentir que no está solo.",
    isbn: "978-84-09-21338-2",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
