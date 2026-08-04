export type ProductCategory =
  | "tea-blend"
  | "tisane"
  | "kopi"
  | "cold-brew"
  | "milk-tea";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  blend?: "ayurvana" | "asmaranala" | "aparajita" | "amondini" | "arunika";
  short: string;
  shortEn: string;
  description: string;
  descriptionEn: string;
  tastingNotes?: string[];
  tastingNotesEn?: string[];
  ingredients?: string;
  ingredientsEn?: string;
  brewing?: string;
  brewingEn?: string;
  formats?: ("Kaleng" | "Sachet" | "Drip Bag")[];
  images: string[];
  infoImage?: string;
  price: string;
  featured?: boolean;
  order: number;
};

export const categoryMeta: Record<
  ProductCategory,
  { label: string; href: string; sub?: string }
> = {
  "tea-blend": { label: "Tea Blend", href: "/produk/tea-blend", sub: "Ayurvana, Asmaranala" },
  tisane: { label: "Tisane", href: "/produk/tisane", sub: "Aparajita, Amondini, Arunika" },
  kopi: { label: "Kopi", href: "/produk/kopi", sub: "Arindama, Askala — Drip Bag" },
  "cold-brew": { label: "Cold Brew", href: "/produk/cold-brew", sub: "CB Ayurvana, CB Amondini, CB Arunika, CB Asmaranala" },
  "milk-tea": { label: "Milk Tea", href: "/produk/milk-tea", sub: "Lavender Milk Tea, Blue Matcha Milk Tea" },
};

