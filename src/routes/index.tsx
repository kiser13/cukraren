import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Clock, ArrowRight, Cake, Coffee, IceCream } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import { business } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cukráreň Amando — Zákusky a zmrzlina v Bratislave a Pezinku" },
      {
        name: "description",
        content:
          "Cukráreň Amando ponúka vlastnú výrobu zákuskov a zmrzliny. Navštívte nás v Bratislave-Petržalke alebo v Pezinku. Dine-in, takeaway a donáška.",
      },
      {
        property: "og:title",
        content: "Cukráreň Amando — Zákusky a zmrzlina v Bratislave a Pezinku",
      },
      {
        property: "og:description",
        content:
          "Vlastná výroba zákuskov a zmrzliny. Navštívte nás v Bratislave-Petržalke alebo v Pezinku.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: Cake,
    title: "Vlastná výroba",
    text: "Každý deň pripravujeme čerstvé zákusky podľa vlastných receptúr.",
  },
  {
    icon: IceCream,
    title: "Domáca zmrzlina",
    text: "Vyrábame ju sami — vychutnajte si pravú chuť letných aj zimných dní.",
  },
  {
    icon: Coffee,
    title: "Výborná káva",
    text: "Skvelá káva, čajový výber a príjemné prostredie na prácu aj oddych.",
  },
];

function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Čerstvé zákusky a torty v Cukrárni Amado"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/60" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-3xl bg-card/90 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
            <div className="flex items-center gap-2 text-sm font-medium text-caramel">
              <Star className="h-4 w-4 fill-current" />
              <span>4,3 / 5 · 157 hodnotení</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Cukráreň Amando
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Najlepšie zákusky a zmrzlina v meste. Vlastná výroba, útulná atmosféra a štyri
              prevádzky v Bratislave a Pezinku.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-caramel" /> Bratislava & Pezinok
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-caramel" /> {business.hours}
              </span>
              <span>€1–10</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link to="/menu">
                  Pozrieť menu <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/locations">Kde nás nájdete</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Prečo Amado?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Spájame tradíciu cukrárskeho remesla s moderným prístupom a príjemným prostredím.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-caramel/10">
                <item.icon className="h-6 w-6 text-caramel" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-terracotta px-6 py-16 text-center sm:px-10">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Príďte ochutnať
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Čakajú na vás čerstvé zákusky, domáca zmrzlina a šálka výbornej kávy. Tešíme sa na vás!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/contact">Napísať nám</Link>
            </Button>
            <Button asChild size="lg" className="bg-cream text-foreground hover:bg-cream/90">
              <Link to="/locations">Navštívte nás</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
