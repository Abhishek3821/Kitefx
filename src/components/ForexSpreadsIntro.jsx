const ForexSpreadsIntro = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Forex Spreads
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          IC Markets Global offers Forex traders some of the tightest spreads out
          of all Forex exchange brokers globally with our EUR/USD spread
          averaging 0.1 pips. Tight spreads combined with our low latency
          enterprise grade hardware makes IC Markets Global the ideal choice for
          active day traders and those using Expert Advisors. The table at the
          bottom of this page shows our minimum and average spreads across all of
          the major currency pairs.
        </p>
      </div>
    </section>
  );
};

export default ForexSpreadsIntro;
