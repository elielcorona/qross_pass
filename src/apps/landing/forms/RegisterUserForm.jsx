// 📁 src/apps/landing/forms/RegisterUserForm.jsx
import { useEffect, useState } from "react";
import InputField from "../../../shared/components/forms/InputField";
import PasswordField from "../../../shared/components/forms/PasswordField";
import SelectField from "../../../shared/components/forms/SelectField";
import CheckboxField from "../../../shared/components/forms/CheckboxField";
import PendingPhotoNote from "../../../shared/components/forms/PendingPhotoNote";
import FormGroup from "../../../shared/components/forms/FormGroup";

export default function RegisterUserForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    plan: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [cities, setCities] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/config/ciudades_y_planes.json")
      .then(res => res.json())
      .then(data => {
        setCities(data.ciudades || []);
        setPlans(data.planes || []);
      })
      .catch(err => console.error("Error cargando datos:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Campo obligatorio";
    if (!formData.email.includes("@")) newErrors.email = "Correo inválido";
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(formData.password)) {
      newErrors.password = "Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo";
    }
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!formData.city) newErrors.city = "Selecciona una ciudad";
    if (!formData.plan) newErrors.plan = "Selecciona un plan";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Debes aceptar los términos";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Registro exitoso:", formData);
      localStorage.setItem("registro_usuario", JSON.stringify(formData));
      alert("Registro enviado correctamente.");
    }
  };

  return (
    
    <section className="registro py-5">
        <div class="container text-center text-white">
            <h1 class="display-6 text-info fw-bold">Crea tu cuenta</h1>
            <p class="lead">Accede a todos los gimnasios con una sola membresía</p>
        </div>
      <div className="container mt-5">
        <div className="card bg-dark text-white shadow mx-auto" style={{ maxWidth: "600px" }}>
          <div className="card-body p-4">
            <h3 className="text-center mb-4">Registro de Usuario</h3>
            <form onSubmit={handleSubmit} noValidate>
              <FormGroup>
                <InputField
                  label="Nombre completo"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  required
                />
              </FormGroup>

              <FormGroup>
                <InputField
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              </FormGroup>

              <FormGroup>
                <PasswordField
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  confirm
                  confirmValue={formData.confirmPassword}
                  onConfirmChange={handleChange}
                  confirmError={errors.confirmPassword}
                />
              </FormGroup>

              <FormGroup>
                <SelectField
                  label="Ciudad"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  options={cities}
                  error={errors.city}
                  required
                />
              </FormGroup>

              <FormGroup>
                <SelectField
                  label="Plan deseado"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  options={plans}
                  error={errors.plan}
                  required
                />
              </FormGroup>

              <PendingPhotoNote />

              <FormGroup>
                <CheckboxField
                  label={<span>Acepto los <a href="/legal/tyc.html" className="text-info" target="_blank">Términos y Condiciones</a></span>}
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  error={errors.acceptTerms}
                />
              </FormGroup>

              <div className="d-grid">
                <button type="submit" className="btn btn-info fw-bold">Crear cuenta</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
