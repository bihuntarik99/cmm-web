"use client";

import { useTranslations } from "next-intl";

const slots = [
  { id: 1, poster: "/images/hero/display-tea-1.jpg" },
  { id: 2, poster: "/images/hero/tea-amon.jpg" },
  { id: 3, poster: "/images/hero/brewing-lifestyle.jpg" },
  { id: 4, poster: "/images/cold-drinks/display-1.jpg" },
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
              className="video-vertical w-full overflow-hidden rounded-2xl border border-brand-pink/20 bg-brand-browndark shadow-soft"
            >
              {/*
                Slot video vertikal (9:16).
                Ganti dengan <video> atau <iframe> bila file video sudah tersedia.
                Contoh:
                <video src="/videos/video-1.mp4" poster={s.poster} controls playsInline className="h-full w-full object-cover" />
              */}
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.poster}
                  alt={`Video ${s.id}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
                <div className="float-anim relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink text-white shadow-elevated">
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="relative text-xs text-white/70">
                  {t("placeholder")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}