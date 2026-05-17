import React, { FC, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import Button from "../ui/Button";
import { shopLocation } from "../../data/coffee-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.2, 1, 0.3, 1] as const } 
  }
};

const shakeAnimation: Variants = {
  shake: {
    x: [0, -10, 10, -10, 10, -5, 5, 0],
    transition: { duration: 0.4, ease: "easeInOut" as const }
  },
  default: { x: 0 }
};

export const Contact: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBrewing, setIsBrewing] = useState(false);
  const [shakeTrigger, setShakeTrigger] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [shopStatus, setShopStatus] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "Checking hours..."
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null); // Ref for tracking magnetic bounds
  
  // Parallax scroll controls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const grainY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  // FEATURE: Magnetic Button Physics Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  // Live Kyiv Time Status
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      
      const isWeekend = day === 0 || day === 6;
      const startHour = isWeekend ? 9 : 8;
      const endHour = isWeekend ? 22 : 21;

      if (hour >= startHour && hour < endHour) {
        setShopStatus({ open: true, message: "Open now — drop by for a flat white!" });
      } else {
        setShopStatus({ open: false, message: "We're closed — but we'll read your message first thing tomorrow" });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // FEATURE: Magnetic Hover Handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || isBrewing) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from center of the button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Restrict maximum pull distance (magnetic intensity)
    mouseX.set(x * 0.35);
    mouseY.set(y * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleMouseLeave(); // Reset magnetic state on submit

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setShakeTrigger(true);
      setTimeout(() => setShakeTrigger(false), 450);
      return;
    }

    setIsBrewing(true);

    setTimeout(() => {
      setIsBrewing(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-32 px-6 md:px-12 w-full bg-coffee-dark text-cream/90 overflow-hidden border-t border-white/5 relative"
    >
      {/* Parallax Grain Paper Texture Overlay */}
      <motion.div 
        style={{ y: grainY }}
        className="absolute inset-0 w-full h-[110%] pointer-events-none opacity-[0.025] mix-blend-overlay z-0"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* EDITORIAL INFORMATION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 space-y-12"
        >
          <div className="space-y-4">
            <motion.span variants={itemVariants} className="text-cream/50 uppercase tracking-[0.4em] text-[10px] font-bold block">
              Contact
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight text-white">
              Get in Touch
            </motion.h2>
            <motion.div variants={itemVariants} className="w-16 h-px bg-cream/20 pt-2" />
            <motion.p variants={itemVariants} className="text-base font-light text-cream/60 leading-relaxed pt-2">
              Have questions about our seasonal roasts, interested in wholesale partnerships, or want to host a private coffee event? Reach out to our Kyiv team.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="space-y-5 max-w-xs">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-cream/40">
                Kyiv Shop Hours
              </h3>
              <div className="flex items-center gap-2 pt-1">
                <span className="relative flex h-2 w-2">
                  {shopStatus.open && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${shopStatus.open ? 'bg-emerald-500' : 'bg-white/20'}`}></span>
                </span>
                <span className={`text-[11px] tracking-wide font-light ${shopStatus.open ? 'text-emerald-400/90' : 'text-cream/40'}`}>
                  {shopStatus.message}
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-sm font-light pt-1">
              {shopLocation.workingHours.map((slot, index) => (
                <div key={index} className="flex justify-between items-baseline gap-4 text-cream/70">
                  <span>{slot.days}</span>
                  <div className="flex-1 border-b border-dotted border-white/10" />
                  <span className="font-medium text-white">{slot.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* FORM CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          animate={shakeTrigger ? "shake" : "default"}
          variants={shakeAnimation}
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
                <div className="p-4 bg-white/3 border border-white/10 text-emerald-400 rounded-full">
                  <CheckCircle2 size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white">Message Sent</h3>
                  <p className="text-sm font-light text-cream/60 max-w-sm mx-auto">
                    We've received your inquiry. Our manager will review it and get back to you within the next working day.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-widest font-semibold border-white/10 text-white hover:bg-white/5 rounded-sm"
                >
                  Send Another
                </Button>
              </motion.div>
            ) : (
              <motion.form 
                key="contact-form"
                onSubmit={handleSubmit}
                noValidate 
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, filter: "blur(4px)" }}
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                className="space-y-6"
              >
                {/* Field: Name */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-cream/40 ml-0.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    disabled={isBrewing}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Alexander Green"
                    className="w-full bg-white/3 border border-white/10 focus:border-cream/40 focus:bg-white/6 outline-none rounded-sm p-4 text-sm font-light transition-all placeholder-white/20 text-white disabled:opacity-50"
                  />
                </motion.div>

                {/* Field: Email */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-cream/40 ml-0.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    disabled={isBrewing}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full bg-white/3 border border-white/10 focus:border-cream/40 focus:bg-white/6 outline-none rounded-sm p-4 text-sm font-light transition-all placeholder-white/20 text-white disabled:opacity-50"
                  />
                </motion.div>

                {/* Field: Message */}
                <motion.div variants={itemVariants} className="space-y-2 relative">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-cream/40 ml-0.5">
                      Your Message
                    </label>
                    <span className={`text-[10px] tracking-wider transition-colors ${
                      formData.message.length > 450 ? "text-[#c49a6c] font-medium" : "text-cream/30"
                    }`}>
                      {formData.message.length} / 500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    disabled={isBrewing}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    className="w-full bg-white/3 border border-white/10 focus:border-cream/40 focus:bg-white/6 outline-none rounded-sm p-4 text-sm font-light transition-all placeholder-white/20 text-white resize-none disabled:opacity-50"
                  />
                </motion.div>

                {/* FEATURE: Magnetic Submit Action Wrapper */}
                <motion.div 
                  variants={itemVariants}
                  ref={buttonRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ x: magneticX, y: magneticY }}
                  className="w-full will-change-transform"
                >
                  <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={isBrewing}
                    className="w-full justify-center gap-2 bg-cream text-coffee-dark hover:bg-white rounded-sm py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 active:scale-[0.99]"
                  >
                    {isBrewing ? (
                      <>
                        <span>Brewing dispatch...</span>
                        <Loader2 size={14} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Dispatch Message</span>
                        <Send size={14} strokeWidth={2} />
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;