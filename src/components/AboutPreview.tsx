import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ABOUT_IMG = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop";

const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary/15">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src={ABOUT_IMG}
                alt="Activa Capital Group team in a modern European office"
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold accent decoration */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl opacity-20 -z-10"
              style={{ background: "linear-gradient(135deg, hsl(222 75% 50%), transparent)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="premium-divider mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              {t("about.preview.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {t("about.preview.text")}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              {t("about.preview.cta")} &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
