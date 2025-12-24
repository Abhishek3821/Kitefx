import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

/* ================= DATA ================= */

const accounts = [
  {
    tag: "NEW",
    tagColor: "bg-green-400",
    title: "Raw Pro",
    platform: "Trading Platform MetaTrader",
    commission: "$3.0",
    commissionNote: "(per lot per side)",
    spread: "0.0",
    cta: "Get early access",
    ctaStyle: "border border-black",
  },
  {
    title: "Standard",
    platform: "Trading Platform MetaTrader",
    commission: "$0",
    commissionNote: "(per lot per side)",
    spread: "0.8",
    cta: "Start Trading now",
  },
  {
    tag: "POPULAR",
    tagColor: "bg-green-500",
    highlight: true,
    title: "Raw Spread",
    platform: "Trading Platform MetaTrader",
    commission: "$3.5",
    commissionNote: "(per lot per side)",
    spread: "0.0",
    cta: "Start Trading now",
  },
  {
    tag: "NEW",
    tagColor: "bg-green-400",
    title: "Raw Pro",
    platform: "Trading Platform MetaTrader",
    commission: "$3.0",
    commissionNote: "(per lot per side)",
    spread: "0.0",
    cta: "Get early access",
    ctaStyle: "border border-black",
  },
  {
    title: "Raw Spread",
    subtitle: "(cTrader)",
    platform: "cTrader, TradingView",
    commission: "$3.0",
    commissionNote: "(per USD 100k)",
    spread: "0",
    cta: "Start Trading now",
  },
];

/* ================= SLIDER ================= */

export default function AccountCardsSlider() {
  return (
    <section className="w-full py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-12 relative">

        {/* LEFT ARROW */}
        <button className="swiper-prev absolute -left-12 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-lg rounded-full p-3 hover:scale-110 transition">
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button className="swiper-next absolute -right-12 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-lg rounded-full p-3 hover:scale-110 transition">
          <ChevronRight />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {accounts.map((acc, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <AccountCard {...acc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function AccountCard({
  tag,
  tagColor,
  highlight,
  title,
  subtitle,
  platform,
  commission,
  commissionNote,
  spread,
  cta,
  ctaStyle,
}) {
  return (
    <div className="h-full rounded-2xl overflow-hidden border border-black bg-white shadow-sm hover:shadow-lg transition flex flex-col">
      
      {/* HEADER */}
      <div className="relative px-9 py-8 text-white bg-black">
        {tag && (
          <span
            className={`absolute top-4 left-1/2 -translate-x-1/2 
            text-xs px-4 py-1 rounded-full text-black font-semibold ${tagColor}`}
          >
            {tag}
          </span>
        )}

        <p className="text-sm opacity-80">Account</p>
        <h3 className="text-2xl font-bold">{title}</h3>

        <div className="h-5">
          {subtitle && <p className="text-sm mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* BODY */}
      <div className="px-9 py-9 flex flex-col flex-1 space-y-6">
        <p className="text-sm text-gray-700">{platform}</p>

        <Divider />
        <Row label="Commission" note={commissionNote} value={commission} />
        <Divider />
        <Row label="Spreads from" note="(pips)" value={spread} />
        <Divider />

        {/* CTA */}
        <div className="mt-auto space-y-2">
          <button
            className={`w-full py-3 rounded-lg font-semibold transition
              ${
                highlight
                  ? "bg-green-400 hover:bg-green-500"
                  : ctaStyle
                  ? ctaStyle
                  : "border border-green-400 hover:bg-green-50"
              }`}
          >
            {cta}
          </button>

          <div className="h-4">
            {highlight && (
              <p className="text-center text-xs text-green-500 font-semibold">
                TRY A FREE DEMO
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

const Divider = () => <div className="h-px bg-gray-200" />;

const Row = ({ label, note, value }) => (
  <div className="flex justify-between items-end">
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs text-gray-400">{note}</p>
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);
