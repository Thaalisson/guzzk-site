"use client";
import "../styles/shows.css";

export default function Shows() {
  return (
    <section className="shows-section">
      <h2 className="shows-title">Live Performances</h2>

      <div className="shows-container">
        {/* Primeiro Vídeo */}
        <div className="show-item">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Rljra1NS61o?rel=0&autoplay=0&showinfo=0"
              title="Guzzk Live Performance"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="show-info">
            <h3>Formula 1 Miami Grand Prix</h3>
            <p>Live set at Formula 1 Miami Grand Prix 2023, bringing a powerful Afro House & Melodic Techno experience.</p>
          </div>
        </div>

        {/* Segundo Vídeo */}
        <div className="show-item">
          <div className="show-info">
            <h3>Basel Week - Miami</h3>
            <p>Guzzk's exclusive performance at Basel Week in Miami, fusing deep grooves with a mesmerizing atmosphere.</p>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/sbEOd76eiwI?rel=0&autoplay=0&showinfo=0"
              title="Guzzk Basel Week"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
