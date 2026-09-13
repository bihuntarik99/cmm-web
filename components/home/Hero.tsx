"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

const slides = [
  "/images/hero/slider-1.png",
  "/images/hero/slider-2.png",
  "/images/hero/slider-3.png",
];

export function Hero() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const p = (path: string) => `/${locale}${path}`;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-brand-browndark">
      <div className="relative h-[60vh] min-h-[420px] max-h-[640px] w-full">
        {/* Slider images */}
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Cerita Meramuda ${i + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-start justify-end pb-12">
          <div className="container-cmm w-full hero-text">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80 sm:text-sm">
              {t("badge")}
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl text-balance">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              {t("subtitle")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={p("/produk")} className="btn-primary">
                {t("ctaProduk")}
              </Link>
              <Link
                href={p("/hampers")}
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-pink"
              >
                {t("ctaHampers")}
              </Link>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}