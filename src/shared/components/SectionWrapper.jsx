export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section id={id} className={`py-5 fade-hidden ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
