// 📁 src/pages/legal/HelpContact.jsx
import React from "react";
import IconCard from "../../../shared/components/IconCard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function HelpContact() {
  return (
    <>
    <Navbar />
 <div className="container py-5 text-white">
        <div class="container text-center text-white py-5">
            <h1 class="display-6 text-info fw-bold">Ayuda y Contacto</h1>
            <p class="lead">¿Tienes dudas, necesitas asistencia o quieres comunicarte con nuestro equipo? Aquí te dejamos todos los canales disponibles para ayudarte.</p>
        </div>    

      <div className="row g-4 py-5 justify-content-center">
        <IconCard
          icon="bi-envelope"
          title="Soporte por correo"
          description={(
            <>
              Puedes escribirnos a <a href="mailto:soporte@qrosspass.com" className="text-info">soporte@qrosspass.com</a> para:
              <ul className="text-start small mt-3">
                <li>Recuperar acceso a tu cuenta</li>
                <li>Problemas con tu código QR</li>
                <li>Reportar errores o fallos en la app</li>
                <li>Consultas generales</li>
              </ul>
            </>
          )}
          delay={0}
        />

        <IconCard
          icon="bi-whatsapp"
          title="Atención vía WhatsApp"
          description={(
            <>
              Atención rápida de lunes a viernes de 10:00 a 18:00 hrs (CDMX):<br />
              <a href="https://wa.me/5215566778899" target="_blank" rel="noreferrer" className="text-info">Envíanos un WhatsApp</a>
            </>
          )}
          delay={1}
        />
        <IconCard
          icon="bi-file-earmark-text"
          title="Recursos adicionales"
          description={(
            <>
                 <ul>
                   <li><a href="/legal/tyc" className="text-info">Términos y Condiciones</a></li>
                   <li><a href="/legal/aviso-privacidad" className="text-info">Aviso de Privacidad</a></li>
                   <li><a href="/registerpartner" className="text-info">Afíliate como Partner</a></li>
                </ul>
            </>
          )}
          delay={1}
        />
      </div>
      <p className="mt-5 text-grey"><em>Última actualización: Mayo 2025</em></p>
    </div>

    <Footer />

    </>
  );
}
