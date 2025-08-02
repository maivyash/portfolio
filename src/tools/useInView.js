import { useEffect, useRef } from "react";

export default function useInView(ref, rootMargin = "0px") {
  const hasTriggered = useRef(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          entry.target.classList.add("enter");
          hasTriggered.current = true;
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
}
