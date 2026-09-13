"use client";

import Link from "next/link";
import { hampers } from "@/lib/data/products";
import { site } from "@/lib/site";
import { useLocale, useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function HampersPage() {
  const t = useTranslations("hampers");
  const locale = useLocale();
  const p = (path: string) => `/${locale}${path}`;
  return (
    <div className="container-cmm py-14">
      <ScrollReveal>
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-brand-pink">{t("berbagi")}</p>
          <h1 className="section-title mt-2">{t("title")}</h1>
          <p className="mx-auto mt-3 max-w-xl text-brand-browndark/70">{t("desc")}</p>
        </header>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hampers
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((h, i) => (
            <ScrollReveal key={h.slug} delay={(i % 3) + 1 as 1 | 2 | 3}>
              <Link
                href={p(`/hampers/${h.slug}`)}
                className="group block overflow-hidden rounded-2xl border border-brand-pink/10 bg-brand-creamlight transition hover:shadow-soft"
              >
                <div className="relative aspect-square overflow-hidden bg-[#F4EEE2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={h.image}
                    alt={locale === "en" ? h.nameEn : h.name}
                    className="h-full w-full object-contain p-2 transition duration-500 group-hover:opacity-0 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gambar kedua muncul saat hover */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={h.imageAlt}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-105 object-contain p-2 opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-brand-browndark">
                    {locale === "en" ? h.nameEn : h.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-browndark/70">
                    {locale === "en" ? h.shortEn : h.short}
                  </p>
                  {h.price && <p className="mt-2 text-sm font-medium text-brand-pink">{h.price}</p>}
                </div>
              </Link>
            </ScrollReveal>
          ))}
      </div>
      <ScrollReveal>
        <div className="mt-12 rounded-2xl bg-brand-creamlight p-8 text-center">
          <h2 className="section-title">{t("kustomTitle")}</h2>
          <p className="mx-auto mt-3 max-w-md text-brand-browndark/80">{t("kustomDesc")}</p>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              locale === "en"
                ? "Hello Cerita Meramuda! I would like to order custom hampers."
                : "Halo Cerita Meramuda! Saya ingin hampers kustom."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6"
          >
            {t("hubungiWa")}
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
