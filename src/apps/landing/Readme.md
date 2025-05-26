# QrossPass Landing Page

Este módulo representa la landing page oficial de QrossPass, una plataforma que conecta usuarios con gimnasios a través de una sola membresía.

---

## 📁 Estructura de Carpetas

```
src/
├── apps/
│   └── landing/
│       ├── components/         # Componentes visuales de la landing
│       │   ├── Hero.jsx
│       │   ├── AboutSection.jsx
│       │   ├── PlansUsersSection.jsx
│       │   ├── PlansPartnersSection.jsx
│       │   ├── PartnerTableSection.jsx
│       │   ├── CallToActionSection.jsx
│       │   └── layout/
│       │       ├── Navbar.jsx
│       │       └── Footer.jsx
│       └── pages/
│           └── Home.jsx         # Página principal ensamblada
│
├── shared/
│   ├── components/             # Componentes reutilizables
│   │   ├── Button.jsx
│   │   ├── DropdownItem.jsx
│   │   ├── Icon.jsx
│   │   ├── IconCard.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── Logo.jsx
│   │   ├── Modal.jsx
│   │   ├── PlanCard.jsx
│   │   ├── PricingTable.jsx
│   │   ├── ScrollTopButton.jsx
│   │   ├── SectionWrapper.jsx
│   │   └── TablePlanRow.jsx
│   └── hooks/
│       └── useFadeInOnScroll.js
```

---

## 🚀 Tecnologías
- React + Vite
- Bootstrap 5
- Bootstrap Icons
- CSS personalizado (theme-dark.css)

---

## ✅ Secciones del Landing
1. **Navbar** – Navegación con enlaces y CTA
2. **Hero** – Imagen de fondo con mensaje principal
3. **AboutSection** – ¿Qué es QrossPass?
4. **Planes para usuarios** – Tarjetas de planes de membresía
5. **Planes para partners** – Beneficios y tabla comparativa
6. **Call To Action** – Botones de registro para usuarios y partners
7. **Footer** – Enlaces legales y contacto
8. **ScrollTopButton** – Botón flotante para volver arriba

---

## 🧩 Reutilización
Todos los componentes están modularizados para permitir su uso tanto dentro como fuera de la landing page. Pueden integrarse fácilmente a otros módulos como el panel de administración o apps móviles.

---

## 📌 Para contribuir
1. Mantén los nombres en inglés.
2. Usa `SectionWrapper` para nuevas secciones.
3. Aplica `fade-hidden` + `useFadeInOnScroll` para animaciones.
4. Todos los íconos deben usarse vía Bootstrap Icons (`<i className="bi bi-icon-name">`).

---

¿Listo para unirte a QrossPass?
👉 Visita `/pages/usuarios/registro.html` o `/pages/partners/registro.html`
