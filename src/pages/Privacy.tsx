import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.bonanza-europe.com";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-40 pb-14 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-foreground text-center md:text-left">
            Politique de confidentialité
          </h1>

          <section className="space-y-2 sm:space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              01 – Introduction
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              La présente politique de confidentialité et de protection des données à caractère personnel
              (la « Politique de confidentialité ») est adoptée en application du Règlement (UE) 2016/679
              dit Règlement général sur la protection des données (« RGPD ») et de la loi Informatique et
              Libertés modifiée. Elle a pour objectif de vous informer sur les méthodes de collecte,
              d’utilisation, de partage et de protection de vos données à caractère personnel (les
              « Données Personnelles ») dans le cadre de l’utilisation du site internet{" "}
              <a href={SITE_URL} className="underline hover:no-underline">
                {SITE_URL}
              </a>{" "}
              (le « Site »), ainsi que sur les droits dont vous disposez.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              02 – Qui sommes-nous ?
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Le Site est édité par <strong>SAS Bonanza Europe</strong>, société d&apos;import-export et
              d&apos;accompagnement à l&apos;export, dont le siège social est situé 1 Boulevard Michael
              Faraday, 77700 Serris, France (ci-après « Bonanza Europe » ou « Nous »).
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              En tant que responsable du traitement, Bonanza Europe s’engage à protéger votre vie privée
              et vos Données Personnelles, et à vous garantir une transparence sur ses pratiques.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              03 – Principes encadrant la collecte et le traitement
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Bonanza Europe veille au respect des principes prévus par le RGPD : licéité, loyauté,
              transparence, minimisation des données, exactitude, limitation des finalités et limitation
              de la durée de conservation. Seules les Données Personnelles strictement nécessaires aux
              finalités décrites ci‑après sont collectées et traitées.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              04 – Bases juridiques des traitements
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Dans le cadre du Site, Bonanza Europe collecte et traite vos Données Personnelles sur les
              bases juridiques suivantes :
            </p>
            <ul className="list-disc pl-5 sm:pl-6 font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed space-y-1">
              <li>
                votre <strong>consentement</strong> pour l’envoi de messages via le formulaire de contact ;
              </li>
              <li>
                l’<strong>intérêt légitime</strong> de Bonanza Europe pour assurer la sécurité du Site,
                répondre à vos demandes et améliorer la qualité de ses services ;
              </li>
              <li>
                le <strong>respect d’obligations légales</strong> lorsque la loi impose la conservation
                de certaines données (par exemple à des fins comptables ou de preuve).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              05 – Données personnelles collectées
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Bonanza Europe collecte uniquement les Données Personnelles adéquates, pertinentes et
              strictement nécessaires au regard des finalités poursuivies.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Via le formulaire de contact du Site, les données suivantes peuvent être collectées :
            </p>
            <ul className="list-disc pl-5 sm:pl-6 font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed space-y-1">
              <li>nom et prénom ;</li>
              <li>nom de l’entreprise ;</li>
              <li>adresse e‑mail professionnelle ;</li>
              <li>contenu du message que vous nous adressez.</li>
            </ul>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Par ailleurs, des données de navigation peuvent être collectées automatiquement lors de
              votre visite (adresse IP, type de navigateur, pages consultées, horodatage, etc.) via des
              cookies ou traceurs techniques, dans le but d’assurer le bon fonctionnement et la sécurité
              du Site et, le cas échéant, de réaliser des mesures anonymisées d’audience.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              06 – Finalités des traitements
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Vos Données Personnelles sont traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-5 sm:pl-6 font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed space-y-1">
              <li>
                <strong>gestion des demandes de contact</strong> et des échanges avec Bonanza Europe ;
              </li>
              <li>
                <strong>préparation de propositions commerciales</strong> et suivi de la relation
                avant‑contrat ou contrat, le cas échéant ;
              </li>
              <li>
                <strong>gestion de la sécurité</strong> du Site (journalisation, prévention des fraudes
                ou tentatives d’intrusion) ;
              </li>
              <li>
                <strong>amélioration du Site</strong> et de l’expérience utilisateur via des statistiques
                anonymisées.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              07 – Durée de conservation
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Les Données Personnelles collectées via le formulaire de contact sont conservées pendant une
              durée maximale de <strong>3 ans</strong> à compter du dernier échange avec vous, sauf
              obligation légale imposant une durée plus longue ou plus courte.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Les données de navigation collectées à l’aide de cookies techniques sont conservées pour une
              durée n’excédant pas <strong>13 mois</strong>, puis sont soit supprimées soit rendues
              anonymes à des fins purement statistiques.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              08 – Destinataires des données
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Ont accès à vos Données Personnelles, dans la limite de leurs attributions respectives :
            </p>
            <ul className="list-disc pl-5 sm:pl-6 font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed space-y-1">
              <li>les équipes internes de Bonanza Europe amenées à traiter votre demande ;</li>
              <li>
                les prestataires techniques intervenant pour le compte de Bonanza Europe (hébergeur,
                prestataire du formulaire de contact), dans le strict cadre des missions qui leur sont
                confiées et en vertu d’engagements contractuels de confidentialité et de sécurité.
              </li>
            </ul>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              En tout état de cause, vos Données Personnelles ne font pas l’objet d’une vente à des tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              09 – Transferts de données hors Union européenne
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Certains prestataires techniques susceptibles d&apos;intervenir pour la gestion du formulaire
              de contact ou l&apos;envoi des messages peuvent être situés en dehors de l&apos;Union
              européenne. Dans ce cas, Bonanza Europe s&apos;assure que ces transferts ne sont réalisés que
              vers des pays reconnus comme offrant un niveau de protection adéquat ou encadrés par des
              mécanismes de protection appropriés (clauses contractuelles types approuvées par la
              Commission européenne, par exemple).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              10 – Sécurité des données
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Bonanza Europe met en œuvre des mesures techniques et organisationnelles appropriées pour
              garantir la confidentialité, l’intégrité et la disponibilité de vos Données Personnelles et
              prévenir tout accès non autorisé, perte, altération ou divulgation de celles‑ci.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Cependant, la sécurité absolue n’existe pas sur Internet. Il vous appartient également
              d’utiliser un équipement suffisamment sécurisé (système d’exploitation et navigateur à jour,
              antivirus, etc.) et de garder confidentiels vos moyens d’accès lorsque vous en disposez.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              11 – Vos droits
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants
              sur vos Données Personnelles :
            </p>
            <ul className="list-disc pl-5 sm:pl-6 font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed space-y-1">
              <li>droit d’accès ;</li>
              <li>droit de rectification ;</li>
              <li>droit d’effacement (droit à l’oubli) ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>droit d’opposition ;</li>
              <li>droit à la portabilité des données, lorsque cela est applicable.</li>
            </ul>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Vous pouvez exercer ces droits en écrivant à l’adresse suivante :{" "}
              <a href="mailto:info@bonanza-europe.com" className="underline hover:no-underscore">
                info@bonanza-europe.com
              </a>
              . Une réponse vous sera apportée dans les meilleurs délais et au plus tard dans un délai
              d’un mois à compter de la réception de votre demande, prolongeable de deux mois compte tenu
              de la complexité ou du nombre de demandes.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Vous disposez également du droit d’introduire une réclamation auprès de l’autorité de
              contrôle compétente, et notamment de la Commission Nationale de l’Informatique et des
              Libertés (CNIL) en France.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              12 – Loi applicable
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              La présente Politique de confidentialité est régie par le droit français. Tout litige relatif
              à son interprétation ou à son exécution relève de la compétence des juridictions françaises
              compétentes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-light text-foreground">
              13 – Mise à jour de la politique
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Bonanza Europe se réserve le droit de modifier à tout moment la présente Politique de
              confidentialité, notamment pour tenir compte de l’évolution de la législation, des
              recommandations des autorités de contrôle ou encore de tout changement dans l’organisation
              interne ou dans les services proposés. La version la plus récente est celle disponible sur le
              Site à la date de votre consultation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

