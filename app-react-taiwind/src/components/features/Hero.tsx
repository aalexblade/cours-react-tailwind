import React, { FC } from "react";
import { Coffee } from "lucide-react";
import Button from "../ui/Button";

export const Hero: FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-cream bg-radial-at-t from-white/60 to-transparent">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h1 className="text-6xl font-serif font-bold text-coffee-dark leading-tight tracking-tight flex items-center gap-4">
          <Coffee size={48} className="text-coffee-medium" />
          Artisanal Coffee in Kyiv
        </h1>
        
        <p className="text-xl text-coffee-medium max-w-2xl leading-relaxed">
          Experience the art of the perfect pour. Our beans are micro-roasted in small batches 
          right here in the city, preserving the delicate aromatics and bold character 
          of every single-origin harvest.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary">
            View Menu
          </Button>
          <Button variant="outline">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
