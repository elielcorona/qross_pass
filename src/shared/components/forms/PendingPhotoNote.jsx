// 📁 src/shared/components/forms/FileUploadField.jsx
import React from "react";

export default function FileUploadField({
  label,
  name,
  onChange,
  error,
  accept = "image/*",
  required = false
}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}{required && <span className="text-danger"> *</span>}</label>
      <input
        type="file"
        name={name}
        className={`form-control ${error ? "is-invalid" : ""}`}
        onChange={onChange}
        accept={accept}
      />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}
