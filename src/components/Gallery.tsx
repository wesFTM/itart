"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setSelectedIndex(idx);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((selectedIndex! - 1 + images.length) % images.length);
  const showNext = () =>
    setSelectedIndex((selectedIndex! + 1) % images.length);

  return (
    <>
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform duration-200"
          >
            <div className="relative w-full h-64">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  );
}
