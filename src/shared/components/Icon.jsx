// 📁 src/shared/components/Icon.jsx
export default function Icon({ name, className = "" }) {
  return <i className={`bi bi-${name} ${className}`.trim()} />;
}
