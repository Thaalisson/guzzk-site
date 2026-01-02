"use client";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#050507] animate-splashOut" role="presentation" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,rgba(23,195,178,0.2),transparent_60%),radial-gradient(50%_50%_at_80%_25%,rgba(255,122,0,0.18),transparent_55%),linear-gradient(180deg,#07070a,#0d0d12)]"></div>
      <div
        className="absolute -inset-1/2 opacity-35 animate-noiseShift pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="absolute inset-0 mix-blend-screen bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.25),transparent_70%)] animate-sheenSweep"></div>
      <div className="relative z-10 w-[min(62vw,520px)] animate-logoIn">
        <img src="/GUZZK_LOGO.svg" alt="Guzzk logo" className="block w-full invert drop-shadow-[0_10px_40px_rgba(255,122,0,0.25)] animate-logoReveal" />
        <div className="pointer-events-none absolute -inset-1/5 bg-[radial-gradient(40%_40%_at_35%_30%,rgba(255,122,0,0.25),transparent_60%),radial-gradient(40%_40%_at_70%_60%,rgba(23,195,178,0.25),transparent_65%)] blur-3xl opacity-90 animate-glowPulse"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(0,0,0,0),rgba(0,0,0,0.65))]"></div>
    </div>
  );
}
