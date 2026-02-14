"use client";
import { useRouter } from "next/navigation";
import { SiBeatport } from "react-icons/si";
import { useLanguage } from "@/app/lib/i18n";

export default function Hero() {
  const router = useRouter();
  const { t } = useLanguage();

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
    <section className="relative min-h-screen overflow-hidden text-left text-[#f4f4f4]">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-start justify-center gap-10 px-[8vw] py-[130px] md:flex-row md:items-center md:justify-between md:px-0 lg:gap-14">
        <div className="w-full max-w-[720px] md:flex-[1.1] md:pr-6 md:min-w-0">
          <div className="uppercase tracking-[0.28em] text-[0.9rem] text-white/65">Electronic Music Producer &amp; DJ</div>
          <h1 className="mt-4 text-[clamp(3.8rem,10vw,8.6rem)] tracking-[0.08em]">GUZZK</h1>
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

        <div className="order-last mx-auto w-full max-w-[520px] md:order-none md:ml-auto md:flex-[0.9] md:min-w-0">
          <div className="hero-photo-frame">
            <img
              src="/PerfilGUzza.png"
              alt="Guzzk portrait"
              className="hero-photo-image"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-photo-frame {
          position: relative;
          border-radius: 12px;
          min-height: clamp(320px, 55vw, 560px);
          overflow: hidden;
        }

        .hero-photo-image {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: cover;
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
