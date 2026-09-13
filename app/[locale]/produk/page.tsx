"use client";

import Link from "next/link";
import { categoryMeta, ProductCategory } from "@/lib/data/products";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLocale, useTranslations } from "next-intl";

export default function ProdukIndex() {
  const t = useTranslations("produk");
  const locale = useLocale();
  const p = (path: string) => `/${locale}${path}`;
  return (
    <div className="container-cmm py-14">
      <ScrollReveal>
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-brand-pink">{t("katalog")}</p>
          <h1 className="section-title mt-2">{t("kategoriProduk")}</h1>
          <p className="mx-auto mt-3 max-w-xl text-brand-browndark/70">
            {t("katalogDesc")}
          </p>
        </header>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(Object.keys(categoryMeta) as ProductCategory[]).map((key, i) => {
          const c = categoryMeta[key];
          const label = locale === "en" ? c.labelEn : c.label;
          const sub = locale === "en" ? c.subEn : c.sub;
          return (
            <ScrollReveal key={key} delay={(i % 3) + 1 as 1 | 2 | 3}>
              <Link
                href={p(c.href)}
                className="product-card group block rounded-2xl border border-brand-pink/15 bg-brand-creamlight p-8"
              >
                <h3 className="font-serif text-2xl text-brand-browndark group-hover:text-brand-pink">
                  {label}
                </h3>
                {sub && <p className="mt-2 text-sm text-brand-pink/70">{sub}</p>}
                <span className="mt-4 inline-block text-sm text-brand-pink link-underline">{t("lihatProduk")} →</span>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}