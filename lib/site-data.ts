export type Product = {
  slug: string;
  name: string;
  code: string;
  subCategory?: "Ladies" | "Gents" | "Unisex";
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  specs: {
    material: string;
    finish: string;
    customization: string;
    minimumOrder: string;
  };
  image: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  shortDescription: string;
  intro: string;
  image: string;
  products: Product[];
};

export const site = {
  name: "Cavaleer",
  title: "Cavaleer | Leather Goods & Equestrian Accessories",
  description:
    "Cavaleer develops leather bags, wallets, belts, and equestrian accessories for retailers, private labels, and wholesale buyers.",
  contact: {
    addressLine1: "Zevenbladstraat 23",
    addressLine2: "6841KV Arnhem",
    country: "The Netherlands",
    email: "info@cavaleer.nl",
    phone: "0686054620",
    phoneHref: "tel:0686054620",
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ],
};

export const productCategories: ProductCategory[] = [
  {
    slug: "bags",
    name: "Bags",
    shortDescription:
      "Structured handbags, laptop bags, satchels, and weekenders designed for retail, travel, and private label collections.",
    intro:
      "Our bag collection brings together fashion-led silhouettes and practical carry formats with dependable leather finishing for wholesale buyers, retailers, and private label programs.",
    image: "/images/category_bag.png",
    products: [
      {
        slug: "amira-shoulder-bag",
        name: "Amira Shoulder Bag",
        code: "LB-101",
        subCategory: "Ladies",
        summary: "A softly structured shoulder bag with polished hardware and everyday elegance.",
        description:
          "Designed for premium accessories collections, the Amira pairs a spacious interior with a clean outer profile and smooth leather body.",
        features: [
          "Soft structured silhouette",
          "Secure zip closure with interior pockets",
          "Polished metal hardware",
          "Suitable for seasonal color programs",
        ],
        applications: ["Boutique retail", "Private label programs", "Gift collections"],
        specs: {
          material: "Full-grain leather with cotton twill lining",
          finish: "Smooth matte and softly polished options",
          customization: "Logo embossing, lining changes, hardware colors",
          minimumOrder: "120 pieces",
        },
        image: "/images/category_bag.png",
      },
      {
        slug: "sana-crossbody",
        name: "Sana Crossbody",
        code: "LB-118",
        subCategory: "Ladies",
        summary: "Compact crossbody styling built for light carry and premium presentation.",
        description:
          "The Sana is a compact leather bag developed for modern retail assortments that need a smaller format without losing finish quality.",
        features: [
          "Compact body with adjustable strap",
          "Slim profile for retail display",
          "Premium zipper and edge finishing",
          "Merchandises well in coordinated programs",
        ],
        applications: ["Department stores", "Travel accessories", "Seasonal drops"],
        specs: {
          material: "Top-grain leather",
          finish: "Pebbled and smooth variants",
          customization: "Custom strap lengths and private label branding",
          minimumOrder: "150 pieces",
        },
        image: "/images/category_bag.png",
      },
      {
        slug: "nura-tote",
        name: "Nura Tote",
        code: "LB-127",
        subCategory: "Ladies",
        summary: "A generous carry-all tote created for work, travel, and premium gifting collections.",
        description:
          "The Nura Tote balances volume and structure, making it a versatile leather style for long-term catalog placement.",
        features: [
          "Large open compartment with inner organizer",
          "Comfortable shoulder handles",
          "Retail-ready premium construction",
          "Ideal for corporate and travel assortments",
        ],
        applications: ["Corporate gifting", "Travel retail", "Private label totes"],
        specs: {
          material: "Leather exterior with reinforced base panel",
          finish: "Semi-aniline leather with protected surface",
          customization: "Packaging, embossing, and hardware options",
          minimumOrder: "100 pieces",
        },
        image: "/images/category_bag.png",
      },
      {
        slug: "adam-laptop-bag",
        name: "Adam Laptop Bag",
        code: "GB-203",
        subCategory: "Gents",
        summary: "A structured leather laptop bag built for modern business carry.",
        description:
          "The Adam combines dedicated laptop protection with a classic leather exterior suitable for office, travel, and executive gifting programs.",
        features: [
          "Padded laptop compartment",
          "Front organizer pocket",
          "Detachable shoulder strap",
          "Structured leather body",
        ],
        applications: ["Business retail", "Corporate gifting", "Travel assortments"],
        specs: {
          material: "Full-grain leather with padded lining",
          finish: "Smooth waxed finish",
          customization: "Embossed logo, lining color, branded metal plate",
          minimumOrder: "80 pieces",
        },
        image: "/images/category_bag.png",
      },
      {
        slug: "zaid-satchel",
        name: "Zaid Satchel",
        code: "GB-214",
        subCategory: "Gents",
        summary: "An everyday satchel with heritage styling and updated proportions.",
        description:
          "Developed for brands that want casual leather carry goods with premium finishing, the Zaid Satchel has a balanced shape and clean paneling.",
        features: [
          "Magnetic flap closure",
          "Interior divider and zipper pocket",
          "Crossbody carry",
          "Strong merchandising presence",
        ],
        applications: ["Heritage retail", "Lifestyle collections", "Travel accessories"],
        specs: {
          material: "Top-grain leather",
          finish: "Natural grain with light polish",
          customization: "Logo embossing and custom strap hardware",
          minimumOrder: "120 pieces",
        },
        image: "/images/category_bag.png",
      },
      {
        slug: "faris-weekender",
        name: "Faris Weekender",
        code: "GB-226",
        subCategory: "Gents",
        summary: "A travel-led leather weekender designed for premium men's collections.",
        description:
          "The Faris Weekender is created for extended retail programs where refined leather, generous capacity, and dependable structure matter.",
        features: [
          "Large internal volume",
          "Reinforced handles and detachable strap",
          "Travel-friendly profile",
          "Premium zipper system",
        ],
        applications: ["Travel retail", "Gift programs", "Private label luggage capsules"],
        specs: {
          material: "Full-grain leather with reinforced base",
          finish: "Semi-matte premium wax finish",
          customization: "Dust bag, hangtag, embossing, lining",
          minimumOrder: "60 pieces",
        },
        image: "/images/category_bag.png",
      },
    ],
  },
  {
    slug: "belts",
    name: "Belts",
    shortDescription:
      "Retail-ready leather belts with clean buckle programs and durable edge finishing.",
    intro:
      "Our belt collection is made for long-running leather assortments, balancing fit consistency, premium buckles, and dependable finish performance.",
    image: "/images/category_belts.png",
    products: [
      {
        slug: "atlas-classic-belt",
        name: "Atlas Classic Belt",
        code: "BT-301",
        summary: "A timeless leather belt developed for broad retail compatibility.",
        description:
          "The Atlas Classic Belt offers a refined strap width, premium buckle construction, and finishing suitable for both formal and casual collections.",
        features: [
          "Timeless strap width",
          "Durable buckle plating",
          "Edge-painted finishing",
          "Available in multiple seasonal tones",
        ],
        applications: ["Menswear retail", "Gift boxes", "Uniform collections"],
        specs: {
          material: "Vegetable-tanned leather",
          finish: "Brushed and polished buckle options",
          customization: "Logo embossing and custom buckle finishes",
          minimumOrder: "250 pieces",
        },
        image: "/images/category_belts.png",
      },
      {
        slug: "mira-slim-belt",
        name: "Mira Slim Belt",
        code: "BT-318",
        summary: "A slim leather belt tailored for women's accessories programs.",
        description:
          "Mira is a compact belt profile designed for capsule collections that need subtle premium detailing and versatile packaging.",
        features: [
          "Slim profile",
          "Elegant buckle selection",
          "Consistent color finishing",
          "High merchandising flexibility",
        ],
        applications: ["Womenswear retail", "Seasonal accessories", "Private label capsules"],
        specs: {
          material: "Top-grain leather",
          finish: "Smooth with polished edge paint",
          customization: "Length runs, branded packaging, hardware colors",
          minimumOrder: "220 pieces",
        },
        image: "/images/category_belts.png",
      },
      {
        slug: "crown-rider-belt",
        name: "Crown Rider Belt",
        code: "BT-334",
        summary: "A heritage-inspired leather belt with equestrian character.",
        description:
          "The Crown Rider Belt is developed for collections where fashion leather and equestrian cues meet in one premium product.",
        features: [
          "Heritage-inspired buckle styling",
          "Strong leather body",
          "Designed for repeated wear",
          "Excellent fit for coordinated programs",
        ],
        applications: ["Lifestyle collections", "Equestrian-inspired retail", "Private label"],
        specs: {
          material: "Full-grain leather",
          finish: "Waxed leather with burnished edge",
          customization: "Embossing, buckle finish, keeper details",
          minimumOrder: "180 pieces",
        },
        image: "/images/category_belts.png",
      },
    ],
  },
  {
    slug: "wallets",
    name: "Wallets",
    shortDescription:
      "Classic wallets and card holders with practical layouts and premium retail finishing.",
    intro:
      "Our wallet range is built around compact format discipline, leather consistency, and merchandising ease for high-turn accessories programs.",
    image: "/images/category_wallets.png",
    products: [
      {
        slug: "tariq-bifold-wallet",
        name: "Tariq Bifold Wallet",
        code: "WL-401",
        summary: "A clean bifold wallet built for all-season leather assortments.",
        description:
          "Tariq is a retail staple with balanced card capacity, durable folding construction, and premium finish choices suitable for broad market use.",
        features: [
          "Classic bifold layout",
          "Structured card sections",
          "Strong fold retention",
          "Elegant, gifting-ready profile",
        ],
        applications: ["Everyday retail", "Gift programs", "Private label basics"],
        specs: {
          material: "Full-grain leather",
          finish: "Smooth, pebbled, and pull-up options",
          customization: "Embossing, lining changes, branded box",
          minimumOrder: "300 pieces",
        },
        image: "/images/category_wallets.png",
      },
      {
        slug: "zane-card-holder",
        name: "Zane Card Holder",
        code: "WL-417",
        summary: "A slim leather card holder for compact carry and premium gifting.",
        description:
          "The Zane is designed for streamlined collections that need a small-format leather product with strong gifting and display appeal.",
        features: [
          "Slim card storage",
          "Clean edge finishing",
          "Easy to pair with bag and belt programs",
          "Lightweight retail format",
        ],
        applications: ["Gift accessories", "Travel retail", "Add-on leather programs"],
        specs: {
          material: "Top-grain leather",
          finish: "Smooth matte with polished edge",
          customization: "Color blocking and branded packaging",
          minimumOrder: "350 pieces",
        },
        image: "/images/category_wallets.png",
      },
      {
        slug: "safiya-zip-wallet",
        name: "Safiya Zip Wallet",
        code: "WL-429",
        summary: "A zip-around wallet developed for premium women's leather assortments.",
        description:
          "Safiya is built around secure storage, neat compartmentalization, and a polished exterior that complements ladies bag collections.",
        features: [
          "Zip-around security",
          "Multi-compartment interior",
          "Consistent retail dimensions",
          "Coordinates with handbag programs",
        ],
        applications: ["Ladies accessories", "Gift collections", "Private label sets"],
        specs: {
          material: "Full-grain leather with textile lining",
          finish: "Fine grain finish with soft sheen",
          customization: "Branding, zip pull design, packaging",
          minimumOrder: "200 pieces",
        },
        image: "/images/category_wallets.png",
      },
    ],
  },
  {
    slug: "equestrian-accessories",
    name: "Equestrian Accessories",
    shortDescription:
      "Leather tack and rider accessories developed for stables, equestrian brands, and performance-led retail.",
    intro:
      "This category replaces outerwear-style product programs with a focused equestrian lineup built around rider performance, stable use, and premium leather finishing.",
    image: "/images/category_equestrian.png",
    products: [
      {
        slug: "bridle-workset",
        name: "Bridle Workset",
        code: "EQ-501",
        summary: "A refined bridle program designed for training, retail display, and private label ranges.",
        description:
          "The Bridle Workset combines comfort-oriented shaping with clean hardware selection and consistent leather finishing for equestrian buyers who need dependable quality.",
        features: [
          "Comfort-led shaping",
          "Refined strap detailing",
          "Performance-ready construction",
          "Suitable for private label tack ranges",
        ],
        applications: ["Equestrian retail", "Stable supply", "Private label tack"],
        specs: {
          material: "Premium leather with polished hardware",
          finish: "Supple hand-feel with durable surface treatment",
          customization: "Brand embossing, strap colors, hardware finish",
          minimumOrder: "80 sets",
        },
        image: "/images/category_equestrian.png",
      },
      {
        slug: "arena-reins",
        name: "Arena Reins",
        code: "EQ-514",
        summary: "Leather reins developed for grip, finish retention, and coordinated tack programs.",
        description:
          "Arena Reins are built for everyday riding and presentation-led tack programs where leather consistency and comfort are equally important.",
        features: [
          "Reliable grip profile",
          "Clean edge finishing",
          "Flexible for multiple riding disciplines",
          "Strong fit with coordinated bridle sets",
        ],
        applications: ["Training tack", "Retail tack sets", "Stable supply"],
        specs: {
          material: "Full-grain leather",
          finish: "Waxed and polished finish options",
          customization: "Length, stitching color, branded details",
          minimumOrder: "120 pairs",
        },
        image: "/images/category_equestrian.png",
      },
      {
        slug: "stable-grooming-tote",
        name: "Stable Grooming Tote",
        code: "EQ-528",
        summary: "A durable leather-trimmed carry tote made for grooming and stable essentials.",
        description:
          "The Stable Grooming Tote brings together utility, retail appeal, and equestrian styling for brands expanding beyond core tack products.",
        features: [
          "Multi-compartment organization",
          "Leather reinforced touchpoints",
          "Easy carry from stable to arena",
          "Excellent for premium equestrian lifestyle lines",
        ],
        applications: ["Stable organization", "Equestrian gifting", "Lifestyle accessories"],
        specs: {
          material: "Heavy-duty canvas with leather trim",
          finish: "Protected leather and clean stitched paneling",
          customization: "Branding patches, trims, colorways",
          minimumOrder: "100 pieces",
        },
        image: "/images/category_equestrian.png",
      },
    ],
  },
];

