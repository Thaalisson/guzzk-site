"use client";
import "../styles/hero.css";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const scrollToReleases = () => {
    const releasesSection = document.getElementById("releases");
    if (releasesSection) {
      releasesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#releases");
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>GUZZK MUSIC</h1>
        <p>Explore the latest releases and new sonic experiences.</p>
        <button onClick={scrollToReleases} className="btn">View Releases</button>
      </div>
    </section>
  );
}
