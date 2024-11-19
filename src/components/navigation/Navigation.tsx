import { motion, useScroll, useSpring } from "motion/react";
import Login from "./Login";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navigation() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const containerVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
        mass: 0.8,
        bounce: 1,
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="sticky top-0 left-0 flex w-full py-4 px-6 items-center justify-center z-40 bg-neutral-100/90 backdrop-blur-lg"
    >
      <div className="flex items-center justify-between gap-8 w-full max-w-7xl">
        <Logo onlyLogo={false} />
        <div className="flex flex-row-reverse md:flex-row items-center gap-4 lg:gap-24">
          <NavLinks />
          <Login />
        </div>
      </div>
      <motion.div
        className="fixed bottom-0 left-0 h-[1px] bg-neutral-400 w-full origin-left"
        style={{ scaleX }}
      />
      <div className="fixed bottom-0 left-0 h-[1px] bg-neutral-200 w-full origin-left -z-10" />
    </motion.nav>
  );
}
