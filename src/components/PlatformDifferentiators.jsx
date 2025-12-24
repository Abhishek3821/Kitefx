import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start text-left gap-4 max-w-72">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center text-black">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-black">{title}</h3>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

const PlatformDifferentiators = ({ title, subtitle, features = [] }) => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto items-center`}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformDifferentiators;
