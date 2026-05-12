import React, { FC } from "react";
import { coffeeMenu } from "../../data/coffee-data";

export const Menu: FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif font-bold text-coffee-dark text-center mb-12">
        Our Menu
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffeeMenu.map((item) => (
          <article 
            key={item.id}
            className="group relative bg-white/5 backdrop-blur-sm border border-coffee-dark/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold text-coffee-dark leading-tight">
                  {item.name}
                </h3>
                <span className="text-lg font-semibold text-coffee-medium whitespace-nowrap">
                  {item.price} ₴
                </span>
              </div>
              
              <p className="text-coffee-medium/80 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-coffee-light/20 text-coffee-dark text-xs font-medium uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;
