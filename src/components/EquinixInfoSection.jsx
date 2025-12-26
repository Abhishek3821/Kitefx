import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function EquinixInfoSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full px-6 lg:px-12">
        {/* ================= TOP GRID ================= */}
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-xl leading-relaxed font-medium text-gray-900 max-w-6xl"
            >
              KiteFX Global MetaTrader 4 and cTrader trade servers are located
              in the <span className="text-green-600 font-semibold">NY4</span>{" "}
              and{" "}
              <span className="text-green-600 font-semibold">
                LD5 IBX Equinix Data Centres
              </span>{" "}
              in New York and London, providing clients with the fastest
              possible execution speeds. Equinix data centres are known globally
              for their secure and reliable infrastructure.
            </motion.p>
          </motion.div>

          {/* RIGHT CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-green-100/80 backdrop-blur rounded-3xl p-10 text-center space-y-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <p className="text-lg text-gray-900">
              Access over <span className="font-bold">200 markets</span> & tight
              spreads with a
            </p>

            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
              regulated Forex <br /> CFD Provider
            </h3>

            <button className="bg-green-500 hover:bg-green-600 transition text-black font-semibold px-10 py-3 rounded-xl">
              Start Trading
            </button>
          </motion.div>
        </div>

        {/* ================= INFO SECTION ================= */}
        <div className="max-w-[1440px] mx-auto mt-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl space-y-4"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-gray-900 border-l-4 border-green-500 pl-4"
            >
              What is Equinix NY4 and LD5?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed"
            >
              The Equinix NY4 and LD5 IBX Data Centres in New York and London
              are home to 60+ exchanges and trading platforms, 400+ buy and sell
              side firms, 150+ financial service providers, and 675+ network
              bandwidth options.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 leading-relaxed"
            >
              Equinix data centres are regarded as the most reliable data
              centres on earth, enabling ultra-low latency and lightning-fast
              execution.
            </motion.p>
          </motion.div>
        </div>

        {/* ================= NY4 ADVANTAGE ================= */}
        <div className="w-full bg-gradient-to-b from-gray-50 to-white mt-20 py-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[1440px] mx-auto px-6 lg:px-12"
          >
            <div className="max-w-6xl space-y-4">
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold text-gray-900 border-l-4 border-green-500 pl-4"
              >
                The Equinix NY4 Advantage
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-700 leading-relaxed"
              >
                KiteFX Global MetaTrader servers are collocated in NY4 with an
                aggregation of 50+ banks and dark pool liquidity venues.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-gray-700 leading-relaxed"
              >
                Dedicated cross-connects ensure the lowest latency and fastest
                execution speeds globally.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* ================= LD5 ADVANTAGE ================= */}
        <div className="w-full py-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[1440px] mx-auto px-6 lg:px-12"
          >
            <div className="max-w-6xl space-y-4">
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold text-gray-900 border-l-4 border-green-500 pl-4"
              >
                The Equinix LD5 Advantage
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-700 leading-relaxed"
              >
                Our cTrader servers in LD5 London benefit from the same
                institutional-grade collocation advantages.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-gray-700 leading-relaxed"
              >
                Optimised for European traders, LD5 delivers ultra-fast
                connectivity for both manual and automated trading.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
