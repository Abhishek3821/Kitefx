import { motion } from "framer-motion";

/* ---------------- Animation ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function TradingRestrictionsAndMarketDepth() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-bold text-black leading-tight"
            >
              No Restrictions on Trading – Scalping Allowed
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed text-base sm:text-lg"
            >
              KiteFX Global MetaTrader 4 and 5 platforms have no restrictions on
              trading. We have some of the best trading conditions for scalping
              and high frequency trading globally, allowing traders to place
              orders between the spread as there is no minimum order distance
              and a freeze level of 0. This means orders including stop loss
              orders can be placed as close to the market price as you like.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed text-base sm:text-lg"
            >
              Traders can also hedge positions as there is no first in first out
              (FIFO) rule with KiteFX Global. Please note that different hedge
              margin level and settings may be applied to different products and
              platforms.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-bold text-black leading-tight"
            >
              Level II Pricing – Market Depth
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed text-base sm:text-lg"
            >
              Depth of market shows the full range of executable prices coming
              directly from pricing providers. Depth of market offers complete
              transparency of the liquidity of each currency pair by showing the
              available volumes for each price level at any given time. High
              liquidity, asynchronous spot prices and low latency guarantee the
              tightest possible spreads.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
