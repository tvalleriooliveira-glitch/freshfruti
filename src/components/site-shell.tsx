import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/freshfruti-logo.png";
import { address, categories, mapsLink, phone, whatsapp } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 md:h-22 md:px-10">
      <Link to="/" aria-label="FreshFruti, início" className="shrink-0"><img src={logo} alt="FreshFruti" className="h-12 w-auto md:h-16" /></Link>
      <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
        <Link to="/" activeOptions={{ exact: true }} className="text-sm font-medium hover:text-primary" activeProps={{ className: "text-primary" }}>Início</Link>
        <Link to="/produtos" className="text-sm font-medium hover:text-primary" activeProps={{ className: "text-primary" }}>Produtos</Link>
        <Link to="/entregas" className="text-sm font-medium hover:text-primary" activeProps={{ className: "text-primary" }}>Entregas</Link>
        <Link to="/contato" className="text-sm font-medium hover:text-primary" activeProps={{ className: "text-primary" }}>Contato</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Faça seu pedido <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav aria-label="Menu" className="grid gap-1 border-t border-border bg-background px-5 py-4 md:hidden" onClick={() => setOpen(false)}>
      <Link to="/" className="py-2 font-medium">Início</Link><Link to="/produtos" className="py-2 font-medium">Produtos</Link>
      {categories.map(c => <Link key={c.slug} to="/produtos/$categoria" params={{ categoria: c.slug }} className="py-1 pl-4 text-sm text-muted-foreground">{c.title}</Link>)}
      <Link to="/entregas" className="py-2 font-medium">Entregas</Link><Link to="/contato" className="py-2 font-medium">Contato</Link>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-secondary/40">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
      <div><Link to="/"><img src={logo} alt="FreshFruti" className="h-16 w-auto" /></Link><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">A horta na sua porta. Hortifruti em Vila Andrade, São Paulo.</p></div>
      <div><h2 className="mb-4 font-semibold">Explore</h2><div className="grid gap-3 text-sm text-muted-foreground"><Link to="/produtos" className="hover:text-primary">Produtos</Link><Link to="/entregas" className="hover:text-primary">Entregas</Link><Link to="/contato" className="hover:text-primary">Contato</Link></div></div>
      <div><h2 className="mb-4 font-semibold">Encontre a gente</h2><a className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground hover:text-primary" href={mapsLink} target="_blank" rel="noopener noreferrer"><MapPin className="mt-0.5 size-4 shrink-0" />{address}</a><a className="mt-3 block text-sm text-muted-foreground hover:text-primary" href="tel:+5511996663529">{phone}</a></div>
    </div><div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© FreshFruti · Feito com frescor em São Paulo</div>
  </footer>;
}
