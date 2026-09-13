"use client";

import { useState } from "react";
import Link from "next/link";
import { Product, products, categoryMeta, formatLabel } from "@/lib/data/products";
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
  const [selectedFormat, setSelectedFormat] = useState(formats[0]);
  const [qty, setQty] = useState(1);

  const currentPrice = priceForFormat(product, selectedFormat);
  const infoImage = locale === "en" ? product.infoImageEn : product.infoImageId;

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

  return (
    <div className="container-cmm py-12">
      <nav className="mb-6 text-sm text-brand-pink/60">
        <Link href={categoryHref(product, locale)} className="hover:text-brand-pink">
          {categoryLabel(product, locale)}
        </Link>{" "}
        / <span className="text-brand-browndark">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Galeri */}
        <ScrollReveal>
        <div className="grid gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="col-span-2 aspect-square w-full rounded-2xl object-contain bg-[#F4EEE2] p-4"
          />
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 2}`}
                  className="aspect-square w-full rounded-xl object-contain bg-[#F4EEE2] p-2"
                />
              ))}
            </div>
          )}
        </div>
        </ScrollReveal>

        {/* Info — model keterangan produk */}
        <ScrollReveal delay={1}>
        <div>
          <p className="text-sm uppercase tracking-widest text-brand-pink">
            {categoryLabel(product, locale)}
          </p>
          <h1 className="mt-1 font-serif text-4xl text-brand-browndark">
            {product.name}
          </h1>
          <p className="mt-3 text-brand-browndark/80">{locale === "en" ? product.shortEn : product.short}</p>

          {/* Harga mengikuti format terpilih */}
              {currentPrice > 0 && (
            <div className="mt-3 flex items-baseline gap-3">
              <p className="text-2xl font-medium text-brand-pink">{formatRupiah(currentPrice)}</p>
              {product.formats && product.formats.length > 1 && selectedFormat && (
                <span className="rounded-full bg-brand-pink/10 px-3 py-0.5 text-xs text-brand-pink">
                  {formatLabel(selectedFormat, locale)}
                </span>
              )}
            </div>
          )}
          {/* Rentang harga bila multi-format */}
          {product.priceByFormat && product.formats && product.formats.length > 1 && (
            <p className="mt-1 text-xs text-brand-browndark/50">
              {product.formats.map((f) => `${formatLabel(f, locale)} ${formatRupiah(priceForFormat(product, f))}`).join(" · ")}
            </p>
          )}

          {product.tastingNotes && (
            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-widest text-brand-pink/60">
                {t("catatanRasa")}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {(locale === "en" ? product.tastingNotesEn : product.tastingNotes)?.map((note) => (
                  <span
                    key={note}
                    className="rounded-full bg-brand-pink/10 px-3 py-1 text-xs text-brand-pink"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pilihan format — tombol menampilkan harga */}
          {product.formats && product.formats.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-widest text-brand-pink/60">
                {t("pilihFormat")}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.formats.map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFormat(f)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedFormat === f
                        ? "border-brand-pink bg-brand-pink text-white"
                        : "border-brand-pink/30 text-brand-pink hover:border-brand-pink"
                    }`}
                  >
                    {formatLabel(f, locale)}
                    {product.priceByFormat?.[f] != null && (
                      <span className="ml-1 text-xs opacity-80">
                        {formatRupiah(product.priceByFormat[f]!)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Qty selector */}
          <div className="mt-5">
            <h3 className="text-xs uppercase tracking-widest text-brand-pink/60">
              {t("jumlah")}
            </h3>
            <div className="mt-2 flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white"
              >
                −
              </button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={handleAdd}
              className="btn-primary flex-1"
            >
              {t("tambahKeranjangDetail")}
            </button>
            <a
              href={waLink(product, locale)}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              {t("beliLangsung")}
            </a>
          </div>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-brand-browndark/80">
            <div>
              <h3 className="font-serif text-lg text-brand-browndark">{t("tentang")}</h3>
              <p className="mt-1">{locale === "en" ? product.descriptionEn : product.description}</p>
            </div>
            {product.ingredients && (
              <div>
                <h3 className="font-serif text-lg text-brand-browndark">{t("bahan")}</h3>
                <p className="mt-1">{locale === "en" ? product.ingredientsEn : product.ingredients}</p>
              </div>
            )}
            {product.brewing && (
              <div>
                <h3 className="font-serif text-lg text-brand-browndark">{t("caraSeduh")}</h3>
                <p className="mt-1">{locale === "en" ? product.brewingEn : product.brewing}</p>
              </div>
            )}
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* Keterangan Produk (gambar KET per bahasa) */}
      {infoImage && (
        <ScrollReveal>
        <section className="mt-14">
          <h2 className="section-title">{t("komposisiProduk")}</h2>
          <p className="mt-1 text-sm text-brand-pink/70">
            {t("komposisiDesc")} {product.name}.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-pink/15 bg-brand-creamlight/80 p-4 sm:p-8">
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
