import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  href = "#",
  text = "Click",
  variant = "primary",      // 'primary', 'outline-light', 'info', etc.
  className = "",
  icon = null,              // 'bi bi-person', 'bi bi-download' etc.
  size = "md",              // 'sm', 'md', 'lg'
  isExternal = false,       // usar <a> si es externo o <Link> si es ruta interna
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {icon && <i className={`${icon} me-2`}></i>}
        {text}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {icon && <i className={`${icon} me-2`}></i>}
      {text}
    </Link>
  );
}
