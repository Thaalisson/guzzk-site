"use client";
import { FaSpotify, FaYoutube, FaSoundcloud, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/app/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-10 text-center text-white/70">
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
          <FaSpotify />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
          <FaYoutube />
        </a>
        <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
          <FaSoundcloud />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
          <FaInstagram />
        </a>
      </div>
      <p className="mt-4 text-sm">&copy; 2024 GUZZK. {t("footer.rights")}</p>
    </footer>
  );
}
