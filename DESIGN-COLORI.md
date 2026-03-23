# Problema Design — Sistema colori pagina Specialità

## Contesto

Stiamo costruendo il sito web del **Dr. Alessandro Federico**, dermatologo e medico estetico.

### Brand

- **Logo**: forme curve astratte di colore azzurro su sfondo bianco (file: `public/images/logo.png`)
- **Colore brand principale**: `#7AAEC9` (blu acciaio morbido)
- **Gradiente navbar/footer**: `linear-gradient(135deg, #3D7A97, #4E8FAC)`
- **Base sito**: sfondo bianco `#FFFFFF`
- **Font heading**: DM Serif Display
- **Font body**: DM Sans
- **Stile generale**: elegante, minimale, professionale, medicale

### Lo stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4 (colori custom nel `@theme {}` di `globals.css`)
- Framer Motion per animazioni

---

## Il problema

La pagina **Specialità** (`/specialita`) ha **2 macro-aree**:

### 1. Dermatologia
Sotto-servizi:
- A. Dermatologia Clinica
- B. Malattie Sessualmente Trasmesse
- C. Tricologia
- D. Dermatoscopia
- E. Terapia Fisica

### 2. Medicina Estetica
Sotto-servizi:
- A. Filler
- B. Biolifting
- C. Tossina Botulinica
- D. Peeling
- E. Mesoterapia Lipolitica e Tricologica

---

## Il layout attuale

Ogni macro-area ha:
1. Un **banner colorato** (header che introduce la sezione)
2. I **sotto-servizi alternati** (layout testo sx / punti dx, poi invertito)

Il problema è che quando l'utente scorre la pagina, **non capisce a colpo d'occhio** se si trova nella sezione Dermatologia o Medicina Estetica. I colori sono troppo simili tra le due aree — entrambe usano variazioni dello stesso azzurro.

## Tentativo precedente (fallito)

Abbiamo provato:
- Dermatologia → azzurro/teal (`#EBF4F8`)
- Medicina Estetica → lavanda/viola (`#EEEDF8`)

**Rifiutato dal cliente** perché il viola è "infantile" e si discosta troppo dal brand blu. Tutto deve restare nel mondo del blu brand `#7AAEC9`.

---

## Cosa ci serve

Un sistema di colori che soddisfi TUTTI questi requisiti:

1. **Derivato dal blu brand `#7AAEC9`** — niente colori estranei
2. **Due famiglie riconoscibili** a colpo d'occhio: Dermatologia ≠ Medicina Estetica
3. **Scacchiera interna**: ogni sotto-servizio alterna 2 sfondi (es. bianco + tinta chiara)
4. **Professionale**: niente colori accesi, infantili o aggressivi
5. **Accessibile**: leggibilità del testo nero su sfondo chiaro (contrast ratio ≥ 4.5:1)
6. **Coerente con il brand**: il sito ha base bianca, navbar/footer azzurri, toni freddi

### Deliverable richiesto

Fornisci una palette con questi valori CSS per ogni macro-area:

```
Dermatologia:
  - banner gradient (from, to)
  - accent (pallini, label)
  - sfondo chiaro (righe pari)
  - sfondo medio (righe dispari)

Medicina Estetica:
  - banner gradient (from, to)
  - accent (pallini, label)
  - sfondo chiaro (righe pari)
  - sfondo medio (righe dispari)
```

### Suggerimenti di approccio

- Spostare sulla **temperatura del colore** (più freddo/più caldo restando nel blu)
- Oppure sulla **saturazione** (uno più saturo, l'altro più desaturato/grigio)
- Oppure sulla **luminosità** (uno leggermente più scuro, l'altro più chiaro)
- Guardare come i migliori siti medici/cliniche gestiscono sotto-sezioni (Mayo Clinic, Cleveland Clinic, Healthline, ecc.)

---

## Riferimento visivo — sito attuale

- Homepage: `http://localhost:3000`
- Specialità: `http://localhost:3000/specialita`
- Colori attuali nel codice: `app/specialita/page.tsx` → oggetto `areaThemes`
