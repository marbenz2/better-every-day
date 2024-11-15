import CallToButtons from "./CallToButtons";
import CallToImage from "./CallToImage";
import CallToText from "./CallToText";
import { motion } from "motion/react";

export default function CallToAction() {
  const containerVariantOne = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const containerVariantTwo = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="action"
      className="flex w-full py-16 px-6 items-center justify-center mt-12"
    >
      <div className="relative flex flex-col md:flex-row w-full max-w-7xl">
        <motion.div
          variants={containerVariantOne}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 w-full md:w-1/2 justify-center z-10"
        >
          <CallToText />
          <CallToButtons />
        </motion.div>
        <motion.div
          variants={containerVariantTwo}
          initial="hidden"
          animate="visible"
          className="absolute right-0 -top-36 md:-top-0 md:relative w-full md:w-1/2 flex justify-end md:justify-center z-0"
        >
          <CallToImage />
        </motion.div>
      </div>
    </section>
  );
}
