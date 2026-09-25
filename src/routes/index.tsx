import { createFileRoute } from "@tanstack/react-router";
import heroProduce from "@/assets/hero-produce.jpg";
import deliveryMap from "@/assets/delivery-map.jpg";
import logoAsset from "@/assets/freshfruti-logo.png.asset.json";

const WHATSAPP_NUMBER = "5511996663529";
const WHATSAPP_DISPLAY = "11 99666-3529";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de fazer um pedido 🥕",
)}`;
const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;
const ADDRESS = "R. Fábio Lopes dos Santos Luz, 189";
const NEIGHBORHOOD = "Vila Andrade · São Paulo - SP · 05724-005";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`${ADDRESS}, Vila Andrade, São Paulo - SP, 05724-005`);

export const Route = createFileRoute("/")({
  component: FreshFrutiLanding,
  head: () => ({
    meta: [
      { title: "FreshFruti — A horta na sua porta | Hortifruti em Vila Andrade" },
      {
        name: "description",
        content:
          "Frutas, verduras, legumes e temperos recém-colhidos entregues na sua casa em Vila Andrade, São Paulo. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "FreshFruti — A horta na sua porta" },
      {
        property: "og:description",
        content:
          "Hortifruti fresquinho com entrega domicílio em Vila Andrade e arredores, São Paulo. Peça pelo WhatsApp: 11 99666-3529.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function FreshFrutiLanding() {
  return (
    <div className="min-h-dvh bg-background text-foreground font-body antialiased max-w-[560px] mx-auto ring-1 ring-black/5">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-cream/95 border-b-4 border-ink backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <img
              src={logoAsset.url}
              alt="FreshFruti"
              width={40}
              height={40}
              className="h-9 w-auto"
            />
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-leaf text-cream text-sm font-bold border-2 border-ink rounded-full px-4 py-2 active:bg-sprout transition-colors"
          >
            Pedir
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pt-8 pb-4">
        <div className="rise">
          <p className="inline-block bg-mango text-ink text-[11px] font-mono font-medium uppercase tracking-[0.18em] border-2 border-ink rounded-full px-3 py-1">
            Feira de Vila Andrade · SP
          </p>
          <h1 className="font-display font-extrabold text-[clamp(2.4rem,9vw,3.6rem)] leading-[1.02] tracking-[-0.03em] mt-4 max-w-[14ch]">
            A HORTA NA SUA PORTA
          </h1>
          <p className="text-pretty text-muted-foreground text-[15px] mt-4 max-w-[38ch]">
            Frutas, verduras e temperos recém-colhidos, entregues na sua casa em
            Vila Andrade e arredores.
          </p>
        </div>

        <img
          src={heroProduce}
          alt="Cesta de frutas, verduras e temperos frescos sobre mesa de madeira"
          width={1088}
          height={816}
          className="mt-6 w-full aspect-[4/3] object-cover bg-sprout/25 border-2 border-ink rounded-[28px] pop"
        />

        <div className="mt-5 grid gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mango text-ink text-lg font-bold border-2 border-ink rounded-full px-6 py-4 text-center shadow-[5px_5px_0_#449137] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
          >
            Pedir pelo WhatsApp
          </a>
          <a
            href="#categorias"
            className="bg-cream text-leaf text-base font-bold border-2 border-ink rounded-full px-6 py-3.5 text-center hover:bg-sprout/15 transition-colors"
          >
            Ver as categorias
          </a>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y-4 border-ink bg-mango py-2 mt-6">
        <div className="marquee flex whitespace-nowrap gap-8 font-mono text-xs uppercase tracking-[0.15em] text-ink">
          <span>
            · Colhido hoje · Vila Andrade · WhatsApp 11 99666-3529 · Entrega rápida
            · Sem agrotóxico ·
          </span>
          <span>
            · Colhido hoje · Vila Andrade · WhatsApp 11 99666-3529 · Entrega rápida
            · Sem agrotóxico ·
          </span>
        </div>
      </div>

      {/* Categories */}
      <section id="categorias" className="px-4 py-9">
        <div className="rise">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            (a)
          </p>
          <h2 className="font-display font-bold text-[1.75rem] tracking-[-0.02em]">
            Escolha da feira
          </h2>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <CategoryCard
            n="01"
            title="Frutas"
            desc="manga, banana, uva, melancia"
            tone="sprout"
          />
          <CategoryCard
            n="02"
            title="Verduras"
            desc="alface, couve, rúcula, espinafre"
            tone="cream"
          />
          <CategoryCard
            n="03"
            title="Legumes"
            desc="abobrinha, cenoura, tomate, beterraba"
            tone="cream"
          />
          <CategoryCard
            n="04"
            title="Temperos"
            desc="manjericão, alecrim, salsinha, cebolinha"
            tone="sprout"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-leaf text-cream px-4 py-10 border-y-4 border-ink">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-sprout">
          (b)
        </p>
        <h2 className="font-display font-bold text-[1.75rem] tracking-[-0.02em]">
          Como funciona
        </h2>
        <div className="mt-6 space-y-4">
          <StepCard n="1" title="Escolha" desc="monte sua cesta direto no WhatsApp" />
          <StepCard
            n="2"
            title="Receba"
            desc="entregamos na sua porta, fresquinho"
          />
          <StepCard
            n="3"
            title="Cozinhe"
            desc="feira da roça na sua cozinha"
          />
        </div>
      </section>

      {/* Delivery area */}
      <section className="px-4 py-9">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          (c)
        </p>
        <h2 className="font-display font-bold text-[1.75rem] tracking-[-0.02em]">
          Onde entregamos
        </h2>
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="block mt-5">
          <img
            src={deliveryMap}
            alt="Mapa da região de entrega em Vila Andrade, São Paulo"
            width={1088}
            height={720}
            loading="lazy"
            className="w-full aspect-[3/2] object-cover bg-sprout/20 border-2 border-ink rounded-3xl hover:opacity-95 transition-opacity"
          />
        </a>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>Vila Andrade</Pill>
          <Pill>Jardim Londrina</Pill>
          <Pill>Jardim Guedalla</Pill>
          <Pill tone="mango">+ arredores</Pill>
        </div>
      </section>

      {/* Contact */}
      <section id="pedir" className="px-4 py-9 bg-cream border-t-4 border-ink">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          (d)
        </p>
        <h2 className="font-display font-bold text-[1.75rem] tracking-[-0.02em]">
          Fale com a gente
        </h2>
        <p className="text-pretty text-muted-foreground text-[15px] mt-3 max-w-[36ch]">
          Faça seu pedido pelo WhatsApp ou passe na banca. Atendemos todos os
          dias.
        </p>
        <div className="mt-5 space-y-2 text-[15px]">
          <p className="font-medium">{ADDRESS}</p>
          <p className="text-muted-foreground">{NEIGHBORHOOD}</p>
          <a
            href={PHONE_LINK}
            className="font-mono text-leaf font-medium pt-1 block hover:underline"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex bg-leaf text-cream text-lg font-bold border-2 border-ink rounded-full px-6 py-4 w-full justify-center shadow-[5px_5px_0_#f8981d] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
        >
          Chamar no WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="px-4 pt-6 pb-28 text-center">
        <span className="font-display font-bold text-lg tracking-[-0.01em]">FreshFruti</span>
        <p className="text-[11px] text-muted-foreground mt-1">
          hortifruti de bairro · desde a roça até sua porta
        </p>
      </footer>

      {/* Fixed WhatsApp bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[560px] px-4 py-3 bg-cream/95 border-t-2 border-ink backdrop-blur z-40">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-mango text-ink text-base font-bold border-2 border-ink rounded-full px-6 py-3.5 text-center active:translate-y-[2px] transition-transform"
        >
          Pedir pelo WhatsApp · {WHATSAPP_DISPLAY}
        </a>
      </div>
    </div>
  );
}

function CategoryCard({
  n,
  title,
  desc,
  tone,
}: {
  n: string;
  title: string;
  desc: string;
  tone: "sprout" | "cream";
}) {
  return (
    <div
      className={`border-2 border-ink rounded-3xl p-4 flex flex-col justify-between min-h-[150px] ${
        tone === "sprout" ? "bg-sprout/25" : "bg-cream"
      }`}
    >
      <span className="font-mono text-[11px] text-leaf">{n}</span>
      <span className="font-display font-bold text-2xl tracking-[-0.02em]">
        {title}
      </span>
      <span className="text-[12px] text-muted-foreground">{desc}</span>
    </div>
  );
}

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="bg-cream/10 border-2 border-cream/40 rounded-3xl p-4 flex gap-4 items-center">
      <span className="font-display font-extrabold text-4xl text-mango leading-none">
        {n}
      </span>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-cream/70 text-sm text-pretty">{desc}</p>
      </div>
    </div>
  );
}

function Pill({
  children,
  tone = "cream",
}: {
  children: React.ReactNode;
  tone?: "cream" | "mango";
}) {
  return (
    <span
      className={`border-2 border-ink rounded-full px-3 py-1.5 text-sm font-medium ${
        tone === "mango" ? "bg-mango" : "bg-cream"
      }`}
    >
      {children}
    </span>
  );
}
