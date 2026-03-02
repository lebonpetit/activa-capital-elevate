import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
                                {lang === "fr" ? "Conditions d'Utilisation" : "Terms of Service"}
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
                                        {lang === "fr" ? "1. Acceptation des conditions" : "1. Acceptance of Terms"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "En accédant au site web d'Activa Capital Group Ltd. et en utilisant nos services, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site web ni nos services."
                                            : "By accessing the Activa Capital Group Ltd. website and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or our services."}
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "2. Description des services" : "2. Description of Services"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Activa Capital Group Ltd. est une société de conseil en finance structurée et en investissement. Nos services comprennent, sans s'y limiter : la finance structurée, le financement de projets, le conseil en investissement, les transactions adossées aux actifs, les solutions de capital international et les services de trade finance. Les informations présentées sur ce site sont fournies à titre informatif et ne constituent en aucun cas un conseil financier, juridique ou fiscal personnalisé."
                                            : "Activa Capital Group Ltd. is a structured finance and investment advisory firm. Our services include, but are not limited to: structured finance, project financing, investment advisory, asset-backed transactions, international capital solutions, and trade finance services. The information presented on this website is provided for informational purposes only and does not constitute personalized financial, legal, or tax advice."}
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "3. Propriété intellectuelle" : "3. Intellectual Property"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "L'ensemble du contenu de ce site web, incluant mais non limité aux textes, graphiques, logos, images, vidéos et logiciels, est la propriété d'Activa Capital Group Ltd. ou de ses concédants de licence. Ce contenu est protégé par les lois sur le droit d'auteur et la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation non autorisée de ce contenu est strictement interdite."
                                            : "All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Activa Capital Group Ltd. or its licensors. This content is protected by copyright and intellectual property laws. Any unauthorized reproduction, distribution, modification, or use of this content is strictly prohibited."}
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "4. Limitation de responsabilité" : "4. Limitation of Liability"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Activa Capital Group Ltd. ne saurait être tenue responsable de tout dommage direct, indirect, accessoire, spécial ou consécutif résultant de l'utilisation ou de l'impossibilité d'utiliser notre site web ou nos services. Les informations fournies sur ce site sont présentées « en l'état » sans garantie d'aucune sorte, expresse ou implicite."
                                            : "Activa Capital Group Ltd. shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our website or services. Information provided on this site is presented \"as is\" without warranty of any kind, express or implied."}
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "5. Obligations de l'utilisateur" : "5. User Obligations"}
                                    </h2>
                                    <p className="mb-3">
                                        {lang === "fr"
                                            ? "En utilisant notre site et nos services, vous vous engagez à :"
                                            : "By using our website and services, you agree to:"}
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            {lang === "fr"
                                                ? "Fournir des informations exactes, complètes et à jour."
                                                : "Provide accurate, complete, and up-to-date information."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Ne pas utiliser le site à des fins illégales ou non autorisées."
                                                : "Not use the website for illegal or unauthorized purposes."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Ne pas tenter de compromettre la sécurité ou l'intégrité du site."
                                                : "Not attempt to compromise the security or integrity of the website."}
                                        </li>
                                        <li>
                                            {lang === "fr"
                                                ? "Respecter toutes les lois et réglementations applicables."
                                                : "Comply with all applicable laws and regulations."}
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 6 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "6. Confidentialité" : "6. Confidentiality"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Toute information échangée dans le cadre de nos services est traitée de manière strictement confidentielle, conformément à nos politiques de confidentialité et aux exigences réglementaires applicables. Les discussions, propositions et documents partagés ne peuvent être divulgués à des tiers sans le consentement écrit préalable d'Activa Capital Group Ltd."
                                            : "All information exchanged in connection with our services is treated as strictly confidential, in accordance with our privacy policies and applicable regulatory requirements. Discussions, proposals, and shared documents may not be disclosed to third parties without the prior written consent of Activa Capital Group Ltd."}
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "7. Droit applicable" : "7. Governing Law"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Les présentes conditions d'utilisation sont régies par et interprétées conformément au droit français. Tout litige découlant de ces conditions sera soumis à la compétence exclusive des tribunaux de Paris, France."
                                            : "These Terms of Service are governed by and construed in accordance with French law. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts of Paris, France."}
                                    </p>
                                </div>

                                {/* Section 8 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "8. Contact" : "8. Contact"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Pour toute question relative aux présentes conditions d'utilisation, veuillez nous contacter :"
                                            : "For any questions regarding these Terms of Service, please contact us:"}
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

export default TermsOfService;
