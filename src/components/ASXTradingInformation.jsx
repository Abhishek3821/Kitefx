const ASXTradingInformation = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* MAIN TITLE */}
        <h2 className="text-4xl font-semibold text-gray-900">
          Information about ASX trading
        </h2>

        {/* MARKET DATA FEES */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Market Data Fees
          </h3>

          <p className="text-gray-700 leading-relaxed">
            From the <strong>1st September 2020</strong>, there will be a market
            data fee fixed at <strong>$22 AUD per month</strong>. This fee is
            charged <strong>once per calendar month</strong> directly to your
            account, after the end of the month in which you accessed the market
            data, e.g. the monthly data fee will be applied at the beginning of
            October to all traders who have accessed the market data during the
            month of September, and so forth.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you have multiple accounts and/or if you access the market data
            multiple times, <strong>you will only be charged once</strong>. If
            you have access to ASX share CFDs market data you{" "}
            <strong>do not need to make any changes to your account</strong>,
            this charge will be automatically applied each month.
          </p>
        </div>

        {/* COMMISSION FEES */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Commission fee on ASX Share CFDs?
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Regardless of the value of your trade, starting from the first of
            September 2020 you will be charged a minimum commission fee of{" "}
            <strong>$7 AUD per trade</strong> on the spot on your account.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ASXTradingInformation;
