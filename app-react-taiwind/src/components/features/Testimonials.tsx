import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";


import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Coffee Enthusiast",
    content: "The best artisanal coffee I've had in Kyiv. The micro-roasting process is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Kovalenko",
    role: "Local Resident",
    content: "A truly soulful atmosphere. My favorite spot to start the morning.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Digital Nomad",
    content: "Superb service and even better coffee. The vibes are just perfect.",
    rating: 5,
  },
  {
    id: 4,
    name: "Olena Petrova",
    role: "Designer",
    content: "Love the attention to detail. A must-visit for any coffee lover.",
    rating: 5,
  },
  {
    id: 5,
    name: "Viktor Smirnov",
    role: "Entrepreneur",
    content: "Consistency is key, and they deliver perfection every single time.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sophie Chen",
    role: "Traveler",
    content: "A hidden gem in the city. Best flat white I've had in Europe.",
    rating: 5,
  },
];

export const Testimonials: FC = () => {
  return (
    <section className="py-32 bg-transparent">
    
      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-swiper .swiper-slide-active .divider-container {
          border-left-color: transparent;
        }
      `}} />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
            Guest Experiences
          </h2>
          <div className="w-24 h-1 bg-coffee-light/30 mx-auto rounded-full" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: false
          }}
          style={{
            "--swiper-pagination-color": "#6f4e37",
            "--swiper-pagination-bullet-inactive-color": "#6f4e37",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
            "--swiper-pagination-bottom": "0px",
          } as React.CSSProperties}
          className="testimonial-swiper pb-20 overflow-visible"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto flex">
              <div className="divider-container mb-10 bg-transparent px-8 my-4 border-l border-coffee-dark/10 flex flex-col items-center text-center transition-all duration-300">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                
                <p className="text-lg text-coffee-dark italic leading-relaxed mb-8 font-serif opacity-90">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-bold text-coffee-dark uppercase tracking-widest">
                    {testimonial.name}
                  </h4>
                  <p className="text-coffee-dark/50 text-xs mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
