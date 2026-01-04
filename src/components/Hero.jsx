"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { SiBeatport } from "react-icons/si";
import { useLanguage } from "@/app/lib/i18n";

export default function Hero() {
  const router = useRouter();
  const { t } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const setSpotlight = (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--spot-x", `${x}%`);
      section.style.setProperty("--spot-y", `${y}%`);
    };

    const resetSpotlight = () => {
      section.style.setProperty("--spot-x", "50%");
      section.style.setProperty("--spot-y", "30%");
    };

    resetSpotlight();
    section.addEventListener("mousemove", setSpotlight);
    section.addEventListener("mouseleave", resetSpotlight);
    return () => {
      section.removeEventListener("mousemove", setSpotlight);
      section.removeEventListener("mouseleave", resetSpotlight);
    };
  }, []);

  const scrollToReleases = () => {
    const releasesSection = document.getElementById("releases");
    if (releasesSection) {
      releasesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#releases");
    }
  };

  const scrollToMusic = (event) => {
    event.preventDefault();
    const musicSection = document.getElementById("music");
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#music");
    }
  };

  const scrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden text-left text-[#f4f4f4]"
    >
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen items-center px-[8vw] py-[130px]">
        <div className="max-w-[720px]">
          <div className="uppercase tracking-[0.28em] text-[0.9rem] text-white/65">Electronic Music Producer &amp; DJ</div>
          <h1 className="hero-pulse mt-4 text-[clamp(3.8rem,10vw,8.6rem)] tracking-[0.08em]">GUZZK</h1>
          <div className="my-4 h-px w-[min(320px,70%)] bg-white/10"></div>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/70">{t("hero.tagline")}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.beatport.com/artist/guzzk/917471/releases"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-5 py-2 text-sm font-bold text-black transition hover:-translate-y-0.5"
            >
              <SiBeatport className="h-4 w-4" aria-hidden="true" />
              Latest Release <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              href="/#music"
              onClick={scrollToMusic}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"></span>
              Play Demo
            </a>
            <a
              href="/#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-bold text-white/90 transition hover:-translate-y-0.5"
            >
              Book a Show
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-ambient,
        .hero-spotlight,
        .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-ambient {
          background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.06), transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.04), transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(255, 255, 255, 0.05), transparent 50%);
          animation: heroDrift 18s ease-in-out infinite;
          opacity: 0.85;
        }

        .hero-spotlight {
          background: radial-gradient(
            circle at var(--spot-x, 50%) var(--spot-y, 30%),
            rgba(255, 255, 255, 0.08),
            transparent 45%
          );
          mix-blend-mode: screen;
        }

        .hero-particles {
          background-image: radial-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px);
          background-size: 90px 90px;
          opacity: 0.08;
          animation: heroParticles 22s linear infinite;
        }

        .hero-pulse {
          animation: heroPulse 2.4s ease-in-out infinite;
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
        }

        @keyframes heroDrift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(2%, -2%, 0);
          }
        }

        @keyframes heroParticles {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 180px 180px;
          }
        }

        @keyframes heroPulse {
          0% {
            transform: scale(1);
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
          }
          50% {
            transform: scale(1.015);
            text-shadow: 0 0 28px rgba(255, 255, 255, 0.2);
          }
          100% {
            transform: scale(1);
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </section>
  );
}

