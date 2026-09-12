import { createFileRoute } from "@tanstack/react-router";
import { Cake, IceCream, Coffee, CupSoda, Sandwich } from "lucide-react";
import menuImage from "@/assets/menu.jpg";
import { menuCategories } from "@/content/site-content";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cukráreň Amando" },
      {
        name: "description",
        content:
          "Ponuka Cukrárne Amado: čerstvé zákusky, domáca zmrzlina, káva, čaj a rýchle občerstvenie. Bratislava a Pezinok.",
      },
      { property: "og:title", content: "Menu — Cukráreň Amando" },
      {
        property: "og:description",
        content:
          "Ponuka Cukrárne Amado: čerstvé zákusky, domáca zmrzlina, káva, čaj a rýchle občerstvenie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: menuImage },
      { name: "twitter:image", content: menuImage },
    ],
  }),
  component: MenuPage,
});

const categoryIcons = {
  cakes: Cake,
  iceCream: IceCream,
  coffee: Coffee,
  drinks: CupSoda,
  snacks: Sandwich,
} as const;

function MenuPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Naše menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Čerstvé zákusky, domáca zmrzlina, výborná káva a ďalšie dobroty. Ceny sú orientačné a
            môžu sa líšiť podľa prevádzky.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {menuCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.key];
            return (
              <div
                key={category.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-caramel/10">
                    <CategoryIcon className="h-5 w-5 text-caramel" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {category.title}
                  </h2>
                </div>
                <ul className="mt-6 space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 border-b border-dashed border-border pb-3 last:border-0"
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="h-14 w-14 shrink-0 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-caramel/10">
                            <CategoryIcon className="h-6 w-6 text-caramel/60" />
                          </div>
                        )}
                        <span className="truncate font-medium text-foreground">{item.name}</span>
                      </div>
                      <span className="shrink-0 font-display font-semibold text-caramel">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-muted p-6 text-center text-sm text-muted-foreground">
          Ponuku si môžete pozrieť aj online na{" "}
          <a
            href="https://wolt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-caramel underline hover:text-terracotta"
          >
            Wolt
          </a>{" "}
          a na{" "}
          <a
            href="https://cukraren-amado.eatbu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-caramel underline hover:text-terracotta"
          >
            eatbu.com
          </a>
          .
        </div>
      </section>
    </main>
  );
}
