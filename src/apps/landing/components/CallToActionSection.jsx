import { motion } from "motion/react";
import SectionWrapper from "../../../shared/components/SectionWrapper";
import Button from "../../../shared/components/Button";
import ctaImage from "./../assets/images/ctaImage.png";

export default function CallToActionSection() {
  return (
    <SectionWrapper id="cta" className="text-white min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* Texto a la izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="col-md-6 d-flex justify-content-center"
          >
            <div
              className="p-4 rounded-4 shadow-lg d-flex flex-column align-items-center text-center"
              style={{
                backgroundColor: "rgba(16, 16, 30, 0.6)",
                border: "1px solid rgba(102, 252, 241, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <h2 className="display-5 fw-bold mb-4">¿Listo para dar el siguiente paso?</h2>

              <p className="lead fs-4 text-light mb-5">
                Elige cómo quieres formar parte de <span className="text-info">QrossPass</span>.
              </p>

              <div className="d-flex flex-column flex-md-row gap-4 justify-content-center">
                <Button
                  href="/registeruser"
                  text="Soy Usuario"
                  icon="bi bi-people"
                  variant="info"
                  size="lg"
                  className="fw-bold px-5 py-3 shadow"
                />
                <Button
                  href="/registerpartner"
                  text="Soy Gimnasio"
                  icon="bi bi-dumbbell"
                  variant="warning"
                  size="lg"
                  className="text-dark fw-bold px-5 py-3 shadow"
                />
              </div>
            </div>
          </motion.div>


          {/* Imagen a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-md-6 text-center mt-5 mt-md-0"
          >
            <img
              src={ctaImage}
              alt="Usuarios felices"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
