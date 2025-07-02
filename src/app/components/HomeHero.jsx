'use client'

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const vectorRefs = useRef([]);
  
 const slides = [
  {
    image: '/126.jpg',
    title: 'Portfolio Performance',
    stat: '+12.7% YTD',
    vector: 'M20,100 Q100,20 180,100 T340,100',
    vectorColor: '#D4A373',
    description: 'Outperforming market benchmarks by 3.2% this fiscal year'
  },
  {
    image: '/front-view-arrangement-economy-elements.jpg',
    title: 'Asset Allocation',
    stat: '32 Countries',
    vector: 'M20,20 L100,180 L180,20 L260,180 L340,20',
    vectorColor: '#457B9D',
    description: 'Diversified across 11 asset classes for optimal risk management'
  },
  {
    image: '/risk-assessment-graph-chart-spreadsheet-table-word.jpg',
    title: 'Risk Analysis',
    stat: '0.87 Sharpe',
    vector: 'M20,100 C100,20 180,180 260,20 340,100',
    vectorColor: '#1D3557',
    description: 'Superior risk-adjusted returns compared to industry average'
  },
  {
    image: '/business-people-working-with-ipad-high-angle.jpg', // hypothetical image
    title: 'Investment Strategy',
    stat: '83% Success Rate',
    vector: 'M20,50 L100,150 L180,50 L260,150 L340,50',
    vectorColor: '#A47148',
    description: 'Proven investment theses with consistent performance'
  },
  {
    image: '/businessman-holding-trees-growing-increasing-coins-stacking-money-saving-deposit-growth-from-investmen.jpg', // hypothetical image
    title: 'Wealth Growth',
    stat: '7.2x Multiplier',
    vector: 'M20,150 C100,20 180,180 260,20 340,150',
    vectorColor: '#1A936F',
    description: 'Average client portfolio growth over 10 years'
  },
  {
    image: '/top-view-woman-working-as-economist.jpg', // hypothetical image
    title: 'Tax Efficiency',
    stat: '28% Savings',
    vector: 'M20,80 L100,20 L180,80 L260,20 L340,80',
    vectorColor: '#114B5F',
    description: 'Strategic tax planning for optimal net returns'
  },
  
];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero text animation
    gsap.from(".hero-text", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.15,
      ease: "back.out(1.7)"
    });

    // Floating elements animation
    gsap.to(".float-element", {
      y: 15,
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    // Background elements animation
    gsap.to(".bg-vector-1", {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center"
    });

    gsap.to(".bg-vector-2", {
      x: 100,
      y: 50,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Particle animation
    gsap.to(".particle", {
      x: "random(-50, 50)",
      y: "random(-50, 50)",
      rotation: "random(-30, 30)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    });

    // Slider vector animations
    vectorRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.fromTo(ref,
          { strokeDashoffset: 1000 },
          {
            strokeDashoffset: 0,
            duration: 2,
            delay: i * 0.3,
            ease: "power2.out"
          }
        );
      }
    });

    // Slider animation
    const sliderTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    
    sliderTl.to(sliderRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    })
    .to(sliderContentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power1.in"
    }, 0)
    .to(sliderRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    })
    .to(sliderContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4");

    return () => sliderTl.kill();
  }, [slides.length]);

  // Handle manual slide change
  const goToSlide = (index) => {
    const tl = gsap.timeline();
    
    tl.to(sliderRef.current, {
      opacity: 0.8,
      scale: 0.98,
      duration: 0.4,
      ease: "power2.in"
    })
    .to(sliderContentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power1.in"
    }, 0)
    .set(sliderRef.current, {
      onComplete: () => setCurrentSlide(index)
    })
    .to(sliderRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(sliderContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.3");
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <section className="relative bg-gradient-to-br from-[#f8f5f2] to-[#e5dfd8] overflow-hidden" ref={heroRef}>
        {/* Particle background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div 
              key={i}
              className="particle absolute rounded-full bg-[#D4A373]/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`
              }}
            />
          ))}
        </div>

        {/* Decorative vector background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Abstract geometric shapes */}
            <path d="M200 100C300 0 400 200 500 100C600 0 700 300 800 200C900 100 1000 400 1100 300C1200 200 1300 500 1400 400" 
              stroke="#1D3557" strokeWidth="1.2" strokeOpacity="0.1" strokeDasharray="8 4" className="animated-path" />
            
            <path d="M1200 100C1250 50 1300 150 1350 100" 
              stroke="#457B9D" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="8 3" className="animated-path" />
            
            <circle cx="1200" cy="200" r="80" fill="#D4A373" fillOpacity="0.03" className="bg-vector-1" />
            
            <path d="M100 800L300 700L500 800L700 700L900 800L1100 700L1300 800" 
              stroke="#1D3557" strokeWidth="1.2" strokeOpacity="0.08" strokeDasharray="5 3" className="bg-vector-2" />
            
            <path d="M400 300C450 250 500 350 550 300" 
              stroke="#A47148" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="6 3" className="animated-path" />
          </svg>
        </div>

        <div className="container mx-auto px-6 py-20 md:py-24  relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Content Section */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1D3557] to-[#457B9D] rounded-full mb-8 backdrop-blur-sm hero-text border border-white/20 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#D4A373] mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-white tracking-wider font-['Montserrat']">
                  PRIVATE WEALTH SOLUTIONS
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D3557] leading-tight mb-8 font-['Playfair_Display'] hero-text">
                <span className="block">Elevating Your</span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#A47148] to-[#D4A373] bg-clip-text text-transparent">
                    Financial Vision
                  </span>
                  <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,10 Q100,20 200,10 T400,10" stroke="#D4A373" strokeWidth="2" fill="none" strokeOpacity="0.3" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-[#457B9D] mb-10 max-w-lg leading-relaxed font-['Montserrat'] font-light hero-text">
                Discreet, sophisticated wealth management for individuals and families with complex financial needs.
              </p>
              
              <div className="flex flex-row gap-4 mb-16 hero-text">
                <button className="px-3 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#1D3557] to-[#457B9D] hover:from-[#14213D] hover:to-[#1D3557] text-white font-medium rounded-lg transition-all duration-300 font-['Montserrat'] flex items-center gap-2 group overflow-hidden relative shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                  <span className="relative z-10">Begin Your Journey</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] to-[#1D3557] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </button>
                <button className="px-3 py-3 md:px-8 md:py-4 border-2 border-[#1D3557] text-[#1D3557] hover:bg-[#1D3557]/5 font-medium rounded-lg transition-all duration-300 font-['Montserrat'] flex items-center gap-2 group shadow-md hover:shadow-lg hover:scale-[1.02]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Our Approach</span>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 max-w-md hero-text">
                <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <p className="text-3xl font-bold text-[#1D3557] font-['Playfair_Display']">$4.8B</p>
                  <p className="text-sm text-[#457B9D] font-['Montserrat']">Assets Managed</p>
                </div>
                <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <p className="text-3xl font-bold text-[#1D3557] font-['Playfair_Display']">35+</p>
                  <p className="text-sm text-[#457B9D] font-['Montserrat']">Years Experience</p>
                </div>
                <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <p className="text-3xl font-bold text-[#1D3557] font-['Playfair_Display']">99%</p>
                  <p className="text-sm text-[#457B9D] font-['Montserrat']">Client Retention</p>
                </div>
              </div>
            </div>
            
            {/* Visual Section - Responsive Fixes Applied Here */}
            <div className="lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              {/* Floating decorative elements */}
              <div className="absolute -top-5 -left-5 w-16 h-16 md:-top-10 md:-left-10 md:w-24 md:h-24 rounded-full bg-[#D4A373]/10 backdrop-blur-sm border border-[#D4A373]/20 float-element"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 md:-bottom-5 md:-right-5 md:w-16 md:h-16 rounded-lg bg-[#457B9D]/10 backdrop-blur-sm border border-[#457B9D]/20 rotate-12 float-element"></div>
              
              {/* Main slider */}
              <div 
                ref={sliderRef}
                className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border-4 md:border-8 border-white/30 transform transition-all duration-500"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Slide info overlay */}
                  <div 
                    ref={sliderContentRef}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6"
                  >
                    <h2 className="text-lg md:text-2xl font-medium text-white font-['Montserrat'] mb-1">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-md md:text-lg font-medium text-white font-['Montserrat'] mb-1">
                      {slides[currentSlide].description}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-[#D4A373] font-['Playfair_Display']">
                      {slides[currentSlide].stat}
                    </p>
                  </div>
                </div>
                
                {/* Slider controls */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-4 md:w-6' : 'bg-white/50 hover:bg-white/70'}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md md:shadow-xl border border-white/30  flex items-center gap-2 z-20 ">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4A373] animate-pulse"></div>
                <span className="text-xs font-medium text-[#1D3557] font-['Montserrat'] tracking-wider">
                  ANALYTICS LIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0,0 L1440,0 L1440,60 C1200,120 800,120 400,60 C200,30 100,15 0,60 Z" 
              fill="#1D3557" 
              fillOpacity="0.03"
              className="animated-wave"
            />
          </svg>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes wave {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-10%);
          }
        }
        
        .animated-path {
          stroke-dasharray: 10 5;
          stroke-dashoffset: 1000;
          animation: dash 30s linear infinite;
        }
        
        .animated-wave {
          animation: wave 15s linear infinite alternate;
        }
        
        .float-element {
          will-change: transform;
        }
        
        .hero-text:nth-child(1) { animation-delay: 0.1s; }
        .hero-text:nth-child(2) { animation-delay: 0.3s; }
        .hero-text:nth-child(3) { animation-delay: 0.5s; }
        .hero-text:nth-child(4) { animation-delay: 0.7s; }
        .hero-text:nth-child(5) { animation-delay: 0.9s; }
      `}</style>
    </>
  );
}