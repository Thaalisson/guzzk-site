"use client";
import { useEffect, useState, useRef } from "react";
import "../styles/music.css";

export default function Music() {
  const [tracks, setTracks] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();
        console.log("🚀 Resposta da API do Spotify:", data);
        setTracks(data.slice(0, 6)); // Pegamos 6 músicas para a linha do tempo
      } catch (error) {
        console.error("❌ Erro ao buscar músicas do Spotify:", error);
      }
    }
    fetchTracks();
  }, []);

  // Função para detectar quando um item entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [tracks]);

  return (
    <section className="music-timeline" ref={timelineRef}>
      <h2 className="timeline-title">MUSIC JOURNEY</h2>
      <div className="timeline">
        {tracks.map((track, index) => (
          <div key={track.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="track-iframe">
              <iframe
                src={`https://open.spotify.com/embed/track/${track.id}?utm_source=iframe-api`}
                width="100%"
                height="250"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
            <div className="track-info">
              <h3>{track.name}</h3>
              <p><strong>Album:</strong> {track.album.name}</p>
              <p><strong>Artist:</strong> {track.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
