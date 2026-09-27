/**
 * Scene data for the Deux Becs scroll-scrub journey.
 *
 * Single-shot film, cut into four contiguous segments (one per chapter). Each
 * segment's poster is the exact first frame of its encoded clip. Two module
 * constants (FR / EN) so the array identity is stable per language.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#FF2E72",
  background: "#1F2060",
  ink: "#F4EE8B",
  muted: "#E9E4B8",
};

// Viewport-heights of scroll per chapter (engine default is 1.4).
const CHAPTER_SCROLL = 0.8;

const media = (n: number) => ({
  scroll: CHAPTER_SCROLL,
  clip: `/assets/world/scene-0${n}.mp4`,
  mobileClip: `/assets/world/scene-0${n}-mobile.mp4`,
  mobilePoster: `/assets/world/scene-0${n}-mobile-poster.jpg`,
  poster: `/assets/world/scene-0${n}-poster.jpg`,
});

export const scrollScrubScenesFr: ScrollScrubScene[] = [
  {
    ...media(1),
    body: "Frits et glacés à la main à Brossard, chaque jour qu'on est ouverts. Zéro raccourci.",
    id: "ch-rond",
    kicker: "Maison du beigne",
    label: "Fait main",
    title: "Fait main. Tous. Les. Jours.",
  },
  {
    ...media(2),
    align: "right",
    body: "Chaque beigne est fait par notre gang, chaque jour qu'on est ouverts. Du vrai monde, de la vraie pâte.",
    id: "ch-fait-main",
    label: "Fait main",
    title: "Fait main. Fait par nous.",
  },
  {
    ...media(3),
    body: "Chocolat bien fait, crème ube, goyave, babeurre à l'ancienne. Des saveurs qui font tripper.",
    id: "ch-saveurs",
    label: "Saveurs",
    title: "Classique. Saisonnier. Un peu fou.",
  },
  {
    ...media(4),
    align: "right",
    body: "Glaçage mangue, flocons chili-lime. Sucré, acidulé, piquant. Le kickflip des beignes.",
    id: "ch-mangue",
    label: "Mangue",
    tags: ["Mer au ven, 12h à 19h", "Sam et dim, 9h à 17h"],
    title: "Mangue + Tajín.",
  },
];

export const scrollScrubScenesEn: ScrollScrubScene[] = [
  {
    ...media(1),
    body: "Fried and glazed by hand in Brossard, every day we're open. Zero shortcuts.",
    id: "ch-rond",
    kicker: "Donut shop",
    label: "Handcrafted",
    title: "Handcrafted. Every. Single. Day.",
  },
  {
    ...media(2),
    align: "right",
    body: "Every donut is made by our crew, every day we're open. Real people, real dough.",
    id: "ch-fait-main",
    label: "By hand",
    title: "Made by hand. Made by us.",
  },
  {
    ...media(3),
    body: "Chocolate done right, ube cream, guava, buttermilk old-fashioned. Stuff worth getting stoked on.",
    id: "ch-saveurs",
    label: "Flavours",
    title: "Classic. Seasonal. A little weird.",
  },
  {
    ...media(4),
    align: "right",
    body: "Mango glaze, chili-lime flakes. Sweet, tangy, spicy. The kickflip of donuts.",
    id: "ch-mangue",
    label: "Mango",
    tags: ["Wed to Fri, 12pm to 7pm", "Sat and Sun, 9am to 5pm"],
    title: "Mango + Tajín.",
  },
];
