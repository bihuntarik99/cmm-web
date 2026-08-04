"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div>
      {/* Hero header */}
      <section className="relative h-[38vh] min-h-[260px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero/display-tea-2.jpg" alt="Cerita Meramuda" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="container-cmm relative z-10 flex h-full items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/80 sm:text-sm">{t("tentangKami")}</p>
            <h1 className="mt-2 font-serif text-4xl text-white sm:text-5xl">Cerita Meramuda</h1>
          </div>
        </div>
      </section>

      {/* Bagian 1: Artisan Tea */}
      <section className="bg-brand-creamlight py-16 sm:py-20">
        <div className="container-cmm grid gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-pink">{t("menemukanRahasia")}</p>
            <h2 className="section-title mt-2">{t("artisanTea")}</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-browndark/80">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p className="font-accent text-lg italic text-brand-pink">{t("quote")}</p>
              <p>{t("p3")}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-[#F4EEE2] shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero/tea-amon.jpg" alt={t("artisanTea")} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Bagian 2: Standar & Halal */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="container-cmm grid gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 md:grid-cols-2 md:items-center">
          <div className="order-2 overflow-hidden rounded-2xl bg-[#F4EEE2] shadow-soft md:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero/tea-texture.jpg" alt={t("prosesBaik")} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-brand-pink">{t("kualitasKeamanan")}</p>
            <h2 className="section-title mt-2">{t("prosesBaik")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-browndark/80">{t("prosesDesc")}</p>
          </div>
        </div>
      </section>

      {/* Bagian 3: Hospitality */}
      <section className="bg-brand-creamlight py-16 sm:py-20">
        <div className="container-cmm grid gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-pink">{t("hospitality")}</p>
            <h2 className="section-title mt-2">{t("pilihanHospitality")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-browndark/80">{t("hospitalityDesc")}</p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-[#F4EEE2] shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero/brewing-lifestyle.jpg" alt={t("hospitality")} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Bagian 4: Setiap Momen */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="container-cmm grid gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 md:grid-cols-2 md:items-center">
          <div className="order-2 overflow-hidden rounded-2xl bg-[#F4EEE2] shadow-soft md:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/cold-drinks/display-1.jpg" alt={t("melengkapiSajian")} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-brand-pink">{t("setiapMomen")}</p>
            <h2 className="section-title mt-2">{t("melengkapiSajian")}</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-brand-browndark/80">
              <p>{t("momenDesc1")}</p>
              <p>{t("momenDesc2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="bg-brand-creamlight py-16 sm:py-20">
        <div className="container-cmm">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-widest text-brand-pink">{t("sejarahKami")}</p>
            <h2 className="section-title mt-2">{t("ourHistory")}</h2>
            <div className="mt-5 space-y-4 text-left text-sm leading-relaxed text-brand-browndark/80">
              <p>{t("historyP1")}</p>
              <p>{t("historyP2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Kami */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="container-cmm">
          <h2 className="section-title text-center">{t("nilaiKami")}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: t("craftedNature"), d: t("craftedNatureDesc") },
              { t: t("refinedHand"), d: t("refinedHandDesc") },
              { t: t("halal"), d: t("halalDesc") },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-brand-pink/15 bg-brand-creamlight p-6 text-center">
                <h3 className="font-serif text-xl text-brand-browndark">{v.t}</h3>
                <p className="mt-2 text-sm text-brand-browndark/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}