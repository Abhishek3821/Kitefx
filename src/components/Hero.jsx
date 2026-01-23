import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SLIDES = [
  {
    title: "Igniting the Next Era of the KiteFX Financial Ecosystem",
    bg: "https://images.unsplash.com/photo-1596248106033-9333494c2fb3?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Precision. Performance. Partnership.",
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Driving Innovation in Global Trading",
    bg: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Speed Meets Strategy in Financial Markets",
    bg: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Built for Champions. Trusted by Traders.",
    bg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[100vh] overflow-hidden pt-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          renderBullet: (_, className) => `<span class="${className}"></span>`,
        }}
        loop
        className="h-full"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex items-center justify-center px-6">
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.bg}
                  alt="Hero Background"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl text-center text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-10 leading-tight">
                  <span className="font-bold">Haas x KiteFX</span>:{" "}
                  {slide.title}
                </h1>

                {/* Logos */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-14">
                  {/* Haas */}
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-4xl font-black italic border border-white/30">
                      G
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-black uppercase">
                        MoneyGram
                      </div>
                      <div className="text-xl tracking-widest text-white/70">
                        Haas F1 Team
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-14 bg-white/20" />

                  {/* IC */}
                  <div className="flex items-center gap-3">
                    <div className="flex space-x-1">
                      <div className="w-6 h-10 bg-green-500 skew-x-[-15deg]" />
                      <div className="w-6 h-10 bg-white skew-x-[-15deg]" />
                      <div className="w-6 h-10 bg-white skew-x-[-15deg]" />
                    </div>
                    <div>
                      <div className="text-2xl font-black italic uppercase">
                        KiteFX
                      </div>
                      <div className="text-xs tracking-widest text-white/60">
                        Your Trading Edge
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <p className="text-xs tracking-[0.4em] mb-8">
                  OFFICIAL FX TRADING PARTNER
                </p>
                <button className="bg-green-500 hover:bg-green-400 text-black px-10 py-3 rounded-md font-black tracking-widest transition transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Bars */}
      <div className="hero-pagination absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20" />
    </section>
  );
};

export default Hero;
