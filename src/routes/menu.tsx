import { createFileRoute } from "@tanstack/react-router";
import { Cake, IceCream, Coffee, CupSoda, Sandwich } from "lucide-react";
import menuImage from "@/assets/menu.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cukráreň Amado" },
      {
        name: "description",
        content:
          "Ponuka Cukrárne Amado: čerstvé zákusky, domáca zmrzlina, káva, čaj a rýchle občerstvenie. Bratislava a Pezinok.",
      },
      { property: "og:title", content: "Menu — Cukráreň Amado" },
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

const menuCategories = [
  {
    icon: Cake,
    title: "Zákusky",
    items: [
      { name: "Tiramisu", price: "3,90 €" },
      { name: "Sacher torta", price: "4,20 €" },
      { name: "Ovocný rez", price: "3,50 €" },
      { name: "Panna cotta", price: "3,80 €" },
      { name: "Laskonka", price: "2,90 €" },
      { name: "Profiterolky", price: "4,50 €" },
    ],
  },
  {
    icon: IceCream,
    title: "Zmrzlina",
    items: [
      { name: "Vanilková", price: "2,20 €" },
      { name: "Čokoládová", price: "2,20 €" },
      { name: "Jahodová", price: "2,20 €" },
      { name: "Pistáciová", price: "2,50 €" },
      { name: "Mix 2 príchute", price: "3,20 €" },
      { name: "Zmrzlinový pohár", price: "4,90 €" },
    ],
  },
  {
    icon: Coffee,
    title: "Káva",
    items: [
      { name: "Espresso", price: "2,00 €" },
      { name: "Double espresso", price: "2,40 €" },
      { name: "Cappuccino", price: "2,60 €" },
      { name: "Latte macchiato", price: "2,90 €" },
      { name: "Flat white", price: "2,80 €" },
      { name: "Iced coffee", price: "3,20 €" },
    ],
  },
  {
    icon: CupSoda,
    title: "Čaj a nápoje",
    items: [
      { name: "Čierny čaj", price: "2,00 €" },
      { name: "Zelený čaj", price: "2,00 €" },
      { name: "Bylinkový čaj", price: "2,20 €" },
      { name: "Čaj ovocný", price: "2,20 €" },
      { name: "Limonáda", price: "2,80 €" },
      { name: "Voda", price: "1,50 €" },
    ],
  },
  {
    icon: Sandwich,
    title: "Rýchle občerstvenie",
    items: [
      { name: "Croissant", price: "2,10 €" },
      { name: "Slaný koláč", price: "2,80 €" },
      { name: "Bageta", price: "4,50 €" },
      { name: "Muffin", price: "2,40 €" },
      { name: "Chlebík s nátierkou", price: "3,20 €" },
    ],
  },
];

function MenuPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Naše menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Čerstvé zákusky, domáca zmrzlina, výborná káva a ďalšie dobroty.
            Ceny sú orientačné a môžu sa líšiť podľa prevádzky.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {menuCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-caramel/10">
                  <category.icon className="h-5 w-5 text-caramel" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {category.title}
                </h2>
              </div>
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-3 last:border-0"
                  >
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="shrink-0 font-display font-semibold text-caramel">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
