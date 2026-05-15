import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { path: "/", label: "Главная" },
  { path: "/law-allowed", label: "Закон разрешает" },
  { path: "/moral-required", label: "Мораль требует" },
  { path: "/conscience", label: "По совести" },
  { path: "/choice", label: "Как выбрать" },
  { path: "/survey", label: "Опрос" },
];

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-sm uppercase tracking-widest font-bold text-foreground">
            Lex & Mos
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-foreground font-semibold border-b-2 border-foreground pb-0.5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm uppercase tracking-wide ${
                  location.pathname === link.path
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
      <footer className="border-t border-border mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center text-sm text-muted-foreground">
          <span className="uppercase tracking-widest font-bold text-foreground">Lex & Mos</span>
          <span>{new Date().getFullYear()} — Право и мораль в аспекте возможного</span>
        </div>
      </footer>
    </div>
  );
}