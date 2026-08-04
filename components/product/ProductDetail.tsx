"use client";

import { useState } from "react";
import Link from "next/link";
import { Product, products, categoryMeta } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { site } from "@/lib/site";
import { useCart } from "@/lib/cart/CartContext";
import { useFly } from "@/lib/cart/FlyContext";
import { useLocale, useTranslations } from "next-intl";

const categoryHref = (p: Product, locale: string) => `/${locale}${categoryMeta[p.category].href}`;
const categoryLabel = (p: Product) => categoryMeta[p.category].label;

function waLink(p: Product) {
  return `https://wa.me/${site.whatsapp}?text=Halo%20${encodeURIComponent(
    site.name
  )}!%20Saya%20tertarik%20produk%20${encodeURIComponent(p.name)}.`;
}

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { fly } = useFly();
  const locale = useLocale();
  const t = useTranslations("product");
  const formats = product.formats || [""];
  const [selectedFormat, setSelectedFormat] = useState(formats[0]);
  const [qty, setQty] = useState(1);

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
          {categoryLabel(product)}
        </Link>{" "}
        / <span className="text-brand-browndark">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Galeri */}
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

        {/* Info */}
        <div>
          <p className="text-sm uppercase tracking-widest text-brand-pink">
            {categoryLabel(product)}
          </p>
          <h1 className="mt-1 font-serif text-4xl text-brand-browndark">
            {product.name}
          </h1>
          <p className="mt-3 text-brand-pink/80">{locale === "en" ? product.shortEn : product.short}</p>

          {product.price && (
            <p className="mt-3 text-2xl font-medium text-brand-pink">{product.price}</p>
          )}

          {product.tastingNotes && (
            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-widest text-brand-pink/60">
                t("catatanRasa")
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

          {/* Pilihan format */}
          {product.formats && product.formats.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-widest text-brand-pink/60">
                t("pilihFormat")
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
                    {f}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Qty selector */}
          <div className="mt-5">
            <h3 className="text-xs uppercase tracking-widest text-brand-pink/60">
              t("jumlah")
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
              t("tambahKeranjangDetail")
            </button>
            <a
              href={waLink(product)}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              t("beliLangsung")
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
      </div>

      {/* t("komposisiProduk") (gambar KET) */}
      {product.infoImage && (
        <section className="mt-14">
          <h2 className="section-title">{t("komposisiProduk")}</h2>
          <p className="mt-1 text-sm text-brand-pink/70">
            {t("komposisiDesc")} {product.name}.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-pink/15 bg-brand-creamlight/80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.infoImage}
              alt={`Komposisi ${product.name}`}
              className="w-full object-contain"
            />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="section-title">{t("produkTerkait")}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}