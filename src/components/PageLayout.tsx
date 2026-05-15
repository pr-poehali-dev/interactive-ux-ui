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
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-sm uppercase tracking-widest font-bold text-neutral-900">
            Lex & Mos
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-0.5"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm uppercase tracking-wide ${
                  location.pathname === link.path
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
      <footer className="border-t border-neutral-200 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center text-sm text-neutral-400">
          <span className="uppercase tracking-widest font-bold text-neutral-900">Lex & Mos</span>
          <span>{new Date().getFullYear()} — Право и мораль в аспекте возможного</span>
        </div>
      </footer>
    </div>
  );
}
