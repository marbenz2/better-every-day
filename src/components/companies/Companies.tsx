import { motion } from "motion/react";

export default function Companies() {
  const companies = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
    { id: 3, name: "Company 3" },
    { id: 4, name: "Company 4" },
    { id: 5, name: "Company 5" },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } },
  };

  return (
    <section
      id="trusted-by"
      className="flex w-full py-4 px-6 items-center justify-center"
    >
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap w-full max-w-7xl gap-12 items-center justify-center"
      >
        {companies.map((company) => (
          <img
            src={`/images/companies/logoipsum-${company.id}.svg`}
            key={company.id}
            className="w-36 md:w-48 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </motion.div>
    </section>
  );
}
