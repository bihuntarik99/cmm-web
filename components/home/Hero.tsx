import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function Hero() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const p = (path: string) => `/${locale}${path}`;
  return (
    <section className="relative w-full overflow-hidden bg-brand-browndark">
      <div className="relative h-[60vh] min-h-[420px] max-h-[640px] w-full">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/display-tea-2.jpg"
          alt="Cerita Meramuda"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

        {/* Konten — relative z-10 agar di atas overlay & bisa diklik */}
        <div className="relative z-10 flex h-full flex-col items-start justify-end pb-12">
          <div className="container-cmm w-full hero-text">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80 sm:text-sm">
              {t("badge")}
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl text-balance">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              {t("subtitle")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
            <Link href={p("/produk")} className="btn-primary">
                {t("ctaProduk")}
              </Link>
              <Link
                href={p("/hampers")}
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-pink"
              >
                {t("ctaHampers")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}