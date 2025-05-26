// 📁 src/pages/legal/PrivacyNotice.jsx
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyNotice() {
  return (
    <>
        <Navbar />
    <div className="container py-5 text-white">
      <div className="text-center">
        <h1 className="text-info py-5">Aviso de Privacidad de QrossPass</h1>
      </div>
      <p className="text-important">Última actualización: Mayo 2025</p>

      <p><strong>1. Identidad y domicilio del responsable</strong><br />
      QrossPass es responsable del tratamiento de sus datos personales. Para cualquier asunto relacionado con este aviso, puede contactarnos en: soporte@qrosspass.com</p>

      <p><strong>2. Datos personales recabados</strong><br />
      QrossPass podrá recabar los siguientes datos:
        <ul>
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Número telefónico</li>
          <li>Ciudad y ubicación</li>
          <li>Fotografía (tomada en gimnasio afiliado)</li>
          <li>Información fiscal (RFC, razón social en caso de partners)</li>
          <li>Documentación oficial (INE, comprobante de domicilio, constancia fiscal)</li>
        </ul>
      </p>

      <p><strong>3. Finalidades del tratamiento</strong></p>
      <p><u>Primarias:</u><br />
        <ul>
          <li>Validar la identidad del usuario o gimnasio afiliado</li>
          <li>Permitir el acceso a gimnasios mediante código QR</li>
          <li>Generar reportes de uso, membresías y pagos</li>
          <li>Contacto y soporte técnico</li>
        </ul>
      </p>
      <p><u>Secundarias:</u><br />
        <ul>
          <li>Promociones, encuestas de calidad o recomendaciones personalizadas (opcional)</li>
        </ul>
      </p>

      <p><strong>4. Transferencias de datos</strong><br />
      Los datos no serán compartidos con terceros ajenos a QrossPass, salvo requerimiento de autoridad competente o por mandato legal.</p>

      <p><strong>5. Medios para ejercer derechos ARCO</strong><br />
      El titular podrá ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición enviando un correo a soporte@qrosspass.com con asunto “Derechos ARCO” y copia de identificación oficial.</p>

      <p><strong>6. Seguridad de los datos</strong><br />
      QrossPass ha implementado medidas administrativas, técnicas y físicas para proteger los datos personales de accesos no autorizados, pérdida o alteración.</p>

      <p><strong>7. Cambios al aviso de privacidad</strong><br />
      QrossPass podrá modificar este aviso en cualquier momento. Los cambios estarán disponibles en www.qrosspass.com/legal/aviso-privacidad</p>

      <p className="text-important mt-5">Para mayor información o dudas relacionadas con su privacidad, contáctenos al correo: soporte@qrosspass.com</p>
    </div>
    <Footer />
    </>
  );
}
