// 📁 src/apps/landing/components/layout/Footer.jsx
import SectionWrapper from "../../../../shared/components/SectionWrapper";
import useFadeInOnScroll from "../../../../shared/hooks/useFadeInOnScroll";
import Icon from "../../../../shared/components/Icon";


export default function Footer() {
  useFadeInOnScroll();

  return (
    <footer className=" text-white py-4 fade-hidden">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} QrossPass. Todos los derechos reservados.</p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <a href="/tyc" className="text-decoration-none text-info">
            <Icon name="file-text" className="me-1" /> Términos
          </a>
          <a href="/avisoprivacidad" className="text-decoration-none text-info">
            <Icon name="lock" className="me-1" /> Aviso de Privacidad
          </a>
          <a href="/contacto" className="text-decoration-none text-info">
            <Icon name="question-circle" className="me-1" /> Ayuda / Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

