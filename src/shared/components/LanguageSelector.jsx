// shared/components/LanguageSelector.jsx
import { useEffect, useState } from "react";

export default function LanguageSelector() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("qrosspass_lang") || "es";
    setLang(storedLang);
  }, []);

  const handleChange = (e) => {
    const selected = e.target.value;
    setLang(selected);
    localStorage.setItem("qrosspass_lang", selected);
    alert("Language switched to: " + selected + " (under development)");
  };

  return (
    <select
      className="form-select form-select-sm bg-dark text-white border-info"
      style={{ width: "auto" }}
      value={lang}
      onChange={handleChange}
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}
