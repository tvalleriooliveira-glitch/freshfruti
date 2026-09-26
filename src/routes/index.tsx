import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import hero from "@/assets/hero-produce.jpg";
import { CategoryGrid } from "@/components/category-grid";
import { Button } from "@/components/ui/button";
import { address, mapsLink, whatsapp } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "FreshFruti | Hortifruti em Vila Andrade" },
    { name: "description", content: "Frutas, verduras, legumes e temperos para Vila Andrade, Panamby e Morumbi. Conheça os produtos FreshFruti e faça seu pedido pelo WhatsApp." },
    { property: "og:title", content: "FreshFruti | A horta na sua porta" },
    { property: "og:description", content: "Conheça os produtos da FreshFruti e peça pelo WhatsApp em Vila Andrade, Panamby e Morumbi." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

function Home() {
  return <main>
    <section className="relative flex min-h-[490px] items-end overflow-hidden bg-foreground md:min-h-[570px]">
      <img src={hero} alt="Frutas, verduras e temperos frescos" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-24 text-primary-foreground md:px-10 md:pb-18">
        <p className="mb-5 inline-flex rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase text-accent-foreground">FreshFruti · Vila Andrade</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] md:text-6xl">A horta na sua porta.</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg">Frutas, verduras, legumes e temperos para deixar sua rotina mais fresca e saborosa.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90"><Link to="/produtos">Conhecer produtos <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Pedir no WhatsApp</a></Button></div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-22">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-sm font-semibold text-primary">A nossa seleção</p><h2 className="text-3xl font-bold text-primary md:text-4xl">Produtos</h2></div><Link to="/produtos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Ver todos <ArrowRight className="size-4" /></Link></div>
      <CategoryGrid newTab />
    </section>
    <section className="bg-secondary/45"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-22"><div><p className="mb-2 text-sm font-semibold text-primary">Perto de você</p><h2 className="text-3xl font-bold text-primary md:text-4xl">Onde entregamos</h2><p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Levamos frescor para Vila Andrade, Panamby e Morumbi. Confira seu endereço e combine a entrega pelo WhatsApp.</p><div className="mt-6 flex flex-wrap gap-2">{["Vila Andrade", "Panamby", "Morumbi"].map(place => <span key={place} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary">{place}</span>)}</div><Button asChild variant="outline" className="mt-8 rounded-full border-primary px-5 text-primary hover:bg-secondary"><Link to="/entregas">Ver entregas <ArrowRight /></Link></Button></div><a href={mapsLink} target="_blank" rel="noopener noreferrer" className="group flex min-h-64 items-end rounded-md bg-primary p-8 text-primary-foreground md:min-h-76"><div><MapPin className="mb-8 size-9 text-accent" /><p className="text-sm font-medium">Visite a FreshFruti</p><p className="mt-2 max-w-sm text-xl font-semibold">{address}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:underline">Abrir no Google Maps <ArrowRight className="size-4" /></span></div></a></div></section>
    <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-10 md:py-20"><div><h2 className="text-3xl font-bold text-primary md:text-4xl">Vamos montar sua cesta?</h2><p className="mt-3 text-muted-foreground">Fale com a gente e consulte os produtos disponíveis.</p></div><Button asChild size="lg" className="rounded-full px-7"><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp <ArrowRight /></a></Button></section>
  </main>;
}
