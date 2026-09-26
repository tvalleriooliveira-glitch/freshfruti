import { createFileRoute } from "@tanstack/react-router";
import { CategoryGrid } from "@/components/category-grid";

export const Route = createFileRoute("/produtos")({
  head: () => ({ meta: [
    { title: "Produtos | FreshFruti" },
    { name: "description", content: "Explore frutas, verduras, legumes e temperos da FreshFruti em Vila Andrade, São Paulo." },
    { property: "og:title", content: "Produtos | FreshFruti" },
    { property: "og:description", content: "Encontre sua categoria preferida de frutas, verduras, legumes e temperos na FreshFruti." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Products,
});
function Products() { return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-14 md:px-10 md:py-20"><p className="mb-2 text-sm font-semibold text-primary">FreshFruti</p><h1 className="text-4xl font-bold text-primary md:text-5xl">Produtos</h1><p className="mb-10 mt-4 max-w-xl leading-relaxed text-muted-foreground">Explore nossas categorias e descubra o que colocar na sua próxima cesta.</p><CategoryGrid /></main>; }
