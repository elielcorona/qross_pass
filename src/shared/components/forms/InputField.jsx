// 📁 src/shared/components/forms/InputField.jsx
import React from "react";

export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder = "",
}) {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}{required && <span className="text-danger"> *</span>}</label>}
      <input
        type={type}
        name={name}
        className={`form-control ${error ? "is-invalid" : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}