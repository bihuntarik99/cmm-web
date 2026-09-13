"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { hampers, getHampers } from "@/lib/data/products";
import { site } from "@/lib/site";
import { useLocale, useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useCart } from "@/lib/cart/CartContext";
import { useFly } from "@/lib/cart/FlyContext";
import type { Product } from "@/lib/data/products";

export default function HampersDetail({ params }: { params: { slug: string } }) {
  const locale = useLocale();
  const t = useTranslations("hampers");
  const tProduct = useTranslations("product");
  const h = getHampers(params.slug);
  if (!h) return notFound();

  const { addItem } = useCart();
  const { fly } = useFly();

  // Galeri interaktif: gambar utama + thumbnail yang bisa diklik
  const gallery = [h.image, h.imageAlt];
  const [activeImg, setActiveImg] = useState(0);

  // Bungkus hampers ke bentuk Product agar bisa masuk cart
  const asProduct: Product = {
    slug: h.slug,
    name: locale === "en" ? h.nameEn : h.name,
    category: "tea-blend", // tidak dipakai untuk cart
    short: h.short,
    shortEn: h.shortEn,
    description: h.description,
    descriptionEn: h.descriptionEn,
    images: [h.image],
    price: h.price,
    order: 0,
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    fly({
      startX: rect.left + rect.width / 2 - 30,
      startY: rect.top + rect.height / 2 - 30,
      image: h.image,
      name: asProduct.name,
    });
    setTimeout(() => addItem(asProduct, "Hampers", 1), 500);
  };

  const waText = encodeURIComponent(
    locale === "en"
      ? `Hello ${site.name}! I'm interested in the ${h.nameEn} (${h.price}).`
      : `Halo ${site.name}! Saya tertarik dengan ${h.name} (${h.price}).`
  );

  const related = hampers
    .filter((x) => x.slug !== h.slug)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);

  return (
    <div className="container-cmm py-12">
      <nav className="mb-6 text-sm text-brand-pink/60">
        <Link href={`/${locale}/hampers`} className="hover:text-brand-pink">
          {t("title")}
        </Link>{" "}
        / <span className="text-brand-browndark">{locale === "en" ? h.nameEn : h.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Galeri — model keterangan produk */}
        <ScrollReveal>
          <div className="grid gap-4">
            {/* Gambar utama */}
            <div className="relative overflow-hidden rounded-2xl bg-[#F4EEE2]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={activeImg}
                src={gallery[activeImg]}
                alt={locale === "en" ? h.nameEn : h.name}
                className="float-in aspect-square w-full object-contain p-6"
              />
              {/* Badge harga di sudut gambar */}
              {h.price && (
                <span className="absolute right-4 top-4 rounded-full bg-brand-pink px-4 py-1.5 text-sm font-medium text-white shadow-soft">
                  {h.price}
                </span>
              )}
            </div>
            {/* Thumbnail */}
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {gallery.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Gambar ${i + 1}`}
                    className={`overflow-hidden rounded-xl bg-[#F4EEE2] transition ${
                      activeImg === i
                        ? "ring-2 ring-brand-pink ring-offset-2 ring-offset-brand-creamlight"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      loading="lazy"
                      className="aspect-square w-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Info produk */}
        <ScrollReveal delay={1}>
          <div className="flex h-full flex-col">
            <p className="text-sm uppercase tracking-widest text-brand-pink">{t("title")}</p>
            <h1 className="mt-1 font-serif text-4xl leading-tight text-brand-browndark">
              {locale === "en" ? h.nameEn : h.name}
            </h1>
            <p className="mt-3 italic text-brand-browndark/70">
              {locale === "en" ? h.shortEn : h.short}
            </p>

            {h.price && (
              <p className="mt-4 text-3xl font-medium text-brand-pink">{h.price}</p>
            )}

            <div className="mt-6 h-px w-full bg-brand-pink/15" />

            {/* Deskripsi */}
            <div className="mt-6 text-sm leading-relaxed text-brand-browndark/80">
              <h3 className="font-serif text-lg text-brand-browndark">{tProduct("tentang")}</h3>
              <p className="mt-2">{locale === "en" ? h.descriptionEn : h.description}</p>
            </div>

            {/* Isi hampers */}
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest text-brand-pink/60">
                {t("isiHampers")}
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {(locale === "en" ? h.contentsEn : h.contents).map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-browndark/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-pink" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={handleAdd} className="btn-primary flex-1">
                {tProduct("tambahKeranjangDetail")}
              </button>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                {tProduct("beliLangsung")}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Hampers lainnya */}
      {related.length > 0 && (
        <ScrollReveal>
          <section className="mt-16">
            <h2 className="section-title">{t("hampersLainnya")}</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((x) => (
                <Link
                  key={x.slug}
                  href={`/${locale}/hampers/${x.slug}`}
                  className="product-card group overflow-hidden rounded-2xl border border-brand-pink/10 bg-brand-creamlight"
                >
                  <div className="aspect-square overflow-hidden bg-[#F4EEE2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={x.image}
                      alt={locale === "en" ? x.nameEn : x.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-brand-browndark">
                      {locale === "en" ? x.nameEn : x.name}
                    </h3>
                    <p className="mt-1 text-sm text-brand-browndark/70">
                      {locale === "en" ? x.shortEn : x.short}
                    </p>
                    {x.price && (
                      <p className="mt-2 text-sm font-medium text-brand-pink">{x.price}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}
    </div>
  );
}
