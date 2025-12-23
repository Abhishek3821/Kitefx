export default function FundingOptions() {
  const fundingMethods = [
    {
      title: "Credit and Debit Cards",
      logos: ["💳", "VISA"],
      currencies: ["AUD", "USD", "JPY", "EUR", "NZD", "SGD", "GBP", "CAD"],
    },
    {
      title: "PayPal",
      logos: ["PayPal"],
      currencies: ["AUD", "USD", "JPY", "EUR", "NZD", "SGD", "GBP", "CAD", "HKD", "CHF"],
    },
    {
      title: "Neteller",
      logos: ["NETELLER"],
      currencies: ["USD", "AUD", "GBP", "EUR", "CAD", "SGD", "JPY"],
    },
    {
      title: "Skrill",
      logos: ["SKRILL"],
      currencies: ["USD", "EUR", "GBP", "AUD"],
    },
    {
      title: "Bank Transfer",
      logos: ["🏦"],
      currencies: ["USD", "EUR", "GBP", "AUD", "CAD"],
    },
    {
      title: "UnionPay",
      logos: ["UNIONPAY"],
      currencies: ["USD", "CNY"],
    },
    {
      title: "Fasapay",
      logos: ["FASAPAY"],
      currencies: ["USD", "IDR"],
    },
    {
      title: "BPay",
      logos: ["BPAY"],
      currencies: ["AUD"],
    },
   
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {fundingMethods.map((method, index) => (
            <FundingCard key={index} {...method} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- Funding Card ---------------- */

function FundingCard({ title, logos, currencies }) {
  return (
    <div
      className="
        group relative
        bg-white/80 backdrop-blur-md
        rounded-3xl p-8
        border border-gray-200
        flex flex-col justify-between
        transition-all duration-500 ease-out
        hover:-translate-y-3 hover:scale-[1.02]
        hover:shadow-[0_25px_60px_rgba(34,197,94,0.25)]
      "
    >
      {/* Top Accent Line */}
      <span className="absolute inset-x-10 -top-px h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition" />

      {/* Header */}
      <div className="text-center space-y-4">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Funding option
        </p>

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Logos */}
        <div className="flex justify-center gap-4 text-lg font-bold">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="
                px-5 py-2 rounded-xl
                bg-gray-100 text-gray-700
                transition group-hover:bg-green-50 group-hover:text-green-600
              "
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Currencies */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          Accepted Currencies
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {currencies.map((cur) => (
            <span
              key={cur}
              className="
                px-4 py-1.5 rounded-full
                bg-gray-100 text-sm font-medium text-gray-700
                transition-all
                hover:bg-green-100 hover:text-green-700 hover:-translate-y-0.5
              "
            >
              {cur}
            </span>
          ))}
        </div>
      </div>

      {/* Processing */}
      <div className="mt-8 text-center">
        <p className="text-xs tracking-widest text-gray-400">
          APPROX PROCESSING TIME
        </p>

        <span className="
          inline-block mt-3 px-6 py-2
          rounded-full bg-gray-200 text-sm font-semibold text-gray-700
        ">
          INSTANT
        </span>
      </div>

      {/* CTA */}
      <button
        className="
          mt-10 w-full py-3 rounded-xl
          font-bold text-black
          bg-gradient-to-r from-green-400 to-green-500
          transition-all duration-300
          hover:from-green-400 hover:to-green-600
          hover:shadow-[0_10px_30px_rgba(34,197,94,0.45)]
        "
      >
        Deposit Now
      </button>
    </div>
  );
}
