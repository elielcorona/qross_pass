// 📁 src/shared/components/forms/PasswordField.jsx
import React from "react";

export default function PasswordField({
  label = "Contraseña",
  name = "password",
  value,
  onChange,
  error,
  confirm = false,
  confirmValue = "",
  onConfirmChange = () => {},
  confirmError,
}) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">{label} <span className="text-danger">*</span></label>
        <input
          type="password"
          name={name}
          className={`form-control ${error ? "is-invalid" : ""}`}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      {confirm && (
        <div className="mb-3">
          <label className="form-label">Confirmar contraseña <span className="text-danger">*</span></label>
          <input
            type="password"
            name="confirmPassword"
            className={`form-control ${confirmError ? "is-invalid" : ""}`}
            value={confirmValue}
            onChange={onConfirmChange}
          />
          {confirmError && <div className="invalid-feedback">{confirmError}</div>}
        </div>
      )}
    </>
  );
}