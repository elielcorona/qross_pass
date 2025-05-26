// src/apps/landing/components/Hero/HeroParallaxBackground.jsx
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import bgImage from "../../../../assets/images/bg-abstract.png"; // Asegúrate que esta ruta sea correcta

export default function HeroParallaxBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ["0px", "-150px"]); // ajusta el rango para mayor o menor desplazamiento

  return (
    <motion.div
      className="hero-parallax-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        y,
        filter: "brightness(0.25) blur(2px)",
        opacity: 0.9
      }}
    />
  );
}
