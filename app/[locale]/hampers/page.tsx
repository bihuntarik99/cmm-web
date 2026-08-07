"use client";

import { hampers } from "@/lib/data/products";
import { site } from "@/lib/site";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function HampersPage() {
  const t = useTranslations("hampers");
  const extra = [
    { img: "/images/hampers/hp-13.jpg", label: "HP 13" },
    { img: "/images/hampers/hp-15.jpg", label: "HP 15" },
    { img: "/images/hampers/hp-16.jpg", label: "HP 16" },
    { img: "/images/hampers/hp-17.jpg", label: "HP 17" },
    { img: "/images/hampers/imlek-2.jpg", label: "Imlek Special" },
  ];
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
        {hampers.map((h, i) => (
          <ScrollReveal key={h.slug} delay={(i % 3) + 1 as 1 | 2 | 3}>
            <div className="group overflow-hidden rounded-2xl border border-brand-pink/10 bg-brand-creamlight">
              <div className="aspect-[4/3] overflow-hidden bg-[#F4EEE2]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={h.image} alt={h.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-brand-browndark">{h.name}</h3>
                <p className="mt-1 text-sm text-brand-browndark/70">{h.short}</p>
                {h.price && <p className="mt-2 text-sm font-medium text-brand-pink">{h.price}</p>}
              </div>
            </div>
          </ScrollReveal>
        ))}
        {extra.map((h, i) => (
          <ScrollReveal key={h.label} delay={((i + hampers.length) % 3) + 1 as 1 | 2 | 3}>
            <div className="group overflow-hidden rounded-2xl border border-brand-pink/10 bg-brand-creamlight">
              <div className="aspect-[4/3] overflow-hidden bg-[#F4EEE2]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={h.img} alt={h.label} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-brand-browndark">{h.label}</h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div className="mt-12 rounded-2xl bg-brand-creamlight p-8 text-center">
          <h2 className="section-title">{t("kustomTitle")}</h2>
          <p className="mx-auto mt-3 max-w-md text-brand-browndark/80">{t("kustomDesc")}</p>
          <a href={`https://wa.me/${site.whatsapp}?text=Halo%20Cerita%20Meramuda!%20Saya%20ingin%20hampers%20kustom.`} target="_blank" rel="noreferrer" className="btn-primary mt-6">{t("hubungiWa")}</a>
        </div>
      </ScrollReveal>
    </div>
  );
}