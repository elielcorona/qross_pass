// src/pages/AboutSection.jsx
import { motion } from "motion/react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import IconCard from "../../../shared/components/IconCard";

export default function AboutSection() {
  useScrollAnimation();

  return (
    <section
      id="about"
      className="about-section text-white pt-5 py-5 min-vh-80 position-relative"
    >
      <div className="container text-center pt-5 mb-5 position-relative z-2">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fw-bold"
        >
          ¿Qué es <span className="text-info">QrossPass</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lead text-light"
        >
          QrossPass es tu llave digital al bienestar. Una sola membresía que te conecta con una red de gimnasios para que entrenes donde quieras, cuando quieras. Sin contratos. Sin límites.
        </motion.p>
      </div>

      <div className="container position-relative z-2">
        <div className="row g-4 justify-content-center">
          <IconCard
            icon="bi-calendar"
            title="Acceso flexible"
            description="Entrena en tu horario, sin restricciones. Cambia de gym según tu día y tu ritmo."
            delay={0.2}
            direction="left"
          />
          <IconCard
            icon="bi-qr-code"
            title="Un solo QR"
            description="Tu pase universal. Muestra tu código en la entrada y accede sin complicaciones."
            delay={0.4}
            direction="right"
          />
          <IconCard
            icon="bi-unlock"
            title="Sin permanencias"
            description="Cancelas cuando quieras. Sin penalizaciones, sin letras chiquitas."
            delay={0.6}
            direction="up"
          />
        </div>
      </div>
    </section>
  );
}
