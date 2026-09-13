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
  blend?: "ayurvana" | "asmaranala" | "amondini" | "arunika";
  short: string;
  shortEn: string;
  description: string;
  descriptionEn: string;
  /** Paragraf "The Experience" / "Pengalaman Secangkir Teh" */
  experience?: string;
  experienceEn?: string;
  tastingNotes?: string[];
  tastingNotesEn?: string[];
  ingredients?: string;
  ingredientsEn?: string;
  brewing?: string;
  brewingEn?: string;
  /** Info variant, mis. "1 kaleng isi 6 tea bags" */
  variantInfo?: Partial<Record<"Kaleng" | "Sachet" | "Drip Bag", string>>;
  formats?: ("Kaleng" | "Sachet" | "Drip Bag")[];
  /** Harga per format — dipakai cart & product detail */
  priceByFormat?: Partial<Record<"Kaleng" | "Sachet" | "Drip Bag", number>>;
  /** Gambar komposisi yang muncul saat hover kartu produk */
  hoverImage?: string;
  images: string[];
  /** Gambar keterangan (KET) per bahasa */
  infoImageId?: string;
  infoImageEn?: string;
  price: string;
  featured?: boolean;
  order: number;
};

export const HARGA_KALENG = 55000;
export const HARGA_SACHET = 15000;

/** Label format per bahasa (tampil di tombol, kartu, keranjang) */
export type FormatKey = "Kaleng" | "Sachet" | "Drip Bag";
export const formatLabel = (f: string, locale: string) =>
  locale === "en" ? (f === "Kaleng" ? "Tin" : f) : f;

export const categoryMeta: Record<
  ProductCategory,
  { label: string; labelEn: string; href: string; sub?: string; subEn?: string }
> = {
  "tea-blend": {
    label: "Tea Blend",
    labelEn: "Tea Blend",
    href: "/produk/tea-blend",
    sub: "Ayurvana, Asmaranala",
    subEn: "Ayurvana, Asmaranala",
  },
  tisane: {
    label: "Tisane",
    labelEn: "Tisane",
    href: "/produk/tisane",
    sub: "Amondini, Arunika",
    subEn: "Amondini, Arunika",
  },
  kopi: {
    label: "Kopi",
    labelEn: "Coffee",
    href: "/produk/kopi",
    sub: "Arindama, Askala — Drip Bag",
    subEn: "Arindama, Askala — Drip Bag",
  },
  "cold-brew": {
    label: "Cold Brew",
    labelEn: "Cold Brew",
    href: "/produk/cold-brew",
    sub: "Cold Brew Ayurvana, Amondini, Arunika, Asmaranala",
    subEn: "Cold Brew Ayurvana, Amondini, Arunika, Asmaranala",
  },
  "milk-tea": {
    label: "Milk Tea",
    labelEn: "Milk Tea",
    href: "/produk/milk-tea",
    sub: "Lavender Milk Tea, Blue Matcha Milk Tea",
    subEn: "Lavender Milk Tea, Blue Matcha Milk Tea",
  },
};

