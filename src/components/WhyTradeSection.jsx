import React from "react";

const FeatureCard = ({ items }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-md p-8">
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-black text-xs font-bold">
            ✓
          </span>
          <span className="text-white/90 text-sm md:text-base leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const WhyTradeSection = ({
  title,
  subtitle,
  platformName,
  platformLogo, // optional image url
  leftFeatures = [],
  rightFeatures = [],
  backgroundGlow = true,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b18] to-black" />
      {backgroundGlow && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.15),transparent_60%)]" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>

          {subtitle && <p className="text-white/70 text-lg mb-6">{subtitle}</p>}

          {/* Platform branding */}
          {(platformName || platformLogo) && (
            <div className="flex items-center justify-center gap-3">
              {platformLogo && (
                <img
                  src={platformLogo}
                  alt={platformName}
                  className="h-10 object-contain"
                />
              )}
              {platformName && (
                <span className="text-white text-3xl font-semibold">
                  {platformName}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <FeatureCard items={leftFeatures} />
          <FeatureCard items={rightFeatures} />
        </div>
      </div>
    </section>
  );
};

export default WhyTradeSection;
