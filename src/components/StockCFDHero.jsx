import { motion } from "framer-motion";

export default function StockCFDHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black overflow-hidden">
      {/* BACKGROUND IMAGE (RIGHT) */}
      <div className="absolute inset-0">
        <img
          src="/images/stock-cfd-hero.jpg"
          alt="Stock CFD trading"
          className="w-full h-full object-cover object-right"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-white space-y-8"
        >
          {/* TAG */}
          <span className="inline-flex items-center gap-2 bg-green-500 text-black text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
            <span className="w-4 h-4 border border-black rounded-full flex items-center justify-center text-xs">
              ⊕
            </span>
            Stock CFDs
          </span>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Level Up Your Investment Strategies
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            IC Insights is a comprehensive investment research and analysis
            platform designed to empower you to make data-powered decisions.
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-xl transition"
          >
            Open an Account
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
