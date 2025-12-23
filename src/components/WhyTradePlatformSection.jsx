import React from "react";
import { CheckCircle2 } from "lucide-react";

const WhyTradePlatformSection = ({
  title,
  description,
  browsers = [],
  leftFeatures = [],
  rightFeatures = [],
}) => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-18 px-6">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>

        {description && (
          <p className="text-white/70 max-w-4xl mx-auto text-md leading-relaxed mb-10">
            {description}
          </p>
        )}

        {/* Browser Icons */}
        {browsers.length > 0 && (
          <div className="flex justify-center items-center gap-8 mb-16">
            {browsers.map((browser, index) => (
              <img
                key={index}
                src={browser.icon}
                alt={browser.name}
                className="w-12 h-12 object-contain"
              />
            ))}
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-6xl mx-auto">
          {/* Left Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <ul className="space-y-5">
              {leftFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-400 mt-1" size={22} />
                  <span className="text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <ul className="space-y-5">
              {rightFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-400 mt-1" size={22} />
                  <span className="text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradePlatformSection;
