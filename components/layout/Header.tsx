"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { site } from "@/lib/site";
import { categoryMeta } from "@/lib/data/products";
import { ShopeeIcon, TikTokIcon, InstagramIcon } from "@/components/icons";
import { useCart } from "@/lib/cart/CartContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, openCart } = useCart();
  const locale = useLocale();
  const t = useTranslations("nav");

  // Ambil pathname saat ini (client-side, aman untuk hydration)
  const pathname = usePathname();
  const restPath = pathname.replace(/^\/(id|en)/, "");
  const langHref = `/${locale === "id" ? "en" : "id"}${restPath}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-brand-pinkdark/20 bg-brand-pink transition-all duration-300 ${scrolled ? "py-0 shadow-md" : "py-0"}`}>
      <div className="container-cmm flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/logo-navbar.png"
            alt={site.name}
            className="h-10 w-auto rounded-full object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Produk dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <Link
              href={`/${locale}/produk`}
              className="flex items-center gap-1 text-sm font-medium tracking-wide text-white/90 transition hover:text-white"
            >
              {t("produk")}
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L2 4h8z" />
              </svg>
            </Link>
            {prodOpen && (
              <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-brand-pink/15 bg-brand-creamlight shadow-soft">
                  {Object.entries(categoryMeta).map(([key, c]) => (
                    <Link
                      key={key}
                      href={`/${locale}${c.href}`}
                      className="block border-b border-brand-pink/10 px-4 py-3 last:border-b-0 hover:bg-brand-pink/5"
                    >
                      <div className="font-serif text-base text-brand-browndark">
                        {locale === "en" ? c.labelEn : c.label}
                      </div>
                      {(locale === "en" ? c.subEn : c.sub) && (
                        <div className="mt-0.5 text-xs text-brand-pink/70">{locale === "en" ? c.subEn : c.sub}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { label: t("hampers"), href: `/${locale}/hampers` },
            { label: t("tentang"), href: `/${locale}/about` },
            { label: t("wholesale"), href: `/${locale}/wholesale` },
            { label: t("kontak"), href: `/${locale}/contact` },
          ].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium tracking-wide text-white/90 transition hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop cart + social */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={langHref}
            className="rounded-full border border-white/40 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/20"
          >
            {locale === "id" ? "EN" : "ID"}
          </Link>
          <a href={site.shopee} target="_blank" rel="noreferrer" aria-label="Shopee" className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/20">
            <ShopeeIcon className="h-6 w-6" />
          </a>
          <a href={site.tiktokShop} target="_blank" rel="noreferrer" aria-label="TikTok Shop" className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/20">
            {/* Logo TikTok Shop (revisi) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icons/tiktokshop.webp" alt="TikTok Shop" className="h-6 w-6 object-contain" />
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/20">
            <InstagramIcon />
          </a>
          <a href={site.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/20">
            <TikTokIcon />
          </a>
          {/* Cart */}
          <button
            onClick={openCart}
            aria-label={locale === "en" ? "Cart" : "Keranjang"}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M7 4h-2l-1 2v2h2l3 9h10l3-7h-12l-1-3h-2zM9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-brand-pink">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            href={langHref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xs font-medium text-white"
          >
            {locale === "id" ? "EN" : "ID"}
          </Link>
          <button
            onClick={openCart}
            aria-label={locale === "en" ? "Cart" : "Keranjang"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M7 4h-2l-1 2v2h2l3 9h10l3-7h-12l-1-3h-2zM9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-brand-pink">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label={locale === "en" ? "Menu" : "Menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/20 bg-brand-pink md:hidden">
          <div className="container-cmm flex flex-col gap-1 py-3">
            <Link href={`/${locale}/produk`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10">
              {t("produk")}
            </Link>
            {Object.entries(categoryMeta).map(([key, c]) => (
              <Link key={key} href={`/${locale}/produk/${key}`} onClick={() => setOpen(false)} className="rounded-lg py-2 pl-8 pr-3 text-sm text-white/70 hover:bg-white/10">
                {locale === "en" ? c.labelEn : c.label} <span className="text-xs text-white/50">— {locale === "en" ? c.subEn : c.sub}</span>
              </Link>
            ))}
            {[
              { label: t("hampers"), href: `/${locale}/hampers` },
              { label: t("tentang"), href: `/${locale}/about` },
              { label: t("wholesale"), href: `/${locale}/wholesale` },
              { label: t("kontak"), href: `/${locale}/contact` },
            ].map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 px-3">
              <a href={site.shopee} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"><ShopeeIcon /></a>
              <a href={site.tiktokShop} target="_blank" rel="noreferrer" aria-label="TikTok Shop" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icons/tiktokshop.webp" alt="TikTok Shop" className="h-6 w-6 object-contain" />
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"><InstagramIcon /></a>
              <a href={site.tiktok} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"><TikTokIcon /></a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
