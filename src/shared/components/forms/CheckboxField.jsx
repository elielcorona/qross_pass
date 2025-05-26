// 📁 src/shared/components/forms/CheckboxField.jsx
import React from "react";

export default function CheckboxField({
  label,
  name,
  checked,
  onChange,
  error
}) {
  return (
    <div className="form-check mb-3">
      <input
        type="checkbox"
        name={name}
        className={`form-check-input ${error ? "is-invalid" : ""}`}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}