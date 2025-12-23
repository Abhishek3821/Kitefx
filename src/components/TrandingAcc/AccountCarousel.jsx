import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- DATA ---------------- */

const accounts = [
  {
    title: "Raw Spread",
    subtitle: "Account",
    platform: "MetaTrader",
    commission: "$3.5",
    spread: "0.0",
    popular: true,
    cta: "Start Trading now",
  },
  {
    title: "Raw Spread",
    subtitle: "Account (cTrader)",
    platform: "cTrader, TradingView",
    commission: "$3.0",
    spread: "0",
    popular: false,
    cta: "Start Trading now",
  },
  {
    title: "Standard",
    subtitle: "Account",
    platform: "MetaTrader",
    commission: "$0",
    spread: "0.8",
    popular: false,
    cta: "Start Trading now",
  },
  {
    title: "Starter",
    subtitle: "Account",
    platform: "MetaTrader",
    commission: "$0",
    spread: "1.5",
    popular: false,
    cta: "Get early access",
  },
  {
    title: "ECN",
    subtitle: "Professional Account",
    platform: "MetaTrader",
    commission: "$2.5",
    spread: "0.1",
    popular: false,
    cta: "Start Trading now",
  },
  {
    title: "Islamic",
    subtitle: "Swap-Free Account",
    platform: "MetaTrader",
    commission: "$0",
    spread: "1.0",
    popular: false,
    cta: "Start Trading now",
  },
];

/* ---------------- CAROUSEL ---------------- */

export default function AccountCarousel() {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current || !cardRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;
    const gap = 24; // Tailwind gap-6 = 24px
    const scrollAmount = cardWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-gray-50 py-16">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-6 md:px-16 scrollbar-hide"
      >
        {accounts.map((item, index) => (
          <div
            key={index}
            ref={index === 0 ? cardRef : null}
            className="min-w-[85%] sm:min-w-[48%] lg:min-w-[32%] xl:min-w-[24%]"
          >
            <AccountCard data={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function AccountCard({ data }) {
  return (
    <div className="h-full rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
      {/* Header */}
      <div
        className={`relative p-6 text-white ${
          data.popular
            ? "bg-gradient-to-br from-green-600 to-green-600"
            : "bg-green-600"
        }`}
      >
       

        <p className="text-sm opacity-80">{data.subtitle}</p>
        <h3 className="text-2xl font-bold mt-1">{data.title}</h3>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[360px] justify-between">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Trading Platform</p>
            <p className="font-medium">{data.platform}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Commission</p>
              <p className="text-xl font-bold">{data.commission}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Spreads from</p>
              <p className="text-xl font-bold">{data.spread}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            className={`w-full py-3 rounded-full font-medium border transition ${
              data.cta.includes("early")
                ? "border-black hover:bg-black hover:text-white"
                : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            }`}
          >
            {data.cta}
          </button>

          <p className="text-center text-xs text-green-600 cursor-pointer">
            TRY A FREE DEMO
          </p>
        </div>
      </div>
    </div>
  );
}
