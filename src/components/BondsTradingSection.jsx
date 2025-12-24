import Image from "../assets/kitefx19.webp";


const BondsTradingSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Image}
            alt="Bonds trading platforms"
            className="max-w-full h-auto"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            How does <br /> Bonds trading work?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Bonds are part of the fixed income asset class.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Bonds pay a regular fixed coupon to the bondholder and can be sold
            in secondary markets. Governments issue bonds to finance government
            spending on projects such as public infrastructure.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Traders generally trade bonds on the basis of future interest rate
            expectations.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If a central bank increases interest rates, bond prices will decline
            and yields will increase.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BondsTradingSection;
