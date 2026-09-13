"use client";

import { site } from "@/lib/site";
import { useLocale, useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const waText = encodeURIComponent(
    locale === "en" ? "Hello Cerita Meramuda!" : "Halo Cerita Meramuda!"
  );
  const wa = `https://wa.me/${site.whatsapp}?text=${waText}`;
  return (
    <div className="container-cmm py-14">
      <ScrollReveal>
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-brand-pink">{t("kontak")}</p>
          <h1 className="section-title mt-2">{t("mariBerbincang")}</h1>
        </header>
      </ScrollReveal>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Info cards */}
        <div className="space-y-4">
          <ScrollReveal>
            <div className="rounded-2xl border border-brand-pink/10 bg-brand-creamlight p-6">
              <h3 className="font-serif text-lg text-brand-browndark">{t("whatsapp")}</h3>
              <p className="text-brand-browndark/80">{site.phoneDisplay}</p>
              <a href={wa} target="_blank" rel="noreferrer" className="btn-primary mt-4">{t("chatSekarang")}</a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="rounded-2xl border border-brand-pink/10 bg-brand-creamlight p-6">
              <h3 className="font-serif text-lg text-brand-browndark">{t("email")}</h3>
              <p className="text-brand-browndark/80">{site.email}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="rounded-2xl border border-brand-pink/10 bg-brand-creamlight p-6">
              <h3 className="font-serif text-lg text-brand-browndark">{t("jamOperasional")}</h3>
              <p className="text-brand-browndark/80">{locale === "en" ? site.hoursEn : site.hours}</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Form */}
        <ScrollReveal delay={1}>
          <form className="rounded-2xl border border-brand-pink/10 bg-brand-creamlight p-6">
            <h3 className="font-serif text-lg text-brand-browndark">{t("kirimPesan")}</h3>
            <div className="mt-4 grid gap-4">
              <input type="text" placeholder={t("nama")} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
              <input type="email" placeholder={t("email")} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
              <textarea placeholder={t("pesan")} rows={5} className="rounded-xl border border-brand-pink/20 bg-white px-4 py-3 text-sm outline-none focus:border-brand-pink" />
              <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">{t("kirimViaWa")}</a>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}