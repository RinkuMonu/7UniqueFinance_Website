"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUsers,
  FaSearch,
  FaChartBar,
  FaBalanceScale,
  FaHandsHelping,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaUserTie,
  FaExclamationTriangle,
  FaHandshake,
  FaTrophy,
  FaAward
} from 'react-icons/fa';
import {
  FaFlag,
  FaExpand,
  FaTractor,
  FaRebel,
  FaMobileAlt,
  FaGlobeAsia
} from 'react-icons/fa';

const AboutUSComponent = () => {
  const [activeTab, setActiveTab] = useState('founder');
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    { id: 'founder', label: 'Founder Desk' },
    { id: 'vision', label: 'Vision & Mission' },
    { id: 'board', label: 'Board of Directors' },
    { id: 'kmp', label: 'Leadership Team' },
    { id: 'composition', label: 'Corporate Governance' },
  ];

  // Enhanced vector graphics
  const AbstractBackground = () => (
    <svg className="absolute inset-0 w-full h-full -z-10 opacity-5" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H1440V800C1440 358.172 1081.83 0 640 0H0Z" fill="#1D3557" />
      <path d="M1440 800V0H0V800C0 800 200 600 400 700C600 800 800 500 1000 600C1200 700 1440 800 1440 800Z" fill="#A47148" fillOpacity="0.2" />
      <circle cx="1200" cy="200" r="150" fill="#1D3557" fillOpacity="0.1" />
      <circle cx="200" cy="500" r="100" fill="#A47148" fillOpacity="0.1" />
      <path d="M300 0C300 165.685 165.685 300 0 300V0H300Z" fill="#1D3557" fillOpacity="0.1" />
    </svg>
  );

  const CornerDecoration = () => (
    <svg className="absolute right-0 top-0 -z-10" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M300 0V300H0C0 134.315 134.315 0 300 0Z" fill="#A47148" fillOpacity="0.08" />
      <path d="M200 0V200H0C0 89.543 89.543 0 200 0Z" fill="#1D3557" fillOpacity="0.08" />
    </svg>
  );

  const FloatingDots = () => (
    <svg className="absolute left-0 bottom-0 -z-10" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="60" cy="40" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="100" cy="20" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="140" cy="40" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="180" cy="20" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="20" cy="80" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="60" cy="60" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="100" cy="80" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="140" cy="60" r="3" fill="#1D3557" fillOpacity="0.3" />
      <circle cx="180" cy="80" r="3" fill="#1D3557" fillOpacity="0.3" />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background elements */}
      <AbstractBackground />
      <CornerDecoration />
      <FloatingDots />

      {/* Floating animated elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-1/4 w-16 h-16 rounded-full bg-[#A47148] opacity-10 -z-10 hidden sm:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-20 top-1/3 w-24 h-24 rounded-full bg-[#1D3557] opacity-10 -z-10 hidden sm:block"
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center mb-8 sm:mb-16 relative z-10"
      >
        <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-xs font-semibold px-3 py-1 bg-[#1D3557] text-white rounded-full">ABOUT US</span>
            </div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D3557] mb-4 sm:mb-6 leading-tight"
            >
              Building <span className="text-[#A47148]">Trust</span> Through <span className="text-[#A47148]">Financial</span> Excellence
            </motion.h1>

            <motion.div
              className="space-y-3 sm:space-y-4 text-gray-700"
            >
              <p className="leading-relaxed text-base sm:text-lg">
                For over three decades, SK Finance Limited has been at the forefront of providing innovative financial solutions to individuals and businesses across India. Our journey from a modest beginning to becoming one of the most trusted NBFCs is a testament to our commitment to excellence.
              </p>
              <p className="leading-relaxed text-base sm:text-lg">
                We specialize in a diverse portfolio including commercial vehicle financing, tractor loans, two-wheeler financing, construction equipment loans, car loans, home renovation loans, and business loans - all designed with our customers' unique needs in mind.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 min-w-0 p-2 sm:p-4 relative mt-8 sm:mt-0"
        >
          <div className="relative">
            <motion.img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="SK Finance Team"
              className="w-full rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white transform rotate-1"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute -inset-2 sm:-inset-4 border border-[#A47148] rounded-2xl -z-10"></div>

            {/* Floating testimonial card - Hidden on small mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg max-w-[180px] sm:max-w-xs border border-gray-100 hidden xs:block"
            >
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#A47148] flex items-center justify-center text-white font-bold mr-2 sm:mr-3 text-xs sm:text-base">RS</div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#1D3557]">Rajendra Setia</h4>
                  <p className="text-xs text-[#A47148]">Founder & Chairman</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 italic">"Our success comes from understanding our customers' dreams and helping them achieve financial freedom."</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Navigation Tabs - Mobile friendly */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative mb-8 sm:mb-16 z-10"
      >
        <div className="flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-inner overflow-x-auto whitespace-nowrap w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium relative rounded-full transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-white text-[#1D3557] shadow-md'
                  : 'text-gray-600 hover:text-[#A47148]'
                  }`}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                {tab.label}
                {(hoveredTab === tab.id || activeTab === tab.id) && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-[#A47148] rounded-full"
                    initial={false}
                    style={{ width: '60%' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tab Contents */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-gray-100"
          >
            {activeTab === 'founder' && (
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative mb-6 sm:mb-8"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Rajendra K Setia"
                      className="w-full rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#ced4db]/90  text-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                      <h4 className="font-bold text-sm sm:text-base text-[#1D3557]">Rajendra K Setia</h4>
                      <p className="text-xs sm:text-sm text-[#A47148]">Founder & Chairman</p>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <motion.blockquote
                    className="italic text-lg sm:text-xl md:text-2xl text-gray-700 border-l-4 border-[#A47148] pl-4 sm:pl-6 py-1 sm:py-2 mb-4 sm:mb-6 md:mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "There are no secrets to success. It is the result of preparation, hard work, and learning from failures."
                  </motion.blockquote>

                  <motion.div
                    className="space-y-4 sm:space-y-6 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="leading-relaxed text-base sm:text-lg">
                      It has been an extraordinary journey over the last 30+ years from our humble beginnings as Ess Kay Fincorp Ltd to becoming SK Finance Limited. What started as a small team of five passionate individuals has now grown into a family of over 11,400 dedicated professionals.
                    </p>
                    <p className="leading-relaxed text-base sm:text-lg">
                      Our growth story is rooted in a simple philosophy - understand the customer's needs better than anyone else. Whether it's a farmer needing a tractor loan or a small business owner looking to expand, we've always focused on creating tailored solutions that make a real difference in people's lives.
                    </p>
                    <p className="leading-relaxed text-base sm:text-lg">
                      I'm incredibly proud of our team's resilience and innovation, especially during challenging economic times. We've not just survived but thrived by staying true to our core values of integrity, customer focus, and social responsibility.
                    </p>
                    <p className="leading-relaxed text-base sm:text-lg font-semibold text-[#1D3557]">
                      As we look to the future, we remain committed to breaking barriers and setting new benchmarks in the financial services industry every single day.
                    </p>
                  </motion.div>

                  <motion.div
                    className="mt-6 sm:mt-8 md:mt-10 bg-[#e7eff7]/50  text-white p-4 sm:p-6 rounded-lg sm:rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="font-bold text-[#1D3557] text-sm  sm:text-base md:text-lg">
                      From a Happy and Grateful Founder,<br />
                      <span className="text-[#a15a20]">Rajendra K Setia</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-8 sm:space-y-12">
                {/* Hero Section with Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#d6dce4] to-[#98cae9] p-4 sm:p-6 md:p-8 lg:p-12 text-white"
                >
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                      Shaping <span className="text-[#A8DADC]">Financial Futures</span> Across India
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#F1FAEE] leading-relaxed">
                      At SK Finance, we don't just provide financial services - we create opportunities that transform lives and empower communities.
                    </p>
                  </div>
                  <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-white opacity-50 md:opacity-70">
                    <svg className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557]/90 to-[#1D3557]/50"></div>
                </motion.div>

                {/* Vision & Mission Cards with Icons */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-[#A47148]"></div>
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-[#A47148] flex items-center justify-center text-white text-xl sm:text-2xl font-bold mr-3 sm:mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1D3557]">Our Vision</h3>
                      </div>
                      <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                        To be the most trusted financial partner in India, recognized for empowering individuals and businesses through inclusive, innovative solutions that drive economic growth and social development.
                      </p>
                      <div className="mt-4 sm:mt-6 flex justify-center">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#A47148]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm4 0c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-[#1D3557]"></div>
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-[#1D3557] flex items-center justify-center text-white text-xl sm:text-2xl font-bold mr-3 sm:mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1D3557]">Our Mission</h3>
                      </div>
                      <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                        To bridge financial gaps across India by delivering accessible, technology-driven solutions with personalized service, ethical practices, and uncompromising corporate governance standards.
                      </p>
                      <div className="mt-4 sm:mt-6 flex justify-center">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#1D3557]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Promise Section with Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-[#F8F5F2] to-[#F1FAEE] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#A47148]/10 rounded-full transform translate-x-10 sm:translate-x-16 -translate-y-10 sm:-translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#1D3557]/10 rounded-full transform -translate-x-12 sm:-translate-x-20 translate-y-12 sm:translate-y-20"></div>

                  <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D3557] mb-3 sm:mb-4">Our Commitment to You</h3>
                      <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#A47148] mx-auto"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                      {[
                        {
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="#A47148">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          ),
                          title: "Trust & Transparency",
                          description: "Open communication and ethical dealings in every transaction"
                        },
                        {
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="#A47148">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                          title: "Innovative Solutions",
                          description: "Cutting-edge products tailored to your financial needs"
                        },
                        {
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="#A47148">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          ),
                          title: "Community Focus",
                          description: "Financial empowerment for all segments of society"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md text-center"
                        >
                          <div className="flex justify-center mb-3 sm:mb-4">{item.icon}</div>
                          <h4 className="text-lg sm:text-xl font-bold text-[#1D3557] mb-2 sm:mb-3">{item.title}</h4>
                          <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'board' && (
              <div className="space-y-8 sm:space-y-12 md:space-y-16">
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 sm:mb-12 relative"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557] mb-3 sm:mb-4 relative z-10">
                    Board of <span className="text-[#A47148]">Directors</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
                    Our distinguished board members bring together decades of experience in finance, governance, and business leadership to guide SK Finance's strategic direction.
                  </p>
                </motion.div>

                {/* Board Members Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative">
                  {[
                    {
                      name: "Rajendra K Setia",
                      position: "Chairman & Managing Director",
                      bio: "30+ years in financial services. Founder of SK Finance with a vision to democratize access to credit.",
                      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      name: "Anil Kumar Gupta",
                      position: "Independent Director",
                      bio: "Former RBI executive with expertise in financial regulation and risk management.",
                      img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      name: "Sunita Sharma",
                      position: "Independent Director",
                      bio: "Seasoned banker with 25+ years experience in retail and corporate banking.",
                      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      name: "Rahul Mehta",
                      position: "Executive Director",
                      bio: "Drives operational excellence with focus on technology and customer experience.",
                      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      name: "Priya Singh",
                      position: "Non-Executive Director",
                      bio: "Investment expert representing our private equity stakeholders.",
                      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      name: "Vikram Patel",
                      position: "CEO & Executive Director",
                      bio: "Strategic leader with proven track record in scaling financial institutions.",
                      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"
                      }}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                      }}
                      className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg border border-gray-100 relative group"
                    >
                      {/* Decorative accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A47148] to-[#1D3557]"></div>

                      <div className="h-40 sm:h-48 md:h-56 overflow-hidden relative">
                        <motion.img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-fill"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>

                      <div className="p-4 sm:p-6 relative">
                        <div className="absolute -top-4 sm:-top-5 left-4 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1D3557] flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-sm sm:shadow-md">
                          {index + 1}
                        </div>

                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1D3557] mt-1 sm:mt-2">{member.name}</h3>
                        <p className="text-sm sm:text-base text-[#A47148] font-medium mb-2 sm:mb-3">{member.position}</p>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{member.bio}</p>

                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center text-xs sm:text-sm font-medium text-[#1D3557] hover:text-[#A47148] transition-colors"
                        >
                          View Profile
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Board Committees Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-[#F8F5F2] to-[#F1FAEE] p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg sm:rounded-xl md:rounded-2xl relative overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#A47148]/10 rounded-full transform translate-x-8 sm:translate-x-12 md:translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-[#1D3557]/10 rounded-full transform -translate-x-10 sm:-translate-x-14 md:-translate-x-20 translate-y-10 sm:translate-y-14 md:translate-y-20"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-6 sm:mb-8 md:mb-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D3557] mb-2 sm:mb-3">Board Committees</h3>
                      <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#A47148] mx-auto"></div>
                      <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto">
                        Specialized committees ensure focused governance across key areas of our operations
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {[
                        {
                          name: "Audit Committee",
                          chair: "Sunita Sharma",
                          focus: "Financial reporting, internal controls, and compliance",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="#A47148">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )
                        },
                        {
                          name: "Risk Management",
                          chair: "Anil Kumar Gupta",
                          focus: "Enterprise risk framework and mitigation strategies",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="#A47148">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                            </svg>
                          )
                        },
                        {
                          name: "Nomination & Remuneration",
                          chair: "Priya Singh",
                          focus: "Board composition and executive compensation",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="#A47148">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          )
                        },
                      ].map((committee, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)"
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-100"
                        >
                          <div className="flex items-center mb-3 sm:mb-4">
                            <div className="p-2 rounded-lg bg-[#F8F5F2] mr-3 sm:mr-4">
                              {committee.icon}
                            </div>
                            <h4 className="font-bold text-base sm:text-lg text-[#1D3557]">{committee.name}</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-[#A47148] mb-2 sm:mb-3">Chair: {committee.chair}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{committee.focus}</p>
                          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                            <button className="text-xs font-medium text-[#1D3557] hover:text-[#A47148] transition-colors flex items-center">
                              View Committee Charter
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'kmp' && (
              <div className="space-y-8 sm:space-y-12 md:space-y-16">
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 sm:mb-12 relative"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557] mb-3 sm:mb-4 relative z-10">
                    Leadership <span className="text-[#A47148]">Team</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
                    Our executive leadership brings together diverse expertise to drive SK Finance's operations, innovation, and growth strategy.
                  </p>
                </motion.div>

                {/* Key Managerial Personnel */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 sm:mb-12 md:mb-16 relative"
                >
                  <div className="absolute -right-10 sm:-right-20 top-1/4 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-[#A47148]/10 blur-xl"></div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1D3557] mb-6 sm:mb-8 pb-2 border-b border-gray-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Key Managerial Personnel
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {[
                      {
                        name: "Vikram Patel",
                        role: "Chief Executive Officer",
                        bio: "20+ years experience in financial services with expertise in scaling operations and digital transformation.",
                        img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                        joinDate: "2015"
                      },
                      {
                        name: "Sanjay Verma",
                        role: "Chief Financial Officer",
                        bio: "Chartered Accountant with 18 years experience in financial strategy, risk management and investor relations.",
                        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                        joinDate: "2018"
                      },
                      {
                        name: "Neha Gupta",
                        role: "Company Secretary",
                        bio: "Governance and compliance specialist ensuring adherence to regulatory requirements and corporate laws.",
                        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                        joinDate: "2016"
                      },
                    ].map((person, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)"
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.15,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg border border-gray-100 relative group"
                      >
                        {/* Decorative accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A47148] to-[#1D3557]"></div>

                        {/* Image with overlay */}
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <motion.img
                            src={person.img}
                            alt={person.name}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        <div className="p-4 sm:p-6 relative">
                          <div className="absolute -top-4 sm:-top-5 right-4 sm:right-5 bg-[#1D3557] text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-sm sm:shadow-md">
                            Since {person.joinDate}
                          </div>

                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1D3557]">{person.name}</h3>
                          <p className="text-sm sm:text-base text-[#A47148] font-medium mb-2 sm:mb-3">{person.role}</p>
                          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{person.bio}</p>

                          <div className="flex space-x-2 sm:space-x-3">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-xs sm:text-sm bg-[#1D3557] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-[#A47148] transition-colors flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              Contact
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-xs sm:text-sm border border-[#1D3557] text-[#1D3557] px-3 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              Profile
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Senior Management */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute -left-10 sm:-left-20 bottom-1/4 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-[#1D3557]/10 blur-xl"></div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1D3557] mb-6 sm:mb-8 pb-2 border-b border-gray-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Senior Management
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {[
                      { name: "Rajiv Malhotra", role: "Chief Operations Officer", dept: "Operations" },
                      { name: "Anjali Kapoor", role: "Chief Risk Officer", dept: "Risk Management" },
                      { name: "Amit Sharma", role: "Chief Technology Officer", dept: "Information Technology" },
                      { name: "Priyanka Singh", role: "Chief Human Resources", dept: "Human Resources" },
                      { name: "Rohit Desai", role: "National Sales Head", dept: "Sales & Marketing" },
                      { name: "Meena Iyer", role: "Chief Compliance Officer", dept: "Legal & Compliance" },
                      { name: "Arun Joshi", role: "Chief Product Officer", dept: "Product Development" },
                      { name: "Kavita Rao", role: "Chief Customer Officer", dept: "Customer Experience" },
                    ].map((person, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 sm:p-4 rounded-lg border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} transition-all duration-300`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.08,
                          type: "spring",
                          stiffness: 150
                        }}
                      >
                        {/* Avatar with animated border */}
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-bold mx-auto mb-2 sm:mb-3 relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#A47148] to-[#1D3557] rounded-full p-0.5 sm:p-1">
                            <div className="h-full w-full bg-[#1D3557] rounded-full flex items-center justify-center">
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                        </motion.div>

                        <h4 className="font-semibold text-sm sm:text-base text-[#1D3557]">{person.name}</h4>
                        <p className="text-xs sm:text-sm text-[#A47148] font-medium">{person.role}</p>
                        <p className="text-xs text-gray-500 mt-1">{person.dept}</p>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs mt-2 sm:mt-3 text-[#1D3557] hover:text-[#A47148] transition-colors flex items-center justify-center"
                        >
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'composition' && (
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 sm:mb-12 relative z-10"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D3557] mb-3 sm:mb-4">Corporate <span className='text-[#A47148]'>Governance</span> </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Our governance framework ensures transparency, accountability, and ethical conduct across all levels of the organization.
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 relative z-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D3557] mb-4 sm:mb-6">Governance Structure</h3>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-br from-[#F8F5F2] to-white p-4 sm:p-6 rounded-lg sm:rounded-xl mb-6 sm:mb-8 border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center mb-3 sm:mb-4">
                        <FaUsers className="text-[#1D3557] text-lg sm:text-xl mr-2" />
                        <h4 className="font-bold text-base sm:text-lg text-[#1D3557]">Board Composition</h4>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { type: "Independent Directors", percentage: 40, color: "bg-[#1D3557]" },
                          { type: "Executive Directors", percentage: 30, color: "bg-[#A47148]" },
                          { type: "Non-Executive Directors", percentage: 30, color: "bg-[#1D3557]" },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex justify-between items-center mb-1 sm:mb-2">
                              <span className="font-medium text-sm sm:text-base text-gray-700">{item.type}</span>
                              <span className="font-bold text-xs sm:text-sm text-[#1D3557]">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.percentage}%` }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`h-full rounded-full ${item.color}`}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center">
                        <FaShieldAlt className="text-[#1D3557] text-lg sm:text-xl mr-2" />
                        <h4 className="font-bold text-base sm:text-lg text-[#1D3557]">Governance Principles</h4>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                        {[
                          { title: "Transparency", icon: <FaSearch className="text-xl sm:text-2xl" />, color: "bg-blue-50 text-[#1D3557]" },
                          { title: "Accountability", icon: <FaChartBar className="text-xl sm:text-2xl" />, color: "bg-amber-50 text-[#A47148]" },
                          { title: "Fairness", icon: <FaBalanceScale className="text-xl sm:text-2xl" />, color: "bg-green-50 text-[#1D3557]" },
                          { title: "Responsibility", icon: <FaHandsHelping className="text-xl sm:text-2xl" />, color: "bg-purple-50 text-[#A47148]" },
                        ].map((principle, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-3 sm:p-4 rounded-lg border border-gray-200 text-center ${principle.color} transition-all duration-300`}
                          >
                            <div className="flex justify-center mb-2 sm:mb-3">{principle.icon}</div>
                            <h4 className="font-medium text-sm sm:text-base">{principle.title}</h4>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D3557] mb-4 sm:mb-6">Board Committees</h3>

                    <div className="space-y-4 sm:space-y-6">
                      {[
                        {
                          name: "Audit Committee",
                          purpose: "Oversight of financial reporting, internal controls, and compliance with laws and regulations.",
                          members: "3 (All Independent)",
                          icon: <FaFileInvoiceDollar className="text-[#1D3557] group-hover:text-white" />
                        },
                        {
                          name: "Nomination & Remuneration Committee",
                          purpose: "Recommendations on board composition and executive compensation policies.",
                          members: "3 (Majority Independent)",
                          icon: <FaUserTie className="text-[#A47148] group-hover:text-white" />
                        },
                        {
                          name: "Risk Management Committee",
                          purpose: "Identification and mitigation of enterprise risks including credit, market and operational risks.",
                          members: "4 (Including CEO)",
                          icon: <FaExclamationTriangle className="text-[#1D3557] group-hover:text-white" />
                        },
                        {
                          name: "Stakeholders Relationship Committee",
                          purpose: "Address investor grievances and improve shareholder communication.",
                          members: "3 (Including Company Secretary)",
                          icon: <FaHandshake className="text-[#A47148] group-hover:text-white" />
                        },
                      ].map((committee, index) => (
                        <motion.div
                          whileHover={{ x: 5, boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
                          key={index}
                          className="border-l-4 border-[#1D3557] pl-3 sm:pl-4 py-2 sm:py-3 bg-white shadow-sm rounded-r-lg relative overflow-hidden group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#1D3557] transition-colors duration-300">
                            <div className="group-hover:text-white transition-colors duration-300">
                              {committee.icon}
                            </div>
                          </div>
                          <div className="ml-6 sm:ml-8">
                            <h4 className="font-semibold text-sm sm:text-base text-[#1D3557]">{committee.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">{committee.purpose}</p>
                            <p className="text-xs text-[#A47148] mt-1 sm:mt-2 font-medium">Members: {committee.members}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.01 }}
                      className="mt-6 sm:mt-8 bg-gradient-to-r from-[#a2c2ee] to-[#406fb6] text-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute -right-6 -bottom-6 sm:-right-10 sm:-bottom-10 opacity-20">
                        <FaAward className="text-[100px] sm:text-[150px] md:text-[200px] text-[#faf5f1]" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <FaTrophy className="text-[#A47148] text-lg sm:text-xl mr-2" />
                          <h4 className="font-bold text-base sm:text-lg">Governance Awards</h4>
                        </div>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                          <motion.li
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-[#A47148] mr-1 sm:mr-2">•</span>
                            "Best Governed NBFC" - Financial Governance Awards 2022
                          </motion.li>
                          <motion.li
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ delay: 0.1 }}
                          >
                            <span className="text-[#A47148] mr-1 sm:mr-2">•</span>
                            "Excellence in Corporate Governance" - India Business Awards 2021
                          </motion.li>
                          <motion.li
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="text-[#A47148] mr-1 sm:mr-2">•</span>
                            "Best Board Diversity" - Governance Now Summit 2020
                          </motion.li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Company milestones section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 relative z-10 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D3557] mb-8 sm:mb-12 text-center"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#A47148]">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-[#A47148] to-[#1D3557] transform -translate-x-1/2 -z-10"></div>

            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-4 sm:left-6 h-full w-0.5 sm:w-1 bg-gradient-to-b from-[#A47148] to-[#1D3557] transform -z-10"></div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {[
                {
                  year: "1994",
                  event: "Founded as Ess Kay Fincorp Ltd in Rajasthan",
                  milestone: "Started operations with 5 employees",
                  icon: <FaFlag className="text-sm sm:text-base" />
                },
                {
                  year: "2002",
                  event: "Expanded to 3 states",
                  milestone: "Reached ₹100 crore loan portfolio",
                  icon: <FaExpand className="text-sm sm:text-base" />
                },
                {
                  year: "2010",
                  event: "Diversified into tractor financing",
                  milestone: "Crossed 500 employees",
                  icon: <FaTractor className="text-sm sm:text-base" />
                },
                {
                  year: "2015",
                  event: "Rebranded as SK Finance Limited",
                  milestone: "Received NBFC license from RBI",
                  icon: <FaRebel className="text-sm sm:text-base" />
                },
                {
                  year: "2020",
                  event: "Launched digital lending platform",
                  milestone: "Assets under management crossed ₹5,000 crore",
                  icon: <FaMobileAlt className="text-sm sm:text-base" />
                },
                {
                  year: "2023",
                  event: "Expanded pan-India presence",
                  milestone: "11,400+ employees serving 1M+ customers",
                  icon: <FaGlobeAsia className="text-sm sm:text-base" />
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Desktop layout (alternating sides) */}
                  <div className="hidden md:flex items-center justify-center">
                    {/* Left side content */}
                    <div className={`flex-1 p-1 sm:p-2 lg:p-3 xl:p-4 ${index % 2 === 0 ? "pr-2 sm:pr-4 lg:pr-6 xl:pr-8 text-right" : "pl-2 sm:pl-4 lg:pl-6 xl:pl-8"}`}>
                      {index % 2 === 0 && (
                        <motion.div
                          className="inline-block"
                          whileHover={{ x: -5 }}
                        >
                          <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#1D3557] leading-tight">
                            {item.event}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-[#A47148] font-medium mt-1">
                            {item.milestone}
                          </p>
                          <div className={`mt-1 sm:mt-2 lg:mt-3 p-2 sm:p-3 lg:p-4 rounded-lg bg-[#F8F5F2] inline-block max-w-xs lg:max-w-sm xl:max-w-md`}>
                            <p className="text-xs sm:text-sm text-gray-700">
                              This milestone marked a significant growth phase for the company
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Year circle - Responsive sizing */}
                    <div className="relative mx-1 sm:mx-2 lg:mx-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-white border-2 sm:border-3 border-[#A47148] flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#1D3557] shadow-md sm:shadow-lg z-10 group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300">
                        {item.year}
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#A47148] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#1D3557] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                    </div>

                    {/* Right side content */}
                    <div className={`flex-1 p-1 sm:p-2 lg:p-3 xl:p-4 ${index % 2 === 0 ? "pl-2 sm:pl-4 lg:pl-6 xl:pl-8" : "pr-2 sm:pr-4 lg:pr-6 xl:pr-8 text-right"}`}>
                      {index % 2 !== 0 && (
                        <motion.div
                          className="inline-block"
                          whileHover={{ x: 5 }}
                        >
                          <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#1D3557] leading-tight">
                            {item.event}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-[#A47148] font-medium mt-1">
                            {item.milestone}
                          </p>
                          <div className={`mt-1 sm:mt-2 lg:mt-3 p-2 sm:p-3 lg:p-4 rounded-lg bg-[#F0F4F8] inline-block max-w-xs lg:max-w-sm xl:max-w-md`}>
                            <p className="text-xs sm:text-sm text-gray-700">
                              A transformative year that set new benchmarks for the organization
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  {/* Mobile layout (single column) */}
                  <div className="md:hidden flex">
                    {/* Icon/Connector */}
                    <div className="flex flex-col items-center mr-3 sm:mr-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white border-2 sm:border-3 border-[#A47148] flex items-center justify-center text-[#1D3557] font-bold shadow-sm sm:shadow-md z-10">
                        <div className="text-[#A47148]">
                          {item.icon}
                        </div>
                      </div>
                      {index !== 5 && (
                        <div className="flex-1 w-0.5 sm:w-1 bg-[#A47148] my-1 sm:my-2 opacity-30"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
                        <div className="text-xs sm:text-sm font-semibold text-[#A47148] mb-1">{item.year}</div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#1D3557]">{item.event}</h3>
                        <p className="text-xs sm:text-sm text-[#A47148] font-medium mt-1">{item.milestone}</p>
                        <div className="mt-2 sm:mt-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-gray-50 text-xs sm:text-sm text-gray-700">
                          {index % 2 === 0
                            ? "This milestone marked a significant growth phase for the company"
                            : "A transformative year that set new benchmarks for the organization"}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-[#A47148] opacity-5 -z-10"></div>
          <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 w-32 sm:w-60 h-32 sm:h-60 rounded-full bg-[#1D3557] opacity-5 -z-10"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUSComponent;