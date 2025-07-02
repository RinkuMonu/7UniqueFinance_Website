"use client";

import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export default function LoanApplicationPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    email: '',
    loanType: '',
    loanAmount: '',
    captchaAnswer: '',
    termsAgreed: false
  });

  const [captchaQuestion, setCaptchaQuestion] = useState(generateCaptcha());
  const [errors, setErrors] = useState({});
  const modalRef = useRef();

  // Generate simple math captcha
  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    return {
      question: `${num1} + ${num2}`,
      answer: num1 + num2
    };
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.loanType) {
      newErrors.loanType = 'Please select a loan type';
    }
    
    if (!formData.loanAmount || isNaN(formData.loanAmount)) {
      newErrors.loanAmount = 'Please enter a valid loan amount';
    }
    
    if (parseInt(formData.captchaAnswer) !== captchaQuestion.answer) {
      newErrors.captchaAnswer = 'Incorrect answer';
    }
    
    if (!formData.termsAgreed) {
      newErrors.termsAgreed = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      alert('Application submitted successfully! We will contact you shortly.');
      onClose();
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#3a251a]">Apply for Loan</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#b7603d] focus:border-[#b7603d] outline-none"
                maxLength="10"
              />
              <p className="text-xs text-gray-500 mt-1">We will send the OTP on above mentioned number</p>
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#b7603d] focus:border-[#b7603d] outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#b7603d] focus:border-[#b7603d] outline-none"
              />
            </div>

            {/* Loan Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Loan Type <span className="text-red-500">*</span>
              </label>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#b7603d] focus:border-[#b7603d] outline-none"
              >
                <option value="">Select Loan Type</option>
                <option value="Commercial Vehicle Loan">Commercial Vehicle Loan</option>
                <option value="Car Loan">Car Loan</option>
                <option value="Tractor Loan">Tractor Loan</option>
                <option value="Construction Equipment Loan">Construction Equipment Loan</option>
                <option value="Two Wheeler Loan">Two Wheeler Loan</option>
                <option value="Secured Business Loan">Secured Business Loan</option>
                <option value="Home Renovation">Home Renovation - Mortgage Loan</option>
              </select>
              {errors.loanType && <p className="text-red-500 text-sm mt-1">{errors.loanType}</p>}
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="Enter loan amount"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#b7603d] focus:border-[#b7603d] outline-none"
              />
              {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>}
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Captcha: {captchaQuestion.question} =
              </label>
              <input
                type="text"
                name="captchaAnswer"
                value={formData.captchaAnswer}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#b7603d] focus:border-[#b7603d] outline-none"
              />
              {errors.captchaAnswer && <p className="text-red-500 text-sm mt-1">{errors.captchaAnswer}</p>}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#b7603d] border-gray-300 rounded focus:ring-[#b7603d]"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  I agree with the <a href="/terms" className="text-[#b7603d] hover:underline">Terms and Conditions</a> <span className="text-red-500">*</span>
                </label>
                {errors.termsAgreed && <p className="text-red-500 text-sm mt-1">{errors.termsAgreed}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#b7603d] text-white py-2 px-4 rounded-md hover:bg-[#9c4f32] transition-colors duration-300 font-medium"
              >
                Submit Application
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">* fields are mandatory</p>
          </form>
        </div>
      </div>
    </div>
  );
}