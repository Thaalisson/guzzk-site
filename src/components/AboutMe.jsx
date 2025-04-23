"use client";
import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-content">
        <h2>About <span>Guzzk</span></h2>
        <p>
          <strong>Mathéus</strong>, known professionally as <strong>Guzzk</strong>, is a 
          Brazilian DJ and producer based in <strong>Miami</strong>. His signature sound 
          blends <strong>Afro House, House, and Melodic House</strong>, creating immersive, hypnotic experiences.
        </p>

        <div className="about-highlights">
          <div>Performed at <strong>Miami Music Week & Formula 1</strong></div>
          <div>Played at <strong>Claptone’s Masquerade</strong></div>
          <div>Released <strong>"Passion"</strong> under <strong>Stereo Productions</strong></div>
          <div>Sets inspired by <strong>global sounds & cultures</strong></div>
        </div>

        <p>
          His mission? <strong>To inspire and take listeners on an unforgettable sonic journey.</strong>
          With upcoming <strong>releases & remixes</strong>, Guzzk is shaping the future of electronic music.
        </p>
      </div>

      <div className="about-image">
        <img src="/songs/guzzk.jpg" alt="Guzzk DJ" />
      </div>
    </section>
  );
}
