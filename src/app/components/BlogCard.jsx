

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const BlogCard = () => {
  const [activeTopic, setActiveTopic] = useState('All Topics');
  
  const topics = [
    'All Topics',
    'Commercial Vehicle Loan',
    'Car Loan',
    'Tractor Loan',
    'Two Wheeler Loan',
    'Secured Business Loan',
    'Financial Knowledge'
  ];

  const colors = {
    primary: '#142a47',
    secondary: '#A47148',
    accent: '#e8c39e',
    light: '#f8f9fa'
  };

  const contentData = {
    'All Topics': {
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 8,
          alt: 'Comprehensive financial solutions'
        },
        { 
          src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1011&q=80',
          cols: 4,
          alt: 'Loan comparison'
        },
        { 
          src: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Financial planning'
        },
        { 
          src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
          cols: 4,
          alt: 'Investment strategies'
        },
        { 
          src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Financial growth'
        }
      ],
      content: [
        "Compare all loan products in one place",
        "Interest rates starting from 7.5% p.a.",
        "Quick approval within 24-48 hours",
        "Customized solutions for every need"
      ],
      cta: "Explore All Options"
    },
    'Commercial Vehicle Loan': {
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 8,
          alt: 'Commercial truck fleet'
        },
        { 
          src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Logistics vehicles'
        },
        { 
          src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80',
          cols: 4,
          alt: 'Delivery trucks'
        },
        { 
          src: 'https://images.unsplash.com/photo-1581093450025-4cda24d15b08?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Construction vehicles'
        },
        { 
          src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Commercial bus'
        }
      ],
      content: [
        "Loans for trucks, buses, and commercial fleets",
        "Financing up to ₹5 crores with 7-year tenure",
        "Special schemes for logistics companies",
        "Bulk purchase discounts available"
      ],
      cta: "Apply for Commercial Loan"
    },
    'Car Loan': {
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2083&q=80',
          cols: 8,
          alt: 'New car showroom'
        },
        { 
          src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80',
          cols: 4,
          alt: 'Used car lot'
        },
        { 
          src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Luxury vehicles'
        },
        { 
          src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          cols: 4,
          alt: 'Family car'
        },
        { 
          src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Sports car'
        }
      ],
      content: [
        "New and pre-owned car financing",
        "100% on-road funding including RTO/insurance",
        "Interest rates from 7.99% p.a.",
        "Instant approval for salaried individuals"
      ],
      cta: "Get Car Loan Quote"
    },
    'Tractor Loan': {
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 8,
          alt: 'Farm tractor'
        },
        { 
          src: 'https://images.unsplash.com/photo-1500380804539-4e1e8a1e87af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
          cols: 4,
          alt: 'Tractor in field'
        },
        { 
          src: 'https://images.unsplash.com/photo-1581093450025-4cda24d15b08?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Heavy farm equipment'
        },
        { 
          src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Harvesting machine'
        },
        { 
          src: 'https://images.unsplash.com/photo-1581093450025-4cda24d15b08?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Agricultural tools'
        }
      ],
      content: [
        "Financing for all major tractor brands",
        "Special Kisan Credit Card schemes",
        "Seasonal repayment options",
        "Government subsidy assistance available"
      ],
      cta: "Calculate Tractor EMI"
    },
    'Two Wheeler Loan': {
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 8,
          alt: 'Motorcycle showroom'
        },
        { 
          src: 'https://images.unsplash.com/photo-1580310614697-1b34f03a58e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Scooter'
        },
        { 
          src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Bike accessories'
        },
        { 
          src: 'https://images.unsplash.com/photo-1580310614697-1b34f03a58e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Electric scooter'
        },
        { 
          src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Premium bike'
        }
      ],
      content: [
        "Scooter and motorcycle financing",
        "Minimum documentation required",
        "Disbursal within 4 hours for pre-approved",
        "Special offers for women buyers"
      ],
      cta: "View Two-Wheeler Offers"
    },
    'Secured Business Loan': {
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 8,
          alt: 'Business meeting'
        },
        { 
          src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
          cols: 4,
          alt: 'Business growth'
        },
        { 
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Office discussion'
        },
        { 
          src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
          cols: 4,
          alt: 'Startup funding'
        },
        { 
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cols: 4,
          alt: 'Business expansion'
        }
      ],
      content: [
        "Loans against property or assets",
        "Funding up to ₹5 crores available",
        "Customized repayment schedules",
        "Working capital solutions for MSMEs"
      ],
      cta: "Get Business Loan Quote"
    },
    'Financial Knowledge': {
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 8,
          alt: 'Financial education'
        },
        { 
          src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Credit score'
        },
        { 
          src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
          cols: 4,
          alt: 'Loan process'
        },
        { 
          src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Investment guide'
        },
        { 
          src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
          cols: 4,
          alt: 'Financial planning'
        }
      ],
      content: [
        "Complete loan application guides",
        "How to improve your credit score",
        "Understanding EMIs and interest rates",
        "Tax benefits on different loans"
      ],
      cta: "Learn Financial Basics"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Financial Solutions | {activeTopic}</title>
        <meta name="description" content={`${activeTopic} - Get complete financial solutions`} />
      </Head>

      {/* Premium Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-20"
        style={{ }}
      >
        {/* Decorative Vectors */}
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 overflow-hidden"
        >
          <svg className="absolute top-0 right-0 h-full opacity-10" viewBox="0 0 583 720">
            <path d="M0 0h583v720H0z" fill={colors.secondary} />
          </svg>
          <svg className="absolute bottom-0 left-0 h-64 opacity-10" viewBox="0 0 200 200">
            <path d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0Z" fill={colors.secondary} />
          </svg>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 text.primary"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Financial Solutions
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Get customized loan products with competitive rates and flexible repayment options
              </p>
              <div className="flex flex-row  gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 4px 12px ${colors.secondary}80` }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 px-5 py-3 rounded-full font-medium text-center"
                  style={{ backgroundColor: colors.secondary }}
                >
                  Apply Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full font-medium border-2 border-white  bg-white text.primary"
                >
                  Contact Advisor
                </motion.button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-1/2 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Financial solutions"
                className="w-full h-auto   rounded-xl shadow-2xl"
                 style={{ border: `3px solid ${colors.secondary}` }}
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl"
                style={{ border: `3px solid ${colors.secondary}` }}
              >
                <div className="text-sm font-bold" style={{ color: colors.primary }}>
                  Approval in 24 Hours!
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="sticky top-0 z-50 bg-white shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-3">
            <div className="text-2xl font-bold mb-4 md:mb-0" style={{ color: colors.primary }}>
              Finance<span style={{ color: colors.secondary }}>Hub</span>
            </div>
            
            <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1 py-2">
                {topics.map((topic) => (
                  <motion.button
                    key={topic}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTopic(topic)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      activeTopic === topic
                        ? 'text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={{
                      backgroundColor: activeTopic === topic ? colors.primary : 'transparent'
                    }}
                  >
                    {topic}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTopic}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Grid with Overlay Content */}
            <div className="grid grid-cols-12 gap-4 mb-8">
              {contentData[activeTopic].images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative h-80 group ${
                    image.cols === 8 ? 'col-span-12 md:col-span-8' : 'col-span-6 md:col-span-4'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {activeTopic}
                      </h3>
                      {index === 0 && (
                        <ul className="text-white">
                          {contentData[activeTopic].content.map((item, i) => (
                            <motion.li 
                              key={i}
                              initial={{ x: -10 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-start mb-1"
                            >
                              <span className="text-[#A47148] mr-2">•</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                      {index === 0 && (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-3 px-4 py-2 rounded text-sm font-medium"
                          style={{ backgroundColor: colors.secondary }}
                        >
                          {contentData[activeTopic].cta}
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Vectors */}
      <div className="fixed -bottom-20 -left-20 -z-10 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M150 0C232.843 0 300 67.1573 300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0Z" fill={colors.primary} />
        </svg>
      </div>
      <div className="fixed -top-20 -right-20 -z-10 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M150 0C232.843 0 300 67.1573 300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0Z" fill={colors.secondary} />
        </svg>
      </div>
    </div>
  );
};

export default BlogCard;