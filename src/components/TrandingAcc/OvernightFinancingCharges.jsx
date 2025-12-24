import { motion } from "framer-motion";

/* ---------------- Animation ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function OvernightFinancingCharges() {
  return (
    <section className="w-full bg-gray-200 py-28">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-black mb-10"
        >
          Overnight Financing Charges
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 text-base sm:text-lg leading-relaxed mb-10"
        >
          Swap free accounts do not pay or earn swap or interest on trading
          instruments, however, a holding fee will be applicable for holding
          open positions overnight. Any trades open overnight will be charged a
          flat rate holding fee. Rates &amp; holding period are subject to
          change to reflect market conditions when necessary. IC Markets Raw
          Spread and Standard Account commissions and spreads apply.
        </motion.p>

        {/* Link */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg mb-10"
        >
          <a
            href="#"
            className="font-semibold text-green-500 hover:text-green-600 transition"
          >
            CLICK HERE
          </a>{" "}
          to access the terms &amp; conditions governing the use of
          <span className="font-semibold"> Islamic Accounts</span> at IC Markets
          Global.
        </motion.p>

        {/* Note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-semibold text-black text-base sm:text-lg"
        >
          Note: Before applying for a swap-free account, please make sure you
          have read, understood and agreed to comply with the relevant terms and
          conditions.
        </motion.p>
      </div>
    </section>
  );
}
