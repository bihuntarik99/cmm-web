"use client";

import { getByCategory, products } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Hero } from "@/components/home/Hero";
import { VerticalVideo } from "@/components/home/VerticalVideo";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const locale = useLocale();
  const t = useTranslations("home");
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Hero />

      {/* Featured */}
      <section className="bg-brand-creamlight py-16 sm:py-20">
        <div className="container-cmm">
          <ScrollReveal>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-brand-pink">{t("unggulan")}</p>
                <h2 className="section-title mt-1">{t("kisahRasa")}</h2>
              </div>
              <Link href={p("/produk")} className="link-underline text-sm text-brand-pink">
                {t("lihatSemua")} →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="bg-brand-cream px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 md:h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero/brewing-lifestyle.jpg"
              alt="Ritual menyeduh teh"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-6 sm:px-8 md:py-16">
            <p className="text-sm uppercase tracking-widest text-brand-pink">{t("ritualSeduh")}</p>
            <h2 className="section-title mt-2">{t("dariKebun")}</h2>
            <p className="mt-4 max-w-md text-brand-browndark/70">
              {t("lifestyleDesc")}
            </p>
            <Link href={p("/about")} className="btn-outline mt-6 w-fit">
              {t("ceritaKami")}
            </Link>
          </div>
        </div>
      </section>

      {/* Vertical video slot */}
      <VerticalVideo />

      {/* Cold brew & milk tea */}
      <section className="bg-brand-creamlight py-16 sm:py-20">
        <div className="container-cmm">
          <ScrollReveal>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-brand-pink">{t("menyegarkan")}</p>
                <h2 className="section-title mt-1">{t("coldBrewMilkTea")}</h2>
              </div>
              <Link href={p("/produk/cold-brew")} className="link-underline text-sm text-brand-pink">
                {t("lihatSemua")} →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-3">
              {[...getByCategory("cold-brew"), ...getByCategory("milk-tea")].map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hampers */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="container-cmm">
          <ScrollReveal>
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-widest text-brand-pink">{t("berbagi")}</p>
              <h2 className="section-title mt-1">{t("hampersHadiah")}</h2>
              <p className="mx-auto mt-3 max-w-md text-brand-browndark/70">
                {t("hampersDesc")}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { img: "/images/hampers/hampers-2.jpg", label: "Hampers 2" },
              { img: "/images/hampers/hampers-3.jpg", label: "Hampers 3" },
              { img: "/images/hampers/imlek-1.jpg", label: "Imlek Collection" },
            ].map((h) => (
              <div key={h.label} className="group overflow-hidden rounded-2xl border border-brand-pink/10 bg-white/60">
                <div className="aspect-[4/3] overflow-hidden bg-[#F4EEE2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.img} alt={h.label} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-brand-browndark">{h.label}</h3>
                  <Link href={p("/hampers")} className="mt-2 inline-block text-sm text-brand-pink link-underline">{t("lihat")} →</Link>
                </div>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Catalogue CTA */}
      <section className="bg-brand-pink py-16 text-white">
        <div className="container-cmm grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="section-title text-white">{t("unduhKatalog")}</h2>
            <p className="mt-3 max-w-md text-white/80">
              {t("katalogDesc")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href={site.catalogueCompress} download className="rounded-full bg-brand-pinkdark px-6 py-3 text-sm font-medium text-white border border-white/40 hover:bg-white/10">
              {t("katalogCompress")}
            </a>
            <a href={site.catalogueHd} download className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-brand-pink">
              {t("katalogHd")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}