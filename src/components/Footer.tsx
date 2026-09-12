import { Link } from "@tanstack/react-router";
import { Cake, Phone, MapPin, Clock } from "lucide-react";
import { business, locations, phoneHref } from "@/lib/business";

const footerLinks = [
  { to: "/", label: "Domov" },
  { to: "/about", label: "O nás" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Prevádzky" },
  { to: "/contact", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <Cake className="h-6 w-6 text-caramel" />
              <span className="font-display text-xl font-semibold">Cukráreň Amando</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cukráreň s vlastnou výrobou zákuskov a zmrzliny. Najlepšie zákusky a zmrzlina v meste.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Rýchle odkazy</h3>
            <nav className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Kontakt</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <a href={phoneHref} className="hover:text-foreground">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <span>{locations[0].address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <span>{business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cukráreň Amando. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
}
