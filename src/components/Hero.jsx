"use client";
import { useRouter } from "next/navigation";
import { SiBeatport } from "react-icons/si";
import { useLanguage } from "@/app/lib/i18n";

export default function Hero() {
  const router = useRouter();
  const { t } = useLanguage();

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

  return (
    <section className="relative min-h-screen overflow-hidden text-left text-[#f4f4f4]">
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
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-pulse {
          animation: heroPulse 2.4s ease-in-out infinite;
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
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

