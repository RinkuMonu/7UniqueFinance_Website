"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const trustItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#1D3557">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "30+ years of trust",
      description: "Built on deep experience, expertise and affinity"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#1D3557">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "11 States, 1 Union Territory",
      description: "579+ Branches across India"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#1D3557">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ISO 27001:2013 Certified",
      description: "State-of-the-art Secured Ecosystem"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#1D3557">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Over 9 Lakh Happy Customers",
      description: "Serving with trust and reliability"
    }
  ];

  const faqs = [
    {
      question: "How can a customer get adjustment of excess EMI paid?",
      answer: "If a customer has paid the excess EMI, the same gets adjusted in the future EMIs to be paid, or customer can also raise a request for the refund of the excess EMI paid."
    },
    {
      question: "What are the modes of EMI payment?",
      answer: "We offer multiple payment modes including online banking, UPI, auto-debit, cheque, and cash payments at our branches."
    },
    {
      question: "What does PDD stand for?",
      answer: "PDD stands for Post Dated Cheque, which is one of the payment methods we accept for EMI payments."
    },
    {
      question: "How can a customer locate the nearest available SK Finance branch?",
      answer: "You can find our nearest branch using our branch locator tool on the website or mobile app, or by calling our customer care number."
    },
    {
      question: "How can a customer report a fraud?",
      answer: "Any fraudulent activity can be reported immediately through our 24/7 helpline number, email support, or by visiting any of our branches."
    },
    {
      question: "How can a customer check EMI related information?",
      answer: "EMI details can be checked through your online account portal, mobile app, or by contacting our customer support team."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-16 px-4 relative overflow-hidden">
      {/* Improved decorative background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
       
        {/* Smooth wave pattern */}
        <svg className="absolute bottom-20 right-32 w-32 h-32 text-[#1D3557]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20,100 C40,40 60,160 80,100 C100,40 120,160 140,100 C160,40 180,160 180,100" />
        </svg>
        
        {/* Modern dot grid */}
        <svg className="absolute top-1/3 right-10 w-24 h-24 text-[#A47148]" viewBox="0 0 200 200" fill="currentColor">
          {[...Array(25)].map((_, i) => (
            <circle key={i} cx={(i % 5) * 40 + 20} cy={Math.floor(i / 5) * 40 + 20} r="3" />
          ))}
        </svg>
        
        {/* Subtle line pattern */}
        <svg className="absolute bottom-1/4 left-1/4 w-48 h-48 text-[#1D3557]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="0" y1="0" x2="200" y2="200" />
          <line x1="200" y1="0" x2="0" y2="200" />
          <line x1="100" y1="0" x2="100" y2="200" />
          <line x1="0" y1="100" x2="200" y2="100" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-4 relative"
            whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            Why People <span className='text-[#A47148]'>Love</span> SK Finance
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1  rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Trusted by millions for our commitment to excellence and customer satisfaction
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Trust Items (hidden on small screens) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative hidden lg:block"
          > 
            <motion.div 
              className="absolute -top-12 -left-12 w-24 h-24 bg-[#1D3557]/5 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(29, 53, 87, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)"
                  }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#A47148]/20 hover:border-[#A47148]/40 transition-all relative overflow-hidden"
                >
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1D3557]/5 rounded-full" />
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#A47148]/5 rounded-full" />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div 
                      className="bg-[#1D3557]/10 p-3 rounded-full"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg text-[#1D3557]">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 hidden lg:block relative"
            >
              <motion.div 
                className="absolute -top-10 -left-10 -z-10 w-48 h-48"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Modern corner design */}
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20H40V40H20V20Z" stroke="#A47148" strokeWidth="2"/>
                  <path d="M20 160H40V180H20V160Z" stroke="#A47148" strokeWidth="2"/>
                  <path d="M160 20H180V40H160V20Z" stroke="#A47148" strokeWidth="2"/>
                  <path d="M160 160H180V180H160V160Z" stroke="#A47148" strokeWidth="2"/>
                </svg>
              </motion.div>
              
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1D3557]/30 to-[#A47148]/30 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Financial team discussing" 
                  className="rounded-xl shadow-2xl w-full h-auto object-cover relative z-10"
                />
                <motion.div 
                  className=""
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 rounded-xl" />
              
                  <motion.div 
                    className="absolute top-2 right-2 w-8 h-8 bg-[#A47148] rounded-full opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-10 -right-10 -z-10 w-36 h-36"
                animate={{
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                {/* Modern triangle pattern */}
                <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 20L180 180H20L100 20Z" stroke="#1D3557" strokeWidth="2" strokeDasharray="8 8"/>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Left Side - Image Only (visible on small screens) */}
          <div className="lg:hidden mb-8">
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Financial team discussing" 
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#1D3557] to-[#1D3557]/90 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="font-bold text-sm mb-1">24/7 Customer Support</h4>
                <p className="text-xs">Always here to help you</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Side - FAQs */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 bg-[#A47148]/10 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                <motion.div 
                  className="absolute -left-4 top-0 w-12 h-12 bg-[#1D3557]/5 rounded-full"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <h3 className="text-3xl font-bold text-[#1D3557] mb-2 relative z-10">Frequently Asked Questions</h3>
                <p className="text-gray-600 relative z-10">Find answers to common questions about our services</p>
              </motion.div>
              
              <div className="space-y-4 relative">
                <motion.div 
                  className="absolute -left-4 bottom-0 w-20 h-20 bg-[#A47148]/5 rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#A47148]/20 relative"
                  >
                    <motion.button
                      layout
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-[#f8f9fa]/30 transition-colors relative z-10"
                      onClick={() => toggleQuestion(index)}
                      initial={false}
                      whileHover={{ backgroundColor: "rgba(164, 113, 72, 0.05)" }}
                    >
                      <motion.span 
                        layout
                        className="font-medium text-[#1D3557] text-lg pr-4"
                      >
                        {faq.question}
                      </motion.span>
                      <motion.span 
                        layout
                        className="text-[#A47148] text-2xl font-light min-w-[24px] flex justify-center"
                        animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeQuestion === index && (
                        <motion.div
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="px-6 overflow-hidden relative z-10"
                        >
                          <div className="pb-6 text-gray-600">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <motion.a
                  href="#"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(29, 53, 87, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1D3557] to-[#A47148] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                >
                  <span className="relative z-10">Explore All Questions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#1D3557]/90 to-[#A47148]/90 opacity-0 hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                  />
                  <motion.div 
                    className="absolute -inset-1 bg-white/10 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;