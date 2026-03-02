import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.track": "Track Record",
    "nav.leadership": "Leadership",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Contactez-nous",

    // Hero
    "hero.line1": "Nous vous accompagnons dans la gestion de votre entreprise",
    "hero.line2": "pour vous permettre d'atteindre vos objectifs et votre",
    "hero.highlight": "cible financière.",
    "hero.cta1": "Contactez-nous",
    "hero.cta2": "Explorer nos services",

    // Stats
    "stats.years": "Années d'expérience",
    "stats.financed": "Total projets financés",
    "stats.partners": "Partenaires internationaux",

    // Testimonial
    "testimonial.quote": "Travailler avec Activa Capital Group a été une expérience transformatrice pour notre portefeuille d'investissement. Leur expertise en finance structurée et leur compréhension approfondie des marchés internationaux nous ont permis de sécuriser des financements critiques pour des projets complexes. L'équipe est professionnelle, réactive et dédiée à obtenir les meilleurs résultats pour ses clients.",

    // Services
    "services.title": "Nos Services",
    "services.subtitle": "Des solutions financières sur mesure pour vos ambitions internationales",
    "services.sf": "Finance Structurée",
    "services.sf.desc": "Solutions de financement innovantes adaptées aux besoins complexes des entreprises et institutions.",
    "services.pf": "Financement de Projets",
    "services.pf.desc": "Structuration et mobilisation de capitaux pour des projets d'infrastructure et de développement à grande échelle.",
    "services.ia": "Conseil en Investissement",
    "services.ia.desc": "Accompagnement stratégique pour optimiser vos décisions d'investissement et maximiser les rendements.",
    "services.ab": "Transactions Adossées aux Actifs",
    "services.ab.desc": "Structuration de financements garantis par des actifs tangibles pour une sécurité et une flexibilité optimales.",
    "services.ic": "Solutions de Capital International",
    "services.ic.desc": "Accès aux marchés de capitaux mondiaux pour financer la croissance et l'expansion internationale.",
    "services.tf": "Trade Finance Services",
    "services.tf.desc": "Division spécialisée dédiée à la facilitation et à la sécurisation des transactions commerciales internationales via un financement stratégique et des instruments bancaires.",

    // About Preview
    "about.preview.title": "À propos d'Activa Capital Group",
    "about.preview.text": "Fondée avec la vision de créer un pont entre les investisseurs institutionnels et les opportunités de marché à fort potentiel, Activa Capital Group s'est imposée comme un acteur de référence dans le domaine de la finance structurée et du conseil en investissement.",
    "about.preview.cta": "En savoir plus",

    // Track Record
    "track.title": "Notre Track Record",
    "track.subtitle": "Des résultats concrets qui témoignent de notre expertise",
    "track.capital": "Capital Levé",
    "track.projects": "Projets Financés",
    "track.countries": "Pays Desservis",
    "track.expertise": "Années d'Expertise",

    // Leadership
    "leadership.title": "Notre Équipe de Direction",
    "leadership.subtitle": "Des experts reconnus en finance internationale",

    // FAQ
    "faq.title": "Questions Fréquentes",
    "faq.q1": "Quels types de services financiers propose Activa Capital Group ?",
    "faq.a1": "Activa Capital Group propose une gamme complète de services incluant la finance structurée, le financement de projets, le conseil en investissement, les transactions adossées à des actifs et les solutions de capital international. Nous travaillons avec des entreprises, des institutions et des investisseurs du monde entier.",
    "faq.q2": "Dans quelles régions opérez-vous ?",
    "faq.a2": "Nous opérons à l'échelle internationale avec une présence significative en Europe, en Afrique, au Moyen-Orient et en Asie. Notre siège est situé à Paris, au cœur du district financier européen.",
    "faq.q3": "Quel est le montant minimum de financement que vous structurez ?",
    "faq.a3": "Nos solutions de financement sont généralement structurées pour des projets à partir de 5 millions d'euros, bien que nous puissions adapter nos services en fonction de la complexité et du potentiel du projet.",
    "faq.q4": "Comment garantissez-vous la conformité réglementaire ?",
    "faq.a4": "Nous appliquons des protocoles stricts de conformité KYC (Know Your Customer) et AML (Anti-Money Laundering) conformes aux réglementations européennes et internationales. Notre équipe de conformité supervise chaque transaction pour assurer le respect total des normes.",
    "faq.q5": "Combien de temps prend un processus de financement typique ?",
    "faq.a5": "Le délai varie selon la complexité du projet. Un processus standard de financement structuré prend généralement entre 4 et 12 semaines, de l'analyse initiale à la clôture du financement.",

    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Notre équipe est à votre disposition pour discuter de vos besoins en financement et investissement.",
    "contact.name": "Nom complet",
    "contact.company": "Entreprise",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.service": "Type de service",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.select": "Sélectionnez un service",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.cookies": "Politique des cookies",

    // Cookie
    "cookie.text": "Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de cookies.",
    "cookie.accept": "Tout accepter",
    "cookie.reject": "Tout refuser",
    "cookie.customize": "Personnaliser",

    // About page
    "about.title": "À propos d'Activa Capital Group",
    "about.mission.title": "Notre Mission",
    "about.mission.text": "Notre mission est de fournir des solutions financières innovantes et sur mesure qui permettent à nos clients de réaliser leurs ambitions stratégiques. Nous croyons en l'excellence, l'intégrité et la création de valeur durable.",
    "about.overview.title": "Présentation de l'Entreprise",
    "about.overview.text": "Activa Capital Group Ltd. est une société de conseil en finance structurée et en investissement basée à Paris, au cœur du quartier financier européen. Depuis plus de 15 ans, nous accompagnons des entreprises, des institutions et des investisseurs dans la structuration de solutions financières complexes à travers le monde.",
    "about.values.title": "Nos Valeurs",
    "about.values.v1": "Excellence",
    "about.values.v1d": "Nous visons l'excellence dans chaque engagement, en offrant des solutions financières de la plus haute qualité.",
    "about.values.v2": "Intégrité",
    "about.values.v2d": "La transparence et l'éthique guident chacune de nos décisions et interactions avec nos clients.",
    "about.values.v3": "Innovation",
    "about.values.v3d": "Nous développons des approches créatives pour répondre aux défis financiers les plus complexes.",
    "about.values.v4": "Engagement",
    "about.values.v4d": "Nous nous engageons pleinement dans la réussite de chaque projet, avec dévouement et professionnalisme.",
    "about.compliance.title": "Conformité & Réglementation",
    "about.compliance.text": "Activa Capital Group applique les normes les plus strictes en matière de conformité réglementaire. Nos protocoles KYC (Know Your Customer) et AML (Anti-Money Laundering) sont conformes aux réglementations européennes et internationales, garantissant la sécurité et la transparence de chaque transaction.",

    // Services page
    "services.page.title": "Nos Services",
    "services.page.subtitle": "Des solutions financières complètes pour répondre à tous vos besoins d'investissement et de financement.",
    "services.cta": "Discuter de ce service",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.track": "Track Record",
    "nav.leadership": "Leadership",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Contact Us",

    // Hero
    "hero.line1": "We will support you in the management of your business",
    "hero.line2": "to allow you to reach your goal and your",
    "hero.highlight": "financial target.",
    "hero.cta1": "Contact Us",
    "hero.cta2": "Explore Services",

    // Stats
    "stats.years": "Years in Business",
    "stats.financed": "Total Projects Financed",
    "stats.partners": "Global Partners",

    // Testimonial
    "testimonial.quote": "Working with Activa Capital Group has been a transformative experience for our investment portfolio. Their expertise in structured finance and their deep understanding of international markets have enabled us to secure critical financing for complex projects. The team is professional, responsive, and dedicated to achieving the best outcomes for their clients.",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Tailored financial solutions for your international ambitions",
    "services.sf": "Structured Finance",
    "services.sf.desc": "Innovative financing solutions tailored to the complex needs of businesses and institutions.",
    "services.pf": "Project Financing",
    "services.pf.desc": "Capital structuring and mobilization for large-scale infrastructure and development projects.",
    "services.ia": "Investment Advisory",
    "services.ia.desc": "Strategic guidance to optimize your investment decisions and maximize returns.",
    "services.ab": "Asset-Backed Transactions",
    "services.ab.desc": "Financing structures secured by tangible assets for optimal security and flexibility.",
    "services.ic": "International Capital Solutions",
    "services.ic.desc": "Access to global capital markets to finance growth and international expansion.",
    "services.tf": "Trade Finance Services",
    "services.tf.desc": "Specialized division dedicated to facilitating and securing international commercial transactions through strategic financing and bank instruments.",

    // About Preview
    "about.preview.title": "About Activa Capital Group",
    "about.preview.text": "Founded with the vision of bridging institutional investors and high-potential market opportunities, Activa Capital Group has established itself as a leading player in structured finance and investment advisory.",
    "about.preview.cta": "Learn More",

    // Track Record
    "track.title": "Our Track Record",
    "track.subtitle": "Concrete results that demonstrate our expertise",
    "track.capital": "Capital Raised",
    "track.projects": "Projects Financed",
    "track.countries": "Countries Served",
    "track.expertise": "Years of Expertise",

    // Leadership
    "leadership.title": "Our Leadership Team",
    "leadership.subtitle": "Recognized experts in international finance",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What types of financial services does Activa Capital Group offer?",
    "faq.a1": "Activa Capital Group offers a comprehensive range of services including structured finance, project financing, investment advisory, asset-backed transactions, and international capital solutions. We work with businesses, institutions, and investors worldwide.",
    "faq.q2": "In which regions do you operate?",
    "faq.a2": "We operate internationally with a significant presence in Europe, Africa, the Middle East, and Asia. Our headquarters are located in Paris, at the heart of the European financial district.",
    "faq.q3": "What is the minimum financing amount you structure?",
    "faq.a3": "Our financing solutions are typically structured for projects starting from 5 million euros, although we can adapt our services based on the complexity and potential of the project.",
    "faq.q4": "How do you ensure regulatory compliance?",
    "faq.a4": "We apply strict KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance protocols in accordance with European and international regulations. Our compliance team oversees every transaction to ensure full adherence to standards.",
    "faq.q5": "How long does a typical financing process take?",
    "faq.a5": "The timeline varies depending on the project's complexity. A standard structured financing process typically takes between 4 and 12 weeks, from initial analysis to financing closure.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Our team is at your disposal to discuss your financing and investment needs.",
    "contact.name": "Full Name",
    "contact.company": "Company",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.service": "Service Type",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.select": "Select a service",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",

    // Cookie
    "cookie.text": "We use cookies to enhance your experience. By continuing, you accept our cookie policy.",
    "cookie.accept": "Accept All",
    "cookie.reject": "Reject All",
    "cookie.customize": "Customize",

    // About page
    "about.title": "About Activa Capital Group",
    "about.mission.title": "Our Mission",
    "about.mission.text": "Our mission is to provide innovative and tailored financial solutions that enable our clients to achieve their strategic ambitions. We believe in excellence, integrity, and sustainable value creation.",
    "about.overview.title": "Company Overview",
    "about.overview.text": "Activa Capital Group Ltd. is a structured finance and investment advisory firm based in Paris, at the heart of the European financial district. For over 15 years, we have been supporting businesses, institutions, and investors in structuring complex financial solutions around the world.",
    "about.values.title": "Our Values",
    "about.values.v1": "Excellence",
    "about.values.v1d": "We aim for excellence in every engagement, delivering the highest quality financial solutions.",
    "about.values.v2": "Integrity",
    "about.values.v2d": "Transparency and ethics guide every decision and interaction with our clients.",
    "about.values.v3": "Innovation",
    "about.values.v3d": "We develop creative approaches to address the most complex financial challenges.",
    "about.values.v4": "Commitment",
    "about.values.v4d": "We fully commit to the success of every project with dedication and professionalism.",
    "about.compliance.title": "Compliance & Regulation",
    "about.compliance.text": "Activa Capital Group applies the strictest regulatory compliance standards. Our KYC (Know Your Customer) and AML (Anti-Money Laundering) protocols comply with European and international regulations, ensuring the security and transparency of every transaction.",

    // Services page
    "services.page.title": "Our Services",
    "services.page.subtitle": "Comprehensive financial solutions to meet all your investment and financing needs.",
    "services.cta": "Discuss This Service",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
