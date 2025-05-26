// 📁 src/apps/landing/landingRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import RegisterPartner from "./pages/RegisterPartner";
import TyC from "./pages/TermsAndConditionsLanding";
import AvisoPrivacidad from "./pages/PrivacyNotice"
import Contacto from "./pages/HelpContact"
import LoginUser from "./../users/pages/Login";

export default function LandingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registeruser" element={<RegisterUser />} />
      <Route path="/registerpartner" element={<RegisterPartner />} />
      <Route path="/tyc" element={<TyC />} />
      <Route path="/avisoprivacidad" element={<AvisoPrivacidad />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<LoginUser />} />
      {/* Aquí puedes agregar más rutas según sea necesario */}
    </Routes>
  );
}