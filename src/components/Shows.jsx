"use client";
import { FaPlay } from "react-icons/fa";
import { useLanguage } from "@/app/lib/i18n";

export default function Shows() {
  const { t } = useLanguage();

  const shows = [
    {
      id: "show-0",
      video: "https://www.youtube.com/embed/4AdHy9p47DA?rel=0&autoplay=0&showinfo=0",
      title: t("shows.featuredTitle"),
      body: t("shows.featuredBody"),
      date: t("shows.featuredDate"),
    },
    {
      id: "show-1",
      video: "https://www.youtube.com/embed/Rljra1NS61o?rel=0&autoplay=0&showinfo=0",
      title: t("shows.firstTitle"),
      body: t("shows.firstBody"),
      date: "May 2023",
    },
    {
      id: "show-2",
      video: "https://www.youtube.com/embed/sbEOd76eiwI?rel=0&autoplay=0&showinfo=0",
      title: t("shows.secondTitle"),
      body: t("shows.secondBody"),
      date: "Dec 2022",
    },
  ];

  return (
    <section className="relative px-[8%] py-[100px] text-white text-center">
      <h2 className="mb-[60px] text-3xl font-bold uppercase tracking-[1.5px]">
        {t("shows.title")}
      </h2>

      {/* Container centralizado (igual Music) */}
      <div className="relative mx-auto max-w-[1000px]">
        {/* Linha central */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[5px] -translate-x-1/2 bg-white/10 lg:block" />

        <div className="flex flex-col">
          {shows.map((show, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={show.id}
                className={`show-item relative mx-auto my-[60px] flex w-full max-w-[900px] items-center
                  ${isLeft ? "lg:flex-row lg:text-left" : "lg:flex-row-reverse lg:text-right"}
                `}
              >
                {/* VIDEO (flex 2) */}
                <div className="flex-[2] m-[15px] w-full">
                  <div className="show-video w-full overflow-hidden rounded-[14px] border border-white/10 shadow-[0_28px_60px_rgba(0,0,0,0.7)]">
                    <iframe
                      src={show.video}
                      title={show.title}
                      frameBorder="0"
                      loading="lazy"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-[280px] w-full md:h-[320px]"
                    />
                    <div className="show-play" aria-hidden="true">
                      <FaPlay className="h-3 w-3 text-black" />
                    </div>
                  </div>
                </div>

                {/* INFO (flex 1 + max 320px) */}
                <div className="show-card flex-[1] m-[15px] max-w-[320px] w-full rounded-[14px] border border-white/10 bg-white/5 p-6 shadow-[0_28px_60px_rgba(0,0,0,0.7)]">
                  <span className="show-badge inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/60">
                    {show.date}
                  </span>
                  <h3 className="text-xl font-medium">{show.title}</h3>
                  <p className="mt-4 text-white/80 leading-relaxed">{show.body}</p>
                </div>

                {/* DOT NO CENTRO */}
                <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.6)] lg:block" />

                {/* CONECTOR (horizontal) */}
                <div
                  className={`absolute top-1/2 hidden h-px w-10 -translate-y-1/2 bg-white/20 lg:block ${
                    isLeft ? "left-1/2" : "right-1/2"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE: stacking */}
      <style jsx global>{`
        .show-video {
          position: relative;
        }

        .show-play {
          position: absolute;
          left: 18px;
          bottom: 18px;
          display: grid;
          height: 34px;
          width: 34px;
          place-items: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.1);
          animation: showPulse 2.2s ease-in-out infinite;
        }

        .show-card {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .show-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.45);
        }

        .show-badge {
          margin-bottom: 14px;
        }

        @keyframes showPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.1);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.15);
          }
        }

        @media (max-width: 768px) {
          .show-item {
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px;
          }

          .show-item > div {
            margin: 10px 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
