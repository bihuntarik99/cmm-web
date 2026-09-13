"use client";

import { useState } from "react";
import Link from "next/link";
import { Product, products, categoryMeta, formatLabel, type FormatKey } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { priceForFormat } from "@/components/product/ProductCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { site } from "@/lib/site";
import { useCart } from "@/lib/cart/CartContext";
import { formatRupiah } from "@/lib/cart/CartContext";
import { useFly } from "@/lib/cart/FlyContext";
import { useLocale, useTranslations } from "next-intl";

const categoryHref = (p: Product, locale: string) => `/${locale}${categoryMeta[p.category].href}`;
const categoryLabel = (p: Product, locale: string) =>
  locale === "en" ? categoryMeta[p.category].labelEn : categoryMeta[p.category].label;

function waLink(p: Product, locale: string) {
  const text =
    locale === "en"
      ? `Hello ${site.name}! I'm interested in ${p.name}.`
      : `Halo ${site.name}! Saya tertarik produk ${p.name}.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { fly } = useFly();
  const locale = useLocale();
  const t = useTranslations("product");
  const formats = product.formats || [""];
  const [selectedFormat, setSelectedFormat] = useState<FormatKey | "">(formats[0] as FormatKey | "");
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const isEn = locale === "en";
  const currentPrice = selectedFormat ? priceForFormat(product, selectedFormat) : 0;
  const infoImage = isEn ? product.infoImageEn : product.infoImageId;
  const experience = isEn ? product.experienceEn : product.experience;

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    fly({
      startX: rect.left + rect.width / 2 - 30,
      startY: rect.top + rect.height / 2 - 30,
      image: product.images[0],
      name: product.name,
    });
    setTimeout(() => addItem(product, selectedFormat, qty), 500);
  };

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const sectionLabel = "text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-browndark/50";
  const sectionBody = "mt-1.5 text-sm leading-relaxed text-brand-browndark/85";

  return (
    <div className="container-cmm py-10 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-xs text-brand-browndark/50 sm:text-sm">
        <Link href={categoryHref(product, locale)} className="hover:text-brand-pink">
          {categoryLabel(product, locale)}
        </Link>{" "}
        / <span className="font-medium text-brand-browndark">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        {/* ===== GALERI (KIRI) ===== */}
        <ScrollReveal>
          <div className="lg:sticky lg:top-24">
            {/* Main image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#F7F2E9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-contain p-6 sm:p-10"
              />
              {/* Badge kategori */}
              <span className="absolute left-4 top-4 rounded-full bg-brand-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-pink backdrop-blur">
                {categoryLabel(product, locale)}
              </span>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Gambar ${i + 1}`}
                    className={`aspect-square w-20 overflow-hidden rounded-xl bg-[#F7F2E9] transition ${
                      activeImage === i
                        ? "ring-2 ring-brand-pink ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${product.name} thumb ${i + 1}`}
                      className="h-full w-full object-contain p-1.5"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* ===== INFO (KANAN) ===== */}
        <ScrollReveal delay={1}>
          <div>
            {/* Label kategori */}
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-pink">
              {categoryLabel(product, locale)}
            </p>

            {/* Nama produk */}
            <h1 className="mt-2 font-serif text-4xl font-bold uppercase tracking-wide text-brand-browndark sm:text-5xl">
              {product.name}
            </h1>

            {/* Tagline — italic accent */}
            <p className="mt-3 font-accent text-lg italic text-brand-pink">
              {isEn ? product.shortEn : product.short}
            </p>

            {/* Deskripsi */}
            <p className="mt-5 text-sm leading-relaxed text-brand-browndark/80 sm:text-base">
              {isEn ? product.descriptionEn : product.description}
            </p>

            {/* Tasting Notes */}
            {product.tastingNotes && (
              <div className="mt-7">
                <h3 className={sectionLabel}>{t("catatanRasa")}</h3>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {(isEn ? product.tastingNotesEn : product.tastingNotes)?.map((note) => (
                    <span
                      key={note}
                      className="rounded-full border border-brand-pink/25 bg-brand-pink/5 px-3.5 py-1 text-xs font-medium text-brand-pink"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* The Experience */}
            {experience && (
              <div className="mt-7">
                <h3 className={sectionLabel}>
                  {isEn ? "The Experience" : "Pengalaman Secangkir Teh"}
                </h3>
                <p className={sectionBody}>{experience}</p>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mt-7">
                <h3 className={sectionLabel}>{t("bahan")}</h3>
                <p className={sectionBody}>{isEn ? product.ingredientsEn : product.ingredients}</p>
              </div>
            )}

            {/* ===== VARIANT + HARGA ===== */}
            {product.formats && product.formats.length > 0 && (
              <div className="mt-8 rounded-2xl border border-brand-pink/15 bg-brand-creamlight/70 p-5 sm:p-6">
                <h3 className={sectionLabel}>{t("pilihFormat")}</h3>
                <div className="mt-3 space-y-2.5">
                  {product.formats.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFormat(f)}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                        selectedFormat === f
                          ? "border-brand-pink bg-white shadow-sm"
                          : "border-brand-pink/20 bg-white/50 hover:border-brand-pink/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                            selectedFormat === f ? "border-brand-pink" : "border-brand-browndark/30"
                          }`}
                        >
                          {selectedFormat === f && (
                            <span className="h-2 w-2 rounded-full bg-brand-pink" />
                          )}
                        </span>
                        <div>
                          <span className="block text-sm font-semibold text-brand-browndark">
                            {formatLabel(f, locale)}
                          </span>
                          {product.variantInfo?.[f] && (
                            <span className="block text-xs text-brand-browndark/60">
                              {product.variantInfo[f]}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-bold text-brand-pink">
                        {formatRupiah(priceForFormat(product, f))}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ===== QTY + CTA ===== */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-brand-pink/30">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-brand-pink transition hover:bg-brand-pink/10"
                  aria-label="Kurangi"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-bold text-brand-browndark">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-11 w-11 items-center justify-center text-brand-pink transition hover:bg-brand-pink/10"
                  aria-label="Tambah"
                >
                  +
                </button>
              </div>

              <button onClick={handleAdd} className="btn-primary h-11 flex-1 sm:flex-none sm:px-10">
                {t("tambahKeranjangDetail")}
              </button>
              <a href={waLink(product, locale)} target="_blank" rel="noreferrer" className="btn-outline h-11">
                {t("beliLangsung")}
              </a>
            </div>

            {/* ===== BREWING GUIDE ===== */}
            {product.brewing && (
              <div className="mt-8 grid grid-cols-3 divide-x divide-brand-pink/15 rounded-2xl border border-brand-pink/15 bg-brand-creamlight/70">
                {(() => {
                  const brewStr = (isEn ? product.brewingEn : product.brewing) || "";
                  const [temp, time, ratio] = brewStr
                    .split("·")
                    .map((s) => s.trim());
                  const labels = isEn
                    ? ["Water Temp", "Steep Time", "Ratio"]
                    : ["Suhu Air", "Waktu Seduh", "Takaran"];
                  const values = [temp, time, ratio];
                  return labels.map((label, i) => (
                    <div key={label} className="flex flex-col items-center gap-1 px-2 py-4 text-center">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-browndark/50">
                        {label}
                      </span>
                      <span className="text-sm font-bold text-brand-browndark">{values[i]}</span>
                    </div>
                  ));
                })()}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* ===== INFOGRAPHIC / KOMPOSISI (BAWAH) ===== */}
      {infoImage && (
        <ScrollReveal>
          <section className="mt-16">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="section-title">{t("komposisiProduk")}</h2>
                <p className="mt-1 text-sm text-brand-browndark/60">
                  {t("komposisiDesc")} {product.name}.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-brand-pink/15 bg-brand-creamlight/80 p-4 sm:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={infoImage}
                alt={`Komposisi ${product.name}`}
                className="w-full object-contain"
              />
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ===== PRODUK TERKAIT ===== */}
      {related.length > 0 && (
        <ScrollReveal>
          <section className="mt-16">
            <h2 className="section-title">{t("produkTerkait")}</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}
    </div>
  );
}