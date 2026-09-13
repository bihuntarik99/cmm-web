"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const SLIDES = [
  "/images/hero/slider-1.webp",
  "/images/hero/slider-2.webp",
  "/images/hero/slider-3.webp",
  "/images/hero/slider-4.webp",
];

const DURATION = 6000;

export function Hero() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const p = (path: string) => `/${locale}${path}`;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-brand-browndark">
      <div className="relative h-[60vh] min-h-[420px] max-h-[640px] w-full">
        {/* Slideshow */}
        {SLIDES.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={i === 0 ? "Cerita Meramuda" : `Cerita Meramuda ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

        {/* Konten */}
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

        {/* Dot indicator */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
