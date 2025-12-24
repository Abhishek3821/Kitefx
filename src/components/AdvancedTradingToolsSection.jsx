const AdvancedTradingToolsSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6 text-gray-800 leading-relaxed">
          <p className="text-lg font-semibold text-gray-900">
            As a part of improving the overall trading experience for our users,
            IC Markets Global has introduced 20 exclusive trading tools previously
            not available on MetaTrader 4. With the help of these advanced trading
            tools, the world's best trading platform is now even better, providing
            our traders with a competitive edge.
          </p>

          <p>
            The apps give traders institutional quality tools over and above those
            provided in the underlying trading platform. In addition to having
            some of the most feature rich trade execution and management tools,
            the list also includes apps that assist in making trade decisions
            along with handy tools like sophisticated alarms, messaging
            broadcasting facilities, market data &amp; more aimed at enhancing
            the overall trading experience.
          </p>

          <p>
            The following Advanced trader tools are exclusively available for our
            Live account holders.
          </p>
        </div>

        {/* RIGHT CTA CARD */}
        <div className="bg-green-100 rounded-2xl p-8 text-center space-y-6">
          <p className="text-gray-800">
            Access over <span className="font-semibold">200</span> markets &amp;
            tight spreads with a
          </p>

          <h3 className="text-2xl font-bold text-gray-900">
            Market leader <br /> you can trust
          </h3>

          <button className="bg-green-400 hover:bg-green-300 transition text-black font-semibold px-6 py-3 rounded-md">
            Start Trading
          </button>
        </div>

      </div>
    </section>
  );
};

export default AdvancedTradingToolsSection;
