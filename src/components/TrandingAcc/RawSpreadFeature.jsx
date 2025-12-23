import { Check } from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function RawSpreadFeature() {
  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-1xl font-semibold text-black leading-relaxed pt-25"
            >
              Our Raw Spread account offers some of the lowest possible spreads
              available. Our average EUR/USD spread is{" "}
              <span className="font-bold">0.1 pips</span>, with only a small
              commission of{" "}
              <span className="font-bold">$3.50 per lot</span> payable per side.
              With deep liquidity and fast execution, IC Markets Global Raw
              Spread account was built for day traders, scalpers and expert
              advisors.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed text-base sm:text-lg"
            >
              Our MetaTrader 4 and 5 Raw Spread servers are located in the
              Equinix NY4 data center in New York, bringing you closer to our
              bridge, eliminating unnecessary latency. IC Markets Global
              MetaTrader 4 and 5 platforms are the preferred choice for active
              day traders and scalpers globally.
            </motion.p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8">

              <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                Forex Trading
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
                MetaTrader 4 Raw Spread
              </h3>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5 mb-10"
              >
                {[
                  "Raw Pricing",
                  "Spreads from 0.0 pips",
                  "Fast order execution",
                  "1:1000 Leverage",
                  "Deep liquidity",
                  "MetaTrader 4 & 5",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 shadow">
                      <Check size={14} className="text-black" />
                    </span>
                    <span className="text-gray-800 font-medium">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3.5 rounded-xl transition shadow-md"
              >
                Open Account
              </motion.button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
