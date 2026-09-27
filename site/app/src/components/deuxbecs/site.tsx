import { useEffect, useRef } from "react";

import { COPY, LINKS, MENU_ITEMS, type Copy, type Lang } from "./copy";
import "./deuxbecs.css";

const A = "/assets";

/* ------------------------------------------------------------------ */
/* Scroll + pointer effects. One rAF loop writes CSS vars / transforms */
/* directly (never React state). Fully skipped under reduced motion.   */
/* ------------------------------------------------------------------ */
export function useDeuxBecsFx(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.add("db-reduced");
      return;
    }
    root.classList.add("db-fx");

    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      root.querySelectorAll<HTMLElement>("[data-fx]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const kind = el.dataset.fx;
        if (kind === "pan") {
          // Sticky horizontal pan: progress across the tall wrapper.
          const total = r.height - vh;
          const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
          const track = el.querySelector<HTMLElement>("[data-fx-track]");
          if (track) {
            const dist = track.scrollWidth - window.innerWidth + 48;
            track.style.transform = `translate3d(${-p * Math.max(0, dist)}px,0,0)`;
          }
          el.style.setProperty("--p", p.toFixed(4));
        } else if (kind === "end") {
          // Page-end progress: 0 when the element starts entering, 1 at the
          // very bottom of the page (the footer never scrolls past the top).
          const remaining = document.documentElement.scrollHeight - (window.scrollY + vh);
          const span = Math.max(1, Math.min(r.height, vh));
          const p = Math.min(1, Math.max(0, 1 - remaining / span));
          el.style.setProperty("--p", p.toFixed(4));
        } else {
          // Visibility progress: 0 entering from bottom, 1 leaving top.
          const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
          el.style.setProperty("--p", p.toFixed(4));
        }
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    // Pointer tilt on taped photo prints.
    const onMove = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-tilt]");
      if (!t) return;
      const r = t.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      t.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
      t.style.setProperty("--rx", `${(-y * 14).toFixed(2)}deg`);
    };
    const onLeave = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-tilt]");
      if (t) {
        t.style.setProperty("--ry", "0deg");
        t.style.setProperty("--rx", "0deg");
      }
    };

    // Donut rain: fire once when the footer comes into view.
    const rainObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("db-rain--go");
            rainObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    root.querySelectorAll("[data-rain]").forEach((el) => rainObserver.observe(el));

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerout", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      rainObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerout", onLeave);
      root.classList.remove("db-fx");
    };
  }, [rootRef]);
}

/* ------------------------------ CTAs ------------------------------- */

function NavDirections({ label }: { label: string }) {
  return (
    <a className="db-tape" href={LINKS.maps} rel="noreferrer" target="_blank">
      {label}
    </a>
  );
}

