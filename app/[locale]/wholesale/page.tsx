"use client";

import { site } from "@/lib/site";
import { useLocale, useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function WholesalePage() {
  const t = useTranslations("wholesale");
  const tContact = useTranslations("contact");
  const locale = useLocale();
  const waText = encodeURIComponent(
    locale === "en"
      ? "Hello Cerita Meramuda! I'm interested in wholesale."
      : "Halo Cerita Meramuda! Saya tertarik wholesale."
  );
  const wa = `https://wa.me/${site.whatsapp}?text=${waText}`;
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-browndark py-16 text-brand-cream">
        <ScrollReveal>
          <div className="container-cmm grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-brand-pink">{t("b2b")}</p>
              <h1 className="mt-2 font-serif text-4xl text-white sm:text-5xl">{t("title")}</h1>
              <p className="mt-4 max-w-md text-brand-cream/70">{t("desc")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-brand-cream px-6 py-3 text-sm font-medium text-brand-browndark hover:bg-white">{t("ajukanInquiry")}</a>
                <a href={site.catalogueFor(locale)} download className="rounded-full border border-brand-cream/40 px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-cream hover:text-brand-browndark">{t("unduhKatalog")}</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero/tea-amon.jpg" alt="Wholesale" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Fitur */}
      <section className="container-cmm py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { t: t("kualitasKonsisten"), d: t("kualitasDesc") },
            { t: t("racikanKustom"), d: t("racikanDesc") },
            { t: t("dukunganLayanan"), d: t("dukunganDesc") },
          ].map((f, i) => (
            <ScrollReveal key={f.t} delay={(i % 3) + 1 as 1 | 2 | 3}>
              <div className="rounded-2xl border border-brand-pink/10 bg-brand-creamlight p-6">
                <h3 className="font-serif text-lg text-brand-browndark">{f.t}</h3>
                <p className="mt-2 text-sm text-brand-browndark/70">{f.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Form */}
      <ScrollReveal>
        <section className="container-cmm pb-16">
          <form className="max-w-2xl rounded-2xl border border-brand-pink/10 bg-brand-creamlight p-6">
            <h2 className="font-serif text-2xl text-brand-browndark">{t("formInquiry")}</h2>
            <div className="mt-4 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder={tContact("nama")} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
                <input type="text" placeholder={t("perusahaan")} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="email" placeholder={tContact("email")} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
                <input type="tel" placeholder={t("telepon")} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
              </div>
              <textarea placeholder={t("kebutuhan")} rows={5} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
              <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">{tContact("kirimViaWa")}</a>
            </div>
          </form>
        </section>
      </ScrollReveal>
    </div>
  );
}