import { Check } from "lucide-react";
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

export default function CTraderRawSpreadSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-bold text-black leading-snug"
            >
              IC Markets Global cTrader platform is a market leading trading
              platform designed from the ground up with Forex CFD trading in
              mind.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 font-medium"
            >
              cTrader Platform Introductory Video
            </motion.p>

            {/* Video */}
            <motion.div
              variants={fadeUp}
              className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9bZkp7q19f0"
                title="cTrader Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative pt-10"
          >
            <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 ">

              <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                Forex Trading
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
                cTrader Raw Spread account
              </h3>

              <ul className="space-y-5 mb-10">
                {[
                  "Raw Pricing",
                  "Spreads from 0.0 pips",
                  "Fast order execution",
                  "1:1000 Leverage",
                  "Deep liquidity",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 shadow">
                      <Check size={14} className="text-black" />
                    </span>
                    <span className="text-gray-800 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3.5 rounded-xl transition shadow-md"
              >
                Open a cTrader account
              </motion.button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
