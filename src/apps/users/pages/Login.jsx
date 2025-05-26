// 📁 src/apps/users/pages/Login.jsx
import React, { useState } from "react";
import InputField from "../../../shared/components/forms/InputField";
import FormGroup from "../../../shared/components/forms/FormGroup";
import Button from "../../../shared/components/Button";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.email.includes("@")) {
      setError("Ingresa un correo válido");
      return;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Simulación de login
    localStorage.setItem("usuario_activo", JSON.stringify(formData));
    alert("Inicio de sesión exitoso. Redirigiendo...");
    // Redirigir o hacer lógica futura con backend
  };

  return (
    <div className="container py-5 text-white">
      <div className="text-center mb-4">
        <h2 className="text-info">Iniciar sesión</h2>
        <p>Accede a tu cuenta para gestionar tu membresía</p>
      </div>

      <form
        className="bg-dark text-white p-4 rounded shadow mx-auto"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <InputField
            label="Correo electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <InputField
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>

        {error && <p className="text-danger small">{error}</p>}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <a href="#" className="text-info small">¿Olvidaste tu contraseña?</a>
        </div>

        <Button
          text="Ingresar"
          variant="info"
          className="mt-4 w-100 fw-bold"
        />
      </form>
    </div>
  );
}
