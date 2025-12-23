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
};
export const navItems = [
  {
    label: "QUICK START",
    dropdown: [
      // ================= Introduction =================
      {
        title: "Introduction",
        links: [
          { label: "Why IC Markets Global", href: "/WhyICMarketsGlobal" },
          { label: "What you can trade", href: "/Whatyoucantrade" },
          { label: "Simple Pricing", href: "/SimplePricing" },
          { label: "Forex Trading", href: "/ForexTrading" },
        ],
      },

      // ================= Your Account =================
      {
        title: "Your Account",
        links: [
          { label: "Live Accounts", href: "/live-accounts" },
          { label: "Demo Accounts", href: "/demo-accounts" },
          { label: "How to deposit", href: "/Howtodeposit" },
          {
            label: "How to withdraw",
            href: "/Howtowithdraw",
          },
        ],
      },

      // ================= Trading Platform =================
      {
        title: "Trading Platform",
        links: [
          { label: "MetaTrader", href: "/efx-trader" },
          {
            label: "TradingView",
            href: "/tradingview",
            badge: "NEW",
          },
          { label: "cTrader", href: "/ctrader" },
          { label: "WebTrader", href: "/webtrader" },
          { label: "IC Social", href: "/social-trading" },
          { label: "Signal Start", href: "/signal-start" },
          { label: "ZuluTrade", href: "/zulutrade" },
        ],
      },
    ],
  },
  {
    label: "TRADING",
    dropdown: [
      // ================= Trading Accounts =================
      {
        title: "Trading Accounts",
        links: [
          { label: "Accounts Overview", href: "/AccountOverview" },
          { label: "Raw Spread", href: "/RawSpread" },
          { label: "cTrader Raw Spread", href: "/CTraderRawSpread" },
          { label: "Standard", href: "/Standard" },
          { label: "Islamic", href: "/Islamic" },
          { label: "How to deposit", href: "/Howtodeposit" },
          {
            label: "How to withdraw",
            href: "/Howtowithdraw",
          },
        ],
      },

      // ================= Products =================
      {
        title: "Products",
        links: [
          { label: "Range of Products", href: "/RangeofProducts" },
          { label: "Forex CFDs", href: "/ForexCFDs" },
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
    dropdown: [
      // ================= MetaTrader 5 & 4 =================
      {
        title: "MetaTrader 5 & 4",
        links: [
          {
            label: "MetaTrader 5",
            href: "/Metatrader5",
            badge: "RECOMMENDED",
          },
          { label: "MetaTrader 4", href: "/Metatrader4" },
          { label: "MetaTrader WebTrader", href: "/MetatraderWebtrader" },
          { label: "MetaTrader iPhone/iPad", href: "/MetatraderIphoneIpad" },
          { label: "MetaTrader Android", href: "/MetatraderAndroid" },
          
        ],
      },

      // ================= cTrader =================
      {
        title: "cTrader",
        links: [
          { label: "cTrader", href: "/ctrader" },
          { label: "cTrader Web", href: "/ctrader-web" },
          { label: "cTrader iPhone/iPad", href: "/ctrader-ios" },
          { label: "cTrader iMac", href: "/ctrader-mac" },
          { label: "cTrader Android", href: "/ctrader-android" },
          { label: "cTrader Automate", href: "/ctrader-automate" },
          { label: "cTrader Copy Trading", href: "/ctrader-copy-trading" },
        ],
      },

      // ================= TradingView + Tools =================
      {
        title: "TradingView",
        links: [{ label: "TradingView", href: "/tradingview" }],
      },
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
    ],
  },
  {
    label: "MORE",
    dropdown: [
      // ================= Company =================
      {
        title: "Company",
        links: [
          { label: "About ElliteFX", href: "/about-ellitefx" },
          { label: "Why ElliteFX", href: "/why-ellitefx" },
          {
            label: "Sponsorship",
            href: "/sponsorship",
            badge: "NEW",
          },
          { label: "Contact Us", href: "/contact-us" },
          { label: "Regulation", href: "/regulation" },
          { label: "Insurance", href: "/insurance" },
          { label: "Careers", href: "/careers" },
        ],
      },

      // ================= Education =================
      {
        title: "Education",
        links: [
          { label: "Education Overview", href: "/education" },
          { label: "Advantages of Forex", href: "/advantages-of-forex" },
          { label: "Advantages of CFDs", href: "/advantages-of-cfds" },
          { label: "Web TV", href: "/web-tv" },
          { label: "Webinar", href: "/webinar" },
          {
            label: "Podcast",
            href: "/podcast",
            badge: "NEW",
          },
          {
            label: "Getting Started Tutorial Videos",
            href: "/getting-started-videos",
          },
        ],
      },

      // ================= Help & Resources =================
      {
        title: "Help & Resources",
        links: [
          { label: "Help Centre", href: "/help-centre" },
          { label: "ElliteFX Blog", href: "/blog" },
          { label: "Forex Calculators", href: "/forex-calculator" },
          { label: "Economic Calendar", href: "/economic-calendar" },
          { label: "Forex Glossary", href: "/forex-glossary" },
          { label: "TeamViewer", href: "/teamviewer" },
          { label: "Cybersecurity and Scams", href: "/cybersecurity" },
          {
            label: "Protecting Your Account",
            href: "/protecting-your-account",
          },
        ],
      },
    ],
  },
];

export const footerItems = [
  {
    title: "Quick Start",
    links: [
      { name: "Why ElliteFX", href: "/why-ellitefx" },
      { name: "What Can You Trade?", href: "/what-can-you-trade" },
      { name: "What is Forex Trading", href: "/forex-trading" },
      { name: "What is CFDs Trading", href: "/cfd-trading" },
      { name: "ECN Pricing", href: "/ecn-pricing" },
      { name: "EFX Trader Login", href: "/efx-trader-login" },
    ],
  },
  {
    title: "Trading",
    links: [
      { name: "Trading Account Types", href: "/account-types" },
      { name: "Islamic Account Types", href: "/islamic-trading-accounts" },
      { name: "Account Funding", href: "/account-funding" },
      { name: "Funds Withdrawal", href: "/account-funding/withdraw-funds" },
      { name: "Spreads", href: "/forex-spreads" },
      { name: "Swap Rates", href: "/swap-rates" },
    ],
  },
  {
    title: "Markets",
    links: [
      { name: "Forex", href: "/forex" },
      { name: "Shares", href: "/shares-cfds" },
      { name: "Metals", href: "/metals" },
      { name: "Commodities", href: "/commodities" },
      { name: "Indices", href: "/indices" },
      { name: "Digital Currencies", href: "/digital-currencies" },
      { name: "Bonds", href: "/bonds" },
      { name: "ETFs", href: "/etf-trading" },
    ],
  },
  {
    title: "Platforms & Tools",
    links: [
      { name: "TradingView", href: "/tradingview" },
      { name: "cTrader", href: "/ctrader" },
      { name: "EFX Trading App", href: "/mobile-trading-app" },
      { name: "TradeMedic", href: "/trademedic" },
      { name: "MAM/PAMM", href: "/mam-pamm" },
      { name: "VPS", href: "/virtual-private-server" },
      { name: "Traders Toolbox", href: "/traders-toolbox" },
      { name: "Trading Central", href: "/trading-central" },
    ],
  },
  {
    title: "Copy & Social Trading",
    links: [
      { name: "Social Trading", href: "/social-trading" },
      { name: "Signal Start", href: "/signal-start" },
      { name: "Forex Calculator", href: "/forex-calculator" },
      { name: "EFX Fees & Charges", href: "/efx-fees-and-charges" },
      { name: "MT4 Fees & Charges", href: "/mt4-fees-charges" },
      { name: "Holiday Trading Hours", href: "/holiday-trading-hours" },
    ],
  },
  {
    title: "Company & Support",
    links: [
      { name: "About ElliteFX", href: "/about-ellitefx" },
      { name: "Regulation", href: "/regulation" },
      { name: "Careers", href: "/careers" },
      { name: "Autochartist", href: "/autochartist" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
];