export const products: Product[] = [
  // ==================== TEA BLEND ====================
  {
    slug: "ayurvana",
    name: "Ayurvana",
    category: "tea-blend",
    blend: "ayurvana",
    short: "Perpaduan Kesegaran Mint dengan rasa teh hijau yang otentik.",
    shortEn: "A blend of refreshing mint and authentic green tea flavor.",
    description:
      "Harmoni rasa yang elegan antara teh hijau, daun mint segar, lemon, bunga melati yang harum, dan kayu manis yang hangat. Perpaduan bahan pilihan yang diracik dengan seimbang, menghadirkan karakter rasa yang unik, serta aroma mint yang memikat.",
    descriptionEn:
      "An elegant flavor harmony of green tea, fresh mint leaves, lemon, fragrant jasmine flowers, and warm cinnamon. This carefully balanced blend of selected ingredients creates a unique flavor character and an alluring mint aroma.",
    experience:
      "Perpaduan yang anggun antara kesegaran teh hijau dan sensasi sejuk daun mint, diperkaya dengan kesegaran lemon dan keharuman aroma bunga melati. Sentuhan kayu manis memberikan kehangatan, menciptakan komposisi secangkir teh yang seimbang.",
    experienceEn:
      "A graceful blend of the freshness of green tea and the cool sensation of mint leaves, enriched with the freshness of lemon and the fragrance of jasmine. A touch of cinnamon adds warmth, creating a balanced cup of tea.",
    variantInfo: { Kaleng: "1 kaleng isi 6 tea bags", Sachet: "1 sachet isi 1 tea bags" },
    tastingNotes: ["Mint", "Lemon", "Bunga", "Hangat"],
    tastingNotesEn: ["Fresh", "Citrusy", "Floral", "Warm"],
    ingredients: "Teh Hijau · Daun Mint · Bunga Melati · Lemon · Kayu Manis",
    ingredientsEn: "Green Tea · Mint Leaves · Jasmine Flower · Lemon · Cinnamon",
    brewing: "70–85°C · 3–5 menit · 5g / 200ml",
    brewingEn: "70–85°C · 3–5 min · 5g / 200ml",
    formats: ["Kaleng", "Sachet"],
    priceByFormat: { Kaleng: HARGA_KALENG, Sachet: HARGA_SACHET },
    hoverImage: "/images/tea/ayurvana-sqbc.png",
    images: [
      "/images/tea/ayurvana-kaleng.webp",
      "/images/tea/ayurvana-sachet.webp",
      "/images/tea/ayurvana-sqbc.png",
    ],
    infoImageId: "/images/tea/ayurvana-komposisi-id.png",
    infoImageEn: "/images/tea/ayurvana-komposisi-en.jpg",
    price: "Rp 55.000",
    featured: true,
    order: 1,
  },
  {
    slug: "asmaranala",
    name: "Asmaranala",
    category: "tea-blend",
    blend: "asmaranala",
    short: "Pesona Aroma Floral dengan rasa teh hitam klasik khas Indonesia.",
    shortEn: "The charm of a floral aroma combined with the taste of classic Indonesian black tea.",
    description:
      "Perpaduan teh hitam yang kaya dengan harum bunga lavender dan bunga forget-me-not. Karakter teh hitam yang khas berpadu dengan aroma bunga yang harum, menciptakan rasa teh yang wangi yang unik dalam setiap tegukan.",
    descriptionEn:
      "A rich blend of black tea with fragrant lavender and forget-me-nots. The distinctive character of black tea combines with a fragrant floral aroma, creating a unique fragrant tea taste in every sip.",
    experience:
      "Perpaduan elegan teh hitam, lavender, dan bunga forget-me-not. Karakter teh hitam yang khas berpadu dengan aroma floral yang halus, menciptakan secangkir teh yang wangi yang unik, seimbang, dan berkarakter.",
    experienceEn:
      "An elegant composition of black tea, lavender, and forget-me-not flowers. Gentle tea depth meets delicate floral aromas, creating a refined and well-balanced cup with a distinctive character.",
    variantInfo: { Kaleng: "1 kaleng isi 6 tea bags", Sachet: "1 sachet isi 1 tea bags" },
    tastingNotes: ["Bunga", "Aromatik", "Lembut", "Elegan"],
    tastingNotesEn: ["Floral", "Aromatic", "Delicate", "Refined"],
    ingredients: "Teh Hitam · Bunga Lavender · Bunga Forget-Me-Not",
    ingredientsEn: "Black Tea · Lavender Flowers · Forget-Me-Not Flowers",
    brewing: "70–85°C · 3–5 menit · 5g / 200ml",
    brewingEn: "70–85°C · 3–5 min · 5g / 200ml",
    formats: ["Kaleng", "Sachet"],
    priceByFormat: { Kaleng: HARGA_KALENG, Sachet: HARGA_SACHET },
    hoverImage: "/images/tea/asmaranala-sqbc.png",
    images: [
      "/images/tea/asmaranala-kaleng.webp",
      "/images/tea/asmaranala-sachet.webp",
      "/images/tea/asmaranala-sqbc.png",
    ],
    infoImageId: "/images/tea/asmaranala-komposisi-id.png",
    infoImageEn: "/images/tea/asmaranala-komposisi-en.png",
    price: "Rp 55.000",
    featured: true,
    order: 2,
  },

  // ==================== TISANE ====================
  {
    slug: "amondini",
    name: "Amondini",
    category: "tisane",
    blend: "amondini",
    short: "Manis Alami dari buah yang berpadu dengan hangatnya rempah.",
    shortEn: "The natural sweetness of fruit blended with the warmth of spices.",
    description:
      "Perpaduan buah naga dan gojiberry dengan karakter buah yang unik, berpadu dengan kehangatan bunga lawang dan kapulaga, serta kesegaran dari sereh. Sebuah perjalanan rasa yang kaya, eksotis, dan berlapis dalam setiap seduhan.",
    descriptionEn:
      "A unique blend of dragon fruit and gojiberry, combined with the warmth of star anise and cardamom, and the freshness of lemongrass. A rich, exotic, and layered flavor journey in every sip.",
    experience:
      "Perpaduan yang menghadirkan karakter rasa unik dari buah naga dan goji berry. Serta, aroma bunga lawang dan kapulaga hadir membawa nuansa rempah yang hangat dan berkarakter. Di penghujung seduhan, kehangatan sereh memberikan keseimbangan rasa.",
    experienceEn:
      "A blend that brings out the unique flavors of dragon fruit and goji berries. The aromas of star anise and cardamom bring a warm and distinctive spice nuance. At the end of the brew, the warmth of lemongrass provides a balanced flavor.",
    variantInfo: { Kaleng: "1 kaleng isi 6 tea bags", Sachet: "1 sachet isi 1 tea bags" },
    tastingNotes: ["Manis Alami", "Aromatik", "Buah-buahan", "Hangat"],
    tastingNotesEn: ["Naturally Sweet", "Aromatic", "Fruity", "Warm"],
    ingredients: "Buah Naga · Gojiberry · Sereh · Kapulaga · Bunga Lawang",
    ingredientsEn: "Dragon Fruit · Gojiberry · Lemongrass · Cardamom · Star Anise",
    brewing: "70–85°C · 3–5 menit · 5g / 200ml",
    brewingEn: "70–85°C · 3–5 min · 5g / 200ml",
    formats: ["Kaleng", "Sachet"],
    priceByFormat: { Kaleng: HARGA_KALENG, Sachet: HARGA_SACHET },
    hoverImage: "/images/tea/amondini-sqbc.png",
    images: [
      "/images/tea/amondini-kaleng.webp",
      "/images/tea/amondini-sachet.webp",
      "/images/tea/amondini-sqbc.png",
    ],
    infoImageId: "/images/tea/amondini-komposisi-id.png",
    infoImageEn: "/images/tea/amondini-komposisi-en.png",
    price: "Rp 55.000",
    featured: true,
    order: 3,
  },
  {
    slug: "arunika",
    name: "Arunika",
    category: "tisane",
    blend: "arunika",
    short: "Sentuhan Hangat dengan Aroma Floral yang lembut dan berkarakter.",
    shortEn: "A warm touch with a soft yet distinctive floral aroma.",
    description:
      "Perpaduan bunga chamomile yang harum, kehangatan kayu manis dan sereh yang berkarakter, menciptakan perpaduan rasa yang harmonis, harum, dan hangat dalam setiap seduhan.",
    descriptionEn:
      "The combination of fragrant chamomile flowers, the warmth of cinnamon, and the characteristic lemongrass create a harmonious, fragrant, and warm blend of flavors in every brew.",
    experience:
      "Satu cangkir untuk menemani waktu istirahat. Chamomile yang lembut berpadu dengan kehangatan sereh dan kayu manis. Rasanya hangat berpadu dengan keharuman khas bunga chamomile.",
    experienceEn:
      "A cup to accompany your break. Gentle chamomile blends with the warmth of lemongrass and cinnamon. A warming aroma combined with the distinctive fragrance of chamomile flowers.",
    variantInfo: { Kaleng: "1 kaleng isi 6 tea bags", Sachet: "1 sachet isi 1 tea bags" },
    tastingNotes: ["Aroma Bunga", "Aromatik", "Herbal", "Hangat"],
    tastingNotesEn: ["Floral", "Aromatic", "Herbal", "Warm"],
    ingredients: "Bunga Chamomile · Sereh · Kayu Manis",
    ingredientsEn: "Chamomile Flowers · Lemongrass · Cinnamon",
    brewing: "70–85°C · 3–5 menit · 5g / 200ml",
    brewingEn: "70–85°C · 3–5 min · 5g / 200ml",
    formats: ["Kaleng", "Sachet"],
    priceByFormat: { Kaleng: HARGA_KALENG, Sachet: HARGA_SACHET },
    hoverImage: "/images/tea/arunika-sqbc.png",
    images: [
      "/images/tea/arunika-kaleng.webp",
      "/images/tea/arunika-sachet.webp",
      "/images/tea/arunika-sqbc.png",
    ],
    infoImageId: "/images/tea/arunika-komposisi-id.png",
    infoImageEn: "/images/tea/arunika-komposisi-en.png",
    price: "Rp 55.000",
    featured: true,
    order: 4,
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
    priceByFormat: { "Drip Bag": 75000 },
    images: ["/images/coffee/kopi-arindama.jpg"],
    price: "Rp 75.000",
    featured: true,
    order: 5,
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
    priceByFormat: { "Drip Bag": 75000 },
    images: ["/images/coffee/kopi-arindama.jpg"],
    price: "Rp 75.000",
    order: 6,
  },

  // ==================== COLD BREW ====================
  {
    slug: "cb-ayurvana",
    name: "Cold Brew Ayurvana",
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
        images: ["/images/cold-drinks/cb-ayurvana.webp"],
    price: "Rp 35.000",
    order: 7,
  },
  {
    slug: "cb-amondini",
    name: "Cold Brew Amondini",
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
        images: ["/images/cold-drinks/cb-amondini.webp"],
    price: "Rp 35.000",
    order: 8,
  },
  {
    slug: "cb-arunika",
    name: "Cold Brew Arunika",
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
        images: ["/images/cold-drinks/cb-arunika.webp"],
    price: "Rp 35.000",
    order: 9,
  },
  {
    slug: "cb-asmaranala",
    name: "Cold Brew Asmaranala",
    category: "cold-brew",
    blend: "asmaranala",
    short: "Cold brew teh hitam floral yang segar & manis.",
    shortEn: "Black tea rose & berry sweet cold brew.",
    description:
      "Minuman dingin segar dari blend Asmaranala. Kombinasi teh hitam, lavender, melati, dan forget-me-not dingin yang membangkitkan kesegaran seketika.",
    descriptionEn:
      "Refreshing cold drink from the Asmaranala blend. A cold combination of black tea, lavender, jasmine, and forget-me-not that instantly refreshes.",
    ingredients: "Teh Hitam, Bunga Lavender, Bunga Melati, Bunga Forget-Me-Not",
    ingredientsEn: "Black Tea, Lavender Flowers, Jasmine Flowers, Forget-Me-Not Flowers",
        images: ["/images/cold-drinks/cb-asmaranala.webp"],
    price: "Rp 35.000",
    order: 10,
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
    images: ["/images/cold-drinks/lavender-milk-tea.webp"],
    price: "Rp 38.000",
    featured: true,
    order: 11,
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
    images: ["/images/cold-drinks/blue-matcha-milk-tea.webp"],
    price: "Rp 38.000",
    featured: true,
    order: 12,
  },
];

