import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, whatsapp } from "@/lib/site";

export const Route = createFileRoute("/produtos/$categoria")({
  loader: ({ params }) => {
    const category = categories.find(c => c.slug === params.categoria);
    if (!category) throw notFound();
    return category;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.title ?? "Categoria"} | FreshFruti` },
    { name: "description", content: `Conheça ${loaderData?.title.toLowerCase() ?? "os produtos"} da FreshFruti em Vila Andrade. Consulte a disponibilidade e faça seu pedido pelo WhatsApp.` },
    { property: "og:title", content: `${loaderData?.title ?? "Produtos"} | FreshFruti` },
    { property: "og:description", content: `Explore ${loaderData?.title.toLowerCase() ?? "os produtos"} da FreshFruti e faça seu pedido pelo WhatsApp.` },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CategoryPage,
});
function CategoryPage() {
  const category = Route.useLoaderData();
  return <main>
    <div className="mx-auto max-w-7xl px-5 pt-8 md:px-10"><Link to="/produtos" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> Todos os produtos</Link></div>
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-14 pt-8 md:grid-cols-2 md:items-center md:gap-14 md:px-10 md:pb-20"><div><p className="mb-3 text-sm font-semibold text-primary">Produtos / {category.title}</p><h1 className="text-4xl font-bold text-primary md:text-6xl">{category.title}</h1><p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">{category.note} Confira nossa seleção e consulte a disponibilidade pelo WhatsApp.</p><Button asChild className="mt-7 rounded-full px-6"><a href={whatsapp(`Olá! Gostaria de saber quais ${category.title.toLowerCase()} estão disponíveis.`)} target="_blank" rel="noopener noreferrer">Consultar no WhatsApp <ArrowRight /></a></Button></div><img src={category.image} alt={`Seleção de ${category.title.toLowerCase()}`} width={1200} height={912} className="aspect-[4/3] w-full rounded-md object-cover" /></section>
    <section className="bg-secondary/40"><div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20"><h2 className="text-2xl font-bold text-primary md:text-3xl">Explore {category.title.toLowerCase()}</h2><div className="mt-8 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">{category.items.map(item => <div key={item.name} className="border-t border-border py-6"><h3 className="text-lg font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p></div>)}</div><p className="mt-8 text-sm text-muted-foreground">A seleção pode variar. Consulte a disponibilidade antes de pedir.</p></div></section>
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-10"><h2 className="text-2xl font-bold text-primary">Continue explorando</h2><div className="mt-6 flex flex-wrap gap-3">{categories.filter(c => c.slug !== category.slug).map(c => <Link key={c.slug} to="/produtos/$categoria" params={{ categoria: c.slug }} className="rounded-full border border-border px-5 py-2 text-sm font-medium hover:border-primary hover:text-primary">{c.title}</Link>)}</div></section>
  </main>;
}
