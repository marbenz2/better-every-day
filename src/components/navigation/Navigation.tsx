import { motion } from "motion/react";
import Login from "./Login";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navigation() {
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
      className="sticky top-0 flex w-full py-4 px-6 items-center justify-center z-40 bg-neutral-100/90 backdrop-blur-lg"
    >
      <div className="flex items-center justify-between gap-8 w-full max-w-7xl">
        <Logo onlyLogo={false} />
        <div className="flex flex-row-reverse md:flex-row items-center gap-4 lg:gap-24">
          <NavLinks />
          <Login />
        </div>
      </div>
    </motion.nav>
  );
}
