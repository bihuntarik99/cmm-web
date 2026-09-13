"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Product } from "@/lib/data/products";

export type CartItem = {
  slug: string;
  name: string;
  price: string;
  priceNum: number;
  image: string;
  format: string; // "Kaleng" | "Sachet" | "Drip Bag" | dll
  qty: number;
};

export function parsePrice(priceStr?: string): number {
  if (!priceStr) return 0;
  const n = parseInt(priceStr.replace(/[^\d]/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

export function formatRupiah(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  total: number;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, format: string, qty?: number) => void;
  removeItem: (slug: string, format: string) => void;
  updateQty: (slug: string, format: string, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "cmm-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    (product: Product, format: string, qty = 1) => {
      // Harga per-format (Kaleng/Sachet/Drip Bag); fallback ke harga umum
      const fmtKey = format as "Kaleng" | "Sachet" | "Drip Bag";
      const perFormat = product.priceByFormat?.[fmtKey];
      const priceNum = perFormat ?? parsePrice(product.price);
      const priceLabel = perFormat != null ? formatRupiah(perFormat) : product.price;
      setItems((prev) => {
        const idx = prev.findIndex(
          (i) => i.slug === product.slug && i.format === format
        );
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = { ...next[idx], qty: next[idx].qty + qty };
          return next;
        }
        return [
          ...prev,
          {
            slug: product.slug,
            name: product.name,
            price: priceLabel,
            priceNum,
            image: product.images[0],
            format,
            qty,
          },
        ];
      });
      // setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((slug: string, format: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.slug === slug && i.format === format))
    );
  }, []);

  const updateQty = useCallback(
    (slug: string, format: string, qty: number) => {
      if (qty < 1) return;
      setItems((prev) =>
        prev.map((i) =>
          i.slug === slug && i.format === format ? { ...i, qty } : i
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.priceNum * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        count,
        total,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}