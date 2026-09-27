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
      kicker: "Au comptoir",
      title: "Le menu",
      note: "Le lineup change avec les saisons. Le drop du jour est sur Instagram.",
      ig: "Voir le drop du jour",
      captions: ["Mangue + Tajín", "Chocolat Classique", "Babeurre d'Ube", "Gâteau Fromage + Biscoff"],
    },
    wall: {
      title: "Zéro filtre",
      sub: "Glisse. De vrais beignes, direct de notre cuisine.",
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
      title: "Du pop-up à leur propre spot.",
      p1: "Art Romero a grandi en surfant à LA. Après dix ans dans le milieu médical, il plaque tout pour la cuisine. Chez McKiernan, avec la gang de Joe Beef, il devient chef pâtissier et tombe accro aux beignes.",
      p2: "Ses pop-ups avec Philip Penalosa, du Café Kuya, lèvent bien plus que prévu. En janvier 2024, avec Dean Scully, ils ouvrent Deux Becs juste à côté du Café Kuya, à Brossard. Le vibe: les comptoirs à beignes des strip malls de LA. Les saveurs: ube, goyave, mangue et Tajín.",
      scribble: "ube",
      quote: "Notre but, c'est vraiment de bâtir une communauté et des amitiés avec les gens qui viennent ici; on adore jaser et créer des liens avec nos clients.",
      quoteBy: "Art Romero, cofondateur",
      photoAlt: "L'équipe Deux Becs derrière un plateau de beignes",
      caption: "En cuisine, entre deux fournées",
    },
    visit: {
      title: "Passe avant que tout parte.",
      hoursTitle: "Heures",
      hours: [
        ["Lun, Mar", "Fermé"],
        ["Mer au Ven", "12h à 19h"],
        ["Sam, Dim", "9h à 17h"],
      ],
      soldout: "ou jusqu'à ce que le rack soit vide",
      addrTitle: "Adresse",
      addr: ["1200 boul. de Rome", "Brossard, QC J4W 3H3"],
      orderNote: "Livraison",
    },
    footer: { line: "Beignes faits main. Brossard. Tous les jours.", follow: "Suis-nous", tag: "maison du beigne" },
    ticker: ["Maison du beigne", "Fait main", "Passe nous voir", "Jusqu'à épuisement", "Ube", "Mangue + Tajín", "Ça roule"],
    lang: "Langue",
  },
  en: {
    nav: { menu: "Menu", wall: "The wall", story: "Story", visit: "Visit" },
    directions: "Directions",
    order: "Order",
    menu: {
      kicker: "On the counter",
      title: "The lineup",
      note: "The lineup flips with the seasons. Today's drop is on Instagram.",
      ig: "Check today's drop",
      captions: ["Mango + Tajín", "Classic chocolate", "Ube buttermilk", "Biscoff cheesecake"],
    },
    wall: {
      title: "Zero filters",
      sub: "Swipe through. Real donuts, straight from our kitchen.",
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
      title: "From pop-up to their own spot.",
      p1: "Art Romero was born and raised surfing in LA. After ten years in the medical field, he bailed for the kitchen. At McKiernan, with the Joe Beef crew, he became pastry chef and got hooked on donuts.",
      p2: "His pop-ups with Philip Penalosa of Café Kuya blew up way more than expected. In January 2024, with Dean Scully, they opened Deux Becs right next door to Café Kuya in Brossard. The vibe: LA strip-mall donut shops. The flavours: ube, guava, mango with Tajín.",
      scribble: "ube",
      quote: "Our goal is really to build a community and friendships with the people who come in here; we love to interact and connect with our customers.",
      quoteBy: "Art Romero, co-founder",
      photoAlt: "The Deux Becs team behind a tray of donuts",
      caption: "In the kitchen, between batches",
    },
    visit: {
      title: "Pull up before it's gone.",
      hoursTitle: "Hours",
      hours: [
        ["Mon, Tue", "Closed"],
        ["Wed to Fri", "12pm to 7pm"],
        ["Sat, Sun", "9am to 5pm"],
      ],
      soldout: "or till the rack's empty",
      addrTitle: "Address",
      addr: ["1200 boul. de Rome", "Brossard, QC J4W 3H3"],
      orderNote: "Delivery",
    },
    footer: { line: "Handcrafted donuts. Brossard. Every day.", follow: "Follow us", tag: "donut shop" },
    ticker: ["Donut shop", "Handcrafted daily", "Pull up", "Until sold out", "Ube", "Mango + Tajín", "Stay stoked"],
    lang: "Language",
  },
} as const;

export type Copy = (typeof COPY)[Lang];
