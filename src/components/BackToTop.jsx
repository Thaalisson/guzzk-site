"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLanguage } from "@/app/lib/i18n";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const { t } = useLanguage();

  // Monitora o scroll e exibe/esconde o botão
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition ${
        showButton ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
      onClick={scrollToTop}
      aria-label={t("backToTop")}
    >
      <FaArrowUp />
    </button>
  );
}
