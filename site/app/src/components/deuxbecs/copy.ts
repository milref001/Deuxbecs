export type Lang = "fr" | "en";

export const THEME_COLOR = "#1F2060";

export const LINKS = {
  instagram: "https://www.instagram.com/deuxbecs",
  maps: "https://www.google.com/maps/search/?api=1&query=Deux+Becs+1200+Boulevard+de+Rome+Brossard+QC+J4W+3H3",
  order: "https://www.ubereats.com/ca/store/deux-becs-boulevard-de-rome/NwWpZU1rWVmS_lZBzg8Ryg",
};

export const MENU_ITEMS: { name: string; en: string; hot?: boolean }[] = [
  { name: "Beurre Brun + Cannelle", en: "Brown butter + cinnamon" },
  { name: "Beurre Salé + Sucre", en: "Salted butter + sugar" },
  { name: "Chocolat Classique", en: "Classic chocolate" },
  { name: "Baies Mélangées + Litchi", en: "Mixed berries + lychee" },
  { name: "« Le Standard »", en: "The house glaze" },
  { name: "Mangue + Tajín", en: "Mango + Tajín", hot: true },
  { name: "Gâteau Fromage + Biscoff", en: "Biscoff cheesecake" },
  { name: "Crème Boston", en: "Boston cream" },
  { name: "L'Ancienne Babeurre", en: "Buttermilk old-fashioned" },
  { name: "L'Ancienne Guimauve", en: "Marshmallow old-fashioned" },
  { name: "Crème Ube", en: "Ube cream" },
];

export const COPY = {
  fr: {
    nav: { menu: "Menu", wall: "Le mur", story: "Histoire", visit: "Visite" },
    directions: "Itinéraire",
    order: "Commander",
    menu: {
      kicker: "Au comptoir cette semaine",
      title: "Le menu",
      note: "Le menu change avec les saisons. La liste du jour est sur Instagram.",
      ig: "Voir le menu du jour",
      captions: ["Mangue + Tajín", "Chocolat Classique", "Babeurre d'Ube", "Gâteau Fromage + Biscoff"],
    },
    wall: {
      title: "Pris sur le vif",
      sub: "Glisse pour voir. Tout sort de notre cuisine, rien de retouché.",
      captions: [
        "Le comptoir. La planche reste.",
        "Signé à la main",
        "Trous de beigne, sucre partout",
        "Womp womp",
        "Rempli « incorrectement »",
        "Ube, en coupe",
        "L'ancienne, glacée",
        "Mangue x3",
        "Au mur des planches",
      ],
    },
    story: {
      title: "Deux becs, un comptoir.",
      p1: "Art Romero a appris la pâtisserie à Los Angeles et dans les cuisines de Montréal. Philip Penalosa, lui, tient le Café Kuya. Ensemble, ils ont commencé en pop-ups avant d'ouvrir la boutique à Brossard en janvier 2024.",
      p2: "L'idée vient des petits comptoirs à beignes des centres commerciaux de LA: pas de chichi, des classiques bien faits, et des saveurs qui viennent de chez nous. Philippines, Mexique, Québec.",
      scribble: "chez nous",
      caption: "En cuisine, entre deux fournées",
    },
    visit: {
      title: "Viens avant que ce soit vendu.",
      hoursTitle: "Heures",
      hours: [
        ["Lun, Mar", "Fermé"],
        ["Mer au Ven", "12h à 19h"],
        ["Sam, Dim", "9h à 17h"],
      ],
      soldout: "ou jusqu'à épuisement",
      addrTitle: "Adresse",
      addr: ["1200 boul. de Rome", "Brossard, QC J4W 3H3"],
      orderNote: "Livraison",
    },
    footer: { line: "Beignes carrés, faits main, Brossard.", follow: "Suis-nous" },
    ticker: ["Beignes carrés", "Faits main", "Brossard", "Jusqu'à épuisement", "Ube", "Mangue + Tajín"],
    lang: "Langue",
  },
  en: {
    nav: { menu: "Menu", wall: "The wall", story: "Story", visit: "Visit" },
    directions: "Directions",
    order: "Order",
    menu: {
      kicker: "On the counter this week",
      title: "The menu",
      note: "The menu turns with the seasons. Today's list lives on Instagram.",
      ig: "See today's menu",
      captions: ["Mango + Tajín", "Classic chocolate", "Ube buttermilk", "Biscoff cheesecake"],
    },
    wall: {
      title: "Straight from the kitchen",
      sub: "Swipe through. Real donuts, no retouching.",
      captions: [
        "The counter. The board stays.",
        "Signed by hand",
        "Donut holes, sugar everywhere",
        "Womp womp",
        "Filled \"incorrectly\"",
        "Ube, cross-section",
        "Old-fashioned, glazed",
        "Mango x3",
        "In front of the deck wall",
      ],
    },
    story: {
      title: "Two chefs, one counter.",
      p1: "Art Romero trained as a pastry chef in Los Angeles and in Montreal kitchens. Philip Penalosa runs Café Kuya. They started with pop-ups, then opened the shop in Brossard in January 2024.",
      p2: "The idea comes from LA's strip-mall donut counters: no fuss, classics done right, and flavours from home. The Philippines, Mexico, Quebec.",
      scribble: "from home",
      caption: "In the kitchen, between batches",
    },
    visit: {
      title: "Come before it sells out.",
      hoursTitle: "Hours",
      hours: [
        ["Mon, Tue", "Closed"],
        ["Wed to Fri", "12pm to 7pm"],
        ["Sat, Sun", "9am to 5pm"],
      ],
      soldout: "or until sold out",
      addrTitle: "Address",
      addr: ["1200 boul. de Rome", "Brossard, QC J4W 3H3"],
      orderNote: "Delivery",
    },
    footer: { line: "Square donuts, handmade, Brossard.", follow: "Follow us" },
    ticker: ["Square donuts", "Handmade", "Brossard", "Until sold out", "Ube", "Mango + Tajín"],
    lang: "Language",
  },
} as const;

export type Copy = (typeof COPY)[Lang];
