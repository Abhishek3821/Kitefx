import kitefx1 from "./kitefx1.webp";
import kitefx2 from "./kitefx2.webp";
import kitefx3 from "./kitefx3.webp";
import kitefx4 from "./kitefx4.webp";
import kitefx5 from "./kitefx5.webp";
import kitefx6 from "./kitefx6.webp";
import kitefx7 from "./kitefx7.webp";
import kitefx8 from "./kitefx8.webp";
import kitefx9 from "./kitefx9.webp";
import kitefx10 from "./kitefx10.webp";
import kitefx11 from "./kitefx11.webp";
import kitefx12 from "./kitefx12.webp";
import kitefx13 from "./kitefx13.webp";
import kitefx14 from "./kitefx14.webp";
import kitefx15 from "./kitefx15.webp";
import kitefx16 from "./kitefx16.webp";
import kitefx17 from "./kitefx17.webp";
import kitefx18 from "./kitefx18.webp";
import kitefx19 from "./kitefx19.webp";
import kitefx20 from "./kitefx20.webp";
import kitefx21 from "./kitefx21.webp";
import kitefx22 from "./kitefx22.webp";
import kitefx23 from "./kitefx23.webp";
import kitefx24 from "./kitefx24.webp";
import kitefx25 from "./kitefx25.webp";
export const assets = {
  kitefx1,
  kitefx2,
  kitefx3,
  kitefx4,
  kitefx5,
  kitefx6,
  kitefx7,
  kitefx8,
  kitefx9,
  kitefx10,
  kitefx11,
  kitefx12,
  kitefx13,
  kitefx14,
  kitefx15,
  kitefx16,
  kitefx17,
  kitefx18,
  kitefx19,
  kitefx20,
  kitefx21,
  kitefx22,
  kitefx23,
  kitefx24,
  kitefx25,
};
export const navItems = [
  {
    label: "QUICK START",
    promo: {
      title: "Trade with a high-performance trading platform",
      ctaPrimary: "Start Trading",
      ctaSecondary: "Try Demo",
    },
    dropdown: [
      // ================= Introduction =================
      {
        title: "Introduction",
        links: [
          { label: "Why KiteFX", href: "/why-kitefx" },
          { label: "What you can trade", href: "/what-you-can-trade" },
          { label: "Simple Pricing", href: "/simple-pricing" },
          { label: "Forex Trading", href: "/forex-trading" },
        ],
      },

      // ================= Your Account =================
      {
        title: "Your Account",
        links: [
          { label: "Live Accounts", href: "/live-accounts" },
          { label: "Demo Accounts", href: "/demo-accounts" },
          { label: "How to deposit", href: "/how-to-deposit" },
          {
            label: "How to withdraw",
            href: "/how-to-withdraw",
          },
        ],
      },

      // ================= Trading Platform =================
      {
        title: "Trading Platform",
        links: [
          { label: "MetaTrader", href: "/metatrader-4" },
          {
            label: "TradingView",
            href: "/trading-view",
            badge: "NEW",
          },
          { label: "cTrader", href: "/ctrader" },
          { label: "WebTrader", href: "/webtrader" },
        ],
      },
    ],
  },
  {
    label: "TRADING",
    promo: {
      title: "Access Global Markets with a Multi-Asset Trading Platform",
      ctaPrimary: "Explore Markets",
      ctaSecondary: "View Pricing",
    },
    dropdown: [
      // ================= Trading Accounts =================
      {
        title: "Trading Accounts",
        links: [
          { label: "Accounts Overview", href: "/account-overview" },
          { label: "Raw Spread", href: "/raw-spread" },
          { label: "cTrader Raw Spread", href: "/ctrader-raw-spread" },
          { label: "Standard", href: "/standard" },
          { label: "Islamic", href: "/islamic" },
          { label: "How to deposit", href: "/how-to-deposit" },
          {
            label: "How to withdraw",
            href: "/how-to-withdraw",
          },
        ],
      },

      // ================= Products =================
      {
        title: "Products",
        links: [
          { label: "Range of Products", href: "/range-of-products" },
          { label: "Forex CFDs", href: "/forex-cfds" },
          { label: "Commodities CFDs", href: "/commodities" },
          { label: "Indices CFDs", href: "/indices" },
          { label: "Bonds CFDs", href: "/bonds" },
          { label: "Cryptocurrency CFDs", href: "/digital-currencies" },
          { label: "Stocks CFDs", href: "/shares-cfds" },
          { label: "Futures CFDs", href: "/futures-cfds" },
        ],
      },

      // ================= Pricing =================
      {
        title: "Pricing",
        links: [
          { label: "Trading Conditions", href: "/trading-conditions" },
          { label: "Spreads", href: "/forex-spreads" },
          { label: "Trading Hours", href: "/trading-hours" },
          { label: "Swap Rates", href: "/swap-rates" },
        ],
      },
    ],
  },
  {
    label: "PLATFORMS",
    promo: {
      title: "Trade from anywhere, on any device, at any time",
      ctaPrimary: "View Platforms",
      ctaSecondary: "Download",
    },
    dropdown: [
      // ================= MetaTrader 5 & 4 =================
      {
        title: "MetaTrader 5 & 4",
        links: [
          {
            label: "MetaTrader 5",
            href: "/metatrader-5",
            badge: "RECOMMENDED",
          },
          { label: "MetaTrader 4", href: "/metatrader-4" },
          { label: "MetaTrader WebTrader", href: "/metatrader-webtrader" },
          { label: "MetaTrader iPhone/iPad", href: "/metatrader-iphone/ipad" },
          { label: "MetaTrader Android", href: "/metatrader-android" },
        ],
      },

      // ================= cTrader =================
      {
        title: "cTrader",
        links: [
          { label: "cTrader", href: "/ctrader" },
          { label: "cTrader Web", href: "/ctrader-web" },
          { label: "cTrader iPhone/iPad", href: "/ctrader-iphone/ipad" },
          { label: "cTrader iMac", href: "/ctrader-imac" },
          { label: "cTrader Android", href: "/ctrader-android" },
          { label: "cTrader Copy Trading", href: "/ctrader-copy-trading" },
        ],
      },

      // ================= TradingView + Tools =================
     
      {
        title: "Trading Tools",
        links: [
          {
            label: "Virtual Private Server",
            href: "/virtual-private-server",
          },
          { label: "Trading Servers", href: "/trading-servers" },
          {
            label: "MetaTrader 4 Advanced Trading Tools",
            href: "/mt4-advanced-tools",
          },
          { label: "IC Insights", href: "/ic-insights" },
          { label: "Trading Central", href: "/trading-central" },
        ],
      },
       {
        title: "TradingView",
        links: [{ label: "TradingView", href: "/trading-view" }],
      },
    ],
  },
  {
    label: "MORE",
    promo: {
      title: "Trade with a high-performance trading platform",
      ctaPrimary: "Learn More",
      ctaSecondary: "Contact Us",
    },
    dropdown: [
      // ================= Company =================
      {
        title: "Company",
        links: [
          { label: "About KiteFX", href: "/about-kitefx" },
          { label: "Why KiteFX", href: "/why-kitefx" },

          { label: "Careers", href: "/careers" },
        ],
      },

      // ================= Help & Resources =================
      {
        title: "Help & Resources",
        links: [
          { label: "Contact Us", href: "/contact-us" },
          { label: "Forex Calculators", href: "/forex-calculator" },
          { label: "Economic Calendar", href: "/economic-calender" },
        ],
      },
    ],
  },
];
