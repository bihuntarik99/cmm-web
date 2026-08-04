import { notFound } from "next/navigation";
import { getProduct, products, categoryMeta, ProductCategory } from "@/lib/data/products";
import { ProductDetail } from "@/components/product/ProductDetail";
import { setRequestLocale } from "next-intl/server";

const valid = (c: string): c is ProductCategory => c in categoryMeta;

export async function generateStaticParams() {
  return products.flatMap((p) => [
    { category: p.category, slug: p.slug, locale: "id" },
    { category: p.category, slug: p.slug, locale: "en" },
  ]);
}

export default function ProductDetailPage({
  params,
}: {
  params: { category: string; slug: string; locale: string };
}) {
  if (!valid(params.category)) return notFound();
  setRequestLocale(params.locale);
  const p = getProduct(params.slug);
  if (!p || p.category !== params.category) return notFound();
  return <ProductDetail product={p} />;
}