import React, { FC, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import { shopLocation } from "../../data/coffee-data";

/**
 * Shared animation variants for editorial reveal
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.2, 1, 0.3, 1] as const },
  },
};

export const Contact: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 w-full bg-coffee-dark text-cream/90 overflow-hidden border-t border-white/5 rounded-3xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* EDITORIAL INFORMATION: Left column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 space-y-12"
        >
          <div className="space-y-4">
            <motion.span
              variants={itemVariants}
              className="text-cream/50 uppercase tracking-[0.4em] text-[10px] font-bold block"
            >
              Contact
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight text-white"
            >
              Get in Touch
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-px bg-[#c49a6c]/40 pt-2"
            />
            <motion.p
              variants={itemVariants}
              className="text-base font-light text-cream/60 leading-relaxed pt-2"
            >
              Have questions about our seasonal roasts, interested in wholesale
              partnerships, or want to host a private coffee event? Reach out to
              our Kyiv team.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="space-y-4 max-w-xs">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-cream/40">
              Kyiv Shop Hours
            </h3>
            <div className="space-y-2.5 text-sm font-light">
              {shopLocation.workingHours.map((slot, index) => (
                <div
                  key={index}
                  className="flex justify-between items-baseline gap-4 text-cream/70"
                >
                  <span>{slot.days}</span>
                  <div className="flex-1 border-b border-dotted border-white/10" />
                  <span className="font-medium text-white">{slot.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* FORM CONTAINER: Right column */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="lg:col-span-7 w-full bg-transparent p-2 md:p-4 rounded-md relative overflow-hidden min-h-112 flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-col items-center justify-center text-center space-y-5 py-8"
              >
                {/* FIXED: bg-white/[0.03] -> bg-white/3 */}
                <div className="p-4 bg-white/3 border border-white/10 text-emerald-400 rounded-full">
                  <CheckCircle2 size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Message Sent
                  </h3>
                  <p className="text-sm font-light text-cream/60 max-w-sm mx-auto">
                    We've received your inquiry. Our manager will review it and
                    get back to you within the next working day.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-widest font-semibold border-white/10 text-white  hover:bg-white/5 rounded-sm"
                >
                  Send Another
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Field: Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest font-semibold text-cream/40 ml-0.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Alexander Green"
                    // FIXED: bg-white/[0.03] -> bg-white/3 | focus:bg-white/[0.06] -> focus:bg-white/6
                    className="w-full bg-white/3 border border-white/10 focus:border-cream/40 focus:bg-white/6 outline-none rounded-sm p-4 text-sm font-light transition-all placeholder-white/20 text-white"
                  />
                </div>

                {/* Field: Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest font-semibold text-cream/40 ml-0.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    // FIXED: bg-white/[0.03] -> bg-white/3 | focus:bg-white/[0.06] -> focus:bg-white/6
                    className="w-full bg-white/3 border border-white/10 focus:border-cream/40 focus:bg-white/6 outline-none rounded-sm p-4 text-sm font-light transition-all placeholder-white/20 text-white"
                  />
                </div>

                {/* Field: Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-widest font-semibold text-cream/40 ml-0.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    // FIXED: bg-white/[0.03] -> bg-white/3 | focus:bg-white/[0.06] -> focus:bg-white/6
                    className="w-full bg-white/3 border border-white/10 focus:border-cream/40 focus:bg-white/6 outline-none rounded-sm p-4 text-sm font-light transition-all placeholder-white/20 text-white resize-none"
                  />
                </div>

                {/* Submit Action */}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full justify-center gap-2 text-coffee-dark bg-[#c49a6c] hover:bg-[#c49a6c]/80 rounded-sm py-4 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <Send size={14} strokeWidth={2} />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
