"use client";
import { useRouter } from "next/navigation";
import { SiBeatport } from "react-icons/si";

export default function Hero() {
  const router = useRouter();

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
          <h1 className="mt-4 text-[clamp(3.8rem,10vw,8.6rem)] tracking-[0.08em]">GUZZK</h1>
          <p className="mt-2 uppercase tracking-[0.24em] text-[clamp(0.9rem,1.2vw,1.1rem)] text-white/65">DJ PRODUCER</p>
          <div className="my-4 h-px w-[min(320px,70%)] bg-white/10"></div>
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
              src="/GuzzPerfilVazio.png"
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
          min-height: clamp(320px, 55vw, 560px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          isolation: isolate;
          overflow: visible;
        }

        .hero-photo-frame::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 54%;
          width: clamp(340px, 56vw, 700px);
          height: clamp(420px, 74vw, 820px);
          transform: translate(-50%, -50%);
          background:
            radial-gradient(ellipse at 54% 50%, rgba(57, 91, 166, 0.22) 0%, rgba(26, 43, 84, 0.18) 38%, rgba(8, 13, 26, 0) 74%),
            radial-gradient(ellipse at 60% 22%, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 44%);
          filter: blur(28px);
          opacity: 0.78;
          z-index: 0;
          pointer-events: none;
        }

        .hero-photo-frame::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 2%;
          width: clamp(250px, 52vw, 520px);
          height: clamp(40px, 7vw, 74px);
          transform: translateX(-50%);
          border-radius: 999px;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.44) 0%, rgba(0, 0, 0, 0) 72%);
          filter: blur(10px);
          z-index: 0;
          pointer-events: none;
        }

        .hero-photo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 24px 34px rgba(0, 0, 0, 0.4)) drop-shadow(0 8px 18px rgba(24, 36, 66, 0.28));
        }
      `}</style>
    </section>
  );
}
