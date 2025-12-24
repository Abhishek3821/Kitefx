import Image from "../assets/kitefx19.webp";


export default function HowCryptoCFDWorks() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT – DEVICES IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Image}
            alt="Cryptocurrency trading platforms"
            className="max-w-full h-auto"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            How does Cryptocurrency CFD <br /> trading work?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Bitcoin is a digital cryptocurrency that derives its value from
            supply and demand factors unique to this asset class.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Bitcoin is available in a finite supply and therefore increases in
            price as demand increases.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Demand stems from speculative sources and more practical sources,
            for example Internet purchases paid for in Bitcoin.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Bitcoin also has a tendency to react to market sentiment in more
            traditional markets such as equities and foreign exchange,
            increasing during periods of negative sentiment.
          </p>
        </div>

      </div>
    </section>
  );
}
