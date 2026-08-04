"use client";

import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("terms");
  return (
    <div className="container-cmm py-14">
      <h1 className="section-title">{t("title")}</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-brand-browndark/80">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
      </div>
    </div>
  );
}