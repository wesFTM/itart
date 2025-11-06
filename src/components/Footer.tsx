'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 flex-grow flex flex-col items-center justify-center">
      {/* Centered Logo */}
      <Image
        src="/inartLogo_white.svg"
        alt="Intimate Transgressions Art"
        width={250}
        height={190}
        unoptimized
      />
      <p className='text-xs'>&copy;2025 Intimate Transgressions Art</p>
    </footer>
  );
}
