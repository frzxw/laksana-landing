import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Heart, Zap, MapPin, Clock, DollarSign } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { MagneticButton } from "../MagneticButton";

interface CareersPageProps {
  onNavigate?: (page: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const benefits = [
    { icon: DollarSign, title: t("careers.benefits.salary.title"), description: t("careers.benefits.salary.desc") },
    { icon: MapPin, title: t("careers.benefits.remote.title"), description: t("careers.benefits.remote.desc") },
    { icon: Clock, title: t("careers.benefits.flexible.title"), description: t("careers.benefits.flexible.desc") },
    { icon: TrendingUp, title: t("careers.benefits.growth.title"), description: t("careers.benefits.growth.desc") },
    { icon: Heart, title: t("careers.benefits.healthcare.title"), description: t("careers.benefits.healthcare.desc") },
    { icon: Zap, title: t("careers.benefits.equipment.title"), description: t("careers.benefits.equipment.desc") },
  ];

  const positions = [
    {
      title: t("careers.positions.fullStackEngineer.title"),
      department: t("careers.positions.fullStackEngineer.dept"),
      location: t("careers.positions.fullStackEngineer.location"),
      type: t("careers.positions.fullStackEngineer.type"),
      description: t("careers.positions.fullStackEngineer.desc"),
      requirements: [
        t("careers.positions.fullStackEngineer.req1"),
        t("careers.positions.fullStackEngineer.req2"),
        t("careers.positions.fullStackEngineer.req3")
      ],
    },
    {
      title: t("careers.positions.mobileDeveloper.title"),
      department: t("careers.positions.mobileDeveloper.dept"),
      location: t("careers.positions.mobileDeveloper.location"),
      type: t("careers.positions.mobileDeveloper.type"),
      description: t("careers.positions.mobileDeveloper.desc"),
      requirements: [
        t("careers.positions.mobileDeveloper.req1"),
        t("careers.positions.mobileDeveloper.req2"),
        t("careers.positions.mobileDeveloper.req3")
      ],
    },
    {
      title: t("careers.positions.productDesigner.title"),
      department: t("careers.positions.productDesigner.dept"),
      location: t("careers.positions.productDesigner.location"),
      type: t("careers.positions.productDesigner.type"),
      description: t("careers.positions.productDesigner.desc"),
      requirements: [
        t("careers.positions.productDesigner.req1"),
        t("careers.positions.productDesigner.req2"),
        t("careers.positions.productDesigner.req3")
      ],
    },
    {
      title: t("careers.positions.devOpsEngineer.title"),
      department: t("careers.positions.devOpsEngineer.dept"),
      location: t("careers.positions.devOpsEngineer.location"),
      type: t("careers.positions.devOpsEngineer.type"),
      description: t("careers.positions.devOpsEngineer.desc"),
      requirements: [
        t("careers.positions.devOpsEngineer.req1"),
        t("careers.positions.devOpsEngineer.req2"),
        t("careers.positions.devOpsEngineer.req3")
      ],
    },
    {
      title: t("careers.positions.techPM.title"),
      department: t("careers.positions.techPM.dept"),
      location: t("careers.positions.techPM.location"),
      type: t("careers.positions.techPM.type"),
      description: t("careers.positions.techPM.desc"),
      requirements: [
        t("careers.positions.techPM.req1"),
        t("careers.positions.techPM.req2"),
        t("careers.positions.techPM.req3")
      ],
    },
    {
      title: t("careers.positions.bizDevManager.title"),
      department: t("careers.positions.bizDevManager.dept"),
      location: t("careers.positions.bizDevManager.location"),
      type: t("careers.positions.bizDevManager.type"),
      description: t("careers.positions.bizDevManager.desc"),
      requirements: [
        t("careers.positions.bizDevManager.req1"),
        t("careers.positions.bizDevManager.req2"),
        t("careers.positions.bizDevManager.req3")
      ],
    },
  ];

  return (
    <div ref={ref} className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("careers.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("careers.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto"
          >
            {t("careers.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">{t("careers.benefits.title")}</h2>
            <p className="text-xl text-white/60">{t("careers.benefits.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="gradient-border rounded-2xl p-8"
              >
                <motion.div 
                  className="icon-frosted rounded-xl w-12 h-12 flex items-center justify-center mb-4 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <benefit.icon size={24} className="text-teal-400" />
                </motion.div>
                <h3 className="text-white text-xl mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">{t("careers.positions.title")}</h2>
            <p className="text-xl text-white/60">{t("careers.positions.subtitle")}</p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
                className="gradient-border rounded-2xl p-8 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-white text-2xl">{position.title}</h3>
                      <span className="px-3 py-1 rounded-full glass text-teal-400 text-xs">
                        {position.department}
                      </span>
                    </div>
                    <p className="text-white/70 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-white/50 text-sm flex items-center gap-1">
                        <MapPin size={14} /> {position.location}
                      </span>
                      <span className="text-white/50 text-sm">•</span>
                      <span className="text-white/50 text-sm">{position.type}</span>
                    </div>
                    <div className="space-y-1">
                      {position.requirements.map((req, rIndex) => (
                        <motion.div 
                          key={rIndex} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + rIndex * 0.03 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          <span className="text-white/60 text-sm">{req}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <MagneticButton 
                    onClick={() => onNavigate && onNavigate("contact")}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium whitespace-nowrap"
                  >
                    {t("careers.positions.applyNow")}
                  </MagneticButton>
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
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="gradient-border rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-white/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl text-white mb-4">{t("careers.cta.title")}</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                {t("careers.cta.subtitle")}
              </p>
              <MagneticButton 
                onClick={() => onNavigate && onNavigate("contact")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
              >
                {t("careers.cta.button")}
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
