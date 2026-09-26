import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { address, mapsLink, phone, whatsapp } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato | FreshFruti Vila Andrade" },
    { name: "description", content: "Entre em contato com a FreshFruti pelo WhatsApp ou visite nossa loja na Vila Andrade, São Paulo." },
    { property: "og:title", content: "Contato | FreshFruti" },
    { property: "og:description", content: "Peça pelo WhatsApp ou visite a FreshFruti em Vila Andrade, São Paulo." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Contact,
});
function Contact() { return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-14 md:px-10 md:py-20"><p className="mb-2 text-sm font-semibold text-primary">Estamos por perto</p><h1 className="text-4xl font-bold text-primary md:text-5xl">Fale com a gente</h1><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Quer montar sua cesta ou consultar uma entrega? É só chamar.</p><div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-2"><div><Phone className="mb-4 size-7 text-primary" /><h2 className="text-xl font-semibold">WhatsApp e telefone</h2><a href="tel:+5511996663529" className="mt-3 block text-muted-foreground hover:text-primary">{phone}</a><Button asChild className="mt-6 rounded-full px-6"><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp <ArrowUpRight /></a></Button></div><div><MapPin className="mb-4 size-7 text-primary" /><h2 className="text-xl font-semibold">Nossa loja</h2><p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{address}</p><a href={mapsLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">Abrir no Google Maps <ArrowUpRight className="size-4" /></a></div></div></main>; }
