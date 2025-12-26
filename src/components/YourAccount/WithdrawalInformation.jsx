import {
  Info,
  AlertCircle,
  CreditCard,
  ShieldCheck,
  Wallet,
} from "lucide-react";

export default function WithdrawalInformation() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Withdrawals & Important Information
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Please review the following information carefully before submitting
            a withdrawal request.
          </p>
        </div>

        {/* Access Notice */}
        <div className="mb-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 flex gap-4">
          <Info className="text-blue-600 mt-0.5" />
          <p className="text-gray-800 font-medium leading-relaxed">
            If you do not yet have access to your{" "}
            <span className="font-semibold">Secure Client Area</span>, please
            follow the Access Instructions provided by KiteFX Global.
          </p>
        </div>

        {/* Important Notes */}
        <Card icon={<AlertCircle />} title="Important Notes">
          <ul className="list-disc pl-5 space-y-4">
            <li>
              Withdrawal cut-off time is <strong>12:00 AEST / AEDT</strong>.
              Requests submitted before this time are processed on the same
              business day.
            </li>
            <li>
              KiteFX Global does <strong>not charge additional fees</strong> for
              deposits or withdrawals. Intermediary bank fees may apply.
            </li>
            <li>
              Funds are intended for trading purposes. Withdrawals may incur a
              processing fee if deposits have not been utilised for trading.
            </li>
            <li>
              International bank wire transfers may take up to{" "}
              <strong>14 days</strong> and may incur intermediary fees.
            </li>
          </ul>
        </Card>

        {/* Credit / Debit Card */}
        <Card icon={<CreditCard />} title="Credit / Debit Card Withdrawals">
          <ul className="list-disc pl-5 space-y-3">
            <li>Processed free of charge.</li>
            <li>
              Typical processing time is <strong>3–5 business days</strong>, but
              may take up to <strong>10 business days</strong>.
            </li>
            <li>Card withdrawals may not be available in all countries.</li>
            <li>
              Withdrawals exceeding deposited amounts must use another funding
              method or bank wire.
            </li>
          </ul>
        </Card>

        {/* Withdrawal Rules */}
        <Card icon={<ShieldCheck />} title="Withdrawal Rules & Compliance">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              Withdrawals must be made to the same source used for deposits.
            </li>
            <li>Withdrawals to third parties are not permitted.</li>
            <li>
              The Company may process withdrawals using previously used funding
              methods in a priority order.
            </li>
            <li>
              Additional documentation may be required at the Company’s
              discretion.
            </li>
          </ul>
        </Card>

        {/* Payment Method Info */}
        <Card icon={<Wallet />} title="Payment Method Specific Information">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              WebMoney withdrawals are processed via bank transfer and may take
              3–5 business days.
            </li>
            <li>
              Fasapay, Rapidpay, Klarna, and Neteller withdrawals are processed
              via bank wire and may incur additional charges.
            </li>
            <li>
              POLi / BPAY withdrawals are usually received within 2–3 business
              days for Australian accounts.
            </li>
            <li>
              Thai Internet Banking withdrawals require a scanned copy of your
              bank book.
            </li>
            <li>
              First-time wire transfer withdrawals require a bank statement for
              verification.
            </li>
          </ul>
        </Card>

        {/* Footer Disclaimer */}
        <div className="mt-14 rounded-2xl bg-gray-100 p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            KiteFX Global does not process payments to third parties. Joint
            accounts are accepted only if the trading account holder is listed
            on the bank account or card.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function Card({ icon, title, children }) {
  return (
    <div className="mb-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-gray-100 p-2 text-gray-700">{icon}</div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
