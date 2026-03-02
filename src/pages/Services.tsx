import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Service images
import imgSF from "@/assets/Nouveau dossier/WhatsApp Image 2026-02-28 at 15.30.33.jpeg";
import imgPF from "@/assets/Nouveau dossier/WhatsApp Image 2026-02-28 at 15.30.35.jpeg";
import imgIA from "@/assets/Nouveau dossier/WhatsApp Image 2026-02-28 at 15.30.34 (1).jpeg";
import imgAB from "@/assets/Nouveau dossier (2)/WhatsApp Image 2026-02-28 at 15.31.37 (1).jpeg";
import imgIC from "@/assets/Nouveau dossier (2)/WhatsApp Image 2026-02-28 at 15.31.37.jpeg";
import imgTF from "@/assets/Nouveau dossier/WhatsApp Image 2026-02-28 at 15.30.36 (1).jpeg";

const servicesData = [
  {
    key: "sf",
    image: imgSF,
    details: {
      en: "Our Structured Finance division designs and implements complex financing arrangements tailored to specific project needs. We work with institutional investors, development banks, and private equity firms to create innovative financial structures that optimize risk allocation and maximize returns. Our team has extensive experience in syndicated loans, securitization, and bespoke financial instruments.",
      fr: "Notre division Finance Structuree concoit et met en oeuvre des montages financiers complexes adaptes aux besoins specifiques de chaque projet. Nous travaillons avec des investisseurs institutionnels, des banques de developpement et des fonds de private equity pour creer des structures financieres innovantes qui optimisent la repartition des risques et maximisent les rendements.",
    },
    useCases: {
      en: ["Large-scale infrastructure development", "Cross-border financing structures", "Public-private partnership frameworks"],
      fr: ["Developpement d'infrastructures a grande echelle", "Structures de financement transfrontalieres", "Cadres de partenariats public-prive"],
    },
  },
  {
    key: "pf",
    image: imgPF,
    details: {
      en: "Our Project Financing team provides end-to-end support for capital-intensive projects across energy, infrastructure, real estate, and industrial sectors. We structure non-recourse and limited recourse financing solutions that align the interests of all stakeholders while ensuring project viability and financial sustainability.",
      fr: "Notre equipe de Financement de Projets fournit un accompagnement de bout en bout pour les projets capitalistiques dans les secteurs de l'energie, des infrastructures, de l'immobilier et de l'industrie. Nous structurons des solutions de financement sans recours et a recours limite.",
    },
    useCases: {
      en: ["Energy and renewable projects", "Real estate development", "Industrial facility construction"],
      fr: ["Projets energetiques et renouvelables", "Developpement immobilier", "Construction d'installations industrielles"],
    },
  },
  {
    key: "ia",
    image: imgIA,
    details: {
      en: "Our Investment Advisory services provide strategic counsel to institutional investors, family offices, and corporate clients seeking to optimize their investment portfolios. We combine deep market knowledge with rigorous analytical frameworks to identify opportunities and manage risk effectively.",
      fr: "Nos services de Conseil en Investissement fournissent des conseils strategiques aux investisseurs institutionnels, family offices et clients corporate cherchant a optimiser leurs portefeuilles d'investissement. Nous combinons une connaissance approfondie du marche avec des cadres analytiques rigoureux.",
    },
    useCases: {
      en: ["Portfolio optimization strategies", "Market entry advisory", "Mergers & acquisitions support"],
      fr: ["Strategies d'optimisation de portefeuille", "Conseil en entree sur le marche", "Accompagnement fusions & acquisitions"],
    },
  },
  {
    key: "ab",
    image: imgAB,
    details: {
      en: "Our Asset-Backed Transactions team structures financing solutions secured by tangible and intangible assets. We help clients unlock the value of their asset portfolios through innovative securitization, collateralized lending, and asset-backed securities structures.",
      fr: "Notre equipe Transactions Adossees aux Actifs structure des solutions de financement garanties par des actifs corporels et incorporels. Nous aidons nos clients a debloquer la valeur de leurs portefeuilles d'actifs grace a des structures innovantes de titrisation et de prets collateralises.",
    },
    useCases: {
      en: ["Real estate-backed financing", "Equipment and fleet financing", "Receivables securitization"],
      fr: ["Financement adosse a l'immobilier", "Financement d'equipements et de flottes", "Titrisation de creances"],
    },
  },
  {
    key: "ic",
    image: imgIC,
    details: {
      en: "Our International Capital Solutions practice connects clients with global capital markets, facilitating cross-border investments and capital raising activities. We leverage our extensive network of international partners to provide access to diverse funding sources across multiple jurisdictions.",
      fr: "Notre pratique Solutions de Capital International connecte nos clients aux marches de capitaux mondiaux, facilitant les investissements transfrontaliers et les activites de levee de fonds. Nous mobilisons notre vaste reseau de partenaires internationaux pour fournir un acces a des sources de financement diversifiees.",
    },
    useCases: {
      en: ["Cross-border capital raising", "Foreign direct investment advisory", "International debt structuring"],
      fr: ["Levee de capitaux transfrontaliere", "Conseil en investissement direct etranger", "Structuration de dette internationale"],
    },
  },
  {
    key: "tf",
    image: imgTF,
    details: {
      en: "Activa Capital Group Ltd. expands its scope of intervention through a specialized Trade Finance Services division, dedicated to facilitating and securing international commercial transactions. We connect capital, financial instruments, and international markets to transform commercial opportunities into secure and bankable transactions.",
      fr: "Activa Capital Group Ltd. élargit son champ d'intervention à travers une division spécialisée en Trade Finance Services, dédiée à la facilitation et à la sécurisation des transactions commerciales internationales. Nous connectons le capital, les instruments financiers et les marchés internationaux pour transformer les opportunités commerciales en transactions sécurisées et bancables.",
    },
    useCases: {
      en: ["Letters of Credit (LC) & Bank Guarantees (BG)", "Structured Commodity Trade Finance", "Receivables & Project-Linked Trade Finance"],
      fr: ["Lettres de Crédit (LC) & Garanties Bancaires (BG)", "Financement Structuré de Matières Premières", "Financement de Créances & Financement de Projets"],
    },
  },
];

const Services = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <div className="premium-divider mb-8" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-5">
                {t("services.page.title")}
              </h1>
              <p className="text-muted-foreground max-w-3xl text-lg">
                {t("services.page.subtitle")}
              </p>
            </motion.div>

            <div className="space-y-10">
              {servicesData.map(({ key, image, details, useCases }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card overflow-hidden hover:border-primary/20 transition-all duration-500"
                >
                  {/* Service Image */}
                  <div className="w-full h-56 sm:h-64 overflow-hidden">
                    <img
                      src={image}
                      alt={t(`services.${key}`)}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="p-9 sm:p-12">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold mb-5">
                      {t(`services.${key}`)}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-7 text-base">
                      {details[lang]}
                    </p>
                    <div className="mb-7">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4 font-sans">
                        {lang === "fr" ? "Cas d'usage" : "Use Cases"}
                      </h3>
                      <ul className="space-y-2.5">
                        {useCases[lang].map((uc, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {t("services.cta")} &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
