import { useEffect, useRef } from "react";

/**
 * Fades up every [data-reveal] element inside the returned ref on scroll.
 * Respects prefers-reduced-motion and loads GSAP lazily on the client.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const rootRef = useRef<T>(null);

  useEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.from(element, {
              y: 60,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            });
          });
        }, rootRef);
        cleanup = () => context.revert();
      },
    );

    return () => cleanup();
  }, []);

  return rootRef;
}
