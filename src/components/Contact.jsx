"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative z-10 flex w-full max-w-[520px] flex-col items-center gap-6 rounded-3xl border border-white/15 bg-white/5 p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <div className="flex flex-col items-center gap-3">
          <img src="/GUZZK_LOGO.svg" alt="Guzzk logo" className="h-16 w-auto invert opacity-90" />
          <h1 className="text-3xl tracking-[0.18em]">{t("contact.title")}</h1>
        </div>

        <p className="text-sm uppercase tracking-[0.35em] text-white/60">{t("contact.label")}</p>

        <a
          href="mailto:guzzk@gmail.com"
          className="text-xl font-semibold text-white transition hover:text-[#1db954] hover:shadow-[0_0_12px_rgba(29,185,84,0.6)]"
        >
          guzzk@gmail.com
        </a>

        <div className="flex w-full flex-col gap-3 pt-2">
          <a
            href="mailto:guzzk@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5"
          >
            Book a Show
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            Press / Media Kit
          </a>
        </div>

        <p className="text-xs text-white/50">&copy; 2024 GUZZK. {t("contact.rights")}</p>
      </motion.div>
    </motion.section>
  );
}
