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

const services = [
  { key: "sf", image: imgSF },
  { key: "pf", image: imgPF },
  { key: "ia", image: imgIA },
  { key: "ab", image: imgAB },
  { key: "ic", image: imgIC },
  { key: "tf", image: imgTF },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="premium-divider mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-5">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ key, image }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="block glass-card overflow-hidden hover:border-primary/20 transition-all duration-500 h-full group flex flex-col"
              >
                {/* Image Header */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={t(`services.${key}`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 font-serif group-hover:text-primary transition-colors duration-300">
                      {t(`services.${key}`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {t(`services.${key}.desc`)}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider">
                    {t("services.cta")} &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
