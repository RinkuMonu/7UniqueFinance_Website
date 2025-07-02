"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiMessageSquare, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const LocateUsPage = () => {
  const [searchType, setSearchType] = useState('state');
  const [selectedState, setSelectedState] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [pincode, setPincode] = useState('');

  const states = ['Rajasthan', 'Maharashtra', 'Delhi', 'Karnataka', 'Gujarat', 'Tamil Nadu'];
  const branches = {
    'Rajasthan': ['Jaipur HQ', 'Udaipur', 'Jodhpur', 'Kota'],
    'Maharashtra': ['Mumbai Central', 'Pune', 'Nagpur'],
    'Delhi': ['New Delhi', 'Gurgaon', 'Noida'],
    'Karnataka': ['Bangalore', 'Mysore'],
    'Gujarat': ['Ahmedabad', 'Surat'],
    'Tamil Nadu': ['Chennai', 'Coimbatore']
  };

  return (
    <>
      <Head>
        <title>Locate Us | SK Finance</title>
        <meta name="description" content="Find SK Finance branches and offices across India" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#f8fafd] to-gray-50">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            initial={{ x: -100, y: -100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A47148]/5 rounded-full filter blur-3xl"
          ></motion.div>
          <motion.div
            initial={{ x: 100, y: 100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#142a47]/5 rounded-full filter blur-3xl"
          ></motion.div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Hero section with left content and right image */}
          <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-[#142a47] mb-4">
                  LOCATE US
                </h1>
                <div className="w-24 h-1.5 bg-[#A47148] mb-6"></div>
                <p className="text-lg text-gray-600 mb-8">
                  We ensure that we are always accessible and available for everyone. With 579+ branches and growing, we're bringing financial services closer to you.
                </p>
                
                {/* Animated contact cards */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200/50"
                  >
                    <div className="p-3 rounded-full bg-[#142a47]/10 text-[#142a47] mr-4">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#142a47]">Head Office</h3>
                      <p className="text-gray-600">Adarsh Plaza, Jaipur - 302001</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200/50"
                  >
                    <div className="p-3 rounded-full bg-[#A47148]/10 text-[#A47148] mr-4">
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#142a47]">Contact Number</h3>
                      <p className="text-gray-600">1800-103-9039</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right image - Added professional office image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/contact.jpg" // Replace with your actual image path
                    alt="Financial office building"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142a47]/80 to-transparent flex items-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-white"
                    >
                      <h3 className="text-2xl font-bold mb-2">Our Jaipur Headquarters</h3>
                      <p className="text-gray-200">Modern facilities with dedicated customer service</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Branch locator section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-[#142a47] mb-2">
                  Search Nearest SK Finance Branch
                </h2>
                <p className="text-gray-600">
                  579+ branches and digital services now within easy access
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-xl shadow-sm p-6 border border-gray-200/50"
              >
                {/* Search tabs */}
                <div className="flex mb-6">
                  <button
                    onClick={() => setSearchType('state')}
                    className={`flex-1 py-3 px-4 text-center font-medium border-b-2 ${searchType === 'state' ? 'text-[#A47148] border-[#A47148]' : 'text-gray-500 border-transparent'}`}
                  >
                    Select State
                  </button>
                  <button
                    onClick={() => setSearchType('pincode')}
                    className={`flex-1 py-3 px-4 text-center font-medium border-b-2 ${searchType === 'pincode' ? 'text-[#A47148] border-[#A47148]' : 'text-gray-500 border-transparent'}`}
                  >
                    Search by Pincode
                  </button>
                </div>

                {/* Search content */}
                <div className="space-y-6">
                  {searchType === 'state' ? (
                    <>
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select State</label>
                        <div className="relative">
                          <select
                            value={selectedState}
                            onChange={(e) => {
                              setSelectedState(e.target.value);
                              setSelectedBranch('');
                            }}
                            className="appearance-none block w-full px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148]"
                          >
                            <option value="">-- Select State --</option>
                            {states.map((state) => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FiChevronDown className="text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {selectedState && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select Branch</label>
                          <div className="relative">
                            <select
                              value={selectedBranch}
                              onChange={(e) => setSelectedBranch(e.target.value)}
                              className="appearance-none block w-full px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148]"
                            >
                              <option value="">-- Select Branch --</option>
                              {branches[selectedState]?.map((branch) => (
                                <option key={branch} value={branch}>{branch}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <FiChevronDown className="text-gray-400" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enter Pincode</label>
                      <div className="flex rounded-md shadow-sm">
                        <input
                          type="text"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          placeholder="e.g. 302001"
                          className="flex-1 min-w-0 block w-full px-4 py-3 rounded-l-md border border-gray-300 focus:ring-[#A47148] focus:border-[#A47148]"
                          maxLength="6"
                        />
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-r-md text-white bg-[#A47148] hover:bg-[#8a5a3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A47148]"
                        >
                          Search
                        </motion.button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Results placeholder */}
                {(selectedBranch || pincode) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-[#A47148]/10 text-[#A47148] mr-4">
                        <FaMapMarkerAlt className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#142a47] mb-1">SK Finance {selectedBranch || 'Jaipur HQ'}</h4>
                        <p className="text-gray-600 mb-3">123 Business Park, {selectedState || 'Rajasthan'} - {pincode || '302001'}</p>
                        <div className="flex flex-wrap gap-4">
                          <a href="#" className="text-sm text-[#A47148] hover:underline flex items-center">
                            <FiPhone className="mr-2" /> Call
                          </a>
                          <a href="#" className="text-sm text-[#A47148] hover:underline flex items-center">
                            <FaWhatsapp className="mr-2" /> WhatsApp
                          </a>
                          <a href="#" className="text-sm text-[#A47148] hover:underline flex items-center">
                            <FiMapPin className="mr-2" /> Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.section>

          {/* Map section - Added actual map image */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/map1.jpg" // Replace with your actual image path
                alt="India map with locations"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlay with animated markers */}
            <div className="absolute inset-0">
              {[10, 30, 50, 70, 90].map((left) => (
                <motion.div
                  key={left}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: left/100
                  }}
                  className="absolute"
                  style={{ 
                    left: `${left}%`, 
                    top: `${50 + Math.sin(left/10) * 10}%` 
                  }}
                >
                  <div className="relative">
                    <div className="w-6 h-6 bg-[#A47148] rounded-full shadow-lg flex items-center justify-center">
                      <FiMapPin className="text-white w-3 h-3" />
                    </div>
                    <div className="absolute inset-0 border-2 border-[#A47148] rounded-full animate-ping opacity-75"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center text-white p-6 backdrop-blur-sm rounded-xl bg-[#142a47]/70"
              >
                <FiMapPin className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Our Nationwide Presence</h3>
                <p className="max-w-md mx-auto">Find our branches across multiple cities in India</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-[#A47148] rounded-md text-sm font-medium"
                >
                  View All Locations
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default LocateUsPage;