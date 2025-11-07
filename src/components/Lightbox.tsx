"use client";

import { useEffect } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const img = images[currentIndex];

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-white text-4xl font-light hover:opacity-75"
      >
        &times;
      </button>

      {/* Navigation arrows */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-4xl font-light hover:opacity-75 hidden md:block"
      >
        &#10094;
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 text-white text-4xl font-light hover:opacity-75 hidden md:block"
      >
        &#10095;
      </button>

      {/* Full image */}
      <img
        src={img.src}
        alt={img.alt}
        className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-lg"
      />
    </div>
  );
}
