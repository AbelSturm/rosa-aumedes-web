"use client";

import Link from "next/link";
import { useState } from "react";
import { books } from "@/lib/books";

export default function Navbar() {
  const [booksOpen, setBooksOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-fondo border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-playfair text-xl font-semibold text-texto hover:text-acento transition-colors"
        >
          Rosa Aumedes Sánchez
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-inter">
          <li>
            <Link
              href="/"
              className="text-texto hover:text-acento transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-rosa"
              className="text-texto hover:text-acento transition-colors"
            >
              Sobre Rosa
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setBooksOpen(!booksOpen)}
              className="flex items-center gap-1 text-texto hover:text-acento transition-colors"
            >
              Libros
              <svg
                className={`w-4 h-4 transition-transform ${booksOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {booksOpen && (
              <div
                className="absolute top-8 left-0 bg-card shadow-lg rounded-lg py-2 w-72 border border-stone-100"
                onMouseLeave={() => setBooksOpen(false)}
              >
                {books.map((book) => (
                  <Link
                    key={book.slug}
                    href={`/libros/${book.slug}`}
                    onClick={() => setBooksOpen(false)}
                    className="block px-4 py-2.5 text-sm text-texto hover:bg-fondo hover:text-acento transition-colors"
                  >
                    {book.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link
              href="/testimonios"
              className="text-texto hover:text-acento transition-colors"
            >
              Testimonios
            </Link>
          </li>
          <li>
            <Link
              href="/pack"
              className="text-texto hover:text-acento transition-colors"
            >
              Pack trilogía
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="text-texto hover:text-acento transition-colors"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-texto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-fondo px-6 py-4 flex flex-col gap-4 text-sm font-inter">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-texto hover:text-acento"
          >
            Inicio
          </Link>
          <Link
            href="/sobre-rosa"
            onClick={() => setMenuOpen(false)}
            className="text-texto hover:text-acento"
          >
            Sobre Rosa
          </Link>
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
              Libros
            </p>
            {books.map((book) => (
              <Link
                key={book.slug}
                href={`/libros/${book.slug}`}
                onClick={() => setMenuOpen(false)}
                className="block py-1.5 text-texto hover:text-acento"
              >
                {book.shortTitle}
              </Link>
            ))}
          </div>
          <Link
            href="/testimonios"
            onClick={() => setMenuOpen(false)}
            className="text-texto hover:text-acento"
          >
            Testimonios
          </Link>
          <Link
            href="/pack"
            onClick={() => setMenuOpen(false)}
            className="text-texto hover:text-acento"
          >
            Pack trilogía
          </Link>
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="text-texto hover:text-acento"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
