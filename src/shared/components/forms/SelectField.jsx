// 📁 src/shared/components/forms/SelectField.jsx
import React from "react";

export default function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Selecciona una opción",
  error,
  required = false,
}) {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}{required && <span className="text-danger"> *</span>}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`form-select ${error ? "is-invalid" : ""}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}