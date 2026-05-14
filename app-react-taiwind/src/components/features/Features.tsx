import React, { FC } from "react";
import { Bean, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Bean,
    title: "Fresh Roasting",
    description: "Our beans are micro-roasted daily to ensure peak flavor and aroma in every cup.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Quality coffee doesn't have to be slow. We've optimized our workflow for your busy morning.",
  },
  {
    icon: Heart,
    title: "Soulful Atmosphere",
    description: "A cozy space designed for connection, focus, or simply a moment of peace.",
  },
];

export const Features: FC = () => {
  return (
    <section id="features" className="py-32 px-6 bg-[#FDFCFB]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-12 bg-transparent border border-coffee-dark/10 rounded-[2rem] hover:bg-coffee-light/5 transition-all duration-500"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-coffee-medium/10 text-coffee-medium mb-8 group-hover:scale-110 transition-transform duration-500">
              <feature.icon size={36} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-coffee-dark mb-4">
              {feature.title}
            </h3>
            <p className="text-coffee-dark/80 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
