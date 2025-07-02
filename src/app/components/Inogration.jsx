"use client";
import React from 'react';
import { FaHome, FaCheck, FaRupeeSign, FaClock, FaUserTie, FaFileAlt, FaMobileAlt, FaBolt, FaHeadset, FaHandshake, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HomeRenovationLoan = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative flex flex-col lg:flex-row min-h-[80vh] bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 p-12 flex flex-col justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-xl mx-auto"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={fadeIn}
            >
              <div className="w-12 h-0.5 bg-[#A47148]"></div>
              <span className="text-[#A47148] font-semibold tracking-wider">HOME RENOVATION LOAN</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeIn}
            >
              Transform Your <span className="text-[#A47148]">Dream Home</span> With Us
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-10"
              variants={fadeIn}
            >
              A new home symbolizes the beginning of a new journey. One where you not only embrace security, 
              but also lay down roots. We make it possible for you to renovate your dream home with 
              attractive loan solutions.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4" variants={fadeIn}>
              <button className="bg-[#A47148] hover:bg-[#8B5A2B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 group">
                Apply Now 
                <FaHome className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                EMI Calculator
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
            alt="Beautiful home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
            <div className="flex items-center gap-3">
              <div className="bg-[#1D3557] text-white p-3 rounded-lg">
                <FaRupeeSign className="text-2xl" />
              </div>
              <div>
                <p className="font-bold text-lg text-[#1D3557]">Up to ₹1Cr</p>
                <p className="text-gray-500 text-sm">Loan amount available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 sm:px-6 py-8 bg-white shadow-sm">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {['Overview', 'Features & Benefits', 'Eligibility', 'Interest Rate & Charges', 'EMI Calculator', 'FAQ'].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
              className="text-gray-700 hover:text-[#A47148] font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-6">
                <span className="text-[#A47148]">Overview</span> of Our Home Renovation Loan
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Renovating your home need not be difficult. At SK Finance Limited, we offer competitive home renovation 
                mortgage solutions for our customers. Get the best possible funding with attractive rates of interest.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From repairs to aesthetic upgrades, now everything is possible. Home renovation is often a costly affair 
                while it can be sudden and unexpected, leaving you with little time to plan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                But why worry when you have SK Finance as your trusted finance partner. We help you take care of these 
                needs without any worries.
              </p>
              <button className="bg-[#A47148] hover:bg-[#8B5A2B] text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Apply for Loan
              </button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Home renovation work" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section id="features-benefits" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4">
              Features & <span className="text-[#A47148]">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Home renovation mortgages come with attractive and simple terms and conditions for customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHome className="text-3xl text-[#A47148]" />,
                title: "Hassle-free",
                desc: "Simple documentation and quick processing"
              },
              {
                icon: <FaMobileAlt className="text-3xl text-[#A47148]" />,
                title: "Online Application",
                desc: "Easy digital application process"
              },
              {
                icon: <FaRupeeSign className="text-3xl text-[#A47148]" />,
                title: "Attractive Rates",
                desc: "Competitive interest rates"
              },
              {
                icon: <FaBolt className="text-3xl text-[#A47148]" />,
                title: "Quick Sanction",
                desc: "Fast approval process"
              },
              {
                icon: <FaUserTie className="text-3xl text-[#A47148]" />,
                title: "Flexible Criteria",
                desc: "Varied eligibility options"
              },
              {
                icon: <FaHeadset className="text-3xl text-[#A47148]" />,
                title: "24/7 Support",
                desc: "Round the clock customer service"
              },
              {
                icon: <FaClock className="text-3xl text-[#A47148]" />,
                title: "Long Tenure",
                desc: "Up to 60 months repayment period"
              },
              {
                icon: <FaHandshake className="text-3xl text-[#A47148]" />,
                title: "Trusted Partner",
                desc: "Reliable financial solutions"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-[#1D3557]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4">
              Simple <span className="text-[#A47148]">Eligibility</span> Criteria
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have varying eligibility criteria to make our loans accessible to everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nationality",
                items: ["Indian citizens"],
                icon: <FaUserTie className="text-2xl text-[#A47148]" />
              },
              {
                title: "Loan Tenure",
                items: ["Up to 60 months"],
                icon: <FaClock className="text-2xl text-[#A47148]" />
              },
              {
                title: "Employment",
                items: ["Self-Employed", "Salaried individuals"],
                icon: <FaBriefcase className="text-2xl text-[#A47148]" />
              },
              {
                title: "Work Experience",
                items: ["More than 1 year"],
                icon: <FaFileAlt className="text-2xl text-[#A47148]" />
              },
              {
                title: "Property Ownership",
                items: ["Must own the property being renovated"],
                icon: <FaHome className="text-2xl text-[#A47148]" />
              },
              {
                title: "Income",
                items: ["Stable income source", "Minimum income varies"],
                icon: <FaRupeeSign className="text-2xl text-[#A47148]" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1D3557]/10 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-[#A47148] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default HomeRenovationLoan;