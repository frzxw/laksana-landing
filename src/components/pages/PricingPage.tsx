import { motion } from "framer-motion";
import { Check, Zap, Star, ArrowRight, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PricingPageProps {
  onNavigate?: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const { t } = useTranslation();
  
  const packages = [
    {
      name: t("pricing.packages.starter.name"),
      tagline: t("pricing.packages.starter.tagline"),
      price: t("pricing.packages.starter.price"),
      description: t("pricing.packages.starter.desc"),
      features: [
        t("pricing.packages.starter.feature1"),
        t("pricing.packages.starter.feature2"),
        t("pricing.packages.starter.feature3"),
        t("pricing.packages.starter.feature4"),
        t("pricing.packages.starter.feature5"),
        t("pricing.packages.starter.feature6"),
        t("pricing.packages.starter.feature7"),
      ],
      timeline: t("pricing.packages.starter.timeline"),
      cta: t("pricing.packages.starter.cta"),
      popular: false,
    },
    {
      name: t("pricing.packages.professional.name"),
      tagline: t("pricing.packages.professional.tagline"),
      price: t("pricing.packages.professional.price"),
      description: t("pricing.packages.professional.desc"),
      features: [
        t("pricing.packages.professional.feature1"),
        t("pricing.packages.professional.feature2"),
        t("pricing.packages.professional.feature3"),
        t("pricing.packages.professional.feature4"),
        t("pricing.packages.professional.feature5"),
        t("pricing.packages.professional.feature6"),
        t("pricing.packages.professional.feature7"),
        t("pricing.packages.professional.feature8"),
        t("pricing.packages.professional.feature9"),
        t("pricing.packages.professional.feature10"),
        t("pricing.packages.professional.feature11"),
      ],
      timeline: t("pricing.packages.professional.timeline"),
      cta: t("pricing.packages.professional.cta"),
      popular: true,
    },
    {
      name: t("pricing.packages.enterprise.name"),
      tagline: t("pricing.packages.enterprise.tagline"),
      price: t("pricing.packages.enterprise.price"),
      description: t("pricing.packages.enterprise.desc"),
      features: [
        t("pricing.packages.enterprise.feature1"),
        t("pricing.packages.enterprise.feature2"),
        t("pricing.packages.enterprise.feature3"),
        t("pricing.packages.enterprise.feature4"),
        t("pricing.packages.enterprise.feature5"),
        t("pricing.packages.enterprise.feature6"),
        t("pricing.packages.enterprise.feature7"),
        t("pricing.packages.enterprise.feature8"),
        t("pricing.packages.enterprise.feature9"),
        t("pricing.packages.enterprise.feature10"),
        t("pricing.packages.enterprise.feature11"),
        t("pricing.packages.enterprise.feature12"),
      ],
      timeline: t("pricing.packages.enterprise.timeline"),
      cta: t("pricing.packages.enterprise.cta"),
      popular: false,
    },
  ];

  const addons = [
    { name: t("pricing.addons.platform"), price: "$15K" },
    { name: t("pricing.addons.analytics"), price: "$5K" },
    { name: t("pricing.addons.realtime"), price: "$8K" },
    { name: t("pricing.addons.payment"), price: "$3K" },
    { name: t("pricing.addons.admin"), price: "$10K" },
    { name: t("pricing.addons.api"), price: "$7K" },
    { name: t("pricing.addons.maintenance"), price: "$2K/mo" },
    { name: t("pricing.addons.priority"), price: "$3K/mo" },
  ];

  const faqs = [
    {
      q: t("pricing.faqs.q1"),
      a: t("pricing.faqs.a1"),
    },
    {
      q: t("pricing.faqs.q2"),
      a: t("pricing.faqs.a2"),
    },
    {
      q: t("pricing.faqs.q3"),
      a: t("pricing.faqs.a3"),
    },
    {
      q: t("pricing.faqs.q4"),
      a: t("pricing.faqs.a4"),
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("pricing.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("pricing.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-8"
          >
            {t("pricing.hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
          >
            <Zap size={16} className="text-teal-400" />
            <span className="text-white/80 text-sm">{t("pricing.hero.roiBadge")}</span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`gradient-border rounded-3xl p-8 relative ${
                  pkg.popular ? "scale-105 lg:scale-110" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 text-sm font-medium flex items-center gap-1">
                      <Star size={14} fill="currentColor" />
                      {t("pricing.packages.professional.badge")}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-teal-400 text-sm mb-4">{pkg.tagline}</p>
                  <div className="mb-4">
                    <span className="text-5xl bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent">
                      ${pkg.price}
                    </span>
                    {pkg.price !== "Custom" && <span className="text-white/50 text-lg"> USD</span>}
                  </div>
                  <p className="text-white/60 text-sm">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <Check size={20} className="text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 text-center">
                  <span className="text-white/50 text-sm">{t("pricing.packages.timelineLabel")} </span>
                  <span className="text-white text-sm">{pkg.timeline}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate && onNavigate("contact")}
                  className={`w-full px-6 py-4 rounded-full font-medium ${
                    pkg.popular
                      ? "bg-gradient-to-r from-teal-400 to-white text-gray-900"
                      : "glass-strong text-white"
                  }`}
                >
                  {pkg.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl text-white mb-4">{t("pricing.addons.title")}</h2>
            <p className="text-xl text-white/60">{t("pricing.addons.subtitle")}</p>
          </motion.div>

          <div className="gradient-border rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {addons.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 glass rounded-xl"
                >
                  <span className="text-white/80">{addon.name}</span>
                  <span className="text-teal-400 font-medium">{addon.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">{t("pricing.faqs.title")}</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-6"
              >
                <h3 className="text-white text-lg mb-2">{faq.q}</h3>
                <p className="text-white/60">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-white/5" />
            <div className="relative z-10">
              <motion.div 
                className="icon-frosted-lg rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <MessageCircle size={32} className="text-teal-400" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl text-white mb-4">{t("pricing.cta.title")}</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                {t("pricing.cta.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate && onNavigate("contact")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium inline-flex items-center gap-2 group"
              >
                {t("pricing.cta.button")}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
