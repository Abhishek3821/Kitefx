import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  {
    name: "Apple Pay",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
  },
  {
    name: "Google Pay",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
  },
  {
    name: "Skrill",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Skrill_logo.svg",
  },
  {
    name: "Neteller",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Neteller_logo.svg",
  },
  {
    name: "PayPal",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    name: "Visa",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  },
  {
    name: "Mastercard",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

const PaymentMethods = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      {/* TOP CARD */}
      <div className="max-w-7xl mx-auto bg-[#F6F6F6] rounded-xl py-16 px-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Your Money, Your Way
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
          {["Instant Deposit", "Fast Withdrawal", "0% Commission"].map(
            (item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                  ✓
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            )
          )}
        </div>

        <button className="text-base font-medium py-3 px-8 rounded-md bg-[#DADADA] hover:bg-green-400 transition-all">
          Payment methods
        </button>
      </div>

      {/* LOGO STRIP */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView={8} // 👈 show many logos
          slidesPerGroup={1} // 👈 move ONE logo at a time
          spaceBetween={32}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
            1280: { slidesPerView: 8 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-16">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PaymentMethods;
