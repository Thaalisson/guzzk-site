"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/app/lib/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navListRef = useRef(null);
  const itemRefs = useRef([]);
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
  } md:static md:top-auto md:left-auto md:h-auto md:w-full md:flex md:flex-col md:items-center md:justify-start md:translate-x-0 md:bg-transparent md:gap-10 md:py-5`;

  const navItems = useMemo(
    () => [
      { id: "home", label: t("nav.home"), href: "/" },
      { id: "about-me", label: t("nav.about"), href: "/#about-me" },
      { id: "music", label: t("nav.music"), href: "/#music" },
      { id: "shows-section", label: t("nav.shows"), href: "/#shows-section" },
      { id: "contact", label: t("nav.contact"), href: "/#contact" },
    ],
    [t]
  );

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const updateActive = () => {
      const scrollY = window.scrollY;
      const offset = 200;
      let currentIndex = 0;
      sections.forEach((section, index) => {
        if (scrollY + offset >= section.offsetTop) {
          currentIndex = index;
        }
      });
      setActiveIndex(currentIndex);
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [navItems]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const index = navItems.findIndex((item) => item.id === hash);
    if (index !== -1) setActiveIndex(index);
  }, [navItems]);

  useEffect(() => {
    const updateIndicator = () => {
      const list = navListRef.current;
      const item = itemRefs.current[activeIndex];
      if (!list || !item) return;
      const listRect = list.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      setIndicatorTop(itemRect.top - listRect.top + itemRect.height / 2);
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex, navItems]);

  return (
    <nav
      className="navbar fixed top-0 left-0 w-full bg-[#0b0b0f]/85 border-b border-white/10 backdrop-blur flex items-center justify-between gap-4 px-5 py-3 z-[1100] md:h-screen md:w-[96px] md:flex-col md:items-center md:justify-between md:border-b-0 md:border-r md:border-white/10 md:px-0 md:py-6"
      style={{ "--scroll-progress": `${scrollProgress}%` }}
    >
      <div className="logo md:mb-4">
        <Link href="/" className="inline-flex items-center gap-2 text-white uppercase tracking-[0.22em] text-sm font-semibold md:flex-col">
          <img src="/LogoBlank.png" alt="Guzzk logo" className="h-6 w-auto invert" />
          <span className="hidden md:block text-[10px] tracking-[0.32em]">GUZZK</span>
        </Link>
      </div>

      <span className="sidebar-line pointer-events-none hidden md:block md:h-12 md:w-px md:bg-white/20" aria-hidden="true" />
      <div className="sidebar-progress pointer-events-none hidden md:block" aria-hidden="true">
        <span className="sidebar-progress__fill" />
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
      <ul className={`nav-links relative ${navLinksClass}`} ref={navListRef}>
        <span
          className="sidebar-indicator pointer-events-none hidden md:block"
          style={{ top: `${indicatorTop}px` }}
          aria-hidden="true"
        />
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className="md:rotate-180 md:[writing-mode:vertical-rl]"
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          >
            <a
              className={`sidebar-link text-white/55 hover:text-white uppercase tracking-[0.44em] text-[11px] ${
                activeIndex === index ? "sidebar-link--active" : ""
              }`}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="md:mt-4">
          <div className="lang-rail relative">
            <button
              type="button"
              className="lang-trigger text-white/55 hover:text-white uppercase tracking-[0.4em] text-[10px] md:rotate-180 md:[writing-mode:vertical-rl]"
              aria-label={t("nav.language")}
            >
              LANG
            </button>

            <div className="lang-flyout absolute left-full top-1/2 -translate-y-1/2 pl-3 md:flex">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur">
                <button
                  type="button"
                  className={`${language === "en" ? "text-white" : "text-white/50"}`}
                  onClick={() => setLanguage("en")}
                >
                  {t("nav.en")}
                </button>
                <span className="h-3 w-px bg-white/20" aria-hidden="true" />
                <button
                  type="button"
                  className={`${language === "pt" ? "text-white" : "text-white/50"}`}
                  onClick={() => setLanguage("pt")}
                >
                  {t("nav.pt")}
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="md:mt-3 md:flex md:flex-col md:items-center md:gap-2">
          <span className="sidebar-line sidebar-line--long pointer-events-none md:block md:h-14 md:w-px md:bg-white/30" aria-hidden="true" />
          <a
            href="https://www.instagram.com/guzzk/"
            target="_blank"
            rel="noreferrer"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/35 text-white/80 transition hover:text-white hover:border-white/70 hover:scale-105"
            aria-label="Instagram"
          >
            <FaInstagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      </ul>

      <style jsx global>{`
        .sidebar-line {
          animation: sidebarGlow 5s ease-in-out infinite;
          box-shadow: 0 0 18px rgba(255, 255, 255, 0.25);
        }

        .sidebar-line--long {
          position: relative;
          background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.08)
          );
        }

        .sidebar-line--long::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 12%;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
          animation: sidebarPulse 2.2s ease-in-out infinite;
        }

        .sidebar-progress {
          position: absolute;
          left: 50%;
          top: 110px;
          bottom: 40px;
          width: 1px;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.08);
        }

        .sidebar-progress__fill {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: var(--scroll-progress, 0%);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.15));
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.35);
        }

        .sidebar-indicator {
          position: absolute;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.65);
          transition: top 240ms ease;
        }

        .sidebar-link {
          position: relative;
          transition: color 200ms ease, transform 220ms ease;
        }

        .sidebar-link--active {
          color: rgba(255, 255, 255, 0.95);
        }

        .sidebar-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -12px;
          width: 2px;
          height: 12px;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.18);
          opacity: 0;
          transition: opacity 200ms ease;
        }

        .sidebar-link:hover::after {
          opacity: 1;
        }

        .sidebar-link:hover {
          transform: translateY(-2px);
        }

        .lang-rail:hover .lang-flyout,
        .lang-rail:focus-within .lang-flyout {
          opacity: 1;
          visibility: visible;
          transform: translate(0, -50%);
        }

        .lang-flyout {
          opacity: 0;
          visibility: hidden;
          transform: translate(6px, -50%);
          transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
        }

        @keyframes sidebarGlow {
          0%,
          100% {
            opacity: 0.65;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes sidebarPulse {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-50%) scale(1.6);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            height: auto !important;
            width: 100% !important;
            flex-direction: row !important;
          }

          .nav-links {
            position: fixed !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100vh !important;
            transform: translateX(-100%) !important;
            background: rgba(0, 0, 0, 0.96) !important;
          }

          .nav-links.translate-x-0 {
            transform: translateX(0) !important;
          }

          .sidebar-progress,
          .sidebar-indicator {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
