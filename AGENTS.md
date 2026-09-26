<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep FreshFruti category copy and WhatsApp/contact constants in a shared client-safe module; multiple content routes need one consistent source.
- Use a shared site shell for navigation and footer, with category-specific content under `/produtos/$categoria`; this makes every category shareable and navigable.
- Use a public Google Maps address embed and external directions link without an API key; this locates the shop but does not assert a delivery boundary.
