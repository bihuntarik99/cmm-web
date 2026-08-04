"use client";

import { useTranslations } from "next-intl";

export default function FaqPage() {
  const t = useTranslations("faq");
  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
  ];
  return (
    <div className="container-cmm py-14">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-widest text-brand-pink">FAQ</p>
        <h1 className="section-title mt-2">{t("title")}</h1>
      </header>
      <div className="mx-auto max-w-3xl divide-y divide-brand-pink/10 rounded-2xl border border-brand-pink/10 bg-brand-creamlight">
        {faqs.map((f) => (
          <div key={f.q} className="p-6">
            <h3 className="font-serif text-lg text-brand-browndark">{f.q}</h3>
            <p className="mt-2 text-sm text-brand-browndark/80">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}