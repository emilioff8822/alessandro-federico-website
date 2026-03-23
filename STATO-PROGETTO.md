# STATO PROGETTO — Sito Web Dr. Alessandro Federico

> Documento di avanzamento aggiornato progressivamente.
> Leggibile da zero da qualsiasi developer o AI senza contesto pregresso.
> Contiene: stack, colori, font, struttura file, stato blocchi, regole operative.

---

## CONTESTO

Sito web professionale per il **Dr. Alessandro Federico**, specialista in
**Dermatologia** e **Medicina Estetica**.

- **Repository GitHub**: `emilioff8822/alessandro-federico-website`
- **Cartella locale**: `C:\Users\Drink Kong\alessandro-federico-website`
- **Dev server**: `npm run dev` → `http://localhost:3000`
- **Deploy futuro**: Vercel, collegato al branch `main`

---

## STACK TECNOLOGICO

| Tecnologia | Versione | Scopo |
|---|---|---|
| Next.js (App Router) | 16.x | Framework React con SSR/SSG |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x + `@tailwindcss/postcss` | Styling utility-first |
| Framer Motion | 12.x | Animazioni e transizioni |
| Lenis | 1.x | Smooth scroll |
| Lucide React | 0.5x+ | Iconografia SVG |
| Resend | 6.x | Invio email dal form contatti (da configurare) |

---

## IDENTITÀ VISIVA

### Colori

| Nome | Hex | Uso |
|---|---|---|
| Accent primario | `#7AAEC9` | Accenti, bordi, highlights |
| Accent scuro | `#4A7D9A` | Hover, ombre |
| Gradient brand (navbar/footer) | `linear-gradient(135deg, #3D7A97 0%, #4E8FAC 100%)` | Navbar, Footer, icone hero |
| Gradient CTA scuro | `linear-gradient(135deg, #2A5F7A, #3D7A97)` | Sezioni CTA finali |
| Surface chiaro | `#F4F7FA` | Sfondi card alternati |
| Sfondo pagina | `#FFFFFF` | Base bianca |

### Palette Specialità (Analogous Hue Split)

**Dermatologia** — tono teal (azzurro-verde):
- Banner: `linear-gradient(135deg, #3A8A9E, #4D9DB2)`
- Accent: `#3A8A9E` | Accent testo: `#2D6E7E`
- Sfondo chiaro: `#F4F9FB` | Sfondo medio: `#E6F1F5`

**Medicina Estetica** — tono slate-blue (azzurro-viola):
- Banner: `linear-gradient(135deg, #4A6FA5, #5E83B8)`
- Accent: `#4A6FA5` | Accent testo: `#3B5A8A`
- Sfondo chiaro: `#F4F6FB` | Sfondo medio: `#E8ECF5`

### Font

| Variabile CSS | Font Google | Uso |
|---|---|---|
| `--font-heading` | **DM Serif Display** | Titoli, nomi, citazioni |
| `--font-sans` | **DM Sans** | Body, label, bottoni, UI |

### Asset disponibili in `public/images/`

| File | Descrizione |
|---|---|
| `logo.png` | Logo del Dr. Federico (blu acciaio) |
| `foto-dottore.png` | Foto del dottore in camice bianco, sfondo grigio neutro, alta qualità |
| `foto-hero.png` | Copia di `foto-dottore.png` (usata come fallback) |

---

## REGOLE OPERATIVE (per AI/developer)

1. **Lingua**: rispondere sempre in italiano
2. **Commit**: MAI fare `git commit` o `git push` senza autorizzazione esplicita del cliente
3. **Shell PowerShell**: usare `;` come separatore comandi (non `&&`)
4. **Stile codice**: niente commenti ovvi, codice pulito e tipizzato
5. **Animazioni**: easing principale `cubic-bezier(0.22, 1, 0.36, 1)`
6. **Colori**: mai usare preset Tailwind (es. `blue-600`), solo valori custom coerenti col brand
7. **Mobile first**: il sito deve essere perfetto su mobile
8. **next/image**: usare sempre `quality={100}` per le foto del dottore
9. **Navbar**: testo tipografico "Dr. Alessandro Federico" (senza logo immagine)
10. **Footer**: testo tipografico (senza logo immagine), 3 colonne, centrato su mobile
11. **Interattività**: hover e active state dei bottoni devono essere eleganti (no colori scuri aggressivi)
12. **Swipe carousel**: su mobile usare `onTouchStart/onTouchEnd`, non librerie esterne

