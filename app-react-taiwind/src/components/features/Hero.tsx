import React, { FC, useRef, useMemo } from "react";
import { Coffee, ChevronDown } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Button from "../ui/Button";
import FloatingParticles from "../ui/Particles";

export const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 600], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const headX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [20, -20]),
    springConfig,
  );
  const headY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const words = useMemo(() => "Artisanal Coffee in Kyiv".split(" "), []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative h-screen min-h-187.5 w-full flex items-center justify-center px-6 md:px-12 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
            alt="Cinematic Coffee Shop"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-[#fdfbf7] z-10" />
      </motion.div>

      <FloatingParticles count={30} />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/20 text-[#c49a6c]">
              <Coffee size={20} />
            </div>
            <span className="text-white/50 uppercase tracking-[0.5em] text-[10px] font-bold">
              EST. 2024 • Kyiv Roasters
            </span>
          </motion.div>

          <motion.h1
            style={{ x: headX, y: headY }}
            className="text-6xl md:text-8xl font-serif font-bold text-[#F5F2ED] leading-none mb-8"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                  ease: [0.2, 1, 0.3, 1],
                }}
                className="inline-block mr-4 last:mr-0"
              >
                {word === "Kyiv" ? (
                  <span className="text-[#c49a6c] italic font-serif">Kyiv</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-lg md:text-xl text-[#F5F2ED]/60 max-w-lg mb-12 font-light leading-relaxed"
          >
            Experience the art of the perfect pour. Our beans are micro-roasted
            in small batches to preserve every delicate note.
          </motion.p>

          {/* Interactive Actions Bound to Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            <a href="#menu" className="inline-block">
              <Button className="px-12 py-6 bg-[#c49a6c] hover:bg-[#b3895b] text-black font-bold uppercase tracking-widest text-[11px] transition-all duration-300 cursor-pointer">
                View Menu
              </Button>
            </a>
            <a href="#contact" className="inline-block">
              <Button
                variant="outline"
                className="px-12 py-6 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm uppercase tracking-widest text-[11px] font-bold transition-all duration-300 cursor-pointer"
              >
                Order Now
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual Polish (Clean Rectangular geometry) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end relative"
        >
          <div className="absolute -inset-20 bg-[#c49a6c]/5 rounded-full blur-[120px] animate-pulse" />

          <div className="w-96 h-145 relative z-10 p-3 bg-white-200 border border-white/10 rounded-md backdrop-blur-xs overflow-hidden shadow-2xl">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
              alt="Artisanal Brewing"
              className="w-full h-full object-cover rounded-sm opacity-90 grayscale-20 contrast-110 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.7em] text-white/30 font-bold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#c49a6c]/50"
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
