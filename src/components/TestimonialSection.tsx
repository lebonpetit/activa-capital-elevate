import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const TESTIMONIAL_IMG = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop&crop=face";

const TestimonialSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary/15">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-card p-10 sm:p-16 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Decorative blue corner accent */}
          <div
            className="absolute top-0 left-0 w-32 h-32 opacity-[0.06]"
            style={{ background: "radial-gradient(circle at top left, hsl(222 75% 50%), transparent)" }}
          />

          <div className="relative z-10">
            <div className="text-6xl font-serif blue-gradient-text mb-8 leading-none">&ldquo;</div>
            <blockquote className="text-lg sm:text-xl leading-relaxed text-secondary-foreground mb-10 italic font-light">
              {t("testimonial.quote")}
            </blockquote>
            <div className="subtle-gradient-line mb-8" />
            <div className="flex items-center gap-5">
              <img
                src={TESTIMONIAL_IMG}
                alt="Alexandra Morgan"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 shadow-lg shadow-primary/10"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-base mb-0.5">Alexandra Morgan</p>
                <p className="text-sm text-muted-foreground">Chief Investment Officer</p>
                <p className="text-sm text-primary font-medium">Sterling Institutional Partners</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
