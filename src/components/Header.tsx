import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Domov" },
  { to: "/about", label: "O nás" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Prevádzky" },
  { to: "/contact", label: "Kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Cake className="h-6 w-6 text-caramel" />
          <span className="font-display text-xl font-semibold tracking-tight">Cukráreň Amando</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-caramel font-medium" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/locations">
            <Button variant="accent" size="sm">
              Navštívte nás
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-border bg-card px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                activeProps={{ className: "text-caramel font-medium" }}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/locations" onClick={() => setIsOpen(false)}>
              <Button variant="accent" className="mt-2 w-full">
                Navštívte nás
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
