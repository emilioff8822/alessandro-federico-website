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
│   ├── layout.tsx              ✅ Font, Navbar, Footer, SmoothScroll, StructuredData, metadataBase, title template
│   ├── globals.css             ✅ Variabili CSS brand, scrollbar, selezione testo, prose-skin blog
│   ├── page.tsx                ✅ Homepage: Hero → Divider → Servizi → CTASection — metadata con keyword Milano
│   ├── sitemap.ts              ✅ Sitemap dinamica (pagine statiche + blog)
│   ├── robots.ts               ✅ robots.txt con allow/disallow e link sitemap
│   ├── manifest.ts             ✅ Web App Manifest (PWA-ready)
│   ├── icon.png                ✅ Favicon (copia di logo.png)
│   ├── apple-icon.png          ✅ Apple touch icon
│   ├── chi-sono/
│   │   └── page.tsx            ✅ Foto + bio, 3 sezioni filosofia, BreadcrumbJsonLd
│   ├── specialita/
│   │   └── page.tsx            ✅ Palette a scacchiera Derm./Med.Est., BreadcrumbJsonLd
│   ├── recensioni/
│   │   └── page.tsx            ✅ Carousel + nota privacy + CTA, BreadcrumbJsonLd
│   ├── prima-e-dopo/
│   │   └── page.tsx            ✅ Gallery filtrabile + nota etica, BreadcrumbJsonLd
│   ├── contatti/
│   │   └── page.tsx            ✅ Form + tag <address> semantico, BreadcrumbJsonLd
│   ├── prenota/
│   │   └── page.tsx            ✅ 3 piattaforme + contatti + orari, BreadcrumbJsonLd
│   ├── skin/
│   │   ├── page.tsx            ✅ Lista articoli blog, BreadcrumbJsonLd
│   │   └── [slug]/page.tsx     ✅ Articolo SSG + BlogPosting JSON-LD + Author Box E-E-A-T
│   └── actions/
│       └── contact.ts          ✅ Server Action Resend con template email brand Federico
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
│   │   └── ContactForm.tsx     ✅ Form con area (Derm/Med.Est/Altro), Suspense, stati idle/pending/success/error
│   ├── seo/
│   │   ├── JsonLd.tsx           ✅ Helper generico per script JSON-LD
│   │   ├── BreadcrumbJsonLd.tsx ✅ Breadcrumb strutturato per pagine interne
│   │   └── StructuredData.tsx   ✅ IndividualPhysician + PhysiciansOffice + WebSite (Schema.org v24+)
│   └── providers/
│       ├── PageTransition.tsx  ✅ Fade + slide (initial opacity:1 per compatibilità mobile)
│       └── SmoothScroll.tsx    ✅ Lenis smooth scroll
│
├── data/
│   ├── siteConfig.ts           ✅ Nome, tel, email, nav links, orari
│   ├── servizi.ts              ✅ 2 macro-aree, 10 sotto-servizi con dettagli e punti
│   ├── testimonianze.ts        ✅ 8 recensioni con nome, città, trattamento, stelle, testo
│   ├── prima-e-dopo.ts         ✅ 6 casi con titolo, trattamento, categoria, descrizione, slot foto
│   └── blog.ts                 ✅ 2 articoli con slug, titolo, categoria, abstract, corpo HTML, tags
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
| 9 | Pagina Contatti + Server Action | ✅ Completato | Form Resend, pre-selezione area via URL param (?area=dermatologia), orari, info contatto |
| 10 | Pagina Prenota | ✅ Completato | Card telefono + form contatti + orari. Variabile BOOKING_URL pronta per iframe Doctolib/Calendly |
| 11 | Blog Skin | ✅ Completato | `data/blog.ts` con 2 articoli; lista su `/skin`; articolo singolo SSG su `/skin/[slug]`; prose-skin CSS per typography |
| 12 | SEO Completo (YMYL) | ✅ Completato | JSON-LD: IndividualPhysician + PhysiciansOffice + WebSite + BreadcrumbList + BlogPosting. Sitemap, robots.txt, manifest. Metadata con keyword locali "Milano" su ogni pagina. Author box E-E-A-T nel blog. Tag `<address>` semantico nei contatti. Immagini rinominate SEO-friendly. h1 con keyword nella Hero |
| 13 | Polish finale | ⏳ Da fare | Build check, responsive test, accessibilità, deploy Vercel |

---

## DA FARE — PROSSIMI STEP

### BLOCCO 13 — Polish
- `npx next build` senza errori
- Test responsive mobile/tablet/desktop
- Configurare dominio + variabili d'ambiente su Vercel

---

## DIPENDENZE ESTERNE DA CONFIGURARE

| Servizio | Stato | Azione necessaria |
|---|---|---|
| Resend | ✅ Configurato | Account dedicato su Resend, dominio `alessandrofederico.it` verificato, DNS su Aruba (DKIM, SPF, DMARC, MX). Mail a `alfederico89@gmail.com` |
| Piattaforme prenotazione | ✅ Configurate | iDoctors `/medico/16985/0`, Santagostino `/persone/alessandro-federico`, Cup Solidale `/medico/e53e...` |
| Dominio | ✅ Acquistato | `alessandrofederico.it` su Aruba — da collegare a Vercel al momento del deploy |
| Vercel | ⏳ Non configurato | Collegare il repository GitHub a Vercel per il deploy automatico |
| Google Business Profile | ⏳ Da creare | Fattore #1 per il Local Pack "dermatologo Milano" — creare/rivendicare su business.google.com |
| Google Search Console | ⏳ Da configurare | Registrare il sito, inviare la sitemap, monitorare errori |
