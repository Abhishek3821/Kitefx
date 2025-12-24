import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Calendar, Star, Mail } from "lucide-react";

const cards = [
  {
    title: "Economic Calendars",
    description:
      "Stay ahead of the curve with timely updates and insightful analysis.",
    icon: Calendar,
  },
  {
    title: "Featured Ideas",
    description:
      "Say goodbye to information overload and hello to curated insights that align perfectly with your preferences and objectives.",
    icon: Star,
  },
  {
    title: "Newsletter",
    description:
      "Trading Central offers the most helpful and actionable analytics, precisely when they matter most.",
    icon: Mail,
  },
  {
    title: "Analyst Views",
    description:
      "Access professional-grade market analysis and forecasts from industry experts.",
    icon: Star,
  },
];

const TradingCentralSlider = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trading Central
        </h2>
        <p className="text-gray-700">
          A touch of insightful analytic support
        </p>

        {/* SLIDER */}
        <div className="relative mt-12">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl p-8 min-h-[420px] shadow-sm flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-black" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">
                        {card.title}
                      </h3>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <button className="mt-6 text-green-500 font-medium w-fit hover:underline">
                      Learn more →
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-10 py-4 rounded-md transition">
            Join Now
          </button>
        </div>

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-500 max-w-5xl mx-auto pt-6">
          IC Markets Global does not represent that the material provided here is
          accurate, current or complete, and therefore should not be relied
          upon as such. The information provided here is not to be considered a
          recommendation or offer to buy or sell any financial product.
        </p>

      </div>
    </section>
  );
};

export default TradingCentralSlider;
