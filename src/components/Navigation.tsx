"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-gold/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div className="relative">
                <img
                  src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
                  alt="Shobha Beauty Studio & Nails Logo"
                  className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1 group-hover:bg-white/20 transition-all"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-lg items-center justify-center">
                  <span className="text-black font-bold text-xl font-playfair">S</span>
                </div>
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="font-playfair font-bold text-xl text-white group-hover:text-gold transition-colors">
                  Shobha Beauty Studio
                </span>
                <span className="font-inter text-sm text-gold -mt-1">
                  & Nails • Since 2011
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-gold bg-gold/10'
                      : 'text-white hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+97143591532"
                className="text-gold hover:text-white font-medium transition-colors flex items-center space-x-2"
              >
                <span>📞</span>
                <span>+971 4 359 1532</span>
              </a>
              <Link
                href="#book"
                className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-gold bg-gold/10'
                      : 'text-white hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:+97143591532"
                  className="flex items-center space-x-2 px-4 py-2 text-gold font-medium"
                  onClick={closeMenu}
                >
                  <span>📞</span>
                  <span>+971 4 359 1532</span>
                </a>
                <div className="px-4">
                  <Link
                    href="#book"
                    onClick={closeMenu}
                    className="block bg-gold text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-yellow-500 transition-all duration-300"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;