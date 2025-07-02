import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fffaf7] to-[#f7f4f1] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#A47148] mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-[#1D3557] mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Left side - Image */}
          <div className="w-full lg:w-[45%]">
            <div className="relative aspect-[3/4] w-full  overflow-hidden  transform hover:scale-[1.01] transition-all duration-300">
              <Image
                src="/handsome-bearded-businessman-rubbing-hands-having-deal.png"
                alt="SK Finance MD & CEO Rajendra Kumar Setia"
                fill
                className="object-cover"
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 500px"
              />
              <div className="absolute inset-0 "></div>
              <div className="absolute bottom-4 bg-white/50 p-2 rounded-sm left-4 text-[#1D3557]">
                <p className="text-xs sm:text-sm font-light">Rajendra Kumar Setia</p>
                <p className="text-base sm:text-lg font-bold">MD & CEO, SK Finance</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-[55%] text-[#1D3557] mt-6 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 relative inline-block">
              Who we are
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#A47148]"></span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-semibold text-[#A47148]">SK Finance</span> caters to the financial requirements for individuals, businesses and enterprises. 
                With our vast experience of over <span className="font-semibold">30 years</span> as one of leading Non-Banking Finance Company, 
                we are able to create a strong brand recall amongst our customers in the markets where we 
                have a presence.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed">
                Today, we are present across <span className="font-semibold">11 states</span> and <span className="font-semibold">1 union territory</span> through over <span className="font-semibold">579+ branches</span>. 
                We have started our business from the home state of Rajasthan and enhanced our presence in 
                Gujarat, Madhya Pradesh, Punjab, Haryana, Maharashtra, Chhattisgarh, Himachal Pradesh, 
                Uttarakhand, Delhi NCR, Uttar Pradesh and Karnataka.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed font-medium italic text-[#A47148]">
                We provide customized products to meet specific needs through empathy, trust and technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md border-t-4 border-[#A47148] transform hover:scale-105 transition-all duration-300">
                <span className="block text-2xl sm:text-3xl font-bold text-[#1D3557]">11</span>
                <span className="text-xs uppercase tracking-wider text-[#A47148] font-medium">States</span>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md border-t-4 border-[#1D3557] transform hover:scale-105 transition-all duration-300">
                <span className="block text-2xl sm:text-3xl font-bold text-[#1D3557]">1</span>
                <span className="text-xs uppercase tracking-wider text-[#1D3557] font-medium">Union Territory</span>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md border-t-4 border-[#A47148] transform hover:scale-105 transition-all duration-300">
                <span className="block text-2xl sm:text-3xl font-bold text-[#1D3557]">9.3L+</span>
                <span className="text-xs uppercase tracking-wider text-[#A47148] font-medium">Customers</span>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md border-t-4 border-[#1D3557] transform hover:scale-105 transition-all duration-300">
                <span className="block text-2xl sm:text-3xl font-bold text-[#1D3557]">579+</span>
                <span className="text-xs uppercase tracking-wider text-[#1D3557] font-medium">Branches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}