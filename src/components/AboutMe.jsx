"use client";
import { useLanguage } from "@/app/lib/i18n";

export default function AboutMe() {
  const { t } = useLanguage();
  const tags = t("about.tags");
  const highlights = t("about.highlights");

  return (
    <section className="relative overflow-hidden text-white" id="about-me">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 about-glow about-glow--top bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 about-glow about-glow--right bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.035),transparent_65%)]" />

      <div className="relative z-10 mx-auto grid gap-12 px-[8%] py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.32em] text-white/60">
            {t("about.label")}
          </p>

          {/* Slightly smaller than hero for better hierarchy */}
          <h2 className="text-[clamp(2.6rem,4.5vw,4.6rem)] font-semibold tracking-[0.12em]">
            GUZZK
          </h2>

          {/* More editorial / premium reading width */}
          <p className="max-w-[60ch] text-[1.08rem] leading-relaxed text-white/80">
            {t("about.lede")}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {Array.isArray(tags)
              ? tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="about-chip rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/70 transition hover:bg-white/10"
                    style={{ animationDelay: `${120 + index * 110}ms` }}
                  >
                    {tag}
                  </span>
                ))
              : null}
          </div>

        

          {/* Highlights */}
          <div className="about-float rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              {t("about.highlightsLabel") || "Highlights"}
            </p>

            <ul className="mt-4 space-y-4 text-sm text-white/80">
              {Array.isArray(highlights)
                ? highlights.map((item, idx) => (
                    <li key={item.title} className="flex gap-4">
                      {/* Icon bullet instead of dot */}
                      <span className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70">
                        {idx === 0 ? "★" : idx === 1 ? "♬" : idx === 2 ? "⚡" : "◆"}
                      </span>

                      <div>
                        <strong className="block text-[11px] uppercase tracking-[0.22em] text-white/60">
                          {item.title}
                        </strong>
                        <span className="text-white/75">{item.body}</span>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </div>

          {/* Mission / Signature blockquote */}
          <blockquote className="about-fade relative mt-2 border-l-2 border-white/20 pl-6">
            <p className="text-[1.05rem] italic leading-relaxed text-white/85">
              “{t("about.mission")}”
            </p>
            <span className="mt-3 block text-xs uppercase tracking-[0.28em] text-white/45">
              — GUZZK
            </span>
          </blockquote>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[540px]">
            {/* Neutral glow (no blue) */}
            <div className="pointer-events-none absolute -inset-14 about-glow about-glow--center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)] blur-3xl opacity-80" />

            {/* Premium card */}
            <div className="about-float-slow relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
              {/* Double border look */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

              {/* Editorial aspect ratio */}
              <div className="aspect-[4/5] w-full">
                <img
                  src="/GuzzkBackground.png"
                  alt="Guzzk DJ"
                  className="h-full w-full object-cover contrast-105"
                />
              </div>

              {/* Depth overlay (neutral, no color) */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.78))]" />

              {/* Top highlight */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .about-glow {
          animation: aboutGlow 12s ease-in-out infinite;
          opacity: 0.9;
        }

        .about-glow--top {
          animation-delay: 0ms;
        }

        .about-glow--right {
          animation-delay: 800ms;
        }

        .about-glow--center {
          animation-delay: 400ms;
        }

        .about-float {
          animation: aboutFloat 8s ease-in-out infinite;
        }

        .about-float-slow {
          animation: aboutFloatSlow 12s ease-in-out infinite;
        }

        .about-chip {
          animation: aboutFadeUp 700ms ease forwards;
          opacity: 0;
          transform: translateY(10px);
        }

        .about-fade {
          animation: aboutFadeUp 900ms ease forwards;
          animation-delay: 420ms;
          opacity: 0;
          transform: translateY(14px);
        }

        @keyframes aboutGlow {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(1.5%, -1.5%, 0) scale(1.04);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes aboutFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes aboutFloatSlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @keyframes aboutFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
