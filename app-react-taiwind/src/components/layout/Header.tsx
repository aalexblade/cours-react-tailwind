import React, { FC, useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        isScrolled
          ? "bg-[#fdfbf7]/90 backdrop-blur-md shadow-xs py-4 border-b border-[#0d0c0b]/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
       
        <a 
          href="#hero" 
          className={`flex items-center gap-2.5 font-serif font-bold text-xl tracking-tight transition-colors duration-500 ${
            isScrolled ? "text-[#0d0c0b]" : "text-[#F5F2ED]"
          }`}
        >
          <Coffee size={22} className="text-[#c49a6c]" />
          <span>401 <span className="font-sans font-light text-xs tracking-widest uppercase opacity-60">Kyiv</span></span>
        </a>

   
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-500 relative group ${
                isScrolled 
                  ? "text-[#0d0c0b]/80 hover:text-[#0d0c0b]" 
                  : "text-[#F5F2ED] hover:text-[#c49a6c]" 
              }`}
            >
              {link.name}
            
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isScrolled ? "bg-[#0d0c0b]" : "bg-[#c49a6c]"
              }`} />
            </a>
          ))}
        </nav>

        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-1 transition-colors duration-500 ${
            isScrolled ? "text-[#0d0c0b]" : "text-[#F5F2ED]"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

  
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0d0c0b] border-t border-white/5 py-6 px-6 flex flex-col gap-5 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#F5F2ED] text-sm font-medium uppercase tracking-widest py-2 border-b border-white/5 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;