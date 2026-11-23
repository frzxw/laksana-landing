import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useState } from "react";
import { CustomSelect } from "../CustomSelect";
import { useTranslation } from "react-i18next";

export function ContactPage() {
  const { t } = useTranslation();
  const [projectType, setProjectType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");

  const projectTypeOptions = [
    { value: "mobile", label: t("contact.projectTypes.mobile") },
    { value: "web", label: t("contact.projectTypes.web") },
    { value: "landing", label: t("contact.projectTypes.landing") },
    { value: "inventory", label: t("contact.projectTypes.inventory") },
    { value: "booking", label: t("contact.projectTypes.booking") },
    { value: "pos", label: t("contact.projectTypes.pos") },
    { value: "custom", label: t("contact.projectTypes.custom") },
  ];

  const budgetOptions = [
    { value: "10-25", label: t("contact.budgetOptions.range1") },
    { value: "25-50", label: t("contact.budgetOptions.range2") },
    { value: "50-100", label: t("contact.budgetOptions.range3") },
    { value: "100+", label: t("contact.budgetOptions.range4") },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t("contact.methods.liveChat.title"),
      detail: t("contact.methods.liveChat.detail"),
      description: t("contact.methods.liveChat.desc"),
    },
    {
      icon: Mail,
      title: t("contact.methods.email.title"),
      detail: t("contact.methods.email.detail"),
      description: t("contact.methods.email.desc"),
    },
    {
      icon: Phone,
      title: t("contact.methods.phone.title"),
      detail: t("contact.methods.phone.detail"),
      description: t("contact.methods.phone.desc"),
    },
    {
      icon: MapPin,
      title: t("contact.methods.office.title"),
      detail: t("contact.methods.office.detail"),
      description: t("contact.methods.office.desc"),
    },
  ];

  const offices = [
    { city: t("contact.offices.bandung.city"), address: t("contact.offices.bandung.address") },
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
            {t("contact.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("contact.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            {t("contact.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl text-white mb-8">{t("contact.form.title")}</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 mb-2 text-sm">{t("contact.form.firstName")}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder={t("contact.form.firstNamePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-2 text-sm">{t("contact.form.lastName")}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder={t("contact.form.lastNamePlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-2 text-sm">{t("contact.form.email")}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-white/70 mb-2 text-sm">{t("contact.form.company")}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder={t("contact.form.companyPlaceholder")}
                />
              </div>

              <div>
                <CustomSelect
                  label={t("contact.form.projectType")}
                  options={projectTypeOptions}
                  value={projectType}
                  onChange={setProjectType}
                  placeholder={t("contact.form.projectTypePlaceholder")}
                />
              </div>

              <div>
                <CustomSelect
                  label={t("contact.form.budgetRange")}
                  options={budgetOptions}
                  value={budgetRange}
                  onChange={setBudgetRange}
                  placeholder={t("contact.form.budgetPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-white/70 mb-2 text-sm">{t("contact.form.message")}</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium flex items-center justify-center gap-2"
              >
                {t("contact.form.send")}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gradient-border rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="icon-frosted rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Clock size={24} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white text-xl mb-2">{t("contact.responseTime.title")}</h3>
                  <p className="text-white/70">
                    {t("contact.responseTime.desc")}
                  </p>
                </div>
              </div>
            </motion.div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-8 group hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="icon-frosted rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <method.icon size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-xl mb-2">{method.title}</h4>
                    <p className="text-teal-400 mb-1">{method.detail}</p>
                    <p className="text-white/70">{method.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
