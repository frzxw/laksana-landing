import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Book, Search, HelpCircle, Zap, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SupportPage() {
  const { t } = useTranslation();

  const channels = [
    {
      icon: MessageCircle,
      title: t("support.channels.chat.title"),
      description: t("support.channels.chat.desc"),
      availability: t("support.channels.chat.availability"),
      responseTime: t("support.channels.chat.responseTime"),
      action: t("support.channels.chat.action"),
    },
    {
      icon: Mail,
      title: t("support.channels.email.title"),
      description: t("support.channels.email.desc"),
      availability: t("support.channels.email.availability"),
      responseTime: t("support.channels.email.responseTime"),
      action: t("support.channels.email.action"),
    },
    {
      icon: Phone,
      title: t("support.channels.phone.title"),
      description: t("support.channels.phone.desc"),
      availability: t("support.channels.phone.availability"),
      responseTime: t("support.channels.phone.responseTime"),
      action: t("support.channels.phone.action"),
    },
  ];

  const faqs = [
    {
      question: t("support.faqs.q1"),
      answer: t("support.faqs.a1"),
    },
    {
      question: t("support.faqs.q2"),
      answer: t("support.faqs.a2"),
    },
    {
      question: t("support.faqs.q3"),
      answer: t("support.faqs.a3"),
    },
    {
      question: t("support.faqs.q4"),
      answer: t("support.faqs.a4"),
    },
  ];

  const resources = [
    {
      icon: Book,
      title: t("support.resources.docs.title"),
      description: t("support.resources.docs.desc"),
      link: t("support.resources.docs.link"),
    },
    {
      icon: Zap,
      title: t("support.resources.quickStart.title"),
      description: t("support.resources.quickStart.desc"),
      link: t("support.resources.quickStart.link"),
    },
    {
      icon: Search,
      title: t("support.resources.knowledge.title"),
      description: t("support.resources.knowledge.desc"),
      link: t("support.resources.knowledge.link"),
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("support.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("support.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-8"
          >
            {t("support.hero.subtitle")}
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder={t("support.hero.searchPlaceholder")}
                className="w-full pl-14 pr-6 py-4 rounded-full glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">{t("support.channels.title")}</h2>
            <p className="text-lg text-white/60">{t("support.channels.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-8 text-center group hover:scale-105 transition-transform"
              >
                <div className="icon-frosted-lg rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                  <channel.icon size={32} className="text-teal-400" />
                </div>
                <h3 className="text-white text-2xl mb-2">{channel.title}</h3>
                <p className="text-white/60 mb-6">{channel.description}</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center gap-2 text-white/50">
                    <Clock size={14} />
                    {channel.availability}
                  </div>
                  <div className="text-teal-400">Response: {channel.responseTime}</div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
                >
                  {channel.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">{t("support.resources.title")}</h2>
            <p className="text-lg text-white/60">{t("support.resources.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="gradient-border rounded-2xl p-8 cursor-pointer group"
              >
                <div className="icon-frosted rounded-xl w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300">
                  <resource.icon size={28} className="text-teal-400" />
                </div>
                <h3 className="text-white text-xl mb-2">{resource.title}</h3>
                <p className="text-white/60 mb-4">{resource.description}</p>
                <span className="text-teal-400 text-sm">{resource.link} →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">{t("support.faqs.title")}</h2>
            <p className="text-lg text-white/60">{t("support.faqs.subtitle")}</p>
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
                <div className="flex items-start gap-4">
                  <HelpCircle size={24} className="text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white text-lg mb-2">{faq.question}</h3>
                    <p className="text-white/60">{faq.answer}</p>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl text-white mb-4">{t("support.cta.title")}</h2>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                {t("support.cta.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
              >
                {t("support.cta.button")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
