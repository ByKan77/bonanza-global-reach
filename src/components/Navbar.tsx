import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo_Bonanza/Bonanza_europe_decoupe.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import type { LanguageCode } from "@/lib/translations";

const navLinks = [
  { key: "services" as const, href: "/#expertise" },
  { key: "partners" as const, to: "/partners" as const },
  { key: "about" as const, to: "/about" as const },
];

const FLAG_SIZE = 24;
const flagSrc = (code: string) => `/flags/${code === "en" ? "us" : code}.svg`;

const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRefDesktop = useRef<HTMLDivElement>(null);
  const langRefMobile = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();
  const nav = t.nav;
  const currentLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = langRefDesktop.current?.contains(target);
      const insideMobile = langRefMobile.current?.contains(target);
      if (!insideDesktop && !insideMobile) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const LanguageDropdown = ({
    compact = false,
    dropdownRef,
  }: {
    compact?: boolean;
    dropdownRef: React.RefObject<HTMLDivElement | null>;
  }) => (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setLangOpen(!langOpen)}
        className={`flex items-center gap-1.5 rounded-sm bg-transparent px-2.5 py-1.5 text-foreground transition-colors hover:bg-muted/60 focus:outline-none focus:ring-1 focus:ring-primary ${compact ? "text-base" : "text-lg"}`}
        aria-label={nav.languageLabel}
        aria-expanded={langOpen}
        aria-haspopup="listbox"
      >
        <img
          key={language}
          src={flagSrc(currentLang.code)}
          alt=""
          width={22}
          height={15}
          className="rounded-lg object-contain shrink-0 w-[22px] h-[15px]"
        />
        <ChevronDown className={`text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} size={compact ? 16 : 18} />
      </button>
      {langOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          role="listbox"
          className="absolute right-0 top-full mt-1 min-w-0 rounded-md border border-border bg-background py-1.5 shadow-lg z-50"
        >
          {LANGUAGES.map(({ code }) => (
            <li key={code} role="option" aria-selected={language === code}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setLanguage(code);
                  setLangOpen(false);
                }}
                className={`flex w-full items-center justify-center px-4 py-2 transition-colors hover:bg-muted/80 ${language === code ? "bg-primary/10" : ""}`}
                title={LANGUAGES.find((l) => l.code === code)?.label}
              >
                <img
                  src={flagSrc(code)}
                  alt=""
                  width={22}
                  height={15}
                  className="rounded-lg object-contain shrink-0 w-[22px] h-[15px]"
                />
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel-subtle"
    >
      <div className="max-w-7xl mx-auto pl-3 pr-4 sm:pl-4 sm:pr-6 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <img src={logo} alt="Bonanza Europe" className="h-14 sm:h-16 md:h-28 w-auto object-contain max-h-[56px] sm:max-h-[64px] md:max-h-none" />
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
          <div className="flex items-center gap-3 ml-2">
            <a
              href="/#contact"
              className="font-body text-sm px-5 py-2.5 bg-primary text-primary-foreground rounded-sm hover:brightness-110 transition-all duration-300 hover:shadow-[0_4px_16px_hsla(40,56%,52%,0.3)]"
            >
              {nav.cta}
            </a>
            <LanguageDropdown dropdownRef={langRefDesktop} />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageDropdown compact dropdownRef={langRefMobile} />
          <button onClick={() => setOpen(!open)} className="text-foreground" aria-label="Menu">
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
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-4 text-center sm:text-left">
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
