"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const RevokeConsentPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValue] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, sum: num1 + num2 };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate captcha
    if (parseInt(captchaInput) !== captchaValue.sum) {
      setSubmissionMessage('Invalid captcha. Please try again.');
      setIsSubmitting(false);
      return;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobileNumber)) {
      setSubmissionMessage('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmissionMessage('Your consent revocation request has been submitted successfully. We will process your request shortly.');
      setIsSubmitting(false);
      setMobileNumber('');
      setCaptchaInput('');
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Revoke Consent | SK Finance</title>
        <meta name="description" content="Revoke your consent for SK Finance Limited" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#f8fafd] to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        {/* Decorative vectors */}
        <div className="absolute top-0 left-0 w-full h-32 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/wave.svg')] bg-cover bg-center"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[#142a47] mb-4"
            >
              Revoke Consent
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-20 h-1 bg-[#A47148] mx-auto"
            ></motion.div>
          </div>

          {/* Warning Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-700">
                  <strong>Note:</strong> You are about to revoke the consents that you have made while using SK Finance website.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                {/* Mobile Number Field */}
                <div className="mb-6">
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm"
                      placeholder="Enter Mobile Number"
                      required
                    />
                  </div>
                </div>

                {/* Captcha Field */}
                <div className="mb-8">
                  <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">
                    Captcha
                  </label>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 px-4 py-3 bg-gray-100 rounded-md text-center font-medium">
                      {captchaValue.num1} + {captchaValue.num2} = ?
                    </div>
                    <input
                      type="text"
                      id="captcha"
                      name="captcha"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm"
                      placeholder="Enter Captcha"
                      required
                    />
                  </div>
                </div>

                {/* Submission Message */}
                {submissionMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-md ${submissionMessage.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                  >
                    {submissionMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#142a47] hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A47148] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Footer Note */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you acknowledge that revoking consent may affect your ability to use certain services.
              </p>
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

export default RevokeConsentPage;