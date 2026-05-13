import React, { FC } from "react";
import { MapPin, Clock } from "lucide-react";
import { shopLocation } from "../../data/coffee-data";

export const Location: FC = () => {
  return (
    <section id="location" className="py-20 px-6 bg-coffee-dark text-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif font-bold">Visit Our Shop</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-coffee-light mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <p className="text-cream/80 leading-relaxed">
                  {shopLocation.address}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-coffee-light mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Working Hours</h3>
                <ul className="space-y-1 text-cream/80">
                  {shopLocation.workingHours.map((slot, index) => (
                    <li key={index} className="flex justify-between gap-8">
                      <span>{slot.days}</span>
                      <span className="font-medium text-cream">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full aspect-square lg:aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
          <iframe
            src={shopLocation.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location Map"
            className="grayscale invert contrast-125 opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
