import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { address, directionsLink, mapEmbed, whatsapp } from "@/lib/site";

export const Route = createFileRoute("/entregas")({
  head: () => ({ meta: [
    { title: "Entregas em Vila Andrade, Panamby e Morumbi | FreshFruti" },
    { name: "description", content: "A FreshFruti atende Vila Andrade, Panamby e Morumbi. Veja a localização da loja e consulte a entrega no seu endereço pelo WhatsApp." },
    { property: "og:title", content: "Onde entregamos | FreshFruti" },
    { property: "og:description", content: "Entregas em Vila Andrade, Panamby e Morumbi. Encontre a FreshFruti no Google Maps." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Deliveries,
});
function Deliveries() { return <main className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20"><p className="mb-2 text-sm font-semibold text-primary">A horta na sua porta</p><h1 className="text-4xl font-bold text-primary md:text-5xl">Onde entregamos</h1><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">Atendemos Vila Andrade, Panamby e Morumbi. Para confirmar a entrega na sua rua, fale com a gente pelo WhatsApp.</p><div className="mt-7 flex flex-wrap gap-2">{["Vila Andrade", "Panamby", "Morumbi"].map(place => <span key={place} className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-primary">{place}</span>)}</div><div className="mt-10 overflow-hidden rounded-md border border-border bg-secondary"><iframe title="Localização da FreshFruti no Google Maps" src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 md:h-110" allowFullScreen /></div><div className="mt-7 flex flex-wrap items-center justify-between gap-6"><div className="flex items-start gap-3"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><p className="max-w-md font-medium">{address}</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="outline" className="rounded-full border-primary text-primary"><a href={directionsLink} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight /></a></Button><Button asChild className="rounded-full"><a href={whatsapp("Olá! Gostaria de confirmar a entrega no meu endereço.")} target="_blank" rel="noopener noreferrer">Consultar entrega <ArrowUpRight /></a></Button></div></div></main>; }
