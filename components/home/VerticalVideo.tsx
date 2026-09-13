"use client";

import { useTranslations } from "next-intl";

const slots = [
  { id: 1, name: "Ayurvana", video: "/videos/ayurvana.mp4", poster: "/videos/posters/ayurvana.webp" },
  { id: 2, name: "Amondini", video: "/videos/amondini.mp4", poster: "/videos/posters/amondini.webp" },
  { id: 3, name: "Arunika", video: "/videos/arunika.mp4", poster: "/videos/posters/arunika.webp" },
  { id: 4, name: "Asmaranala", video: "/videos/asmaranala.mp4", poster: "/videos/posters/asmaranala.webp" },
];

export function VerticalVideo() {
  const t = useTranslations("video");
  return (
    <section className="bg-brand-creamlight py-16 sm:py-20">
      <div className="container-cmm">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-widest text-brand-pink">Video</p>
          <h2 className="section-title mt-1">{t("title")}</h2>
          <p className="mx-auto mt-3 max-w-md text-brand-browndark/70">
            {t("desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {slots.map((s) => (
            <div
              key={s.id}
              className="video-vertical group relative w-full overflow-hidden rounded-2xl border border-brand-pink/20 bg-brand-browndark shadow-soft"
            >
              <video
                src={s.video}
                poster={s.poster}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {s.id}. {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
