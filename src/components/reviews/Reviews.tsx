import { useRef } from "react";
import { motion } from "motion/react";

import { HeartIcon } from "lucide-react";
import ReviewCard from "./ReviewCard";
import reviews from "../../data/reviews.json";

export default function Reviews() {
  const scrollRef = useRef(null);

  const viewportConfig = { root: scrollRef, amount: 0.5, once: true };

  const containerVariant = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 1.5 } },
    viewport: { root: scrollRef, amount: 0.25, once: true },
  };

  const textContentVariant = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: viewportConfig,
  };

  const starVariant = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1, transition: { duration: 1 } },
    viewport: viewportConfig,
  };

  return (
    <section
      ref={scrollRef}
      id="reviews"
      className="flex flex-col gap-12 w-full items-center justify-center"
    >
      <div className="flex w-full justify-center px-6">
        <div className="flex items-center justify-center gap-4">
          <motion.span
            variants={starVariant}
            initial={starVariant.initial}
            whileInView={starVariant.whileInView}
            viewport={starVariant.viewport}
          >
            <HeartIcon className="w-8 h-8 text-green-500" fill="currentColor" />
          </motion.span>
          <motion.h3
            variants={textContentVariant}
            initial={textContentVariant.initial}
            whileInView={textContentVariant.whileInView}
            viewport={textContentVariant.viewport}
            className="text-2xl lg:text-3xl font-semibold"
          >
            Loved by thousands of people worldwide
          </motion.h3>
          <motion.span
            variants={starVariant}
            initial={starVariant.initial}
            whileInView={starVariant.whileInView}
            viewport={starVariant.viewport}
          >
            <HeartIcon className="w-8 h-8 text-green-500" fill="currentColor" />
          </motion.span>
        </div>
      </div>
      <motion.div
        variants={containerVariant}
        initial={containerVariant.initial}
        whileInView={containerVariant.whileInView}
        viewport={containerVariant.viewport}
        className="flex flex-col lg:flex-row w-full max-w-7xl"
      >
        {reviews.reviews.map((review, index) => (
          <ReviewCard key={review.name} review={review} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
