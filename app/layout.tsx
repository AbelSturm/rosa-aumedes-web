import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BirthdayGift from "@/components/BirthdayGift";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Rosa Aumedes Sánchez — Autora",
  description:
    "Trilogía de autoayuda escrita desde la experiencia. Maternidad, felicidad y duelo. Por Rosa Aumedes Sánchez.",
  openGraph: {
    title: "Rosa Aumedes Sánchez — Autora",
    description:
      "Trilogía de autoayuda escrita desde la experiencia. Maternidad, felicidad y duelo.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} font-inter bg-fondo text-texto antialiased`}
      >
        <BirthdayGift />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
