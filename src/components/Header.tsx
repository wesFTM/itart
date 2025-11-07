'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // npm install lucide-react


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-30 py-5 px-6 lg:px-30 flex items-center justify-between bg-transparent text-white">
        {/* Left: Logo + Subtitle */}
        <div className="flex flex-col items-start space-y-1">
          <Link href="/">
            <Image
              src="/inartLogo_white.svg"
              alt="Intimate Trandgressions Logo"
              width={300}
              height={190}
              unoptimized
            />
          </Link>
          
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-white font-bold text-xs">
        <Link href="mailto:info@intimatetransgressions.org" className="hover:underline">CONTACT</Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 px-6 py-8 flex flex-col items-start space-y-6 text-white text-lg font-semibold">
          <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-white" aria-label="Close menu">
            <X size={28} />
          </button>
          <Link href="mailto:info@intimatetransgressions.org" onClick={() => setMobileOpen(false)}>CONTACT</Link>

        </div>
      )}
    </>
  );
}
