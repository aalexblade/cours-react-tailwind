import React, { FC } from "react";
import { coffeeMenu } from "../../data/coffee-data";

export const Menu: FC = () => {
  return (
    <section className="py-24 px-6 bg-cream/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-coffee-dark text-center mb-16">
          Our Coffee Selection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {coffeeMenu.map((item) => (
            <div key={item.id} className="group">
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-xl font-serif font-bold text-coffee-dark whitespace-nowrap">
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
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-coffee-medium italic">
            * All prices are in Ukrainian Hryvnia (₴)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
