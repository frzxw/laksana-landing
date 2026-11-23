import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, Server, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SecurityPage() {
  const { t } = useTranslation();

  const measures = [
    {
      icon: Lock,
      title: t("security.measures.encryption.title"),
      description: t("security.measures.encryption.desc"),
    },
    {
      icon: Shield,
      title: t("security.measures.auth.title"),
      description: t("security.measures.auth.desc"),
    },
    {
      icon: Server,
      title: t("security.measures.infrastructure.title"),
      description: t("security.measures.infrastructure.desc"),
    },
    {
      icon: Eye,
      title: t("security.measures.privacy.title"),
      description: t("security.measures.privacy.desc"),
    },
    {
      icon: FileCheck,
      title: t("security.measures.code.title"),
      description: t("security.measures.code.desc"),
    },
    {
      icon: AlertCircle,
      title: t("security.measures.incident.title"),
      description: t("security.measures.incident.desc"),
    },
  ];

  const certifications = [
    t("security.certifications.cert1"),
    t("security.certifications.cert2"),
    t("security.certifications.cert3"),
    t("security.certifications.cert4"),
    t("security.certifications.cert5"),
    t("security.certifications.cert6"),
  ];

  const practices = [
    t("security.practices.practice1"),
    t("security.practices.practice2"),
    t("security.practices.practice3"),
    t("security.practices.practice4"),
    t("security.practices.practice5"),
    t("security.practices.practice6"),
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
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
            {t("security.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("security.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            {t("security.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Security Measures */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-12 text-center"
          >
            {t("security.framework.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {measures.map((measure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-8"
              >
                <div className="icon-frosted-lg rounded-xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300">
                  <measure.icon size={28} className="text-teal-400" />
                </div>
                <h3 className="text-white text-xl mb-3">{measure.title}</h3>
                <p className="text-white/60 leading-relaxed">{measure.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-8 text-center">
              {t("security.certifications.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <FileCheck size={32} className="text-teal-400 mx-auto mb-3" />
                  <span className="text-white">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-12 text-center"
          >
            {t("security.practices.title")}
          </motion.h2>

          <div className="gradient-border rounded-3xl p-12">
            <div className="space-y-4">
              {practices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 glass rounded-xl"
                >
                  <Shield size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-white/80">{practice}</span>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl text-white mb-4">{t("security.cta.title")}</h2>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                {t("security.cta.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
              >
                {t("security.cta.button")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
