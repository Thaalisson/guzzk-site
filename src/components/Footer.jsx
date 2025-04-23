"use client";
import "../styles/footer.css";
import { FaSpotify, FaYoutube, FaSoundcloud, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
        <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
          <FaSoundcloud className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
      <p>&copy; 2024 GUZZK. Todos os direitos reservados.</p>
    </footer>
  );
}
