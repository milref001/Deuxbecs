import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import {
  COPY,
  Footer,
  MenuSection,
  Nav,
  StorySection,
  Ticker,
  VisitSection,
  WallSection,
  useDeuxBecsFx,
} from "@/components/deuxbecs/site";
import { THEME_COLOR, type Lang } from "@/components/deuxbecs/copy";
import {
  scrollScrubScenesEn,
  scrollScrubScenesFr,
  scrollScrubTheme,
} from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ name: "theme-color", content: THEME_COLOR }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Courier+Prime:wght@400;700&family=Permanent+Marker&family=Space+Grotesk:wght@400;500;700&display=swap",
      },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  component: Index,
});

const LANG_KEY = "deuxbecs-lang";

function Index() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<Lang>("fr");
  useDeuxBecsFx(rootRef);

  // Restore a saved language after hydration (SSR always renders French).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "fr") setLang(saved);
    } catch {
      /* storage unavailable: stay on French */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const c = COPY[lang];
  const scenes = lang === "fr" ? scrollScrubScenesFr : scrollScrubScenesEn;

  return (
    <div className="db-root" id="top" ref={rootRef}>
      <Nav c={c} lang={lang} onLang={setLang} />
      <main>
        <ScrollScrub key={lang} scenes={scenes} theme={scrollScrubTheme} />
        <Ticker c={c} />
        <div className="db-grain">
          <MenuSection c={c} lang={lang} />
        </div>
        <WallSection c={c} />
        <div className="db-grain">
          <StorySection c={c} />
        </div>
        <VisitSection c={c} />
      </main>
      <div className="db-grain">
        <Footer c={c} />
      </div>
    </div>
  );
}
