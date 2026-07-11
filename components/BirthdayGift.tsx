"use client";

import { useEffect, useState } from "react";

// Overlay temporal de cumpleaños. Para retirarlo: borrar este archivo
// y la línea <BirthdayGift /> en app/layout.tsx.

const FLOATERS = [
  { emoji: "✨", left: "8%", delay: "0s", duration: "9s", size: "1.4rem" },
  { emoji: "🌸", left: "18%", delay: "2.5s", duration: "11s", size: "1.8rem" },
  { emoji: "💛", left: "30%", delay: "1s", duration: "10s", size: "1.3rem" },
  { emoji: "✨", left: "42%", delay: "4s", duration: "12s", size: "1.1rem" },
  { emoji: "🌷", left: "55%", delay: "0.5s", duration: "10.5s", size: "1.7rem" },
  { emoji: "✨", left: "66%", delay: "3s", duration: "9.5s", size: "1.5rem" },
  { emoji: "💐", left: "78%", delay: "1.8s", duration: "11.5s", size: "1.9rem" },
  { emoji: "✨", left: "88%", delay: "5s", duration: "10s", size: "1.2rem" },
  { emoji: "🌸", left: "95%", delay: "3.5s", duration: "12.5s", size: "1.4rem" },
];

const CONFETTI_COLORS = ["#C4804A", "#8FA68C", "#E8C97D", "#D9A5B3", "#FAF7F2"];

export default function BirthdayGift() {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const openGift = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => setVisible(false), 1600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-fondo transition-opacity duration-1000 ease-out ${
        opening ? "opacity-0" : "opacity-100"
      }`}
      aria-label="Felicitació d'aniversari"
    >
      {/* Elementos flotantes de fondo */}
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className="gift-floater"
          style={{
            left: f.left,
            fontSize: f.size,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        >
          {f.emoji}
        </span>
      ))}

      {/* Confeti al abrir */}
      {opening &&
        Array.from({ length: 40 }).map((_, i) => (
          <span
            key={`c-${i}`}
            className="gift-confetti"
            style={{
              left: `${(i * 53) % 100}%`,
              backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              animationDelay: `${(i % 8) * 0.08}s`,
              animationDuration: `${1 + ((i * 7) % 10) / 12}s`,
            }}
          />
        ))}

      <div className="relative max-w-xl px-8 text-center">
        <p className="gift-fade text-4xl mb-6" style={{ animationDelay: "0.2s" }}>
          🎂
        </p>
        <h1
          className="gift-fade font-playfair text-4xl md:text-5xl font-semibold text-texto leading-tight mb-6"
          style={{ animationDelay: "0.6s" }}
        >
          Moltes felicitats,
          <br />
          <span className="text-acento">mama</span>
        </h1>
        <p
          className="gift-fade font-inter text-lg md:text-xl text-texto/80 leading-relaxed mb-10"
          style={{ animationDelay: "1.2s" }}
        >
          Ets la millor. Ets una inspiració.
        </p>
        <button
          onClick={openGift}
          className="gift-fade inline-flex items-center gap-2 bg-acento text-white font-inter px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          style={{ animationDelay: "1.8s" }}
        >
          Vols obrir el teu regal? 🎁
        </button>
      </div>

      <style>{`
        .gift-fade {
          opacity: 0;
          animation: giftFadeUp 1s ease-out forwards;
        }
        @keyframes giftFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .gift-floater {
          position: absolute;
          bottom: -3rem;
          animation: giftFloat linear infinite;
          opacity: 0.7;
          pointer-events: none;
        }
        @keyframes giftFloat {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(-110vh) rotate(360deg);
          }
        }
        .gift-confetti {
          position: absolute;
          top: -1rem;
          width: 0.6rem;
          height: 0.9rem;
          border-radius: 2px;
          animation: giftConfetti ease-in forwards;
          pointer-events: none;
        }
        @keyframes giftConfetti {
          from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(105vh) rotate(720deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
