export const site = {
  name: "Cerita Meramuda",
  shortName: "CMM",
  tagline: "Crafted by Nature, Refined by Hand",
  taglineEn: "Crafted by Nature, Refined by Hand",
  whatsapp: "6285718509797",
  email: "hello@ceritameramuda.id",
  phoneDisplay: "0857 1850 9797",
  address: "Indonesia",
  hours: "Senin – Jumat · 09.00 – 17.00",
  hoursEn: "Monday – Friday · 09.00 – 17.00",
  // E-commerce
  shopee: "https://id.shp.ee/sMaRc4pS",
  tiktokShop: "https://www.tiktok.com/@ceritameramuda?_r=1&_t=ZS-99ilUOUrsjU",
  // Sosial media
  instagram: "https://instagram.com/ceritameramuda",
  tiktok: "https://www.tiktok.com/@ceritameramudadai?_r=1&_t=ZS-99ilb3gIUg1",
  // Katalog (per bahasa)
  catalogue: {
    id: "/images/catalogue/ID-Cerita-Meramuda-E-Catalogue.pdf",
    en: "/images/catalogue/EN-Cerita-Meramuda-E-Catalogue.pdf",
  } as Record<string, string>,
  catalogueFor: (locale: string) =>
    (locale === "en"
      ? "/images/catalogue/EN-Cerita-Meramuda-E-Catalogue.pdf"
      : "/images/catalogue/ID-Cerita-Meramuda-E-Catalogue.pdf"),
};

export const nav = [
  { label: "Produk", href: "/produk", hasDropdown: true },
  { label: "Hampers", href: "/hampers", labelEn: "Hampers and Gift" },
  { label: "Tentang", href: "/about" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Kontak", href: "/contact" },
];