export const products: Product[] = [
  // ==================== TEA BLEND ====================
  {
    slug: "ayurvana",
    name: "Ayurvana",
    category: "tea-blend",
    blend: "ayurvana",
    short: "Segar di awal, hangat di akhir — menenangkan.",
    shortEn: "Fresh at first, warm at the finish — calming.",
    description:
      "Menghadirkan kelembutan teh hijau yang dipadukan dengan kesegaran daun mint dan lemon, kemudian diimbali kehangatan kayu manis serta aroma lembut bunga melati. Perpaduan ini menciptakan cita rasa yang segar di awal, hangat di akhir, dengan sensasi yang menenangkan dan melegakan di setiap tegukan.",
    descriptionEn:
      "Brings the softness of green tea combined with the freshness of mint leaves and lemon, balanced by the warmth of cinnamon and the gentle aroma of jasmine. This blend creates a flavor that is fresh at first, warm at the finish, with a calming and soothing sensation in every sip.",
    tastingNotes: ["Segar Botanical", "Aroma Melati Lembut", "Hangat & Menenangkan"],
    tastingNotesEn: ["Fresh Botanical", "Soft Jasmine Aroma", "Warm & Calming"],
    ingredients: "Teh Hijau, Daun Mint, Lemon, Kayu Manis, Bunga Melati",
    ingredientsEn: "Green Tea, Mint Leaves, Lemon, Cinnamon, Jasmine Flowers",
    brewing: "Air 80–85°C · 3–5 menit · 2,5g / 250ml",
    brewingEn: "Water 80–85°C · 3–5 min · 2.5g / 250ml",
    formats: ["Kaleng", "Sachet"],
    images: [
      "/images/tea/ayurvana.jpg",
      "/images/tea/ayurvana-kaleng.jpg",
      "/images/tea/ayurvana-sachet.jpg",
      "/images/tea/ayurvana-up.jpg",
    ],
    infoImage: "/images/tea/ayurvana-ket.jpg",
    price: "Rp 85.000",
    featured: true,
    order: 1,
  },
  {
    slug: "asmaranala",
    name: "Asmaranala",
    category: "tea-blend",
    blend: "asmaranala",
    short: "Teh hitam berkarakter dengan sentuhan floral elegan.",
    shortEn: "Characterful black tea with an elegant floral touch.",
    description:
      "Memadukan karakter khas teh hitam Indonesia dengan aroma floral dari bunga lavender, melati, dan forget-me-not. Menghasilkan seduhan dengan rasa yang kaya, lembut, dan berkarakter, diakhiri sentuhan bunga yang elegan serta memberikan pengalaman minum teh yang menenangkan.",
    descriptionEn:
      "Combines the distinctive character of Indonesian black tea with the floral aroma of lavender, jasmine, and forget-me-not. Produces a brew that is rich, smooth, and characterful, finished with an elegant floral touch that provides a calming tea experience.",
    tastingNotes: ["Teh Hitam Kaya", "Aroma Lavender", "Floral Elegan"],
    tastingNotesEn: ["Rich Black Tea", "Lavender Aroma", "Elegant Floral"],
    ingredients: "Teh Hitam, Bunga Lavender, Bunga Melati, Bunga Forget-Me-Not",
    ingredientsEn: "Black Tea, Lavender Flowers, Jasmine Flowers, Forget-Me-Not Flowers",
    brewing: "Air 90–95°C · 3–4 menit · 2,5g / 250ml",
    brewingEn: "Water 90–95°C · 3–4 min · 2.5g / 250ml",
    formats: ["Kaleng", "Sachet"],
    images: [
      "/images/tea/asmaranala.jpg",
      "/images/tea/asmaranala-kaleng.jpg",
      "/images/tea/asmaranala-sachet.jpg",
      "/images/tea/asmaranala-up.jpg",
    ],
    infoImage: "/images/tea/asmaranala-ket.jpg",
    price: "Rp 95.000",
    featured: true,
    order: 2,
  },

  // ==================== TISANE ====================
  {
    slug: "aparajita",
    name: "Aparajita",
    category: "tisane",
    blend: "aparajita",
    short: "Teh putih, bunga telang, stevia & daun mint — sejuk lembut.",
    shortEn: "White tea, butterfly pea, stevia & mint — cool and gentle.",
    description:
      "Kelembutan teh putih berpadu dengan sentuhan floral dari bunga telang, manis alami stevia, dan kesegaran daun mint. Racikan ini menghadirkan cita rasa yang ringan, bersih, dan menyegarkan dengan sensasi sejuk yang lembut di setiap tegukan. Nikmati hangat untuk momen relaksasi atau sajikan dingin sebagai minuman yang menyegarkan.",
    descriptionEn:
      "The softness of white tea blends with the floral touch of butterfly pea flowers, the natural sweetness of stevia, and the freshness of mint leaves. This blend delivers a light, clean, and refreshing taste with a gentle cool sensation in every sip. Enjoy hot for moments of relaxation or serve cold as a refreshing drink.",
    tastingNotes: ["Ringan & Bersih", "Floral Bunga Telang", "Sejuk Menyegarkan"],
    tastingNotesEn: ["Light & Clean", "Butterfly Pea Floral", "Cool Refreshing"],
    ingredients: "Teh Putih, Bunga Telang, Stevia, Daun Mint",
    ingredientsEn: "White Tea, Butterfly Pea Flowers, Stevia, Mint Leaves",
    brewing: "Air 75–80°C · 3–4 menit · 2,5g / 250ml",
    brewingEn: "Water 75–80°C · 3–4 min · 2.5g / 250ml",
    formats: ["Kaleng", "Sachet"],
    images: [
      "/images/tea/arunika.jpg",
      "/images/tea/arunika-kaleng.jpg",
      "/images/tea/arunika-sachet.jpg",
      "/images/tea/arunika-up.jpg",
    ],
    infoImage: "/images/tea/arunika-ket.jpg",
    price: "Rp 90.000",
    featured: true,
    order: 3,
  },
  {
    slug: "amondini",
    name: "Amondini",
    category: "tisane",
    blend: "amondini",
    short: "Caffeine-free herbal fruit infusion — manis & aromatik.",
    shortEn: "Caffeine-free herbal fruit infusion — sweet & aromatic.",
    description:
      "Menghadirkan perpaduan harmonis antara manis alami buah naga dan goji berry dengan aroma hangat serai, kapulaga, dan bunga lawang. Sebagai caffeine-free herbal fruit infusion, setiap seduhan menawarkan cita rasa yang lembut, aromatik, dan menyegarkan, dengan sentuhan rempah yang hangat di akhir tegukan.",
    descriptionEn:
      "Presents a harmonious blend of natural sweetness from dragon fruit and goji berry with the warm aroma of lemongrass, cardamom, and star anise. As a caffeine-free herbal fruit infusion, every brew offers a mild, aromatic, and refreshing taste, with a warm spice touch at the finish.",
    tastingNotes: ["Manis Buah Naga", "Aromatik Rempah", "Caffeine-Free"],
    tastingNotesEn: ["Dragon Fruit Sweetness", "Aromatic Spices", "Caffeine-Free"],
    ingredients: "Daun Sereh, Kapulaga, Bunga Lawang, Goji Berry, Buah Naga",
    ingredientsEn: "Lemongrass, Cardamom, Star Anise, Goji Berry, Dragon Fruit",
    brewing: "Air 95°C · 4–5 menit · 3g / 250ml",
    brewingEn: "Water 95°C · 4–5 min · 3g / 250ml",
    formats: ["Kaleng", "Sachet"],
    images: [
      "/images/tea/amondini.jpg",
      "/images/tea/amondini-kaleng.jpg",
      "/images/tea/amondini-sachet.jpg",
      "/images/tea/amondini-up.jpg",
    ],
    infoImage: "/images/tea/amondini-ket.jpg",
    price: "Rp 90.000",
    featured: true,
    order: 4,
  },
  {
    slug: "arunika",
    name: "Arunika",
    category: "tisane",
    blend: "arunika",
    short: "Serai, chamomile & kayu manis — menenangkan & relaksasi.",
    shortEn: "Lemongrass, chamomile & cinnamon — calming & relaxing.",
    description:
      "Memadukan kesegaran alami serai dengan kelembutan bunga chamomile dan kehangatan kayu manis. Menghasilkan seduhan yang lembut, aromatik, dan menenangkan, dengan sentuhan manis alami dari rempah yang memberikan rasa nyaman dan relaksasi alami di setiap tegukan.",
    descriptionEn:
      "Combines the natural freshness of lemongrass with the softness of chamomile flowers and the warmth of cinnamon. Produces a brew that is smooth, aromatic, and calming, with a natural sweet touch from spices that provides comfort and natural relaxation in every sip.",
    tastingNotes: ["Lembut & Aromatik", "Chamomile Menenangkan", "Hangat Rempah"],
    tastingNotesEn: ["Smooth & Aromatic", "Calming Chamomile", "Warm Spices"],
    ingredients: "Daun Sereh, Bunga Chamomile, Kayu Manis",
    ingredientsEn: "Lemongrass, Chamomile Flowers, Cinnamon",
    brewing: "Air 95°C · 4–5 menit · 2,5g / 250ml",
    brewingEn: "Water 95°C · 4–5 min · 2.5g / 250ml",
    formats: ["Kaleng", "Sachet"],
    images: [
      "/images/tea/arunika.jpg",
      "/images/tea/arunika-kaleng.jpg",
      "/images/tea/arunika-sachet.jpg",
      "/images/tea/arunika-up.jpg",
    ],
    infoImage: "/images/tea/arunika-ket.jpg",
    price: "Rp 85.000",
    order: 5,
  },

  // ==================== KOPI (Drip Bag) ====================
  {
    slug: "arindama",
    name: "Arindama",
    category: "kopi",
    short: "Drip bag coffee — Arabika & Vanilla Planifolia, halus & smooth.",
    shortEn: "Drip bag coffee — Arabica & Vanilla Planifolia, smooth & mellow.",
    description:
      "Kopi Arabika pilihan dipadukan dengan keharuman alami Vanilla Planifolia, menghasilkan profil rasa yang halus dengan aroma yang lembut. Perpaduan ini menciptakan secangkir kopi dengan cita rasa yang seimbang, smooth, dan meninggalkan sentuhan manis yang lembut di akhir tegukan.",
    descriptionEn:
      "Selected Arabica coffee combined with the natural fragrance of Vanilla Planifolia, producing a smooth flavor profile with a gentle aroma. This blend creates a cup of coffee with a balanced, smooth taste, leaving a soft sweet touch at the finish.",
    tastingNotes: ["Halus & Smooth", "Aroma Vanilla", "Sentuhan Manis Lembut"],
    tastingNotesEn: ["Smooth & Mellow", "Vanilla Aroma", "Soft Sweet Touch"],
    ingredients: "Kopi Arabika, Vanilla Planifolia",
    ingredientsEn: "Arabica Coffee, Vanilla Planifolia",
    brewing: "Drip Bag · Air 90–92°C · 150–180ml · 1 drip bag",
    brewingEn: "Drip Bag · Water 90–92°C · 150–180ml · 1 drip bag",
    formats: ["Drip Bag"],
    images: ["/images/coffee/kopi-arindama.jpg"],
    price: "Rp 75.000",
    featured: true,
    order: 6,
  },
  {
    slug: "askala",
    name: "Askala",
    category: "kopi",
    short: "Drip bag coffee — Arabika, Jahe, Kayu Manis & Cengkeh.",
    shortEn: "Drip bag coffee — Arabica, Ginger, Cinnamon & Clove.",
    description:
      "Memadukan karakter kopi Arabika yang kaya dengan kehangatan jahe, kayu manis, dan cengkeh. Menghasilkan secangkir kopi yang beraroma rempah, berkarakter, dan seimbang, dengan sensasi hangat yang lembut serta aftertaste rempah yang khas.",
    descriptionEn:
      "Combines the rich character of Arabica coffee with the warmth of ginger, cinnamon, and clove. Produces a cup of coffee that is spice-aromatic, characterful, and balanced, with a gentle warm sensation and a distinctive spice aftertaste.",
    tastingNotes: ["Rempah Berkarakter", "Hangat Jahe", "Aftertaste Cengkeh"],
    tastingNotesEn: ["Characterful Spices", "Warm Ginger", "Clove Aftertaste"],
    ingredients: "Kopi Arabika, Jahe, Kayu Manis, Cengkeh",
    ingredientsEn: "Arabica Coffee, Ginger, Cinnamon, Clove",
    brewing: "Drip Bag · Air 90–92°C · 150–180ml · 1 drip bag",
    brewingEn: "Drip Bag · Water 90–92°C · 150–180ml · 1 drip bag",
    formats: ["Drip Bag"],
    images: ["/images/coffee/kopi-arindama.jpg"],
    price: "Rp 75.000",
    order: 7,
  },

  // ==================== COLD BREW ====================
  {
    slug: "cb-ayurvana",
    name: "CB Ayurvana",
    category: "cold-brew",
    blend: "ayurvana",
    short: "Teh dingin herbal botanical menyejukkan.",
    shortEn: "Cooling botanical herbal iced tea.",
    description:
      "Ayurvana Cold Brew menyegarkan hari Anda dengan herbal alami yang jernih, dingin, dan menenangkan. Versi dingin dari blend Ayurvana—segar di awal, hangat di akhir.",
    descriptionEn:
      "Ayurvana Cold Brew refreshes your day with clear, cool, and calming natural herbs. The cold version of the Ayurvana blend—fresh at first, warm at the finish.",
    ingredients: "Teh Hijau, Daun Mint, Lemon, Kayu Manis, Bunga Melati",
    ingredientsEn: "Green Tea, Mint Leaves, Lemon, Cinnamon, Jasmine Flowers",
    images: ["/images/cold-drinks/ayurvana-coldbrew.jpg"],
    price: "Rp 35.000",
    order: 8,
  },
  {
    slug: "cb-amondini",
    name: "CB Amondini",
    category: "cold-brew",
    blend: "amondini",
    short: "Minuman teh dingin Amondini segar & aromatik.",
    shortEn: "Refreshing & aromatic Amondini iced tea.",
    description:
      "Racikan cold brew siap minum dari blend Amondini. Diseduh dingin untuk mengekstrak rasa buah naga, goji berry, dan rempah hangat tanpa rasa pahit.",
    descriptionEn:
      "Ready-to-drink cold brew from the Amondini blend. Cold-steeped to extract dragon fruit, goji berry, and warm spice flavors without bitterness.",
    ingredients: "Daun Sereh, Kapulaga, Bunga Lawang, Goji Berry, Buah Naga",
    ingredientsEn: "Lemongrass, Cardamom, Star Anise, Goji Berry, Dragon Fruit",
    images: ["/images/cold-drinks/amondini-coldbrew.jpg"],
    price: "Rp 35.000",
    order: 9,
  },
  {
    slug: "cb-arunika",
    name: "CB Arunika",
    category: "cold-brew",
    blend: "arunika",
    short: "Cold brew serai, chamomile & kayu manis yang menenangkan.",
    shortEn: "Calming lemongrass, chamomile & cinnamon cold brew.",
    description:
      "Versi dingin dari Arunika—serai segar, chamomile lembut, dan kayu manis hangat dalam botol siap minum yang menenangkan.",
    descriptionEn:
      "The cold version of Arunika—fresh lemongrass, smooth chamomile, and warm cinnamon in a ready-to-drink bottle that calms.",
    ingredients: "Daun Sereh, Bunga Chamomile, Kayu Manis",
    ingredientsEn: "Lemongrass, Chamomile Flowers, Cinnamon",
    images: ["/images/cold-drinks/display-1.jpg"],
    price: "Rp 35.000",
    order: 10,
  },
  {
    slug: "cb-asmaranala",
    name: "CB Asmaranala",
    category: "cold-brew",
    blend: "asmaranala",
    short: "Cold brew teh hitam mawar & beri segar manis.",
    shortEn: "Black tea rose & berry sweet cold brew.",
    description:
      "Minuman dingin segar dari blend Asmaranala. Kombinasi teh hitam, lavender, melati, dan forget-me-not dingin yang membangkitkan kesegaran seketika.",
    descriptionEn:
      "Refreshing cold drink from the Asmaranala blend. A cold combination of black tea, lavender, jasmine, and forget-me-not that instantly refreshes.",
    ingredients: "Teh Hitam, Bunga Lavender, Bunga Melati, Bunga Forget-Me-Not",
    ingredientsEn: "Black Tea, Lavender Flowers, Jasmine Flowers, Forget-Me-Not Flowers",
    images: ["/images/cold-drinks/asmaranala-coldbrew.jpg"],
    price: "Rp 35.000",
    order: 11,
  },

  // ==================== MILK TEA ====================
  {
    slug: "lavender-milk-tea",
    name: "Lavender Milk Tea",
    category: "milk-tea",
    short: "Susu teh lavender menenangkan & harum.",
    shortEn: "Soothing & fragrant lavender milk tea.",
    description:
      "Sentuhan bunga lavender alami dalam balutan milk tea yang lembut dan harum memikat. Nikmati dingin untuk momen yang menenangkan.",
    descriptionEn:
      "A touch of natural lavender flowers wrapped in a smooth and captivatingly fragrant milk tea. Enjoy cold for a calming moment.",
    tastingNotes: ["Lavender Harum", "Creamy & Lembut", "Menenangkan"],
    tastingNotesEn: ["Fragrant Lavender", "Creamy & Smooth", "Calming"],
    ingredients: "Teh, Susu, Bunga Lavender",
    ingredientsEn: "Tea, Milk, Lavender Flowers",
    images: ["/images/cold-drinks/milk-tea-lavender.jpg"],
    price: "Rp 38.000",
    featured: true,
    order: 12,
  },
  {
    slug: "blue-matcha-milk-tea",
    name: "Blue Matcha Milk Tea",
    category: "milk-tea",
    short: "Teh telang biru alami & susu creamy.",
    shortEn: "Natural blue butterfly pea & creamy milk.",
    description:
      "Spesialisasi minuman CMM dari racikan bunga telang alami dipadukan dengan susu halus dan kelezatan khas. Warna biru cantik dengan rasa creamy yang memikat.",
    descriptionEn:
      "CMM signature drink crafted from natural butterfly pea flowers paired with smooth milk and distinctive delight. Beautiful blue color with a captivating creamy taste.",
    tastingNotes: ["Bunga Telang Biru", "Creamy Susu", "Visual Cantik"],
    tastingNotesEn: ["Blue Butterfly Pea", "Creamy Milk", "Beautiful Visual"],
    ingredients: "Teh Telang (Butterfly Pea), Susu",
    ingredientsEn: "Butterfly Pea Tea, Milk",
    images: ["/images/cold-drinks/blue-milk-tea.jpg"],
    price: "Rp 38.000",
    featured: true,
    order: 13,
  },
];

