import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='pb-12'>
    <nav className="bg-[#111111] shadow-lg w-full z-50  fixed top-0 left-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="lg:text-xl md:text-lg text-sm font-bold text-gray-300">
              {[...'PORTFOLIO'].map((letter, index) => (
                <span
                  key={index}
                  className={`px-1 bg-pink-400 rounded-full animate-[ping_${1.9 + index * 0.1}s_linear_infinite]`}
                >
                  {letter}
                </span>
              ))}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ">
         
            <Link to='/' className="text-pink-400 hover:text-pink-400">Home</Link>
            <Link to ="/AboutMe" className="text-gray-300 hover:text-pink-400">About Me</Link>
            <Link to ="/Skills" className="text-gray-300 hover:text-pink-400">Skills</Link>
            <Link to ="/WorkHistory" className="text-gray-300 hover:text-pink-400">Work History</Link>
            <Link to ="/Resume" className="text-gray-300 hover:text-pink-400">Resume</Link>
            <Link to ="/Contact" className="text-gray-300 hover:text-pink-400">Contact</Link>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-pink-400 hover:text-pink-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute inset-0 bg-[#111111] bg-opacity-50 z-50"
          onClick={(e) => e.target === e.currentTarget && toggleMobileMenu()}
        >
          <div className="fixed inset-y-0 left-0 bg-[#111111] w-64 p-6 transform transition-transform">
            <button
              onClick={toggleMobileMenu}
              className="text-pink-400 hover:text-pink-600 focus:outline-none mb-4"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-4">
            <Link to='/' className="block text-pink-400 hover:text-pink-400">Home</Link>
            <Link to ="/AboutMe" className="block text-gray-300 hover:text-pink-400">About Me</Link>
            <Link to ="/Skills" className="block text-gray-300 hover:text-pink-400">Skills</Link>
            <Link to ="/WorkHistory" className="block text-gray-300 hover:text-pink-400">Work History</Link>
            <Link to ="/Resume" className="block text-gray-300 hover:text-pink-400">Resume</Link>
            <Link to ="/Contact" className="block text-gray-300 hover:text-pink-400">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default NavBar;