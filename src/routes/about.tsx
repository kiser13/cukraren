import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Dessert, Leaf, Armchair, Users, CreditCard, Car, Baby } from "lucide-react";
import aboutImage from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O nás — Cukráreň Amando" },
      {
        name: "description",
        content:
          "Spoznajte Cukráreň Amando. Vlastná výroba zákuskov a zmrzliny, útulná atmosféra a štyri prevádzky v Bratislave a Pezinku.",
      },
          { property: "og:title", content: "O nás — Cukráreň Amando" },
      {
        property: "og:description",
        content:
          "Spoznajte Cukráreň Amando. Vlastná výroba zákuskov a zmrzliny, útulná atmosféra a štyri prevádzky.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: aboutImage },
      { name: "twitter:image", content: aboutImage },
    ],
  }),
  component: AboutPage,
});

const features = [
  { icon: Coffee, label: "Skvelá káva" },
  { icon: Dessert, label: "Výborné dezerty" },
  { icon: Leaf, label: "Bohatý výber čajov" },
  { icon: Armchair, label: "Pohodlné posedenie" },
  { icon: Users, label: "Priestor pre skupiny" },
  { icon: CreditCard, label: "Platba kartou aj NFC" },
  { icon: Car, label: "Parkovanie v okolí" },
  { icon: Baby, label: "Vhodné pre deti" },
];

function AboutPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
              O nás
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cukráreň Amando je rodinné podnikateľské srdce, kde každý deň pečieme a pripravujeme
              zákusky podľa vlastných receptúr. Našou prioritou je čerstvosť, kvalitné suroviny a
              úsmev, ktorý k dobrému dezertu neodmysliteľne patrí.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Okrem tradičných zákuskov a tort vyrábame aj domácu zmrzlinu, ktorá si získala priazeň
              malých aj veľkých. Veríme, že každá návšteva u nás má byť malým okamihom radosti.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Dnes nájdete Amado v Bratislave-Petržalke a na troch miestach v Pezinku — v centre, v
              OC Molo a pri TESCO. Každá prevádzka je pripravená ponúknuť vám to najlepšie z nášho
              sortimentu.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src={aboutImage}
                alt="Útulný interiér Cukrárne Amado s čerstvými zákuskami"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-foreground">
            Čo u nás nájdete
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel/10">
                  <feature.icon className="h-5 w-5 text-caramel" />
                </div>
                <span className="font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
