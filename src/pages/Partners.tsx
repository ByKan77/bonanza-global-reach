import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

import logoAllegiant from "@/assets/partenaires/ALLEGIANT_logo.png";
import logoAlvogen from "@/assets/partenaires/Alvogen.png";
import logoAngelini from "@/assets/partenaires/Angelini.png";
import logoChemo from "@/assets/partenaires/Chemo.png";
import logoDoppel from "@/assets/partenaires/Doppel.png";
import logoFinAid from "@/assets/partenaires/FinAidLLC.png";
import logoHerkel from "@/assets/partenaires/Herkel.png";
import logoHillestad from "@/assets/partenaires/Hillestad.png";
import logoItalfarmaco from "@/assets/partenaires/Italfarmaco.png";
import logoJelfa from "@/assets/partenaires/Jelfa.png";
import logoKevelt from "@/assets/partenaires/Kevelt.png";
import logoMedtronic from "@/assets/partenaires/Medtronic.png";
import logoMucos from "@/assets/partenaires/mucos.png";
import logoNaturProdukt from "@/assets/partenaires/NaturProdukt.png";
import logoHtn from "@/assets/partenaires/square-logo-htn.webp";
import logoTeva from "@/assets/partenaires/Teva.png";
import logoValeant from "@/assets/partenaires/Valeant.png";
import logoZentiva from "@/assets/partenaires/Zentiva_Logo.jpg";

const partners = [
  { name: "Allegiant", logo: logoAllegiant, url: "http://allegiant-health.com/" },
  { name: "Alvogen", logo: logoAlvogen, url: "https://www.alvogen.com" },
  { name: "Angelini", logo: logoAngelini, url: "https://www.angelinipharma.com" },
  { name: "Chemo", logo: logoChemo, url: "https://www.insudpharma.com" },
  { name: "Doppel", logo: logoDoppel, url: "http://www.doppel.it/" },
  { name: "FinAid", logo: logoFinAid, url: "https://www.linkedin.com/company/finaid-llc" },
  { name: "Herkel", logo: logoHerkel, url: "https://www.royalherkel.com" },
  { name: "Hillestad", logo: logoHillestad, url: "https://www.hillestadlabs.com" },
  { name: "Italfarmaco", logo: logoItalfarmaco, url: "https://www.italfarmaco.com" },
  { name: "Jelfa", logo: logoJelfa, url: "https://www.jelfa.com.pl/" },
  { name: "Kevelt", logo: logoKevelt, url: "https://www.kevelt.ee" },
  { name: "Medtronic", logo: logoMedtronic, url: "https://www.medtronic.com" },
  { name: "Mucos", logo: logoMucos, url: "https://www.mucos.berlin" },
  { name: "NaturProdukt", logo: logoNaturProdukt, url: "https://www.natur-produkt.ru" },
  { name: "HTN", logo: logoHtn, url: "https://www.htnnaturally.com" },
  { name: "Teva", logo: logoTeva, url: "https://www.tevapharm.com" },
  { name: "Valeant", logo: logoValeant, url: "https://www.bauschhealth.com" },
  { name: "Zentiva", logo: logoZentiva, url: "https://www.zentiva.com" },
];

const Partners = () => {
  const { t } = useLanguage();
  const p = t.partnersPage;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-36 md:pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
            {p.title}
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            {p.intro}
          </p>

          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="overflow-hidden flex flex-col items-center justify-center p-6 min-h-[140px] hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-0 flex items-center justify-center w-full h-full">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 w-full object-contain object-center"
                    />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/#contact"
              className="inline-block font-body text-sm px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:brightness-110 transition-all"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
