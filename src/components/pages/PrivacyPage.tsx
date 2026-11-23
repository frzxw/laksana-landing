import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export function PrivacyPage() {
  const { t } = useTranslation();
  
  const sections = [
    {
      icon: FileText,
      title: t("privacy.sections.collect.title"),
      content: [
        t("privacy.sections.collect.item1"),
        t("privacy.sections.collect.item2"),
        t("privacy.sections.collect.item3"),
        t("privacy.sections.collect.item4"),
      ],
    },
    {
      icon: Database,
      title: t("privacy.sections.use.title"),
      content: [
        t("privacy.sections.use.item1"),
        t("privacy.sections.use.item2"),
        t("privacy.sections.use.item3"),
        t("privacy.sections.use.item4"),
        t("privacy.sections.use.item5"),
      ],
    },
    {
      icon: Lock,
      title: t("privacy.sections.security.title"),
      content: [
        t("privacy.sections.security.item1"),
        t("privacy.sections.security.item2"),
        t("privacy.sections.security.item3"),
        t("privacy.sections.security.item4"),
        t("privacy.sections.security.item5"),
      ],
    },
    {
      icon: Eye,
      title: t("privacy.sections.sharing.title"),
      content: [
        t("privacy.sections.sharing.item1"),
        t("privacy.sections.sharing.item2"),
        t("privacy.sections.sharing.item3"),
        t("privacy.sections.sharing.item4"),
        t("privacy.sections.sharing.item5"),
      ],
    },
    {
      icon: UserCheck,
      title: t("privacy.sections.rights.title"),
      content: [
        t("privacy.sections.rights.item1"),
        t("privacy.sections.rights.item2"),
        t("privacy.sections.rights.item3"),
        t("privacy.sections.rights.item4"),
        t("privacy.sections.rights.item5"),
      ],
    },
    {
      icon: Shield,
      title: t("privacy.sections.compliance.title"),
      content: [
        t("privacy.sections.compliance.item1"),
        t("privacy.sections.compliance.item2"),
        t("privacy.sections.compliance.item3"),
        t("privacy.sections.compliance.item4"),
        t("privacy.sections.compliance.item5"),
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="icon-frosted-lg w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow"
          >
            <Shield size={40} className="text-teal-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("privacy.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("privacy.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-6"
          >
            {t("privacy.hero.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-white/50"
          >
            {t("privacy.hero.updated")}: November 20, 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="icon-frosted rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <section.icon size={24} className="text-teal-400" />
                </div>
                <h2 className="text-white text-2xl md:text-3xl">{section.title}</h2>
              </div>
              <ul className="space-y-3 ml-16">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    <span className="text-white/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
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
              <h2 className="text-3xl md:text-4xl text-white mb-4">{t("privacy.cta.title")}</h2>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                {t("privacy.cta.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
              >
                {t("privacy.cta.button")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
