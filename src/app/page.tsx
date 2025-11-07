'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import { galleryImages } from "@/data/gallery";
import TwoColumnImages from '@/components/TwoColumnImages';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      <Header />

         {/* 🔹 Feature background section */}
         <section
        className="relative h-[70vh] w-full flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://pub-18df4257283b453396bb6fab4370f7d1.r2.dev/eventimages/206ddd660ed2d83e46dcf56e94a32890.JPEG')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content on top */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl font-bold mb-2">Live Now from Shangahi</h1>
          <p className="text-xs max-w-xl mx-auto">
          Coming soon to New York City. <br />For more information please call <Link href="tel:9174184120">917-418-4120</Link> or email <Link href="mailto:info@intimatetransgressions.org">info@intimatetransgressions.org</Link>
          </p>
        </div>
      </section>
        {/* 🔹 Two-column image section */}
      <TwoColumnImages
        leftImage="https://pub-18df4257283b453396bb6fab4370f7d1.r2.dev/eventimages/4b101b7d2f980dfd8c636c563e3a167e.JPG"
        rightImage="https://pub-18df4257283b453396bb6fab4370f7d1.r2.dev/eventimages/57c1296ab23138cf2c4b6509b94326eb.JPG"
      />

       {/* 🔹 Gallery section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Shanghai 2025 Highlights</h2>
        <Gallery images={galleryImages} />
      </section>

      <Footer />
    </main>
  );
}
