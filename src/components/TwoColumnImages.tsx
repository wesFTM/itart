"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TwoColumnImagesProps {
  leftImage: string;
  rightImage: string;
}

export default function TwoColumnImages({
  leftImage,
  rightImage,
}: TwoColumnImagesProps) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
      {/* Left image */}
      <motion.div
        className="relative w-full h-[400px] md:h-[600px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={leftImage}
          alt="Left feature"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>

      {/* Right image */}
      <motion.div
        className="relative w-full h-[400px] md:h-[600px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={rightImage}
          alt="Right feature"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </section>
  );
}
