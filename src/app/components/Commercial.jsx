"use client";
import React from 'react';
import { FaTruck, FaCheck, FaCalculator, FaUserTie, FaBriefcase, FaChartLine, FaArrowRight, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Commercial = () => {
  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 text-white overflow-hidden bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, (Math.random() * 100) - 50],
                x: [0, (Math.random() * 60) - 30],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-4 flex items-center gap-2"
              >
                <div className="w-12 h-0.5 bg-[#A47148]"></div>
                <span className="text-[#A47148] font-medium tracking-wider">COMMERCIAL FINANCING</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Power Your <span className="text-[#A47148]">Business</span> With The Right Vehicle
              </h1>
              
              <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-2xl">
                Fast-track your business growth with competitive commercial vehicle loans featuring flexible terms and rapid approvals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="bg-[#A47148] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#8B5A2B] transition-all flex items-center gap-2 group"
                  whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Instantly 
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
                
                <motion.button 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1D3557] transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            
            <div className="lg:w-1/2 relative">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="absolute -inset-6 bg-[#A47148] rounded-2xl rotate-3 opacity-30"></div>
                <div className="absolute -inset-4 bg-[#A47148] rounded-2xl -rotate-2 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Commercial Truck" 
                  className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[500px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 relative -mt-10 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#1D3557] to-[#457B9D] rounded-2xl p-8 shadow-2xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {[
              { value: "24H", label: "Approval Time" },
              { value: "90%", label: "Vehicle Value" },
              { value: "84M", label: "Max Tenure" },
              { value: "1.2%", label: "Interest Rate" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/30 bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 text-center"
                variants={item}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <p className="text-4xl font-bold mb-2 text-white">{stat.value}</p>
                <p className="text-white opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Used Commercial Vehicle Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-6 bg-[#A47148] rounded-2xl -rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Used Commercial Vehicle" 
                className="relative z-10 rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-4 flex items-center gap-2"
              >
                <div className="w-12 h-0.5 bg-[#A47148]"></div>
                <span className="text-[#A47148] font-medium tracking-wider">PRE-OWNED VEHICLES</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1D3557] mb-6 leading-tight">
                Expand Your Fleet With <span className="text-[#A47148]">Used Vehicles</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Acquire quality pre-owned commercial vehicles with our specialized financing solutions designed to help you grow without straining your capital.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Up to 80% financing on vehicle value",
                  "No hidden charges or prepayment penalties",
                  "Flexible EMI options tailored to your cash flow",
                  "Quick processing with minimal documentation"
                ].map((point, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <FaCheck className="text-[#A47148] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className="bg-[#1D3557] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#14213D] transition-all flex items-center gap-2 group"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Used Vehicle Options
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-4 flex items-center gap-2"
              >
                <div className="w-12 h-0.5 bg-[#A47148]"></div>
                <span className="text-[#A47148] font-medium tracking-wider">ELIGIBILITY CRITERIA</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1D3557] mb-6 leading-tight">
                Who Can <span className="text-[#A47148]">Apply</span> For Our Loans
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've designed our eligibility criteria to be inclusive while ensuring responsible lending practices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: <FaUserTie className="text-2xl text-[#A47148]" />,
                    title: "Nationality",
                    desc: "Indian citizens and NRIs"
                  },
                  {
                    icon: <FaBriefcase className="text-2xl text-[#A47148]" />,
                    title: "Occupation",
                    desc: "Salaried, Self-employed, Business owners"
                  },
                  {
                    icon: <FaChartLine className="text-2xl text-[#A47148]" />,
                    title: "Experience",
                    desc: "Minimum 2 years in current business/employment"
                  },
                  {
                    icon: <FaFileAlt className="text-2xl text-[#A47148]" />,
                    title: "Documents",
                    desc: "KYC, Income proof, Business proof"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className=" p-6 rounded-xl shadow-md border border-gray-200"
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                   
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#1D3557]">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-6 bg-[#A47148] rounded-2xl rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Eligibility Criteria" 
                className="relative z-10 rounded-xl shadow-lg w-full object-cover h-[600px]"
              />
              
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#1D3557] text-white p-3 rounded-lg">
                    <FaShieldAlt className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1D3557]">Flexible</p>
                    <p className="text-gray-500 text-sm">Eligibility Norms</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1D3557] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#A47148] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-[#A47148] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-4 flex items-center justify-center gap-2"
            >
              <div className="w-12 h-0.5 bg-[#A47148]"></div>
              <span className="text-[#A47148] font-medium tracking-wider">WHY CHOOSE US</span>
              <div className="w-12 h-0.5 bg-[#A47148]"></div>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Unmatched <span className="text-[#A47148]">Benefits</span> For Your Business
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We've designed our commercial vehicle loans to give your business the competitive edge it deserves
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: <FaTruck className="text-3xl" />,
                title: "Comprehensive Coverage",
                desc: "Finance all types of commercial vehicles including trucks, buses, pickups and specialized carriers"
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: "Growth-Oriented",
                desc: "Special programs for fleet expansion with volume discounts and flexible terms"
              },
              {
                icon: <FaBriefcase className="text-3xl" />,
                title: "Business Friendly",
                desc: "Structured repayment plans aligned with your business cash flow cycles"
              },
              {
                icon: <FaUserTie className="text-3xl" />,
                title: "Dedicated Support",
                desc: "Personal relationship manager to handle all your financing needs"
              },
              {
                icon: <FaCalculator className="text-3xl" />,
                title: "Transparent Pricing",
                desc: "Competitive interest rates with no hidden charges or surprise fees"
              },
              {
                icon: <FaCheck className="text-3xl" />,
                title: "Quick Processing",
                desc: "Fast approvals and disbursements to get you on the road quickly"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-10 hover:border-opacity-30 transition-all"
                variants={item}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="text-[#A47148] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-80">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
    </div>
  );
};

export default Commercial;