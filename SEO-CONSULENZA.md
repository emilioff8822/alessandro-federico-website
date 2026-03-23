# Consulenza SEO — Sito Web Dr. Alessandro Federico

---

## Contesto del progetto

Stiamo sviluppando il sito web professionale del **Dr. Alessandro Federico**,
specialista in **Dermatologia** e **Medicina Estetica** con studio a Milano.

Il sito è costruito con **Next.js 16 (App Router)**, React 19, TypeScript, Tailwind CSS 4.
È un sito **statico/ibrido (SSG)** — tutte le pagine vengono pre-generate a build time.
Il deploy avverrà su **Vercel**, con dominio personalizzato `alessandrofederico.it` (già acquistato su Aruba).

### Struttura pagine attuali

| Route | Contenuto |
|---|---|
| `/` | Homepage: Hero, sezione Specialità, CTA |
| `/chi-sono` | Biografia, filosofia, foto, CV |
| `/specialita` | Dermatologia (5 sotto-servizi) + Medicina Estetica (5 sotto-servizi) |
| `/recensioni` | 8 recensioni pazienti con carousel |
| `/prima-e-dopo` | Gallery Before/After per trattamento (solo placeholders per ora) |
| `/contatti` | Form di contatto (Resend) + info studio + orari |
| `/prenota` | Link a iDoctors, Santagostino, Cup Solidale |
| `/skin` | Blog di dermatologia (lista articoli) |
| `/skin/[slug]` | Articolo singolo (SSG con `generateStaticParams`) |

### Cosa è già presente (base)

- `metadata` con `title`, `description`, `alternates.canonical`, `openGraph` su ogni pagina
- Font Google: DM Serif Display (heading) + DM Sans (body)
- Favicon e Apple touch icon
- Tag `viewport` nella root layout
- `suppressHydrationWarning` su `<html>` e `<body>`
- Sitemap: **non ancora generata**
- `robots.txt`: **non ancora creato**
- **JSON-LD / Structured Data**: non ancora implementato — è il passo successivo

---

## Il professionista

**Dr. Alessandro Federico**
- Specializzazione: Dermatologo + Medicina Estetica
- Sede: Milano (indirizzo preciso non ancora confermato — da inserire)
- Telefono: da inserire
- Email: alfederico89@gmail.com
- Profili su piattaforme mediche: iDoctors, Santagostino, Cup Solidale

### Obiettivo SEO

Il Dr. Federico vuole essere trovato su Google principalmente per:
1. Ricerche **locali** — "dermatologo Milano", "medicina estetica Milano", "filler Milano"
2. Ricerche **di nome** — "Alessandro Federico dermatologo"
3. Ricerche **informative** — articoli del blog (es. "protezione solare tutto l'anno", "acne adulta cause")
4. Ricerche per **trattamento specifico** — "botox Milano", "peeling chimico Milano", "tricologia Milano"

---

## Le nostre domande per te

Hai piena libertà di strutturare la risposta come preferisci, ma ci interessano in particolare questi punti:

### 1. Structured Data (JSON-LD) — Priorità Alta
- Quali schema.org types sono più rilevanti per un medico specialista?
  (`MedicalBusiness`? `Physician`? `Person`? `WebSite`? `BreadcrumbList`? `FAQPage`? `Article`?)
- Dove va inserito ogni tipo di schema? (root layout, pagina specifica, articoli blog?)
- Per il blog, `Article` o `BlogPosting`? Cosa includere?
- Come gestire `MedicalSpecialty` correttamente?
- Come implementarli in Next.js App Router in modo pulito (componente `JsonLd`? `<script>` inline?)

### 2. Local SEO
- Come ottimizzare al meglio per "dermatologo Milano" e simili?
- Ha senso inserire `LocalBusiness` con `areaServed`?
- Google Business Profile: qual è il suo impatto rispetto al sito, e come i due si integrano?

### 3. Metadata avanzata
- `robots` meta tag: cosa impostare per pagine come `/prenota` o `/prima-e-dopo`?
- `alternates.canonical`: come gestire correttamente i duplicati potenziali?
- Open Graph images: vale la pena creare immagini OG personalizzate per Next.js 16? Come?
- Twitter/X card: necessario per un medico?

### 4. Sitemap + robots.txt in Next.js App Router
- Qual è il modo più pulito per generare `sitemap.xml` dinamicamente in Next.js App Router?
  (`app/sitemap.ts` con la funzione `Sitemap`?)
- Come escludere route non indicizzabili?
- `robots.txt` via `app/robots.ts` — cosa includere/escludere per questo tipo di sito?

### 5. Performance SEO (Core Web Vitals)
- Oltre a `next/image` e SSG, ci sono ottimizzazioni specifiche per Next.js 16 che dobbiamo applicare?
- Font: stiamo usando `next/font/google` con `display: 'swap'` — è corretto?
- LCP, CLS, FID: quali sono le trappole più comuni in un sito Next.js di questo tipo?

### 6. Blog SEO (`/skin`)
- Come strutturare al meglio i metadati degli articoli per Google Discover / Google News?
- Keywords density: c'è ancora rilevanza? Come approcciarsi ai contenuti medici senza cadere nel "keyword stuffing"?
- Per un medico, ci sono linee guida Google specifiche (YMYL — Your Money Your Life)?
  Come si impatta la E-E-A-T (Experience, Expertise, Authoritativeness, Trust)?

### 7. Priorità di implementazione
- Se potessimo fare solo 5 cose per massimizzare il SEO di questo sito, quali sarebbero?
- Cosa ha il ROI più alto per un professionista medico locale?

---

## Informazioni tecniche extra

- **Framework**: Next.js 16.2.1 (App Router, non Pages Router)
- **Rendering**: SSG (Static Site Generation) per tutte le pagine, incluso il blog
- **Deploy**: Vercel (branch `main`)
- **Dominio**: `alessandrofederico.it` — HTTPS su Vercel
- **Immagini**: `next/image` con `quality={100}` per la foto del dottore
- **Email**: Resend con dominio `alessandrofederico.it` verificato (DNS su Aruba)
- **Non abbiamo** ancora: sitemap, robots.txt, JSON-LD, OG images dinamiche

---

## Output atteso

Vorremmo ricevere:
1. Una **spiegazione chiara** delle priorità SEO per questo caso specifico
2. **Snippet di codice pronti** per Next.js App Router (TypeScript) dove applicabile
3. Un **ordine di implementazione** consigliato (cosa fare prima, cosa dopo)
4. Eventuali **avvertenze specifiche** per siti medici (YMYL, E-E-A-T, ecc.)

Grazie!
