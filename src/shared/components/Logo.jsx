// src/shared/components/Logo.jsx
import React from "react";

export default function Logo({ size = "1.5rem", className = "" }) {
  return (
    <div className={`d-flex align-items-center gap-2 ${className}`}>
      <i className="bi bi-qr-code text-info" style={{ fontSize: size }}></i>
      <h5 className="m-0 fw-bold" style={{ fontSize: size }}>
        <span className="text-info">Q</span>ross<span className="text-info">Pass</span>
      </h5>
    </div>
  );
}
