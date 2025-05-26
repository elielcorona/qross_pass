// 📁 src/apps/landing/components/PartnerTableSection.jsx
import useFadeInOnScroll from "../../../shared/hooks/useFadeInOnScroll";
import SectionWrapper from "../../../shared/components/SectionWrapper";
import PricingTable from "../../../shared/components/PricingTable";
import Button from "../../../shared/components/Button";

export default function PartnerTableSection() {
  useFadeInOnScroll();

  const headers = [
    "Características",
    "Básico<br><small class='text-header-small'>Gratis</small>",
    "Premium<br><small class='text-header-small'>$499/mes</small>",
    "Pro<br><small class='text-header-small'>$999/mes</small>",
    "Corporativo<br><small class='text-header-small'>$1,499–$1,999/mes</small>"
  ];

  const plans = [
    ["Escaneo de QR", "✅", "✅", "✅", "✅"],
    ["Visibilidad en mapa", "✅ (limitada)", "✅ (extendida)", "✅", "✅ (prioridad alta)"],
    ["Membresías individuales", "✖️", "✅", "✅", "✅"],
    ["Marketplace (productos)", "✖️", "✖️", "✅", "✅"],
    ["Métricas y analítica", "✖️", "✅ (básicos)", "✅ (avanzados)", "✅ (full dashboard)",],
    ["Correo corporativo @qrosspass.com", "✖️", "✖️", "✖️", "✅"],
    ["Soporte", "Estándar", "Estándar", "Prioritario", "Asesor dedicado"],
    ["Comisiones", "2% visita, 10% no redención", "✖️", "✖️", "✖️"]
  ];

  return (
    <SectionWrapper id="partner-plans" className="text-white">
      <div className="text-center mb-5">
        <h2 className="fade-hidden delay-1">
          Elige tu <span className="text-info">plan de partner</span>
        </h2>
        <p className="lead text-light fade-hidden delay-2">
          QrossPass se adapta al crecimiento de tu gimnasio. Escoge el plan que más te convenga.
        </p>
      </div>

      <PricingTable headers={headers} plans={plans} className="fade-hidden delay-3" />
    </SectionWrapper>    
  );
}
