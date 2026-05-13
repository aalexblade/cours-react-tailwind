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
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 border border-coffee-dark/5 rounded-2xl bg-cream/10 hover:bg-cream/20 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-coffee-light/10 text-coffee-medium mb-6">
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-coffee-dark mb-4">
              {feature.title}
            </h3>
            <p className="text-coffee-medium leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
