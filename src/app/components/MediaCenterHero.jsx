"use client"

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronDown, FiChevronUp, FiDownload, FiShare2, FiBookmark } from 'react-icons/fi';
import { FaRegNewspaper, FaChartLine, FaPiggyBank, FaHandHoldingUsd } from 'react-icons/fa';

const MediaCenterHero = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [sliderRef, setSliderRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample data for the hero section
  const heroContent = {
    title: "Financial Insights & Market Intelligence",
    description: "Access cutting-edge financial research, real-time market data, and expert analysis to navigate today's complex economic landscape with confidence.",
    cta: "Explore Our Resources",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "10K+", label: "Research Papers" },
      { value: "500+", label: "Market Analysts" },
      { value: "24/7", label: "Data Updates" },
      { value: "95%", label: "Client Satisfaction" }
    ]
  };

  // Sample data for the slider
  const mediaItems = [
    {
      id: 1,
      title: "Global Market Trends Q3 2023",
      summary: "Comprehensive analysis of emerging market trends and sector performance across global .",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullContent: "Our latest research indicates a shift toward defensive sectors as economic uncertainty persists. Technology continues to lead growth, but healthcare and utilities are gaining traction. Emerging markets show resilience with particular strength in Southeast Asia. We project a 5-7% increase in the next quarter, with potential opportunities in green energy and AI-driven technologies.",
      date: "June 15, 2023",
      author: "Dr. Sarah Chen, Chief Economist",
      tags: ["Market Analysis", "Global Economy", "Investment"],
      icon: <FaChartLine className="text-2xl text-[#A47148]" />
    },
    {
      id: 2,
      title: "Wealth Management Strategies",
      summary: "Advanced portfolio construction techniques for high-net-worth individuals in volatile markets.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullContent: "In the current environment, we recommend a barbell strategy combining high-quality bonds with growth equities. Alternative investments should comprise 15-20% of portfolios for diversification. Tax-efficient structures like trusts and family offices are gaining popularity. Our models suggest a 60/30/10 allocation (equities/fixed income/alternatives) with dynamic rebalancing based on market conditions.",
      date: "May 28, 2023",
      author: "Michael Rodriguez, Wealth Strategist",
      tags: ["Wealth Management", "Tax Efficiency"],
      icon: <FaPiggyBank className="text-2xl text-[#A47148]" />
    },
    {
      id: 3,
      title: "Tax Optimization Playbook",
      summary: "Year-round tax planning strategies to maximize after-tax returns across all account types.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullContent: "The 2023 tax changes create both challenges and opportunities. Key strategies include: maximizing HSA contributions, harvesting tax losses quarterly, utilizing donor-advised funds for charitable giving, and considering Roth conversions in low-income years. Business owners should evaluate the new R&D capitalization rules and explore opportunity zone investments. Our analysis shows these strategies can improve after-tax returns by 1.5-3% annually.",
      date: "April 10, 2023",
      author: "Emily Thompson, Tax Director",
      tags: ["Tax Planning", "Estate Planning", "Retirement"],
      icon: <FaHandHoldingUsd className="text-2xl text-[#A47148]" />
    },
    {
      id: 4,
      title: "Retirement Income Solutions",
      summary: "Innovative approaches to generating sustainable retirement income in a low-yield .",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullContent: "With traditional bond yields inadequate for most retirees, we've developed a three-bucket approach: 1) 2-3 years of cash needs in short-term instruments, 2) 5-7 years in a diversified bond ladder, and 3) the remainder in growth-oriented equities with covered call strategies. Annuity allocations should be considered for baseline income needs. Our Monte Carlo simulations show this approach has a 92% success rate for 30-year retirements at 4% withdrawal rates.",
      date: "March 22, 2023",
      author: "Robert Johnson, Retirement Specialist",
      tags: ["Retirement", "Income Planning", "Annuities"],
      icon: <FaRegNewspaper className="text-2xl text-[#A47148]" />
    }
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  const toggleDetails = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
      if (sliderRef) sliderRef.slickPlay();
    } else {
      setExpandedItem(id);
      if (sliderRef) sliderRef.slickPause();
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="media-center-container overflow-hidden bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]"
      >
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A47148] opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#142a47] opacity-5 rounded-full -ml-64 -mb-64"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#A47148] opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-[#142a47] opacity-10 rounded-full animate-float-delay"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content md:w-1/2 pr-0 md:pr-12"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#142a47] text-white text-sm font-medium">
                <FaRegNewspaper className="mr-2" /> Latest Research & Insights
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#142a47] mb-6 leading-tight"
            >
              {heroContent.title}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              {heroContent.description}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-row gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(164, 113, 72, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#A47148] hover:bg-[#8a5d39] text-white font-semibold py-3 px-4 sm:px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                {heroContent.cta} <FiArrowRight className="animate-bounce-x" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-[#142a47] font-semibold py-3 px-4 sm:px-8 rounded-lg transition-all duration-300 flex items-center gap-2 border border-gray-200"
              >
                Watch Demo <span className="w-3 h-3 bg-[#A47148] rounded-full animate-pulse"></span>
              </motion.button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroContent.stats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-[#142a47]">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-image md:w-1/2 mt-16 md:mt-0 relative"
          >
            <div className="relative max-w-lg mx-auto">
              <img 
                src={heroContent.image} 
                alt="Financial Insights" 
                className="rounded-xl shadow-2xl w-full h-auto border-4 border-[#A47148] transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#A47148] opacity-30 rounded-full z-0 animate-float-delay"></div>
              
              {/* Floating card element */}
              <motion.div 
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg z-10 w-48 border-l-4 border-[#A47148]"
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#142a47] rounded-full flex items-center justify-center text-white mr-2">
                    <FiBookmark size={16} />
                  </div>
                  <span className="text-sm font-medium text-[#142a47]">Weekly Brief</span>
                </div>
                <p className="text-xs text-gray-600">New market analysis available every Monday</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scrolling ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#142a47] py-3 overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <div className="text-white font-medium mr-6 whitespace-nowrap">
                <span className="text-[#A47148] mr-2">•</span> Market Updates:
              </div>
              <div className="relative flex-1 overflow-hidden">
                <motion.div
                  animate={{
                    x: ['0%', '-100%'],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex whitespace-nowrap text-white text-sm"
                >
                  <span className="mr-8">NASDAQ: +1.2% | S&P 500: +0.8% | DJIA: +0.5%</span>
                  <span className="mr-8">Gold: $1,950/oz | Oil: $75.30/barrel | BTC: $29,450</span>
                  <span className="mr-8">10-Yr Treasury Yield: 3.85% | EUR/USD: 1.095 | USD/JPY: 141.20</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="divider py-16 text-center bg-[#f4f6f8] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#A47148] mb-6"
          >
            Latest Research & Publications
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#142a47]  max-w-3xl mx-auto mb-8"
          >
            Access our comprehensive library of market research, white papers, and investment insights.
          </motion.p>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-[#A47148] to-[#d4a373] rounded-full"></div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <div className="bg-[#e2dcd7] bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300">
              <div className="w-12 h-12 bg-[#A47148] rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#142a47]  mb-2">Market Analysis</h3>
              <p className="text-[#142a47]  text-sm">Quarterly reports and sector deep dives</p>
            </div>
            
            <div className="bg-[#e2dcd7] bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300">
              <div className="w-12 h-12 bg-[#A47148] rounded-lg flex items-center justify-center mb-4">
                <FaPiggyBank className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#142a47]  mb-2">Wealth Strategies</h3>
              <p className="text-[#142a47] text-sm">Portfolio construction techniques</p>
            </div>
            
            <div className="bg-[#e2dcd7] bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300">
              <div className="w-12 h-12 bg-[#A47148] rounded-lg flex items-center justify-center mb-4">
                <FaHandHoldingUsd className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#142a47]  mb-2">Tax Planning</h3>
              <p className="text-[#142a47]  text-sm">Year-round optimization strategies</p>
            </div>
            
            <div className="bg-[#e2dcd7]  bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300">
              <div className="w-12 h-12 bg-[#A47148] rounded-lg flex items-center justify-center mb-4">
                <FaRegNewspaper className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#142a47]  mb-2">Retirement</h3>
              <p className="text-[#142a47]  text-sm">Income solutions and planning</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Slider Section */}
      <div className="slider-section bg-gradient-to-b from-[#f8fafc] to-white py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A47148] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#142a47] rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto  relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#142a47] mb-4">Featured Research</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular reports and analyses, updated regularly with fresh insights.
            </p>
          </motion.div>
          
          <Slider ref={slider => setSliderRef(slider)} {...sliderSettings}>
            {mediaItems.map((item) => (
              <div key={item.id} className="px-3 pb-3">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl  shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border-t-4 border-[#A47148] relative overflow-hidden group"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#A47148]">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="h-56 overflow-hidden rounded-t-lg relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block px-3 py-1 bg-[#A47148] text-white text-xs font-medium rounded-full">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-[#142a47] mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-5">{item.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 pt-0">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDetails(item.id)}
                      className="w-full flex items-center justify-between text-[#A47148] hover:text-[#8a5d39] font-medium transition-colors duration-300"
                    >
                      <span>{expandedItem === item.id ? "Show Less" : "Read Full Report"}</span>
                      {expandedItem === item.id ? (
                        <FiChevronUp className="animate-bounce" />
                      ) : (
                        <FiChevronDown className="animate-bounce" />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {expandedItem && (
            <motion.div 
              key="expanded-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="container mx-auto px-4 mt-12"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="relative">
                  <img 
                    src={mediaItems.find(item => item.id === expandedItem)?.image} 
                    alt={mediaItems.find(item => item.id === expandedItem)?.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {mediaItems.find(item => item.id === expandedItem)?.title}
                    </h3>
                    <p className="text-gray-200">
                      {mediaItems.find(item => item.id === expandedItem)?.author}
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setExpandedItem(null);
                      if (sliderRef) sliderRef.slickPlay();
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#142a47] hover:text-[#A47148] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="prose max-w-none">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        {mediaItems.find(item => item.id === expandedItem)?.fullContent}
                      </p>
                      
                      <h4 className="text-xl font-semibold text-[#142a47] mb-4">Key Takeaways</h4>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 bg-[#A47148] bg-opacity-20 text-[#A47148] rounded-full flex items-center justify-center mr-3 mt-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Market-leading sectors show resilience despite economic headwinds</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 bg-[#A47148] bg-opacity-20 text-[#A47148] rounded-full flex items-center justify-center mr-3 mt-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Emerging markets present unique opportunities for diversified portfolios</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 bg-[#A47148] bg-opacity-20 text-[#A47148] rounded-full flex items-center justify-center mr-3 mt-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Technology and healthcare continue to drive innovation and growth</span>
                        </li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-[#A47148] hover:bg-[#8a5d39] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2">
                          <FiDownload /> Download Full Report
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-[#142a47] font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2 border border-gray-200">
                          <FiShare2 /> Share
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8 border-l border-gray-200">
                    <h4 className="text-xl font-semibold text-[#142a47] mb-6">Related Content</h4>
                    
                    <div className="space-y-6">
                      {mediaItems
                        .filter(item => item.id !== expandedItem)
                        .slice(0, 3)
                        .map(item => (
                          <div key={item.id} className="flex gap-4">
                            <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h5 className="font-medium text-[#142a47] mb-1">{item.title}</h5>
                              <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
                              <button 
                                onClick={() => {
                                  setExpandedItem(item.id);
                                  if (sliderRef) sliderRef.slickPause();
                                }}
                                className="text-sm text-[#A47148] hover:text-[#8a5d39] mt-2 inline-flex items-center"
                              >
                                Read more <FiArrowRight className="ml-1" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h5 className="font-medium text-[#142a47] mb-4">Subscribe for Updates</h5>
                      <p className="text-sm text-gray-600 mb-4">
                        Get the latest research delivered to your inbox.
                      </p>
                      <div className="flex gap-2">
                        <input 
                          type="email" 
                          placeholder="Your email" 
                          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A47148] focus:border-transparent"
                        />
                        <button className="bg-[#142a47] hover:bg-[#1e3a8a] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MediaCenterHero;