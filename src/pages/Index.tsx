import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import ServicesSection from "@/components/ServicesSection";
import AboutPreview from "@/components/AboutPreview";
import TrackRecordSection from "@/components/TrackRecordSection";
import LeadershipSection from "@/components/LeadershipSection";
import FAQSection from "@/components/FAQSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Index = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Tagline Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container-narrow px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="premium-divider mx-auto mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground">
                {t("hero.line1")}
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mt-2 text-foreground">
                {t("hero.line2")}{" "}
                <span className="text-[#c59c5d]">{t("hero.highlight")}</span>
              </h2>
              <div className="premium-divider mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        <div className="subtle-gradient-line" />
        <ServicesSection />
        <TestimonialSection />
        <AboutPreview />
        <div className="subtle-gradient-line" />
      </main>
      <Footer />
    </>
  );
};

export default Index;
