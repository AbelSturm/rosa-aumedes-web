"use client";

import { useState, useEffect } from "react";

type Props = {
  title: string;
  color: string;
};

export default function BookCoverPlaceholder({ title, color }: Props) {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  useEffect(() => {
    setShowPlaceholder(true);
  }, []);

  if (!showPlaceholder) return null;

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
      style={{ backgroundColor: color }}
    >
      <div className="border-2 border-stone-400/30 rounded-lg w-full h-full flex flex-col items-center justify-center gap-4 p-4">
        <svg
          className="w-8 h-8 text-stone-400/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 3v18M3 3l18 18"
          />
        </svg>
        <p className="font-playfair text-sm text-stone-600/80 leading-tight">
          {title}
        </p>
        <p className="text-xs text-stone-400/80">Portada pendiente</p>
      </div>
    </div>
  );
}
