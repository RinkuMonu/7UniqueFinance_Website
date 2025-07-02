"use client"

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const DisclaimerPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Disclaimer | SK Finance</title>
        <meta name="description" content="Legal disclaimer for SK Finance Limited" />
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
              Legal Disclaimer
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-[#A47148] mx-auto"
            ></motion.div>
          </div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-[#d3baa6] p-6">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-[#A47148] mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                <h2 className="text-2xl font-bold text-white">Important Legal Information</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <motion.div 
                className="prose prose-lg max-w-none text-gray-700 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="border-l-4 border-[#A47148] pl-4"
                >
                  <p>
                    SK Finance Limited, hereinafter referred as "SKFL", maintains this site (the 'Site') for your 
                    communication, personal information and education. You are free to browse the Site, you may 
                    download material displayed on the Site for personal and noncommercial use only, provided you 
                    also retain all copyright and other proprietary notices contained on the materials.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="border-l-4 border-[#A47148] pl-4"
                >
                  <p className="font-medium">
                    Any Content on Website must not be construed as investment advice, and you should exercise due 
                    caution and/or seek independent advice before entering into any investment or financial obligation 
                    based on the Content.
                  </p>
                </motion.div>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Linked Websites
                  </h3>
                  <p className="mt-2">
                    The contents displayed or the products/services offered on the Linked Websites or any quality of 
                    the same are not endorsed, verified or monitored by SK Finance in any way. SK Finance makes no 
                    representation or warranty, express or implied, of any kind whatsoever, pertaining to the Linked 
                    Websites.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Virus Protection
                  </h3>
                  <p className="mt-2">
                    Though SK Finance will take steps to prevent introduction of virus and other such destructive 
                    materials on the Website, it does not represent, warrant or guarantee that the Website or the 
                    Content downloaded from the Website or Linked Websites do not contain such virus or destructive 
                    materials. SK Finance is not liable for any damage or harm attributable to such virus or 
                    destructive materials.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2h12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    Jurisdiction
                  </h3>
                  <p className="mt-2">
                    You or any third party accessing the Website irrevocably agrees to the exclusive jurisdiction of 
                    the courts at Jaipur, Rajasthan, in relation any matter connected or related to use or access of 
                    the Website and waives any objection to any proceedings on grounds of venue or on the grounds that 
                    the proceedings have been brought in an inconvenient forum.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <h3 className="text-xl font-bold text-[#142a47] flex items-center">
                    <svg className="w-5 h-5 text-[#A47148] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                    </svg>
                    Multilingual Content
                  </h3>
                  <p className="mt-2">
                    For the convenience of our esteemed customers and as a value added service, SK Finance Limited 
                    website provides/may provide information about our various products in language/s other than English. 
                    In order to ensure consistency in understanding and for avoidance of any doubts, contents in English 
                    language should be relied upon and shall be construed to be final and binding in the event of any 
                    dispute/inconsistencies.
                  </p>
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
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#A47148' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#142a47] text-white rounded-md shadow-sm transition-colors duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
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

export default DisclaimerPage;