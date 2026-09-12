import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, locations, phoneHref } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt — Cukráreň Amando" },
      {
        name: "description",
        content:
          "Kontaktujte Cukráreň Amando. Telefón, prevádzky v Bratislave a Pezinku, objednávky a rezervácie.",
      },
          { property: "og:title", content: "Kontakt — Cukráreň Amando" },
      {
        property: "og:description",
        content: "Kontaktujte Cukráreň Amando. Telefón, prevádzky a objednávky.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") || "Správa z webu");
    const body = [
      `Meno: ${formData.get("name")}`,
      `E-mail: ${formData.get("email")}`,
      "",
      String(formData.get("message")),
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSent(true);
  }

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Kontakt
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Máte otázku, objednávku alebo chcete rezervovať stôl? Ozvite sa nám — radi vám pomôžeme.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Rýchle informácie
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel/10">
                  <Phone className="h-5 w-5 text-caramel" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefón</p>
                  <a
                    href={phoneHref}
                    className="text-lg font-medium text-foreground hover:text-caramel"
                  >
                    {business.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel/10">
                  <Mail className="h-5 w-5 text-caramel" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-lg font-medium text-foreground hover:text-caramel"
                  >
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel/10">
                  <MapPin className="h-5 w-5 text-caramel" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hlavná prevádzka</p>
                  <p className="text-lg font-medium text-foreground">{locations[0].address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel/10">
                  <Clock className="h-5 w-5 text-caramel" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Otváracie hodiny</p>
                  <p className="text-lg font-medium text-foreground">{business.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-foreground">Napíšte nám</h2>
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Meno
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Vaše meno"
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-caramel focus:ring-2 focus:ring-caramel/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="vas@email.sk"
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-caramel focus:ring-2 focus:ring-caramel/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Predmet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Objednávka / otázka"
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-caramel focus:ring-2 focus:ring-caramel/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Správa
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Čo by ste nám chceli povedať?"
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-caramel focus:ring-2 focus:ring-caramel/20"
                />
              </div>
              <Button type="submit" variant="accent" className="mt-2 w-full sm:w-auto">
                Odoslať správu
              </Button>
              {isSent && (
                <p className="text-sm text-muted-foreground" role="status">
                  Otváram váš e-mailový program s pripravenou správou.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
