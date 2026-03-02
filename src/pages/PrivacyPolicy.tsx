import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    const { lang } = useLanguage();

    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="section-padding">
                    <div className="container-narrow max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="premium-divider mb-8" />
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-5">
                                {lang === "fr" ? "Politique de Confidentialité" : "Privacy Policy"}
                            </h1>
                            <p className="text-muted-foreground mb-12 text-sm">
                                {lang === "fr"
                                    ? "Dernière mise à jour : 1er mars 2026"
                                    : "Last updated: March 1, 2026"}
                            </p>

                            <div className="space-y-10 text-muted-foreground leading-relaxed">
                                {/* Section 1 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "1. Introduction" : "1. Introduction"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Activa Capital Group Ltd. (« nous », « notre » ou « la Société ») s'engage à protéger la vie privée de ses clients, partenaires et visiteurs de son site web. La présente politique de confidentialité décrit comment nous recueillons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois applicables en matière de protection des données."
                                            : 'Activa Capital Group Ltd. ("we," "our," or "the Company") is committed to protecting the privacy of our clients, partners, and website visitors. This Privacy Policy describes how we collect, use, store, and protect your personal information in accordance with the General Data Protection Regulation (GDPR) and applicable data protection laws.'}
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "2. Données collectées" : "2. Data We Collect"}
                                    </h2>
                                    <p className="mb-3">
                                        {lang === "fr"
                                            ? "Nous pouvons collecter les catégories suivantes de données personnelles :"
                                            : "We may collect the following categories of personal data:"}
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            {lang === "fr"
                                                ? "Informations d'identification : nom, prénom, adresse e-mail, numéro de téléphone, adresse postale."
                                                : "Identification information: name, email address, phone number, postal address."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Informations professionnelles : nom de l'entreprise, poste occupé, secteur d'activité."
                                                : "Professional information: company name, job title, industry sector."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Données de navigation : adresse IP, type de navigateur, pages visitées, temps passé sur le site."
                                                : "Browsing data: IP address, browser type, pages visited, time spent on site."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Données financières : informations nécessaires à la conformité KYC/AML dans le cadre de nos services."
                                                : "Financial data: information required for KYC/AML compliance in connection with our services."}
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "3. Utilisation des données" : "3. How We Use Your Data"}
                                    </h2>
                                    <p className="mb-3">
                                        {lang === "fr"
                                            ? "Vos données personnelles sont utilisées pour :"
                                            : "Your personal data is used to:"}
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            {lang === "fr"
                                                ? "Fournir et améliorer nos services de conseil financier et d'investissement."
                                                : "Provide and improve our financial advisory and investment services."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Répondre à vos demandes de contact et de renseignements."
                                                : "Respond to your contact and information requests."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Respecter nos obligations légales et réglementaires (KYC, AML, conformité fiscale)."
                                                : "Comply with our legal and regulatory obligations (KYC, AML, tax compliance)."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Vous envoyer des communications pertinentes sur nos services (avec votre consentement)."
                                                : "Send you relevant communications about our services (with your consent)."}
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "4. Protection des données" : "4. Data Protection"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction. L'accès à vos données est strictement limité aux membres de notre équipe qui en ont besoin dans le cadre de leurs fonctions."
                                            : "We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, modification, disclosure, or destruction. Access to your data is strictly limited to team members who need it for their job functions."}
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "5. Conservation des données" : "5. Data Retention"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales applicables. Les données liées à la conformité réglementaire peuvent être conservées pendant une période de 5 à 10 ans conformément aux exigences légales."
                                            : "We retain your personal data only for as long as necessary for the purposes for which it was collected, or in accordance with applicable legal obligations. Data related to regulatory compliance may be retained for a period of 5 to 10 years in accordance with legal requirements."}
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "6. Vos droits" : "6. Your Rights"}
                                    </h2>
                                    <p className="mb-3">
                                        {lang === "fr"
                                            ? "Conformément au RGPD, vous disposez des droits suivants :"
                                            : "Under the GDPR, you have the following rights:"}
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            {lang === "fr"
                                                ? "Droit d'accès à vos données personnelles."
                                                : "Right of access to your personal data."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Droit de rectification des données inexactes."
                                                : "Right to rectification of inaccurate data."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Droit à l'effacement (« droit à l'oubli »)."
                                                : 'Right to erasure ("right to be forgotten").'}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Droit à la limitation du traitement."
                                                : "Right to restriction of processing."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Droit à la portabilité des données."
                                                : "Right to data portability."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Droit d'opposition au traitement."
                                                : "Right to object to processing."}
                                        </li>
                                    </ul>
                                    <p className="mt-3">
                                        {lang === "fr"
                                            ? "Pour exercer ces droits, veuillez nous contacter à : contact@activacapitalgroup.eu"
                                            : "To exercise these rights, please contact us at: contact@activacapitalgroup.eu"}
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "7. Contact" : "7. Contact"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :"
                                            : "For any questions regarding this Privacy Policy, please contact us:"}
                                    </p>
                                    <p className="mt-3 font-medium text-foreground">
                                        Activa Capital Group Ltd.<br />
                                        54-56 Avenue Hoche<br />
                                        75008 Paris, France<br />
                                        contact@activacapitalgroup.eu<br />
                                        +33 7 71 49 03 71
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
