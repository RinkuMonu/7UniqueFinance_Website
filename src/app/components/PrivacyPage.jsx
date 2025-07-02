"use client"

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy | SK Finance</title>
        <meta name="description" content="Privacy Policy for SK Finance Limited" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#f8fafd] to-gray-100 py-12 px-2 sm:px-6 lg:px-8">
        {/* Decorative vectors */}
        <div className="absolute top-0 left-0 w-full h-32 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/wave.svg')] bg-cover bg-center"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#142a47] mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-[#A47148] mx-auto"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#142a47] to-[#3a5a80] p-6">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-[#d3baa6] mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <h2 className="text-2xl font-bold text-white">Your Privacy Matters</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <motion.div 
                className="prose prose-lg max-w-none text-gray-700 space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="border-l-4 border-[#A47148] pl-4 bg-gray-50 p-4 rounded-r-lg"
                >
                  <p className="font-medium">
                    At SK Finance Limited ("SKFL"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </motion.div>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    Information We Collect
                  </h3>
                  <ul className="mt-3 space-y-2 list-disc pl-5">
                    <li>Personal identification information (Name, email address, phone number, etc.)</li>
                    <li>Financial information (when applying for our services)</li>
                    <li>Demographic information (age, gender, etc.)</li>
                    <li>Technical data (IP address, browser type, device information)</li>
                    <li>Usage data (pages visited, time spent, etc.)</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    How We Use Your Information
                  </h3>
                  <div className="mt-3 grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-800">Service Provision</h4>
                      <p className="text-sm mt-1">To provide and maintain our services, process transactions, and manage your account.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-800">Communication</h4>
                      <p className="text-sm mt-1">To contact you regarding your account, respond to inquiries, and send important notices.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-purple-800">Improvements</h4>
                      <p className="text-sm mt-1">To analyze usage patterns and improve our website and services.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                      <h4 className="font-semibold text-amber-800">Security</h4>
                      <p className="text-sm mt-1">To detect and prevent fraud, unauthorized activities, and security issues.</p>
                    </div>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Data Security
                  </h3>
                  <p className="mt-3">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These include:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Encryption
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Access Controls
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Regular Audits
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Secure Storage
                    </span>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                    Your Rights
                  </h3>
                  <p className="mt-3">
                    You have certain rights regarding your personal information, subject to applicable laws:
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">Right to access and receive a copy of your personal data</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">Right to rectify inaccurate or incomplete data</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">Right to request deletion of your personal data</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">Right to restrict or object to processing of your data</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">Right to data portability (where applicable)</p>
                    </div>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Changes to This Policy
                  </h3>
                  <p className="mt-3">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Policy. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Contact Us
                  </h3>
                  <p className="mt-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
                  </p>
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">SK Finance Limited</p>
                    <p>Data Protection Officer</p>
                    <p>Email: <a href="mailto:dpo@skfinance.com" className="text-[#A47148] hover:underline">dpo@skfinance.com</a></p>
                    <p>Phone: +91 XXX XXX XXXX</p>
                    <p>Address: Corporate Office, Jaipur, Rajasthan, India</p>
                  </div>
                </motion.section>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <motion.p 
                  className="text-sm text-gray-500 mb-4 sm:mb-0"
                  whileHover={{ scale: 1.02 }}
                >
                  © {new Date().getFullYear()} SK Finance Limited. All rights reserved.
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#A47148' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#142a47] text-white rounded-md shadow-sm transition-colors duration-300 flex items-center"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Back to Top
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute left-0 bottom-0 w-64 h-64 bg-[#A47148] rounded-full filter blur-3xl opacity-10"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute right-0 top-1/3 w-64 h-64 bg-[#142a47] rounded-full filter blur-3xl opacity-10"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;