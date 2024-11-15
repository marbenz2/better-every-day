import { motion } from "motion/react";

import { more } from "../../data/benefits.json";
import MoreCard from "./MoreCard";

export default function More() {
  const viewportConfig = { amount: 0.75, once: true };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="more"
      className="flex flex-col gap-2 w-full py-4 px-6 items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 md:gap-x-8 w-full max-w-7xl place-items-center md:place-items-start"
      >
        {more.map((item) => (
          <MoreCard
            key={item.title}
            item={item}
            variants={itemVariants}
            viewport={viewportConfig}
          />
        ))}
      </motion.div>
    </section>
  );
}
