"use client";

import { useEffect } from "react";

export default function HeaderOffset() {
  useEffect(() => {
    function apply() {
      const header = document.getElementById("site-header");
      const h = header?.getBoundingClientRect().height ?? 0;
      document.documentElement.style.setProperty("--header-h", `${Math.ceil(h)}px`);
    }

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return null;
}
