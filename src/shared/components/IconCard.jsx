import { motion } from "motion/react";

export default function IconCard({ icon, title, description, delay = 0, direction = "up" }) {
  const variants = {
    hidden: (custom) => ({
      opacity: 0,
      y: custom.direction === "up" ? 40 : custom.direction === "down" ? -40 : 0,
      x: custom.direction === "left" ? 40 : custom.direction === "right" ? -40 : 0,
    }),
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: custom.delay,
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      },
    }),
    hover: {
      scale: 1.04,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="col-md-6 col-lg-4 d-flex justify-content-center"
      custom={{ delay, direction }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <motion.div
        className="card card-glass p-4 shadow text-center w-100 d-flex flex-column"
        style={{
          borderRadius: "1.25rem",
          minHeight: "320px",
          backgroundColor: "rgba(16, 16, 30, 0.75)",
          border: "1px solid rgba(102, 252, 241, 0.1)",
        }}
      >
        <i className={`bi ${icon} mb-3 fs-1 text-info`}></i>
        <h4 className="mb-1 pt-1 pb-3">{title}</h4>
        <div className="text-white-50 mt-2">{description}</div>
      </motion.div>
    </motion.div>
  );
}
