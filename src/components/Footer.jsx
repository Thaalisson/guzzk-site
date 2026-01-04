"use client";
import { FaSpotify, FaYoutube, FaSoundcloud, FaInstagram, FaDownload } from "react-icons/fa";
import { useLanguage } from "@/app/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12 text-white/70">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 px-[8%]">
        <div className="flex items-center justify-center gap-5 text-2xl">
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
      </div>

      <p className="mt-8 text-center text-sm">&copy; 2024 GUZZK. {t("footer.rights")}</p>
    </footer>
  );
}
