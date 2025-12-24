const EquityIndicesSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* (Spot) Equity Indices Spreads */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            (Spot) Equity Indices Spreads
          </h2>
          <p className="text-gray-700 leading-relaxed">
            IC Markets Global offers competitive spreads across all of our cash
            Indices, including the E-mini S&amp;P 500 Index from 0.4 points, the
            FTSE 100 Index from 1 point, Xetra DAX Index from 1 point and S&amp;P
            200 Index from 1 point.
          </p>
        </div>

        {/* Futures Indices */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Futures Indices
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In addition to Equity Indices, IC Markets Global also offers Futures
            Indices: ICE Dollar Index and VIX Index.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EquityIndicesSection;
