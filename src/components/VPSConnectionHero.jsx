export default function VPSConnectionHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-28 px-4">
      
      {/* BACKGROUND CURVES */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[120%] h-[120%] opacity-60"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(34,197,94,0.35), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at left, rgba(34,197,94,0.15) 0, rgba(34,197,94,0.15) 1px, transparent 2px, transparent 12px)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          How to connect to IC VPS?
        </h2>

        <p className="text-gray-300 text-base md:text-lg">
          Begin trading on IC VPS in just five easy steps. Connect and get
          started now
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition text-black font-semibold px-8 py-3 rounded-lg">
          Learn more
        </button>
      </div>
    </section>
  );
}
