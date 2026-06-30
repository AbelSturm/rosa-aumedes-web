import Link from "next/link";
import { Book } from "@/lib/books";
import BookCover from "./BookCover";

type Props = {
  book: Book;
  size?: "normal" | "small";
};

export default function BookCard({ book, size = "normal" }: Props) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div style={{ backgroundColor: book.color }}>
        <BookCover
          src={book.image}
          alt={book.title}
          color={book.color}
          shortTitle={book.shortTitle}
        />
      </div>
      <div className={`p-5 flex flex-col flex-1 gap-3 ${size === "small" ? "p-4" : ""}`}>
        <h3 className={`font-playfair font-semibold text-texto leading-snug ${size === "small" ? "text-base" : "text-lg"}`}>
          {book.title}
        </h3>
        <p className="text-acento font-semibold text-sm">{book.price}</p>
        <Link
          href={`/libros/${book.slug}`}
          className="inline-block text-center bg-fondo border border-acento text-acento text-sm font-medium px-4 py-2 rounded-lg hover:bg-acento hover:text-white transition-colors mt-auto"
        >
          Ver libro
        </Link>
      </div>
    </div>
  );
}