function LangToggle({ lang, onChange, label }: { lang: Lang; onChange: (l: Lang) => void; label: string }) {
  return (
    <div aria-label={label} className="db-lang" role="group">
      {(["fr", "en"] as const).map((l) => (
        <button
          aria-pressed={lang === l}
          className="db-lang__slot"
          key={l}
          onClick={() => onChange(l)}
          type="button"
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function InstagramScribble({ label }: { label: string }) {
  return (
    <a className="db-scribble-link" href={LINKS.instagram} rel="noreferrer" target="_blank">
      <img alt="" aria-hidden="true" className="db-scribble-link__icon" src={`${A}/icons/camera.png`} />
      <span>{label}</span>
      <svg aria-hidden="true" className="db-scribble-link__line" preserveAspectRatio="none" viewBox="0 0 300 20">
        <path d="M3 13 C 60 4, 110 18, 160 9 S 250 6, 297 12" />
      </svg>
    </a>
  );
}

function OrderSticker({ label, note }: { label: string; note: string }) {
  return (
    <a className="db-sticker" href={LINKS.order} rel="noreferrer" target="_blank">
      <span className="db-sticker__note">{note}</span>
      <span className="db-sticker__label">{label}</span>
      <img alt="" aria-hidden="true" className="db-sticker__icon" src={`${A}/icons/hand.png`} />
    </a>
  );
}

function DirectionsTicket({ label }: { label: string }) {
  return (
    <a className="db-ticket" href={LINKS.maps} rel="noreferrer" target="_blank">
      <span className="db-ticket__main">
        <img alt="" aria-hidden="true" src={`${A}/icons/pin.png`} />
        {label}
      </span>
      <span aria-hidden="true" className="db-ticket__stub">
        →
      </span>
    </a>
  );
}

function FooterInstagram({ label }: { label: string }) {
  return (
    <a className="db-foot-ig" href={LINKS.instagram} rel="noreferrer" target="_blank">
      <span className="db-foot-ig__small">{label}</span>
      <span className="db-foot-ig__handle">@deuxbecs</span>
      <svg aria-hidden="true" className="db-foot-ig__ring" viewBox="0 0 400 120">
        <path d="M30 70 C 20 20, 360 5, 380 55 C 395 100, 60 125, 25 80 C 10 60, 90 30, 150 28" />
      </svg>
    </a>
  );
}

/* ----------------------------- Sections ---------------------------- */

export function Nav({ c, lang, onLang }: { c: Copy; lang: Lang; onLang: (l: Lang) => void }) {
  return (
    <header className="db-nav">
      <a aria-label="Deux Becs" className="db-nav__logo" href="#top">
        <img alt="Deux Becs" src={`${A}/brand/logo.png`} />
      </a>
      <nav aria-label="Sections" className="db-nav__links">
        <a href="#menu">{c.nav.menu}</a>
        <a href="#mur">{c.nav.wall}</a>
        <a href="#histoire">{c.nav.story}</a>
        <a href="#visite">{c.nav.visit}</a>
      </nav>
      <div className="db-nav__end">
        <LangToggle label={c.lang} lang={lang} onChange={onLang} />
        <NavDirections label={c.directions} />
      </div>
    </header>
  );
}

export function Ticker({ c }: { c: Copy }) {
  const words = [...c.ticker, ...c.ticker];
  return (
    <div aria-hidden="true" className="db-ticker">
      <div className="db-ticker__track">
        {[0, 1].map((k) => (
          <div className="db-ticker__run" key={k}>
            {words.map((w, i) => (
              <span key={`${k}-${i}`}>
                {w}
                <img alt="" src={`${A}/icons/donut.png`} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const MENU_PRINTS = [
  { src: "flat-mangue.jpg", rot: -6 },
  { src: "flat-chocolat.jpg", rot: 5 },
  { src: "flat-ube.jpg", rot: -3 },
  { src: "flat-biscoff.jpg", rot: 7 },
];

export function MenuSection({ c, lang }: { c: Copy; lang: Lang }) {
  return (
    <section className="db-menu" id="menu">
      <div className="db-menu__head">
        <p className="db-kicker">{c.menu.kicker}</p>
        <h2 className="db-display db-menu__title">{c.menu.title}</h2>
        <p className="db-menu__note">{c.menu.note}</p>
        <InstagramScribble label={c.menu.ig} />
      </div>
      <ul className="db-menu__strips">
        {MENU_ITEMS.map((item, i) => (
          <li
            className={item.hot ? "db-strip db-strip--hot" : "db-strip"}
            key={item.name}
            style={{ "--i": i, "--r": `${((i * 37) % 7) - 3}deg` } as React.CSSProperties}
          >
            <span className="db-strip__name">{item.name}</span>
            {lang === "en" ? <span className="db-strip__en">{item.en}</span> : null}
          </li>
        ))}
      </ul>
      <div className="db-menu__prints">
        {MENU_PRINTS.map((p, i) => (
          <figure
            className="db-print"
            data-tilt=""
            key={p.src}
            style={{ "--rot": `${p.rot}deg` } as React.CSSProperties}
          >
            <span aria-hidden="true" className="db-print__tape" />
            <img alt={c.menu.captions[i]} loading="lazy" src={`${A}/photos/${p.src}`} />
            <figcaption>{c.menu.captions[i]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const WALL = [
  "counter-skate.jpg",
  "deuxbecs-bar.jpg",
  "flat-holes.jpg",
  "womp-womp.jpg",
  "filled-incorrectly.jpg",
  "flat-ube-cut.jpg",
  "old-fashioned-purple.jpg",
  "mangue-trio-yellow.jpg",
  "mangue-tajin-skate.jpg",
];

export function WallSection({ c }: { c: Copy }) {
  return (
    <section className="db-wall" data-fx="pan" id="mur">
      <div className="db-wall__sticky">
        <div className="db-wall__head">
          <img alt="" aria-hidden="true" className="db-wall__icon" src={`${A}/icons/skate.png`} />
          <h2 className="db-display">{c.wall.title}</h2>
          <p>{c.wall.sub}</p>
        </div>
        <div className="db-wall__viewport">
          <ul className="db-wall__track" data-fx-track="">
            {WALL.map((src, i) => (
              <li className="db-wall__item" key={src} style={{ "--i": i } as React.CSSProperties}>
                <img alt={c.wall.captions[i]} loading="lazy" src={`${A}/photos/${src}`} />
                <span className="db-marker">{c.wall.captions[i]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div aria-hidden="true" className="db-wall__progress">
          <span />
        </div>
      </div>
    </section>
  );
}

export function StorySection({ c }: { c: Copy }) {
  const [before, after] = c.story.p2.split(c.story.scribble);
  return (
    <section className="db-story" data-fx="progress" id="histoire">
      <div className="db-story__photos">
        <figure className="db-story__main" data-tilt="">
          <span aria-hidden="true" className="db-print__tape" />
          <img alt={c.story.photoAlt} loading="lazy" src={`${A}/photos/founders-halftone.png`} />
        </figure>
        <figure className="db-story__side" data-tilt="">
          <img alt={c.story.caption} loading="lazy" src={`${A}/photos/chef-kitchen.jpg`} />
          <figcaption className="db-marker">{c.story.caption}</figcaption>
        </figure>
        <figure aria-hidden="true" className="db-story__rack">
          <img alt="" loading="lazy" src={`${A}/photos/bw-rack.jpg`} />
        </figure>
      </div>
      <div className="db-story__copy">
        <h2 className="db-display db-story__title">{c.story.title}</h2>
        <p>{c.story.p1}</p>
        <p>
          {before}
          <span className="db-circled">
            {c.story.scribble}
            <svg aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 200 60">
              <path d="M12 34 C 8 10, 190 4, 192 28 C 195 52, 30 60, 10 38 C 2 26, 40 12, 80 10" />
            </svg>
          </span>
          {after}
        </p>
        <img alt="" aria-hidden="true" className="db-decks" loading="lazy" src={`${A}/brand/decks.png`} />
        <blockquote className="db-quote">
          <p>“{c.story.quote}”</p>
          <cite className="db-marker">{c.story.quoteBy}</cite>
        </blockquote>
      </div>
    </section>
  );
}

export function VisitSection({ c }: { c: Copy }) {
  return (
    <section className="db-visit" id="visite">
      <div aria-hidden="true" className="db-roll" data-fx="progress">
        <img alt="" className="db-roll__board" src={`${A}/icons/skate.png`} />
        <span className="db-roll__line" />
      </div>
      <h2 className="db-display db-visit__title">{c.visit.title}</h2>
      <div className="db-visit__grid">
        <div className="db-visit__block">
          <h3 className="db-visit__label">
            <img alt="" aria-hidden="true" src={`${A}/icons/clock.png`} />
            {c.visit.hoursTitle}
          </h3>
          <dl className="db-hours">
            {c.visit.hours.map(([d, h]) => (
              <div key={d}>
                <dt>{d}</dt>
                <dd>{h}</dd>
              </div>
            ))}
          </dl>
          <p className="db-marker db-visit__soldout">{c.visit.soldout}</p>
        </div>
        <div className="db-visit__block">
          <h3 className="db-visit__label">
            <img alt="" aria-hidden="true" src={`${A}/icons/pin.png`} />
            {c.visit.addrTitle}
          </h3>
          <address className="db-addr">
            {c.visit.addr.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <DirectionsTicket label={c.directions} />
        </div>
        <OrderSticker label={c.order} note={c.visit.orderNote} />
      </div>
    </section>
  );
}

// Resting spots for the donut rain. Donuts live in the side gutters only, so
// they never sit behind the footer text. x = desktop left %, xm = narrow-screen
// left % (hugging the edges), desk = hidden on narrow screens.
const RAIN = [
  { k: "square", x: 2, xm: -4, y: 4, r: -18, g: "pink", s: 64, d: 0 },
  { k: "filled", x: 12, xm: -2, y: 36, r: 0, g: "ube", s: 54, d: 120 },
  { k: "round", x: 5, xm: -5, y: 64, r: 28, g: "choc", s: 60, d: 260 },
  { k: "square", x: 16, xm: 0, y: 12, r: -8, g: "mango", s: 46, d: 60, desk: true },
  { k: "filled", x: 3, xm: -3, y: 86, r: 0, g: "mango", s: 50, d: 400 },
  { k: "round", x: 18, xm: 0, y: 78, r: 14, g: "ube", s: 40, d: 520, desk: true },
  { k: "round", x: 84, xm: 90, y: 40, r: 20, g: "pink", s: 52, d: 320 },
  { k: "filled", x: 90, xm: 91, y: 6, r: 0, g: "pink", s: 64, d: 180 },
  { k: "square", x: 94, xm: 93, y: 64, r: 10, g: "ube", s: 50, d: 20 },
  { k: "round", x: 80, xm: 88, y: 14, r: -12, g: "mango", s: 58, d: 240, desk: true },
  { k: "square", x: 95, xm: 92, y: 88, r: -30, g: "choc", s: 42, d: 460 },
];

export function Footer({ c }: { c: Copy }) {
  return (
    <footer className="db-foot" data-fx="end" data-rain="">
      <div aria-hidden="true" className="db-rain">
        {RAIN.map((d, i) => (
          <span
            className={`db-rain__donut db-rain__donut--${d.k} db-rain__donut--${d.g}${d.desk ? " db-rain__donut--desk" : ""}`}
            key={i}
            style={
              {
                "--x": `${d.x}%`,
                "--xm": `${d.xm}%`,
                "--y": `${d.y}%`,
                "--r": `${d.r}deg`,
                "--s": `${d.s}px`,
                "--d": `${d.d}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <img alt="Deux Becs" className="db-foot__logo" loading="lazy" src={`${A}/brand/logo.png`} />
      <p className="db-foot__line">{c.footer.line}</p>
      <FooterInstagram label={c.footer.follow} />
      <div aria-hidden="true" className="db-roll db-roll--foot">
        <span className="db-roll__rider">
          <img alt="" className="db-roll__board" src={`${A}/icons/skate.png`} />
        </span>
        <span className="db-roll__line" />
      </div>
      <p className="db-foot__small">© {new Date().getFullYear()} Deux Becs, {c.footer.tag}</p>
    </footer>
  );
}

export { COPY };
