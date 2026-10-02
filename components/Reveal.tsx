"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("has-js");

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 120px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-js");
    };
  }, [pathname]);

  return null;
}
