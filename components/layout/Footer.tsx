"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { site } from "@/lib/site";
import { ShopeeIcon, TikTokIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const p = (path: string) => `/${locale}${path}`;
  return (
    <footer className="mt-20 bg-brand-browndark text-brand-cream">
      <div className="container-cmm grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/logo-pink.png"
            alt={site.name}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">
            {site.tagline}
          </p>
          <p className="mt-4 text-xs text-brand-cream/60">{site.hours}</p>
        </div>

        <div>
          <h4 className="font-serif text-lg">{t("belanja")}</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-cream/70">
            <li><Link href={p("/produk")} className="hover:text-brand-cream">{t("semuaProduk")}</Link></li>
            <li><Link href={p("/produk/tea-blend")} className="hover:text-brand-cream">Tea Blend</Link></li>
            <li><Link href={p("/produk/tisane")} className="hover:text-brand-cream">Tisane</Link></li>
            <li><Link href={p("/produk/kopi")} className="hover:text-brand-cream">{locale === "id" ? "Kopi" : "Coffee"}</Link></li>
            <li><Link href={p("/produk/cold-brew")} className="hover:text-brand-cream">Cold Brew</Link></li>
            <li><Link href={p("/produk/milk-tea")} className="hover:text-brand-cream">Milk Tea</Link></li>
            <li><Link href={p("/hampers")} className="hover:text-brand-cream">{tNav("hampers")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg">{t("tentang")}</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-cream/70">
            <li><Link href={p("/about")} className="hover:text-brand-cream">{t("ceritaKami")}</Link></li>
            <li><Link href={p("/wholesale")} className="hover:text-brand-cream">{tNav("wholesale")}</Link></li>
            <li><Link href={p("/faq")} className="hover:text-brand-cream">FAQ</Link></li>
            <li><Link href={p("/contact")} className="hover:text-brand-cream">{t("kontak")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg">{t("terhubung")}</h4>
          <p className="mt-3 text-sm text-brand-cream/70">{site.phoneDisplay}</p>
          <p className="text-sm text-brand-cream/70">{site.email}</p>
          {/* E-commerce */}
          <div className="mt-4">
            <p className="text-xs uppercase tracking-widest text-brand-cream/50">{t("ecommerce")}</p>
            <div className="mt-2 flex gap-2">
              <a href={site.shopee} target="_blank" rel="noreferrer" aria-label="Shopee" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/30 hover:bg-white/10">
                <ShopeeIcon className="h-6 w-6" />
              </a>
              <a href={site.tiktokShop} target="_blank" rel="noreferrer" aria-label="TikTok Shop" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/30 text-brand-cream hover:bg-brand-pink hover:border-brand-pink">
                <TikTokIcon />
              </a>
            </div>
          </div>
          {/* Sosial media */}
          <div className="mt-3">
            <p className="text-xs uppercase tracking-widest text-brand-cream/50">{t("sosmed")}</p>
            <div className="mt-2 flex gap-2">
              <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/30 text-brand-cream hover:bg-brand-pink hover:border-brand-pink">
                <InstagramIcon />
              </a>
              <a href={site.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/30 text-brand-cream hover:bg-brand-pink hover:border-brand-pink">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="container-cmm flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. {t("hakCipta")}</p>
          <div className="flex gap-4">
            <Link href={p("/privacy-policy")} className="hover:text-brand-cream">{t("privasi")}</Link>
            <Link href={p("/terms-of-service")} className="hover:text-brand-cream">{t("syarat")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}