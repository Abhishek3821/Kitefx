import { useEffect, useState } from "react";

/* ---------------- MOCK DATA ---------------- */

const news = [
  { title: "Dollar extends slide despite solid GDP print", time: "1 hour ago" },
  { title: "FTSE 100 Down Marginally", time: "1 hour ago" },
  { title: "USD/JPY Bank of Japan Hike Boosts Yen", time: "2 hours ago" },
  { title: "CAC 40 Up Marginally In Lackluster Trade", time: "2 hours ago" },
  { title: "Precious metals rewarded for success", time: "2 hours ago" },
  {
    title: "ECB Markets Briefing | Bullion breaches $4,500",
    time: "2 hours ago",
  },
  { title: "Sensex, Nifty Settle Marginally Lower", time: "2 hours ago" },
  { title: "Canadian Dollar Climbs Against Most Majors", time: "2 hours ago" },
  { title: "NZ Dollar Advances Against Most Majors", time: "2 hours ago" },
  { title: "Australian Dollar Rises Against Majors", time: "2 hours ago" },
];

const sessions = [
  { name: "New York", status: "opens in 0h, 8m, 25s", active: false },
  { name: "London", status: "closes in 4h, 8m, 25s", active: true },
  { name: "Tokyo", status: "opens in 12h, 8m, 25s", active: false },
  { name: "Sydney", status: "opens in 9h, 8m, 25s", active: false },
];

/* ---------------- COMPONENT ---------------- */

const ForexNewsAndSessions = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* FOREX NEWS */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-6">Forex News</h2>

          <div className="border rounded-lg">
            <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b">
              Top News
            </div>

            <ul className="divide-y">
              {news.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition"
                >
                  <span className="text-orange-500 mt-1">•</span>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOREX TIME ZONES */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Forex Time Zones</h2>

          <div className="border rounded-lg">
            <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b">
              Markets
            </div>

            <ul className="divide-y">
              {sessions.map((session, index) => (
                <li
                  key={index}
                  className="px-4 py-3 flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        session.active ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                    <span className="text-sm font-medium">{session.name}</span>
                  </div>

                  <span className="text-xs text-gray-600">
                    {session.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexNewsAndSessions;
