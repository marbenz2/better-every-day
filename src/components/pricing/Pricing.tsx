import { useRef } from "react";
import { motion } from "motion/react";
import { pricing } from "../../data/pricing.json";
import { LeafIcon, StarIcon } from "lucide-react";

export default function Pricing() {
  const scrollRef = useRef(null);

  const viewportConfig = { once: true, amount: 0.5 };

  const containerVariant = {
    initial: { opacity: 0, y: 50 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
    viewport: viewportConfig,
  };

  return (
    <section
      ref={scrollRef}
      id="pricing"
      className="flex flex-col gap-24 xl:gap-2 w-full py-4 px-6 items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 w-full max-w-7xl gap-8 items-center justify-center">
        {pricing.map((item, index) => (
          <motion.div
            key={item.title}
            variants={containerVariant}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            custom={index}
            className="relative flex flex-col gap-12 px-6 py-8 md:py-12 2xl:py-16 h-full rounded-md shadow-lg overflow-clip bg-gradient-to-b from-neutral-100 via-green-50 to-green-100 z-10"
          >
            {item.bestvalue && (
              <StarIcon
                className="w-12 h-12 absolute top-4 right-4 fill-yellow-500 text-yellow-500 drop-shadow-lg"
                strokeWidth={0}
              />
            )}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-4xl font-bold">{item.price}</p>
              <ul className="flex flex-col gap-2 md:gap-4">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-neutral-600 list-disc ml-4 pl-1"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {item.title === "Custom" && (
              <button className="mt-auto bg-green-500 px-4 py-2 rounded-sm font-semibold border border-green-500 hover:bg-green-400/50 transition-colors duration-300">
                Anfrage stellen
              </button>
            )}
            {item.title !== "Custom" && (
              <button className="mt-auto bg-green-500 px-4 py-2 rounded-sm font-semibold border border-green-500 hover:bg-green-400/50 transition-colors duration-300">
                Jetzt buchen
              </button>
            )}
            <LeafIcon
              className="w-48 h-48 absolute -bottom-12 -right-8 fill-green-500 text-green-600 opacity-30 -z-10"
              strokeWidth={0.5}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
