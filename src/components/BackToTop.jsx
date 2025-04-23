"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/backToTop.css"; // Estilização separada

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

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
    <button className={`back-to-top ${showButton ? "show" : ""}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
}
