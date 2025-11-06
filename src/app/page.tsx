'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      <Header />

      {/* Main content */}
      <section className="flex-grow flex flex-col items-center justify-center px-6 md:px-20 lg:px-32">
        <div className="w-full h-[70vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-medium">COMING SOON</h1>
          <p className="text-xm md:text-base font-light mt-2">
            For more information please call <Link href="tel:9174184120" className="hover:underline">917-418-4120</Link> or email <Link href="mailto:info@intimatetransgressions.org" className="hover:underline">info@intimatetransgressions.org</Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
