"use client";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">GUZZK</Link>
      </div>

      {/* Botão do Menu Hamburguer */}
      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Itens do Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/" onClick={(e) => handleScrollToSection(e, "home")}>Home</a></li>
        <li><a href="/#about-me" onClick={(e) => handleScrollToSection(e, "about-me")}>About</a></li>
        <li><a href="/#releases" onClick={(e) => handleScrollToSection(e, "releases")}>Music</a></li>
        <li><a href="/#shows-section" onClick={(e) => handleScrollToSection(e, "shows-section")}>Shows</a></li>
        <li><a href="/#contact" onClick={(e) => handleScrollToSection(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}
