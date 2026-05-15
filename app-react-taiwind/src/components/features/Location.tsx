import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { shopLocation } from "../../data/coffee-data";

// Motion fade-in container variants for synchronized layout reveal
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// Subtle blur-in slide effect matching the global premium editorial design
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] as const } 
  }
};

export const Location: FC = () => {
  return (
    <section 
      id="location" 
      className="py-32 px-6 md:px-12 w-full bg-coffee-dark rounded-3xl text-[#F5F2ED] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: Editorial textual info block (5 spans out of 12) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 space-y-10"
        >
          {/* Header group */}
          <div className="space-y-4">
            <motion.span variants={itemVariants} className="text-[#c49a6c] uppercase tracking-[0.4em] text-[10px] font-bold block">
              Locate Us
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight">
              Visit Our Shop
            </motion.h2>
            <motion.div variants={itemVariants} className="w-16 h-px bg-[#c49a6c]/40 pt-2" />
          </div>
          
          {/* Information items stack */}
          <div className="space-y-8">
            
            {/* Address subsection */}
            <motion.div variants={itemVariants} className="flex items-start gap-5 group">
              <div className="p-3 bg-white-200 border border-white/10 rounded-sm text-[#c49a6c] shrink-0 transition-colors duration-300 group-hover:border-[#c49a6c]/30">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F5F2ED]/40">
                  Address
                </h3>
                <p className="text-base font-light text-[#F5F2ED]/80 leading-relaxed max-w-sm transition-colors duration-300 group-hover:text-[#F5F2ED]">
                  {shopLocation.address}
                </p>
              </div>
            </motion.div>
            
            {/* Working hours subsection */}
            <motion.div variants={itemVariants} className="flex items-start gap-5 group">
              <div className="p-3 bg-white-200 border border-white/10 rounded-sm text-[#c49a6c] shrink-0 transition-colors duration-300 group-hover:border-[#c49a6c]/30">
                <Clock size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 w-full max-w-xs">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F5F2ED]/40">
                  Working Hours
                </h3>
                <ul className="space-y-2 text-sm font-light text-[#F5F2ED]/70">
                  {shopLocation.workingHours.map((slot, index) => (
                    <li key={index} className="space-y-1">
                      <div className="flex justify-between items-baseline gap-4">
                        <span className="transition-colors duration-300 group-hover:text-[#F5F2ED]/90">{slot.days}</span>
                        {/* Elegant dotted connector line */}
                        <div className="flex-1 border-b border-dotted border-white/10" />
                        <span className="font-medium text-[#F5F2ED]">{slot.hours}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </motion.div>
        
        {/* RIGHT COLUMN: Premium map wrapper block (7 spans out of 12) */}
        {/* RIGHT COLUMN: Premium map wrapper block (7 spans out of 12) */}
        <motion.div 
          initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
          // CHANGED: Fixed lg:aspect-[4/3] to clean Tailwind v4 lg:aspect-4/3 syntax
          className="lg:col-span-7 w-full aspect-square md:aspect-video lg:aspect-4/3 xl:aspect-video rounded-md overflow-hidden border border-white/10 shadow-xs relative group"
        >
          {/* Subtle dark overlay layout to seamlessly embed maps into dark mode */}
          {/* CHANGED: Refactored bg-gradient-to-t to new Tailwind v4 bg-linear-to-t standard */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/20 to-transparent pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-40" />
          
          <iframe
            src={shopLocation.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kaffe 401 Kyiv Map Location"
            className="grayscale invert opacity-65 contrast-110 saturate-50 transition-all duration-700 group-hover:opacity-85 group-hover:contrast-100"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Location;