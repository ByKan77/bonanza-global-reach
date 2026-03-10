import logo from "@/assets/logo_Bonanza/Bonanza_europe_decoupe.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 border-t border-border bg-accent text-accent-foreground">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Bonanza Europe" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
        <p className="font-body text-xs text-accent-foreground/50">
          © {new Date().getFullYear()} Bonanza Europe. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
