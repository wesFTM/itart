'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      <Header />

      {/* Main content */}
      <section className="flex-grow flex flex-col items-center justify-center px-6 md:px-20 lg:px-32">
        <div className="w-full h-[70vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-medium">COMING SOON</h1>
          <p className="text-xm md:text-base font-light mt-2">
            For more information please call 917-418-4120
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
