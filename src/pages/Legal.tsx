import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const SITE_URL = "https://www.bonanza-europe.com";

const Legal = () => {
  const { t } = useLanguage();
  const legal = "legalPage" in t ? t.legalPage : { title: "Mentions légales" };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-40 pb-14 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-foreground text-center md:text-left">
            {legal.title}
          </h1>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              01 – Présentation du site internet
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Propriétaire : <strong>SAS Bonanza Europe</strong>, dont le siège social est situé
              1 Boulevard Michael Faraday, 77700 Serris, France.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Responsable de la publication : <strong>Bonanza Europe</strong> –{" "}
              <a href="mailto:info@bonanza-europe.com" className="underline hover:no-underline">
                info@bonanza-europe.com
              </a>
              .
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Hébergeur : o2switch – 222 Bd Gustave Flaubert, 63000 Clermont-Ferrand, France.
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              02 – Conditions générales d’utilisation du site et des services proposés
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Le site <a href={SITE_URL} className="underline hover:no-underline">{SITE_URL}</a> (ci-après « le Site ») constitue une
              œuvre de l’esprit protégée par les dispositions du Code de la propriété intellectuelle et des
              réglementations internationales applicables. L’utilisateur ne peut en aucune manière réutiliser,
              céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              L’utilisation du Site implique l’acceptation pleine et entière des conditions générales
              d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées
              ou complétées à tout moment ; les utilisateurs du Site sont donc invités à les consulter de
              manière régulière.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Le Site est mis à jour régulièrement par le responsable de la publication. De la même façon, les
              mentions légales peuvent être modifiées à tout moment : l’utilisateur est invité à s’y référer le
              plus souvent possible afin d’en prendre connaissance.
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              03 – Description des services fournis
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Le site internet <a href={SITE_URL} className="underline hover:no-underline">{SITE_URL}</a> a pour objet de fournir
              des informations concernant les activités de Bonanza Europe, notamment ses services d’export,
              d’accès aux marchés eurasiatiques, de conformité réglementaire et de logistique.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Bonanza Europe s’efforce de fournir sur le Site des informations aussi précises que possible.
              Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des
              carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui
              lui fournissent ces informations.
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              04 – Limitations contractuelles sur les données techniques
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Le Site utilise la technologie JavaScript et, plus généralement, les technologies web usuelles.
              Le Site ne pourra être tenu responsable de dommages matériels liés à l’utilisation du Site. De
              plus, l’utilisateur du Site s’engage à y accéder en utilisant un matériel récent, ne contenant pas
              de virus et avec un navigateur de dernière génération mis à jour.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Le Site est hébergé chez un prestataire situé sur le territoire de l’Union européenne, conformément
              aux dispositions du Règlement général sur la protection des données (RGPD – n° 2016/679). L’hébergeur
              assure la continuité de son service 24h/24, tous les jours de l’année. Il se réserve néanmoins la
              possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles,
              notamment à des fins de maintenance, d’amélioration de ses infrastructures ou en cas de défaillance.
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              05 – Propriété intellectuelle et contrefaçons
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Bonanza Europe est propriétaire des droits de propriété intellectuelle et détient les droits
              d’usage sur tous les éléments accessibles sur le Site, notamment les textes, images, graphismes,
              logos, vidéos, icônes et sons, sauf mention contraire.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
              éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de Bonanza Europe.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Toute exploitation non autorisée du Site ou de l’un quelconque des éléments qu’il contient sera
              considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              06 – Limitations de responsabilité
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Bonanza Europe ne pourra être tenue responsable des dommages directs et indirects causés au matériel
              de l’utilisateur lors de l’accès au Site, et résultant soit de l’utilisation d’un matériel ne
              répondant pas aux spécifications indiquées au point 04, soit de l’apparition d’un bug ou d’une
              incompatibilité.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Des espaces interactifs (formulaire de contact) sont à la disposition des utilisateurs. Bonanza
              Europe se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans
              cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions
              relatives à la protection des données. Le cas échéant, Bonanza Europe se réserve également la
              possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en
              cas de message à caractère raciste, injurieux, diffamant ou pornographique, quel que soit le support
              utilisé (texte, photographie, etc.).
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              07 – Gestion des données personnelles
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              En tant que responsable du traitement des données collectées, Bonanza Europe s’engage à respecter
              le cadre des dispositions légales en vigueur et notamment le Règlement général sur la protection
              des données (RGPD) et la loi Informatique et Libertés.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Les données collectées via le formulaire de contact (nom, entreprise, adresse e-mail, message) sont
              utilisées uniquement pour répondre aux demandes adressées à Bonanza Europe et, le cas échéant, pour
              assurer le suivi commercial de ces demandes. Elles ne sont pas cédées à des tiers.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Conformément à la réglementation applicable, vous disposez d’un droit d’accès, de rectification,
              d’opposition, d’effacement et de portabilité de vos données personnelles, ainsi que d’un droit à la
              limitation du traitement. Vous pouvez exercer ces droits en écrivant à{" "}
              <a href="mailto:info@bonanza-europe.com" className="underline hover:no-underline">
                info@bonanza-europe.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              08 – Balises (“tags”) Internet
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Le Site peut utiliser des balises Internet (également appelées « tags » ou « pixels ») et les
              déployer par l’intermédiaire de partenaires d’analyses web afin de mesurer l’audience ou
              l’efficacité de certaines pages. Ces balises peuvent permettre de collecter des informations
              anonymisées sur la navigation des utilisateurs.
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              09 – Droit applicable et attribution de juridiction
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Tout litige en relation avec l’utilisation du Site est soumis au droit français. En cas de litige
              et à défaut de solution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              10 – Lexique
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              <strong>Utilisateur</strong> : internaute se connectant, utilisant le Site.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              <strong>Informations personnelles</strong> : « les informations qui permettent, sous quelque
              forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles
              s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
