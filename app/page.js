"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import config from "@/config";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const serviceDetails = {
    concrete: {
      title: "CONCRETE SERVICES",
      description: "BROOM FINISH & STAMPED CONCRETE SOLUTIONS",
      features: [
        "Broom Finish Concrete",
        "Stamped Concrete Patterns",
        "Driveways & Walkways",
        "Patios & Slabs", 
        "Commercial Concrete"
      ]
    },
    stone: {
      title: "STONE & PAVERS",
      description: "RETAINING WALLS & STONE INSTALLATION",
      features: [
        "Patio & Walkway Pavers",
        "Retaining Walls",
        "Natural Stone Work",
        "Custom Stone Features",
      ]
    },
    decks: {
      title: "DECK CONSTRUCTION",
      description: "CUSTOM DECKS & OUTDOOR LIVING SPACES",
      features: [
        "Custom Deck Design",
        "Composite & Wood Decking",
        "Railings & Stairs",
        "Gazebos & Pergolas",
        "Deck Repairs & Maintenance",
        "Multi-Level Decks",
        "Outdoor Living Spaces"
      ]
    },
    landscape: {
      title: "LANDSCAPE & SOD",
      description: "COMPLETE LANDSCAPING & SOD INSTALLATION",
      features: [
        "Landscape Design",
        "Sod Installation",
        "Mulch Installation",
        "Drainage Solutions",
        "Outdoor Living Spaces",
        "Garden Design",
      ]
    }
  };



  // Simple scroll detection for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Dynamic Header with Framer Motion Logo Transition */}
        <motion.header 
          className="fixed top-0 left-0 right-0 z-50"
          animate={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
            backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
            borderBottom: scrolled ? '1px solid rgba(229, 231, 235, 1)' : '1px solid rgba(229, 231, 235, 0)',
            boxShadow: scrolled ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : '0 0px 0px 0px rgba(0, 0, 0, 0)'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex justify-between items-center"
              animate={{ 
                paddingTop: scrolled ? '16px' : '24px',
                paddingBottom: scrolled ? '16px' : '24px'
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Logo Transition */}
              <motion.div 
                className="flex items-center space-x-3"
                animate={{ scale: scrolled ? 0.9 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    width: scrolled ? 180 : 220,
                    height: scrolled ? 90 : 110
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative"
                >
                  <Image 
                    src="/337381986_1149718553095476_491873017312997509_n.jpg"
                    alt="Bedrock Construction Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#home" className={`font-medium transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                }`}>HOME</Link>
                <Link href="#about" className={`font-medium transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                }`}>ABOUT US</Link>
                <Link href="#services" className={`font-medium transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                }`}>OUR SERVICES</Link>
                <Link href="#work" className={`font-medium transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                }`}>OUR WORK</Link>
                <Link href="#contact" className={`font-medium transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                }`}>CONTACT US</Link>
              </nav>

              {/* Contact Info */}
              <motion.div 
                className="hidden lg:flex items-center space-x-4"
                animate={{ scale: scrolled ? 0.9 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-right">
                  <p className={`font-bold transition-colors duration-300 ${
                    scrolled 
                      ? 'text-base text-gray-900' 
                      : 'text-lg text-white'
                  }`}>
                    {config.contact.phone1}
                  </p>
                  <p className={`transition-colors duration-300 ${
                    scrolled 
                      ? 'text-xs text-gray-600' 
                      : 'text-sm text-white/80'
                  }`}>
                    {config.contact.phone2}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  scrolled 
                    ? 'bg-gray-900 hover:bg-black' 
                    : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                }`}>
                  <svg className={`w-5 h-5 transition-colors duration-300 ${
                    scrolled ? 'text-white' : 'text-white'
                  }`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className={`transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <main>
          {/* Hero Section */}
          <section id="home" className="relative h-screen bg-gray-900 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/2025-07-07-18-04-58-909.PNG"
                alt="Beautiful home with custom deck construction"
                fill
                className="object-cover blur-sm scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl">
                  {/* Company Name Above Main Heading */}
                  <div className="text-right mb-8 hero-text-slide">
                    <p className="text-gray-300 text-xl md:text-2xl font-bold tracking-widest">BEDROCK CONSTRUCTION</p>
                  </div>
                  
                  <div className="text-right mb-6">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight hero-text-slide">
                      YOUR VISION,
                      <br />
                      <span className="text-gray-300">OUR CRAFT!</span>
                    </h1>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl ml-auto hero-subtitle-slide">
                      Expert <strong className="text-white">construction</strong> and 
                      <strong className="text-white"> landscape</strong> services for 
                      <strong className="text-white"> residential</strong> and commercial projects in Fredericton and surrounding areas.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 hero-subtitle-slide justify-end">
                    <Link 
                      href="#contact" 
                      className="bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-block text-center"
                    >
                      Get Free Quote
                    </Link>
                    <Link 
                      href="#services" 
                      className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 inline-block text-center"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Services Banner Section with TOP TIER Style Layout */}
          <section className="relative py-32 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Services Overview Text */}
                <motion.div
                  className="relative h-[600px] flex flex-col justify-center p-12"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Dynamic Text Content */}
                  <motion.h2 
                    className="text-yellow-400 text-2xl font-bold mb-8 tracking-widest"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    SERVICES
                  </motion.h2>
                  
                  <motion.h3 
                    key={hoveredService || "default"}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {hoveredService ? serviceDetails[hoveredService].title : (
                      <>
                        FROM CONCRETE
                        <br />
                        TO COMPLETE
                        <br />
                        LANDSCAPE & SOD
                        <br />
                        SOLUTIONS
                      </>
                    )}
                  </motion.h3>
                  
                  <motion.p 
                    key={hoveredService ? `${hoveredService}-desc` : "default-desc"}
                    className="text-2xl md:text-3xl font-bold text-white/90 leading-tight mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {hoveredService ? serviceDetails[hoveredService].description : (
                      <>
                        BROOM FINISH &
                        <br />
                        STAMPED CONCRETE
                        <br />
                        TO COMPLETE
                        <br />
                        LANDSCAPING
                      </>
                    )}
                  </motion.p>

                  {/* Features List - Only show when a service is hovered */}
                  {hoveredService && (
                    <motion.div
                      key={`${hoveredService}-features`}
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h4 className="text-lg font-semibold text-yellow-400 mb-4">Our Services Include:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {serviceDetails[hoveredService].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                            <span className="text-lg text-white/80">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Right Side - Service Category Cards */}
                <div className="relative h-[600px]">
                  {/* Concrete Card */}
                  <motion.div 
                    className="group cursor-pointer h-[140px] rounded-2xl overflow-hidden absolute left-0 right-0"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    animate={{
                      height: hoveredService === 'concrete' ? '600px' : '140px',
                      opacity: hoveredService === null || hoveredService === 'concrete' ? 1 : 0.3,
                      scale: hoveredService === 'concrete' ? 1 : 0.95,
                      top: hoveredService === 'concrete' ? '0px' : '0px',
                      zIndex: hoveredService === 'concrete' ? 10 : 1
                    }}
                    onHoverStart={() => setHoveredService('concrete')}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    <div className="relative h-full bg-gray-800 overflow-hidden">
                      <Image
                        src="/thumbnail_IMG_3054.jpg"
                        alt="Broom Finish Concrete"
                        fill
                        className="object-cover transition-transform duration-100 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Concrete</h4>
                      </div>
                    </div>
                  </motion.div>

                  {/* Stone & Pavers Card */}
                  <motion.div 
                    className="group cursor-pointer h-[140px] rounded-2xl overflow-hidden absolute left-0 right-0"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    animate={{
                      height: hoveredService === 'stone' ? '600px' : '140px',
                      opacity: hoveredService === null || hoveredService === 'stone' ? 1 : 0.3,
                      scale: hoveredService === 'stone' ? 1 : 0.95,
                      top: hoveredService === 'stone' ? '0px' : '140px',
                      zIndex: hoveredService === 'stone' ? 10 : 1
                    }}
                    onHoverStart={() => setHoveredService('stone')}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    <div className="relative h-full bg-gray-800 overflow-hidden">
                      <Image
                        src="/IMG_3285.JPG"
                        alt="Stone & Pavers"
                        fill
                        className="object-cover transition-transform duration-100 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Stone & Pavers</h4>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decks Card */}
                  <motion.div 
                    className="group cursor-pointer h-[140px] rounded-2xl overflow-hidden absolute left-0 right-0"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    animate={{
                      height: hoveredService === 'decks' ? '600px' : '140px',
                      opacity: hoveredService === null || hoveredService === 'decks' ? 1 : 0.3,
                      scale: hoveredService === 'decks' ? 1 : 0.95,
                      top: hoveredService === 'decks' ? '0px' : '280px',
                      zIndex: hoveredService === 'decks' ? 10 : 1
                    }}
                    onHoverStart={() => setHoveredService('decks')}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    <div className="relative h-full bg-gray-800 overflow-hidden">
                      <Image
                        src="/2024-07-26-18-06-29-443.PNG"
                        alt="Custom Deck Construction"
                        fill
                        className="object-cover transition-transform duration-100 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Decks</h4>
                      </div>
                    </div>
                  </motion.div>

                  {/* Landscape & Sod Card */}
                  <motion.div 
                    className="group cursor-pointer h-[140px] rounded-2xl overflow-hidden absolute left-0 right-0"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    animate={{
                      height: hoveredService === 'landscape' ? '600px' : '140px',
                      opacity: hoveredService === 'landscape' ? 1 : 0.3,
                      scale: hoveredService === 'landscape' ? 1 : 0.95,
                      top: hoveredService === 'landscape' ? '0px' : '420px',
                      zIndex: hoveredService === 'landscape' ? 10 : 1
                    }}
                    onHoverStart={() => setHoveredService('landscape')}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    <div className="relative h-full bg-gray-800 overflow-hidden">
                      <Image
                        src="/IMG_3287.JPG"
                        alt="Landscape & Sod Installation"
                        fill
                        className="object-cover transition-transform duration-100 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Landscape & Sod</h4>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="text-center mb-12">
                  <h2 className="text-yellow-400 text-2xl font-bold mb-6 tracking-widest">SERVICES</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    FROM CONCRETE TO COMPLETE LANDSCAPE & SOD SOLUTIONS
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    BROOM FINISH & STAMPED CONCRETE TO COMPLETE LANDSCAPING
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Concrete Service */}
                  <div className="bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/thumbnail_IMG_3054.jpg"
                        alt="Broom Finish Concrete"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Concrete Services</h4>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white/80 mb-4">Professional concrete installation and finishing services</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Broom Finish Concrete</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Stamped Concrete Patterns</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Driveways & Walkways</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Patios & Foundation Work</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stone & Pavers Service */}
                  <div className="bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/IMG_3285.JPG"
                        alt="Stone & Pavers"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Stone & Pavers</h4>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white/80 mb-4">Expert stone and masonry installation</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Retaining Walls</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Stone & Paver Installation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Natural Stone Work</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Custom Stone Features</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decks Service */}
                  <div className="bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/2024-07-26-18-06-29-443.PNG"
                        alt="Custom Deck Construction"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Deck Construction</h4>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white/80 mb-4">Custom decks and outdoor living spaces</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Custom Deck Design</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Composite & Wood Decking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Railings & Stairs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Outdoor Living Spaces</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Landscape & Sod Service */}
                  <div className="bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/IMG_3287.JPG"
                        alt="Landscape & Sod Installation"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-2xl font-bold text-white text-center">Landscape & Sod</h4>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white/80 mb-4">Complete landscaping and sod installation</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Landscape Design</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Sod Installation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Hardscaping</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-white/70">Drainage Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement & Why Choose Us */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mission Statement */}
              <div className="text-center mb-20 animate-on-scroll animate-left" data-id="mission-statement">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    At Bedrock Construction, we are dedicated to transforming outdoor spaces into exceptional living environments through superior craftsmanship, innovative design, and unwavering commitment to customer satisfaction. 
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We believe that every project, from a simple concrete driveway to a complete landscape transformation, deserves the same level of attention to detail, quality materials, and professional execution. Our mission is to build not just structures, but lasting relationships with our clients while enhancing the beauty and functionality of their properties.
                  </p>
                </div>
              </div>

              <div className="text-center mb-16 animate-on-scroll animate-left" data-id="why-choose-title">
                <h2 className="text-4xl font-bold mb-4">Why Choose Bedrock Construction?</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We&apos;re committed to delivering exceptional results on every project, big or small.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center animate-on-scroll stagger-1" data-id="feature-1">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Quality Guaranteed</h3>
                  <p className="text-gray-300">
                    We use only the finest materials and proven construction techniques to ensure lasting results.
                  </p>
                </div>

                <div className="text-center animate-on-scroll stagger-2" data-id="feature-2">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Experienced Team</h3>
                  <p className="text-gray-300">
                    Our skilled professionals have years of experience in all aspects of construction and masonry.
                  </p>
                </div>

                <div className="text-center animate-on-scroll stagger-3" data-id="feature-3">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">On-Time Delivery</h3>
                  <p className="text-gray-300">
                    We respect your time and budget, delivering projects on schedule and within agreed parameters.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Work Portfolio - Photo Collage */}
          <section id="work" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-on-scroll animate-left" data-id="portfolio-title">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in-up stagger-1">Our Recent Work</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-up stagger-2">
                  Take a look at some of our completed projects showcasing quality craftsmanship and attention to detail.
                </p>
              </div>

              {/* Photo Collage Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                {/* Photo 1 */}
                <div className="animate-on-scroll fade-in-up stagger-1" data-id="photo-1">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src="/IMG_3280.JPG"
                      alt="Retaining Wall Project"
                      fill
                      className="object-cover transition-transform duration-75 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Photo 2 */}
                <div className="animate-on-scroll fade-in-up stagger-2" data-id="photo-2">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src="/IMG_3281.JPG"
                      alt="Retaining Wall Construction"
                      fill
                      className="object-cover transition-transform duration-75 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Photo 3 */}
                <div className="animate-on-scroll fade-in-up stagger-3" data-id="photo-3">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src="/IMG_3282.JPG"
                      alt="Stamped Concrete Project"
                      fill
                      className="object-cover transition-transform duration-75 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Photo 4 */}
                <div className="animate-on-scroll fade-in-up stagger-4" data-id="photo-4">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src="/IMG_3283.JPG"
                      alt="Stamped Concrete Detail"
                      fill
                      className="object-cover transition-transform duration-75 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Photo 5 */}
                <div className="animate-on-scroll fade-in-up stagger-5" data-id="photo-5">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src="/thumbnail_IMG_3054.jpg"
                      alt="Broom Finish Concrete"
                      fill
                      className="object-cover transition-transform duration-75 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Photo 6 */}
                <div className="animate-on-scroll fade-in-up stagger-6" data-id="photo-6">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src="/IMG_3285.JPG"
                      alt="Stone & Pavers Installation"
                      fill
                      className="object-cover transition-transform duration-75 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Photo 7 */}
                <div className="animate-on-scroll fade-in-up stagger-7" data-id="photo-7">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                                          <Image
                        src="/IMG_3286.JPG"
                        alt="Stone & Pavers Project"
                        fill
                        className="object-cover transition-transform duration-75 group-hover:scale-125"
                      />
                                         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Photo 8 */}
                <div className="animate-on-scroll fade-in-up stagger-8" data-id="photo-8">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src="/IMG_3287.JPG"
                      alt="Landscape & Sod Project"
                      fill
                      className="object-cover transition-transform duration-75 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="#contact" 
                  className="bg-gray-900 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 inline-block fade-in-up stagger-9"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-on-scroll animate-left" data-id="contact-title">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in-up stagger-1">Get In Touch</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-up stagger-2">
                  Ready to start your next construction project? Contact us today for a free consultation and quote.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8 animate-on-scroll animate-left" data-id="contact-info">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                      <p className="text-lg text-gray-700">{config.contact.phone1}</p>
                      <p className="text-lg text-gray-700">{config.contact.phone2}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-lg text-gray-700">{config.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Service Area</h3>
                      <p className="text-lg text-gray-700">New Brunswick and surrounding areas</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                    <p className="text-gray-700 mb-4">
                      Ready to discuss your construction project? Click the button below to get in touch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={`tel:${config.contact.phone1}`}
                        className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-center"
                      >
                        Call Now
                      </a>
                      <a 
                        href={`mailto:${config.contact.email}`}
                        className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 text-center"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="animate-on-scroll" data-id="contact-form">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image 
                    src="/337381986_1149718553095476_491873017312997509_n.jpg" 
                    alt="Bedrock Construction Logo" 
                    width={50} 
                    height={50} 
                    className="h-10 w-auto"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{config.appName}</h3>
                    <p className="text-gray-400 text-sm">Quality Construction Services</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Professional construction and landscape services including concrete, stone & pavers, decks, and landscape & sod. 
                  Quality craftsmanship you can trust.
                </p>

              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="#services" className="hover:text-white transition-colors">Concrete</Link></li>
                  <li><Link href="#services" className="hover:text-white transition-colors">Stone & Pavers</Link></li>
                  <li><Link href="#services" className="hover:text-white transition-colors">Decks</Link></li>
                  <li><Link href="#services" className="hover:text-white transition-colors">Landscape & Sod</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>{config.contact.phone1}</li>
                  <li>{config.contact.phone2}</li>
                  <li>{config.contact.email}</li>
                  <li>New Brunswick, Canada</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2024 {config.appName}. All rights reserved.</p>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
