"use client";
import React from 'react';
import { FaTractor, FaCheck, FaLeaf, FaHandHoldingUsd, FaUserShield, FaPiggyBank, FaArrowRight, FaUserTie, FaBriefcase, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Tractor = () => {
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
      {/* Hero Section with Split Background */}
      <div className="relative flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white p-12 flex flex-col justify-center">
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
              <span className="text-[#A47148] font-semibold tracking-wider">TRACTOR FINANCING</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeIn}
            >
              Grow Your <span className="text-[#A47148]">Farm</span> With Our Tractor Loans
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-10"
              variants={fadeIn}
            >
              Affordable financing solutions designed specifically for farmers and agricultural businesses.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4" variants={fadeIn}>
              <button className="bg-[#A47148] hover:bg-[#8B5A2B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 group">
                Apply Now 
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                Calculate EMI
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 relative">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664301163726-78773dc77bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhY3RvcnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Modern tractor in field"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
            <div className="flex items-center gap-3">
              <div className="bg-[#1D3557] text-white p-3 rounded-lg">
                <FaTractor className="text-2xl" />
              </div>
              <div>
                <p className="font-bold text-lg text-[#1D3557]">85% Funding</p>
                <p className="text-gray-500 text-sm">On tractor value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4">
              Why Farmers <span className="text-[#A47148]">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of agricultural businesses and offer tailored solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLeaf className="text-4xl text-[#A47148]" />,
                title: "Seasonal Flexibility",
                desc: "Repayment plans that align with your harvest cycles",
                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                icon: <FaHandHoldingUsd className="text-4xl text-[#A47148]" />,
                title: "Competitive Rates",
                desc: "Some of the best interest rates in agricultural financing",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                icon: <FaUserShield className="text-4xl text-[#A47148]" />,
                title: "Farmer Support",
                desc: "Dedicated relationship managers who understand farming",
                img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tractor Options */}
      <section className="py-20 bg-gradient-to-br from-[#1D3557] to-[#457B9D] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Find The Perfect <span className="text-[#A47148]">Tractor</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Financing options for all types of agricultural equipment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* New Tractors */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#A47148] text-white p-3 rounded-lg">
                  <FaTractor className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">New Tractors</h3>
              </div>
              
              <div className="mb-8 h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhY3RvcnxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="New tractor" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 90% financing",
                  "Latest models with warranty",
                  "Special seasonal offers",
                  "Quick processing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-[#A47148] mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="text-white font-semibold flex items-center gap-2 group">
                Explore New Tractors
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Used Tractors */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#A47148] text-white p-3 rounded-lg">
                  <FaHandHoldingUsd className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Used Tractors</h3>
              </div>
              
              <div className="mb-8 h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Used tractor" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 80% financing",
                  "Certified pre-owned options",
                  "Lower monthly payments",
                  "Flexible eligibility"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-[#A47148] mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="text-white font-semibold flex items-center gap-2 group">
                Browse Used Tractors
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

   

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Loan application process" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#A47148] text-white p-8 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">4</div>
                  <div className="text-sm">Simple Steps</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="w-12 h-0.5 bg-[#A47148]"></div>
                <span className="text-[#A47148] font-medium tracking-wider">OUR PROCESS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Get Funded in <span className="text-[#A47148]">48 Hours</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Application",
                    desc: "Fill our simple online form with basic details"
                  },
                  {
                    step: "02",
                    title: "Documentation",
                    desc: "Submit minimal KYC and income documents"
                  },
                  {
                    step: "03",
                    title: "Approval",
                    desc: "Get quick approval with competitive terms"
                  },
                  {
                    step: "04",
                    title: "Disbursement",
                    desc: "Receive funds and purchase your tractor"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-[#1D3557] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
  
    </div>
  );
};

export default Tractor;