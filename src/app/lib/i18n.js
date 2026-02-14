"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      music: "Journey",
      shows: "Shows",
      contact: "Contact",
      language: "Language",
      en: "EN",
      pt: "PT-BR",
    },
    hero: {
      eyebrow: "DJ / Producer",
      tagline: "Afro House. Melodic heat. Miami nights.",
      sub: "A hypnotic set blending global grooves, deep lines, and peak-hour energy.",
      ctaListen: "Listen Now",
      ctaBook: "Book a Show",
    },
    about: {
      label: "About",
      lede:
        "Matheus, known professionally as Guzzk, is a Brazilian DJ and producer based in Miami. His signature blend of Afro House, House, and Melodic House delivers immersive, hypnotic dancefloor moments designed to move the room.",
      trackLabel: "Now Playing",
      trackTitle: "Passion",
      trackMeta: "Guzzk - Stereo Productions",
      mission:
        "His mission: inspire and take listeners on an unforgettable sonic journey. With upcoming releases and remixes, Guzzk is shaping the next wave of electronic music.",
      tags: ["Afro House", "Melodic House", "Miami", "Global Grooves"],
      highlights: [
        {
          title: "Major Stages",
          body: "Performed at Miami Music Week & Formula 1.",
        },
        {
          title: "Iconic Sets",
          body: "Played at Claptone's Masquerade.",
        },
        {
          title: "Releases",
          body: "Released \"Passion\" under Stereo Productions.",
        },
        {
          title: "Signature",
          body: "Sets inspired by global sounds & cultures.",
        },
      ],
    },
    releases: {
      listenNow: "Listen Now",
      listenOn: "Listen on:",
      closePreview: "Close preview",
      playPreview: "Play preview",
      pausePreview: "Pause preview",
    },
    music: {
      title: "MUSIC JOURNEY",
      album: "Album",
      artist: "Artist",
      spotifyTitle: "Spotify player: {track}",
    },
    shows: {
      title: "Live Performances",
      featuredTitle: "Featured Live Set",
      featuredBody:
        "Highlight performance clip showcasing the energy and atmosphere from the live show.",
      featuredDate: "Featured",
      firstTitle: "Formula 1 Miami Grand Prix",
      firstBody:
        "Live set at Formula 1 Miami Grand Prix 2023, bringing a powerful Afro House & Melodic Techno experience.",
      secondTitle: "Basel Week - Miami",
      secondBody:
        "Guzzk's exclusive performance at Basel Week in Miami, fusing deep grooves with a mesmerizing atmosphere.",
    },
    contact: {
      title: "DJ GUZZK",
      label: "CONTACT",
      rights: "All rights reserved.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    backToTop: "Back to top",
  },
  pt: {
    nav: {
      home: "Inicio",
      about: "Sobre",
      music: "Jornada",
      shows: "Shows",
      contact: "Contato",
      language: "Idioma",
      en: "EN",
      pt: "PT-BR",
    },
    hero: {
      eyebrow: "DJ / Produtor",
      tagline: "Afro House. Calor melodico. Noites de Miami.",
      sub: "Um set hipnotico que mistura grooves globais, linhas profundas e energia de pista.",
      ctaListen: "Ouvir Agora",
      ctaBook: "Fechar Show",
    },
    about: {
      label: "Sobre",
      lede:
        "Matheus, conhecido como Guzzk, e DJ e produtor brasileiro baseado em Miami. Sua assinatura mistura Afro House, House e Melodic House para criar momentos hipnoticos e imersivos na pista.",
      trackLabel: "Tocando Agora",
      trackTitle: "Passion",
      trackMeta: "Guzzk - Stereo Productions",
      mission:
        "Sua missao: inspirar e levar o publico a uma jornada sonora inesquecivel. Com lancamentos e remixes a caminho, Guzzk esta moldando a proxima onda da musica eletronica.",
      tags: ["Afro House", "Melodic House", "Miami", "Grooves Globais"],
      highlights: [
        {
          title: "Palcos",
          body: "Performances na Miami Music Week e Formula 1.",
        },
        {
          title: "Sets Iconicos",
          body: "Apresentacao na Masquerade do Claptone.",
        },
        {
          title: "Lancamentos",
          body: "Single \"Passion\" pela Stereo Productions.",
        },
        {
          title: "Assinatura",
          body: "Sets inspirados por sons e culturas globais.",
        },
      ],
    },
    releases: {
      listenNow: "Ouvir Agora",
      listenOn: "Ouca em:",
      closePreview: "Fechar preview",
      playPreview: "Tocar preview",
      pausePreview: "Pausar preview",
    },
    music: {
      title: "JORNADA MUSICAL",
      album: "Album",
      artist: "Artista",
      spotifyTitle: "Player Spotify: {track}",
    },
    shows: {
      title: "Performances ao Vivo",
      featuredTitle: "Set em Destaque",
      featuredBody:
        "Trecho de performance em destaque mostrando a energia e a atmosfera do show ao vivo.",
      featuredDate: "Destaque",
      firstTitle: "Formula 1 Miami Grand Prix",
      firstBody:
        "Set ao vivo na Formula 1 Miami Grand Prix 2023, trazendo uma experiencia poderosa de Afro House e Melodic Techno.",
      secondTitle: "Basel Week - Miami",
      secondBody:
        "Apresentacao exclusiva de Guzzk na Basel Week em Miami, unindo grooves profundos com uma atmosfera hipnotica.",
    },
    contact: {
      title: "DJ GUZZK",
      label: "CONTATO",
      rights: "Todos os direitos reservados.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    backToTop: "Voltar ao topo",
  },
};

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

function getValue(source, path) {
  return path.split(".").reduce((acc, part) => {
    if (!acc || typeof acc !== "object") return undefined;
    return acc[part];
  }, source);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
    if (document?.documentElement) {
      document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    }
  }, [language]);

  const t = useMemo(() => {
    return (key) => {
      const value = getValue(translations[language], key);
      return value ?? key;
    };
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
