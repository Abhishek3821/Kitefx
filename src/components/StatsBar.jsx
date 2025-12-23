import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 0, decimals: 1, suffix: "", label: "PIP SPREADS*" },
  { value: 1000, prefix: "1:", label: "LEVERAGE" },
  { value: 0.01, decimals: 2, label: "MICRO LOT TRADING" },
  { value: 2250, prefix: "+", label: "TRADABLE INSTRUMENTS" },
  { value: 24, suffix: "/7", label: "DEDICATED SUPPORT" },
];

const StatsBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-b from-black via-neutral-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-white text-4xl md:text-5xl font-light">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    decimals={stat.decimals || 0}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  "0"
                )}
              </span>

              <span className="mt-2 text-xs tracking-[0.3em] text-gray-400 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
