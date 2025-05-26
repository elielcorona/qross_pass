// src/apps/landing/components/Hero/HeroSubtitle.jsx
import { motion } from "motion/react";

export default function HeroSubtitle() {
  return (
    <motion.p
      className="lead text-light mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
    >
      Con QrossPass puedes entrenar en cualquier gimnasio de nuestra red, sin contratos ni restricciones.
    </motion.p>
  );
}
