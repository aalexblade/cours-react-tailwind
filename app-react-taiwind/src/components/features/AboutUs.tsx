import React, { FC } from "react";
import { Bean, Zap, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Оновлений масив переваг із преміальними журнальними описами
const features = [
  {
    icon: Bean,
    title: "Fresh Roasting",
    description:
      "Our beans are micro-roasted daily in Kyiv to ensure peak flavor, preserving the unique origin characteristics in every single cup.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description:
      "Compromising on time doesn't mean compromising on quality. We've meticulously optimized our workflow for your busy morning rituals.",
  },
  {
    icon: Heart,
    title: "Soulful Atmosphere",
    description:
      "An intentionally designed, minimalist space tailored for meaningful connection, deep focus, or simply a quiet moment of inner peace.",
  },
];

// Варіанти анімацій для батьківського контейнера (Stagger effect)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

// Варіанти анімацій для окремих елементів тексту та карток
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.2, 1, 0.3, 1] as const, // <- ОСЬ ТУТ ДОДАНО 'as const'
    },
  },
};

export const AboutUs: FC = () => {
  return (
    <section
      id="features"
      className="py-32 px-6 md:px-12 w-full bg-coffee-dark  text-[#F5F2ED] overflow-hidden rounded-3xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 flex flex-col items-start"
        >
          {/* Маленький треканий підзаголовок */}
          <motion.span
            variants={itemVariants}
            className="text-[#c49a6c] uppercase tracking-[0.4em] text-[10px] font-bold mb-4"
          >
            Our Philosophy
          </motion.span>

          {/* Великий Serif заголовок у стилі Vogue / Kaffe 401 */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold text-[#F5F2ED] leading-tight mb-6"
          >
            Crafting spaces <br />
            and moments <br />
            <span className="text-[#c49a6c] italic font-serif">since 2024</span>
          </motion.h2>

          {/* Витончена тонка роздільна лінія Tailwind v4 */}
          <motion.div
            variants={itemVariants}
            className="w-20 h-px bg-[#c49a6c]/30 mb-8"
          />

          {/* Глибокий художній опис бренду */}
          <motion.p
            variants={itemVariants}
            className="text-base text-[#F5F2ED]/60 font-light leading-relaxed mb-6"
          >
            Kaffe 401 was born out of a quiet obsession with the perfect pour.
            Located in the heart of Kyiv, we reject the rush of commercial
            fast-food culture to bring you a slow, intentional coffee
            experience.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm text-[#F5F2ED]/40 font-light leading-relaxed"
          >
            Every batch of our single-origin beans is selected with ethical
            transparency and roasted with micro-precision. We believe coffee
            isn't just a caffeine kick — it's an art form.
          </motion.p>
        </motion.div>

        {/* ПРАВА ЧАСТИНА: Вертикальний асиметричний стек переваг (7 колонок з 12) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-7 flex flex-col gap-6 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6 }} // Елегантний мікро-зсув вправо при наведенні
              transition={{ duration: 0.3 }}
              className="group flex flex-col sm:flex-row items-start gap-6 p-8 bg-white-100 border border-white/5 rounded-md hover:bg-white-300 hover:border-white/10 transition-all duration-500"
            >
              {/* Мінімалістичний контейнер іконки (без грубих кольорових кіл) */}
              <div className="p-3.5 bg-white-300 border border-white/10 rounded-sm text-[#c49a6c] shrink-0 group-hover:scale-105 group-hover:text-[#b3895b] transition-all duration-500">
                <feature.icon size={22} strokeWidth={1.5} />
              </div>

              {/* Текстовий блок переваги */}
              <div className="flex flex-col items-start text-left">
                <h3 className="text-lg font-serif font-bold text-[#F5F2ED] mb-2 group-hover:text-[#c49a6c] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#F5F2ED]/50 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