---

## STRUTTURA FILE (attuale)

```
alessandro-federico-website/
├── app/
│   ├── layout.tsx              ✅ Font DM Serif Display + DM Sans, Navbar, Footer, SmoothScroll
│   ├── globals.css             ✅ Variabili CSS brand, scrollbar, selezione testo
│   ├── page.tsx                ✅ Homepage: Hero → Divider → Servizi → CTASection
│   ├── icon.png                ✅ Favicon (copia di logo.png)
│   ├── apple-icon.png          ✅ Apple touch icon
│   ├── chi-sono/
│   │   └── page.tsx            ✅ Foto + bio, 3 sezioni filosofia con sfondi alternati, CTA
│   ├── specialita/
│   │   └── page.tsx            ✅ Pagina completa, palette a scacchiera Dermatologia/Med. Estetica
│   └── recensioni/
│       └── page.tsx            ✅ Hero + Carousel + nota privacy + CTA
│
│   ├── prima-e-dopo/
│   │   └── page.tsx            ✅ Hero + gallery filtrabile + nota etica + CTA
│   ── DA CREARE ──
│   ├── contatti/
│   │   └── page.tsx            ⏳ BLOCCO 9 — form + orari
│   ├── prenota/
│   │   └── page.tsx            ⏳ BLOCCO 10 — embed/redirect prenotazione
│   ├── skin/
│   │   ├── page.tsx            ⏳ BLOCCO 11 — lista articoli blog
│   │   └── [slug]/page.tsx     ⏳ BLOCCO 11 — articolo singolo
│   ├── structured-data.tsx     ⏳ BLOCCO 12 — JSON-LD Schema.org
│   └── actions/
│       └── contact.ts          ⏳ BLOCCO 9 — Server Action Resend
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ✅ Fixed, hamburger mobile, link attivi, testo brand
│   │   └── Footer.tsx          ✅ 3 colonne, gradient brand, orari, centrato mobile
│   ├── sections/
│   │   ├── Hero.tsx            ✅ Split layout, foto + testo, parallax, mobile clean
│   │   ├── CTASection.tsx      ✅ Gradiente scuro, logo watermark, 2 bottoni
│   │   ├── Servizi.tsx         ✅ 2 SpotlightCard (Derm. + Med. Est.)
│   │   ├── RecensioniCarousel.tsx ✅ Auto-scroll 5.5s, swipe mobile, dots, frecce desktop
│   │   └── PrimaEDopoGallery.tsx  ✅ Filtri per categoria, griglia Before/After, placeholder
│   ├── ui/
│   │   ├── CTAButton.tsx       ✅ 3 varianti (normal/solid/inverted), customColor prop
│   │   ├── FadeIn.tsx          ✅ Fade + slide on scroll (Framer Motion + useInView)
│   │   ├── TextReveal.tsx      ✅ Reveal parola per parola
│   │   ├── SectionLabel.tsx    ✅ Trattino corto + testo uppercase accent
│   │   ├── SpotlightCard.tsx   ✅ Card con spotlight radiale mouse-tracking
│   │   └── Divider.tsx         ✅ Separatore sfumato
│   │   ── DA CREARE ──
│   │   └── ContactForm.tsx     ⏳ BLOCCO 9 — form con useSearchParams + Suspense
│   └── providers/
│       ├── PageTransition.tsx  ✅ Fade + slide (initial opacity:1 per compatibilità mobile)
│       └── SmoothScroll.tsx    ✅ Lenis smooth scroll
│
├── data/
│   ├── siteConfig.ts           ✅ Nome, tel, email, nav links, orari
│   ├── servizi.ts              ✅ 2 macro-aree, 10 sotto-servizi con dettagli e punti
│   ├── testimonianze.ts        ✅ 8 recensioni con nome, città, trattamento, stelle, testo
│   └── prima-e-dopo.ts         ✅ 6 casi con titolo, trattamento, categoria, descrizione, slot foto
│
├── public/
│   └── images/
│       ├── logo.png            ✅ Logo fornito dal cliente
│       ├── foto-dottore.png    ✅ Foto alta qualità fornita dal cliente
│       └── foto-hero.png       ✅ Copia di foto-dottore.png
│
├── next.config.ts              ✅ images.qualities: [85, 95, 100]
├── .env.local                  ✅ RESEND_API_KEY=placeholder (da sostituire con chiave reale)
└── tsconfig.json               ✅
```

