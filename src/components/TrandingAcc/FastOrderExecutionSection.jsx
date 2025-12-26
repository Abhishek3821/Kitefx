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

export default function FastOrderExecutionSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-black mb-10"
        >
          Fast order execution
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8"
        >
          The KiteFX Global MetaTrader 4 and 5 servers are located in the
          Equinix NY4 data centre in New York. The NY4 data centre referred to
          as a financial ecosystem is home to over 600 buy and sell side firms,
          exchanges, trading venues, market data and service providers. The
          MetaTrader 4 and 5 servers are cross connected to our network to
          ensure low latency and the fast execution of your trades.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          The KiteFX Global MetaTrader 4 and 5 trade servers have latency on
          average of less than 1 millisecond to major VPS providers either
          collocated in the NY4 data centre or through dedicated lines to nearby
          data centres. This low latency environment is ideal for automated and
          High Frequency Trading and scalping.
        </motion.p>
      </div>
    </section>
  );
}
