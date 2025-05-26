// 📁 src/apps/landing/components/PlansPartnersSection.jsx
import useFadeInOnScroll from "../../../shared/hooks/useFadeInOnScroll";
import SectionWrapper from "../../../shared/components/SectionWrapper";
import IconCard from "../../../shared/components/IconCard";

export default function PlansPartnersSection() {
  useFadeInOnScroll();

  return (
    <SectionWrapper id="partners" className="plans-partners text-white fullscreen-centered">
      <div className="text-center mb-5">
        <h2 className="fade-hidden delay-1">
          ¿Por qué ser <span className="text-info">partner</span>?
        </h2>
        <p className="lead text-light fade-hidden delay-2">
          Únete a QrossPass y haz crecer tu gimnasio con más visitas, mejor control y herramientas digitales fáciles de usar.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        <IconCard
          icon="bi-graph-up-arrow"
          title="Más visitas, sin gastar en publicidad"
          description="Tus instalaciones aparecerán en nuestra app para que nuevos usuarios te descubran y entrenen contigo. No necesitas invertir en campañas."
          delay={0}
        />
        <IconCard
          icon="bi-qr-code-scan"
          title="Control de accesos con QR"
          description="Recibe a tus visitantes mostrando su QR desde el celular. Sin listas ni credenciales. Todo queda registrado automáticamente."
          delay={0.2}
        />
      </div>

      <div className="row g-4 pt-4 justify-content-center">
        <IconCard
          icon="bi-bar-chart"
          title="Estadísticas fáciles de entender"
          description="Consulta cuántas visitas recibiste, en qué horarios y qué tipo de membresía usaron. Todo desde tu panel digital, sin complicaciones."
          delay={0.4}
        />
        <IconCard
          icon="bi-map"
          title="Presencia en el mapa de la app"
          description="Cientos de personas verán tu ubicación y podrán visitarte con un solo toque. Aparece destacado en su zona sin costo adicional."
          delay={0.6}
        />
      </div>
    </SectionWrapper>
  );
}
