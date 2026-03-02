import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const ABOUT_HERO_IMG = "https://images.unsplash.com/photo-1560472355-536de3962603?w=900&q=80&auto=format&fit=crop";
const VALUES_IMG = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { key: "v1" },
    { key: "v2" },
    { key: "v3" },
    { key: "v4" },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="premium-divider mb-8" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  {t("about.title")}
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  <img
                    src={ABOUT_HERO_IMG}
                    alt="European financial district"
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-secondary/15">
          <div className="container-narrow max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="premium-divider mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-6">
                {t("about.mission.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.mission.text")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-narrow max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="premium-divider mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-6">
                {t("about.overview.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.overview.text")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/15">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 mb-8 lg:mb-0">
                  <img
                    src={VALUES_IMG}
                    alt="Professionals in collaboration"
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-10"
                >
                  <div className="premium-divider mb-6" />
                  {t("about.values.title")}
                </motion.h2>
                <div className="grid grid-cols-1 gap-5">
                  {values.map(({ key }, i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card p-7 hover:border-primary/20 transition-all duration-500"
                    >
                      <h3 className="font-semibold text-lg mb-2 text-primary font-sans">
                        {t(`about.values.${key}`)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`about.values.${key}d`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="section-padding">
          <div className="container-narrow max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="premium-divider mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-6">
                {t("about.compliance.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.compliance.text")}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
