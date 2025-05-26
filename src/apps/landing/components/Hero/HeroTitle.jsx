// qross_pass/src/apps/landing/components/Hero/HeroTitle.jsx
import { motion } from "motion/react";

export default function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="hero-title text-info"
    >
      Una sola membresía, acceso total
    </motion.h1>
  );
}
