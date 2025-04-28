"use client";

import Link from "next/link";
import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-shine-dark text-white">
      <header className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/icon.png" width={50} height={50} alt="Shine Mobile Detailing Logo" />
          <span className="font-bold text-xl text-white">Shine Mobile Detailing</span>
        </div>
        <Link href="/" className="btn border-shine-gold bg-transparent text-shine-gold hover:bg-shine-gold hover:text-shine-dark">
          Back to Home
        </Link>
      </header>

      <main>
        <section className="py-32">
          <div className="max-w-3xl mx-auto text-center px-8">
            <div className="bg-shine-gold/10 p-3 rounded-full inline-flex mb-8 mx-auto border border-shine-gold/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Thank You!</h1>
            <p className="text-xl text-white/80 mb-8">
              We've received your message and will be in touch with you shortly. 
              We appreciate your interest in our mobile detailing services.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/" className="btn bg-shine-gold border-shine-gold text-shine-dark hover:bg-transparent hover:text-shine-gold">
                Return to Home
              </Link>
              <Link href="/#services" className="btn btn-outline border-white text-white hover:border-shine-gold hover:text-shine-gold">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 