"use client";
import React, { useState } from 'react';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaUserTie, 
  FaChartLine, 
  FaHeart, 
  FaShieldAlt,
  FaStar,
  FaHandsHelping,
  FaMedal,
  FaCheck,
  FaArrowRight,
  FaFilter,
  FaTimes
} from 'react-icons/fa';

const CarrerCard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filters, setFilters] = useState({
    function: '',
    location: '',
    skills: ''
  });
  
  // Mock job data
  const jobOpenings = [
    {
      id: 1,
      title: 'Asst Manager/Deputy Manager',
      date: '2024-10-03',
      location: 'Jaipur Head Office',
      department: 'Infra',
      experience: '4 to 7 Years of Experience',
      requirements: [
        'Any Graduate',
        'Manage multiple branches',
        'Experience of property sourcing and project execution',
        'Ready for travelling as per project requirements',
        'Should have own car for travelling',
        'Banking, construction experience'
      ],
      industry: 'NBFC/Bank/Insurance/Interior Contractors'
    },
    {
      id: 2,
      title: 'CREDIT-MIS',
      date: '2024-10-03',
      location: 'Jaipur Head Office',
      department: 'CREDIT',
      experience: '2 to 5 Years of Experience',
      requirements: [
        'Any Graduate',
        'MS Excel, PPT',
        'Good Communication Skills',
        'Specialized Knowledge - MIS, Advanced Excel'
      ],
      industry: 'Bank/ NBFC'
    },
    {
      id: 3,
      title: 'Officer/SR Officer',
      location: 'Jaipur Head Office',
      department: 'Infra',
      experience: '1 to 3 Years of Experience',
      requirements: [
        'Any Graduate',
        'Good written and oral communication',
        'Good Command In Excel',
        'Knowledge of infra and admin related activities',
        'Knowledge of NBFC regulations'
      ],
      industry: 'NBFC/Banking/Insurance'
    },
    {
      id: 4,
      title: 'Officer',
      date: '2024-10-03',
      location: 'Jaipur Head Office',
      department: 'Infra',
      experience: '1 to 3 Years of Experience',
      requirements: [
        'Any Graduate',
        'Good written and oral communication',
        'Good Command In Excel',
        'Knowledge of NBFC regulations and guidelines'
      ],
      industry: 'NBFC, Banking, Insurance'
    },
    {
      id: 5,
      title: 'Asst Manager/Deputy Manager – Talent Acquisition',
      date: '2024-10-03',
      location: 'Jaipur Head Office',
      department: 'HR',
      experience: '4+ years of experience',
      requirements: [
        'MBA HR',
        'Excellent verbal and written communication skills',
        'Excellent interpersonal, negotiation, and conflict resolution skills',
        'Excellent organizational skills and attention to detail',
        'Experience in NBFC/BFSI hiring preferred'
      ],
      industry: 'NBFC, Bank'
    },
    {
      id: 6,
      title: 'Tele Caller',
      date: '2024-10-03',
      location: 'Jaipur Head Office',
      department: 'Tele sales',
      experience: '1 to 3 Years of Experience',
      requirements: [
        'Any Graduate',
        'Good written and oral communication',
        'Strong inter personal skills'
      ],
      industry: 'Customer Service'
    }
  ];

  const companyValues = [
    {
      id: 1,
      title: 'Safety',
      description: 'Safety of highest grade in product manufacturing & our workplace environment',
      icon: <FaShieldAlt className="text-4xl" />
    },
    {
      id: 2,
      title: 'Quality',
      description: 'Quality in our products & services by striving to provide defect-free products & services',
      icon: <FaStar className="text-4xl" />
    },
    {
      id: 3,
      title: 'Responsibility',
      description: 'Responsibility for our words and actions and their consequences',
      icon: <FaHandsHelping className="text-4xl" />
    },
    {
      id: 4,
      title: 'Compassion',
      description: 'Compassion in our relationship with our fellow employees',
      icon: <FaHeart className="text-4xl" />
    }
  ];

  const whySKFinance = [
    {
      id: 1,
      title: 'Growth Opportunities',
      description: 'Opportunities to grow organically within the organization.',
      icon: <FaChartLine className="text-4xl" />
    },
    {
      id: 2,
      title: 'Employee Well-being',
      description: 'Employee well-being is our primary goal.',
      icon: <FaHeart className="text-4xl" />
    },
    {
      id: 3,
      title: 'Expert Mentorship',
      description: 'Skilled team of industry-leading professionals to mentor new talent.',
      icon: <FaUserTie className="text-4xl" />
    },
    {
      id: 4,
      title: 'Performance Incentives',
      description: 'Structured incentive schemes linked to the performance',
      icon: <FaMedal className="text-4xl" />
    }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const resetFilters = () => {
    setFilters({
      function: '',
      location: '',
      skills: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-16 md:py-20  text-white overflow-hidden">
        {/* Animated Vector Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#A47148] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-[#1D3557] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#A47148] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2  text-[#1D3557]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
                Build Your Career with SK Finance
              </h1>
              <p className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed">
                We believe in empowering our people in every way possible, helping them achieve their goals and contributing to the organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="  text-[#1D3557] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center animate-bounce">
                  Explore Opportunities <FaArrowRight className="ml-2" />
                </button>
                <button className="bg-[#1D3557] border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-[#1D3557] transition-colors flex items-center justify-center">
                  Contact HR <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Team working together"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1D3557] to-transparent p-6">
                  <div className="flex items-center">
                    <FaBriefcase className="text-white text-2xl mr-3" />
                    <span className="text-white font-bold">Join Our Growing Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Culture */}
     <section className="py-16 sm:py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Left Side - Image Box */}
      <div className="lg:w-1/2 relative">
        <div className="bg-gray-100 w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Office culture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1D3557] opacity-10"></div>
        </div>
        <div className="absolute -bottom-5 -right-5 bg-[#A47148] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg animate-pulse">
          <div className="text-2xl sm:text-3xl font-medium">Work is Worship</div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-6">
          Our Culture
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
          We create technologically advanced, super-responsive and customer-friendly financial products.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { 
              img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
              title: "Innovation", 
              desc: "Cutting-edge solutions" 
            },
            { 
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
              title: "Collaboration", 
              desc: "Teamwork focused" 
            },
            { 
              img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              title: "Growth", 
              desc: "Continuous learning" 
            },
            { 
              img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
              title: "Support", 
              desc: "Employee well-being" 
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-4 border border-[#1D3557] rounded-lg hover:bg-[#1D3557] hover:text-white transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-10 transition-opacity"
                />
              </div>
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-[#A47148] group-hover:border-white transition-colors">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why SK Finance */}
      <section className="py-16 sm:py-20 bg-[#1D3557] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why SK Finance?</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
              Our Values are at the core of who we are and how we act
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whySKFinance.map((item) => (
              <div 
                key={item.id}
                className="bg-white text-[#1D3557] rounded-xl shadow-lg p-6 sm:p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center"
              >
                <div className="flex justify-center mb-4 animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {companyValues.map((value) => (
              <div 
                key={value.id}
                className="border-2 border-[#1D3557] rounded-xl p-6 sm:p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg text-center"
              >
                <div className="flex justify-center text-[#A47148] mb-4 animate-bounce">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D3557] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4">Current Openings</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow your career with us
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8 sm:mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1D3557] flex items-center">
                <FaFilter className="mr-2" /> Filter Jobs
              </h3>
              <button 
                onClick={resetFilters}
                className="text-sm text-[#A47148] hover:underline flex items-center"
              >
                <FaTimes className="mr-1" /> Reset
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Job Function</label>
                <div className="relative">
                  <select 
                    name="function"
                    value={filters.function}
                    onChange={handleFilterChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D3557] focus:border-[#1D3557] appearance-none"
                  >
                    <option value="">All Functions</option>
                    <option value="Infra">Infra</option>
                    <option value="CREDIT">CREDIT</option>
                    <option value="HR">HR</option>
                    <option value="Tele sales">Tele sales</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaBriefcase className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Location</label>
                <div className="relative">
                  <select 
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D3557] focus:border-[#1D3557] appearance-none"
                  >
                    <option value="">All Locations</option>
                    <option value="Jaipur Head Office">Jaipur Head Office</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Skills</label>
                <div className="relative">
                  <select 
                    name="skills"
                    value={filters.skills}
                    onChange={handleFilterChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D3557] focus:border-[#1D3557] appearance-none"
                  >
                    <option value="">All Skills</option>
                    <option value="Excel">Excel</option>
                    <option value="Communication">Communication</option>
                    <option value="Project Management">Project Management</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaUserTie className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-end">
                <button 
                  onClick={resetFilters}
                  className="w-full bg-[#1D3557] text-white py-3 rounded-lg font-medium hover:bg-[#14213D] transition-colors flex items-center justify-center"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#A47148] transform transition-all duration-300 hover:shadow-xl group"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1D3557] mb-2 group-hover:text-[#A47148] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className="bg-[] bg-opacity-10 text-[#1D3557] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                          <FaMapMarkerAlt className="mr-1" /> {job.location}
                        </span>
                        <span className="bg-[] bg-opacity-10 text-[#A47148] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                          <FaBriefcase className="mr-1" /> {job.department}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                          <FaUserTie className="mr-1" /> {job.experience}
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#A47148] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-[#8B5A2B] transition-colors mt-4 md:mt-0 flex items-center animate-pulse">
                      Apply Now <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                  
                  <div className="mt-4 sm:mt-6">
                    <h4 className="font-bold text-[#1D3557] mb-2 flex items-center">
                      <FaCheck className="text-[#A47148] mr-2" /> Requirements:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {job.requirements.slice(0, 4).map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#A47148] mr-2">✓</span>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="text-sm text-gray-500 mb-2 sm:mb-0 flex items-center">
                      <FaStar className="mr-2 text-[#A47148]" /> Preferred Industry: <span className="font-medium ml-1">{job.industry}</span>
                    </div>
                    <button className="text-[#1D3557] font-medium hover:underline flex items-center">
                      Read More <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-[#1D3557] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-[#14213D] transition-colors flex items-center justify-center mx-auto animate-bounce">
              View All Opportunities <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}


      {/* Footer */}
    
    </div>
  );
};

export default CarrerCard;