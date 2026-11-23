import { motion } from "framer-motion";
import { Code2, Cpu, Cloud, Server, Database, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TechStack() {
  const { t } = useTranslation();
  const technologies = [
    {
      icon: Code2,
      category: "Frontend",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Cpu,
      category: "Mobile",
      tools: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: Server,
      category: "Backend",
      tools: ["Node.js", "Golang", "Python", "Laravel"],
    },
    {
      icon: Database,
      category: "Database",
      tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      icon: Cloud,
      category: "Cloud",
      tools: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      icon: Shield,
      category: "Security",
      tools: ["OAuth 2.0", "JWT", "HTTPS/SSL", "Penetration Testing"],
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            {t("home.techStack.title")}
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t("home.techStack.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="gradient-border rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-frosted rounded-xl w-14 h-14 flex items-center justify-center transition-all duration-300">
                  <tech.icon size={24} className="text-teal-400" />
                </div>
                <h3 className="text-white text-xl">{tech.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 rounded-full glass text-white/80 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
