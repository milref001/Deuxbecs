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

const media = (n: number) => ({
  clip: `/assets/world/scene-0${n}.mp4`,
  mobileClip: `/assets/world/scene-0${n}-mobile.mp4`,
  mobilePoster: `/assets/world/scene-0${n}-mobile-poster.png`,
  poster: `/assets/world/scene-0${n}-poster.png`,
});

export const scrollScrubScenesFr: ScrollScrubScene[] = [
  {
    ...media(1),
    body: "Pas ici. Deux Becs fait le 1%: le beigne carré artisanal, fait à la main à Brossard.",
    id: "ch-rond",
    kicker: "Maison du beigne",
    label: "Le 1%",
    title: "99% des beignes sont ronds.",
  },
  {
    ...media(2),
    align: "right",
    body: "Fait à la main tous les jours, en petites fournées. Quand c'est vendu, c'est vendu.",
    id: "ch-fait-main",
    label: "Fait main",
    title: "Carré. Fait main. Chaque jour.",
  },
  {
    ...media(3),
    body: "Chocolat classique, crème ube, goyave, babeurre à l'ancienne. Des saveurs de LA, de Manille et d'ici.",
    id: "ch-saveurs",
    label: "Saveurs",
    title: "Classiques, saisonniers, culturels.",
  },
  {
    ...media(4),
    align: "right",
    body: "Glaçage à la mangue, flocons de chili et lime. Sucré, acidulé, un peu piquant.",
    id: "ch-mangue",
    label: "Mangue",
    tags: ["Mer au ven, 12h à 19h", "Sam et dim, 9h à 17h"],
    title: "Mangue + Tajín.",
  },
];

export const scrollScrubScenesEn: ScrollScrubScene[] = [
  {
    ...media(1),
    body: "Not here. Deux Becs makes the 1%: the handmade square donut, made in Brossard.",
    id: "ch-rond",
    kicker: "Maison du beigne",
    label: "The 1%",
    title: "99% of donuts are round.",
  },
  {
    ...media(2),
    align: "right",
    body: "Made by hand every day, in small batches. When it's sold out, it's sold out.",
    id: "ch-fait-main",
    label: "Handmade",
    title: "Square. Handmade. Daily.",
  },
  {
    ...media(3),
    body: "Classic chocolate, ube cream, guava, old-fashioned buttermilk. Flavours from LA, Manila and right here.",
    id: "ch-saveurs",
    label: "Flavours",
    title: "Classic, seasonal, cultural.",
  },
  {
    ...media(4),
    align: "right",
    body: "Mango glaze, chili-lime flakes. Sweet, tangy, a little heat.",
    id: "ch-mangue",
    label: "Mango",
    tags: ["Wed to Fri, 12pm to 7pm", "Sat and Sun, 9am to 5pm"],
    title: "Mango + Tajín.",
  },
];
