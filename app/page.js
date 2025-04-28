"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [showAfter, setShowAfter] = useState(false);
  const [showAfter2, setShowAfter2] = useState(false);
  const [vehicleType, setVehicleType] = useState("sedan");

  // Pricing data based on vehicle type
  const pricingData = {
    sedan: {
      interior: { 
        price: 140, 
        name: "Interior Only", 
        description: "Complete interior detailing for sedans",
        features: [
          { name: "Full Interior Vacuum" },
          { name: "Dashboard & Console Detailing" },
          { name: "Door Panels & Trim Cleaning" },
          { name: "Carpet & Upholstery Shampooing" },
          { name: "Window Cleaning (Interior)" }
        ]
      },
      exterior: { 
        price: 55, 
        name: "Exterior Only", 
        description: "Complete exterior detailing for sedans",
        features: [
          { name: "Hand Wash & Dry" },
          { name: "Tire & Wheel Cleaning" },
          { name: "Window Cleaning (Exterior)" },
          { name: "Paint Decontamination" },
          { name: "Wax Protection" }
        ]
      },
      both: { 
        price: 185, 
        name: "Interior + Exterior", 
        description: "Complete interior and exterior detailing for sedans", 
        isFeatured: true,
        features: [
          { name: "Everything in Interior Package" },
          { name: "Everything in Exterior Package" },
          { name: "Trunk Cleaning" },
          { name: "Complementary Touch-up Kit" }
        ]
      }
    },
    suv: {
      interior: { 
        price: 170, 
        name: "Interior Only", 
        description: "Complete interior detailing for SUVs",
        features: [
          { name: "Full Interior Vacuum" },
          { name: "Dashboard & Console Detailing" },
          { name: "Door Panels & Trim Cleaning" },
          { name: "Carpet & Upholstery Shampooing" },
          { name: "Window Cleaning (Interior)" }
        ]
      },
      exterior: { 
        price: 55, 
        name: "Exterior Only", 
        description: "Complete exterior detailing for SUVs",
        features: [
          { name: "Hand Wash & Dry" },
          { name: "Tire & Wheel Cleaning" },
          { name: "Window Cleaning (Exterior)" },
          { name: "Paint Decontamination" },
          { name: "Wax Protection" }
        ]
      },
      both: { 
        price: 215, 
        name: "Interior + Exterior", 
        description: "Complete interior and exterior detailing for SUVs", 
        isFeatured: true,
        features: [
          { name: "Everything in Interior Package" },
          { name: "Everything in Exterior Package" },
          { name: "Cargo Area Cleaning" },
          { name: "Complementary Touch-up Kit" }
        ]
      }
    },
    truck: {
      interior: { 
        price: 190, 
        name: "Interior Only", 
        description: "Complete interior detailing for trucks and vans",
        features: [
          { name: "Full Interior Vacuum" },
          { name: "Dashboard & Console Detailing" },
          { name: "Door Panels & Trim Cleaning" },
          { name: "Carpet & Upholstery Shampooing" },
          { name: "Window Cleaning (Interior)" }
        ]
      },
      exterior: { 
        price: 70, 
        name: "Exterior Only", 
        description: "Complete exterior detailing for trucks and vans",
        features: [
          { name: "Hand Wash & Dry" },
          { name: "Tire & Wheel Cleaning" },
          { name: "Window Cleaning (Exterior)" },
          { name: "Paint Decontamination" },
          { name: "Wax Protection" }
        ]
      },
      both: { 
        price: 250, 
        name: "Interior + Exterior", 
        description: "Complete interior and exterior detailing for trucks and vans", 
        isFeatured: true,
        features: [
          { name: "Everything in Interior Package" },
          { name: "Everything in Exterior Package" },
          { name: "Bed/Cargo Area Cleaning" },
          { name: "Complementary Touch-up Kit" }
        ]
      }
    }
  };

  // Current pricing based on selected vehicle type
  const currentPricing = [
    pricingData[vehicleType].exterior,
    pricingData[vehicleType].both,
    pricingData[vehicleType].interior
  ];

  return (
    <>
      <div className="min-h-screen bg-shine-dark text-white">
        <header className="p-4 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            
              <Image src="/icon.png" width={50} height={50} alt="Shine Mobile Detailing Logo" />
            
            <span className="font-bold text-xl text-white">Shine Mobile Detailing</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-white hover:text-shine-gold transition-colors">About</Link>
            <Link href="#services" className="text-white hover:text-shine-gold transition-colors">Services</Link>
            <Link href="#faq" className="text-white hover:text-shine-gold transition-colors">FAQ</Link>
            <Link href="#contact" className="text-white hover:text-shine-gold transition-colors">Contact</Link>
            <Link href="#reviews" className="text-white hover:text-shine-gold transition-colors">Reviews</Link>
          </nav>
          <Link href="#booking" className="btn border-shine-gold bg-transparent text-shine-gold hover:bg-shine-gold hover:text-shine-dark">
            Book Now
          </Link>
      </header>

      <main>
          {/* Hero Section */}
          <section className="relative py-28">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <div className="absolute inset-0">
              <Image 
                src="/porshce.png" 
                alt="Luxury car detailing" 
                fill
                className="object-cover object-center scale-x-[-1]"
                priority
                style={{ opacity: 0.5 }}
              />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-20">
              <div className="max-w-3xl flex flex-col gap-8">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                  LUXURY AUTO DETAILING <span className="text-shine-gold">AT YOUR DOORSTEP</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Experience premium mobile detailing that comes to you. We transform your vehicle with meticulous care and professional service, all without you having to leave your home.
                </p>
                <div className="flex gap-4">
                  <Link href="#booking" className="btn bg-shine-gold border-shine-gold text-shine-dark hover:bg-transparent hover:text-shine-gold btn-lg">
                    Schedule Now
                  </Link>
                  <Link href="#contact" className="btn btn-outline border-white text-white hover:border-shine-gold hover:text-shine-gold btn-lg">
                    Call Now
                  </Link>
                </div>

                
              </div>
            </div>
          </section>

          {/* What We Believe In */}
          <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-8 text-center">
              <h3 className="text-shine-gold font-semibold mb-4">OUR COMMITMENT</h3>
              <p className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto text-white">
                &quot;We&apos;re all about making your life easier while delivering <span className="text-shine-gold">unmatched care</span> that leaves your car <span className="text-shine-gold">shining like never before.</span>&quot;
              </p>

              {/* Trust Badges Section */}
              
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-shine-dark">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-shine-gold font-semibold mb-4">ABOUT</h3>
                <h2 className="text-3xl font-bold mb-6 text-white">Who We Are</h2>
                <p className="text-lg mb-6 text-white/80">
                  At Shine Mobile Detailing, we&apos;re passionate about making car care stress-free and convenient for customers across the area. Our mission is simple: to help you keep your car clean, protected, and looking its best without the hassle of driving to a shop or coordinating drop-offs and pick-ups.
                </p>
                <p className="text-lg mb-8 text-white/80">
                  Our team of expert detailers brings years of experience and a dedication to perfection with every service. We use only premium products and techniques to ensure your vehicle receives the care it deserves.
                </p>
                <Link href="#services" className="btn bg-shine-gold border-shine-gold text-shine-dark hover:bg-transparent hover:text-shine-gold">
                  Our Services
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden border border-shine-gold/30">
                <div className="w-full h-[400px] relative">
                  <Image 
                    src="/IMG_6813.JPG" 
                    alt="Shine Mobile Detailing team member" 
                    fill
                    className="object-cover object-center scale-[0.8]"
                    style={{ objectPosition: "50% 40%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Showcase Section */}
          <section id="portfolio" className="py-24 bg-gradient-to-r from-black to-shine-dark/90 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                <h3 className="text-shine-gold font-semibold mb-4">OUR PORTFOLIO</h3>
                <h2 className="text-3xl font-bold text-white mb-4">Luxury Vehicles We&apos;ve Detailed</h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  We take pride in treating every vehicle with the same level of care and attention to detail, from everyday cars to exotic supercars.
                </p>
              </div>

              {/* Featured Vehicle Spotlight */}
              <div className="mb-16 overflow-hidden rounded-xl border-2 border-shine-gold shadow-2xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                  <div className="relative h-[60vh] w-full">
                    <Image
                      src="/IMG_1287.jpg"
                      alt="Lamborghini Urus detailed by Shine Mobile Detailing"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="inline-block bg-shine-gold/90 px-4 py-2 rounded-lg text-shine-dark font-bold mb-4 hidden md:inline-block">
                      Featured Detail
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Lamborghini Urus</h3>
                    <p className="text-white/90 max-w-2xl">
                      Our premium interior and exterior detailing package brings out the best in this stunning performance SUV, 
                      enhancing its vibrant orange finish and pristine interior.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-xl overflow-hidden border border-shine-gold/30 shadow-lg relative">
                  <div className="relative h-[300px]">
                    <Image
                      src="/IMG_1291.jpg"
                      alt="Lamborghini Urus interior detailing"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold">Urus Interior</h4>
                      <p className="text-white/80 text-sm">Premium leather restoration</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-shine-gold/30 shadow-lg relative">
                  <div className="relative h-[300px]">
                    <Image
                      src="/IMG_4206.JPEG"
                      alt="Fiat 124 Spider detailed by Shine Mobile Detailing"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold">Fiat 124 Spider</h4>
                      <p className="text-white/80 text-sm">Convertible paint restoration</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-shine-gold/30 shadow-lg relative">
                  <div className="relative h-[300px]">
                    <Image
                      src="/IMG_4781.jpg"
                      alt="Hyundai Elantra detailed by Shine Mobile Detailing"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold">Hyundai Elantra</h4>
                      <p className="text-white/80 text-sm">Showroom finish detailing</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-shine-gold/30 shadow-lg relative">
                  <div className="relative h-[300px]">
                    <Image
                      src="/IMG_6807.JPG"
                      alt="Ford F-150 Raptor detailed by Shine Mobile Detailing"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold">Ford F-150 Raptor</h4>
                      <p className="text-white/80 text-sm">Truck detail package</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link href="/#contact" className="btn bg-shine-gold border-shine-gold text-shine-dark hover:bg-transparent hover:text-shine-gold btn-lg">
                  Book Your Detail Today
                </Link>
              </div>
            </div>
          </section>

          {/* Before and After Showcase */}
          <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                <h3 className="text-shine-gold font-semibold mb-4">WHAT WE DO</h3>
                <h2 className="text-3xl font-bold text-white mb-4">Before & After Transformations</h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  See the difference our premium detailing services make. Swipe or hover over images to see the dramatic transformation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* First Before/After Card */}
                <div 
                  className={`group relative h-[500px] rounded-xl overflow-hidden border border-shine-gold/30 shadow-xl cursor-pointer ${showAfter ? 'after-visible' : ''}`} 
                  onClick={() => setShowAfter(!showAfter)}
                >
                  <div className={`absolute inset-0 bg-black/50 z-10 flex items-center justify-center transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'} md:group-hover:opacity-0`}>
                    <div className="text-center px-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Interior Detailing</h3>
                      <p className="text-white/80 mb-4">We restore your vehicle&apos;s interior to showroom condition</p>
                      <span className="inline-block text-shine-gold border-2 border-shine-gold px-6 py-3 rounded-full text-base font-bold shadow-lg bg-black/70 hover:bg-shine-gold hover:text-black transition-colors">
                        {showAfter ? 'Show Before' : 'Show After'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Before Image */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'} md:group-hover:opacity-0`}>
                    <Image 
                      src="/IMG_6822.JPG" 
                      alt="Before interior detailing" 
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  
                  {/* After Image - Initially hidden, shown on hover */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`}>
                    <Image 
                      src="/IMG_6823.JPG" 
                      alt="After interior detailing" 
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <p className="text-shine-gold text-xl font-bold tracking-wider flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        AFTER
                      </p>
                    </div>
                  </div>
                </div>

                {/* First Card Information Panel */}
                <div className="flex flex-col justify-center p-8 bg-shine-dark/50 rounded-xl border border-shine-gold/30">
                  <h3 className="text-2xl font-bold text-white mb-6">The Shine Difference</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-shine-gold/20 p-2 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Meticulous Attention to Detail</h4>
                        <p className="text-white/80">We clean every crevice and surface, restoring your car&apos;s interior to like-new condition.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-shine-gold/20 p-2 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Premium Products</h4>
                        <p className="text-white/80">We use only professional-grade cleaning agents and conditioners that protect surfaces.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-shine-gold/20 p-2 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Advanced Equipment</h4>
                        <p className="text-white/80">Our professional-grade equipment extracts dirt from deep within carpets and upholstery.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link href="#services" className="btn bg-shine-gold border-shine-gold text-shine-dark hover:bg-transparent hover:text-shine-gold">
                      Explore Our Services
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Mobile tap instruction - visible only on small screens */}
              <div className="md:hidden text-center mt-6 mb-16">
                <p className="text-white/80 text-sm">Tap image to see transformation</p>
              </div>
              
              {/* Second Before/After Row - Added in reverse layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                {/* Information panel - Now on the left */}
                <div className="flex flex-col justify-center p-8 bg-shine-dark/50 rounded-xl border border-shine-gold/30 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-white mb-6">Exterior Detailing Excellence</h3>
                  <p className="text-white/80 mb-6">
                    Our exterior detailing removes built-up dirt, road grime, and contaminants that regular washing can&apos;t eliminate. We restore your vehicle&apos;s showroom shine and protect its surfaces.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-shine-gold/20 p-2 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Hand Washing & Detailing</h4>
                        <p className="text-white/80">Every vehicle receives a gentle but thorough hand wash and detailing.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-shine-gold/20 p-2 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Paint Protection</h4>
                        <p className="text-white/80">We apply high-quality waxes and sealants to protect against environmental damage.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Second Before/After Card - Now on the right */}
                <div 
                  className={`group relative h-[500px] rounded-xl overflow-hidden border border-shine-gold/30 shadow-xl cursor-pointer order-1 md:order-2`} 
                  onClick={() => setShowAfter2(!showAfter2)}
                >
                  <div className={`absolute inset-0 bg-black/50 z-10 flex items-center justify-center transition-opacity duration-500 ${showAfter2 ? 'opacity-0' : 'opacity-100'} md:group-hover:opacity-0`}>
                    <div className="text-center px-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Exterior Detailing</h3>
                      <p className="text-white/80 mb-4">We restore your vehicle&apos;s exterior to a brilliant shine</p>
                      <span className="inline-block text-shine-gold border-2 border-shine-gold px-6 py-3 rounded-full text-base font-bold shadow-lg bg-black/70 hover:bg-shine-gold hover:text-black transition-colors">
                        {showAfter2 ? 'Show Before' : 'Show After'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Before Image */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${showAfter2 ? 'opacity-0' : 'opacity-100'} md:group-hover:opacity-0`}>
                    <Image 
                      src="/IMG_1211.JPG" 
                      alt="Before exterior detailing" 
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  
                  {/* After Image */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${showAfter2 ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`}>
                    <Image 
                      src="/IMG_1212.JPG" 
                      alt="After exterior detailing" 
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <p className="text-shine-gold text-xl font-bold tracking-wider flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        AFTER
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section - Moved up in the page */}
          <section id="reviews" className="py-24 bg-shine-dark">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                <h3 className="text-shine-gold font-semibold mb-4">TESTIMONIALS</h3>
                <h2 className="text-3xl font-bold text-white">What Our Customers Say</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Dimma Issam",
                    date: "a month ago",
                    img: "/351161829_1633315233844973_4495546105464823509_n.jpg",
                    text: "Just had the interior and exterior of my car cleaned. The guys are hardworking and their work is meticulous. They did an impeccable job! They go to you, so you don&apos;t have to worry about dropping off the car and waiting. The car feels like it&apos;s brand new! It&apos;s super clean and smells so fresh. The detailing is incredible! I&apos;m so grateful and will definitely reach out again🥰"
                  },
                  {
                    name: "Katie Ryan",
                    date: "10 months ago",
                    img: "/487489073_10165302462182178_1450958078886028743_n.jpg",
                    text: "Wow! Thank you for making our truck look brand new and incredible! What a great service and highly recommend these guys! These men spent over 3 hours cleaning the inside of our truck and it&apos;s never looked better. And the best part is they came to us to detail our truck and they booked us in very quickly! A big thank you 😃"
                  },
                  {
                    name: "Tabitha Knowles",
                    date: "2 months ago",
                    img: "/465988361_10101481937558265_7673078266829928699_n.jpg",
                    text: "Wow! I am beyond impressed! I didn&apos;t think my vehicle was THAT dirty but I was speechless when I saw it after it was detailed! The guys did an outstanding job, I am so impressed and would recommend them to everyone! They were very professional and great to work with - I will definitely have them clean my Rav again, very reasonably priced for such an amazing job!"
                  },
                ].map((review, i) => (
                  <div key={i} className="bg-black p-6 rounded-xl shadow-lg border border-shine-gold/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${!review.img ? 'bg-shine-dark text-shine-gold border border-shine-gold/50 rounded-full flex items-center justify-center font-bold' : 'relative rounded-full overflow-hidden'}`}>
                        {review.img ? (
                          <Image 
                            src={review.img} 
                            alt={`${review.name}&apos;s profile`} 
                            fill
                            className="object-cover"
                          />
                        ) : (
                          review.name.charAt(0)
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{review.name} {review.age && <span className="text-white/60 text-sm">• {review.age}</span>}</h4>
                        <p className="text-sm text-white/60">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/80">{review.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link href="#" className="btn btn-outline border-shine-gold text-shine-gold hover:bg-shine-gold hover:text-shine-dark">
                  Leave a Review
                </Link>
              </div>
            </div>
          </section>

          {/* Professional Standards Section */}
          <section className="py-20 bg-shine-dark">
            <div className="max-w-7xl mx-auto px-8">
              <div className="bg-black/40 border border-shine-gold/30 rounded-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="bg-shine-gold/10 p-8 rounded-full border border-shine-gold/30 inline-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-3xl font-bold text-white mb-4">Our Professional Standards</h3>
                    <p className="text-white/80 text-lg mb-6">
                      At Shine Mobile Detailing, we adhere to the highest standards of professionalism in every aspect of our service. From our detailed communication to our meticulous work, we ensure that your experience meets the level of excellence you expect.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Courteous and uniformed staff with extensive training and experience</span>
                      </li>
                      <li className="flex items-center gap-2 text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Transparent pricing with no hidden fees or unexpected charges</span>
                      </li>
                      <li className="flex items-center gap-2 text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Reliability and punctuality - we respect your schedule</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="py-24 bg-gradient-to-b from-black to-shine-dark">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                <h3 className="text-shine-gold font-semibold mb-4">SERVICES</h3>
                <h2 className="text-3xl font-bold text-white">Premium Detailing Packages</h2>
                
                {/* Vehicle Type Selector */}
                <div className="mt-8 max-w-xl mx-auto">
                  <p className="text-white mb-4">Select your vehicle type:</p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <button 
                      onClick={() => setVehicleType("sedan")} 
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                        vehicleType === "sedan" 
                          ? "bg-shine-gold text-shine-dark" 
                          : "bg-transparent border border-shine-gold/70 text-shine-gold hover:border-shine-gold"
                      }`}
                    >
                      Sedan
                    </button>
                    <button 
                      onClick={() => setVehicleType("suv")} 
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                        vehicleType === "suv" 
                          ? "bg-shine-gold text-shine-dark" 
                          : "bg-transparent border border-shine-gold/70 text-shine-gold hover:border-shine-gold"
                      }`}
                    >
                      SUV
                    </button>
                    <button 
                      onClick={() => setVehicleType("truck")} 
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                        vehicleType === "truck" 
                          ? "bg-shine-gold text-shine-dark" 
                          : "bg-transparent border border-shine-gold/70 text-shine-gold hover:border-shine-gold"
                      }`}
                    >
                      Truck/Van
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentPricing.map((plan, i) => {
                  // Dynamic styling for each card
                  const isHighlight = plan.isFeatured;
                  const cardStyle = isHighlight 
                    ? "bg-gradient-to-br from-shine-gold/10 to-black border-2 border-shine-gold" 
                    : "bg-black/70 border border-shine-gold/30 hover:border-shine-gold/60";
                  
                  return (
                    <div key={i} className={`rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${cardStyle}`}>
                      <div className={`p-6 ${isHighlight ? "bg-black/40" : ""}`}>
                        <div className="mb-3">
                          {isHighlight && <span className="bg-shine-gold text-shine-dark text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">MOST POPULAR</span>}
                        </div>
                        <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
                        <p className="text-white/80 mb-4">{plan.description}</p>
                        <div className="flex items-end gap-2 mb-6">
                          <span className="text-4xl font-bold text-shine-gold">${plan.price}</span>
                          {plan.priceAnchor && <span className="text-lg line-through opacity-50 text-white/60">${plan.priceAnchor}</span>}
                        </div>
                        <Link href="#booking" className={`btn w-full ${isHighlight 
                          ? "bg-shine-gold border-shine-gold text-shine-dark hover:bg-transparent hover:text-shine-gold" 
                          : "bg-transparent border-shine-gold/70 text-shine-gold hover:border-shine-gold hover:bg-shine-gold/10"}`}>
                          Book Now
                        </Link>
                      </div>
                      <div className="p-6 border-t border-shine-gold/20">
                        <ul className="space-y-3">
                          {plan.features ? plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-white/90">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shine-gold" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{feature.name}</span>
                            </li>
                          )) : (
                            <li className="text-white/90">Contact for details</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                <h3 className="text-shine-gold font-semibold mb-4">HOW IT WORKS</h3>
                <h2 className="text-3xl font-bold text-white">Our Mobile Detailing Process in 3 Easy Steps</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-shine-dark/30 p-8 rounded-xl border border-shine-gold/20 hover:border-shine-gold/50 transition-all">
                  <div className="bg-shine-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-shine-gold/40">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">1. Book Online</h3>
                  <p className="text-white/80">Schedule your appointment through our easy-to-use online booking system. Select your service, date, and time.</p>
                </div>

                <div className="text-center bg-shine-dark/30 p-8 rounded-xl border border-shine-gold/20 hover:border-shine-gold/50 transition-all">
                  <div className="bg-shine-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-shine-gold/40">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">2. We Come to You</h3>
                  <p className="text-white/80">Our fully-equipped mobile detailing team arrives at your location with everything needed for a professional detail.</p>
                </div>

                <div className="text-center bg-shine-dark/30 p-8 rounded-xl border border-shine-gold/20 hover:border-shine-gold/50 transition-all">
                  <div className="bg-shine-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-shine-gold/40">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905 0 .905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">3. Enjoy Your Shining Car</h3>
                  <p className="text-white/80">Relax while we transform your vehicle. When we&apos;re done, you&apos;ll have a brilliantly clean car without leaving home.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-shine-gold font-semibold mb-4">CONTACT US</h3>
                <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
                <p className="text-lg mb-8 text-white/80">
                  Have questions about our services or want to schedule an appointment? Contact us and we&apos;ll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-shine-gold/10 p-3 rounded-full border border-shine-gold/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-white/80">(506) 470-6164</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-shine-gold/10 p-3 rounded-full border border-shine-gold/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-white/80">shinemobiledetailings@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-shine-gold/10 p-3 rounded-full border border-shine-gold/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Hours</h4>
                      <p className="text-white/80">Monday-Saturday: 8am-6pm</p>
                      <p className="text-white/80">Sunday: 9am-4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-shine-dark p-8 rounded-xl border border-shine-gold/20">
                <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
                <form action="https://formspree.io/f/manonznr" method="POST" className="space-y-4">
                  <input type="hidden" name="_next" value="https://shinemobiledetailings.ca/thank-you" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-white/80">First Name</label>
                      <input type="text" name="firstName" className="input bg-black border-shine-gold/30 text-white w-full focus:border-shine-gold" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-white/80">Last Name</label>
                      <input type="text" name="lastName" className="input bg-black border-shine-gold/30 text-white w-full focus:border-shine-gold" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white/80">Email</label>
                    <input type="email" name="email" className="input bg-black border-shine-gold/30 text-white w-full focus:border-shine-gold" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white/80">Phone</label>
                    <input type="tel" name="phone" className="input bg-black border-shine-gold/30 text-white w-full focus:border-shine-gold" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white/80">Message</label>
                    <textarea name="message" rows="4" className="textarea bg-black border-shine-gold/30 text-white w-full focus:border-shine-gold" required></textarea>
                  </div>
                  <button type="submit" className="btn bg-shine-gold border-shine-gold text-shine-dark hover:bg-transparent hover:text-shine-gold w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-black text-white py-12 border-t border-shine-gold/20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Image src="/icon.png" width={50} height={50} alt="Shine Mobile Detailing Logo" />
                  <span className="font-bold text-xl text-white">Shine Mobile Detailing</span>
                </div>
                <p className="mb-6 text-white/70 max-w-md">
                  Professional mobile detailing service that comes to your location. Premium auto detailing at your doorstep.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61556797486720" className="btn btn-circle bg-transparent border-shine-gold/50 text-shine-gold hover:border-shine-gold" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/shinemobiledetailings/" className="btn btn-circle bg-transparent border-shine-gold/50 text-shine-gold hover:border-shine-gold" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-white/70 hover:text-shine-gold">Home</Link></li>
                  <li><Link href="#about" className="text-white/70 hover:text-shine-gold">About</Link></li>
                  <li><Link href="#services" className="text-white/70 hover:text-shine-gold">Services</Link></li>
                  <li><Link href="#faq" className="text-white/70 hover:text-shine-gold">FAQ</Link></li>
                  <li><Link href="#contact" className="text-white/70 hover:text-shine-gold">Contact</Link></li>
                </ul>
              </div>

              
            </div>

            <div className="mt-12 pt-8 border-t border-shine-gold/10 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60">© 2023 Shine Mobile Detailing. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-white/60 hover:text-shine-gold">Terms</Link>
                <Link href="#" className="text-white/60 hover:text-shine-gold">Privacy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
