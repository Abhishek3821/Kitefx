import { motion } from "framer-motion";

/* -------- Animation -------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function RawPricingSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-black mb-8"
        >
          Raw Pricing
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8"
        >
          KiteFX Global is able to offer market pricing and some of the best
          trading conditions through the MetaTrader 4 and MetaTrader 5 platforms
          by providing clients with Raw Pricing.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          The Raw Pricing environment allows you to trade on institutional grade
          pricing on almost the same level of the world’s leading execution
          venues. Executable Streaming Prices (ESP) are sent from KiteFX
          Global’s pricing providers to us and offered to our clients with no
          dealing desk, price manipulation or requotes. KiteFX Global is the
          Forex CFD provider of choice for high volume traders, scalpers and
          robots who demand the tight spreads and best possible execution.
        </motion.p>
      </div>
    </section>
  );
}
