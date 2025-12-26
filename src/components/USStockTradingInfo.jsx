export default function USStockTradingInfo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto space-y-8 text-gray-900">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          US Stock Trading
        </h2>

        {/* INTRO */}
        <p className="text-gray-700 leading-relaxed">
          The US Internal Revenue Service (IRS) requires all non–US resident
          holders of US equity derivatives – (this includes CFDs) to be taxed on
          dividend adjustments.
        </p>

        {/* SECTION 1 */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold">What does it mean for me?</h3>
          <p className="text-gray-700 leading-relaxed">
            When trading any US listed equities with KiteFX Global, the Dividend
            adjustments on your long positions are credited to your account, and
            the applicable withholding taxes are automatically deducted.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold">How much will be deducted?</h3>
          <p className="text-gray-700 leading-relaxed">
            The deduction rate varies depending on the underlying market, but
            where a treaty between your country of residence and the relevant
            market exists, the rate may be reduced to 15%. Please note that the
            withholding tax deduction doesn't apply to short positions.
          </p>
        </div>

        {/* SECTION 3 */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">What should I do?</h3>

          <p className="text-gray-700 leading-relaxed">
            If you are an <span className="font-semibold">INDIVIDUAL</span> and
            want the applicable reduced rate, please fill out{" "}
            <a
              href="#"
              className="text-green-500 font-semibold hover:underline"
            >
              FORM W-8BEN
            </a>{" "}
            and upload it to your Client Area.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you are an <span className="font-semibold">ENTITY</span> and want
            the applicable reduced rate, please fill out{" "}
            <a
              href="#"
              className="text-green-500 font-semibold hover:underline"
            >
              FORM W-8BEN-E
            </a>{" "}
            and upload it to your Client Area.
          </p>

          <p className="text-gray-700 leading-relaxed">
            For further information please do not hesitate to contact our{" "}
            <a
              href="#"
              className="text-green-500 font-semibold hover:underline"
            >
              SUPPORT TEAM
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
