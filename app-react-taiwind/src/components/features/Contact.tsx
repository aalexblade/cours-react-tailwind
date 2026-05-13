import React, { FC, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import { shopLocation } from "../../data/coffee-data";

export const Contact: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-serif font-bold text-coffee-dark mb-4">
              Get in Touch
            </h2>
            <p className="text-coffee-medium leading-relaxed">
              Have questions about our beans, want to book a table, or interested in wholesale? 
              Drop us a message and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-coffee-dark">Opening Hours</h3>
            <div className="space-y-2">
              {shopLocation.workingHours.map((slot, index) => (
                <div key={index} className="flex justify-between items-center max-w-xs text-coffee-medium">
                  <span>{slot.days}</span>
                  <span className="font-semibold text-coffee-dark">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 rounded-3xl border border-coffee-dark/5 shadow-sm relative overflow-hidden">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <CheckCircle2 size={64} className="text-green-600" />
              <h3 className="text-2xl font-bold text-coffee-dark">Message Sent!</h3>
              <p className="text-coffee-medium">
                Thank you for reaching out. We'll be in touch soon.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
                className="mt-4"
              >
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-coffee-dark ml-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-cream/10 border border-coffee-medium/20 focus:border-coffee-medium outline-none rounded-xl p-4 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-coffee-dark ml-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-cream/10 border border-coffee-medium/20 focus:border-coffee-medium outline-none rounded-xl p-4 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-coffee-dark ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full bg-cream/10 border border-coffee-medium/20 focus:border-coffee-medium outline-none rounded-xl p-4 transition-all resize-none"
                />
              </div>

              <Button variant="primary" type="submit" className="w-full justify-center gap-2">
                Send Message
                <Send size={18} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
