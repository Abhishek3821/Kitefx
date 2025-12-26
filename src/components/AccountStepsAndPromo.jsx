import React from "react";
import { assets } from "../assets/assets";

const steps = [
  {
    step: 1,
    title: "Register",
    desc: "Choose an account type and complete our fast and secure application form",
  },
  {
    step: 2,
    title: "Verify",
    desc: "Use our digital onboarding system for fast verification",
  },
  {
    step: 3,
    title: "Fund",
    desc: "Fund your trading account using a wide range of funding methods",
  },
  {
    step: 4,
    title: "Trade",
    desc: "Start trading on your live account and access +2,100 instruments",
  },
];

const AccountStepsAndPromo = () => {
  return (
    <section className="w-full bg-white py-20 px-6 space-y-10">
      {/* ================= STEPS ================= */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Open an account in 4 simple steps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-gray-100 rounded-md p-8 text-left"
            >
              <div className="w-12 h-12 rounded-full bg-green-400 text-black flex items-center justify-center font-bold text-lg mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="bg-green-400 hover:bg-green-500 transition px-10 py-4 rounded-md text-lg font-semibold">
          Open an account
        </button>
      </div>

      {/* ================= MOBILE APP PROMO ================= */}
      <div className="max-w-7xl mx-auto bg-black rounded-md px-10 pt-10 lg:px-16 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
        {/* LEFT */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Trade on the go with KiteFX Global mobile app
          </h3>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Easy monitoring",
              "24/7 Support",
              "Multiple payment methods",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-400 text-black flex items-center justify-center text-sm">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={assets.kitefx8}
            alt="Mobile App"
            className="max-h-96 object-contain"
          />
        </div>
      </div>

      {/* ================= WEBINARS CTA ================= */}
      <div className="max-w-7xl mx-auto bg-black rounded-md px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
        <p className="text-xl font-medium">
          Skill up with weekly KiteFX Global WEBINARS
        </p>

        <button className="border-2 border-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition">
          Upcoming Webinars
        </button>
      </div>
    </section>
  );
};

export default AccountStepsAndPromo;
