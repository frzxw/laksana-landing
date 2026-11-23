import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ExternalLink, Users, TrendingUp, Award, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface WorkPageProps {
  onNavigate?: (page: string) => void;
}

export function WorkPage({ onNavigate }: WorkPageProps) {
  const { t } = useTranslation();
  const featured = [
    {
      title: "FinTech Mobile Suite",
      client: "Global Banking Corp",
      category: "Mobile App",
      description:
        "Complete mobile banking solution serving 2M+ active users with real-time transactions, biometric security, and seamless UX.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1080&q=80",
      tags: ["React Native", "AWS", "Real-time", "Fintech"],
      results: [
        { metric: "2M+", label: "Active Users" },
        { metric: "99.9%", label: "Uptime" },
        { metric: "$5B+", label: "Transactions" },
      ],
      challenge:
        "Build a secure, scalable mobile banking app that handles millions of transactions daily while maintaining bank-grade security.",
      solution:
        "We designed a microservices architecture with end-to-end encryption, biometric authentication, and real-time transaction processing using AWS infrastructure.",
    },
    {
      title: "Enterprise Analytics Dashboard",
      client: "DataCorp International",
      category: "Web Platform",
      description:
        "Real-time analytics platform processing 10TB+ data daily with AI-powered insights and customizable dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80",
      tags: ["Next.js", "PostgreSQL", "AI/ML", "Analytics"],
      results: [
        { metric: "10TB+", label: "Daily Data" },
        { metric: "500ms", label: "Query Time" },
        { metric: "50K+", label: "Users" },
      ],
      challenge:
        "Create a high-performance analytics platform that can process massive datasets in real-time while remaining intuitive for non-technical users.",
      solution:
        "Built with Next.js and PostgreSQL, implementing data streaming, caching strategies, and AI-powered predictive analytics for actionable insights.",
    },
    {
      title: "Multi-Location POS System",
      client: "RetailPro Chain",
      category: "Point of Sale",
      description:
        "Complete retail solution with inventory sync, payment processing, and analytics across 200+ locations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1080&q=80",
      tags: ["TypeScript", "Redis", "Stripe", "Retail"],
      results: [
        { metric: "200+", label: "Locations" },
        { metric: "40%", label: "Faster Checkout" },
        { metric: "$50M+", label: "Annual Sales" },
      ],
      challenge:
        "Synchronize inventory and sales across hundreds of retail locations in real-time while supporting offline functionality.",
      solution:
        "Developed an offline-first architecture with conflict resolution, real-time sync via Redis, and integrated payment processing.",
    },
  ];

  const moreProjects = [
    {
      title: "Healthcare Booking Platform",
      category: "Scheduling",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080&q=80",
      tags: ["React", "Node.js", "Healthcare"],
    },
    {
      title: "SaaS Landing Ecosystem",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80",
      tags: ["Next.js", "SEO", "Conversion"],
    },
    {
      title: "Supply Chain Platform",
      category: "Inventory",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1080&q=80",
      tags: ["Microservices", "IoT", "Tracking"],
    },
  ];

  const stats = [
    { icon: Users, value: t("work.stats.stat1.value"), label: t("work.stats.stat1.label") },
    { icon: TrendingUp, value: t("work.stats.stat2.value"), label: t("work.stats.stat2.label") },
    { icon: Award, value: t("work.stats.stat3.value"), label: t("work.stats.stat3.label") },
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
            {t("work.hero.title").split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("work.hero.title").split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            {t("work.hero.subtitle")}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="icon-frosted rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3 transition-all duration-300">
                  <stat.icon size={24} className="text-teal-400" />
                </div>
                <div className="text-2xl md:text-3xl bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {featured.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-border rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 bg-black/70 backdrop-blur-xl">
                  <div className="text-teal-400 text-sm mb-2">{project.category}</div>
                  <h3 className="text-white text-3xl md:text-4xl mb-2">{project.title}</h3>
                  <p className="text-white/50 text-sm mb-6">{project.client}</p>
                  <p className="text-white/70 mb-8 leading-relaxed">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.results.map((result, rIndex) => (
                      <div key={rIndex} className="glass rounded-xl p-4">
                        <div className="text-xl text-teal-400 mb-1">{result.metric}</div>
                        <div className="text-white/60 text-xs">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 rounded-full glass text-white/70 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNavigate && onNavigate("case-study")}
                    className="px-6 py-3 rounded-full glass-strong text-white flex items-center gap-2 group"
                  >
                    {t("work.featured.viewCase")}
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Projects */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-white mb-12 text-center"
          >
            {t("work.moreProjects.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {moreProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="gradient-border rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-[280px] overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                </div>
                <div className="p-6 bg-black/70 backdrop-blur-xl">
                  <div className="text-teal-400 text-sm mb-2">{project.category}</div>
                  <h3 className="text-white text-xl mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="px-2 py-1 rounded-full glass text-white/70 text-xs">
                        {tag}
                      </span>
                    ))}
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
              <h2 className="text-3xl md:text-5xl text-white mb-4">
                {t("work.cta.title")}
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                {t("work.cta.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate && onNavigate("contact")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium inline-flex items-center gap-2 group"
              >
                {t("work.cta.button")}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
