import type { WingfoilProduct } from '~/types'

export const products: WingfoilProduct[] = [
  // === PUBLISHED: COMPLETE SETS (Decathlon) ===
  {
    id: 'talaia-notos-air-smooth-foil-wing-set',
    slug: 'talaia-notos-air-smooth-foil-wing-set',
    name: 'Talaia Notos Air Board + Smooth Foil + 5 m² Wing + Pumpe',
    shortName: 'Talaia Wingfoil Komplettset',
    brand: 'Talaia / RRD',
    productType: 'complete-set',
    description: 'Das Talaia Notos Air Komplettset kombiniert ein aufblasbares 130-Liter-Board mit einem Carbon-Foil und einem 5-m²-Wing. Das Set richtet sich an Einsteiger und fortgeschrittene Fahrer, die ein vollständiges, aufeinander abgestimmtes Setup suchen. Besonders der inkludierte Wing mit großen Sichtfenstern und die drei langen Griffe erleichtern den Einstieg.',
    shortDescription: 'Vollständiges, aufeinander abgestimmtes Set für Einsteiger mit aufblasbarem 130-L-Board, Carbon-Foil und 5-m²-Wing.',
    image: 'https://contents.mediadecathlon.com/m36379922/k$56e986e5617f07ed08f6c23324eaa4e1/picture.jpg',
    imageAlt: 'Talaia Notos Air Wingfoil Komplettset mit Board, Foil, Wing und Pumpe',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Kompaktes Komplettset für Anfänger',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 130,
      length: "5'10",
      pressurePsi: 15,
      carbonPlate: true
    },
    wing: {
      sizeSquareMetres: 5,
      handles: '3 lange Griffe',
      windows: true
    },
    foil: {
      mastMaterial: 'Aluminium',
      frontWingMaterial: 'Carbon'
    },
    included: {
      board: true,
      wing: true,
      foil: true,
      pump: true,
      wingLeash: true,
      tools: true,
      bag: true
    },
    advantages: [
      'Vollständiges und aufeinander abgestimmtes Set',
      'Aufblasbares Board mit kleinem Packmaß',
      'Stabiles Foil mit Entwicklungspotenzial',
      'Wing mit großen Sichtfenstern'
    ],
    disadvantages: [
      'Marketplace-Angebot eines externen Verkäufers',
      'Aufblasbares Board bietet weniger direktes Fahrgefühl als ein Hardboard',
      'Exakte Foil-Größe der gewählten Variante vor Veröffentlichung prüfen'
    ],
    suitableFor: ['Einsteiger ohne Vorerfahrung', 'Fahrer bis 90 kg', 'Kompakter Reisetransport'],
    notSuitableFor: ['Sehr schwere Fahrer über 100 kg', 'Performance-orientierte Fahrer'],
    scores: {
      beginnerFriendliness: 8,
      stability: 8,
      earlyLift: 7,
      control: 7,
      agility: 6,
      transport: 9,
      completeness: 10,
      upgradePotential: 7,
      valueForMoney: 8
    },
    offers: [{
      merchant: 'decathlon',
      productId: '7c9d6d5c-b006-4892-a14b-6572d85ef390',
      sourceUrl: 'https://www.decathlon.de/p/mp/wingfoil-set-talaia-board-smooth-foil-talaia-blade-5-m2-wing-ryde-pumpe/7c9d6d5c-b006-4892-a14b-6572d85ef390/novar',
      currentPrice: 1199,
      currency: 'EUR',
      available: true,
      seller: 'Nocika SAS',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'f2-glide-cross-air-160-set',
    slug: 'f2-glide-cross-air-160-wingfoil-set',
    name: 'F2 Glide Cross Air 160L + Foil 1700 + Wing 5 m²',
    shortName: 'F2 Glide Cross Air 160L Set',
    brand: 'F2',
    productType: 'complete-set',
    description: 'Das F2 Glide Cross Air 160L Set bietet mit seinem enormen Boardvolumen maximale Stabilität für Einsteiger und schwerere Fahrer. Das 1700-cm²-Frontwing ermöglicht frühen Lift, während der 5-m²-Wing auch bei leichterem Wind Zug erzeugt. Ideal für alle, die beim Lernen maximale Standsicherheit priorisieren.',
    shortDescription: 'Besonders stabiles Einsteiger-Set mit 160-L-Board und großem 1700-cm²-Foil für schwerere Fahrer.',
    image: 'https://contents.mediadecathlon.com/m20195897/k$a9eb7080ebfa900ef18e6579239be4af/picture.jpg',
    imageAlt: 'F2 Glide Cross Air 160 Liter Wingfoil Set',
    levels: ['beginner'],
    editorialRole: 'Besonders stabiles Set für Anfänger und schwerere Fahrer',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: { construction: 'inflatable', volumeLitres: 160 },
    wing: { sizeSquareMetres: 5, windows: true },
    foil: {
      frontWingAreaCm2: 1700,
      rearWingAreaCm2: 290,
      mastLengthCm: 85,
      mastMaterial: 'Aluminium',
      frontWingMaterial: 'Carbon',
      aspect: 'high'
    },
    included: { board: true, wing: true, foil: true },
    advantages: [
      'Sehr hohes Boardvolumen für einen stabilen Einstieg',
      '5-m²-Wing für leicht bis mittel windige Bedingungen',
      '1700-cm²-Foil mit frühem Lift',
      'Aufblasbares Board ist einfacher zu transportieren'
    ],
    disadvantages: [
      'Weniger agil als kleinere Setups',
      'Für leichte und erfahrene Fahrer möglicherweise zu voluminös',
      'Marketplace-Angebot'
    ],
    suitableFor: ['Schwere Fahrer ab 90 kg', 'Absolute Anfänger', 'Fahrer die Stabilität priorisieren'],
    notSuitableFor: ['Fortgeschrittene Fahrer', 'Leichte Fahrer unter 70 kg'],
    scores: {
      beginnerFriendliness: 9,
      stability: 10,
      earlyLift: 9,
      control: 7,
      agility: 4,
      transport: 8,
      completeness: 9,
      upgradePotential: 6,
      valueForMoney: 7
    },
    offers: [{
      merchant: 'decathlon',
      productId: 'e4063fc5-bb43-40c1-bfe2-892825cadce3',
      sourceUrl: 'https://www.decathlon.de/p/mp/f2-set-glide-cross-air-160l-ltd-allround-foil-1700-glide-allround-wing-5qm/e4063fc5-bb43-40c1-bfe2-892825cadce3/c14',
      currentPrice: 1329,
      currency: 'EUR',
      available: true,
      seller: 'F2 Fun&Function Shop',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'f2-glide-cross-air-140-set',
    slug: 'f2-glide-cross-air-140-wingfoil-set',
    name: 'F2 Glide Cross Air 140L + Foil 1700 + Wing 4 m²',
    shortName: 'F2 Glide Cross Air 140L Set',
    brand: 'F2',
    productType: 'complete-set',
    description: 'Das F2 Glide Cross Air 140L Set ist der ideale Kompromiss für Einsteiger und Aufsteiger. Mit 140 Litern Volumen bietet das Board genug Stabilität zum Lernen, ohne dabei unhandlich zu wirken. Der kleinere 4-m²-Wing eignet sich für mittlere bis starke Windverhältnisse.',
    shortDescription: 'Ausgewogenes Allround-Set für Einsteiger und Aufsteiger mit 140-L-Board und 1700-cm²-Foil.',
    image: 'https://contents.mediadecathlon.com/m20195897/k$a9eb7080ebfa900ef18e6579239be4af/picture.jpg',
    imageAlt: 'F2 Glide Cross Air 140 Liter Wingfoil Set',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Ausgewogenes Anfänger- und Allround-Set',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: { construction: 'inflatable', volumeLitres: 140 },
    wing: { sizeSquareMetres: 4, windows: true },
    foil: {
      frontWingAreaCm2: 1700,
      mastLengthCm: 85,
      mastMaterial: 'Aluminium',
      frontWingMaterial: 'Carbon',
      aspect: 'high'
    },
    included: { board: true, wing: true, foil: true },
    advantages: [
      'Guter Kompromiss aus Stabilität und Agilität',
      'Großes Foil für einen vergleichsweise frühen Take-off',
      'Kompakt lagerbares, aufblasbares Board'
    ],
    disadvantages: [
      '4-m²-Wing ist für schwere Fahrer bei wenig Wind möglicherweise klein',
      'Weniger direkt als ein Hardboard',
      'Marketplace-Angebot'
    ],
    suitableFor: ['Einsteiger von 70–95 kg', 'Fahrer die langfristig lernen wollen', 'Mittelstarke Windbedingungen 15–22 kn'],
    notSuitableFor: ['Sehr schwere Fahrer bei wenig Wind', 'Performance-Fahrer'],
    scores: {
      beginnerFriendliness: 8,
      stability: 8,
      earlyLift: 8,
      control: 7,
      agility: 6,
      transport: 8,
      completeness: 9,
      upgradePotential: 7,
      valueForMoney: 8
    },
    offers: [{
      merchant: 'decathlon',
      productId: '114218b9-bf80-4fcf-8e42-f7a9381aedc2',
      sourceUrl: 'https://www.decathlon.de/p/mp/f2-set-glide-cross-air-140l-ltd-allround-foil-1700-glide-allround-wing-4qm/114218b9-bf80-4fcf-8e42-f7a9381aedc2/c14',
      currentPrice: 1299,
      currency: 'EUR',
      available: true,
      seller: 'F2 Fun&Function Shop',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'f2-glide-cross-air-120-set',
    slug: 'f2-glide-cross-air-120-wingfoil-set',
    name: 'F2 Glide Cross Air 120L + Foil 1700 + Wing 4 m²',
    shortName: 'F2 Glide Cross Air 120L Set',
    brand: 'F2',
    productType: 'complete-set',
    description: 'Das F2 Glide Cross Air 120L Set richtet sich an fortgeschrittene Anfänger und Intermediates. Mit 120 Litern reagiert das Board spürbar direkter als die größeren Varianten. Das große 1700-cm²-Foil sorgt trotzdem für frühen, gutmütigen Lift.',
    shortDescription: 'Kompakteres Allround-Set für leichtere oder erfahrenere Fahrer mit 120-L-Board und 1700-cm²-Foil.',
    image: 'https://contents.mediadecathlon.com/m20195897/k$a9eb7080ebfa900ef18e6579239be4af/picture.jpg',
    imageAlt: 'F2 Glide Cross Air 120 Liter Wingfoil Set',
    levels: ['intermediate'],
    editorialRole: 'Kompakteres Allround-Set für leichtere oder erfahrenere Fahrer',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: { construction: 'inflatable', volumeLitres: 120 },
    wing: { sizeSquareMetres: 4, windows: true },
    foil: {
      frontWingAreaCm2: 1700,
      mastLengthCm: 85,
      mastMaterial: 'Aluminium',
      frontWingMaterial: 'Carbon',
      aspect: 'high'
    },
    included: { board: true, wing: true, foil: true },
    advantages: [
      'Agiler als die 140- und 160-Liter-Varianten',
      'Großes Foil mit frühem Lift',
      'Kompakt zu transportieren'
    ],
    disadvantages: [
      'Weniger kippstabil als größere Anfängerboards',
      'Nicht für jeden absoluten Anfänger geeignet',
      'Marketplace-Angebot'
    ],
    suitableFor: ['Leichtere Fahrer bis 75 kg', 'Fortgeschrittene Anfänger', 'Fahrer mit etwas Vorerfahrung'],
    notSuitableFor: ['Absolute Anfänger', 'Schwerere Fahrer über 90 kg'],
    scores: {
      beginnerFriendliness: 6,
      stability: 6,
      earlyLift: 8,
      control: 8,
      agility: 8,
      transport: 9,
      completeness: 9,
      upgradePotential: 8,
      valueForMoney: 8
    },
    offers: [{
      merchant: 'decathlon',
      productId: '5e83fe75-d355-4bbd-bcea-b88f7b94906b',
      sourceUrl: 'https://www.decathlon.de/p/mp/f2-set-glide-cross-air-120l-ltd-allround-foil-1700-glide-allround-wing-4qm/5e83fe75-d355-4bbd-bcea-b88f7b94906b/c14',
      currentPrice: 1299,
      currency: 'EUR',
      available: true,
      seller: 'F2 Fun&Function Shop',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'f2-glide-surf-air-120-set',
    slug: 'f2-glide-surf-air-120-wingfoil-set',
    name: 'F2 Glide Surf Air 120L + Foil 1400 + Wing 4 m²',
    shortName: 'F2 Glide Surf Air 120L Set',
    brand: 'F2',
    productType: 'complete-set',
    description: 'Das F2 Glide Surf Air 120L Set ist auf Welle, Freestyle und Downwind ausgerichtet. Das kleinere 1400-cm²-Foil reagiert präziser und ermöglicht agiles Fahren. Das kompakte Board und der 4-m²-Wing erzeugen ein schnelles, direktes Fahrgefühl für technisch versierte Fahrer.',
    shortDescription: 'Agiles Performance-Set für Welle und Freestyle mit 120-L-Board und 1400-cm²-Foil.',
    image: 'https://contents.mediadecathlon.com/m20195913/k$a895fd226cd932954207ee1443a4d956/picture.jpg',
    imageAlt: 'F2 Glide Surf Air 120 Liter Wingfoil Set',
    levels: ['intermediate', 'performance'],
    editorialRole: 'Performance-Empfehlung für Welle und Freestyle',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: { construction: 'inflatable', volumeLitres: 120 },
    wing: { sizeSquareMetres: 4, windows: true },
    foil: {
      frontWingAreaCm2: 1400,
      frontWingMaterial: 'Carbon',
      aspect: 'high'
    },
    included: { board: true, wing: true, foil: true },
    advantages: [
      'Kompakter und agiler Shape',
      'Kleineres 1400-cm²-Foil für präzisere Steuerung',
      'Für Welle, Freestyle und Downwind ausgerichtet',
      'Aufblasbar und transportfreundlich'
    ],
    disadvantages: [
      'Weniger stabil für absolute Anfänger',
      'Benötigt mehr Technik als ein großes Anfänger-Setup',
      'Marketplace-Angebot'
    ],
    suitableFor: ['Fortgeschrittene und Performance-Fahrer', 'Wellenreiten und Freestyle', 'Fahrer bis 85 kg'],
    notSuitableFor: ['Absolute Anfänger', 'Fahrer die Stabilität priorisieren'],
    scores: {
      beginnerFriendliness: 4,
      stability: 5,
      earlyLift: 7,
      control: 9,
      agility: 9,
      transport: 9,
      completeness: 9,
      upgradePotential: 9,
      valueForMoney: 8
    },
    offers: [{
      merchant: 'decathlon',
      productId: '9457030a-82ac-4ca7-ab32-1973df63936d',
      sourceUrl: 'https://www.decathlon.de/p/mp/f2-set-glide-surf-air-120l-ltd-allround-foil-1400-glide-allround-wing-4qm/9457030a-82ac-4ca7-ab32-1973df63936d/c238',
      currentPrice: 1299,
      currency: 'EUR',
      available: true,
      seller: 'F2 Fun&Function Shop',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  // === PUBLISHED: BOARDS (Decathlon) ===
  {
    id: 'hana-premium-150-board-pack',
    slug: 'hana-premium-150-wingfoil-board',
    name: 'HANA Premium 150L Wingfoil Board mit Leash',
    shortName: 'HANA Premium 150L',
    brand: 'HANA Outdoors',
    productType: 'board-pack',
    description: 'Das HANA Premium 150L Board bietet mit 150 Litern Volumen und Fusion-Stitch-Konstruktion maximale Stabilität für Einsteiger. Die große Carbonplatte sorgt für ausreichend Steifigkeit trotz aufblasbarer Bauweise. Im Set enthalten ist eine Board-Leash.',
    shortDescription: 'Besonders stabiles aufblasbares Anfängerboard mit 150 L, Carbonplatte und Leash.',
    image: 'https://contents.mediadecathlon.com/m30057782/k$31e5ad822e25788b4f29ace4037c4fda/picture.jpg',
    imageAlt: 'HANA Premium 150 Liter aufblasbares Wingfoil Board mit Leash',
    levels: ['beginner'],
    editorialRole: 'Besonders stabiles aufblasbares Anfängerboard',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 150,
      length: "6'3",
      width: '29 Zoll',
      carbonPlate: true
    },
    included: { board: true, boardLeash: true },
    advantages: [
      '150 Liter Volumen für hohe Stabilität',
      'Fusion-Stitch-Konstruktion',
      'Große Carbonplatte',
      'Leash im Lieferumfang',
      'Kompakt lagerbar'
    ],
    disadvantages: [
      'Weniger agil als kleinere Boards',
      'Marketplace-Angebot',
      'Gewicht und vollständiger Lieferumfang vor Veröffentlichung prüfen'
    ],
    suitableFor: ['Einsteiger', 'Fahrer bis 100 kg', 'Kompakter Transport'],
    notSuitableFor: ['Fortgeschrittene die Agilität suchen'],
    scores: {
      beginnerFriendliness: 9,
      stability: 10,
      transport: 9,
      agility: 4,
      valueForMoney: 9
    },
    offers: [{
      merchant: 'decathlon',
      productId: '504e9065-3591-4ca1-a713-5e13596303ce',
      sourceUrl: 'https://www.decathlon.de/p/mp/pack-wingfoil-board-6-3-x-29-x-5-150l-mit-leash-l-xl/504e9065-3591-4ca1-a713-5e13596303ce/novar',
      currentPrice: 359.99,
      originalPrice: 749.99,
      currency: 'EUR',
      available: true,
      seller: 'HANA Outdoors',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'hana-premium-130-board-pack',
    slug: 'hana-premium-130-wingfoil-board',
    name: 'HANA Premium 130L Wingfoil Board mit Leash',
    shortName: 'HANA Premium 130L',
    brand: 'HANA Outdoors',
    productType: 'board-pack',
    description: 'Das HANA Premium 130L Board bietet einen guten Kompromiss aus Stabilität und Wendigkeit. Mit 130 Litern, Fusion-Stitch-Konstruktion und Carbonplatte ist es für Einsteiger und frühe Intermediates geeignet. Inklusive Leash.',
    shortDescription: 'Kompakteres aufblasbares Board mit 130 L und Carbonplatte – Balance aus Stabilität und Wendigkeit.',
    image: 'https://contents.mediadecathlon.com/m33556528/k$009bf4b04cd9ff5749856132bf3cd437/picture.jpg',
    imageAlt: 'HANA Premium 130 Liter aufblasbares Wingfoil Board mit Leash',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Kompakteres aufblasbares Anfängerboard',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 130,
      length: "5'8",
      width: '26,5 Zoll',
      carbonPlate: true
    },
    included: { board: true, boardLeash: true },
    advantages: [
      'Guter Kompromiss aus Stabilität und Wendigkeit',
      'Fusion-Stitch-Konstruktion',
      'Große Carbonplatte',
      'Leash enthalten',
      'Kleines Packmaß'
    ],
    disadvantages: [
      'Weniger stabil als das 150-Liter-Modell',
      'Nicht für jeden schweren Anfänger optimal',
      'Marketplace-Angebot'
    ],
    suitableFor: ['Einsteiger und frühe Intermediates', 'Fahrer bis 85 kg', 'Kompakter Transport'],
    notSuitableFor: ['Schwere Fahrer über 95 kg als Erstboard'],
    scores: {
      beginnerFriendliness: 7,
      stability: 8,
      transport: 9,
      agility: 6,
      valueForMoney: 9
    },
    offers: [{
      merchant: 'decathlon',
      productId: '33914cea-21c6-4d01-a763-7f14ce84e590',
      sourceUrl: 'https://www.decathlon.de/p/mp/pack-wingfoil-board-5-8-x-26-1-2-x-5-130l-mit-leash-l-xl/33914cea-21c6-4d01-a763-7f14ce84e590/novar',
      currentPrice: 359.99,
      originalPrice: 699.99,
      currency: 'EUR',
      available: true,
      seller: 'HANA Outdoors',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'hana-premium-150-board',
    slug: 'hana-premium-150-board-ohne-leash',
    name: 'HANA Premium 150L Wingfoil Board',
    shortName: 'HANA Premium 150L Board',
    brand: 'HANA Outdoors',
    productType: 'board',
    description: 'Das HANA Premium 150L Board ohne Leash. Gleiche Konstruktion und Carbonplatte wie das Set mit Leash – aktuell zu einem etwas höheren Preis.',
    shortDescription: 'Stabiles aufblasbares 150-L-Board mit Carbonplatte – ohne Leash.',
    image: 'https://contents.mediadecathlon.com/m33558991/k$62e6330b1f950e8f66e0d2e828abb093/picture.jpg',
    imageAlt: 'HANA Premium 150 Liter aufblasbares Wingfoil Board',
    levels: ['beginner'],
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 150,
      length: "6'3",
      width: '29 Zoll',
      carbonPlate: true
    },
    included: { board: true, boardLeash: false },
    advantages: [
      'Sehr stabiles Anfängerboard',
      'Fusion-Stitch-Konstruktion',
      'Carbonplatte',
      'Platzsparender Transport'
    ],
    disadvantages: [
      'Aktuell teurer als das Angebot mit Leash',
      'Weniger agil als kleinere Boards',
      'Marketplace-Angebot'
    ],
    suitableFor: ['Einsteiger', 'Fahrer die eigene Leash bereits besitzen'],
    notSuitableFor: ['Fortgeschrittene die Agilität suchen'],
    scores: {
      beginnerFriendliness: 9,
      stability: 10,
      transport: 9,
      agility: 4,
      valueForMoney: 7
    },
    offers: [{
      merchant: 'decathlon',
      productId: 'bb441f7a-b1bc-4c9a-9ac7-29a1a6ec2b44',
      sourceUrl: 'https://www.decathlon.de/p/mp/wingfoil-board-6-3-x-29-x-5-150l/bb441f7a-b1bc-4c9a-9ac7-29a1a6ec2b44/novar',
      currentPrice: 369.99,
      originalPrice: 749.99,
      currency: 'EUR',
      available: true,
      seller: 'HANA Outdoors',
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },

  // === PUBLISHED: AMAZON SETS & PACKAGES ===
  {
    id: 'wingguru-full-set-b0d8hd7zkz',
    slug: 'wingguru-wingsurf-set-140l-110l',
    name: 'Wingguru Wingsurf-Set mit 5 m² Wing und 110L/140L Board',
    shortName: 'Wingguru Wingsurf-Set',
    brand: 'Wingguru',
    productType: 'complete-set',
    description: 'Das Wingguru-Angebot kombiniert einen 5-m²-Wing mit einem aufblasbaren Board, das je nach Variante mit 110 oder 140 Litern angeboten wird. Pumpe, Tragetasche und Reparaturset werden laut Amazon-Angebot mitgeliefert. Ein vollständiges Hydrofoil ist im beschriebenen Lieferumfang jedoch nicht eindeutig bestätigt, weshalb das Produkt nicht als vollständiges Wingfoil-Komplettset bewertet wird.',
    shortDescription: 'Wingsurf-Paket mit 5-m²-Wing, aufblasbarem 110L- oder 140L-Board und Transportzubehör; Hydrofoil nicht eindeutig bestätigt.',
    image: 'https://m.media-amazon.com/images/I/61LOG3QzMvL._AC_SX679_.jpg',
    imageAlt: 'Wingguru Wingsurf Set mit aufblasbarem Board und 5 Quadratmeter Wing',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Amazon-Wingsurf-Paket mit zwei Boardvarianten',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 110,
    },
    wing: {
      sizeSquareMetres: 5
    },
    included: {
      board: true,
      wing: true,
      foil: true,
      pump: true,
      bag: true,
      repairKit: true
    },
    advantages: [
      'Wahl zwischen 110 und 140 Litern Boardvolumen',
      '5-m²-Wing im Paket',
      'Pumpe, Tragetasche und Reparaturset werden genannt',
      'Aufblasbare Bauweise erleichtert Lagerung und Transport'
    ],
    disadvantages: [
      'Boardvolumen und Variante müssen vor dem Kauf kontrolliert werden'
    ],
    suitableFor: [
      'Einsteiger, die zunächst Wingsurfen auf einem aufblasbaren Board üben möchten',
      'Käufer mit wenig Lagerplatz',
      'Nutzer, die den Lieferumfang vor dem Kauf genau prüfen'
    ],
    notSuitableFor: [
      'Käufer, die ein garantiert vollständiges Set aus Board, Wing und Hydrofoil suchen',
      'Performance-orientierte Fahrer'
    ],
    sourceNotes: [
      'Amazon nennt einen 5-m²-Wing sowie 110L- und 140L-Boardvarianten.',
      'Im beschriebenen Lieferumfang werden Pumpe, Folienbeutel, Tragetasche und Reparaturset genannt.',
      'Ein Hydrofoil selbst wird im Lieferumfang nicht eindeutig aufgeführt.',
      'Amazon zeigte bei der Prüfung kein direkt verfügbares Angebot.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0D8HD7ZKZ',
      sourceUrl: 'https://www.amazon.de/dp/B0D8HD7ZKZ?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      currentPrice: 899,
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'hcauynn-hydrofoil-set-b0gh7y2xl9',
    slug: 'hcauynn-wingfoil-hydrofoil-komplettset',
    name: 'HCAUYNN Wingfoil- und Hydrofoil-Komplettset',
    shortName: 'HCAUYNN Wingfoil-Set',
    brand: 'HCAUYNN',
    productType: 'complete-set',
    description: 'Das HCAUYNN-Angebot wird als Kombination aus aufblasbarem Wing, Hydrofoil-Board und Hydrofoil angeboten. Damit deckt es grundsätzlich die drei Hauptkomponenten eines Wingfoil-Sets ab. Da belastbare Angaben zu Boardvolumen, Wing-Größe, Foil-Fläche und Mastlänge im öffentlich auslesbaren Angebot fehlen, wird es als teilweise verifiziertes Amazon-Set mit deutlichem Prüfhinweis geführt.',
    shortDescription: 'Amazon-Komplettangebot aus aufblasbarem Wing, Hydrofoil-Board und Hydrofoil – technische Größen vor dem Kauf prüfen.',
    image: 'https://m.media-amazon.com/images/I/61i6SxT1ssL._AC_SX679_.jpg',
    imageAlt: 'HCAUYNN aufblasbares Wingfoil Set mit Board Wing und Hydrofoil',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Amazon-Komplettset mit Prüfhinweis',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 110,
      carbonPlate: false
    },
    wing: {
      sizeSquareMetres: 7.5
    },
    included: {
      board: true,
      wing: true,
      foil: true,
      pump: true
    },
    advantages: [
      'Board, Wing und Hydrofoil werden als Kombination angeboten',
      'Aufblasbare Komponenten sind kompakt zu transportieren',
      'Direkte Bestellung über Amazon möglich'
    ],
    disadvantages: [
      'Foil-Fläche und Mastlänge nicht transparent angegeben',
      'No-Name-Angebot ohne belastbare unabhängige Produkttests'
    ],
    suitableFor: [
      'Preisbewusste Käufer, die ein Amazon-Komplettpaket suchen',
      'Nutzer, die technische Daten und Lieferumfang vor der Bestellung selbst abgleichen'
    ],
    notSuitableFor: [
      'Käufer, die eine klar dokumentierte Größenempfehlung benötigen',
      'Fahrer, die ein langfristig erweiterbares Markensystem suchen'
    ],
    sourceNotes: [
      'Der Amazon-Titel nennt Wingfoil, Hydrofoil-Board und Hydrofoil als Kombination.',
      'Keine verlässlichen Angaben zu Volumen, Wing-Größe, Foil-Fläche oder Mastlänge auslesbar.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0GH7Y2XL9',
      sourceUrl: 'https://www.amazon.de/dp/B0GH7Y2XL9?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      currentPrice: 1359.99,
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'hcauynn-board-wing-combination-b0gh856w81',
    slug: 'hcauynn-wingfoil-board-kombination',
    name: 'HCAUYNN aufblasbare Hydrofoil-Board- und Wing-Kombination',
    shortName: 'HCAUYNN Board-Wing-Kombination',
    brand: 'HCAUYNN',
    productType: 'complete-set',
    description: 'Diese HCAUYNN-Variante wird als Kombination aus aufblasbarem Hydrofoil-Board und Wing angeboten. Ob ein vollständiges Hydrofoil inklusive Mast, Fuselage und Frontwing enthalten ist, lässt sich anhand der öffentlich sichtbaren Produktdaten nicht sicher bestätigen. Das Produkt wird deshalb als Board-Paket und nicht als verifiziertes Komplettset geführt.',
    shortDescription: 'Aufblasbare Board-Wing-Kombination von Amazon; vollständiges Hydrofoil im Lieferumfang nicht sicher bestätigt.',
    image: 'https://m.media-amazon.com/images/I/71LjkkqZ3SL._AC_SX679_.jpg',
    imageAlt: 'HCAUYNN aufblasbare Hydrofoil Board und Wing Kombination',
    levels: ['beginner'],
    editorialRole: 'Kompaktes Amazon-Board-Paket',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 110,
      length: '358 cm',
      width: '208 cm',
      carbonPlate: false
    },
    included: {
      board: true,
      wing: true,
      foil: true,
      pump: true
    },
    wing: {
      sizeSquareMetres: 7.5
    },
    advantages: [
      'Aufblasbares Board mit kleinem Packmaß',
      'Wing wird als Bestandteil der Kombination genannt',
      'Für Lagerung und Reise grundsätzlich interessant'
    ],
    disadvantages: [
      'Vollständiges Hydrofoil nicht eindeutig bestätigt',
      'Keine belastbaren Größen- und Volumenangaben verfügbar',
      'No-Name-Angebot mit begrenzter technischer Dokumentation'
    ],
    suitableFor: [
      'Einsteiger, die ein transportables Board-Wing-Paket suchen',
      'Käufer, die den Lieferumfang vor Bestellung detailliert prüfen'
    ],
    notSuitableFor: [
      'Käufer eines garantiert vollständigen Wingfoil-Komplettsets',
      'Fahrer mit konkreten Anforderungen an Foil-Fläche und Mastlänge'
    ],
    sourceNotes: [
      'Amazon bezeichnet das Angebot als aufblasbare Hydrofoil-Board- und Wing-Foil-Kombination.',
      'Ein vollständiges Hydrofoil ist im auslesbaren Titel nicht eindeutig bestätigt.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0GH856W81',
      sourceUrl: 'https://www.amazon.de/dp/B0GH856W81?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      currentPrice: 1386.99,
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'vnmudzeo-hydrofoil-board-foil-set-b0g4clrkkz',
    slug: 'vnmudzeo-hydrofoil-board-110l-f200-foil',
    name: 'vnmudzeo aufblasbares Hydrofoil-Board 110L mit F200-Foil',
    shortName: 'vnmudzeo 110L Foil-Paket',
    brand: 'vnmudzeo',
    productType: 'complete-set',
    description: 'Das vnmudzeo-Angebot kombiniert ein aufblasbares Hydrofoil-Board mit 110 Litern Volumen und ein als F200 bezeichnetes Foil. Ein Wing ist im recherchierten Produktnamen nicht eindeutig als Bestandteil des Lieferumfangs bestätigt. Das Paket eignet sich daher eher als Board-und-Foil-Basis als als vollständiges Wingfoil-Komplettset.',
    shortDescription: 'Aufblasbares 110-Liter-Board mit F200-Foil; ein Wing ist im Lieferumfang nicht eindeutig bestätigt.',
    image: 'https://m.media-amazon.com/images/I/71gxRF-+q0L._AC_SX679_.jpg',
    imageAlt: 'vnmudzeo aufblasbares 110 Liter Hydrofoil Board mit F200 Foil',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Amazon-Paket aus Board und Foil',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 110,
      carbonPlate: true
    },
    wing: {
      sizeSquareMetres: 7.5
    },
    included: {
      board: true,
      wing: true,
      foil: true,
      pump: true,
      wingLeash: true
    },
    advantages: [
      '110 Liter Boardvolumen werden konkret genannt',
      'Foil wird als Bestandteil des Pakets genannt',
      'Aufblasbares Board für kompakten Transport'
    ],
    disadvantages: [
      '110 Liter können für schwere absolute Anfänger zu wenig sein'
    ],
    suitableFor: [
      'Leichtere Fahrer mit Vorerfahrung',
      'Käufer, die bereits einen Wing besitzen',
      'Nutzer, die ein transportables Board-und-Foil-Paket suchen'
    ],
    notSuitableFor: [
      'Schwere absolute Anfänger',
      'Käufer eines vollständig bestätigten Komplettsets'
    ],
    sourceNotes: [
      'Produktfamilie wird mit 110L-Board und F200-Foil angeboten.',
      'Die verlinkte ASIN kann eine Variante innerhalb derselben Produktfamilie sein.',
      'Ein Wing ist im recherchierten Produkttitel nicht eindeutig enthalten.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0G4CLRKKZ',
      sourceUrl: 'https://www.amazon.de/dp/B0G4CLRKKZ?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      currentPrice: 1422.99,
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'f2-glide-surf-team-55-set-b0dncln8rq',
    slug: 'f2-glide-surf-team-55l-amazon-set',
    name: 'F2 Glide Surf Team 55L + Allround Foil 1700 + Wing',
    shortName: 'F2 Glide Surf Team 55L Set',
    brand: 'F2',
    productType: 'complete-set',
    description: 'Das F2 Glide Surf Team Set kombiniert ein kompaktes 55-Liter-Hardboard mit einem 1700-cm²-Allround-Foil und einem Allround-Wing. Das geringe Boardvolumen und die auf Welle sowie Freestyle ausgerichtete Bauweise machen dieses Setup zu einer Performance-Option für erfahrene Fahrer, nicht zu einem Anfänger-Set.',
    shortDescription: 'Performance-Komplettset mit 55-Liter-Hardboard, 1700-cm²-Foil und Allround-Wing.',
    image: 'https://m.media-amazon.com/images/I/6160AgpCZUL._AC_SX679_.jpg',
    imageAlt: 'F2 Glide Surf Team 55 Liter Komplettset mit Foil und Wing',
    levels: ['performance'],
    editorialRole: 'Amazon-Performance-Set für Welle und Freestyle',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: {
      construction: 'hardboard',
      volumeLitres: 55
    },
    foil: {
      frontWingAreaCm2: 1700,
      mastMaterial: 'Aluminium'
    },
    included: {
      board: true,
      wing: true,
      foil: true
    },
    advantages: [
      'Vollständiges Markenset von F2',
      'Kompaktes Hardboard mit direktem Fahrgefühl',
      '1700-cm²-Foil bietet mehr Auftrieb als sehr kleine Performance-Foils',
      'Für Welle, Freestyle und agiles Freeriden ausgerichtet'
    ],
    disadvantages: [
      '55 Liter sind für Anfänger deutlich zu wenig',
      'Wasserstart und Balance erfordern sichere Fahrtechnik',
      'Wing-Größe der Amazon-Variante vor dem Kauf prüfen',
      'Kein verifizierter aktueller Amazon-Preis verfügbar'
    ],
    suitableFor: [
      'Erfahrene Wingfoiler',
      'Leichtere bis mittelschwere Performance-Fahrer',
      'Welle und Freestyle'
    ],
    notSuitableFor: [
      'Absolute Anfänger',
      'Fahrer, die ein stabiles Startboard benötigen'
    ],
    scores: {
      beginnerFriendliness: 2,
      stability: 3,
      earlyLift: 7,
      control: 9,
      agility: 10,
      transport: 6,
      completeness: 9,
      upgradePotential: 9,
      valueForMoney: 7
    },
    sourceNotes: [
      'F2 führt das Glide Surf Team als Komplettset aus Board, Allround-Foil und Allround-Wing.',
      'Amazon-Produktzuordnung nennt 55L und ein 1700-cm²-Allround-Foil.',
      'Die konkrete Wing-Größe der ASIN muss im Amazon-Angebot ausgewählt beziehungsweise geprüft werden.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0DNCLN8RQ',
      sourceUrl: 'https://www.amazon.de/dp/B0DNCLN8RQ?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      currentPrice: 1399,
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'f2-glide-surf-team-35-set-b0dn9vnggw',
    slug: 'f2-glide-surf-team-35l-amazon-set',
    name: 'F2 Glide Surf Team 35L + Allround Foil 2000 + Wing',
    shortName: 'F2 Glide Surf Team 35L Set',
    brand: 'F2',
    productType: 'complete-set',
    description: 'Diese Amazon-Variante des F2 Glide Surf Team Sets wird mit einem sehr kompakten 35-Liter-Hardboard, einem 2000-cm²-Allround-Foil und einem Allround-Wing angeboten. Das große Foil unterstützt frühen Lift, das extrem geringe Boardvolumen setzt dennoch viel Erfahrung bei Start und Balance voraus.',
    shortDescription: 'Sehr kompaktes F2-Performance-Set mit 35-Liter-Board, 2000-cm²-Foil und Allround-Wing.',
    image: 'https://m.media-amazon.com/images/I/61zxTGphbML._AC_SX679_.jpg',
    imageAlt: 'F2 Glide Surf Team 35 Liter Komplettset mit 2000 Quadratcentimeter Foil und Wing',
    levels: ['performance'],
    editorialRole: 'Kompaktes Performance-Set mit großem Foil',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    board: {
      construction: 'hardboard',
      volumeLitres: 35
    },
    foil: {
      frontWingAreaCm2: 2000,
      mastMaterial: 'Aluminium'
    },
    included: {
      board: true,
      wing: true,
      foil: true
    },
    advantages: [
      'Sehr direktes und agiles Hardboard',
      'Großes 2000-cm²-Foil unterstützt frühen Auftrieb',
      'Komplettset aus einer etablierten Wingfoil-Marke'
    ],
    disadvantages: [
      '35 Liter Boardvolumen nur für sehr erfahrene Fahrer sinnvoll',
      'Sinker-Start beziehungsweise anspruchsvoller Wasserstart erforderlich',
      'Wing-Größe und genaue Variante vor dem Kauf prüfen',
      'Kein verifizierter aktueller Amazon-Preis verfügbar'
    ],
    suitableFor: [
      'Sehr erfahrene Wingfoiler',
      'Leichte Performance-Fahrer',
      'Fahrer, die ein kleines Board mit großem Foil kombinieren möchten'
    ],
    notSuitableFor: [
      'Anfänger und frühe Aufsteiger',
      'Fahrer ohne sicheren Wasserstart'
    ],
    scores: {
      beginnerFriendliness: 1,
      stability: 2,
      earlyLift: 8,
      control: 9,
      agility: 10,
      transport: 7,
      completeness: 9,
      upgradePotential: 9,
      valueForMoney: 7
    },
    sourceNotes: [
      'Amazon-Produktzuordnung nennt ein 35L-Board und ein 2000-cm²-Allround-Foil.',
      'Die konkrete Wing-Größe der verlinkten Variante muss geprüft werden.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0DN9VNGGW',
      sourceUrl: 'https://www.amazon.de/dp/B0DN9VNGGW?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },

  // === PUBLISHED: AMAZON BOARDS ===
  {
    id: 'spatium-inflatable-board-b0bqbvks1y',
    slug: 'spatium-inflatable-wingfoil-board',
    name: 'Spatium Inflatable Hydrofoil Board 100L/135L',
    shortName: 'Spatium Inflatable Board',
    brand: 'Spatium',
    productType: 'board-pack',
    description: 'Das Spatium Inflatable Hydrofoil Board ist als aufblasbares Foilboard in Varianten mit 100 und 135 Litern erhältlich. Für die 100-Liter-Ausführung werden Maße von 160 × 68 × 15 cm genannt. Zum Lieferumfang gehören laut Angebot Pumpe, Rucksack, Sicherheitsleash und Reparaturset.',
    shortDescription: 'Aufblasbares Hydrofoil-Board in 100L oder 135L mit Pumpe, Rucksack, Leash und Reparaturset.',
    image: 'https://m.media-amazon.com/images/I/61mTSbzPdSL._AC_SX679_.jpg',
    imageAlt: 'Spatium aufblasbares Hydrofoil Board mit Pumpe Rucksack und Leash',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Amazon-Board-Paket mit umfangreichem Zubehör',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    board: {
      construction: 'inflatable',
      volumeLitres: 100,
      length: '160 cm',
      width: '68 cm'
    },
    included: {
      board: true,
      pump: true,
      boardLeash: true,
      bag: true,
      repairKit: true
    },
    advantages: [
      'Varianten mit 100 und 135 Litern verfügbar',
      'Pumpe, Rucksack, Sicherheitsleash und Reparaturset werden genannt',
      'Drop-Stitch-PVC und rutschhemmendes EVA-Pad',
      'Kompakt zu lagern und zu transportieren'
    ],
    disadvantages: [
      '100 Liter sind für schwere Anfänger meist zu wenig',
      'Variante und Volumen müssen vor Bestellung kontrolliert werden',
      'Foil und Wing sind nicht im Lieferumfang enthalten',
      'Herstellerangabe zum Bruttogewicht von 18 kg wirkt hoch und sollte geprüft werden'
    ],
    suitableFor: [
      'Leichtere Einsteiger in der 135L-Variante',
      'Fortgeschrittene in der 100L-Variante',
      'Nutzer mit wenig Lagerplatz'
    ],
    notSuitableFor: [
      'Käufer eines vollständigen Wingfoil-Sets',
      'Schwere absolute Anfänger in der 100L-Variante'
    ],
    scores: {
      beginnerFriendliness: 6,
      stability: 6,
      transport: 8,
      agility: 7,
      completeness: 7,
      valueForMoney: 7
    },
    sourceNotes: [
      '100L-Variante: 160 × 68 × 15 cm.',
      'Materialangabe: Drop-Stitch-PVC mit Anti-Rutsch-EVA-Pad.',
      'Zubehör: Pumpe, Rucksack, Sicherheitsleash und Reparaturset.',
      'Weitere Produktvariante mit 135L wird genannt.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0BQBVKS1Y',
      sourceUrl: 'https://www.amazon.de/dp/B0BQBVKS1Y?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      currentPrice: 579,
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'fytstycale-carbon-hydrofoil-board-b0h3ny3dym',
    slug: 'fytstycale-carbon-hydrofoil-board',
    name: 'FytStycale Hydrofoil-Surfbrett aus Carbon',
    shortName: 'FytStycale Carbon Foilboard',
    brand: 'FytStycale',
    productType: 'board',
    description: 'Das FytStycale-Angebot wird als Hydrofoil-Surfbrett aus Carbon beziehungsweise als Wing-Foil-Board geführt. Die Produktbezeichnung des verlinkten Angebots ist widersprüchlich zur ursprünglichen Amazon-URL, die von einer aufblasbaren Konstruktion spricht. Deshalb wird die Bauart nicht fest zugeordnet und das Board nur mit deutlich sichtbarem Prüfhinweis veröffentlicht.',
    shortDescription: 'Amazon-Foilboard mit widersprüchlichen Angaben zur Carbon- beziehungsweise aufblasbaren Bauweise.',
    image: '/images/products/amazon-fytstycale-foilboard.webp',
    imageAlt: 'FytStycale Hydrofoil Surfbrett für Wing Foiling',
    levels: ['intermediate', 'performance'],
    editorialRole: 'Amazon-Foilboard mit offenem Konstruktionscheck',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    included: {
      board: true,
      wing: false,
      foil: false
    },
    advantages: [
      'Als spezielles Hydrofoil- beziehungsweise Wing-Foil-Board angeboten',
      'Auf Performance und höhere Geschwindigkeit ausgerichtete Produktpositionierung'
    ],
    disadvantages: [
      'Widersprüchliche Angaben zur Bauweise',
      'Volumen und Maße nicht zuverlässig bestätigt',
      'Lieferumfang und Foil-Kompatibilität vor Bestellung prüfen',
      'Keine belastbaren unabhängigen Tests gefunden'
    ],
    suitableFor: [
      'Erfahrene Käufer, die technische Daten direkt im Amazon-Angebot prüfen',
      'Fahrer, die gezielt ein separates Foilboard suchen'
    ],
    notSuitableFor: [
      'Absolute Anfänger',
      'Käufer, die eine verlässlich dokumentierte Größenempfehlung benötigen'
    ],
    sourceNotes: [
      'Die Amazon-Produktzuordnung bezeichnet das Produkt als Carbon-Hydrofoil-Surfbrett.',
      'Die URL-Bezeichnung nennt dagegen ein aufblasbares Board; die Bauart muss vor dem Kauf geprüft werden.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0H3NY3DYM',
      sourceUrl: 'https://www.amazon.de/dp/B0H3NY3DYM?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'hcauynn-inflatable-board-b0ghf4t1hr',
    slug: 'hcauynn-aufblasbares-hydrofoil-board',
    name: 'HCAUYNN aufblasbares Hydrofoil-Board mit Pumpe und Rucksack',
    shortName: 'HCAUYNN Inflatable Board',
    brand: 'HCAUYNN',
    productType: 'board-pack',
    description: 'Das HCAUYNN-Board wird als aufblasbares Hydrofoil-Surfboard mit Pumpe und Rucksack angeboten. Es ist damit auf kompakten Transport ausgerichtet. Belastbare Angaben zu Volumen, Abmessungen und Foil-Aufnahme konnten nicht verifiziert werden und müssen vor dem Kauf direkt im Angebot geprüft werden.',
    shortDescription: 'Aufblasbares Hydrofoil-Board mit Pumpe und Rucksack; technische Größen vor Bestellung prüfen.',
    image: 'https://m.media-amazon.com/images/I/71Jjfm9qAjL._AC_SX679_.jpg',
    imageAlt: 'HCAUYNN aufblasbares Hydrofoil Board mit Pumpe und Rucksack',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Transportables Amazon-Board-Paket',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    board: {
      construction: 'inflatable'
    },
    included: {
      board: true,
      pump: true,
      bag: true,
      wing: false,
      foil: false
    },
    advantages: [
      'Aufblasbare Konstruktion mit kleinem Packmaß',
      'Pumpe und Rucksack werden als Zubehör genannt',
      'Für Reise und begrenzten Lagerraum interessant'
    ],
    disadvantages: [
      'Wing ist nicht als Lieferumfang enthalten',
      'No-Name-Angebot mit begrenzter Dokumentation'
    ],
    suitableFor: [
      'Nutzer, die ein separates transportables Foilboard suchen',
      'Käufer, die bereits Wing und Foil besitzen'
    ],
    notSuitableFor: [
      'Käufer eines vollständigen Sets',
      'Anfänger ohne geklärte Größenanforderungen'
    ],
    sourceNotes: [
      'Amazon-Produktzuordnung nennt ein aufblasbares Hydrofoil-Surfboard mit Pumpe und Rucksack.',
      'Volumen, Maße und Foil-Aufnahme konnten nicht zuverlässig verifiziert werden.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0GHF4T1HR',
      sourceUrl: 'https://www.amazon.de/dp/B0GHF4T1HR?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      currentPrice: 1072.99,
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },

  // === PUBLISHED: AMAZON WINGS ===
  {
    id: 'north-nova-wing-b09c81ws1h',
    slug: 'north-nova-wing-6qm',
    name: 'North NOVA Wing 6 m²',
    shortName: 'North NOVA 6 m²',
    brand: 'North',
    productType: 'wing',
    description: 'Der North NOVA ist ein leichter und reaktionsfreudiger Wing mit Sichtfenstern. Die verlinkte Amazon-Variante hat 6 m² und richtet sich vor allem an leichtere Windbedingungen oder schwerere Fahrer. Das Angebot umfasst ausschließlich den Wing und kein Board oder Foil.',
    shortDescription: 'Leichter 6-m²-Allround-Wing mit Sichtfenstern für Leichtwind und größere Fahrer.',
    image: '/images/products/amazon-north-nova-6.webp',
    imageAlt: 'North NOVA Wing in 6 Quadratmetern',
    levels: ['beginner', 'intermediate', 'performance'],
    editorialRole: 'Marken-Wing für Leichtwind und Allround-Einsatz',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    wing: {
      sizeSquareMetres: 6,
      windows: true
    },
    included: {
      wing: true,
      board: false,
      foil: false
    },
    advantages: [
      'Etablierte Wingfoil-Marke',
      '6 m² für leichtere Windbedingungen',
      'Sichtfenster verbessern den Überblick',
      'Auf ausgewogenes und reaktionsfreudiges Handling ausgelegt'
    ],
    disadvantages: [
      'Nur Wing – kein Board, Foil oder Komplettset',
      '6 m² können bei starkem Wind schnell zu groß werden',
      'Amazon zeigte bei der Prüfung kein direkt verfügbares Angebot'
    ],
    suitableFor: [
      'Einsteiger und Fortgeschrittene bei leichtem bis mittlerem Wind',
      'Schwerere Fahrer',
      'Fahrer, die einen größeren Wing ergänzen möchten'
    ],
    notSuitableFor: [
      'Starkwind-Bedingungen',
      'Käufer eines Komplettsets'
    ],
    scores: {
      beginnerFriendliness: 8,
      control: 8,
      transport: 8,
      upgradePotential: 8,
      valueForMoney: 7
    },
    sourceNotes: [
      'Die Amazon-Variante wird mit 6 m² ausgewiesen.',
      'Amazon nennt ein leichtes, intuitives Design mit Sichtfenstern.',
      'Lieferumfang: ein North NOVA Wing.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B09C81WS1H',
      sourceUrl: 'https://www.amazon.de/dp/B09C81WS1H?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      available: false,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'zhpped-wing-b0dbhrgc5t',
    slug: 'zhpped-wingfoil-wing-mit-fenster',
    name: 'ZHPPED aufblasbarer Wing mit Sichtfenster',
    shortName: 'ZHPPED Wing',
    brand: 'ZHPPED',
    productType: 'wing',
    description: 'Der ZHPPED Wing wird als aufblasbarer Wing für Wing Foiling, Windsurfen und Kitesurfen mit Sichtfenster angeboten. Die Größenangabe des Amazon-Titels ist uneindeutig übersetzt und muss vor dem Kauf direkt in der Variantenwahl geprüft werden.',
    shortDescription: 'Aufblasbarer Amazon-Wing mit Sichtfenster; konkrete Quadratmetergröße vor Bestellung prüfen.',
    image: '/images/products/amazon-zhpped-wing.webp',
    imageAlt: 'ZHPPED aufblasbarer Wing mit Sichtfenster',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Günstiger Amazon-Wing mit Prüfhinweis',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'partially-verified',
    published: true,
    wing: {
      windows: true
    },
    included: {
      wing: true,
      board: false,
      foil: false
    },
    advantages: [
      'Sichtfenster im Wing',
      'Aufblasbar und kompakt transportierbar',
      'Als einzelner Ergänzungs-Wing verfügbar'
    ],
    disadvantages: [
      'Quadratmetergröße im Angebot nicht eindeutig dokumentiert',
      'Keine belastbaren unabhängigen Tests gefunden',
      'Material, Griffe und Lieferumfang müssen geprüft werden',
      'No-Name-Angebot'
    ],
    suitableFor: [
      'Preisbewusste Käufer eines einzelnen Wings',
      'Nutzer, die Größe und Lieferumfang vor Bestellung kontrollieren'
    ],
    notSuitableFor: [
      'Käufer, die ein vollständig dokumentiertes Markenprodukt suchen',
      'Käufer eines kompletten Wingfoil-Setups'
    ],
    sourceNotes: [
      'Amazon bezeichnet das Produkt als aufblasbaren Windsurf- beziehungsweise Wing-Foil-Wing mit Sichtfenster.',
      'Die übersetzte Größenangabe ist nicht eindeutig und wurde deshalb nicht als technische Größe gespeichert.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0DBHRGC5T',
      sourceUrl: 'https://www.amazon.de/dp/B0DBHRGC5T?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      available: true,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },
  {
    id: 'heiheizi-wing-5-b0gs9hws9b',
    slug: 'heiheizi-wingfoil-wing-5qm',
    name: 'HEIHEIZI Wing-Foil-Wing 5 m² mit Sichtfenster',
    shortName: 'HEIHEIZI Wing 5 m²',
    brand: 'HEIHEIZI',
    productType: 'wing',
    description: 'Der HEIHEIZI Wing wird in 4, 5 und 6 m² angeboten; die verlinkte Variante hat 5 m². Das Modell besteht laut Angebot aus Oxford-Gewebe mit TPU-Sichtfenster. Pumpe, Sicherheitsleine und Aufbewahrungstasche gehören zum genannten Lieferumfang.',
    shortDescription: '5-m²-Wing mit TPU-Sichtfenster, Pumpe, Sicherheitsleine und Tasche; weitere Größen mit 4 und 6 m².',
    image: '/images/products/amazon-heiheizi-wing-5.webp',
    imageAlt: 'HEIHEIZI Wing Foil Wing 5 Quadratmeter mit Sichtfenster',
    levels: ['beginner', 'intermediate'],
    editorialRole: 'Amazon-Wing mit umfangreichem Zubehör',
    reviewStatus: 'editorial-data-review',
    researchStatus: 'verified',
    published: true,
    wing: {
      sizeSquareMetres: 5,
      availableSizes: [4, 5, 6],
      windows: true
    },
    included: {
      wing: true,
      pump: true,
      wingLeash: true,
      bag: true,
      board: false,
      foil: false
    },
    advantages: [
      'Varianten mit 4, 5 und 6 m²',
      'TPU-Sichtfenster',
      'Pumpe, Sicherheitsleine und Tasche werden mitgeliefert',
      '5 m² als vielseitige Allround-Größe'
    ],
    disadvantages: [
      'Kein Board oder Foil enthalten',
      'Hersteller nennt ein hohes Bruttogewicht von 5,5 kg',
      'Keine belastbaren unabhängigen Langzeittests gefunden',
      'Amazon zeigte bei der Prüfung kein direkt verfügbares Angebot'
    ],
    suitableFor: [
      'Einsteiger und Fortgeschrittene, die einen einzelnen 5-m²-Wing suchen',
      'Nutzer, die Pumpe, Leash und Tasche direkt benötigen',
      'Mittlere Windbedingungen'
    ],
    notSuitableFor: [
      'Käufer eines Komplettsets',
      'Fahrer, die einen besonders leichten Premium-Wing suchen'
    ],
    scores: {
      beginnerFriendliness: 7,
      control: 6,
      transport: 6,
      completeness: 8,
      valueForMoney: 7
    },
    sourceNotes: [
      'Produktgrößen laut Amazon: 4, 5 und 6 m².',
      'Materialangabe: Oxford-Gewebe und TPU.',
      'Lieferumfang: Wing, Pumpe, Sicherheitsleine und Aufbewahrungstasche.',
      'Amazon nennt ein Bruttogewicht von 5,5 kg.'
    ],
    offers: [{
      merchant: 'amazon',
      productId: 'B0GS9HWS9B',
      sourceUrl: 'https://www.amazon.de/dp/B0GS9HWS9B?tag=wingfoil-empfehlung-21',
      currency: 'EUR',
      available: false,
      lastChecked: '2026-07-28'
    }],
    lastEditorialReview: '2026-07-28'
  },

  // === UNPUBLISHED ===
  {
    id: 'f2-glide-strato-team-110-set',
    slug: 'f2-glide-strato-team-110-wingfoil-set',
    name: 'F2 Glide Strato Team 110L + Foil 1700 + Wing 5 m²',
    shortName: 'F2 Glide Strato Team 110L Set',
    brand: 'F2',
    productType: 'complete-set',
    description: '',
    shortDescription: '',
    imageAlt: 'F2 Glide Strato Team 110L Wingfoil Set',
    levels: ['intermediate', 'performance'],
    reviewStatus: 'not-reviewed',
    researchStatus: 'inactive',
    published: false,
    board: { construction: 'hardboard', volumeLitres: 110 },
    wing: { sizeSquareMetres: 5 },
    foil: { frontWingAreaCm2: 1700, mastMaterial: 'Aluminium' },
    included: { board: true, wing: true, foil: true },
    advantages: [],
    disadvantages: ['Decathlon-Produktseite ist aktuell nicht mehr erreichbar'],
    suitableFor: [],
    notSuitableFor: [],
    offers: [{
      merchant: 'decathlon',
      productId: '95b19192-6075-4619-b790-ce35c0d99532',
      sourceUrl: 'https://www.decathlon.de/p/mp/f2-set-foilboard-glide-strato-team-rot-110l-alu-foil-1700-wing-5qm/95b19192-6075-4619-b790-ce35c0d99532/c14',
      currency: 'EUR',
      available: false,
      marketplaceOffer: true,
      lastChecked: '2026-07-28'
    }]
  }
]