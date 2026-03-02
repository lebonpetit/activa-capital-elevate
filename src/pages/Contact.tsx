import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30),
  service: z.string().trim().min(1),
  message: z.string().trim().min(1).max(2000),
});

const Contact = () => {
  const { lang, t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  const serviceOptions = [
    { en: "Structured Finance", fr: "Finance Structuree" },
    { en: "Project Financing", fr: "Financement de Projets" },
    { en: "Investment Advisory", fr: "Conseil en Investissement" },
    { en: "Asset-Backed Transactions", fr: "Transactions Adossees aux Actifs" },
    { en: "International Capital Solutions", fr: "Solutions de Capital International" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: lang === "fr" ? "Veuillez remplir tous les champs requis" : "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({ title: lang === "fr" ? "Message envoye avec succes" : "Message sent successfully" });
    setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  };

  const emails = [
    "infos@activacapitalgroup.eu",
    "contact@activacapitalgroup.eu",
  ];

  const inputClassName = "w-full bg-secondary/40 border border-border/40 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300";

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
              className="mb-16"
            >
              <div className="premium-divider mb-8" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-5">
                {t("contact.title")}
              </h1>
              <p className="text-muted-foreground max-w-3xl text-lg">
                {t("contact.subtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-9 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2.5 block">
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClassName}
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2.5 block">
                      {t("contact.company")}
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className={inputClassName}
                      maxLength={100}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2.5 block">
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClassName}
                      required
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2.5 block">
                      {t("contact.phone")}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className={inputClassName}
                      maxLength={30}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2.5 block">
                    {t("contact.service")} *
                  </label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className={inputClassName}
                    required
                  >
                    <option value="">{t("contact.select")}</option>
                    {serviceOptions.map(s => (
                      <option key={s.en} value={s.en}>{s[lang]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2.5 block">
                    {t("contact.message")} *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={`${inputClassName} resize-none`}
                    required
                    maxLength={2000}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/85 transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25"
                >
                  {t("contact.send")}
                </button>
              </motion.form>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="glass-card p-9">
                  <h3 className="font-serif text-xl font-bold mb-5 blue-gradient-text">
                    Activa Capital Group
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>54-56 Avenue Hoche<br />75008 Paris, France</p>
                    <p>+33 7 71 49 03 71</p>
                  </div>
                </div>
                <div className="glass-card p-9">
                  <h3 className="font-semibold text-xs uppercase tracking-[0.15em] text-primary mb-5 font-sans">
                    Email
                  </h3>
                  <div className="space-y-2.5">
                    {emails.map(email => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
