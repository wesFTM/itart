"use client";

import Image from "next/image";

interface TwoColumnImagesProps {
  leftImage: string;
  rightImage: string;
}

export default function TwoColumnImages({
  leftImage,
  rightImage,
}: TwoColumnImagesProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-black">
      {/* Left image */}
      <div className="flex items-center justify-center w-full h-[400px] md:h-[600px] bg-black">
        <div className="relative w-full h-full max-w-[90%] max-h-[90%]">
          <Image
            src={leftImage}
            alt="Left feature"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Right image */}
      <div className="flex items-center justify-center w-full h-[400px] md:h-[600px] bg-black">
        <div className="relative w-full h-full max-w-[90%] max-h-[90%]">
          <Image
            src={rightImage}
            alt="Right feature"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
