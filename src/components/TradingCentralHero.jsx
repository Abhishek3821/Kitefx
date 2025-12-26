import { motion } from "framer-motion";

export default function TradingCentralHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#05080f] via-[#070b12] to-black py-32">
      {/* GREEN WAVE / GRID GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        {/* soft glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[60%] bg-green-500/10 blur-3xl" />

        {/* grid lines */}
        <div
          className="absolute bottom-0 w-full h-full opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(34,197,94,0.25) 0px, rgba(34,197,94,0.25) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(90deg, rgba(34,197,94,0.25) 0px, rgba(34,197,94,0.25) 1px, transparent 1px, transparent 18px)",
            maskImage:
              "linear-gradient(to top, black 0%, black 30%, transparent 70%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Trade up with KiteFX on{" "}
          <span className="text-green-500">Trading Central</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Empowering Investment Analytics for Everyone. Trading Central's
          acclaimed analytical solutions condense vast, unstructured data into
          concise insights and striking visuals that boost involvements,
          assurance, and initiative.
        </p>
      </motion.div>
    </section>
  );
}
