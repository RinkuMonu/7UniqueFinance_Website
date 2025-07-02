"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, 
  FaChevronDown, FaChevronUp, FaPaperPlane,
  FaUserTie, FaShieldAlt, FaHeadset, FaBalanceScale,
  FaBuilding, FaBullhorn, FaGlobeAmericas
} from 'react-icons/fa';
import { FiSend, FiMail, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [expandedSections, setExpandedSections] = useState({
    investor: false,
    whistleblower: false,
    concerns: false,
    grievance: false,
    address: false,
    notice: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const contactMethods = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      value: "1800-103-9039",
      link: "tel:18001039039"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: "WhatsApp",
      value: "1800-103-9039",
      link: "https://wa.me/18001039039"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      value: "customercare@skfin.in",
      link: "mailto:customercare@skfin.in"
    }
  ];

  const expandableSections = [
    {
      id: "investor",
      title: "Investor Relations",
      icon: <FaUserTie className="text-[#A47148]" />,
      shortText: "Communicate with us by emailing us on investor@skfin.in",
      fullText: "For investor relations, please contact us at investor@skfin.in. Our team handles all investor queries, financial reports, and shareholder communications. We're available Monday to Friday, 9 AM to 5 PM."
    },
    {
      id: "whistleblower",
      title: "Whistleblower",
      icon: <FaShieldAlt className="text-[#A47148]" />,
      shortText: "This policy has been developed to ensure protection for employees",
      fullText: "Our whistleblower policy ensures protection for employees reporting unethical behavior. Reports can be made anonymously through our secure portal or by emailing compliance@skfin.in. All reports are investigated thoroughly and confidentially."
    },
    {
      id: "concerns",
      title: "Raise Your Concerns",
      icon: <FaHeadset className="text-[#A47148]" />,
      shortText: "Queries, Requests & Concerns - Get them resolved quickly",
      fullText: "We value your feedback. For any concerns regarding our services, please contact our customer care team at 1800-103-9039 or email concerns@skfin.in. We aim to resolve all issues within 48 hours of reporting."
    },
    {
      id: "grievance",
      title: "Grievance Redressal",
      icon: <FaBalanceScale className="text-[#A47148]" />,
      shortText: "At SK Finance Limited, Customer Servicing is our priority",
      fullText: "Our grievance redressal mechanism ensures prompt resolution of customer complaints. You can file a grievance through our website, mobile app, or by visiting any of our branches. We follow a 7-step process to ensure fair resolution."
    },
    {
      id: "address",
      title: "Our Address",
      icon: <FaBuilding className="text-[#A47148]" />,
      shortText: "Registered Office- G 1-2, New Khasa Kothi, Jaipur",
      fullText: "Registered Office: G 1-2, New Khasa Kothi, Jaipur, Rajasthan 302001. Corporate Office: 5th Floor, Tower B, Peninsula Business Park, Lower Parel, Mumbai 400013. Branch locations available across 18 states."
    },
    {
      id: "notice",
      title: "Important Notice",
      icon: <FaBullhorn className="text-[#A47148]" />,
      shortText: "Important notice to the public regarding fraudulent activities",
      fullText: "Important Notice: Beware of fraudulent calls/SMS asking for personal details or OTPs. SK Finance never asks for sensitive information via phone or SMS. Report any suspicious activity immediately to fraudalert@skfin.in or call our helpline."
    }
  ];

  // Map coordinates for the registered office
  const mapLocation = {
    lat: 26.9124,
    lng: 75.7873,
    address: "G 1-2, New Khasa Kothi, Jaipur, Rajasthan 302001"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        {/* Floating circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#142a47]/5 blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#A47148]/5 blur-xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full border-2 border-[#A47148] border-dashed opacity-30"
            />
            <div className="w-20 h-20 rounded-full bg-[#cad4e2] flex items-center justify-center text-[#A47148] mx-auto shadow-lg">
              <FiSend className="w-8 h-8" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-[#142a47] mb-4"
        >
          Contact <span className="text-[#A47148]">SK Finance</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We're here to help and answer any questions you might have. 
          Reach out to us through any of these channels.
        </motion.p>
      </motion.div>

      {/* Contact Cards Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="p-8 text-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                 animate={{ rotate: 360 }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
                className="w-16 h-16 bg-[#d2dbe7] rounded-full flex items-center justify-center text-[#A47148] mx-auto mb-6 shadow-md"
              >
                {method.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-[#142a47] mb-2">{method.title}</h3>
              
              <motion.a
                href={method.link}
                whileHover={{ color: "#A47148" }}
                className="text-gray-600 text-lg font-medium block mb-6"
              >
                {method.value}
              </motion.a>
              
              <motion.a
                href={method.link}
                whileHover={{ 
                  backgroundColor: "#A47148",
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-2 bg-[#142a47] text-white rounded-full text-sm font-medium shadow-md"
              >
                Connect Now
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#96a7b9] to-[#dae4f5] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#A47148] flex items-center justify-center mr-4 shadow-lg">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Headquarters</h3>
                </div>
                
                <p className="text-white mb-6 leading-relaxed">
                  Visit us at our registered office or connect with our team for any inquiries. 
                  We're always happy to welcome you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[#A47148] mt-1 mr-3">
                      <FaBuilding className="w-4 h-4" />
                    </div>
                    <p className="text-white">{mapLocation.address}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.a
                href={`https://www.google.com/maps?q=${mapLocation.lat},${mapLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  backgroundColor: "#A47148",
                  x: 5
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-[#526681] border border-[#A47148] text-white rounded-lg font-medium shadow-lg mt-4"
              >
                View on Google Maps
                <FaGlobeAmericas className="ml-2" />
              </motion.a>
            </div>
            
            <div className="md:w-1/2 h-96 bg-gray-800 relative">
              {/* Map placeholder with animated overlay */}
              <div className="absolute inset-0 bg-[#e8eaee] flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-center p-6"
                >
                  <FaMapMarkerAlt className="w-16 h-16 text-[#A47148] mx-auto mb-4" />
                  <h4 className="text-[#526681] text-xl font-semibold mb-2">Jaipur, Rajasthan</h4>
                  <p className="text-[#526681]">Registered Office Location</p>
                </motion.div>
              </div>
              
              {/* Animated pulse effect on marker */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-[#A47148]/30 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[#A47148] -translate-x-1/2 -translate-y-1/2 shadow-lg" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Expandable Information Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#142a47] mb-4">More Information</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our various contact points and support channels for different needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expandableSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#142a47]/10 p-3 rounded-lg mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#142a47]">{section.title}</h3>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={expandedSections[section.id] ? 'expanded' : 'collapsed'}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mb-4 overflow-hidden"
                  >
                    {expandedSections[section.id] ? section.fullText : `${section.shortText}...`}
                  </motion.p>
                </AnimatePresence>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#A47148] font-medium flex items-center group"
                >
                  {expandedSections[section.id] ? 'Show Less' : 'Read More'}
                  {expandedSections[section.id] ? (
                    <FaChevronUp className="ml-2 transition-transform group-hover:translate-y-[-2px]" />
                  ) : (
                    <FaChevronDown className="ml-2 transition-transform group-hover:translate-y-[2px]" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b9cde7] to-[#1a365d] opacity-95" />
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        
        <div className="relative z-10 p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-[#A47148] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FiMessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Need More Help?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Send us a detailed message and our team will get back to you within 24 hours.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#8a5f3a"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#A47148] text-white font-medium py-3 px-8 rounded-lg inline-flex items-center shadow-xl"
            >
              Open Contact Form
              <FaPaperPlane className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating contact button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#A47148] rounded-full flex items-center justify-center text-white shadow-xl"
        >
          <FiMail className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;