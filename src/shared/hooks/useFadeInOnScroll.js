import { useEffect } from "react";

export default function useFadeInOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-hidden, .fade-left, .fade-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
