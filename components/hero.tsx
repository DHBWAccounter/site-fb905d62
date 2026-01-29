"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] max-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss Alps at sunset with Bitcoin"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center pt-16">
          <h1 className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide leading-relaxed drop-shadow-lg">
            A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
          </h1>
        </div>
      </div>
    </section>
  );
}
