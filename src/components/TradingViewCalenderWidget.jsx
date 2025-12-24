// components/TradingViewCalendarWidget.jsx
"use client";
import React, { useEffect, useRef } from "react";

export default function TradingViewCalendarWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent duplicate script injection (Next.js strict mode fix)
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      isTransparent: false, // ❗ IMPORTANT
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
      width: "100%", // ❗ must be 100%
      height: 800,
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
          📅 Economic Calendar
        </h2>
      </div>

      {/* HARD OVERFLOW GUARD */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="tradingview-widget-container w-full min-h-[800px] max-h-[800px]"
        />
      </div>
    </div>
  );
}