export const highlights = [
  {
    title: "Private Label Manufacturing",
    description:
      "Develop leather collections for retail, wholesale, and equestrian programs with dependable production support.",
  },
  {
    title: "Premium Leather Craft",
    description:
      "Work with finishes and materials built to perform across long-running product lines and repeat orders.",
  },
  {
    title: "Non-Ecommerce Product Catalog",
    description:
      "Present collections clearly and drive inquiries without introducing cart, login, or account complexity.",
  },
];

export const aboutPoints = [
  "Structured leather production for bags, belts, wallets, and equestrian accessories.",
  "Flexible support for wholesale buyers, retailers, and private label partners.",
  "Consistent finishing, merchandising-ready presentation, and dependable product development.",
];

export const testimonials = [
  {
    name: "Retail Buying Team",
    company: "Northline Accessories",
    quote:
      "Cavaleer delivers the kind of consistency we need across leather programs: clean finishing, dependable communication, and retail-ready products.",
  },
  {
    name: "Wholesale Partner",
    company: "Cordoba House",
    quote:
      "The collection structure is easy to work with, and the equestrian additions fit naturally beside the broader leather assortment.",
  },
  {
    name: "Brand Development Lead",
    company: "Atelier Tack",
    quote:
      "The product presentation feels polished without becoming ecommerce-heavy, which suits our B2B and catalog-driven workflow perfectly.",
  },
];

export function getCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  const category = getCategory(categorySlug);
  if (!category) {
    return null;
  }

  const product = category.products.find((item) => item.slug === productSlug);

  if (!product) {
    return null;
  }

  return {
    category,
    product,
  };
}

export function getAllProducts() {
  return productCategories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categorySlug: category.slug,
      categoryName: category.name,
    })),
  );
}
