import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const CookiePolicy = () => {
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
                                {lang === "fr" ? "Politique des Cookies" : "Cookie Policy"}
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
                                        {lang === "fr" ? "1. Qu'est-ce qu'un cookie ?" : "1. What is a Cookie?"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lors de la visite d'un site web. Les cookies permettent au site de mémoriser vos actions et préférences (langue, taille d'affichage, etc.) pendant une période déterminée, afin que vous n'ayez pas à les reconfigurer à chaque visite."
                                            : "A cookie is a small text file stored on your device (computer, tablet, smartphone) when you visit a website. Cookies allow the site to remember your actions and preferences (language, display size, etc.) over a period of time, so you don't have to reconfigure them each time you visit."}
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "2. Types de cookies utilisés" : "2. Types of Cookies We Use"}
                                    </h2>

                                    <div className="space-y-5">
                                        <div className="glass-card p-6">
                                            <h3 className="font-semibold text-foreground mb-2">
                                                {lang === "fr" ? "Cookies essentiels" : "Essential Cookies"}
                                            </h3>
                                            <p className="text-sm">
                                                {lang === "fr"
                                                    ? "Ces cookies sont nécessaires au fonctionnement du site web. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités essentielles. Sans ces cookies, le site ne peut pas fonctionner correctement."
                                                    : "These cookies are necessary for the website to function. They allow you to navigate the site and use its essential features. Without these cookies, the site cannot function properly."}
                                            </p>
                                        </div>

                                        <div className="glass-card p-6">
                                            <h3 className="font-semibold text-foreground mb-2">
                                                {lang === "fr" ? "Cookies de performance" : "Performance Cookies"}
                                            </h3>
                                            <p className="text-sm">
                                                {lang === "fr"
                                                    ? "Ces cookies collectent des informations anonymes sur la façon dont les visiteurs utilisent notre site web. Ils nous permettent d'améliorer la performance et l'expérience utilisateur en analysant les pages les plus visitées et les éventuels messages d'erreur."
                                                    : "These cookies collect anonymous information about how visitors use our website. They help us improve performance and user experience by analyzing the most visited pages and any error messages."}
                                            </p>
                                        </div>

                                        <div className="glass-card p-6">
                                            <h3 className="font-semibold text-foreground mb-2">
                                                {lang === "fr" ? "Cookies de préférence" : "Preference Cookies"}
                                            </h3>
                                            <p className="text-sm">
                                                {lang === "fr"
                                                    ? "Ces cookies permettent au site de mémoriser vos choix (comme la langue préférée ou votre consentement aux cookies) pour vous offrir une expérience personnalisée et cohérente."
                                                    : "These cookies allow the site to remember your choices (such as preferred language or cookie consent) to provide a personalized and consistent experience."}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "3. Gestion des cookies" : "3. Managing Cookies"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Vous pouvez contrôler et gérer les cookies de plusieurs façons. La plupart des navigateurs web vous permettent de bloquer ou de supprimer les cookies via leurs paramètres. Veuillez noter que la désactivation de certains cookies peut affecter la fonctionnalité de notre site web."
                                            : "You can control and manage cookies in several ways. Most web browsers allow you to block or delete cookies through their settings. Please note that disabling certain cookies may affect the functionality of our website."}
                                    </p>
                                    <p className="mt-3">
                                        {lang === "fr"
                                            ? "Pour gérer vos préférences de cookies sur notre site, vous pouvez utiliser le bouton « Personnaliser » de notre bannière de cookies qui s'affiche lors de votre première visite."
                                            : "To manage your cookie preferences on our website, you can use the \"Customize\" button on our cookie banner that appears during your first visit."}
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "4. Durée de conservation" : "4. Cookie Retention Period"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "La durée de conservation des cookies varie selon leur type. Les cookies de session sont supprimés dès la fermeture de votre navigateur. Les cookies persistants restent sur votre appareil pendant une durée maximale de 12 mois, après quoi ils sont automatiquement supprimés."
                                            : "The retention period of cookies varies depending on their type. Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a maximum of 12 months, after which they are automatically deleted."}
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "5. Mise à jour de cette politique" : "5. Updates to This Policy"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Nous nous réservons le droit de modifier cette politique des cookies à tout moment. Les modifications prennent effet dès leur publication sur notre site web. Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de cookies."
                                            : "We reserve the right to modify this Cookie Policy at any time. Changes take effect upon publication on our website. We encourage you to regularly review this page to stay informed about our cookie practices."}
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                                        {lang === "fr" ? "6. Contact" : "6. Contact"}
                                    </h2>
                                    <p>
                                        {lang === "fr"
                                            ? "Pour toute question relative à notre utilisation des cookies, veuillez nous contacter :"
                                            : "For any questions about our use of cookies, please contact us:"}
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

export default CookiePolicy;
