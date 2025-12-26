import { CheckCircle, Headphones } from "lucide-react";

export default function TradingFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-16">
          {/* Intro Line */}
          <div className="flex items-start gap-4 text-sm sm:text-base text-gray-700">
            <span className="mt-2 h-3 w-3 rounded-full bg-green-500 shrink-0" />
            <p className="leading-relaxed">
              Join KiteFX Global to experience tight spreads and trading
              conditions plus a live support team committed to helping you.
            </p>
          </div>

          {/* Feature Block */}
          <Feature
            title="Low Spreads"
            text="Our mission is to provide traders with the lowest spreads possible during all market conditions. We have invested heavily in technology and established strong relationships with some of the largest and most reliable liquidity providers in the market. We are constantly adding and tweaking our technology in order to bring our traders the best possible conditions in the industry."
          />

          <Feature
            title="Fast Execution"
            text="KiteFX Global utilises enterprise-grade hardware on our trade servers in the NY4 & LD5 data centre in New York & London respectively. Our trade servers are collocated with the data server of our pricing providers in these data centres. Dedicated fibre optic cross connects ensure the lowest latency and fastest possible trade execution for our clients."
          />

          <Feature
            title="Superior Technology"
            text="KiteFX Global has partnered with the world’s best trading technology companies to bring you the ultimate trading experience and cutting-edge trading tools. These tools include: Depth of Market (DoM), inbuilt spread monitoring, ladder trading, automated close of trades with custom order templates, and more. Our iPhone and Android trading applications have been optimised to provide you the best possible mobile trading experience."
          />
        </div>

        {/* RIGHT CONTACT CARD */}
        <div className="relative">
          <div className="sticky top-24 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition hover:shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                <Headphones className="text-green-600" size={22} />
              </div>
              <h3 className="text-2xl font-bold">Contact Us</h3>
            </div>

            {/* Availability */}
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              We are here <span className="font-semibold">24hrs a day</span>
              <br />
              Monday to Sunday.
            </p>

            {/* Links */}
            <div className="space-y-5">
              <ContactItem label="Help Centre" />
              <ContactItem label="Email Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function Feature({ title, text }) {
  return (
    <div className="relative pl-6 border-l-4 border-green-500">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function ContactItem({ label }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-gray-800 cursor-pointer hover:text-green-600 transition">
      <CheckCircle className="text-green-500" size={18} />
      {label}
    </div>
  );
}
