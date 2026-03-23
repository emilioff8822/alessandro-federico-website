# Consulenza Logo — Dr. Alessandro Federico

## Contesto

Stiamo sviluppando il sito web professionale del **Dr. Alessandro Federico**,
dermatologo e medico estetico a Milano. Il sito è costruito con **Next.js 16 + Tailwind CSS 4 + Framer Motion**.

Il sito è già online su `www.alessandrofederico.it`.

---

## Il logo

Il logo è un simbolo grafico astratto con **tre archi curvi sovrapposti** in blu acciaio
(`#7AAEC9`), su sfondo bianco. È un logo **solo simbolo** — non include il nome del dottore.

**Il nome è già presente nella Navbar** in tipografia (DM Serif Display):
> "Dr. Alessandro Federico" con sottotitolo "Dermatologo · Medicina Estetica"

---

## Palette colori del sito

| Elemento | Colore |
|---|---|
| Accent primario | `#7AAEC9` (stesso blu del logo) |
| Accent scuro | `#4A7D9A` |
| Navbar/Footer gradient | `linear-gradient(135deg, #3D7A97, #4E8FAC)` |
| CTA scura | `linear-gradient(135deg, #2A5F7A, #3D7A97)` |
| Sfondo pagina | `#FFFFFF` |
| Surface card | `#F4F9FB` |

---

## Struttura attuale del sito

### Pagine:
- `/` Homepage — Hero (solo testo, no foto), sezione Specialità, CTA
- `/chi-sono` — Foto dottore + bio, 3 sezioni filosofia
- `/specialita` — Dermatologia + Medicina Estetica
- `/recensioni` — Carousel testimonianze
- `/prima-e-dopo` — Gallery before/after
- `/contatti` — Form + info studio
- `/prenota` — Link piattaforme prenotazione
- `/skin` — Blog articoli

### Componenti layout:
- **Navbar** — fixed top, gradient blu, testo "Dr. Alessandro Federico"
- **Footer** — gradient blu, 3 colonne, orari
- **CTASection** — sezione finale homepage, sfondo scuro con logo come watermark semitrasparente
- **Hero** — solo testo, niente foto attualmente

---

## Dove è usato il logo ADESSO

1. **Favicon** (`app/icon.png`) — versione piccola per tab browser
2. **Apple touch icon** (`app/apple-icon.png`)
3. **CTASection** homepage — come watermark decorativo semitrasparente in basso a destra

**Non è usato in**: Navbar, Footer, Hero, header pagine interne.

---

## La nostra domanda

Vogliamo aggiungere il logo in **punti strategici** del sito in modo **elegante e professionale**,
senza essere ridondanti o kitsch. Il logo deve essere un **tocco di classe** — presente ma sobrio.

Alcune idee che abbiamo:
- Logo in un **cerchio** o **quadrato arrotondato** come elemento decorativo
- Logo nella **Hero** come elemento grafico di supporto
- Logo negli **header delle pagine interne** accanto al titolo
- Logo nel **Footer** accanto al nome

### Chiediamo:

1. **Dove posizionare il logo** per massimizzare l'impatto visivo e la riconoscibilità del brand?
2. **Come presentarlo** — cerchio, quadrato, standalone, con ombra, con sfondo colorato?
3. **Dimensioni** consigliate per ogni contesto (navbar, hero, footer, header pagine)?
4. **Animazioni** — ha senso animarlo con Framer Motion? Se sì, come (fade, scale, rotate lento)?
5. **Cosa evitare** — errori comuni nel posizionamento di loghi simbolo senza wordmark?
6. **Fornisci snippet di codice** pronti in React/Tailwind per ogni posizionamento consigliato

### Vincoli tecnici:
- Il logo è un PNG con sfondo trasparente
- Colore: blu `#7AAEC9` — stesso del brand
- Su sfondi scuri (Navbar, Footer, CTA) il logo deve apparire **bianco** tramite CSS filter
- Su sfondi chiari il logo appare nel suo colore naturale blu
- Usare sempre `next/image` con `width` e `height` espliciti

---

## Output atteso

- Elenco dei **3-5 posizionamenti consigliati** con motivazione
- **Snippet di codice** React/Tailwind per ognuno
- Suggerimenti su **dimensioni e spaziatura**
- Eventuale **animazione Framer Motion** consigliata
