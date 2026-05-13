import React, { FC, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Alternative way to handle background change if you want more control with Framer Motion
  // const backgroundColor = useTransform(
  //   scrollY,
  //   [0, 50],
  //   ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  // );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
    { name: "Location", href: "#location" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a 
          href="#hero" 
          className="text-2xl font-serif font-bold text-coffee-dark tracking-wider"
        >
          COFFEE HOUSE
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-coffee-dark font-medium hover:text-coffee-light transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Button variant="primary" className="hidden sm:block">
            Order Now
          </Button>
          {/* Mobile menu toggle could go here */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
