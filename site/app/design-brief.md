# Deux Becs, maison du beigne: design brief

**Design read:** For hungry locals on the South Shore and Montreal donut hunters. The register is a photocopied skate-shop flyer: loud, funny, handmade, never precious.

**Concept spine:** "The flyer." The site is a punk show poster / skate zine stapled to a pole. Label strips cut and pasted, taped photos, marker scribbles. The film is the only glossy thing: the product is the headliner.

**Delivery tier:** cinema (scroll-scrub film carries the hero; everything else is static print with tactile hover).

**Locked palette (client brand, taken from their menu poster and logo):**
- Poster yellow `#F4EE8B` (paper ground)
- Ink navy `#1F2060` (type, blocks, film ground)
- Hot pink `#FF2E72` (single accent: stickers, tape, CTAs)
- Paper white `#FBFAF4`, off-black `#151515` (logo outline only)
Defense: these are Deux Becs' own poster colours. Not a banned family; yellow + navy + pink is their print identity.

**Locked type:**
- Display: Anton (condensed heavy, reads like a gig poster headline).
- Labels / menu strips: Courier Prime Bold (their menu poster is set in a typewriter face).
- Body: Space Grotesk.
- Scribbles: Permanent Marker, captions only (echoes their hand-drawn logo).
- The logo itself is their drippy wordmark as an image.
Justification: the typewriter + hand-lettered pairing is lifted from the client's existing posters.

Animation mode: animated-website

**Journey shape:** single-shot (one subject, seen ever closer: the square donut). One 15s film, cut into 4 contiguous segments so each chapter owns a quarter of the move; seams are exact because segments are consecutive frames of the same take.

**Journey:**
1. Wide overhead of the cooling rack. "Fait main. Chaque jour." (handmade daily; client asked to drop the square-donut hook since not all donuts are square). Kicker: Maison du beigne.
2. Camera descends over the rows. "Jusqu'à épuisement." Small batches, sold out = sold out.
3. Rotating in toward one donut. "Classiques, saisonniers, culturels." Ube, guava, chocolate, mango + Tajín.
4. Macro on the mango glaze and chili flakes. "Mangue + Tajín." Hours as proof tags.

**World grammar:** overhead top-down, steel wire rack on ink-navy painted plywood, soft top light, faint pink rim, locked exposure, no hands, no text.

**Mobile framing:** subject centred; copy sits in the lower band over the navy scrim; mobile encode capped at 720p.

**How the journey enacts the spine:** the flyer's headliner is the donut; the camera walks up to it like you walk up to the counter.

**Delivery budget:** desktop clips 32 MiB max total, mobile 16 MiB max total.

**Section plan:**
1. Journey (scroll-scrub, full-bleed film + chapter copy)
2. Menu: cut-and-paste collage of navy label strips + taped product prints (collage)
3. Photo wall: horizontal scroll strip of Instagram shots with marker captions (horizontal pan)
4. Story: duotone founders photo + copy, split (split image/text)
5. Visit: navy flyer with hours, address, ordering (flyer block)
6. Footer: giant logo + Instagram (sign-off)
Eyebrow budget: ceil(6/3) = 2 (chapter 1 kicker + menu).

**Asset plan:** scroll film (desktop + mobile, 4 segments, posters from encoded clips); client photos (menu prints, wall, story); drippy wordmark recreated as transparent PNG; custom hand-inked icon set (donut, clock, pin, skate, hand, camera); favicon set from the donut icon; OG/cover from a generated flat-lay with the wordmark composited.

**CTA inventory (each its own component):**
- `NavDirections`: pink tape strip, torn edges, tilts on hover.
- `LangToggle`: two-slot FR/EN sticker switch.
- `InstagramScribble`: text link, marker underline draws on hover (menu section).
- `OrderSticker`: round pink sticker, spins on hover (Uber Eats order).
- `DirectionsTicket`: ticket stub with perforation, stub tears on hover (visit section).
- `FooterInstagram`: giant handle with marker circle.
One label per intent: "Itinéraire / Directions", "Commander / Order", "@deuxbecs".

**Facts used (sourced):** 1200 boul. de Rome, Brossard QC J4W 3H3. Wed to Fri 12pm to 7pm, Sat to Sun 9am to 5pm or sold out, closed Mon and Tue. Founders Art Romero (LA-trained chef) and Philip Penalosa (Café Kuya); pop-ups first, shop opened January 2024 (Tastet).
