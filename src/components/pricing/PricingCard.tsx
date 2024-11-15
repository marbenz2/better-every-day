import { LeafIcon, StarIcon } from "lucide-react";

type Pricing = {
  title: string;
  price: string;
  bestvalue?: boolean;
  features: string[];
};

interface PricingCardProps {
  pricing: Pricing;
}

export default function PricingCard({ pricing }: PricingCardProps) {
  return (
    <div className="relative flex flex-col gap-12 px-6 py-8 md:py-12 2xl:py-16 h-full rounded-md shadow-lg overflow-clip bg-gradient-to-b from-neutral-100 via-green-50 to-green-100 z-10">
      {pricing.bestvalue && (
        <StarIcon
          className="w-12 h-12 absolute top-4 right-4 fill-yellow-500 text-yellow-500 drop-shadow-lg"
          strokeWidth={0}
        />
      )}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{pricing.title}</h2>
        <p className="text-4xl font-bold">{pricing.price}</p>
        <ul className="flex flex-col gap-2 md:gap-4">
          {pricing.features.map((feature) => (
            <li
              key={feature}
              className="text-sm text-neutral-600 list-disc list-inside"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {pricing.title === "Custom" && (
        <button className="mt-auto bg-green-500 px-4 py-2 rounded-sm font-semibold border border-green-500 hover:bg-green-400/50 transition-colors duration-300">
          Anfrage stellen
        </button>
      )}
      {pricing.title !== "Custom" && (
        <button className="mt-auto bg-green-500 px-4 py-2 rounded-sm font-semibold border border-green-500 hover:bg-green-400/50 transition-colors duration-300">
          Jetzt buchen
        </button>
      )}
      <LeafIcon
        className="w-48 h-48 absolute -bottom-12 -right-8 fill-green-500 text-green-600 opacity-30 -z-10"
        strokeWidth={0.5}
      />
    </div>
  );
}
