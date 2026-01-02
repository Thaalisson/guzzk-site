"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/lib/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Função para rolar suavemente até a seção correspondente
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const navLinksClass = `fixed top-0 left-0 h-screen w-full bg-black/95 flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } md:static md:h-auto md:w-auto md:flex-row md:translate-x-0 md:bg-transparent md:gap-5`;

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-[#0b0b0f]/85 border-b border-white/10 backdrop-blur flex items-center justify-between gap-4 px-5 py-3 z-[1100]">
      <div className="logo">
        <Link href="/" className="inline-flex items-center gap-2 text-white uppercase tracking-[0.22em] text-sm font-semibold">
          <img src="/LogoBlank.png" alt="Guzzk logo" className="h-6 w-auto invert" />
          <span className="hidden md:inline">GUZZK</span>
        </Link>
      </div>

      {/* Botão do Menu Hamburguer */}
      <button
        type="button"
        className="menu-toggle flex flex-col md:hidden z-[1200] p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-6 bg-white rounded transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}></span>
        <span className={`h-0.5 w-6 bg-white rounded my-1 transition ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`h-0.5 w-6 bg-white rounded transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
      </button>

      {/* Itens do Menu */}
      <ul className={`nav-links ${navLinksClass}`}>
        <li><a className="text-white/75 hover:text-white uppercase tracking-[0.08em] text-sm" href="/" onClick={(e) => handleScrollToSection(e, "home")}>{t("nav.home")}</a></li>
        <li><a className="text-white/75 hover:text-white uppercase tracking-[0.08em] text-sm" href="/#about-me" onClick={(e) => handleScrollToSection(e, "about-me")}>{t("nav.about")}</a></li>
        <li><a className="text-white/75 hover:text-white uppercase tracking-[0.08em] text-sm" href="/#music" onClick={(e) => handleScrollToSection(e, "music")}>{t("nav.music")}</a></li>
        <li><a className="text-white/75 hover:text-white uppercase tracking-[0.08em] text-sm" href="/#shows-section" onClick={(e) => handleScrollToSection(e, "shows-section")}>{t("nav.shows")}</a></li>
        <li><a className="text-white/75 hover:text-white uppercase tracking-[0.08em] text-sm" href="/#contact" onClick={(e) => handleScrollToSection(e, "contact")}>{t("nav.contact")}</a></li>
        <li>
          <div className="lang-toggle inline-flex border border-white/15 rounded-full overflow-hidden" role="group" aria-label={t("nav.language")}>
            <button
              type="button"
              className={`px-2.5 py-1 text-xs tracking-[0.08em] ${language === "en" ? "bg-white text-black" : "text-white/70"}`}
              onClick={() => setLanguage("en")}
            >
              {t("nav.en")}
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 text-xs tracking-[0.08em] ${language === "pt" ? "bg-white text-black" : "text-white/70"}`}
              onClick={() => setLanguage("pt")}
            >
              {t("nav.pt")}
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
