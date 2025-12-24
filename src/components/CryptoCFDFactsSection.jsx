import { CheckCircle } from "lucide-react";

export default function CryptoCFDFactsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 shadow-sm">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Icon */}
          <div className="w-14 h-14 rounded-full border-2 border-green-400 flex items-center justify-center">
            <span className="text-green-500 text-3xl font-bold">₿</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Now you can trade Cryptocurrency 7 days a week on all IC Markets
            Global platforms.
          </h2>

          <p className="text-gray-700">
            The leverage available on Cryptocurrency pairs BTCUSD and ETHUSD is
            now up to 1:500 and for BCHUSD and LTCUSD 1:200 for clients
            registered with Raw Trading.
          </p>

          {/* BTCUSD */}
          <div>
            <h4 className="font-bold text-gray-900 mb-2">BTCUSD</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Up to 1:500 leverage for positions below 50 lots net exposure</li>
              <li>1:300 leverage for positions above 50 lots net exposure</li>
              <li>MT5 Max Net Position 100 BTC</li>
            </ul>
          </div>

          {/* ETHUSD */}
          <div>
            <h4 className="font-bold text-gray-900 mb-2">ETHUSD</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Up to 1:500 leverage for positions below 1,000 lots net exposure</li>
              <li>1:300 leverage for positions above 1,000 lots net exposure</li>
              <li>MT5 Max Net Position 2000 ETH</li>
            </ul>
          </div>

          <p className="text-gray-700">
            Unlike other asset classes (FX, Equities, CFDs on Commodities, etc.),
            the Cryptocurrency market is dominated by retail speculators. With
            IC Markets Global Cryptocurrency CFDs, you will trade in a market
            where there is no central bank intervention, interbank dealers
            controlling order flow or giant pension funds moving prices.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Price movements on Cryptocurrencies like Bitcoin or Ethereum are
            driven primarily by news and prevailing sentiment, i.e. the fear
            and greed of retail speculators. These sometimes dramatic shifts can
            lead to massive intraday price swings, making Cryptocurrency CFDs
            an exciting product for aggressive and experienced day traders.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            The IC Markets Global Cryptocurrency CFD product allows traders to
            go long or short without actually holding the Cryptocurrency. This
            means traders can get exposure to the price of the Cryptocurrency
            without worrying about the security risks associated with storing
            it and the counterparty risk from the exchange.
          </p>
        </div>

        {/* RIGHT FACTS CARD */}
        <div className="bg-gray-50 rounded-2xl p-8 border space-y-6 h-fit">
          <div>
            <p className="text-sm text-gray-500">Cryptocurrency CFDs</p>
            <h3 className="text-2xl font-bold text-gray-900">Facts</h3>
          </div>

          <ul className="space-y-4">
            {[
              "Up to 1:500 Leverage (MetaTrader 4/MT5 | 1:300 Leverage cTrader and TradingView)",
              "Trade the market 7 days a week",
              "Long or short",
              "FSA regulated",
              "No commissions",
              "REAL live support",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-gray-800 text-sm md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="w-full border border-green-500 text-green-600 font-semibold py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
            Open Account
          </button>
        </div>

      </div>
    </section>
  );
}
