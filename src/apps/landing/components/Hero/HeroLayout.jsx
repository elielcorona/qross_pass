// src/apps/landing/components/Hero/HeroLayout.jsx
import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function HeroLayout() {
  return (
    <section className="hero-animated d-flex align-items-center position-relative text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <HeroText />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
