"use client";
import "../styles/releases.css";
import { useState, useRef, useEffect } from "react";
import AudioVisualizer from "./AudioVisualizer";
import { FaSpotify, FaApple, FaDeezer, FaSoundcloud, FaYoutube, FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

const releasesData = [
  {
    id: 1,
    title: "PAPI - Guzzk, Ramuz (BR)",
    cover: "/songs/PapiNewSong.jpeg",
    preview: "/songs/PapiEdit.wav",
    platforms: {
      spotify: { url: "#", icon: <FaSpotify /> },
      apple: { url: "#", icon: <FaApple /> },
      deezer: { url: "#", icon: <FaDeezer /> },
      soundCloud: { url: "#", icon: <FaSoundcloud /> },
      youtube: { url: "#", icon: <FaYoutube /> }
    },
    featured: true
  }
];

export default function Releases() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);

  const featuredRelease = releasesData.find(release => release.featured);

  useEffect(() => {
    if (!audioRef.current) return;

    const handleTimeUpdate = () => {
      const currentTime = Math.floor(audioRef.current.currentTime);
      const progressPercent = (currentTime / 20) * 100;
      setProgress(progressPercent);

      if (currentTime >= 20) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setShowPlayer(false);
      }
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [modalOpen]);

  const togglePlay = async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      await audioContextRef.current.resume();
    }

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playPreview = async () => {
    setModalOpen(true);
    setShowPlayer(true);
    setCurrentPreview(featuredRelease.preview);
    setIsPlaying(true);

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      await audioContextRef.current.resume();
    }
  };

  return (
    <section id="releases" className="releases">
      {featuredRelease && (
        <div className="hero-release" style={{ backgroundImage: `url(${featuredRelease.cover})` }}>
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>{featuredRelease.title}</h1>
            <button className="btn listen-now-btn" onClick={playPreview}>LISTEN NOW</button>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalOpen(false)}>✖</button>
            <img src={featuredRelease.cover} alt={featuredRelease.title} className="modal-cover"/>
            <h2>{featuredRelease.title}</h2>

            <p>Listen on:</p>
            <div className="platforms">
              {Object.entries(featuredRelease.platforms).map(([key, platform]) => (
                <a key={key} href={platform.url} target="_blank" className="platform-btn">
                  {platform.icon} {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>

            {showPlayer && (
              <>
                <div className="custom-audio-player">
                  <button className="play-btn" onClick={togglePlay}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                  </div>
                  <FaVolumeUp className="volume-icon" />
                </div>

                {/* 🔥 Agora passa corretamente o elemento de áudio */}
                <AudioVisualizer audioElement={audioRef.current} isPlaying={isPlaying} />
              </>
            )}

            <audio ref={audioRef} src={currentPreview} autoPlay />
          </div>
        </div>
      )}
    </section>
  );
}