---

## AVANZAMENTO BLOCCHI

| # | Blocco | Stato | Note |
|---|---|---|---|
| 1 | Setup repository + Next.js | ✅ Completato | GitHub repo `emilioff8822/alessandro-federico-website`, primo commit |
| 2 | Fondamenta (globals, font, config) | ✅ Completato | DM Serif Display + DM Sans, variabili CSS brand, siteConfig |
| 3 | Layout (Navbar + Footer) | ✅ Completato | Gradient brand, hamburger mobile, orari nel footer |
| 4 | Homepage | ✅ Completato | Hero parallax, Servizi cards, CTASection watermark |
| 5 | Pagina Specialità | ✅ Completato | Palette a scacchiera Derm./Med.Est., layout alternato, CTA per sezione |
| 6 | Pagina Chi Sono | ✅ Completato | Foto + bio, 3 sezioni con sfondi alternati, Scarica CV, CTA |
| 7 | Pagina Recensioni | ✅ Completato | Carousel auto-scroll 5.5s, swipe mobile, frecce desktop, dots |
| 8 | Pagina Prima e Dopo | ✅ Completato | Griglia filtrabile (Tutti/Derm./Med.Est.), card before/after side-by-side, placeholder foto, nota etica |
| 9 | Pagina Contatti + Server Action | ⏳ Da fare | Form Resend, pre-selezione area via URL param, orari |
| 10 | Pagina Prenota | ⏳ Da fare | Dipende dalla piattaforma scelta (Doctolib / Calendly / custom) |
| 11 | Blog Skin | ⏳ Da fare | Lista articoli + pagina singolo articolo con slug dinamico |
| 12 | SEO + Favicon + Metadata | ⏳ Parziale | Metadata base su ogni pagina ✅; manca JSON-LD structured data |
| 13 | Polish finale | ⏳ Da fare | Build check, responsive test, accessibilità, deploy Vercel |

---

## DA FARE — PROSSIMI STEP

### BLOCCO 9 — Contatti
- `components/ui/ContactForm.tsx` — campi: Nome, Email, Tipo (Derm/Med.Est/Altro), Messaggio
- Pre-selezione via URL param (`?area=dermatologia`)
- `app/actions/contact.ts` — Server Action con Resend
- Template email HTML elegante
- `app/contatti/page.tsx` — form + orari
- **Nota**: sostituire `RESEND_API_KEY=placeholder` in `.env.local` con chiave reale da [resend.com](https://resend.com)

### BLOCCO 10 — Prenota
- Decidere piattaforma (Doctolib / MioDottore / Calendly / embed custom)
- `app/prenota/page.tsx` con embed o redirect

### BLOCCO 11 — Blog Skin
- Struttura dati (`data/blog.ts` o MDX)
- Lista articoli (`app/skin/page.tsx`)
- Articolo singolo (`app/skin/[slug]/page.tsx`)

### BLOCCO 12 — SEO completa
- `app/structured-data.tsx` — JSON-LD: `MedicalBusiness`, `Person`, `WebSite`
- Verificare canonical, openGraph, favicon su tutte le pagine

### BLOCCO 13 — Polish
- `npx next build` senza errori
- Test responsive mobile/tablet/desktop
- Configurare dominio + variabili d'ambiente su Vercel

---

## DIPENDENZE ESTERNE DA CONFIGURARE

| Servizio | Stato | Azione necessaria |
|---|---|---|
| Resend | ⏳ API key placeholder | Creare account su resend.com, ottenere API key, aggiungerla a `.env.local` e a Vercel |
| Piattaforma prenotazione | ⏳ Non decisa | Il cliente deve scegliere tra Doctolib, MioDottore, Calendly o soluzione custom |
| Dominio | ⏳ Non configurato | Acquistare dominio (es. `alessandrofederico.it`) e collegarlo a Vercel |
| Vercel | ⏳ Non configurato | Collegare il repository GitHub a Vercel per il deploy automatico |
