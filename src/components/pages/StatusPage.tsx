import { motion } from "framer-motion";
import { CheckCircle, Activity, Clock, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function StatusPage() {
  const { t } = useTranslation();

  const services = [
    { name: t("status.services.website"), status: "operational", uptime: "99.99%" },
    { name: t("status.services.api"), status: "operational", uptime: "99.98%" },
    { name: t("status.services.portal"), status: "operational", uptime: "99.97%" },
    { name: t("status.services.support"), status: "operational", uptime: "99.99%" },
    { name: t("status.services.cloud"), status: "operational", uptime: "99.99%" },
  ];

  const incidents = [
    {
      date: t("status.incidents.incident1.date"),
      title: t("status.incidents.incident1.title"),
      description: t("status.incidents.incident1.desc"),
      status: "resolved",
      duration: t("status.incidents.incident1.duration"),
    },
    {
      date: t("status.incidents.incident2.date"),
      title: t("status.incidents.incident2.title"),
      description: t("status.incidents.incident2.desc"),
      status: "resolved",
      duration: t("status.incidents.incident2.duration"),
    },
  ];

  const metrics = [
    { label: t("status.metrics.responseTime.label"), value: t("status.metrics.responseTime.value"), icon: Activity },
    { label: t("status.metrics.uptime.label"), value: t("status.metrics.uptime.value"), icon: CheckCircle },
    { label: t("status.metrics.deployments.label"), value: t("status.metrics.deployments.value"), icon: Globe },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="icon-frosted-lg w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow"
          >
            <CheckCircle size={40} className="text-teal-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("status.hero.title")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("status.hero.operational")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60"
          >
            {t("status.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="gradient-border rounded-2xl p-8 text-center"
              >
                <div className="icon-frosted rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <metric.icon size={32} className="text-teal-400" />
                </div>
                <div className="text-3xl bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-white/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-12 text-center"
          >
            {t("status.services.title")}
          </motion.h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                    <div>
                      <h3 className="text-white text-lg">{service.name}</h3>
                      <p className="text-white/50 text-sm">{t("status.services.uptime")}: {service.uptime}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full glass">
                    <span className="text-teal-400 text-sm">{t("status.services.operational")}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-12 text-center"
          >
            {t("status.incidents.title")}
          </motion.h2>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle size={20} className="text-teal-400" />
                      <h3 className="text-white text-xl">{incident.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm flex items-center gap-2">
                      <Clock size={14} />
                      {incident.date} · Duration: {incident.duration}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full glass text-teal-400 text-xs">
                    {t("status.incidents.resolved")}
                  </span>
                </div>
                <p className="text-white/70">{incident.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
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
              <h2 className="text-3xl md:text-4xl text-white mb-4">{t("status.subscribe.title")}</h2>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                {t("status.subscribe.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("status.subscribe.placeholder")}
                  className="flex-1 px-6 py-3 rounded-full glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium whitespace-nowrap"
                >
                  {t("status.subscribe.button")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
