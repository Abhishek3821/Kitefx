export default function AccountCards() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Cards Wrapper */}
        <div className="group grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          <FadeCard
            title="Raw Spread"
            subtitle="(cTrader)"
            platform="cTrader and TradingView"
            commission="$3"
            commissionLabel="per USD 100k"
          />

          <FadeCard
            title="Raw Spread"
            platform="MetaTrader"
            commission="$3.5"
            commissionLabel="per lot per side"
            popular
          />

          <FadeCard
            title="Standard"
            platform="MetaTrader"
            commission="$0"
            commissionLabel="per lot per side"
          />

        </div>

      </div>
    </section>
  );
}

/* ---------------- Fade Card ---------------- */

function FadeCard({
  title,
  subtitle,
  platform,
  commission,
  commissionLabel,
  popular,
}) {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden
        bg-black text-white border border-neutral-800
        transition-all duration-500 ease-out
        opacity-80 scale-[0.97]
        group-hover:opacity-40
        hover:!opacity-100 hover:scale-100 hover:-translate-y-3 hover:shadow-2xl
        animate-fadeUp
        min-h-[520px]
        flex flex-col
      "
    >
      {/* Header */}
      <div className="relative p-10 text-center bg-black">
        {popular && (
          <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-400 text-black text-xs font-bold px-4 py-1 rounded-full animate-pulse">
            POPULAR
          </span>
        )}

        <p className="text-sm opacity-70">Account</p>
        <h3 className="text-2xl font-bold mt-2">{title}</h3>
        {subtitle && (
          <p className="text-sm mt-1 opacity-60">{subtitle}</p>
        )}
      </div>

      {/* Body */}
      <div className="p-10 space-y-8 flex-1 flex flex-col justify-between">

        <Row label="Trading Platform" value={platform} />

        <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
          <div>
            <p className="text-sm opacity-70">Commission</p>
            <p className="text-xs opacity-50">({commissionLabel})</p>
          </div>
          <p className="text-3xl font-bold">{commission}</p>
        </div>

        {/* CTA */}
        <div>
          <button
            className="
              w-full mt-6 py-3 rounded-xl font-semibold
              border border-green-400 text-white
              transition-all duration-300
              hover:bg-green-400 hover:text-black
            "
          >
            Open Account
          </button>

          <div className="text-center text-xs mt-4 space-x-2">
            <span className="text-green-400 font-semibold cursor-pointer hover:underline">
              TRY A FREE DEMO
            </span>
            <span className="opacity-50">OR</span>
            <span className="text-green-400 font-semibold cursor-pointer hover:underline">
              LEARN MORE
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ---------------- Row ---------------- */

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="opacity-70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
