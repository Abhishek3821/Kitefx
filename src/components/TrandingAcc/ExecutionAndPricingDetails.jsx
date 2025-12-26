import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerWords = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- Helper ---------------- */

function AnimatedKeywords({ words }) {
  return (
    <motion.span
      variants={staggerWords}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-flex flex-wrap gap-x-2"
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="relative font-semibold text-black"
        >
          {w}
          <span className="absolute left-0 -bottom-0.5 h-[2px] w-full  opacity-70" />
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ---------------- Component ---------------- */

export default function ExecutionAndPricingDetails() {
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
            {/* Fast Execution */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Fast order execution
              </h3>

              <p className="text-gray-700 leading-relaxed mb-5">
                The KiteFX Global MetaTrader 4 and 5 server is located in the{" "}
                <AnimatedKeywords words={["Equinix NY4", "data centre"]} /> in
                New York. This financial ecosystem hosts over{" "}
                <AnimatedKeywords words={["600+ institutions"]} />, exchanges,
                trading venues, market data and service providers.
              </p>

              <p className="text-gray-700 leading-relaxed">
                MetaTrader servers are cross-connected to our communication
                network ensuring{" "}
                <AnimatedKeywords words={["low latency", "fast execution"]} />.
                Trade servers operate with latency of{" "}
                <AnimatedKeywords words={["less than 1 millisecond"]} /> to
                major VPS providers, making this environment ideal for{" "}
                <AnimatedKeywords
                  words={["automated trading", "HFT", "scalping"]}
                />
                .
              </p>
            </motion.div>

            {/* No Restrictions */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                No Restrictions on Trading – Scalping Allowed
              </h3>

              <p className="text-gray-700 leading-relaxed mb-5">
                KiteFX Global MetaTrader platforms have{" "}
                <AnimatedKeywords words={["no trading restrictions"]} />.
                Traders can place orders between the spread with{" "}
                <AnimatedKeywords words={["zero minimum distance"]} /> and a
                freeze level of <AnimatedKeywords words={["0"]} />.
              </p>

              <p className="text-gray-700 leading-relaxed">
                There is <AnimatedKeywords words={["no FIFO rule"]} />, allowing
                full position hedging. Different hedge margin settings may apply
                depending on the product and platform.
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
                KiteFX Global offers some of the{" "}
                <AnimatedKeywords words={["tightest spreads"]} /> globally.
                Spreads start from <AnimatedKeywords words={["0.0 pips"]} />{" "}
                with the average EUR/USD spread at{" "}
                <AnimatedKeywords words={["0.1 pips"]} />.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our pricing connector aggregates quotes from up to{" "}
                <AnimatedKeywords words={["25 liquidity providers"]} />,
                ensuring best-available pricing even during{" "}
                <AnimatedKeywords words={["high volatility"]} /> events.
              </p>
            </motion.div>

            {/* Market Depth */}
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Level II Pricing – Market Depth
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Depth of Market provides{" "}
                <AnimatedKeywords words={["full transparency"]} /> into
                available liquidity by displaying executable prices and volumes
                at every level. High liquidity, asynchronous pricing and{" "}
                <AnimatedKeywords words={["ultra-low latency"]} /> guarantee the
                tightest possible spreads.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
