import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/site";

export function CategoryGrid({ newTab = false }: { newTab?: boolean }) {
  return <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">{categories.map(category =>
    <Link key={category.slug} to="/produtos/$categoria" params={{ categoria: category.slug }} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} className="group block min-w-0 overflow-hidden rounded-md border border-border bg-card transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-primary">
      <div className="aspect-[4/3] overflow-hidden bg-secondary"><img src={category.image} alt={`Seleção de ${category.title.toLowerCase()}`} width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
      <div className="flex min-h-25 items-start justify-between gap-2 p-4 md:p-5"><div><h3 className="text-lg font-semibold text-foreground md:text-xl">{category.title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{category.note}</p></div><ArrowUpRight className="mt-1 size-5 shrink-0 text-primary" /></div>
    </Link>)}</div>;
}
