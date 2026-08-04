"use client";

import { useCart } from "@/lib/cart/CartContext";
import { useEffect, useRef, useState } from "react";

export function FloatingCart() {
  const { count, openCart, items } = useCart();
  const [pop, setPop] = useState(false);
  const prevCount = useRef(count);

  useEffect(() => {
    if (count > prevCount.current) {
      setPop(true);
      const t = setTimeout(() => setPop(false), 500);
      return () => clearTimeout(t);
    }
    prevCount.current = count;
  }, [count]);

  // Don't show if cart drawer is open
  const lastItem = items[items.length - 1];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      {/* Floating Cart */}
      <button
        onClick={openCart}
        aria-label="Keranjang"
        data-cart-target
        className={`float-in relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink text-white shadow-lg shadow-brand-pink/30 transition hover:scale-110 ${pop ? "cart-pop" : ""}`}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M7 4h-2l-1 2v2h2l3 9h10l3-7h-12l-1-3h-2zM9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
        {count > 0 && (
          <span
            key={count}
            className={`badge-bump absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-brand-pink ${pop ? "badge-bump" : ""}`}
          >
            {count}
          </span>
        )}
      </button>
    </div>
  );
}