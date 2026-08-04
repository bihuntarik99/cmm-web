"use client";

import { useEffect, useState, useRef } from "react";
import { useFly } from "@/lib/cart/FlyContext";
import { useCart } from "@/lib/cart/CartContext";

export function FlyingItem() {
  const { activeFly, flyId } = useFly();
  const { openCart } = useCart();
  const [animating, setAnimating] = useState(false);
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!activeFly) return;

    // Cari elemen target (floating cart button)
    const target = document.querySelector('[data-cart-target]') as HTMLElement;
    if (target) {
      const rect = target.getBoundingClientRect();
      targetRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    setAnimating(true);
    const t = setTimeout(() => {
      setAnimating(false);
    }, 700);

    return () => clearTimeout(t);
  }, [activeFly, flyId]);

  if (!activeFly || !animating) return null;

  const dx = targetRef.current.x - activeFly.startX;
  const dy = targetRef.current.y - activeFly.startY;

  return (
    <div
      key={flyId}
      className="pointer-events-none fixed z-[100]"
      style={{
        left: activeFly.startX,
        top: activeFly.startY,
        width: 60,
        height: 60,
        animation: "flyToCart 0.7s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        // CSS variable untuk posisi target
        ["--fly-dx" as string]: `${dx}px`,
        ["--fly-dy" as string]: `${dy}px`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={activeFly.image}
        alt={activeFly.name}
        className="h-full w-full rounded-full border-2 border-brand-pink object-cover shadow-lg"
      />
    </div>
  );
}
