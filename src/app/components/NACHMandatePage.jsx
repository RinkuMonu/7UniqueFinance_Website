"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const NACHMandatePage = () => {
  const [formData, setFormData] = useState({
    mandateType: '',
    loanId: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    description: '',
    acknowledgement: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState({ type: '', text: '' });

  const mandateTypes = [
    { value: 'create', label: 'Create' },
    { value: 'amend', label: 'Amend' },
    { value: 'cancel', label: 'Cancel' },
    { value: 'suspend', label: 'Suspend' },
    { value: 'revoke', label: 'Revoke' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage({ type: '', text: '' });

    // Validate form
    if (!formData.mandateType) {
      setSubmissionMessage({ type: 'error', text: 'Please select mandate type' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.loanId) {
      setSubmissionMessage({ type: 'error', text: 'Please enter Loan ID' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.fullName) {
      setSubmissionMessage({ type: 'error', text: 'Please enter Full Name' });
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setSubmissionMessage({ type: 'error', text: 'Please enter valid 10-digit Mobile Number' });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmissionMessage({ type: 'error', text: 'Please enter valid Email ID' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.acknowledgement) {
      setSubmissionMessage({ type: 'error', text: 'Please acknowledge the terms' });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmissionMessage({ 
        type: 'success', 
        text: `Your NACH Mandate ${formData.mandateType} request has been submitted successfully. Reference ID: NACH${Math.floor(100000 + Math.random() * 900000)}`
      });
      setIsSubmitting(false);
      // Reset form except for acknowledgement
      setFormData(prev => ({
        mandateType: '',
        loanId: '',
        fullName: '',
        mobileNumber: '',
        email: '',
        description: '',
        acknowledgement: prev.acknowledgement
      }));
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>NACH Mandate | SK Finance</title>
        <meta name="description" content="Manage your NACH Mandate with SK Finance Limited" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#f8fafd] to-gray-100 py-12 px-3 sm:px-6 lg:px-8">
        {/* Decorative vectors */}
        <div className="absolute top-0 left-0 w-full h-32 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/wave.svg')] bg-cover bg-center"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[#142a47] mb-2"
            >
              NACH Mandate
            </motion.h1>
            <motion.a
              href="#"
              className="text-[#A47148] hover:underline text-sm inline-flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              More info
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-[#A47148] mx-auto mt-4"
            ></motion.div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                {/* Mandate Type */}
                <div className="mb-6">
                  <label htmlFor="mandateType" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Mandate Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="mandateType"
                    name="mandateType"
                    value={formData.mandateType}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm rounded-md"
                    required
                  >
                    <option value="">-- Select --</option>
                    {mandateTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                {/* Loan ID */}
                <div className="mb-6">
                  <label htmlFor="loanId" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="loanId"
                    name="loanId"
                    value={formData.loanId}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm"
                    placeholder="Enter Loan ID"
                    required
                  />
                </div>

                {/* Full Name */}
                <div className="mb-6">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="mb-6">
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm"
                    placeholder="Enter Mobile Number"
                    maxLength="10"
                    required
                  />
                </div>

                {/* Email ID */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm"
                    placeholder="Enter Email ID"
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description (optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#A47148] focus:border-[#A47148] sm:text-sm"
                    placeholder="Enter any additional details"
                  />
                </div>

                {/* Acknowledgement Checkbox */}
                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="acknowledgement"
                        name="acknowledgement"
                        type="checkbox"
                        checked={formData.acknowledgement}
                        onChange={handleChange}
                        className="focus:ring-[#A47148] h-4 w-4 text-[#A47148] border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="acknowledgement" className="font-medium text-gray-700">
                        I acknowledge that the provided mobile number is registered. As for Create/Amend/Cancel/Suspend/Revoke of the NACH Mandate, it will be processed only through registered number, failing which the request will be deemed cancelled. <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submission Message */}
                {submissionMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-md ${submissionMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                  >
                    {submissionMessage.text}
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
                * Fields are mandatory. Processing time may vary based on mandate type.
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

export default NACHMandatePage;