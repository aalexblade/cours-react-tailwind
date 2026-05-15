import React, { FC, useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { coffeeMenu } from "../../data/coffee-data";

// Type definitions for interactive tabs
type MenuCategory = "espresso" | "slow" | "desserts";

export const Menu: FC = () => {
  // State to track currently active menu category
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("espresso");

  // Navigation tabs config with premium naming convention
  const categories = [
    { id: "espresso" as MenuCategory, name: "Espresso Bar" },
    { id: "slow" as MenuCategory, name: "Slow Bar / Filter" },
    { id: "desserts" as MenuCategory, name: "Desserts & Pastry" },
  ];

  // Highly efficient direct category filtering
  const filteredMenu = useMemo(() => {
    return coffeeMenu.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Motion grid stagger configuration
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  // Sophisticated magazine-style fade up with subtle blur reveal
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      filter: "blur(4px)",
      transition: { duration: 0.3 } 
    }
  };

  return (
    <section 
      id="menu" 
      className="py-32 px-6 md:px-12 w-full text-[#0d0c0b] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#c49a6c] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
            Carefully Selected
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0d0c0b]"
          >
            Our Coffee Selection
          </motion.h2>
          <div className="w-16 h-px bg-[#c49a6c]/40 mt-6" />
        </div>

        {/* Premium Interactive Tabs */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-20 border-b border-[#0d0c0b]/5 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative py-2 px-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 cursor-pointer"
            >
              <span className={activeCategory === cat.id ? "text-[#0d0c0b]" : "text-[#0d0c0b]/40 hover:text-[#0d0c0b]/70"}>
                {cat.name}
              </span>
              
              {/* LayoutId springs the active line smoothly between tab triggers */}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeMenuTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#c49a6c]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Items Grid Layout */}
        <div className="min-h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Key enforces animation re-trigger upon tab switches
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {filteredMenu.length > 0 ? (
                filteredMenu.map((item) => (
                  <motion.div 
                    key={item.id} 
                    variants={itemVariants} 
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      {/* Name, Dotted Border Divider, and Pricing */}
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="text-lg font-serif font-bold text-[#0d0c0b] whitespace-nowrap group-hover:text-[#c49a6c] transition-colors duration-300">
                          {item.name}
                        </h3>
                        {/* Elegant European cafe style dotted line divider using Tailwind v4 border standards */}
                        <div className="flex-1 border-b border-dotted border-[#0d0c0b]/15 mb-1" />
                        <span className="text-base font-bold text-[#0d0c0b]/80 group-hover:text-[#0d0c0b] transition-colors duration-300">
                          {item.price} ₴
                        </span>
                      </div>
                      
                      {/* Item Flavor Profile / Description */}
                      <p className="text-[#0d0c0b]/50 text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                // Fallback state if a category turns up empty
                <motion.p variants={itemVariants} className="text-sm italic text-[#0d0c0b]/40 col-span-full text-center py-12">
                  Brewing something new for this category soon.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Menu Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center border-t border-[#0d0c0b]/5 pt-8"
        >
          <p className="text-[11px] uppercase tracking-widest text-[#0d0c0b]/30 font-medium">
            * All prices are in Ukrainian Hryvnia (₴) • Freshly crafted in Kyiv
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Menu;