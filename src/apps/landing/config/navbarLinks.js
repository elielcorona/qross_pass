const navbarLinks = [
  {
    label: "Descarga la App",
    href: "#",
    dropdown: true,
    dropdownContent: {
      title: "Disponible para Android y versión Web",
      description: "Escanea el QR o selecciona tu opción para empezar a entrenar.",
      buttons: [
        { label: "iOS", variant: "outline-light", href: "#" },
        { label: "Android", variant: "info", href: "#" }
      ],
    }
  },
  {
    label: "Únete",
    href: "#",
    dropdown: true,
    dropdownContent: {
      title: "Sé parte de la red QrossPass",
      description: "Crea tu cuenta como usuario o haz crecer tu gimnasio como partner.",
      buttons: [
        { label: "Soy Usuario", variant: "info", href: "/registeruser" },
        { label: "Soy Gimnasio", variant: "warning", textDark: true, href: "/registerpartner" }
      ],
    }
  },
  {
    label: "Contáctanos",
    href: "/contacto",
  }
];

export default navbarLinks;
