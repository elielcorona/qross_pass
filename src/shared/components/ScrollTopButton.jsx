import React, { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scrollTopBtn"
      onClick={scrollToTop}
      className={`scroll-arrow ${showButton ? "show" : ""}`}
      aria-label="Volver arriba"
    >
      <i className="bi bi-caret-up fs-2"></i>
    </button>
  );
}
