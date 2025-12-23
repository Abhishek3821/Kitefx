import { useState } from "react";

export default function CurrencyPills() {
  const currencies = [
    { code: "AUD", name: "Australian Dollar" },
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "GBP", name: "British Pound (Sterling)" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "CHF", name: "Swiss Franc" },
  ];

  const [active, setActive] = useState(currencies[0].code);

  return (
    <section className="w-full bg-white py-8 sm:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Pills Wrapper */}
        <div
          className="
            flex gap-3 sm:gap-4
            overflow-x-auto sm:flex-wrap
            scrollbar-hide
          "
        >
          {currencies.map((currency) => {
            const isActive = active === currency.code;

            return (
              <button
                key={currency.code}
                onClick={() => setActive(currency.code)}
                className={`
                  flex-shrink-0
                  flex items-center
                  rounded-full border
                  transition-all duration-300 ease-out
                  
                  px-4 py-2 text-xs
                  sm:px-5 sm:py-2.5 sm:text-sm
                  lg:px-6 lg:py-3 lg:text-base

                  ${
                    isActive
                      ? "bg-green-600 text-white border-green-600 shadow-md"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-500 hover:text-black"
                  }

                  hover:-translate-y-0.5
                  hover:shadow-[0_6px_20px_rgba(34,197,94,0.35)]
                `}
              >
                <span className="whitespace-nowrap font-medium">
                  <span className="font-semibold">{currency.code}</span>
                  <span className="mx-1">–</span>
                  {currency.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
