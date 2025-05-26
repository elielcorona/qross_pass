export default function PlanCard({ icon, title, price, subtitle, benefits, variant = "info", delay = 0, highlight = false }) {
  return (
    <div className={`col-sm-6 col-lg-3 fade-hidden delay-${delay}`}>
      <div className={`card bg-dark text-white h-100 p-4 border border-${variant} shadow`} style={{ borderRadius: "1rem" }}>
        <i className={`bi ${icon} mb-2 fs-4 ${variant === "warning" ? "text-warning" : "text-info"}`}></i>
        <h4 className={`mb-1 ${highlight ? `text-${variant}` : ""}`}>{title}</h4>
        <p className="precio mb-1">Desde <strong>{price}</strong></p>
        {subtitle && <p className={`small ${variant === "warning" ? "" : "text-success"}`}>{subtitle}</p>}
        <ul className="text-start small ps-3 mt-3">
          {benefits.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
