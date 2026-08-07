"use client";

import { notFound } from "next/navigation";
import { getByCategory, categoryMeta, ProductCategory } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const valid = (c: string): c is ProductCategory => c in categoryMeta;

export default function CategoryPage({ params }: { params: { category: string } }) {
  if (!valid(params.category)) return notFound();
  const items = getByCategory(params.category);
  const meta = categoryMeta[params.category];
  return (
    <div className="container-cmm py-14">
      {/* Header dengan animasi */}
      <ScrollReveal>
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-brand-pink">{meta.label}</p>
          <h1 className="section-title mt-2">{meta.label}</h1>
          {meta.sub && (
            <p className="mx-auto mt-3 max-w-xl text-brand-browndark/70">{meta.sub}</p>
          )}
        </header>
      </ScrollReveal>

      {/* Grid produk dengan stagger */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p, i) => (
          <ScrollReveal key={p.slug} delay={(i % 4) + 1 as 1 | 2 | 3}>
            <ProductCard product={p} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}