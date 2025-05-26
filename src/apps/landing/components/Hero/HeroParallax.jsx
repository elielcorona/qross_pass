// src/apps/landing/components/Hero/HeroParallax.jsx
import React, { useEffect, useState } from "react";

export default function HeroParallax({ children }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="hero-parallax d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url('/assets/images/Hero.png')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPositionY: `${offsetY * 0.3}px`,
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
      <div className="container py-5" style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </section>
  );
}
