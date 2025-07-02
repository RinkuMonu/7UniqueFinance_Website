"use client"
import { useState, useEffect } from 'react';
import { 
  FaTractor, 
  FaTools, 
  FaMotorcycle, 
  FaBusinessTime, 
  FaHome, 
  FaTruck, 
  FaCar,
  FaChevronLeft, 
  FaChevronRight,
  FaFileSignature,
  FaInfoCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const loanItems = [
  { 
    icon: <FaTractor size={48} className="text-[#A47148]" />, 
    title: 'Tractor Loan',
    
  },
  { 
    icon: <FaTools size={48} className="text-[#A47148]" />, 
    title: 'Construction Equipment Loan',
   
  },
  { 
    icon: <FaMotorcycle size={48} className="text-[#A47148]" />, 
    title: 'Two Wheeler Loan',
    
  },
  { 
    icon: <FaBusinessTime size={48} className="text-[#A47148]" />, 
    title: 'Secured Business Loan',
   
  },
  { 
    icon: <FaHome size={48} className="text-[#A47148]" />, 
    title: 'Home Renovation Loan',
    
  },
  { 
    icon: <FaTruck size={48} className="text-[#A47148]" />, 
    title: 'Commercial Vehicle Loan',
    
  },
  { 
    icon: <FaCar size={48} className="text-[#A47148]" />, 
    title: 'Car Loan',
    
  },
];

export default function LoanSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(5);

  // Update number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(5);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (loanItems.length - visibleCards + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + (loanItems.length - visibleCards + 1)) % (loanItems.length - visibleCards + 1)
    );
  };

  // Auto-slide effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, visibleCards]);

  let visibleItems = loanItems.slice(currentIndex, currentIndex + visibleCards);

  if (visibleItems.length < visibleCards) {
    const remaining = visibleCards - visibleItems.length;
    visibleItems = [...visibleItems, ...loanItems.slice(0, remaining)];
  }

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <div className="relative w-full px-1 py-6 md:py-12 bg-gradient-to-b from-[#ffffff] to-white font-['Montserrat']" 
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex transition-transform duration-300 px-2 sm:px-4 md:px-8 lg:px-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {visibleItems.map((item, index) => (
            <motion.div 
              key={`${item.title}-${index}`}
              className={`px-2 sm:px-3 mb-6 flex-shrink-0 ${
                visibleCards === 5 ? 'w-1/5' : 
                visibleCards === 3 ? 'w-1/3' : 
                visibleCards === 2 ? 'w-1/2' :
                'w-full'
              }`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className={`group relative bg-white rounded-xl shadow-lg p-2 sm:p-6 h-48 flex flex-col items-center justify-center border-2 border-transparent  transition-all duration-300 overflow-hidden ${
                activeCard === index ? '!border-[#A47148]' : ''
              }`}>
                {/* Card background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1D3557] rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#A47148] rounded-full -ml-12 -mb-12"></div>
                </div>
                
                <div className="mb-3 sm:mb-4 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-center text-[#1D3557] mb-1 sm:mb-2 relative z-10">
                  {item.title}
                </h3>
               
                
                {/* Hover Links */}
                <div className={`absolute inset-0 bg-white/90 rounded-xl flex flex-col items-center justify-center ${
                  activeCard === index ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 z-20`}>
                  <motion.button 
                    className="mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-2 bg-[#1D3557] text-white rounded-lg hover:bg-[#142a47] transition-colors flex items-center gap-2 text-xs sm:text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFileSignature />
                    Apply Now
                  </motion.button>
                  <motion.button 
                    className="px-3 sm:px-4 py-1 sm:py-2 text-[#1D3557] border border-[#1D3557] rounded-lg hover:bg-[#1D3557]/10 transition-colors flex items-center gap-2 text-xs sm:text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInfoCircle />
                    Know More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Navigation Arrows */}
        <motion.button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 lg:p-3 hover:bg-[#1D3557] hover:text-white transition-colors"
          aria-label="Previous"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-[#1D3557] hover:text-white" />
        </motion.button>
        
        <motion.button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 lg:p-3 hover:bg-[#1D3557] hover:text-white transition-colors"
          aria-label="Next"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#1D3557] hover:text-white" />
        </motion.button>
      </div>
    </div>
  );
}