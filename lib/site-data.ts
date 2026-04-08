export type Locale = "en" | "nl";

export type NavLink = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type Product = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  title: string;
  result: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type InspirationTile = {
  title: string;
  image: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SiteDictionary = {
  brand: {
    descriptor: string;
    contact: string;
    email: string;
    phone: string;
    phoneHref: string;
    viewCollection: string;
    requestCatalog: string;
    orderSample: string;
    discussProject: string;
    talkToTeam: string;
    contactUs: string;
    exploreProducts: string;
    ourProcess: string;
    trustedPositioning: string;
    builtToFeelEstablished: string;
    discoverCollections: string;
    topBanner: string;
    english: string;
    dutch: string;
    craftedSince: string;
  };
  navigationLinks: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    imageEyebrow: string;
    imageDescription: string;
    highlights: { title: string; description: string }[];
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureCard[];
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    certificationEyebrow: string;
    certificationTitle: string;
    productionEyebrow: string;
    productionTitle: string;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    preview: string;
    items: Product[];
  };
  socialProof: {
    eyebrow: string;
    title: string;
    description: string;
    stats: Stat[];
    partners: string[];
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    description: string;
    label: string;
    items: CaseStudy[];
  };
  inspiration: {
    eyebrow: string;
    title: string;
    description: string;
    items: InspirationTile[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: Testimonial[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabel: string;
    items: ProcessStep[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    footer: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FAQ[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    formTitle: string;
    formDescription: string;
    openForm: string;
    closeForm: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    };
  };
    footer: {
      description: string;
      contactTitle: string;
      exploreTitle: string;
      address1: string;
      address2: string;
      address3: string;
    };
  };

export const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    brand: {
      descriptor: "Leather & Equestrian Goods",
      contact: "Contact",
      email: "info@cavaleer.nl",
      phone: "0686054620",
      phoneHref: "tel:0686054620",
      viewCollection: "View Collection",
      requestCatalog: "Request Catalog",
      orderSample: "Order a Sample",
      discussProject: "Discuss a Custom Project",
      talkToTeam: "Talk to Our Team",
      contactUs: "Contact Us",
      exploreProducts: "Explore Products",
      ourProcess: "Our Process",
      trustedPositioning: "Trusted positioning",
      builtToFeelEstablished: "Built to feel established from the first screen",
      discoverCollections: "Discover the collections",
      topBanner:
        "Bio-inspired finishes, heritage leather feel, and custom-ready collections.",
      english: "EN",
      dutch: "NL",
      craftedSince: "Leather since 1978",
    },
    navigationLinks: [
      { label: "Collections", href: "#products" },
      { label: "About", href: "#solution" },
      { label: "Craft", href: "#case-studies" },
      { label: "Inspiration", href: "#inspiration" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "Leather since 1978",
      title:
        "Premium leather collections for equestrian brands, riders, and refined retail spaces.",
      description:
        "Cavaleer brings together saddles, bridles, leather accessories, and custom-developed goods with the heritage confidence, clean presentation, and material-led storytelling that premium buyers expect.",
      imageEyebrow: "Heritage craftsmanship",
      imageDescription:
        "A product-first presentation shaped for modern luxury buyers, with heritage cues and clean, confident merchandising.",
      highlights: [
        {
          title: "Collection-led",
          description: "Clear product families for easier browsing and inquiry.",
        },
        {
          title: "Responsible quality",
          description: "Material and finishing choices aligned with longevity.",
        },
        {
          title: "Selective capacity",
          description: "Limited handcrafted and custom production windows.",
        },
      ],
    },
    problem: {
      eyebrow: "Why buyers switch",
      title: "Premium buyers are tired of leather goods that feel disposable.",
      description:
        "Too much of the market looks polished at first glance but breaks down where serious use matters most.",
      items: [
        {
          title: "Mass-produced leather loses shape fast",
          description:
            "Standard market options crack, stretch, and wear unevenly under daily riding demands.",
        },
        {
          title: "Performance gear fails under pressure",
          description:
            "Poor stitching and low-grade fittings compromise comfort, safety, and rider confidence.",
        },
        {
          title: "Generic products ignore the rider's standard",
          description:
            "Professionals and serious enthusiasts need precision, heritage workmanship, and consistent finish.",
        },
      ],
    },
    solution: {
      eyebrow: "About us",
      title: "Leather expertise, refined finishing, and responsible production standards.",
      description:
        "An editorial about section centered on heritage, sustainability, and credibility without sacrificing the premium tone.",
      items: [
        "More than four decades of leather expertise shaped into refined equestrian and lifestyle collections.",
        "Environmentally responsible material sourcing and finishing standards that support premium positioning.",
        "Custom-ready production for riders, retailers, private labels, and heritage collaborations worldwide.",
      ],
      certificationEyebrow: "Certification cue",
      certificationTitle: "Leather Working Group aligned sourcing mindset",
      productionEyebrow: "Production note",
      productionTitle:
        "Built for premium wholesale, custom projects, and selective retail.",
    },
    products: {
      eyebrow: "Collections",
      title: "Explore the leather families shaping the Cavaleer portfolio.",
      description:
        "Collection-led browsing keeps the portfolio easy to scan while giving every category room to feel premium and distinct.",
      preview: "Preview",
      items: [
        {
          title: "Performance Saddles",
          description:
            "Balanced silhouettes with secure seat architecture and enduring leather finish.",
          image: "/images/product-saddle.svg",
          tag: "Precision-built",
        },
        {
          title: "Competition Bridles",
          description:
            "Supple, polished bridles designed for comfort, presentation, and daily resilience.",
          image: "/images/product-bridle.svg",
          tag: "Refined control",
        },
        {
          title: "Leather Accessories",
          description:
            "Belts, reins, halters, and premium accents that elevate every touchpoint of the tack room.",
          image: "/images/product-accessories.svg",
          tag: "Signature details",
        },
        {
          title: "Custom Goods",
          description:
            "Made-to-spec leatherwork for private labels, teams, luxury retailers, and bespoke commissions.",
          image: "/images/product-custom.svg",
          tag: "Tailored projects",
        },
      ],
    },
    socialProof: {
      eyebrow: "Trusted globally",
      title: "Heritage signals that make premium leather feel credible.",
      description:
        "This area reinforces longevity, international reach, and partner confidence. It helps visitors trust the business before they ever request a sample or quote.",
      stats: [
        { value: "1978", label: "Leather expertise since" },
        { value: "3,400+", label: "Orders delivered" },
        { value: "27", label: "Countries shipped to" },
        { value: "LWG", label: "Trader aligned standards" },
      ],
      partners: [
        "Windsor Stables",
        "Northline Equestrian",
        "Atelier Tack",
        "Rider's Guild",
        "Cordoba House",
        "Vera Studio",
      ],
    },
    caseStudies: {
      eyebrow: "Craft and standards",
      title: "The principles behind every Cavaleer collection.",
      description:
        "Three concise pillars communicate how Cavaleer thinks about finishing, sustainability, and innovation.",
      label: "Craft note",
      items: [
        {
          title: "Unique Finishing Process",
          result:
            "Refined over decades to produce distinctive leather with a premium hand feel.",
          description:
            "Every collection is shaped by careful finishing, polished hardware choices, and detail-led inspection so the final product feels elevated from first touch.",
        },
        {
          title: "Sustainability and Certifications",
          result:
            "Built around responsible sourcing, practical longevity, and trusted production standards.",
          description:
            "Our material choices and workshop discipline support buyers who want craftsmanship, environmental awareness, and quality consistency in the same order.",
        },
        {
          title: "Innovation and Continuity",
          result:
            "Tradition-led manufacturing with modern product thinking for contemporary buyers.",
          description:
            "Cavaleer blends heritage aesthetics with updated silhouettes, dependable fulfillment, and product development that keeps collections commercially relevant.",
        },
      ],
    },
    inspiration: {
      eyebrow: "Inspiration",
      title: "Textures, tones, and equestrian settings that shape the collection direction.",
      description:
        "A gallery-led section that brings together material mood, equestrian context, and luxury presentation.",
      items: [
        { title: "Tack Room Materials", image: "/images/inspiration-materials.svg" },
        { title: "Show Ring Presentation", image: "/images/inspiration-rider.svg" },
        { title: "Curated Leather Finishes", image: "/images/inspiration-finishes.svg" },
        { title: "Retail Display Storytelling", image: "/images/inspiration-display.svg" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What trusted buyers say after switching to Cavaleer.",
      description:
        "Carefully chosen words from buyers and trade partners reinforce the premium promise with human credibility.",
      items: [
        {
          quote:
            "The finish, structure, and feel are exactly what our clients expect from premium tack. It looks exceptional and performs even better.",
          name: "Elena Voss",
          role: "Retail Buyer, Northline Equestrian",
        },
        {
          quote:
            "Our bridles hold up beautifully through training and competition. You can see the difference in the leather from day one.",
          name: "Marcus Hale",
          role: "Head Trainer, Windsor Stables",
        },
        {
          quote:
            "We needed custom leather goods with a luxury standard, and the team delivered with consistency, speed, and craftsmanship.",
          name: "Sana Idris",
          role: "Brand Director, Atelier Tack",
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From design brief to delivered leather goods, every step is intentional.",
      description:
        "A clear process lowers buying friction and makes bespoke or trade orders feel dependable from first conversation to delivery.",
      stepLabel: "Step",
      items: [
        {
          title: "Design",
          description:
            "We align on product purpose, rider expectations, finish, and fit requirements.",
        },
        {
          title: "Craft",
          description:
            "Our workshop shapes, stitches, and assembles every piece with premium materials and exacting control.",
        },
        {
          title: "Quality Check",
          description:
            "Each item is inspected for finish, structure, hardware integrity, and consistency before release.",
        },
        {
          title: "Delivery",
          description:
            "Orders are packed for retail presentation or bulk fulfillment and shipped with care worldwide.",
        },
      ],
    },
    benefits: {
      eyebrow: "Why it converts",
      title: "Benefits that matter long after the first impression.",
      description:
        "This section turns features into outcomes buyers care about: performance, longevity, presentation, and value.",
      items: [
        "Durability that stands up to daily riding, training, and travel.",
        "Premium feel that reinforces a high-end customer and rider experience.",
        "Professional-grade performance with comfort, balance, and dependable structure.",
        "Long-term value from craftsmanship that reduces replacement frequency.",
      ],
      footer:
        "Carefully built leather goods reduce compromise at every stage, from merchandising and gifting to daily riding and professional presentation.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Answers for buyers planning their next premium leather order.",
      description:
        "A concise FAQ removes hesitation, addresses quality expectations, and supports faster purchase decisions.",
      items: [
        {
          question: "Do you offer product customization?",
          answer:
            "Yes. We produce custom leather goods for private labels, stables, teams, and special commissions, including finish, hardware, and branding options.",
        },
        {
          question: "What materials do you use?",
          answer:
            "We focus on premium leather selections and durable hardware chosen for longevity, appearance, and equestrian performance.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes. We ship worldwide and support both boutique retail orders and larger trade fulfillment requirements.",
        },
        {
          question: "How durable are the products?",
          answer:
            "Our products are designed for long-term use under regular riding conditions, with special attention to stitching, structure, and finish retention.",
        },
        {
          question: "Is capacity limited for handcrafted orders?",
          answer:
            "Yes. Production is intentionally selective to maintain quality, so custom slots and seasonal runs can fill quickly.",
        },
      ],
    },
    cta: {
      eyebrow: "Limited production capacity",
      title: "Upgrade to premium craftsmanship before the next production window closes.",
      description:
        "Whether you need a curated collection, a custom leather brief, or a reliable partner for equestrian accessories, Cavaleer is built to help your products feel exceptional from first look to long-term use.",
      formTitle: "Send us your inquiry",
      formDescription:
        "Share your details and what you are looking for. We will receive it directly at info@cavaleer.nl.",
      openForm: "Contact Us",
      closeForm: "Close Form",
      submit: "Send Inquiry",
      sending: "Sending...",
      success:
        "Your inquiry has been sent successfully. We will get back to you soon.",
      error:
        "Something went wrong while sending your inquiry. Please try again in a moment.",
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
      },
      placeholders: {
        name: "Your full name",
        email: "you@example.com",
        phone: "Your phone number",
        company: "Company or stable name",
        message: "Tell us about your request, product interest, or customization needs",
      },
    },
    footer: {
      description:
        "Premium leather goods and equestrian accessories inspired by heritage craftsmanship, modern collection design, and selective production quality.",
      contactTitle: "Contact us",
      exploreTitle: "Explore",
      address1: "Zevenbladstraat 23",
      address2: "6841KV Arnhem",
      address3: "The Netherlands",
    },
  },
  nl: {
    brand: {
      descriptor: "Leder- en ruitersportproducten",
      contact: "Contact",
      email: "info@cavaleer.nl",
      phone: "0686054620",
      phoneHref: "tel:0686054620",
      viewCollection: "Bekijk collectie",
      requestCatalog: "Catalogus aanvragen",
      orderSample: "Sample aanvragen",
      discussProject: "Bespreek maatwerk",
      talkToTeam: "Praat met ons team",
      contactUs: "Neem contact op",
      exploreProducts: "Ontdek producten",
      ourProcess: "Ons proces",
      trustedPositioning: "Vertrouwde positionering",
      builtToFeelEstablished: "Ontworpen om vanaf het eerste scherm vertrouwen te geven",
      discoverCollections: "Ontdek de collecties",
      topBanner:
        "Bio-geinspireerde finishes, een heritage ledergevoel en collecties klaar voor maatwerk.",
      english: "EN",
      dutch: "NL",
      craftedSince: "Leder sinds 1978",
    },
    navigationLinks: [
      { label: "Collecties", href: "#products" },
      { label: "Over ons", href: "#solution" },
      { label: "Vakmanschap", href: "#case-studies" },
      { label: "Inspiratie", href: "#inspiration" },
      { label: "Reviews", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "Leder sinds 1978",
      title:
        "Premium ledercollecties voor ruitersportmerken, ruiters en verfijnde retailomgevingen.",
      description:
        "Cavaleer brengt zadels, hoofdstellen, lederen accessoires en maatwerk samen met heritage-uitstraling, heldere presentatie en materiaalgedreven storytelling die premium kopers verwachten.",
      imageEyebrow: "Heritage vakmanschap",
      imageDescription:
        "Een productgerichte presentatie voor moderne luxekopers, met heritage details en zelfverzekerde merchandising.",
      highlights: [
        {
          title: "Collectiegericht",
          description: "Duidelijke productfamilies voor eenvoudiger browsen en aanvragen.",
        },
        {
          title: "Verantwoorde kwaliteit",
          description: "Materiaal- en finishkeuzes gericht op levensduur.",
        },
        {
          title: "Selectieve capaciteit",
          description: "Beperkte vensters voor handwerk en maatwerkproductie.",
        },
      ],
    },
    problem: {
      eyebrow: "Waarom kopers overstappen",
      title: "Premium kopers zijn klaar met lederwaren die wegwerpbaar aanvoelen.",
      description:
        "Te veel producten ogen bij de eerste indruk goed, maar vallen door de mand zodra intensief gebruik telt.",
      items: [
        {
          title: "Massaproductie verliest snel zijn vorm",
          description:
            "Standaard marktproducten scheuren, rekken uit en slijten ongelijkmatig bij dagelijks gebruik.",
        },
        {
          title: "Prestatiegerichte uitrusting schiet tekort",
          description:
            "Zwak stikwerk en inferieure fournituren beïnvloeden comfort, veiligheid en vertrouwen.",
        },
        {
          title: "Generieke producten missen de juiste standaard",
          description:
            "Professionals en serieuze liefhebbers vragen om precisie, heritage vakmanschap en consistente afwerking.",
        },
      ],
    },
    solution: {
      eyebrow: "Over ons",
      title: "Lederexpertise, verfijnde afwerking en verantwoorde productiestandaarden.",
      description:
        "Een redactioneel opgebouwd over-ons blok met heritage, duurzaamheid en geloofwaardigheid in een premium uitstraling.",
      items: [
        "Meer dan vier decennia lederervaring vertaald naar verfijnde ruitersport- en lifestylecollecties.",
        "Verantwoord materiaalgebruik en afwerkingsstandaarden die premium positionering ondersteunen.",
        "Productie gereed voor ruiters, retailers, private labels en heritage samenwerkingen wereldwijd.",
      ],
      certificationEyebrow: "Certificering",
      certificationTitle: "Leather Working Group georienteerde sourcingaanpak",
      productionEyebrow: "Productie",
      productionTitle: "Gemaakt voor premium wholesale, maatwerkprojecten en selectieve retail.",
    },
    products: {
      eyebrow: "Collecties",
      title: "Ontdek de lederfamilies die het Cavaleer portfolio vormen.",
      description:
        "Een collectiegerichte opbouw maakt het portfolio eenvoudig scanbaar en geeft elke categorie een premium uitstraling.",
      preview: "Preview",
      items: [
        {
          title: "Prestatiezadels",
          description:
            "Gebalanceerde silhouetten met zekere zitarchitectuur en duurzame lederen afwerking.",
          image: "/images/product-saddle.svg",
          tag: "Precisie gebouwd",
        },
        {
          title: "Wedstrijdhoofdstellen",
          description:
            "Soepele, verfijnde hoofdstellen ontworpen voor comfort, presentatie en dagelijkse veerkracht.",
          image: "/images/product-bridle.svg",
          tag: "Verfijnde controle",
        },
        {
          title: "Lederen accessoires",
          description:
            "Riemen, teugels, halsters en premium details die elke plek in de zadelkamer versterken.",
          image: "/images/product-accessories.svg",
          tag: "Signature details",
        },
        {
          title: "Maatwerk",
          description:
            "Op specificatie gemaakt lederwerk voor private labels, teams, luxe retailers en bespoke opdrachten.",
          image: "/images/product-custom.svg",
          tag: "Op maat",
        },
      ],
    },
    socialProof: {
      eyebrow: "Wereldwijd vertrouwd",
      title: "Heritage signalen die premium leder geloofwaardig maken.",
      description:
        "Dit blok benadrukt continuiteit, internationale reikwijdte en partnervertrouwen. Het helpt bezoekers vertrouwen te krijgen voordat zij een sample of offerte aanvragen.",
      stats: [
        { value: "1978", label: "Lederexpertise sinds" },
        { value: "3,400+", label: "Bestellingen geleverd" },
        { value: "27", label: "Landen beleverd" },
        { value: "LWG", label: "Trader aligned standaarden" },
      ],
      partners: [
        "Windsor Stables",
        "Northline Equestrian",
        "Atelier Tack",
        "Rider's Guild",
        "Cordoba House",
        "Vera Studio",
      ],
    },
    caseStudies: {
      eyebrow: "Vakmanschap en standaarden",
      title: "De principes achter elke Cavaleer collectie.",
      description:
        "Drie compacte pijlers laten zien hoe Cavaleer denkt over afwerking, duurzaamheid en innovatie.",
      label: "Vakmanschap",
      items: [
        {
          title: "Uniek afwerkingsproces",
          result:
            "Door decennia verfijnd om onderscheidend leder met een premium handgevoel te leveren.",
          description:
            "Elke collectie wordt gevormd door zorgvuldige afwerking, verfijnde hardwarekeuzes en detailgerichte inspectie zodat het eindproduct vanaf de eerste aanraking verheven voelt.",
        },
        {
          title: "Duurzaamheid en certificeringen",
          result:
            "Gebouwd rond verantwoorde sourcing, praktische levensduur en vertrouwde productiestandaarden.",
          description:
            "Onze materiaalkeuzes en werkplaatsdiscipline ondersteunen kopers die vakmanschap, milieubewustzijn en kwaliteitsconsistentie in dezelfde order zoeken.",
        },
        {
          title: "Innovatie en continuiteit",
          result:
            "Traditiegedreven productie met modern productdenken voor hedendaagse kopers.",
          description:
            "Cavaleer combineert heritage esthetiek met vernieuwde silhouetten, betrouwbare fulfilment en productontwikkeling die collecties commercieel relevant houdt.",
        },
      ],
    },
    inspiration: {
      eyebrow: "Inspiratie",
      title: "Texturen, tinten en ruitersportsettings die de collectierichting bepalen.",
      description:
        "Een galerijgedreven sectie die materiaalgevoel, ruitersportcontext en luxe presentatie samenbrengt.",
      items: [
        { title: "Materialen voor de zadelkamer", image: "/images/inspiration-materials.svg" },
        { title: "Presentatie in de wedstrijdring", image: "/images/inspiration-rider.svg" },
        { title: "Gecureerde lederafwerkingen", image: "/images/inspiration-finishes.svg" },
        { title: "Storytelling in retail displays", image: "/images/inspiration-display.svg" },
      ],
    },
    testimonials: {
      eyebrow: "Reviews",
      title: "Wat vertrouwde kopers zeggen nadat zij voor Cavaleer kozen.",
      description:
        "Zorgvuldig gekozen woorden van kopers en handelspartners versterken de premium belofte met menselijke geloofwaardigheid.",
      items: [
        {
          quote:
            "De afwerking, structuur en uitstraling zijn precies wat onze klanten verwachten van premium tuigleer. Het ziet er uitzonderlijk uit en presteert nog beter.",
          name: "Elena Voss",
          role: "Retail Buyer, Northline Equestrian",
        },
        {
          quote:
            "Onze hoofdstellen blijven prachtig in training en competitie. Je ziet vanaf dag een het verschil in het leder.",
          name: "Marcus Hale",
          role: "Head Trainer, Windsor Stables",
        },
        {
          quote:
            "We zochten maatwerk lederwaren met een luxestandaard, en het team leverde met consistentie, snelheid en vakmanschap.",
          name: "Sana Idris",
          role: "Brand Director, Atelier Tack",
        },
      ],
    },
    process: {
      eyebrow: "Hoe het werkt",
      title: "Van designbrief tot geleverde lederwaren is elke stap bewust ingericht.",
      description:
        "Een helder proces verlaagt aankoopfrictie en maakt bespoke- of handelsorders betrouwbaar vanaf het eerste gesprek tot de levering.",
      stepLabel: "Stap",
      items: [
        {
          title: "Ontwerp",
          description:
            "We stemmen productdoel, ruiterverwachtingen, afwerking en pasvorm af.",
        },
        {
          title: "Vervaardiging",
          description:
            "Onze werkplaats vormt, stikt en assembleert elk stuk met premium materialen en nauwkeurige controle.",
        },
        {
          title: "Kwaliteitscontrole",
          description:
            "Elk item wordt gecontroleerd op afwerking, structuur, hardware en consistentie voordat het wordt vrijgegeven.",
        },
        {
          title: "Levering",
          description:
            "Bestellingen worden verpakt voor retailpresentatie of bulkfulfilment en zorgvuldig wereldwijd verzonden.",
        },
      ],
    },
    benefits: {
      eyebrow: "Waarom dit converteert",
      title: "Voordelen die tellen lang na de eerste indruk.",
      description:
        "Deze sectie vertaalt eigenschappen naar resultaten die kopers belangrijk vinden: performance, levensduur, presentatie en waarde.",
      items: [
        "Duurzaamheid die bestand is tegen dagelijks rijden, training en transport.",
        "Een premium gevoel dat de klantervaring en merkuitstraling versterkt.",
        "Professionele performance met comfort, balans en betrouwbare structuur.",
        "Langetermijnwaarde door vakmanschap dat vervanging minder vaak nodig maakt.",
      ],
      footer:
        "Zorgvuldig gemaakte lederwaren verminderen compromissen op elk moment, van merchandising en gifting tot dagelijks rijden en professionele presentatie.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Antwoorden voor kopers die hun volgende premium lederorder plannen.",
      description:
        "Een beknopte FAQ neemt twijfel weg, adresseert kwaliteitsverwachtingen en ondersteunt snellere aankoopbeslissingen.",
      items: [
        {
          question: "Bieden jullie productmaatwerk aan?",
          answer:
            "Ja. We produceren maatwerk lederwaren voor private labels, stallen, teams en speciale opdrachten, inclusief afwerking, hardware en brandingopties.",
        },
        {
          question: "Welke materialen gebruiken jullie?",
          answer:
            "We focussen op premium lederselecties en duurzame hardware gekozen voor levensduur, uitstraling en ruitersportprestaties.",
        },
        {
          question: "Verzenden jullie internationaal?",
          answer:
            "Ja. We verzenden wereldwijd en ondersteunen zowel boutique retailorders als grotere handelsfulfilment.",
        },
        {
          question: "Hoe duurzaam zijn de producten?",
          answer:
            "Onze producten zijn ontworpen voor langdurig gebruik onder reguliere rijomstandigheden, met extra aandacht voor stikwerk, structuur en afwerkingsbehoud.",
        },
        {
          question: "Is de capaciteit voor handwerk beperkt?",
          answer:
            "Ja. De productie blijft bewust selectief om kwaliteit te waarborgen, waardoor maatwerkslots en seizoensruns snel vol kunnen raken.",
        },
      ],
    },
    cta: {
      eyebrow: "Beperkte productiecapaciteit",
      title: "Upgrade naar premium vakmanschap voordat het volgende productievenster sluit.",
      description:
        "Of je nu een gecureerde collectie, een maatwerkbriefing of een betrouwbare partner voor ruitersportaccessoires nodig hebt, Cavaleer helpt je producten uitzonderlijk te laten voelen vanaf de eerste indruk tot langdurig gebruik.",
      formTitle: "Stuur ons je aanvraag",
      formDescription:
        "Deel je gegevens en je vraag. Wij ontvangen dit direct op info@cavaleer.nl.",
      openForm: "Neem contact op",
      closeForm: "Sluit formulier",
      submit: "Verstuur aanvraag",
      sending: "Verzenden...",
      success:
        "Je aanvraag is succesvol verzonden. We nemen snel contact met je op.",
      error:
        "Er ging iets mis bij het verzenden van je aanvraag. Probeer het zo opnieuw.",
      fields: {
        name: "Naam",
        email: "E-mail",
        phone: "Telefoon",
        company: "Bedrijf",
        message: "Bericht",
      },
      placeholders: {
        name: "Je volledige naam",
        email: "jij@example.com",
        phone: "Je telefoonnummer",
        company: "Bedrijfs- of stalnaam",
        message: "Vertel ons over je aanvraag, productinteresse of maatwerkbehoefte",
      },
    },
    footer: {
      description:
        "Premium lederwaren en ruitersportaccessoires geinspireerd door heritage vakmanschap, moderne collectie-opbouw en selectieve productiekwaliteit.",
      contactTitle: "Contact",
      exploreTitle: "Ontdek",
      address1: "Zevenbladstraat 23",
      address2: "6841KV Arnhem",
      address3: "Nederland",
    },
  },
};
