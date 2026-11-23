import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Calendar, Users, TrendingUp, CheckCircle, Code, Zap, Shield } from "lucide-react";

interface CaseStudyPageProps {
  onNavigate: (page: string) => void;
}

export function CaseStudyPage({ onNavigate }: CaseStudyPageProps) {
  const caseStudy = {
    title: "FinTech Mobile Banking Suite",
    client: "Global Banking Corp",
    industry: "Financial Technology",
    date: "January 2025",
    duration: "16 weeks",
    team: "8 engineers + 2 designers",
    image: "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYzNDY4ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  };

  const challenge = {
    title: "The Challenge",
    description:
      "Global Banking Corp needed a mobile banking application that could handle millions of daily transactions while maintaining bank-grade security. The existing legacy system was slow, outdated, and couldn't scale to meet growing user demands. They needed a modern, intuitive app that would work seamlessly across iOS and Android platforms.",
    points: [
      "Legacy systems unable to handle scale",
      "Poor user experience leading to customer churn",
      "Security vulnerabilities in existing infrastructure",
      "Lack of real-time transaction processing",
      "No offline functionality",
    ],
  };

  const solution = {
    title: "Our Solution",
    description:
      "We designed and built a comprehensive mobile banking platform from the ground up, leveraging React Native for cross-platform compatibility, AWS for scalable infrastructure, and implementing end-to-end encryption for security.",
    approaches: [
      {
        icon: Code,
        title: "Modern Architecture",
        description: "Microservices-based architecture with React Native frontend and Node.js backend",
      },
      {
        icon: Shield,
        title: "Bank-Grade Security",
        description: "End-to-end encryption, biometric authentication, and SOC 2 Type II compliance",
      },
      {
        icon: Zap,
        title: "Real-time Processing",
        description: "WebSocket connections for instant transaction updates and notifications",
      },
    ],
  };

  const results = [
    { metric: "2M+", label: "Active Users", icon: Users },
    { metric: "99.9%", label: "Uptime", icon: TrendingUp },
    { metric: "$5B+", label: "Transactions Processed", icon: TrendingUp },
    { metric: "4.8/5", label: "App Store Rating", icon: TrendingUp },
  ];

  const technologies = [
    "React Native",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "Redis",
    "WebSocket",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "Stripe",
  ];

  const deliverables = [
    "iOS & Android native apps",
    "Admin dashboard",
    "Real-time analytics platform",
    "API documentation",
    "Security audit reports",
    "Training materials",
    "24/7 support setup",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Back Button */}
      <section className="px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onNavigate("work")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </motion.button>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-border rounded-3xl overflow-hidden"
          >
            <div className="relative h-96 overflow-hidden">
              <ImageWithFallback
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            <div className="p-12 bg-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4 text-sm text-white/60">
                <span className="px-3 py-1 rounded-full glass text-teal-400">{caseStudy.industry}</span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {caseStudy.date}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-white/70 mb-8">{caseStudy.client}</p>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-white/50 text-sm mb-1">Duration</div>
                  <div className="text-white">{caseStudy.duration}</div>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Team Size</div>
                  <div className="text-white">{caseStudy.team}</div>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Industry</div>
                  <div className="text-white">{caseStudy.industry}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">Results That Matter</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-8 text-center"
              >
                <result.icon size={32} className="text-teal-400 mx-auto mb-4" />
                <div className="text-4xl bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <div className="text-white/60">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">{challenge.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{challenge.description}</p>
            <div className="space-y-3">
              {challenge.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400/20 to-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                  <span className="text-white/80">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">{solution.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl">{solution.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {solution.approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-8"
              >
                <div className="icon-frosted-lg rounded-xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300">
                  <approach.icon size={28} className="text-teal-400" />
                </div>
                <h3 className="text-white text-xl mb-3">{approach.title}</h3>
                <p className="text-white/60">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Deliverables */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl p-8"
          >
            <h3 className="text-white text-2xl mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 rounded-full glass text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl p-8"
          >
            <h3 className="text-white text-2xl mb-6">Deliverables</h3>
            <div className="space-y-3">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-teal-400 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
              <h2 className="text-3xl md:text-5xl text-white mb-4">Ready for similar results?</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Let's build something extraordinary for your business
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
