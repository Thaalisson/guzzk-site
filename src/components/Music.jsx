"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/app/lib/i18n";

export default function Music() {
  const [tracks, setTracks] = useState([]);
  const timelineRef = useRef(null);
  const { t } = useLanguage();
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) {
          throw new Error(`Spotify API returned ${response.status}`);
        }
        const data = await response.json();
        setTracks(Array.isArray(data) ? data.slice(0, 6) : []);
      } catch (error) {
        console.error("Erro ao buscar musicas do Spotify:", error);
        setTracks([]);
      }
    }
    fetchTracks();
  }, []);

  useEffect(() => {
    if (!tracks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll("[data-timeline-item]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [tracks]);

  return (
    <section
      ref={timelineRef}
      className="relative px-[8%] py-[100px] text-white text-center"
    >
      <h2 className="music-title mb-[60px] flex flex-col items-center text-3xl font-bold uppercase tracking-[1.5px]">
        <span>{t("music.title")}</span>
        <span className="music-wave" aria-hidden="true" />
      </h2>

      {/* Container igual ao CSS antigo: max-width + central */}
      <div className="relative mx-auto max-w-[1000px]">
        {/* Linha central (igual ::before do CSS antigo) */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[5px] -translate-x-1/2 bg-white/10 lg:block" />
        <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10 lg:hidden" />

        <div className="flex flex-col">
          {tracks.map((track, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={track.id}
                data-timeline-item
                data-index={index}
                className={`
                  music-item
                  relative mx-auto my-[60px] flex w-full max-w-[900px] items-center
                  transition-all duration-700 ease-out
                  ${isLeft ? "lg:flex-row lg:text-left" : "lg:flex-row-reverse lg:text-right"}
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}
                `}
              >
                {/* Spotify (flex 2) */}
                <div className="flex-[2] m-[15px] w-full">
                  <div className="music-embed h-[250px] w-full overflow-hidden rounded-[10px]">
                    <iframe
                      src={`https://open.spotify.com/embed/track/${track.id}?utm_source=iframe-api`}
                      width="100%"
                      height="250"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      className="h-full w-full"
                    />
                  </div>
                </div>

                {/* Info (flex 1 + max width 300px) */}
                <div className="music-card flex-[1] m-[15px] max-w-[300px] w-full rounded-[10px] border border-white/10 bg-white/5 p-5 text-base shadow-[0_6px_15px_rgba(255,255,255,0.08)]">
                  <h3 className="text-lg font-medium">{track.name}</h3>

                  <p className="mt-3 text-white/80">
                    <strong>{t("music.album")}:</strong> {track.album.name}
                  </p>

                  <p className="mt-2 text-white/80">
                    <strong>{t("music.artist")}:</strong>{" "}
                    {track.artists.map((artist) => artist.name).join(", ")}
                  </p>
                </div>

                {/* Timeline markers removed per request */}
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE line (como seu CSS antigo) */}
      <style jsx global>{`
        .music-title {
          gap: 14px;
        }

        .music-wave {
          display: block;
          height: 6px;
          width: 180px;
          border-radius: 999px;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8) 0 6px,
            rgba(255, 255, 255, 0.15) 6px 12px
          );
          background-size: 200% 100%;
          animation: musicWave 4s linear infinite;
          opacity: 0.8;
        }

        .music-embed {
          position: relative;
        }

        .music-embed::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 16px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          transform: translateY(-50%) scale(0.9);
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0 25%, rgba(0, 0, 0, 0.4) 26% 55%, rgba(255, 255, 255, 0.15) 56% 100%);
          opacity: 0;
          transition: opacity 220ms ease, transform 220ms ease;
          animation: vinylSpin 6s linear infinite;
          pointer-events: none;
        }

        .music-item:hover .music-embed::after {
          opacity: 0.35;
          transform: translateY(-50%) scale(1);
        }

        .music-card {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .music-item:hover .music-card {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }

        @keyframes musicWave {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 200% 0;
          }
        }

        @keyframes vinylSpin {
          from {
            transform: translateY(-50%) rotate(0deg);
          }
          to {
            transform: translateY(-50%) rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          [data-timeline-item] {
            flex-direction: column !important;
            text-align: center !important;
            padding-left: 26px;
          }
        }
      `}</style>
    </section>
  );
}
