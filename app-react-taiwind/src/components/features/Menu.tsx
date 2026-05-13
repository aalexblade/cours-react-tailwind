import React, { FC } from "react";
import { motion } from "framer-motion";
import { coffeeMenu } from "../../data/coffee-data";

export const Menu: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="menu" className="py-24 px-6 bg-cream/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-coffee-dark text-center mb-16"
        >
          Our Coffee Selection
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
        >
          {coffeeMenu.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="group">
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-xl font-serif font-bold text-coffee-dark whitespace-nowrap group-hover:text-coffee-medium transition-colors">
                  {item.name}
                </h3>
                <div className="flex-1 border-b-2 border-dotted border-coffee-light/40 mb-1" />
                <span className="text-lg font-bold text-coffee-medium">
                  {item.price} ₴
                </span>
              </div>
              <p className="text-coffee-medium/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-coffee-medium italic">
            * All prices are in Ukrainian Hryvnia (₴)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
