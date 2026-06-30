"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  color: string;
  shortTitle: string;
};

export default function BookCover({ src, alt, color, shortTitle }: Props) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="w-full aspect-[2/3] flex flex-col items-center justify-center gap-3 p-6"
        style={{ backgroundColor: color }}
      >
        <div className="border-2 border-stone-400/30 rounded-lg w-full h-full flex flex-col items-center justify-center gap-3 p-4">
          <svg
            className="w-8 h-8 text-stone-400/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <p className="font-playfair text-sm text-stone-600/80 leading-tight text-center">
            {shortTitle}
          </p>
          <p className="text-xs text-stone-400/70">Portada pendiente</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="(max-width: 768px) 100vw, 400px"
      className="w-full h-auto"
      onError={() => setImgError(true)}
    />
  );
}
