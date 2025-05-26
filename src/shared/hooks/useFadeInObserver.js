import { useEffect } from "react";

export default function useFadeInObserver(ref, options = {}) {
  const {
    threshold = 0.2,
    once = true,
    className = "fade-in",
    hiddenClass = "fade-hidden",
  } = options;

  useEffect(() => {
    const node = ref?.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(className);
          node.classList.remove(hiddenClass);
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove(className);
          node.classList.add(hiddenClass);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, threshold, once, className, hiddenClass]);
}
