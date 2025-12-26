export default function CustomerServiceAndTrust() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20 space-y-20">
        <InfoBlock
          title="Unrivalled Customer Service"
          highlight="Support that understands traders."
          text="KiteFX Global is built around traders’ needs. Our experienced support team understands the forex market and provides reliable assistance whenever you need it. Trade with confidence knowing help is available 24 hours a day, 7 days a week."
        />
        <InfoBlock
          title="Advanced Trading Tools"
          highlight="Trade smarter with enhanced functionality."
          text="We extend MetaTrader 4 with advanced tools such as one-click trading, market depth, spread monitoring, risk calculators, and advanced order types—giving traders greater control and efficiency."
        />
        <InfoBlock
          title="Superior Trading Platforms"
          highlight="Access the world’s most powerful platforms."
          text="Trade on MetaTrader 4, MetaTrader 5, cTrader, and TradingView—industry-leading platforms trusted by traders worldwide. KiteFX Global delivers Raw Pricing access across all supported platforms."
        />
        KiteFX
        <InfoBlock
          title="Trust and Transparency"
          highlight="A trading environment built on integrity."
          text="Transparency is central to how we operate. With Raw Spreads, no requotes, no price manipulation, and no trading restrictions, traders receive fair and reliable market access at all times."
        />
        <InfoBlock
          title="Regulation"
          highlight="Your funds, protected and segregated."
          text="KiteFX Global is regulated by the Financial Services Authority of Seychelles (FSA). Client funds are securely held in segregated accounts with top-tier international banks and are never used for operational purposes."
        />
      </div>
    </section>
  );
  KiteFX;
}

/* ---------------- Reusable Block ---------------- */

function InfoBlock({ title, highlight, text }) {
  return (
    <div className="max-w-5xl border-l-4 border-gray-200 pl-6">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2">
        {title}
      </h2>

      <p className="text-sm sm:text-base font-semibold text-gray-900 mb-3">
        {highlight}
      </p>

      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}
