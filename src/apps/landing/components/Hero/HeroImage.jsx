// 📁 src/apps/landing/components/Hero/HeroImage.jsx
import { motion } from "motion/react";
import heroMockup from "../../../../../public/assets/images/HeroMain.png";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center d-flex justify-content-center align-items-center h-100"
    >
      <img
        src={heroMockup}
        alt="QrossPass Hero App"
        className="img-fluid"
        style={{
          maxHeight: "620px",
          width: "100%",
          objectFit: "contain",
          borderRadius: "1rem",
        }}
      />
    </motion.div>
  );
}
