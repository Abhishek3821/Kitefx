import React from "react";

const WhyPlatformSection = ({
  backgroundImage,
  platformImage,
  title,
  subtitle,
  featuresLeft = [],
  featuresRight = [],
}) => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Platform Image */}
      {platformImage && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <div className="flex justify-center">
            <img
              src={platformImage}
              alt="Trading Platform"
              className="max-w-5xl w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 text-center text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-16 mb-6">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && <p className="text-white/70 mb-14">{subtitle}</p>}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-lg">
          {/* Left Features */}
          <div className="bg-white/10 backdrop-blur-md rounded-md p-6 text-left">
            <ul className="space-y-4">
              {featuresLeft.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-green-400 text-black flex items-center justify-center text-sm">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Features */}
          <div className="bg-white/10 backdrop-blur-md rounded-md p-6 text-left">
            <ul className="space-y-4">
              {featuresRight.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-green-400 text-black flex items-center justify-center text-sm">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlatformSection;
