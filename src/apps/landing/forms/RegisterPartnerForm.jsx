// 📁 src/apps/landing/forms/RegisterPartnerForm.jsx
import { useState } from "react";
import InputField from "../../../shared/components/forms/InputField";
import PasswordField from "../../../shared/components/forms/PasswordField";
import CheckboxField from "../../../shared/components/forms/CheckboxField";
import FileUploadField from "../../../shared/components/forms/FileUploadField";
import FormGroup from "../../../shared/components/forms/FormGroup";

export default function RegisterPartnerForm() {
  const [formData, setFormData] = useState({
    gymName: "",
    legalRep: "",
    email: "",
    phone: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    zip: "",
    rfc: "",
    acceptTerms: false,
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.gymName) newErrors.gymName = "Nombre del gimnasio requerido";
    if (!formData.legalRep) newErrors.legalRep = "Representante legal requerido";
    if (!formData.email.includes("@")) newErrors.email = "Correo inválido";
    if (!formData.phone) newErrors.phone = "Teléfono requerido";
    if (!formData.street) newErrors.street = "Calle requerida";
    if (!formData.number) newErrors.number = "Número requerido";
    if (!formData.neighborhood) newErrors.neighborhood = "Colonia requerida";
    if (!formData.city) newErrors.city = "Ciudad requerida";
    if (!formData.state) newErrors.state = "Estado requerido";
    if (!formData.zip) newErrors.zip = "Código postal requerido";
    if (!formData.rfc) newErrors.rfc = "RFC requerido";
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(formData.password)) {
      newErrors.password = "Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo";
    }
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Debes aceptar los términos";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Registro de partner exitoso:", formData);
      localStorage.setItem("registro_partner", JSON.stringify(formData));
      alert("Registro enviado correctamente.");
    }
  };

  return (
    <section className="registro py-5">
        <div class="container text-center text-white">
            <h1 class="display-6 text-info fw-bold">Crea tu cuenta</h1>
            <p class="lead">Forma parte de la red de gimnasios más accesible</p>
        </div>
      <div className="container mt-5">
        <div className="card bg-dark text-white shadow mx-auto" style={{ maxWidth: "600px" }}>
          <div className="card-body p-4">
            <h3 className="text-center mb-4">Registro de Gimnasio / Partner</h3>
            <form onSubmit={handleSubmit} noValidate>
              <FormGroup>
                <InputField label="Nombre del gimnasio" name="gymName" value={formData.gymName} onChange={handleChange} error={errors.gymName} required />
              </FormGroup>

              <FormGroup>
                <InputField label="Representante legal" name="legalRep" value={formData.legalRep} onChange={handleChange} error={errors.legalRep} required />
              </FormGroup>

              <FormGroup>
                <InputField label="Correo electrónico" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required />
              </FormGroup>

              <FormGroup>
                <InputField label="Teléfono" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} required />
              </FormGroup>

              <FormGroup>
                <InputField label="Calle" name="street" value={formData.street} onChange={handleChange} error={errors.street} required />
                <InputField label="Número" name="number" value={formData.number} onChange={handleChange} error={errors.number} required />
              </FormGroup>

              <FormGroup>
                <InputField label="Colonia" name="neighborhood" value={formData.neighborhood} onChange={handleChange} error={errors.neighborhood} required />
                <InputField label="Ciudad" name="city" value={formData.city} onChange={handleChange} error={errors.city} required />
                <InputField label="Estado" name="state" value={formData.state} onChange={handleChange} error={errors.state} required />
                <InputField label="Código postal" name="zip" value={formData.zip} onChange={handleChange} error={errors.zip} required />
              </FormGroup>

              <FormGroup>
                <InputField label="RFC / Constancia Fiscal" name="rfc" value={formData.rfc} onChange={handleChange} error={errors.rfc} required />
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
                <FileUploadField label="INE / Identificación oficial" name="ine" onChange={handleChange} required />
                <FileUploadField label="Comprobante de domicilio" name="comprobante" onChange={handleChange} required />
                <FileUploadField label="RFC / Constancia fiscal" name="rfcFile" onChange={handleChange} required />
                <FileUploadField label="Foto del local" name="fotoLocal" onChange={handleChange} required />
              </FormGroup>

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
                <button type="submit" className="btn btn-warning text-dark fw-bold">Registrarme como Partner</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
