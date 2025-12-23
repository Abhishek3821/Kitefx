import Image from "../assets/kitefx19.webp";

const HowForexTradingWorks = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* -------- Left Image -------- */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Forex trading platforms"
            className="max-w-md lg:max-w-lg"
          />
        </div>

        {/* -------- Right Content -------- */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            How does Forex Trading work?
          </h2>

          <p className="text-gray-700 leading-relaxed text-base">
            Forex trading is similar to trading shares or futures except that
            when trading foreign exchange you are buying or selling one currency
            against another and you do not take delivery of the underlying
            currency. One of the key advantages Forex has over other financial
            instruments is that relatively small lot sizes can be traded – lot
            sizes can be as small as 1000 units (one micro lot). Typically,
            foreign exchange also involves leverage which in some cases can be
            as high as 1:1000, which is very different to trading shares where no
            leverage is involved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowForexTradingWorks;
