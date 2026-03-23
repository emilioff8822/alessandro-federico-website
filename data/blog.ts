export interface Articolo {
  slug: string
  titolo: string
  categoria: string
  data: string
  tempoLettura: string
  abstract: string
  corpo: string // HTML semplice
  tags: string[]
}

export const articoli: Articolo[] = [
  {
    slug: "protezione-solare-tutto-lanno",
    titolo: "Protezione solare: perché va usata tutto l'anno",
    categoria: "Dermatologia",
    data: "2025-03-10",
    tempoLettura: "4 min",
    abstract:
      "L'SPF non è solo una questione estiva. I raggi UVA penetrano le nuvole e il vetro delle finestre 365 giorni l'anno. Scopri come scegliere la protezione giusta e come integrarla nella routine quotidiana.",
    tags: ["Prevenzione", "UV", "Routine Pelle"],
    corpo: `
      <p>Uno degli errori più comuni nella cura della pelle è considerare la protezione solare come un prodotto stagionale. In realtà, i raggi ultravioletti — in particolare gli UVA — sono presenti tutto l'anno, anche nelle giornate nuvolose e in ambienti chiusi con finestre.</p>

      <h2>UVA vs UVB: qual è la differenza?</h2>
      <p>I raggi <strong>UVB</strong> sono responsabili delle scottature e variano con le stagioni. I raggi <strong>UVA</strong>, invece, mantengono un'intensità quasi costante durante l'anno. Penetrano in profondità nel derma, accelerando l'invecchiamento cutaneo e aumentando il rischio di melanoma.</p>

      <h2>Come scegliere il filtro giusto</h2>
      <p>Per un uso quotidiano, un SPF 30 ad ampio spettro (UVA + UVB) è sufficiente nella maggior parte dei casi. In estate o in alta montagna, si raccomanda SPF 50+. La texture è importante quanto il fattore: una crema solare che non piace non viene applicata con costanza.</p>

      <h2>Integrazione nella routine</h2>
      <p>La protezione solare va applicata come ultimo step della routine mattutina, dopo il siero e la crema idratante, prima del trucco. La quantità raccomandata è circa <strong>un quarto di cucchiaino per il viso</strong>. Va riapplicata ogni due ore in caso di esposizione diretta.</p>

      <h2>Il mio consiglio</h2>
      <p>Scegli una texture che ami. Esistono formule ultra-leggere, opacizzanti, con tinta, senza profumo. La migliore protezione è quella che usi davvero ogni giorno — indipendentemente dalla stagione.</p>
    `,
  },
  {
    slug: "acne-adulta-cause-e-trattamenti",
    titolo: "Acne adulta: cause, miti e trattamenti efficaci",
    categoria: "Dermatologia",
    data: "2025-02-18",
    tempoLettura: "5 min",
    abstract:
      "L'acne non è solo un problema dell'adolescenza. Sempre più adulti — soprattutto donne tra i 25 e i 45 anni — ne soffrono. Capire le cause è il primo passo per un trattamento efficace.",
    tags: ["Acne", "Pelle Adulta", "Trattamenti"],
    corpo: `
      <p>L'acne adulta è in aumento e rappresenta una delle richieste più frequenti in studio. Colpisce prevalentemente le donne tra i 25 e i 45 anni, ma può interessare entrambi i sessi. A differenza dell'acne adolescenziale, si localizza spesso sulla parte inferiore del viso, mandibola e collo.</p>

      <h2>Le cause principali</h2>
      <p>Le cause dell'acne adulta sono multifattoriali:</p>
      <ul>
        <li><strong>Alterazioni ormonali</strong> — ciclo mestruale, pillola, gravidanza, menopausa</li>
        <li><strong>Stress cronico</strong> — aumenta il cortisolo, che stimola le ghiandole sebacee</li>
        <li><strong>Cosmetici comedogenici</strong> — alcuni prodotti occludono i pori</li>
        <li><strong>Alimentazione</strong> — il latte e gli alimenti ad alto indice glicemico possono peggiorare l'acne in soggetti predisposti</li>
      </ul>

      <h2>I miti da sfatare</h2>
      <p><strong>Mito 1: l'acne è causata da scarsa igiene.</strong> Non è così. Lavare il viso troppo spesso può anzi peggiorare la situazione, alterando il film idrolipidico cutaneo.</p>
      <p><strong>Mito 2: bisogna asciugare la pelle.</strong> Anche le pelli grasse hanno bisogno di idratazione. Denutrite, producono ancora più sebo come meccanismo compensatorio.</p>

      <h2>Trattamenti efficaci</h2>
      <p>Il trattamento va personalizzato in base alla gravità e alle cause. Le opzioni includono:</p>
      <ul>
        <li>Retinoidi topici (adapalene, tretinoina)</li>
        <li>Perossido di benzoile</li>
        <li>Antibiotici topici o sistemici (cicli brevi)</li>
        <li>Terapia ormonale (in caso di componente endocrina)</li>
        <li>Peeling chimici in studio per le cicatrici residue</li>
      </ul>

      <h2>Quando consultare un dermatologo</h2>
      <p>Se l'acne persiste da più di 3 mesi nonostante le cure fai-da-te, lascia cicatrici o ha un impatto sulla qualità della vita, è il momento di una valutazione specialistica. Prima si interviene, più facile è contenere i danni a lungo termine.</p>
    `,
  },
]

export function getArticoloBySlug(slug: string): Articolo | undefined {
  return articoli.find((a) => a.slug === slug)
}
