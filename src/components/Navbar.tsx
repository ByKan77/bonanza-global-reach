import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_Bonanza/Bonanza_europe_decoupe.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import type { LanguageCode } from "@/lib/translations";

const navLinks = [
  { key: "services" as const, href: "/#expertise" },
  { key: "partners" as const, to: "/partners" as const },
  { key: "about" as const, to: "/about" as const },
  { key: "contact" as const, href: "/#contact" },
];

const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const nav = t.nav;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel-subtle"
    >
      <div className="max-w-7xl mx-auto pl-4 pr-6 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logo} alt="Bonanza Europe" className="h-20 md:h-28 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            "to" in link ? (
              <Link
                key={link.key}
                to={link.to}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {nav[link.key]}
              </Link>
            ) : (
              <a
                key={link.key}
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {nav[link.key]}
              </a>
            )
          )}
          <a
            href="/#contact"
            className="font-body text-sm px-5 py-2.5 bg-primary text-primary-foreground rounded-sm hover:brightness-110 transition-all duration-300 hover:shadow-[0_4px_16px_hsla(40,56%,52%,0.3)]"
          >
            {nav.cta}
          </a>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-xs text-muted-foreground hidden lg:inline">{nav.languageLabel}</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="bg-background/80 border border-border rounded-sm px-2 py-1 text-xs font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label={nav.languageLabel}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as LanguageCode)}
            className="bg-background/80 border border-border rounded-sm px-2 py-1 text-xs font-body"
            aria-label={nav.languageLabel}
          >
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-panel border-t border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              "to" in link ? (
                <Link
                  key={link.key}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav[link.key]}
                </Link>
              ) : (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav[link.key]}
                </a>
              )
            )}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="font-body text-sm px-5 py-2.5 bg-primary text-primary-foreground rounded-sm text-center"
            >
              {nav.cta}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
