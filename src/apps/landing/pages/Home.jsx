// src/apps/landing/pages/Home.jsx
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollTopButton from "../../../shared/components/ScrollTopButton";
import Hero from "../components/Hero/HeroSection"; // 👈 Nuevo import
import AboutSection from "../components/AboutSection"; 
import PlansUsersSection from "../components/PlansUsersSection";
import PlansPartnersSection from "../components/PlansPartnersSection";
import PartnerTableSection from "../components/PartnerTableSection";
import CallToActionSection from "../components/CallToActionSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Una sola membresía, acceso total"
          subtitle="Descubre QrossPass, la red inteligente de gimnasios"
        />

        <AboutSection />
        <PlansUsersSection />
        <PlansPartnersSection />
        <PartnerTableSection/>
        <CallToActionSection/>
        {/* Aquí se pueden seguir montando AboutSection, Plans, etc. */}
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
