import React, { useState } from "react";
import { motion } from "motion/react";
import navbarLinks from "../../config/navbarLinks";
import Logo from "../../../../shared/components/Logo";
import Button from "../../../../shared/components/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(navbarLinks[0].label);

  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-expand-lg fixed-top px-4 py-2"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(4px)" }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Link className="navbar-brand text-white d-flex align-items-center gap-2" to="/">
          <Logo size="1.6rem" />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={() => setIsCollapsedOpen(!isCollapsedOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4 align-items-center">
            {navbarLinks.map((item, index) => {
              const isHovered = hoveredTab === item.label;
              const isMobile = typeof window !== "undefined" && window.innerWidth < 992;
              const showUnderline = isHovered || (isMobile && isCollapsedOpen);

              return (
                <motion.li
                  key={index}
                  className="nav-item position-relative dropdown-hover"
                  onMouseEnter={() => setHoveredTab(item.label)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onClick={() => setSelectedTab(item.label)}
                  style={{ cursor: "pointer" }}
                >
                  
                {item.dropdown ? (
                  <span className="nav-link text-white fw-semibold px-2 d-inline-block position-relative">
                    {item.label}
                    {showUnderline && (
                      <motion.div
                        layoutId="underline"
                        className="nav-underline"
                      />
                    )}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="nav-link text-white fw-semibold px-2 d-inline-block position-relative"
                    onClick={() => setSelectedTab(item.label)}
                  >
                    {item.label}
                    {showUnderline && (
                      <motion.div
                        layoutId="underline"
                        className="nav-underline"
                      />
                    )}
                  </Link>
                )}


                  {/* Dropdown en desktop */}
                  {item.dropdown && (
                    <div className="hover-dropdown p-4 bg-dark text-white rounded shadow-lg d-flex flex-column gap-3 text-center"
                      style={{ minWidth: "340px", maxWidth: "480px" }}>
                      {item.dropdownContent.image && (
                        <img
                          src={item.dropdownContent.image}
                          alt={item.label}
                          style={{ width: "130px", height: "auto", borderRadius: "12px", margin: "0 auto" }}
                        />
                      )}
                      <div>
                        <h6 className="fw-bold mb-2">{item.dropdownContent.title}</h6>
                        <p className="small">{item.dropdownContent.description}</p>
                        <div className="d-flex justify-content-center gap-2 flex-wrap mt-2">
                          {item.dropdownContent.buttons.map((btn, i) => (
                            <Button
                              key={i}
                              href={btn.href || "#"}
                              text={btn.label}
                              variant={btn.variant}
                              size="sm"
                              className={btn.textDark ? "text-dark" : ""}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ul>

          {/* Botones laterales */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 ms-lg-3">
            <Button href="/registeruser" text="Registrarse" variant="info" size="sm" className="fw-bold" />

            {/* Dropdown para iniciar sesión */}
            <div className="dropdown">
              <button
                className="btn btn-outline-light btn-sm dropdown-toggle fw-bold px-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Iniciar sesión
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark shadow-lg rounded-3 border-1 mt-2">
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/user/login">
                    <i className="bi bi-person-circle text-info"></i>
                    <span>Como Usuario</span>
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/partner/login">
                    <i className="bi bi-building text-warning"></i>
                    <span>Como Gimnasio</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
