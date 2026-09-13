export const site = {
  name: "Cerita Meramuda",
  shortName: "CMM",
  tagline: "Kisah Rasa dari Kebun ke Cangkirmu",
  taglineEn: "A Tale of Flavor from Garden to Cup",
  whatsapp: "6285718509797",
  email: "hello@ceritameramuda.id",
  phoneDisplay: "0857 1850 9797",
  address: "Indonesia",
  hours: "Senin – Jumat · 09.00 – 17.00",
  hoursEn: "Monday – Friday · 09.00 – 17.00",
  // E-commerce
  shopee: "https://shopee.co.id/ceritameramuda",
  tiktokShop: "https://shop.tiktok.com/@ceritameramuda",
  // Sosial media
  instagram: "https://instagram.com/ceritameramuda",
  tiktok: "https://tiktok.com/@ceritameramuda",
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
  { label: "Hampers", href: "/hampers" },
  { label: "Tentang", href: "/about" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Kontak", href: "/contact" },
];
