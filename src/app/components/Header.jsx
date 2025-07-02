"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  let timeoutId;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close search when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setLoansDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setLoansDropdownOpen(false);
    }, 500);
  };

  const navLinkStyle =
    "relative group text-[#3a251a] block hover:text-[#b7603d] transition-colors duration-300";
  const underline =
    "absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transform bg-[#b7603d] transition-all duration-300";

  const mobileNavLinkStyle = 
    "relative group text-[#3a251a] block py-3 px-4 hover:bg-[#f8f1ee] rounded-lg transition-all duration-300";

  const loansItems = [
    { label: "Commercial Vehicle Loan", href: "/loans/commercial-vehicle" },
    { label: "Car Loan", href: "/loans/car" },
    { label: "Tractor Loan", href: "/loans/tractor" },
    { label: "Construction Equipment Loan", href: "/loans/construction-equipment" },
    { label: "Two Wheeler Loan", href: "/loans/two-wheeler" },
    { label: "Secured Business Loan", href: "/loans/business" },
    { label: "Home Renovation - Mortgage Loan", href: "/loans/home-renovation" }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#fffdfd] text-[#3a251a] shadow-md transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="relative group">
            <span className="block transform transition-transform duration-500 group-hover:scale-105">
              FINANCE APP
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-[#b7603d] transition-all duration-500"></span>
          </Link>
        </div>

        <nav className="hidden lg:flex text-sm font-semibold items-center">
          <div className="flex space-x-8">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button className={`${navLinkStyle} flex items-center`}>
                LOANS
                <svg 
                  className="ml-1 w-4 h-4 transition-transform duration-300 transform group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={underline}></span>
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-300 ${loansDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {loansItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#3a251a] hover:bg-[#f8f1ee] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "ABOUT US", href: "/aboutus" },
              { label: "INVERSTORE", href: "/investors" },
              { label: "MEDIA CENTRE", href: "/media-center" },
              { label: "CAREER", href: "/career" },
              { label: "BLOG", href: "/blog" },
              { label: "CONTACT US", href: "/contact" }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href} 
                className={navLinkStyle}
              >
                {item.label}
                <span className={underline}></span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          {/* Search form that appears inline when searchOpen is true */}
          {searchOpen ? (
            <form 
              ref={searchRef}
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-white rounded-md border border-gray-300 overflow-hidden transition-all duration-300"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-4 py-1 focus:outline-none w-48"
                autoFocus
              />
              <button
                type="submit"
                className="px-3 py-1 bg-[#f8f1ee] text-[#3a251a] hover:bg-[#e8d9d3] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          ) : (
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[#3a251a] hover:text-[#b7603d] transition-colors duration-300"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}

          <Link 
            href="/apply-now" 
            className="bg-[#b7603d] text-white px-4 py-2  font-semibold hover:bg-[#9c4f32] transition-colors duration-300 whitespace-nowrap"
          >
            APPLY NOW
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#3a251a] focus:outline-none transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`absolute block w-full h-0.5 bg-current transform transition duration-500 ${isOpen ? 'rotate-45 top-1/2' : 'top-0'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-current transform transition duration-500 ${isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-current transform transition duration-500 ${isOpen ? '-rotate-45 top-1/2' : 'bottom-0'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav className="px-4 pb-4 text-sm font-bold space-y-0">
          <div className="flex items-center space-x-4 mb-4">
            <form onSubmit={handleSearchSubmit} className="flex-1 flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#b7603d]"
              />
              <button
                type="submit"
                className="bg-[#b7603d] text-white px-4 py-2 rounded-r-md hover:bg-[#9c4f32] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          <Link 
            href="/apply-now" 
            className={`${mobileNavLinkStyle} w-full text-center rounded-2xl mb-4`}
            onClick={() => setIsOpen(false)}
          >
            APPLY NOW
          </Link>

          <div className="border-b border-gray-100">
            <button 
              onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
              className={`${mobileNavLinkStyle} w-full flex justify-between items-center`}
            >
              <span>LOANS</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${loansDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {loansDropdownOpen && (
              <div className="pl-4">
                {loansItems.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    className={`${mobileNavLinkStyle} pl-4`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "ABOUT US", href: "/aboutus" },
            { label: "INVERSTORE", href: "/investors" },
            { label: "MEDIA CENTRE", href: "/media-center" },
            { label: "CAREER", href: "/career" },
            { label: "BLOG", href: "/blog" },
            { label: "CONTACT US", href: "/contact-us" }
          ].map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href} 
              className={mobileNavLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              <div className="relative inline-block">
                <span className="block transform transition-transform duration-300 group-hover:translate-x-0">
                  {item.label}
                </span>
                <span className={`${underline} group-hover:w-full`}></span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}