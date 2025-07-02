"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

export default function FeedbackSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const feedbacks = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Small Business Owner",
      content: "SK Finance helped me expand my business with their tailored loan solutions. The process was smooth and their team was extremely supportive throughout. Their personalized approach made all the difference in securing the right financing for my growing business needs.",
      image: "/tailor.jpg",
      rating: 5,
      date: "15 March 2023",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Home Loan Customer",
      content: "I never thought getting a home loan could be this easy! Their innovative solutions and customer-centric approach made my dream home a reality. The interest rates were competitive and the documentation process was completely hassle-free.",
      image: "/home-loan.jpg",
      rating: 4,
      date: "2 April 2023",
      location: "Bangalore, Karnataka"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Corporate Client",
      content: "Our 10+ years partnership with SK Finance speaks volumes about their reliability. They understand corporate financial needs like no one else. Their team consistently provides creative financial solutions that align perfectly with our business objectives.",
      image: "/indian-old-man-giving-expression-nature-background.jpg",
      rating: 5,
      date: "28 May 2023",
      location: "Delhi NCR"
    },
    {
      id: 4,
      name: "Ram Gupta",
      role: "Personal Loan Customer",
      content: "Quick approval and minimal paperwork made my emergency fund accessible within hours. Truly impressed with their efficiency! The entire process was digital and I received the funds in my account faster than I expected.",
      image: "/portrait-man-standing-by-plant-against-wall.jpg",
      rating: 5,
      date: "10 June 2023",
      location: "Hyderabad, Telangana"
    },
    {
      id: 5,
      name: "Rajesh Iyer",
      role: "Auto Loan Customer",
      content: "Got my dream car with SK Finance's competitive rates. Their representatives were knowledgeable and guided me perfectly through each step. The flexible repayment options made it easy to manage my monthly budget.",
      image: "/driver.jpg",
      rating: 4,
      date: "22 July 2023",
      location: "Chennai, Tamil Nadu"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-50%' : '50%',
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#f9f8f6] to-[#f0ede8] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#1D3557] blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#A47148] blur-[120px] opacity-10"></div>
        
        {/* Vector patterns */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-[#1D3557]/10" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,3"/>
        </svg>
        <svg className="absolute bottom-20 right-10 w-32 h-32 text-[#A47148]/10" viewBox="0 0 100 100">
          <path d="M20,20 L80,80 M80,20 L20,80" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#A47148]/30"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#1D3557]/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-[#A47148]/10 text-[#A47148] mb-4">
            Customer Testimonials
          </span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4"
            variants={fadeIn}
          >
            Voices of <span className="text-[#A47148]">Trust</span> & Satisfaction
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Discover what our clients say about their experiences with SK Finance
          </motion.p>
        </motion.div>

        {/* Main Container */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden mb-6">
          {/* Slide Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm text-sm font-medium text-[#1D3557]">
            {currentSlide + 1} / {feedbacks.length}
          </div>

          {/* Slides Container */}
          <div className="relative h-[650px] md:h-[450px]">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                custom={direction}
                initial="enter"
                animate={currentSlide === index ? "center" : "exit"}
                variants={slideVariants}
                className="absolute inset-0 flex flex-col md:flex-row items-stretch"
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-2 md:p-4 flex flex-col">
                  <motion.div 
                    className="bg-white/95 p-6 md:p-8 rounded-xl h-full flex flex-col relative overflow-hidden shadow-lg"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative elements */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 ${index % 2 === 0 ? 'bg-[#1D3557]' : 'bg-[#A47148]'}`}></div>
                    <svg className="absolute bottom-0 left-0 w-full h-16 text-[#A47148]/10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q25,10 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    
                    <FaQuoteLeft className="text-3xl md:text-4xl text-[#A47148] opacity-20 mb-4" />
                    <p className="text-base md:text-lg text-gray-700 mb-6 flex-grow relative z-10">"{feedback.content}"</p>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className={`text-sm md:text-lg ${i < feedback.rating ? 'text-[#A47148]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                        <div className="mb-2 md:mb-0">
                          <h4 className="text-lg md:text-xl font-bold text-[#1D3557]">{feedback.name}</h4>
                          <p className="text-gray-600">{feedback.role} • {feedback.location}</p>
                        </div>
                        <span className="text-xs md:text-sm text-gray-400">{feedback.date}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Image Side */}
                <motion.div 
                  className="w-full md:w-1/2 relative h-64 md:h-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${index % 2 === 0 ? 'from-[#1D3557]/40 to-[#1D3557]/10' : 'from-[#A47148]/40 to-[#A47148]/10'}`}></div>
                  
                  {/* Role badge */}
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white z-10">
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-xs md:text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                    >
                      {feedback.role}
                    </motion.div>
                  </div>
                  
                  <img 
                    src={feedback.image} 
                    alt={feedback.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Below the container and centered */}
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={prevSlide}
            className="group w-12 h-12 rounded-full bg-white/90 border-2 border-[#1D3557] text-[#1D3557] flex items-center justify-center shadow-lg hover:bg-[#1D3557] hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="group w-12 h-12 rounded-full bg-white/90 border-2 border-[#A47148] text-[#A47148] flex items-center justify-center shadow-lg hover:bg-[#A47148] hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}