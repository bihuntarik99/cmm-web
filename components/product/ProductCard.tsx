"use client";

import Link from "next/link";
import { useState } from "react";
import { Product, categoryMeta, formatLabel } from "@/lib/data/products";
import { site } from "@/lib/site";
import { useCart } from "@/lib/cart/CartContext";
import { formatRupiah } from "@/lib/cart/CartContext";
import { useFly } from "@/lib/cart/FlyContext";
import { useLocale, useTranslations } from "next-intl";

function waLink(p: Product, locale: string) {
  const text =
    locale === "en"
      ? `Hello ${site.name}! I'm interested in ${p.name}.`
      : `Halo ${site.name}! Saya tertarik produk ${p.name}.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function hrefFor(p: Product, locale: string) {
  return `${categoryMeta[p.category].href.replace("/produk", `/${locale}/produk`)}/${p.slug}`;
}

/** Harga item untuk format terpilih */
export function priceForFormat(p: Product, format: string): number {
  const fmtKey = format as "Kaleng" | "Sachet" | "Drip Bag";
  const perFormat = p.priceByFormat?.[fmtKey];
  if (perFormat != null) return perFormat;
  const n = parseInt(p.price.replace(/[^\d]/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { fly } = useFly();
  const locale = useLocale();
  const t = useTranslations("product");
  const formats = product.formats || [""];
  const [selectedFormat, setSelectedFormat] = useState(formats[0]);

  const currentPrice = priceForFormat(product, selectedFormat);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    fly({
      startX: rect.left + rect.width / 2 - 30,
      startY: rect.top + rect.height / 2 - 30,
      image: product.images[0],
      name: product.name,
    });
    setTimeout(() => addItem(product, selectedFormat), 500);
  };

  return (
    <div className="product-card group flex flex-col overflow-hidden rounded-2xl border border-brand-pink/10 bg-brand-creamlight transition hover:shadow-soft">
      <Link
        href={hrefFor(product, locale)}
        className="relative block aspect-square overflow-hidden bg-[#F4EEE2]"
      >
        {/* Gambar utama */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-contain p-2 transition duration-500 ${
            product.hoverImage ? "group-hover:opacity-0 group-hover:scale-105" : "group-hover:scale-105"
          }`}
        />
        {/* Gambar komposisi — muncul saat hover */}
        {product.hoverImage && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.hoverImage}
              alt={`Komposisi ${product.name}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"
            />
          </>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link href={hrefFor(product, locale)}>
          <h3 className="font-serif text-xl text-brand-browndark">{product.name}</h3>
        </Link>
        <p className="mt-1 min-h-[2.5rem] text-sm text-brand-browndark/70">{locale === "en" ? product.shortEn : product.short}</p>
        {currentPrice > 0 && (
          <p className="mt-2 text-sm font-medium text-brand-pink">
            {formatRupiah(currentPrice)}
            {product.priceByFormat && formats.length > 1 && selectedFormat && (
              <span className="text-xs text-brand-browndark/50">
                {" "}
                / {formatLabel(selectedFormat, locale)}
              </span>
            )}
          </p>
        )}

        {/* Selector format */}
        {product.formats && product.formats.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.formats.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFormat(f)}
                className={`rounded-full px-2.5 py-0.5 text-xs transition ${
                  selectedFormat === f
                    ? "bg-brand-pink text-white"
                    : "bg-brand-pink/10 text-brand-pink hover:bg-brand-pink/20"
                }`}
              >
                {formatLabel(f, locale)}
              </button>
            ))}
          </div>
        )}

        {/* Action buttons — mt-auto agar selalu rata bawah */}
        <div className="mt-auto flex items-center gap-2 pt-4">
          <button
            onClick={handleAdd}
            className="btn-primary flex-1 py-2 text-xs"
          >
            {t("tambahKeranjang")}
          </button>
          <a
            href={waLink(product, locale)}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white"
            aria-label={t("beliViaWa")}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