// ==================== HAMPERS ====================
export type Hampers = {
  slug: string;
  name: string;
  nameEn: string;
  short: string;
  shortEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  imageAlt: string;
  price: string;
  priceNum: number;
  /** Isi hampers (untuk keterangan produk) */
  contents: string[];
  contentsEn: string[];
  order: number;
};

export const hampers: Hampers[] = [
  {
    slug: "essential-classic",
    name: "Essential Classic Edition",
    nameEn: "Essential Classic Edition",
    short: "Kesederhanaan yang bermakna & rasa yang otentik.",
    shortEn: "Meaningful simplicity & authentic taste.",
    description:
      "Hadirkan kehangatan dalam setiap seduhan dengan Essential Classic Edition dari Cerita Meramuda. Koleksi ini dirancang khusus bagi Anda yang menghargai kesederhanaan yang bermakna dan kualitas rasa yang otentik. Terbungkus dalam anyaman eksklusif, hampers ini adalah bentuk perhatian terbaik untuk kerabat, kolega, maupun diri sendiri.",
    descriptionEn:
      "Bring warmth to every brew with the Essential Classic Edition from Cerita Meramuda. This collection is specially crafted for those who appreciate meaningful simplicity and authentic taste. Wrapped in exclusive woven packaging, this hamper is the finest expression of care for family, colleagues, or yourself.",
    image: "/images/hampers/essential-classic.webp",
    imageAlt: "/images/hampers/essential-classic-2.webp",
    price: "Rp 250.000",
    priceNum: 250000,
    contents: ["1 pcs Amondini", "1 pcs Ayurvana", "Greating 100g", "Woven Bag & Greeting Card"],
    contentsEn: ["1 pcs Amondini", "1 pcs Ayurvana", "Greating 100g", "Woven Bag & Greeting Card"],
    order: 1,
  },
  {
    slug: "wedding-gift",
    name: "Wedding Gift Luxury Edition",
    nameEn: "Wedding Gift Luxury Edition",
    short: "Simbol kasih sayang yang mekar sempurna.",
    shortEn: "A symbol of love in full bloom.",
    description:
      "Abadikan momen kebahagiaan yang tak terlupakan dengan Wedding Gift Luxury Edition. Dirancang khusus sebagai simbol kasih sayang yang mekar sempurna, hampers ini memadukan kemewahan visual dengan kehangatan rasa. Pilihan hantaran yang sempurna untuk merayakan janji suci dan awal perjalanan baru.",
    descriptionEn:
      "Capture unforgettable moments of happiness with the Wedding Gift Luxury Edition. Specially designed as a symbol of love in full bloom, this hamper combines visual luxury with the warmth of taste. The perfect gift to celebrate a sacred promise and the beginning of a new journey.",
    image: "/images/hampers/wedding-gift.webp",
    imageAlt: "/images/hampers/wedding-gift-2.webp",
    price: "Rp 650.000",
    priceNum: 650000,
    contents: ["Kurasi teh artisan premium", "Kemasan hantaran mewah", "Greeting card eksklusif"],
    contentsEn: ["Curated premium artisan tea", "Luxurious gift packaging", "Exclusive greeting card"],
    order: 2,
  },
  {
    slug: "mini-single",
    name: "Mini Single Origin Edition",
    nameEn: "Mini Single Origin Edition",
    short: "Perhatian kecil yang berkesan & ekonomis.",
    shortEn: "A small gesture that leaves an impression.",
    description:
      "Ingin memberikan perhatian kecil namun berkesan? Mini Single Origin Edition adalah jawabannya. Diciptakan bagi Anda yang mencari keseimbangan antara kualitas teh artisan premium dengan harga yang tetap ekonomis. Cocok untuk buah tangan di berbagai acara, souvenir, atau sekadar bingkisan \u201cterima kasih\u201d yang personal.",
    descriptionEn:
      "Want to give a small yet memorable token of appreciation? The Mini Single Origin Edition is the answer. Created for those seeking balance between premium artisan tea quality and an economical price. Perfect as a gift for various occasions, souvenirs, or a personal \u201cthank you\u201d package.",
    image: "/images/hampers/mini-single.webp",
    imageAlt: "/images/hampers/mini-single-2.webp",
    price: "Rp 85.000",
    priceNum: 85000,
    contents: ["Single tea pilihan", "Kemasan souvenir elegan", "Greeting card"],
    contentsEn: ["Selected single tea", "Elegant souvenir packaging", "Greeting card"],
    order: 3,
  },
  {
    slug: "premium-signature",
    name: "Premium Signature Edition",
    nameEn: "Premium Signature Edition",
    short: "Kurasi teh artisan tertinggi untuk mancanegara.",
    shortEn: "Our finest artisan tea curation for international journeys.",
    description:
      "Bawa kehangatan tradisi dan cita rasa terbaik nusantara ke kancah internasional. Premium Signature Edition adalah persembahan kurasi teh artisan tertinggi dari Cerita Meramuda yang dirancang khusus sebagai buah tangan eksklusif untuk perjalanan luar negeri. Perpaduan antara kemewahan visual dan kepraktisan, menjadikannya hadiah yang membanggakan untuk kolega, kerabat, atau mitra bisnis di mancanegara.",
    descriptionEn:
      "Carry the warmth of tradition and the archipelago's finest flavors to the international stage. The Premium Signature Edition is Cerita Meramuda's highest artisan tea curation, specially designed as an exclusive gift for overseas journeys. Combining visual luxury with practicality, it makes a proud gift for colleagues, relatives, or business partners abroad.",
    image: "/images/hampers/premium-signature.webp",
    imageAlt: "/images/hampers/premium-signature-2.webp",
    price: "Rp 350.000",
    priceNum: 350000,
    contents: ["Kurasi teh artisan tertinggi", "Kemasan praktis premium", "Greeting card eksklusif"],
    contentsEn: ["Finest artisan tea curation", "Premium practical packaging", "Exclusive greeting card"],
    order: 4,
  },
  {
    slug: "chinese-new-year",
    name: "Chinese New Year Edition",
    nameEn: "Chinese New Year Edition",
    short: "Hantaran hangat untuk Tahun Baru Imlek.",
    shortEn: "A warm gift for the Lunar New Year.",
    description:
      "Tahun Baru Imlek ini, Cerita Meramuda menghadirkan persembahan khusus yang memadukan tradisi minum teh yang luhur dengan doa-doa terbaik untuk kesehatan dan kemakmuran. Sebuah hantaran yang hangat untuk mempererat tali silaturahmi dengan keluarga tercinta.",
    descriptionEn:
      "This Lunar New Year, Cerita Meramuda presents a special offering that unites the noble tradition of tea drinking with heartfelt wishes for health and prosperity. A warm gift to strengthen bonds with beloved family.",
    image: "/images/hampers/chinese-new-year.webp",
    imageAlt: "/images/hampers/chinese-new-year-2.webp",
    price: "Rp 450.000",
    priceNum: 450000,
    contents: ["Kurasi teh artisan edisi Imlek", "Kemasan eksklusif bernuansa Imlek", "Greeting card"],
    contentsEn: ["Lunar New Year artisan tea curation", "Exclusive festive packaging", "Greeting card"],
    order: 5,
  },
  {
    slug: "christmas",
    name: "Merry Christmas Edition",
    nameEn: "Merry Christmas Edition",
    short: "Kehangatan teh artisan untuk musim Natal.",
    shortEn: "Artisan tea warmth for the Christmas season.",
    description:
      "Sambut keajaiban Natal dan harapan baru di musim yang penuh cinta ini, Cerita Meramuda meracik kehangatan melalui teh artisan yang dikurasi khusus untuk melengkapi momen berkumpul bersama keluarga di depan pohon Natal atau saat menghitung mundur pergantian tahun.",
    descriptionEn:
      "Welcome the magic of Christmas and new hopes in this season of love. Cerita Meramuda crafts warmth through specially curated artisan tea to complement family gatherings by the Christmas tree or while counting down to the new year.",
    image: "/images/hampers/christmas.webp",
    imageAlt: "/images/hampers/christmas-2.webp",
    price: "Rp 450.000",
    priceNum: 450000,
    contents: ["Kurasi teh artisan edisi Natal", "Kemasan eksklusif bernuansa Natal", "Greeting card"],
    contentsEn: ["Christmas artisan tea curation", "Exclusive festive packaging", "Greeting card"],
    order: 6,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getByCategory = (c: ProductCategory) =>
  products.filter((p) => p.category === c).sort((a, b) => a.order - b.order);
export const getHampers = (slug: string) => hampers.find((h) => h.slug === slug);
