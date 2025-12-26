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

const floatingCard = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function StandardAccountSection() {
  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8 pt-35"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-black"
            >
              Why Choose Our Standard Account?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-3xl"
            >
              The Standard Account from KiteFX Global offers speed of execution
              with no rivals. Combine this with an all-inclusive spread starting
              from <strong>0.08 pip</strong>, Equinix NY4 servers in New York, a
              group of up to <strong>25 pricing providers</strong> and you will
              understand why our standard account can give you an unparalleled
              trading experience, all day every day.
            </motion.p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              variants={floatingCard}
              animate="animate"
              whileHover={{
                y: -10,
                boxShadow: "0px 30px 80px rgba(0,0,0,0.15)",
              }}
              className="
                relative rounded-3xl p-[2px]
                bg-gradient-to-br from-green-400/60 via-transparent to-green-400/60
              "
            >
              {/* Inner Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                  Forex Trading
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
                  Standard Account
                </h3>

                <ul className="space-y-5 mb-10">
                  {[
                    "Raw Pricing",
                    "Commission Free",
                    "Fast order execution",
                    "1:1000 Leverage",
                    "Deep liquidity",
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

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    w-full bg-green-400 hover:bg-green-500
                    text-black font-semibold py-3.5 rounded-xl
                    transition shadow-md
                  "
                >
                  Open Account
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
