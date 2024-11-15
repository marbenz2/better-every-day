import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/use-media-query";
import { motion } from "motion/react";
import { HandshakeIcon, LeafyGreenIcon } from "lucide-react";

export default function TakeAction() {
  const scrollRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  const viewportConfig = { root: scrollRef, amount: 0.375, once: true };
  const mobileOffset = -50;
  const desktopOffset = -200;

  const getOffset = () => {
    if (isMobile) return mobileOffset;
    return desktopOffset;
  };
  const offset = getOffset();

  const containerVariant = {
    hidden: { opacity: 0, x: offset },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section
      ref={scrollRef}
      id="take-action"
      className="flex w-full items-center justify-center overflow-clip"
    >
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative flex w-full h-full bg-gray-600/25 py-16 px-6 items-center justify-center"
      >
        <div className="relative flex flex-col w-full max-w-7xl gap-12 text-center md:text-start">
          <LeafyGreenIcon className="absolute -top-28 left-12 w-96 h-96 opacity-10 -z-10" />
          <LeafyGreenIcon className="absolute hidden sm:block top-0 -right-60 w-96 h-96 opacity-5 -rotate-12 -z-10" />
          <LeafyGreenIcon className="absolute hidden 2xl:block top-36 left-1/2 right-1/2 w-96 h-96 opacity-15 rotate-12 -z-10" />
          <h2 className="text-3xl font-bold">We're here to help</h2>
          <div className="flex flex-col gap-16 items-center text-center md:text-start md:items-start">
            <p className="text-lg">
              Our team is here to support you every step of the way. Whether you
              have questions, need assistance, or want to learn more about how
              we can help you achieve your sustainability goals, we're here to
              help.
            </p>
            <button className="bg-green-500 px-12 py-6 text-sm md:text-base rounded-sm font-semibold flex w-fit h-fit shrink-0 items-center gap-2 border border-green-500 hover:bg-green-400/50 transition-colors duration-300">
              <HandshakeIcon className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
