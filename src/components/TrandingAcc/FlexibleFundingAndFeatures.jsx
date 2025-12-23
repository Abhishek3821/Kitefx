import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FlexibleFundingAndFeatures() {
  const cards = [
    {
      title: "Forex, CFDs on Commodities and Global Indices",
      text:
        "Trade 60 currency, CFDs on commodities including metals, plus major global indices 24 hours a day with spreads as low as 0.5 points.",
    },
    {
      title: "Leverage up to 1:1000",
      text:
        "Accounts support leverage up to 1:1000 on MetaTrader 4 & 5, allowing traders to optimise manual and automated strategies.",
    },
    {
      title: "All Major Account Currencies Supported",
      text:
        "Open accounts in USD, AUD, EUR, GBP, SGD, NZD, JPY, CHF, HKD and CAD.",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-14 pt-23 pl-20"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Flexible Funding and Withdrawal Options
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-3xl">
                Once your account is opened, fund it using credit/debit cards,
                Skrill, wire transfer, Neteller, FasaPay, China Union Pay, BPAY
                and broker-to-broker transfers.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Flexible Lot Sizing
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-3xl">
                Trade sizes start from micro lots (0.01) with no restrictions,
                allowing precise risk management aligned with your balance.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – SINGLE SCREEN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0px 20px 50px rgba(0,0,0,0.12)",
                }}
                className="
                  relative rounded-2xl p-[1.5px]
                  bg-gradient-to-br from-green-400/50 via-transparent to-green-400/50
                "
              >
                <div className="bg-white rounded-2xl p-5 border border-gray-200">
                  <h3 className="text-base font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
