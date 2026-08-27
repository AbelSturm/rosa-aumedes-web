"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  className?: string;
  large?: boolean;
  src?: string;
  alt?: string;
};

export default function AuthorPhoto({
  className = "",
  large = false,
  src = "/images/rosa-foto.jpg",
  alt = "Rosa Aumedes Sánchez",
}: Props) {
  const [imgError, setImgError] = useState(false);

  const size = large ? "h-96 w-72" : "h-64 w-48";

  if (imgError) {
    return (
      <div
        className={`${size} bg-stone-200 rounded-xl flex flex-col items-center justify-center gap-3 ${className}`}
      >
        <svg
          className="w-12 h-12 text-stone-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <p className="text-xs text-stone-400 text-center px-4">
          Foto de Rosa
          <br />
          pendiente
        </p>
      </div>
    );
  }

  return (
    <div className={`${size} relative rounded-xl overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
