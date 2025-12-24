import { TrendingUp, Users, Star, Newspaper } from "lucide-react";
import Image from "../assets/kitefx27.webp";

const ICInsightsSection = () => {
  return (
    <section className="bg-green-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why use IC Insights on your trading?
          </h2>

          <p className="text-gray-600 mb-6">
            Navigate finance and stocks effortlessly with IC Insights—your
            trusted companion through stock investments and cryptocurrencies.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Powered by</span>
            <span className="font-semibold text-gray-800">TipRanks</span>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-16">
            <Feature
              icon={<TrendingUp className="w-6 h-6" />}
              title="Track Trending Stocks"
              text="Keep up with analyst-trending stocks, sorting by top-rated, lowest-rated, or most frequently rated stocks over the past 3 days, week, or month."
            />

            <Feature
              icon={<Star className="w-6 h-6" />}
              title="Hear from the Pros"
              text="Get insights from top analysts, backed by thorough research, to add expert advice to your trading toolkit."
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src={Image}
              alt="IC Insights Mobile App"
              className="w-full max-w-xs"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-16">
            <Feature
              icon={<Users className="w-6 h-6" />}
              title="Trade with the Community"
              text="Connect with fellow traders through Crowd Wisdom, filtering out social media noise to identify trends and opportunities."
            />

            <Feature
              icon={<Newspaper className="w-6 h-6" />}
              title="All the News in One Glance"
              text="Stay informed with News Sentiment analysis to discover if stocks are Bullish, Bearish, or Neutral — all at a glance."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

/* FEATURE CARD */
const Feature = ({ icon, title, text }) => {
  return (
    <div className="text-center lg:text-left">
      <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-400 text-green-500 mx-auto lg:mx-0 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default ICInsightsSection;
