// 📁 src/apps/landing/pages/RegisterUser.jsx
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollTopButton from "../../../shared/components/ScrollTopButton";
import RegisterUserForm from "../forms/RegisterUserForm";

export default function RegisterUser() {
  return (
    <>
      <Navbar />
      <main className="py-5">
        <div className="container">
          <RegisterUserForm />
        </div>
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
