"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastY = useRef(0);
  const ticking = useRef(false);

  const leftLinks = useMemo(
    () => [
      { label: "Início", href: "#inicio" },
      { label: "Quem Somos", href: "#quem-somos" },
      { label: "Pilares", href: "#pilares" },
      { label: "Imagens", href: "#imagens" },
    ],
    []
  );

  const rightLinks = useMemo(
    () => [
      { label: "Perguntas Frequentes", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
    []
  );

  const allLinks = useMemo(() => [...leftLinks, ...rightLinks], [leftLinks, rightLinks]);

  const close = useCallback(() => setOpen(false), []);

  // ESC fecha menu
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close]);

  // ✅ esconde ao descer / mostra ao subir (não esconde se menu aberto)
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        // zona morta pra evitar tremedeira
        if (Math.abs(delta) >= 10) {
          if (!open) {
            // só esconde depois de um pouco de scroll (pra não sumir no topo)
            if (delta > 0 && y > 140) setHidden(true);
            if (delta < 0) setHidden(false);
          } else {
            setHidden(false);
          }
          lastY.current = y;
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // ✅ scroll com offset real do header (melhor quando header some/volta)
  const scrollToHash = useCallback((hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // se o header estiver escondido, considera 0
    const header = document.getElementById("site-header");
    const headerH = hidden ? 0 : header?.getBoundingClientRect().height ?? 0;

    const gap = -230;
    const y = window.scrollY + el.getBoundingClientRect().top - headerH - gap;

    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }, [hidden]);

  const onNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();

      // fecha menu e garante header visível antes de calcular
      setOpen(false);
      setHidden(false);

      // espera fechar + layout estabilizar
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToHash(href));
      });
    },
    [scrollToHash]
  );

  return (
    <header
      id="site-header"
      className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}
    >
      <nav className={styles.nav} aria-label="Navegação principal">
        <div className={styles.side}>
          {leftLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.link}
              onClick={(e) => onNavClick(e, l.href)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="#inicio"
          className={styles.logoWrap}
          aria-label="Instituto Eu Acredito"
          onClick={(e) => onNavClick(e, "#inicio")}
        >
          <Image
            src="/novaLOGO.png"
            alt="Instituto Eu Acredito"
            width={400}
            height={400}
            priority
            className={styles.logo}
          />
        </Link>

        <div className={styles.sideRight}>
          {rightLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.link}
              onClick={(e) => onNavClick(e, l.href)}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="#contato"
            className={styles.cta}
            onClick={(e) => onNavClick(e, "#contato")}
          >
            Fale Conosco
          </Link>

          {/* ✅ Hambúrguer continua aqui */}
          <button
            className={styles.burger}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span className={`${styles.bLine} ${open ? styles.bLine1 : ""}`} />
            <span className={`${styles.bLine} ${open ? styles.bLine2 : ""}`} />
            <span className={`${styles.bLine} ${open ? styles.bLine3 : ""}`} />
          </button>
        </div>
      </nav>

      <button
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={close}
        aria-label="Fechar menu"
        tabIndex={open ? 0 : -1}
        type="button"
      />

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.mobileMenuInner}>
          {allLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={(e) => onNavClick(e, l.href)}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="#contato"
            className={styles.mobileCTA}
            onClick={(e) => onNavClick(e, "#contato")}
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </header>
  );
}
