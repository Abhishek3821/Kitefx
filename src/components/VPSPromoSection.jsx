export default function VPSPromoSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Access Next Level Trading <br />
            with a Virtual Private Server (VPS)
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Execute your EAs in a trouble-free environment without the need for
            additional computer hardware, backup internet, or a power supply,
            all thanks to a Virtual Private Server (VPS). KiteFX Global
            recommends <strong>IC VPS</strong> or <strong>ForexVPS</strong>, a
            partner provider co-located within Equinix data centres with direct
            cross-connections to our trading servers in Equinix NY4.
          </p>
        </div>

        {/* RIGHT CTA CARD */}
        <div className="bg-green-100 rounded-2xl p-10 text-center space-y-6">
          <p className="text-lg text-gray-900">
            Access over <span className="font-bold">200 markets</span> & tight
            pricing with a
          </p>

          <h3 className="text-xl font-bold text-gray-900">
            Trusted Global Forex CFD Provider
          </h3>

          <button className="bg-green-500 hover:bg-green-600 transition text-black font-semibold px-8 py-3 rounded-lg">
            Start Trading
          </button>
        </div>
      </div>
    </section>
  );
}
