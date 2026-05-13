import React, { FC } from "react";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";
import Button from "../ui/Button";

export const Footer: FC = () => {
  return (
    <footer className="bg-coffee-dark text-cream/70 py-16 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-cream tracking-wider">
              COFFEE HOUSE
            </h3>
            <p className="leading-relaxed">
              Crafting exceptional coffee experiences since 2018. We source only the finest ethical beans, roasted in small batches for peak flavor.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cream">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-cream transition-colors">Menu Selection</a>
              </li>
              <li>
                <a href="#features" className="hover:text-cream transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#location" className="hover:text-cream transition-colors">Visit Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-cream transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cream">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-cream/10 hover:bg-cream/10 hover:text-cream transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full border border-cream/10 hover:bg-cream/10 hover:text-cream transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full border border-cream/10 hover:bg-cream/10 hover:text-cream transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cream">Newsletter</h4>
            <p className="text-sm">Stay updated with our latest roasts and events.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-cream/10 rounded-lg px-4 py-2 text-cream focus:outline-none focus:border-coffee-light/50 flex-1 min-w-0"
              />
              <Button variant="primary" className="px-4 py-2">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Coffee House Kyiv. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
