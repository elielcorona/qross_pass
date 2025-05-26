// 📁 src/apps/landing/pages/RegisterPartner.jsx
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollTopButton from "../../../shared/components/ScrollTopButton";
import RegisterPartnerForm from "../forms/RegisterPartnerForm";

export default function RegisterPartner() {
  return (
    <>
      <Navbar />
      <main className="py-5">
        <div className="container">
          <RegisterPartnerForm />
        </div>
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}