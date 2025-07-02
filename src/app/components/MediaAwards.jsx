"use client"

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiArrowUpRight, FiPhone, FiMail, FiMapPin, FiAward } from 'react-icons/fi';

const AwardsRecognitions = () => {
  const sliderRef = useRef(null);

  // Awards data with Picsum placeholder image URLs
  const awards = [
    {
      id: 1,
      title: "Best Brand of 2022 by The Economic Times",
      description: "The prestigious award was presented to Mr. Yash Setia, Whole Time Director by Mr. R Balki, India's renowned Bollywood Director in Mumbai. This recognition is a testament to our commitment to excellence and customer satisfaction.",
      image: "https://picsum.photos/id/100/800/600", // Picsum placeholder
      year: "2022",
      presenter: "The Economic Times",
      location: "Mumbai"
    },
    {
      id: 2,
      title: "Brand Storyz Awards 2024 for Best in Content Marketing",
      description: "SK Finance honored with Brand Storyz Award 2024 for Best in content marketing campaign, SK Chai Chaupal, by afaqs in Mumbai. This award recognizes our significant impact in engaging with customers and driving brand growth.",
      image: "https://picsum.photos/id/101/800/600", // Picsum placeholder
      year: "2024",
      presenter: "afaqs",
      location: "Mumbai"
    },
    {
      id: 3,
      title: "Best NBFC at Economic Times Rajasthan Business Awards",
      description: "Honored as the Best NBFC at the Economic Times Rajasthan Business Awards. This accolade is a testament to our commitment to providing exceptional financial solutions to our valued customers.",
      image: "https://picsum.photos/id/102/800/600", // Picsum placeholder
      year: "2024",
      presenter: "Economic Times",
      location: "Rajasthan"
    },
    {
      id: 4,
      title: "Gold at E4M Pitch BFSI Marketing Summit 2024",
      description: "Won Gold Award for Most Effective Marketing Campaign - NBFC for SK Chai Chaupal campaign. This award recognizes the significant impact and effectiveness of our marketing initiatives.",
      image: "https://picsum.photos/id/103/800/600", // Picsum placeholder
      year: "2024",
      presenter: "Exchange4Media",
      location: "Mumbai"
    },
    {
      id: 5,
      title: "CX Excellence Award 2024 for Best Use of WhatsApp Bot",
      description: "Honored at the 4th CX Excellence Award for Best Use of WhatsApp Bot in CX (vehicle finance). Highlights our commitment to leveraging innovative technology to enhance customer experience.",
      image: "https://picsum.photos/id/104/800/600", // Picsum placeholder
      year: "2024",
      presenter: "CX Excellence",
      location: "Bengaluru"
    },
    {
      id: 6,
      title: "ITOTY Awards 2024 for Best Pre-Owned Tractor Financer",
      description: "Honored as Best Pre-Owned Tractor Financer in India for the second consecutive year. Reflects our dedication to supporting farmers and the agriculture sector.",
      image: "https://picsum.photos/id/105/800/600", // Picsum placeholder
      year: "2024",
      presenter: "ITOTY",
      location: "India"
    },
    {
      id: 7,
      title: "Rajasthan Gaurav Award 2024",
      description: "Mr. Yash Setia, whole-time director of SK Finance, was honored with the prestigious Rajasthan Gaurav Award 2024 by the Hon'ble Governor of Rajasthan, Shri Kalraj Mishra.",
      image: "https://picsum.photos/id/106/800/600", // Picsum placeholder
      year: "2024",
      presenter: "Sanskriti Yuva Sansthan",
      location: "Rajasthan"
    },
    {
      id: 8,
      title: "CFO of the Year - NBFC at BFSI Leadership Awards 2024",
      description: "Mr. Atul Arora, CFO at SK Finance, honored with 'CFO of the Year' award in the NBFC category. A testament to his exceptional financial stewardship and strategic leadership.",
      image: "https://picsum.photos/id/107/800/600", // Picsum placeholder
      year: "2024",
      presenter: "BFSI Leadership Awards",
      location: "Mumbai"
    }
  ];

  // Slider settings with dots removed
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="awards-section bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#A47148] opacity-5 rounded-full -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#142a47] opacity-5 rounded-full -mr-48 -mb-48"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#A47148] opacity-10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-2 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl px-2 font-bold text-[#142a47] mb-4"
          >
            Awards & Recognitions
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-[#A47148] to-[#d4a373] mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl px-2 mx-auto"
          >
            Our commitment to excellence has been recognized by industry leaders and prestigious organizations worldwide.
          </motion.p>
        </div>

        {/* Awards Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-12 md:mb-20"
        >
          <Slider ref={sliderRef} {...settings}>
            {awards.map((award) => (
              <div key={award.id} className="px-2">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group"
                >
                  {/* Image Side */}
                  <div className="lg:w-1/2 h-64 lg:h-96 overflow-hidden relative">
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://picsum.photos/id/108/800/600"; // Fallback image
                      }}
                    />
                    {/* Award ribbon */}
                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                      <div className="absolute top-0 right-0 pl-8 w-48 h-10 bg-[#142a47] transform rotate-45 translate-x-12 -translate-y-2 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{award.year}</span>
                      </div>
                    </div>
                    {/* Presenter badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#142a47] shadow-sm flex items-center">
                      <FiAward className="mr-1 text-[#A47148]" />
                      {award.presenter}
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">
                    {/* Floating decorative element */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#A47148] opacity-10 rounded-full"></div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl md:text-3xl font-bold text-[#142a47] mb-4"
                    >
                      {award.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-gray-600 mb-6"
                    >
                      {award.description}
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-3 mb-6"
                    >
                      <span className="inline-flex items-center px-3 py-1 text-white bg-[#5c7da8] bg-opacity-5 rounded-full text-sm ">
                        <FiMapPin className="mr-1 text-[#A47148]" /> {award.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-[#5c7da8] bg-opacity-5 rounded-full text-sm text-white">
                        <FiAward className="mr-1 text-[#A47148]" /> {award.year}
                      </span>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <button className="text-[#A47148] font-medium flex items-center group">
                        View award photos 
                        <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
          
          {/* Custom Arrows */}
          <div className="flex justify-center mt-5 space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#142a47] hover:bg-[#142a47] hover:text-white transition-colors duration-300 shadow-md"
            >
              <FiArrowLeft />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#142a47] hover:bg-[#142a47] hover:text-white transition-colors duration-300 shadow-md"
            >
              <FiArrowRight />
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-xl px-4 py-6 md:px-10 md:py-10 shadow-sm border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A47148] opacity-5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#142a47] opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <h3 className="text-2xl font-bold text-[#142a47] mb-8 text-center relative z-10">
            For Media Queries, Reach Us At
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Address */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-[#A47148] bg-opacity-10 rounded-full flex items-center justify-center mb-4 text-[#A47148]">
                <FiMapPin className="text-2xl text-white" />
              </div>
              <h4 className="font-medium text-[#142a47] mb-2">Our Office</h4>
              <p className="text-gray-600">36, Dhuleshwar Garden, Jaipur-302001</p>
            </motion.div>
            
            {/* Phone */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-[#A47148] bg-opacity-10 rounded-full flex items-center justify-center mb-4 text-[#A47148]">
                <FiPhone className="text-2xl text-white" />
              </div>
              <h4 className="font-medium text-[#142a47] mb-2">Call Us</h4>
              <a href="tel:+919829854499" className="text-gray-600 hover:text-[#A47148] transition-colors">
                +91 9829854499
              </a>
            </motion.div>
            
            {/* Email */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-[#A47148] bg-opacity-10 rounded-full flex items-center justify-center mb-4 text-[#A47148]">
                <FiMail className="text-2xl text-white" />
              </div>
              <h4 className="font-medium text-[#142a47] mb-2 ">Email Us</h4>
              <a href="mailto:rajat.sharma2@skfin.net" className="text-gray-600 hover:text-[#A47148] transition-colors">
                rajat.sharma2@skfin.net
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsRecognitions;