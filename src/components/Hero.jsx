"use client";
import { useRouter } from "next/navigation";
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
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                role="img"
              >
                <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M9 6h4.5a3.5 3.5 0 010 7H9V6zm0 7h5a3 3 0 010 6H9v-6z"
                  fill="currentColor"
                />
              </svg>
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
    </section>
  );
}

