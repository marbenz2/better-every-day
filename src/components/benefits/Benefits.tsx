import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/use-media-query";
import { motion } from "motion/react";
import BenefitsBadges from "./BenefitsBadges";
import BenefitsImage from "./BenefitsImage";
import BenefitsText from "./BenefitsText";

type DataType = {
  title: string;
  description: string;
  icon: string;
  badges: string[];
};

interface BenefitItemProps {
  item: DataType;
  index: number;
}

function BenefitItem({ item, index }: BenefitItemProps) {
  const scrollRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  const direction = index % 2 === 0 ? "reverse" : "normal";
  const viewportConfig = { root: scrollRef, amount: 0.375 };
  const mobileOffset = 50;
  const desktopOffset = 100;

  const getOffset = () => {
    if (isMobile) return mobileOffset;
    return desktopOffset;
  };
  const offset = getOffset();

  const variants = {
    normal: {
      first: {
        initial: { opacity: 0, x: offset },
        whileInView: { opacity: 1, x: 0, transition: { duration: 1 } },
        viewport: viewportConfig,
      },
      second: {
        initial: { opacity: 0, x: -offset },
        whileInView: { opacity: 1, x: 0, transition: { duration: 1 } },
        viewport: viewportConfig,
      },
    },
    reverse: {
      first: {
        initial: { opacity: 0, x: -offset },
        whileInView: { opacity: 1, x: 0, transition: { duration: 1 } },
        viewport: viewportConfig,
      },
      second: {
        initial: { opacity: 0, x: offset },
        whileInView: { opacity: 1, x: 0, transition: { duration: 1 } },
        viewport: viewportConfig,
      },
    },
  };

  const activeVariants =
    direction === "reverse" ? variants.reverse : variants.normal;

  return (
    <div
      ref={scrollRef}
      className={`flex ${
        direction === "reverse"
          ? "flex-col-reverse md:flex-row"
          : "flex-col-reverse md:flex-row-reverse"
      } w-full max-w-7xl`}
    >
      <motion.div
        variants={activeVariants.first}
        initial={activeVariants.first.initial}
        whileInView={activeVariants.first.whileInView}
        viewport={activeVariants.first.viewport}
        className="flex flex-col gap-8 w-full justify-center md:w-[40%] z-10"
      >
        <BenefitsText title={item.title} description={item.description} />
        <BenefitsBadges badges={item.badges} />
      </motion.div>
      <motion.div
        variants={activeVariants.second}
        initial={activeVariants.second.initial}
        whileInView={activeVariants.second.whileInView}
        viewport={activeVariants.second.viewport}
        className="flex w-full h-full md:w-[60%] justify-end z-0"
      >
        <BenefitsImage src={item.icon} alt={item.title} />
      </motion.div>
    </div>
  );
}

export default function Benefits({
  data,
  id,
}: {
  data: DataType[];
  id?: string;
}) {
  return (
    <section
      id={id}
      className="flex flex-col gap-24 xl:gap-2 w-full py-4 px-6 items-center justify-center"
    >
      {data.map((item, index) => (
        <BenefitItem key={item.title} item={item} index={index} />
      ))}
    </section>
  );
}
