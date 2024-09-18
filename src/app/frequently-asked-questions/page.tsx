import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export default function FrequentlyAskedQuestion() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-faq-light text-faq-black pb-10`}
    >
      <div className="py-[72px] bg-faq-white">
        <h2 className="text-cs-36 font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-cs-16 text-center">
          Browse through the most frequently asked questions
        </p>
      </div>
      <div className="max-w-[640px] mx-auto">
        <h3 id="tracking" className="text-cs-24 font-bold mt-[72px]">
          How can I track my order?
        </h3>
        <p className="mt-8">
          You can track your order using the following steps:
        </p>
        <ol className="pl-5 list-decimal mt-6">
          <li>
            Go to the Order{" "}
            <a href="#tracking" className="text-faq-blue">
              Tracking page
            </a>
            .
          </li>
          <li>Enter your order number and email address.</li>
          <li>
            Click on the Track Order button to view the current status of your
            shipment.
          </li>
        </ol>
        <p className="mt-6">
          If you encounter any issues, please visit our{" "}
          <span className="text-faq-blue">Help Center</span>.
        </p>
        <div className="w-full h-[2px] bg-faq-gray my-10" />
        <h3 id="policy" className="text-cs-24 font-bold mt-[72px]">
          What is your return policy?
        </h3>
        <p className="mt-8">
          We offer a 30-day return policy on most items. Here are some key
          points:
        </p>
        <ul className="pl-5 list-disc mt-6">
          <li>
            <span className="font-bold">
              Items must be in original condition:
            </span>
            Unworn, unused, and unwashed.
          </li>
          <li>
            <span className="font-bold">
              Include original packaging and tags
            </span>
            All items should be returned with their original packaging and tags.
          </li>
          <li>
            <span className="font-bold">Proof of purchase</span>A receipt or
            proof of purchase is required.
          </li>
        </ul>
        <p className="mt-6">
          For more detailed information, read our full{" "}
          <a href="#policy" className="text-faq-blue">
            Return Policy
          </a>
          .
        </p>
      </div>
    </main>
  );
}
