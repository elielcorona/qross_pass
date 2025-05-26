// 📁 src/apps/landing/components/Hero/HeroSection.jsx
import { motion } from "motion/react";
import Button from "../../../../shared/components/Button";
import heroBackground from "../../../../../public/assets/images/Hero.png";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroImage from "./HeroImage";
import HeroParallax from "./HeroParallax";

export default function HeroSection() {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center justify-content-center" style={{ minHeight: "80vh" }}>

          {/* Texto primero en móvil */}
          <div className="col-md-6 order-1 pt-5 order-md-1 text-center text-md-start mb-4 mb-md-0">
            <HeroTitle />
            <HeroSubtitle />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-4"
            >
              <Button
                href="/registeruser"
                text="Descargar App"
                icon="bi bi-cloud-download"
                variant="info"
                size="lg"
                className="fw-bold px-4 py-2"
              />
            </motion.div>
          </div>

          {/* Imagen debajo en mobile, a la derecha en desktop */}
          <div className="col-md-6 order-2 order-md-2">
            <HeroImage />
          </div>

        </div>
      </div>
    </>
  );
}
