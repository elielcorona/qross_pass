// src/apps/landing/components/Hero/HeroDecoration.jsx
import { motion } from "motion/react";

export default function HeroDecoration() {
  return (
    <>
      {/* PNG decorativo arriba izquierda */}
      <motion.img
        src="/assets/hero/deco1.png"
        alt="Decoración 1"
        className="position-absolute d-none d-md-block"
        style={{ top: "5%", left: "4%", width: "80px", zIndex: 1 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* PNG decorativo arriba derecha */}
      <motion.img
        src="/assets/hero/deco2.png"
        alt="Decoración 2"
        className="position-absolute d-none d-md-block"
        style={{ top: "10%", right: "3%", width: "60px", zIndex: 1 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      {/* PNG decorativo inferior derecho */}
      <motion.img
        src="/assets/hero/deco3.png"
        alt="Decoración 3"
        className="position-absolute d-none d-md-block"
        style={{ bottom: "6%", right: "8%", width: "100px", zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      />
    </>
  );
}
