"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type HampersItem = {
  slug: string;
  name: string;
  nameEn?: string;
  image: string;
  price?: string;
};

export function HampersCarousel({ items, pathPrefix }: { items: HampersItem[]; pathPrefix: (path: string) => string }) {
  const locale = useLocale();
  const t = useTranslations("home");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 10);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Panah kiri */}
      <button
        onClick={() => scroll("left")}
        disabled={atStart}
        aria-label="Scroll left"
        className={`absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-pink text-white shadow-lg transition hover:bg-brand-pinkdark disabled:opacity-30 disabled:cursor-not-allowed ${
          atStart ? "hidden" : "flex"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {items.map((h) => (
          <Link
            key={h.slug}
            href={pathPrefix(`/hampers/${h.slug}`)}
            className="group flex-shrink-0 w-64 overflow-hidden rounded-2xl border border-brand-pink/10 bg-white/60 transition hover:shadow-soft"
          >
            <div className="aspect-square overflow-hidden bg-[#F4EEE2]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={h.image}
                alt={locale === "en" ? h.nameEn || h.name : h.name}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg text-brand-browndark">
                {locale === "en" ? h.nameEn || h.name : h.name}
              </h3>
              {h.price && (
                <p className="mt-1 text-sm font-medium text-brand-pink">{h.price}</p>
              )}
              <span className="mt-2 inline-block text-sm text-brand-pink link-underline">
                {t("lihat")} →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Panah kanan */}
      <button
        onClick={() => scroll("right")}
        disabled={atEnd}
        aria-label="Scroll right"
        className={`absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-pink text-white shadow-lg transition hover:bg-brand-pinkdark disabled:opacity-30 disabled:cursor-not-allowed ${
          atEnd ? "hidden" : "flex"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
}