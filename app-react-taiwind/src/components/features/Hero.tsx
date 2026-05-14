import React, { FC } from "react";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export const Hero: FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-cream bg-radial-at-t from-white/60 to-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-coffee-medium/10 rounded-2xl text-coffee-medium">
              <Coffee size={32} />
            </div>
            <span className="text-coffee-medium font-bold uppercase tracking-widest text-sm">
              Premium Roast
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold text-coffee-dark leading-tight tracking-tight drop-shadow-sm">
            Artisanal Coffee in <span className="text-coffee-light">Kyiv</span>
          </h1>
          
          <p className="text-xl text-coffee-medium max-w-2xl leading-relaxed">
            Experience the art of the perfect pour. Our beans are micro-roasted in small batches 
            right here in the city, preserving the delicate aromatics and bold character 
            of every single-origin harvest.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#menu" aria-label="View our coffee menu">
                <Button variant="primary" className="px-8 py-4 text-lg">
                  View Menu
                </Button>
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#features" aria-label="Read our story and learn about our process">
                <Button variant="outline" className="px-8 py-4 text-lg hover:bg-coffee-dark/5 hover:text-coffee-dark border-coffee-dark/20">
                  Our Story
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Featured Image with Decoration */}
        <div className="relative flex justify-center items-center">
          {/* Decorative Blob */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 md:w-96 md:h-96 bg-coffee-light/10 rounded-full blur-3xl -z-10"
          />
          
          <motion.img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop" 
            alt="Artisanal Latte Art"
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white/20 relative z-10"
          />

          {/* Floating Bean Element (Visual Polish) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-24 text-coffee-medium/5 hidden md:block"
          >
            <Coffee size={120} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
