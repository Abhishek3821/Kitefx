import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CTraderExecutionFeatures() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Fast execution */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Fast order execution
              </h3>

              <p className="text-gray-700 leading-relaxed mb-5">
                The KiteFX Global cTrader server is located in the LD5 IBX
                Equinix Data Centre in London. The LD5 IBX data centre referred
                to as a financial ecosystem is home to over 600 buy and sell
                side firms, exchanges, trading venues, market data and service
                providers.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This server is cross connected to our pricing providers to
                ensure low latency and fast execution of your trades. Its
                backend allows simultaneous processing of your orders, enabling
                you to take advantage of every market condition. The KiteFX
                Global cTrader server has an average latency under 1ms to major
                VPS providers, making it ideal for automated and high frequency
                trading and scalping.
              </p>
            </motion.div>

            {/* No restrictions */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                No Restrictions on Trading – Scalping Allowed
              </h3>

              <p className="text-gray-700 leading-relaxed mb-5">
                KiteFX Global cTrader platform has no restrictions on trading.
                We offer some of the best trading conditions for scalping and
                high frequency trading globally, allowing traders to place
                orders between the spread as there is no minimum order distance
                and a freeze level of 0.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Traders can also hedge positions as there is no first in first
                out (FIFO) rule with KiteFX Global. Please note that different
                hedge margin level and settings may be applied to different
                products and platforms.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Spreads */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Spreads from 0.0 pips
              </h3>

              <p className="text-gray-700 leading-relaxed mb-5">
                KiteFX Global boasts some of the tightest spreads of all forex
                brokers globally. Spreads start at 0.0 pips on the MetaTrader 4
                and 5 platforms with the average on EUR/USD being 0.1 pips 24/5.
                This is currently one of the tightest average EUR/USD spreads
                globally.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our prices connector aggregates a mix from up to 25 different
                price providers, ensuring we always source the best price for
                our clients and keep spreads tight, especially during periods of
                high volatility such as news announcements.
              </p>
            </motion.div>

            {/* Market depth */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Level II Pricing – Market Depth
              </h3>

              <p className="text-gray-700 leading-relaxed mb-5">
                cTrader’s depth of market shows the full range of executable
                prices coming directly from our pricing aggregator. Orders are
                filled in the KiteFX Global bridge against the full order book
                using Volume Weighted Average Price (VWAP).
              </p>

              <p className="text-gray-700 leading-relaxed">
                cTrader platform offers complete transparency of the liquidity
                of each currency pair by showing the available volumes for each
                price level at any given time. High liquidity, asynchronous spot
                prices and low latency guarantee the tightest possible spreads.
              </p>
            </motion.div>

            {/* TradingView */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Access more tools on TradingView
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Trade with KiteFX on TradingView — the world’s top investment
                platform. Access 10 million+ scripts, connect with millions of
                traders and enjoy benefits such as comprehensive market
                insights, advanced analysis tools, customisable alerts,
                user-friendly interface, cross-device accessibility and
                integrated trading strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
