import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Scale,
  DollarSign,
  RefreshCcw,
  Clock,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const features = [
  {
    title: "Spreads",
    description:
      "Our spreads are market leading with prices streaming from over 25 different sources of pricing at the highest speed. Spreads can go as low as 0.0 pips on MetaTrader 4, 5, cTrader and TradingView Raw Platforms.",
    icon: TrendingUp,
  },
  {
    title: "Execution",
    description:
      "Our average execution speed is under 40ms once the order is received. We execute trades at one of the fastest speeds in the industry with ultra-fast servers in New York and London.",
    icon: Zap,
  },
  {
    title: "Margin and Leverage",
    description:
      "By offering leverage up to 1:1000 we open the forex market to retail traders. Leverage requires only a small margin, but can magnify both gains and losses.",
    icon: Scale,
  },
  {
    title: "Currency Pairs",
    description:
      "KiteFX Global streams prices on 60 currency pairs and 4 metals by aggregating quotes from over 25 pricing providers for unmatched execution quality.",
    icon: DollarSign,
  },
  {
    title: "Swap Rates",
    description:
      "We offer competitive long and short swap rates for all currency pairs and metals, calculated based on overnight interest rate differentials.",
    icon: RefreshCcw,
  },
  {
    title: "Trading Hours",
    description:
      "Easily view global trading hours across all products directly from MetaTrader, cTrader and TradingView platforms.",
    icon: Clock,
  },
];

/* ---------------- ANIMATION ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const TradingFeatures1 = () => {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold mb-4">Trading Conditions</h2>
          <p className="text-gray-600 max-w-3xl">
            Experience institutional-grade trading conditions with cutting-edge
            technology, deep liquidity, and ultra-fast execution.
          </p>
        </motion.div>

        {/* FEATURES LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 relative"
        >
          {/* Vertical line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-green-200" />

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="flex gap-6 items-start group relative"
              >
                {/* ICON */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-green-500 flex items-center justify-center transition group-hover:bg-green-500">
                    <Icon className="w-6 h-6 text-green-500 transition group-hover:text-white" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pb-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-4xl">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TradingFeatures1;
