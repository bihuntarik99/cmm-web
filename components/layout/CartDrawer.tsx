"use client";

import { useCart, formatRupiah } from "@/lib/cart/CartContext";
import { useLocale, useTranslations } from "next-intl";
import { site } from "@/lib/site";
import { formatLabel } from "@/lib/data/products";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart, count, total } =
    useCart();
  const t = useTranslations("cart");
  const locale = useLocale();

  const buildWaMessage = () => {
    const lines = items.map(
      (i, idx) =>
        `${idx + 1}. ${i.name} (${formatLabel(i.format, locale)}) - ${formatRupiah(i.priceNum)} x${i.qty} = ${formatRupiah(i.priceNum * i.qty)}`
    );
    const text =
      t("waPesan", { brand: site.name }) + "\n\n" +
      lines.join("\n") +
      "\n\n" + t("waTotal", { total: formatRupiah(total), count }) +
      "\n" + t("waKonfirmasi");
    return (
      `https://wa.me/${site.whatsapp}?text=` +
      encodeURIComponent(text)
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#E1D9C6] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-pink/15 px-5 py-4">
          <h2 className="font-serif text-xl text-brand-browndark">
            {t("title")} {count > 0 && `(${count})`}
          </h2>
          <button
            onClick={closeCart}
            aria-label={locale === "en" ? "Close" : "Tutup"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <svg
                viewBox="0 0 24 24"
                className="h-16 w-16 text-brand-pink/30"
                fill="currentColor"
              >
                <path d="M7 4h-2l-1 2v2h2l3 9h10l3-7h-12l-1-3h-2zm0 0M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              <p className="text-sm text-brand-browndark/60">
                {t("kosong")}
              </p>
              <button
                onClick={closeCart}
                className="btn-outline mt-2 text-xs"
              >
                {t("lanjutBelanja")}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.slug}-${item.format}`}
                  className="cart-item-enter flex gap-3 rounded-2xl border border-brand-pink/10 bg-white/60 p-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 flex-shrink-0 rounded-xl object-contain bg-[#F4EEE2] p-1"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-base text-brand-browndark">
                          {item.name}
                        </h3>
                        <span className="rounded-full bg-brand-pink/10 px-2 py-0.5 text-xs text-brand-pink">
                          {formatLabel(item.format, locale)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.slug, item.format)}
                        aria-label={locale === "en" ? "Remove" : "Hapus"}
                        className="text-xs text-brand-browndark/40 hover:text-brand-pink"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQty(item.slug, item.format, item.qty - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.qty}
                        </span>
                        <button
                          onClick={() =>
                            updateQty(item.slug, item.format, item.qty + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      {item.price && (
                        <span className="text-sm font-medium text-brand-pink">
                          {formatRupiah(item.priceNum * item.qty)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-pink/15 px-5 py-4">
            {/* Total */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-brand-browndark/70">{t("total")} ({count} {t("item")})</span>
              <span className="font-serif text-2xl text-brand-pink">{formatRupiah(total)}</span>
            </div>
            <a
              href={buildWaMessage()}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full"
              onClick={() => setTimeout(() => clearCart(), 500)}
            >
              <svg
                viewBox="0 0 24 24"
                className="mr-2 h-5 w-5 fill-current"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23z" />
              </svg>
              {t("checkout")}
            </a>
            <button
              onClick={clearCart}
              className="mt-2 w-full text-center text-xs text-brand-browndark/50 hover:text-brand-pink"
            >
              {t("kosongkan")}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}