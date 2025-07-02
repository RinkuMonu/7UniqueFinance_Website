"use client"

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const TermsConditionsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Terms & Conditions | SK Finance</title>
        <meta name="description" content="Terms and Conditions for SK Finance Limited" />
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
              Terms & Conditions
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
              Effective from: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2h12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <h2 className="text-2xl font-bold text-white">Legal Agreement</h2>
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
                    Please read these Terms and Conditions ("Terms") carefully before using the services of SK Finance Limited ("SKFL"). Your access to and use of our services is conditioned on your acceptance of and compliance with these Terms.
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
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                    Acceptance of Terms
                  </h3>
                  <ul className="mt-3 space-y-2 list-disc pl-5">
                    <li>By accessing or using our services, you agree to be bound by these Terms.</li>
                    <li>If you disagree with any part of the Terms, you may not access our services.</li>
                    <li>We reserve the right to modify these Terms at any time without prior notice.</li>
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
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    Services
                  </h3>
                  <div className="mt-3 grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-800">Loan Products</h4>
                      <p className="text-sm mt-1">We offer various loan products subject to eligibility criteria and approval processes.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-800">Financial Services</h4>
                      <p className="text-sm mt-1">Including but not limited to vehicle financing, personal loans, and other credit facilities.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-purple-800">Online Services</h4>
                      <p className="text-sm mt-1">Our website and mobile applications provide information and application facilities.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                      <h4 className="font-semibold text-amber-800">Customer Support</h4>
                      <p className="text-sm mt-1">We provide customer service through various channels as described on our website.</p>
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
                    User Responsibilities
                  </h3>
                  <p className="mt-3">
                    As a user of our services, you agree to:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Provide Accurate Information
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Maintain Confidentiality
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Timely Payments
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Compliance with Laws
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
                    Fees & Charges
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">All applicable fees and charges will be disclosed in your loan agreement.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">Late payment fees may apply if payments are not received by the due date.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">Prepayment charges may apply for certain loan products.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#A47148] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3">All fees are subject to change with prior notice as per regulatory requirements.</p>
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
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Limitations of Liability
                  </h3>
                  <p className="mt-3">
                    SK Finance Limited shall not be liable for:
                  </p>
                  <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Any indirect, incidental, or consequential damages</li>
                          <li>Loss of profits or business opportunities</li>
                          <li>Unauthorized access to or alteration of your transmissions or data</li>
                          <li>Statements or conduct of any third party on our services</li>
                        </ul>
                      </div>
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
                    Governing Law
                  </h3>
                  <p className="mt-3">
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
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
                    Contact Information
                  </h3>
                  <p className="mt-3">
                    For any questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">SK Finance Limited</p>
                    <p>Legal Department</p>
                    <p>Email: <a href="mailto:legal@skfinance.com" className="text-[#A47148] hover:underline">legal@skfinance.com</a></p>
                    <p>Phone: +91 XXX XXX XXXX</p>
                    <p>Registered Office: Jaipur, Rajasthan, India</p>
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

export default TermsConditionsPage;