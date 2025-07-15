import { useEffect } from "react";

export default function useInView(ref, rootMargin = "0px") {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("enter");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
}
