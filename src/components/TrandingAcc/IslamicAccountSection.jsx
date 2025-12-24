import { Check } from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function IslamicAccountSection() {
  return (
    <section className="w-full bg-white py-15">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8 pt-20"
          >
            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold text-black leading-relaxed max-w-3xl"
            >
              IC Markets Global offers Islamic accounts (also known as swap free
              accounts) for clients who cannot earn or pay interest due to their
              religious beliefs. The swap free option is available on both our
              Raw Spread and Standard account types on the MetaTrader 4,
              MetaTrader 5 and cTrader platforms.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-3xl"
            >
              We are committed to providing our clients with the best trading
              conditions. Our Islamic accounts offer state-of-the-art trading
              infrastructure and execution speeds enabling our traders to gain a
              competitive edge.
            </motion.p>
          </motion.div>

          {/* RIGHT FEATURE CARD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            {/* Gradient Border */}
            <div className="rounded-md p-1 bg-gradient-to-br from-green-400/50 via-transparent to-green-400/50">
              <motion.div className="bg-white rounded-md p-5 border border-gray-200 transition">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                  Forex Trading
                </p>

                <h3 className="text-2xl font-bold text-black mb-5">
                  Islamic Account
                </h3>

                <ul className="space-y-5 mb-8">
                  {[
                    "Trade over 90 instruments",
                    "1:1000 Leverage",
                    "Spreads as low as 0.0 pips*",
                    "No Swap / interest adjustments",
                    "MetaTrader 4 & 5",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 shadow">
                        <Check size={14} className="text-black" />
                      </span>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.button className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3.5 rounded-xl transition shadow-md">
                  Open Account
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
