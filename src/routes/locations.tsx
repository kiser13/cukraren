import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Prevádzky — Cukráreň Amado" },
      {
        name: "description",
        content:
          "Navštívte Cukráreň Amado v Bratislave-Petržalke alebo v Pezinku. OC Molo, centrum, TESCO a Topoľčianska ulica.",
      },
      { property: "og:title", content: "Prevádzky — Cukráreň Amado" },
      {
        property: "og:description",
        content:
          "Navštívte Cukráreň Amado v Bratislave-Petržalke alebo v Pezinku. Štyri prevádzky, jedna chuť.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LocationsPage,
});

const locations = [
  {
    name: "AMADO Bratislava",
    address: "Topoľčianska 22, 851 05 Bratislava-Petržalka",
    phone: "0908 389 536",
    hours: "Denne 10:00 – 20:00",
    mapQuery: "Cukráreň Amado, Topoľčianska 22, Bratislava",
  },
  {
    name: "AMADO OC Molo",
    address: "Myšenička 2/C, Pezinok",
    phone: "0908 389 536",
    hours: "Denne 10:00 – 20:00",
    mapQuery: "AMADO Cukráreň OC Molo, Myšenička 2/C, Pezinok",
  },
  {
    name: "AMADO Centrum",
    address: "Moyzesova 10, Pezinok",
    phone: "0908 389 536",
    hours: "Denne 10:00 – 20:00",
    mapQuery: "AMADO Cukráreň, Moyzesova 10, Pezinok",
  },
  {
    name: "AMADO TESCO",
    address: "Myšenička 2/B, Pezinok",
    phone: "0908 389 536",
    hours: "Denne 10:00 – 20:00",
    mapQuery: "AMADO Cukráreň TESCO, Myšenička 2/B, Pezinok",
  },
];

function LocationsPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Naše prevádzky
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Nájdete nás v Bratislave-Petržalke a na troch miestach v Pezinku.
            Každá prevádzka ponúka čerstvé zákusky a príjemné posedenie.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="font-display text-xl font-semibold text-foreground">
                {location.name}
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                  <span>{location.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-caramel" />
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                    {location.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-caramel" />
                  <span>{location.hours}</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <Navigation className="h-4 w-4" /> Navigovať
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
