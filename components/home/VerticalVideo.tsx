"use client";

import { useTranslations } from "next-intl";

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

        <div className="mx-auto flex max-w-sm justify-center">
          <div className="video-vertical w-full overflow-hidden rounded-3xl border border-brand-pink/20 bg-brand-browndark shadow-soft">
            {/*
              Slot video vertikal (9:16).
              Ganti dengan <video> atau <iframe> bila file video sudah tersedia.
              Contoh:
              <video
                src="/videos/cerita-meramuda.mp4"
                controls
                playsInline
                className="h-full w-full object-cover"
              />
            */}
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="float-anim flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink text-white shadow-elevated">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-white/70">
                {t("placeholder")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}