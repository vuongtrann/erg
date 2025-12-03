
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Facebook, Youtube } from 'lucide-react';
import { NAV_ITEMS } from '@/data/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        /* Mobile Styles: Luôn cố định nền trắng, shadow nhẹ, có border để tách biệt nội dung */
        bg-white border-b border-gray-100 shadow-sm py-3
        /* Desktop Styles: Ghi đè style mobile, áp dụng logic scroll */
        lg:border-none
        ${isScrolled
          ? 'lg:bg-white lg:shadow-md lg:py-2'
          : 'lg:bg-white/95 lg:backdrop-blur-sm lg:shadow-none lg:py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Top bar (Chỉ hiện trên Desktop khi chưa cuộn) */}
          <div className={`hidden lg:flex justify-between items-center text-sm text-gray-600 mb-2 border-b border-gray-100 pb-2 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden mb-0 pb-0' : 'opacity-100'}`}>
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><Phone size={14} /> Hotline: 0766.144.888</span>
              <span>Email: info.eduerg@gmail.com</span>
            </div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/eduriseerg" className="hover:text-blue-600 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><Youtube size={16} /></a>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex-shrink-0">
                <Image 
                  src="/erg.webp" 
                  alt="ERG Logo" 
                  width={80} 
                  height={36} 
                  className="object-contain w-auto h-[36px] md:h-[40px]" 
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-blue-900 leading-none">ERG</h1>
                <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wider">EDUCATION SYSTEM</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-base font-medium transition-colors hover:text-blue-600 ${
                      isActive ? 'text-blue-600' : 'text-slate-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-orange-500/30">
                Đăng ký ngay
              </button>
            </nav>

            
            <button
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto border-t border-gray-100">
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-lg font-medium py-2 border-b border-gray-100 ${
                    isActive ? 'text-blue-600 border-blue-100' : 'text-slate-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <button className="mt-4 bg-orange-500 text-white py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform">
              Đăng ký tư vấn
            </button>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Liên hệ với chúng tôi</p>
              <div className="flex gap-4">
                 <a href="#" className="text-blue-600"><Facebook size={24} /></a>
                 <a href="#" className="text-red-600"><Youtube size={24} /></a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Overlay background */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
