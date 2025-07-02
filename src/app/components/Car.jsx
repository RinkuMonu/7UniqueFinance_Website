"use client";

import React from 'react';
import { FaCar, FaCheck, FaCalculator, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Car = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 text-white overflow-hidden bg-gradient-to-r from-[#1D3557] to-[#457B9D]">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#A47148] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-[#1D3557] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Car Loan Solutions
              </h1>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed">
                Drive your dream car with SK Finance's competitive loan options for new and pre-owned vehicles.
              </p>
              <motion.button 
                className="bg-[#A47148] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#8B5A2B] transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now <FaCar className="ml-2" />
              </motion.button>
            </motion.div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <motion.img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="New Car" 
                className="rounded-xl border-4 border-white shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Used Car" 
                className="rounded-xl border-4 border-white shadow-2xl mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Car Loan Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-6">
                New Car Loan
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At SK Finance, we offer car loans to help you fulfill your dream of buying your very own personal or commercial car without worrying about finances. Be it a hatchback, sedan, or SUV, you can avail loan on any of your new car ex-showroom or existing car value at the most competitive interest rates with minimal paperwork.
              </p>
              <motion.button 
                className="bg-[#1D3557] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#14213D] transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now <FaCar className="ml-2" />
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="New Car Loan" 
                className="rounded-xl border-4 border-[#A47148] shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Used Car Loan Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Used Car Loan" 
                className="rounded-xl border-4 border-[#A47148] shadow-lg w-full"
              />
            </motion.div>
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-6">
                Pre-owned Car Loan
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SK Finance pre-owned car loan brings you a hassle-free and custom financing used car loan solution made for individuals and businesses who are looking to buy a second hand car or commercial car. We provide easy loan process and doorstep service to customers in metro cities, semi-urban, and rural areas—making your dream car more accessible than ever!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Once we estimate your car value, get instant approvals and secure funding in just 1-2 days— apply now to drive your dream vehicle soon!
              </p>
              <motion.button 
                className="bg-[#1D3557] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#14213D] transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now <FaCar className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-[#1D3557] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Features & Benefits</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We help you obtain finance easily with compelling features for both new and used car loans
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              "Loans for all owner profiles",
              "Attractive interest rates",
              "100% transparency in loan process",
              "Quick loan application and processing",
              "Seamless loan disbursals",
              "Convenient financing options",
              "Easy EMI calculator",
              "Minimal documents",
              "Loan up to 90% of car value",
              "No hidden charges",
              "Loan against car",
              "Doorstep service"
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white text-[#A47148] bg-opacity-10 p-6 rounded-xl hover:bg-opacity-20 transition-all"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <FaCheck className="text-[#A47148] mr-4 text-xl" />
                  <span className="text-lg">{feature}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Eligibility Criteria
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl border border-[#A47148]"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-[#1D3557] mb-4 flex items-center">
                <FaUserTie className="mr-2" /> Nationality
              </h3>
              <p className="text-gray-600">Indian</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl border border-[#A47148]"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-[#1D3557] mb-4 flex items-center">
                <FaCalculator className="mr-2" /> Loan Tenure
              </h3>
              <p className="text-gray-600">Up to 84 Months</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl border border-[#A47148]"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-[#1D3557] mb-4 flex items-center">
                <FaBriefcase className="mr-2" /> Customer Profile
              </h3>
              <p className="text-gray-600">Salaried, Self-employed, Farmer</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vector Decoration */}
      <div className="fixed bottom-0 right-0 w-64 h-64 opacity-10 -z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#A47148" d="M45.2,-58.3C57.8,-50.4,66.7,-35.4,70.2,-19.3C73.7,-3.2,71.8,13.9,63.9,27.9C56,41.9,42.1,52.8,26.7,61.7C11.3,70.6,-5.6,77.5,-20.1,73.4C-34.6,69.3,-46.8,54.2,-56.1,38.1C-65.4,22,-71.8,4.9,-69.1,-10.6C-66.4,-26.1,-54.6,-39.9,-40.1,-47.3C-25.6,-54.7,-8.5,-55.7,7.3,-64.8C23.1,-73.9,46.2,-91.1,45.2,-58.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default Car;