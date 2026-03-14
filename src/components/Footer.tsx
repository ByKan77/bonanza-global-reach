import { Link } from "react-router-dom";
import logo from "@/assets/logo_Bonanza/Bonanza_europe_decoupe.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const footer = t.footer;
  const hasFullFooter = "companyName" in footer && footer.companyName;

  return (
    <footer className="py-6 sm:py-8 md:py-10 border-t border-border bg-accent text-accent-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-stretch md:justify-between md:gap-8 text-center md:text-left">
          {/* 1. Logo, centré en hauteur */}
          <div className="flex flex-col items-center md:items-start justify-center flex-shrink-0">
            <img
              src={logo}
              alt="Bonanza Europe"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* 2. INFORMATIONS */}
          <div className="flex flex-col items-center md:items-start gap-2 flex-shrink-0">
            {hasFullFooter ? (
              <>
                <p className="font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-foreground">
                  {"informationsTitle" in footer ? footer.informationsTitle : "Informations"}
                </p>
                <div className="font-body text-[11px] md:text-xs text-accent-foreground/90">
                  <p className="font-medium">{footer.companyName}</p>
                  <p>{footer.address}</p>
                  <p>{footer.city}</p>
                  <p>
                    <a
                      href={`mailto:${footer.email}`}
                      className="hover:opacity-90"
                    >
                      {footer.email}
                    </a>
                  </p>
                </div>
              </>
            ) : null}
          </div>

          {/* 3. PAGES LÉGALES */}
          <div className="flex flex-col items-center md:items-start gap-2 flex-shrink-0">
            <p className="font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-foreground">
              {"legalPagesTitle" in footer ? footer.legalPagesTitle : "Pages légales"}
            </p>
            <div className="flex flex-col gap-1 items-center md:items-start">
              {"legal" in footer && footer.legal && (
                <Link
                  to="/mentions-legales"
                  className="font-body text-[11px] md:text-xs hover:opacity-90"
                >
                  {footer.legal}
                </Link>
              )}
              <Link
                to="/politique-confidentialite"
                className="font-body text-[11px] md:text-xs hover:opacity-90"
              >
                {"privacy" in footer ? footer.privacy : "Politique de confidentialité"}
              </Link>
            </div>
          </div>

          {/* 4. Copyright, centré en hauteur, aligné au logo */}
          <div className="flex flex-col justify-center flex-shrink-0 items-center md:items-start">
            <p className="font-body text-[11px] sm:text-xs text-accent-foreground/60 text-center md:text-right max-w-[240px] sm:max-w-[280px] md:max-w-none">
              © 2026 Bonanza Europe. {footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
