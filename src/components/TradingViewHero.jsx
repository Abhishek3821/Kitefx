import { motion } from "framer-motion";

export default function TradingViewHero() {
  return (
    <section className="relative w-full min-h-[70vh] bg-black overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/tradingview-bg.jpg"
          alt="TradingView chart background"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Trade on TradingView
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Level up your trading experience with the best-in-class charting and
          analytical tools.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-500 hover:bg-green-600 transition text-black font-semibold px-10 py-4 rounded-xl"
        >
          Start Trading
        </motion.button>
      </motion.div>
    </section>
  );
}