export const hampers = [
  { slug: "hampers-2", name: "Luxury Hampers 2", image: "/images/hampers/hampers-2.jpg", short: "All Season / Celebration", price: "Rp 275.000" },
  { slug: "hampers-3", name: "Luxury Hampers 3", image: "/images/hampers/hampers-3.jpg", short: "All Season / Executive", price: "Rp 450.000" },
  { slug: "imlek-1", name: "Imlek Lunar Deluxe 1", image: "/images/hampers/imlek-1.jpg", short: "Imlek / Chinese New Year", price: "Rp 325.000", season: "Imlek" },
  { slug: "imlek-2", name: "Imlek Lunar Grand Fortune 2", image: "/images/hampers/imlek-2.jpg", short: "Imlek / Chinese New Year", price: "Rp 550.000", season: "Imlek" },
  { slug: "hp-13", name: "Gift Set HP 13", image: "/images/hampers/hp-13.jpg", short: "2 Sachet Tea + Tumbler", price: "Rp 195.000" },
  { slug: "hp-15", name: "Gift Set HP 15", image: "/images/hampers/hp-15.jpg", short: "Kaleng Tea + Sachet Kopi", price: "Rp 225.000" },
  { slug: "hp-16", name: "Gift Set HP 16", image: "/images/hampers/hp-16.jpg", short: "3 Sachet + Cookies", price: "Rp 245.000" },
  { slug: "hp-17", name: "Gift Set HP 17", image: "/images/hampers/hp-17.jpg", short: "Tea & Cold Brew Selection", price: "Rp 310.000" },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getByCategory = (c: ProductCategory) =>
  products.filter((p) => p.category === c).sort((a, b) => a.order - b.order);