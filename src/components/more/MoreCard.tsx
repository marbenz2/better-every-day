import { forwardRef } from "react";
import { motion } from "motion/react";
import {
  LeafIcon,
  GlobeIcon,
  KeyIcon,
  BirdIcon,
  FastForwardIcon,
  ThumbsUpIcon,
} from "lucide-react";

type DataType = {
  title: string;
  description: string;
  icon: string;
};

type Variants = {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
    };
  };
};

interface MoreCardProps {
  item: DataType;
  variants: Variants;
  viewport?: { amount: number };
}

const MoreCard = forwardRef<HTMLDivElement, MoreCardProps>(
  ({ item, variants, viewport }, ref) => {
    let IconComponent;

    switch (item.icon) {
      case "LeafIcon":
        IconComponent = (
          <LeafIcon className="w-8 h-8 text-green-500" stroke="currentColor" />
        );
        break;
      case "GlobeIcon":
        IconComponent = (
          <GlobeIcon className="w-8 h-8 text-green-500" stroke="currentColor" />
        );
        break;
      case "KeyIcon":
        IconComponent = (
          <KeyIcon className="w-8 h-8 text-green-500" stroke="currentColor" />
        );
        break;
      case "BirdIcon":
        IconComponent = (
          <BirdIcon className="w-8 h-8 text-green-500" stroke="currentColor" />
        );
        break;
      case "FastForwardIcon":
        IconComponent = (
          <FastForwardIcon
            className="w-8 h-8 text-green-500"
            stroke="currentColor"
          />
        );
        break;
      case "ThumbsUpIcon":
        IconComponent = (
          <ThumbsUpIcon
            className="w-8 h-8 text-green-500"
            stroke="currentColor"
          />
        );
        break;
      default:
        IconComponent = (
          <LeafIcon className="w-8 h-8 text-green-500" stroke="currentColor" />
        );
    }

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-col items-center w-full max-w-md md:max-w-full text-center gap-8"
      >
        {IconComponent}
        <h2 className="text-xl">{item.title.toUpperCase()}</h2>
        <p>{item.description}</p>
      </motion.div>
    );
  }
);

export default MoreCard;
