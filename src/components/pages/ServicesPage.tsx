import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone,
  Layout,
  Package,
  Calendar,
  ShoppingCart,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Code2,
  Zap,
  Shield,
} from "lucide-react";
import { useRef } from "react";
import { MagneticButton } from "../MagneticButton";
import { useTranslation } from "react-i18next";

export function ServicesPage() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      icon: Smartphone,
      title: t("services.main.mobileApps.title"),
      tagline: t("services.main.mobileApps.tagline"),
      description: t("services.main.mobileApps.desc"),
      features: [
        t("services.main.mobileApps.feature1"),
        t("services.main.mobileApps.feature2"),
        t("services.main.mobileApps.feature3"),
        t("services.main.mobileApps.feature4"),
        t("services.main.mobileApps.feature5"),
        t("services.main.mobileApps.feature6"),
      ],
      deliverables: ["Source code", "App Store listings", "Documentation", "3 months support"],
      timeline: "12-16 weeks",
      startingPrice: "Custom pricing",
    },
    {
      icon: Layout,
      title: t("services.main.landing.title"),
      tagline: t("services.main.landing.tagline"),
      description: t("services.main.landing.desc"),
      features: [
        t("services.main.landing.feature1"),
        t("services.main.landing.feature2"),
        t("services.main.landing.feature3"),
        t("services.main.landing.feature4"),
        t("services.main.landing.feature5"),
        t("services.main.landing.feature6"),
      ],
      deliverables: ["Responsive website", "SEO setup", "Analytics", "Training"],
      timeline: "2-3 weeks",
      startingPrice: "Custom pricing",
    },
    {
      icon: Package,
      title: t("services.main.inventory.title"),
      tagline: t("services.main.inventory.tagline"),
      description: t("services.main.inventory.desc"),
      features: [
        t("services.main.inventory.feature1"),
        t("services.main.inventory.feature2"),
        t("services.main.inventory.feature3"),
        t("services.main.inventory.feature4"),
        t("services.main.inventory.feature5"),
        t("services.main.inventory.feature6"),
      ],
      deliverables: ["Web & mobile apps", "API access", "Training", "6 months support"],
      timeline: "16-20 weeks",
      startingPrice: "Custom pricing",
    },
    {
      icon: Calendar,
      title: t("services.main.booking.title"),
      tagline: t("services.main.booking.tagline"),
      description: t("services.main.booking.desc"),
      features: [
        t("services.main.booking.feature1"),
        t("services.main.booking.feature2"),
        t("services.main.booking.feature3"),
        t("services.main.booking.feature4"),
        t("services.main.booking.feature5"),
        t("services.main.booking.feature6"),
      ],
      deliverables: ["Booking platform", "Payment setup", "CRM", "Support"],
      timeline: "10-14 weeks",
      startingPrice: "Custom pricing",
    },
    {
      icon: ShoppingCart,
      title: t("services.main.pos.title"),
      tagline: t("services.main.pos.tagline"),
      description: t("services.main.pos.desc"),
      features: [
        t("services.main.pos.feature1"),
        t("services.main.pos.feature2"),
        t("services.main.pos.feature3"),
        t("services.main.pos.feature4"),
        t("services.main.pos.feature5"),
        t("services.main.pos.feature6"),
      ],
      deliverables: ["POS software", "Hardware setup", "Training", "Ongoing support"],
      timeline: "14-18 weeks",
      startingPrice: "Custom pricing",
    },
    {
      icon: Briefcase,
      title: t("services.main.custom.title"),
      tagline: t("services.main.custom.tagline"),
      description: t("services.main.custom.desc"),
      features: [
        t("services.main.custom.feature1"),
        t("services.main.custom.feature2"),
        t("services.main.custom.feature3"),
        t("services.main.custom.feature4"),
        t("services.main.custom.feature5"),
        t("services.main.custom.feature6"),
      ],
      deliverables: ["Custom solution", "Documentation", "Training", "Long-term support"],
      timeline: "Varies by scope",
      startingPrice: "Custom pricing",
    },
  ];

  const process = [
    {
      icon: Code2,
      title: t("services.ui.step1Title"),
      description: t("services.ui.step1Desc"),
    },
    {
      icon: Zap,
      title: t("services.ui.step2Title"),
      description: t("services.ui.step2Desc"),
    },
    {
      icon: Shield,
      title: t("services.ui.step3Title"),
      description: t("services.ui.step3Desc"),
    },
  ];

  return (
    <div ref={ref} className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={16} className="text-teal-400" />
            </motion.div>
            <span className="text-white/80 text-sm">Elite software solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("services.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("services.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            {t("services.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="gradient-border rounded-3xl p-8 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="icon-frosted-lg rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <service.icon size={32} className="text-teal-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl mb-1">{service.title}</h3>
                    <p className="text-teal-400 text-sm">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-white text-sm mb-3">{t("services.ui.whatsIncluded")}</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {service.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + fIndex * 0.03 }}
                      >
                        <CheckCircle size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-sm">
                  <div>
                    <span className="text-white/50">{t("services.ui.timeline")}</span>
                    <span className="text-white ml-2">{service.timeline}</span>
                  </div>
                  <div>
                    <span className="text-white/50">{t("services.ui.investment")}</span>
                    <span className="text-white ml-2">{service.startingPrice}</span>
                  </div>
                </div>

                <MagneticButton className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium flex items-center justify-center gap-2 group/btn">
                  {t("services.ui.getStarted")}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">{t("services.ui.processTitle")}</h2>
            <p className="text-xl text-white/60">{t("services.ui.processSubtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="text-center"
              >
                <motion.div
                  className="icon-frosted-lg rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <step.icon size={36} className="text-teal-400" />
                </motion.div>
                <h3 className="text-white text-xl mb-3">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
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
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="gradient-border rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-white/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl text-white mb-4">
                {t("services.cta.title")}
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                {t("services.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium">
                  {t("services.cta.button")}
                </MagneticButton>
                <MagneticButton className="px-8 py-4 rounded-full glass-strong text-white">
                  {t("services.cta.secondaryButton")}
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
