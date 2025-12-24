import { MapPin, Phone, Building2 } from "lucide-react";

const OfficeLocations = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Office Locations
        </h2>

        {/* Card */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            {/* Flag placeholder */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-yellow-400 to-red-500" />
            <div>
              <h3 className="text-2xl font-semibold">Seychelles</h3>
              <p className="text-sm text-gray-500">Raw Trading Ltd</p>
            </div>
          </div>

          <hr className="mb-8" />

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="font-medium mb-2">Get Directions</p>
                <p className="text-sm leading-relaxed">
                  Eden House,
                  <br />
                  Floor 1, Eden Island,
                  <br />
                  Mahe, Seychelles
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium">Contact:</span>{" "}
                <span className="font-semibold">+248 467 19 76</span>
              </p>

              <div>
                <p className="font-medium">Office Hours:</p>
                <p>
                  <strong>Monday – Saturday (AEDT)</strong>
                  <br />
                  07:00 – 07:00
                </p>
              </div>

              <div>
                <p>
                  <strong>Sunday – Friday (GMT)</strong>
                  <br />
                  22:00 – 22:00
                </p>
              </div>

              <p className="uppercase text-xs tracking-wide text-gray-500">
                Email: support@icmarkets.com
              </p>
            </div>

            {/* Company Registration */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <div className="text-sm space-y-2">
                <p className="font-medium">Company registrations:</p>
                <p>
                  <strong>Company License Number</strong>
                  <br />
                  SD018
                </p>
                <p>
                  <strong>Company Number</strong>
                  <br />
                  8419879-1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
