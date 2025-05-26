import useFadeInOnScroll from "../../../shared/hooks/useFadeInOnScroll";
import PlanCard from "../../../shared/components/PlanCard";

export default function PlansUsersSection() {
  useFadeInOnScroll();

  return (
    <section className="plans-users text-white py-5 fade-hidden min-vh-80">
      <div className="container text-center">
        <h2 className="mb-4 fade-hidden delay-1">
          Planes para <span className="text-info">Usuarios</span>
        </h2>

        <div className="row g-4 justify-content-center">
          <PlanCard
            icon="bi-clock"
            title="Multigym Mensual"
            price="$449/mes"
            benefits={[
              "Acceso a todos los gimnasios afiliados",
              "Sin contratos ni penalizaciones",
              "Ideal para probar QrossPass"
            ]}
            delay={2}
          />

          <PlanCard
            icon="bi-calendar3"
            title="Multigym Trimestral"
            price="$399/mes"
            subtitle="¡Ahorra $150!"
            benefits={[
              "Todos los beneficios del plan mensual",
              "Precio preferencial por 3 meses",
              "Flexibilidad + ahorro"
            ]}
            delay={3}
          />

          <PlanCard
            icon="bi-calendar-check"
            title="Multigym Anual"
            price="$379/mes"
            subtitle="¡Ahorra $840!"
            benefits={[
              "Accede todo el año sin interrupciones",
              "El mejor precio mensual",
              "Ideal para usuarios constantes"
            ]}
            delay={4}
          />

          <PlanCard
            icon="bi-star"
            title="Multigym Pro"
            price="$549/mes"
            subtitle="Incluye beneficios premium y clases ilimitadas"
            benefits={[
              "Acceso sin límites ni restricciones",
              "Clases grupales y especiales incluidas",
              "Invitado mensual gratuito",
              "Soporte prioritario"
            ]}
            variant="warning"
            highlight
            delay={5}
          />
        </div>
      </div>
    </section>
  );
}
