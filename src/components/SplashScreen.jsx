"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/splash.css"; // Importando CSS

export default function SplashScreen({ onAnimationComplete }) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Exibe o logo após 1 segundo
    setTimeout(() => setShowLogo(true), 1000);

    // Segura o logo por mais tempo antes de entrar na home (aumentado para 7s)
    setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 7000); // Antes era 5000ms (5s), agora é 7000ms (7s)
  }, []);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 4 }} // Antes era 4s, agora é 6s para segurar mais
    >
      {/* TestSplash2 aparece primeiro cobrindo tudo */}
      <motion.img
        src="/TestSplash2.svg"
        alt="Splash Effect"
        className="splash"
        initial={{ scale: 1.2, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* GuzzkVetor aparece mais rápido e fica por mais tempo */}
      {showLogo && (
        <motion.img
          src="/GuzzkVetor.svg"
          alt="Logo DJ"
          className="logoScreen" // Alterado de "logo" para "logoScreen"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut"}} // Cresce em 3s e mantém
        />
      )}
    </motion.div>
  );
}
