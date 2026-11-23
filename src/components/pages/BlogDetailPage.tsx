import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Calendar, User, Clock, Share2, BookmarkPlus, Twitter, Linkedin, Facebook } from "lucide-react";

interface BlogDetailPageProps {
  onNavigate: (page: string) => void;
}

export function BlogDetailPage({ onNavigate }: BlogDetailPageProps) {
  const article = {
    title: "Building Scalable Mobile Apps: Lessons from Processing 2M Daily Users",
    author: "Sarah Chen",
    role: "Lead Mobile Engineer",
    date: "Nov 15, 2025",
    readTime: "12 min read",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYzNDY4ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  };

  const sections = [
    {
      title: "The Challenge: Scale Without Compromise",
      content: [
        "When we started building this mobile banking platform, we knew scale would be critical. The client projected 2 million daily active users within the first year, with transaction volumes reaching billions of dollars. The app needed to be fast, secure, and reliable—three requirements that often conflict when building at scale.",
        "The existing infrastructure was built on monolithic architecture that couldn't handle the expected load. Database queries were slow, the API was experiencing frequent timeouts, and the mobile app was plagued with crashes during peak hours. We needed to rethink everything from the ground up.",
      ],
    },
    {
      title: "Architecture Decisions That Mattered",
      content: [
        "We chose React Native for the mobile frontend, allowing us to maintain a single codebase for both iOS and Android while achieving near-native performance. This decision alone reduced our development time by 40% compared to building separate native apps.",
        "For the backend, we implemented a microservices architecture using Node.js and TypeScript. Each service was responsible for a specific domain—authentication, transactions, notifications—allowing us to scale components independently based on demand.",
        "We deployed on AWS using EKS (Elastic Kubernetes Service) for container orchestration. This gave us automatic scaling, zero-downtime deployments, and the ability to handle traffic spikes during peak trading hours.",
      ],
    },
    {
      title: "Database Strategy: PostgreSQL + Redis",
      content: [
        "PostgreSQL served as our primary database, chosen for its reliability and ACID compliance—critical for financial transactions. We implemented read replicas to distribute query load and used connection pooling to handle thousands of concurrent connections efficiently.",
        "Redis became our secret weapon for performance. We used it for session management, caching frequently accessed data, and implementing a distributed lock mechanism for transaction processing. This reduced database load by 60% and improved response times from 300ms to 50ms on average.",
      ],
    },
    {
      title: "Security: Non-Negotiable",
      content: [
        "Security wasn't an afterthought—it was baked into every decision. We implemented end-to-end encryption for all data in transit and at rest. Every API request required JWT authentication with short-lived tokens that expired after 15 minutes.",
        "For sensitive operations like transfers and password changes, we added biometric authentication (Face ID/Touch ID) as a second factor. All security events were logged and monitored in real-time using AWS CloudWatch and custom alerting.",
        "We achieved SOC 2 Type II compliance and passed penetration testing with zero critical vulnerabilities found.",
      ],
    },
    {
      title: "Performance Optimization",
      content: [
        "Performance optimization was continuous. We implemented lazy loading for heavy components, used code splitting to reduce initial bundle size, and optimized images using WebP format with automatic resizing based on screen density.",
        "We used React Query for data fetching and caching, which eliminated unnecessary API calls and provided automatic background refetching. This made the app feel incredibly fast even on slower connections.",
        "Real-time features like transaction notifications were powered by WebSockets, giving users instant feedback without polling. We implemented automatic reconnection logic to handle network instability gracefully.",
      ],
    },
    {
      title: "Monitoring and Observability",
      content: [
        "You can't improve what you don't measure. We implemented comprehensive monitoring using Datadog for application performance monitoring (APM) and Sentry for error tracking. Every API endpoint was instrumented to track latency, error rates, and throughput.",
        "We set up custom dashboards showing key metrics: active users, transaction volume, API response times, and error rates. Alerts were configured to notify the team immediately when metrics crossed thresholds.",
        "This observability allowed us to identify and fix issues before users reported them. We achieved 99.9% uptime in the first year.",
      ],
    },
    {
      title: "Key Takeaways",
      content: [
        "Building for scale requires intentional architecture decisions early on. Choosing microservices over monolith gave us flexibility to scale components independently.",
        "Caching is your friend. Redis reduced our database load significantly and improved response times across the board.",
        "Security and performance aren't mutually exclusive. With the right implementation, you can have both.",
        "Observability is critical. Comprehensive monitoring helped us maintain high uptime and quickly resolve issues.",
        "Cross-platform frameworks like React Native can deliver excellent performance when optimized correctly, saving significant development time.",
      ],
    },
  ];

  const relatedArticles = [
    {
      title: "The Future of Web Development: What's Next in 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM1NDM4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Security Best Practices for Modern Applications",
      category: "Security",
      image: "https://images.unsplash.com/photo-1528262004378-a108d795029c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MzQ5Nzk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Why Startups Choose React Native for Mobile Development",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1763107228544-2ad5d71c21f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzUwNDA4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const shareLinks = [
    { icon: Twitter, label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: Facebook, label: "Facebook", color: "hover:text-[#1877F2]" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Back Button */}
      <section className="px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onNavigate("blog")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </motion.button>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-400/20 to-white/10 text-teal-400 text-sm inline-block mb-6">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6 tracking-tight leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 mb-8 text-white/60">
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {article.readTime}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="gradient-border rounded-3xl overflow-hidden mb-8"
          >
            <div className="relative h-96 overflow-hidden">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Author & Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-4">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-medium">{article.author}</div>
                <div className="text-white/60 text-sm">{article.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {shareLinks.map((link, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 transition-colors ${link.color}`}
                >
                  <link.icon size={18} />
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-teal-400 transition-colors"
              >
                <BookmarkPlus size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 mb-32">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl text-white mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-white/70 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Article Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl p-8 mt-16"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/60 text-sm mb-2">Share this article</div>
                <div className="flex items-center gap-3">
                  {shareLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 transition-colors ${link.color}`}
                    >
                      <link.icon size={20} />
                    </motion.button>
                  ))}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium flex items-center gap-2"
              >
                <BookmarkPlus size={18} />
                Save for Later
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="px-6 mb-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-8"
          >
            <div className="flex items-start gap-6">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-white text-2xl mb-2">{article.author}</h3>
                <p className="text-teal-400 mb-4">{article.role}</p>
                <p className="text-white/70 leading-relaxed mb-4">
                  Sarah is a Lead Mobile Engineer at Laksana with over 10 years of experience building
                  scalable mobile applications. She specializes in React Native, performance optimization,
                  and mobile architecture. When she's not coding, she's mentoring junior developers and
                  speaking at tech conferences.
                </p>
                <div className="flex gap-3">
                  {shareLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 transition-colors ${link.color}`}
                    >
                      <link.icon size={18} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-12"
          >
            Related Articles
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="gradient-border rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-xl">
                  <span className="text-teal-400 text-xs mb-2 block">{related.category}</span>
                  <h3 className="text-white text-lg leading-snug">{related.title}</h3>
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
              <h2 className="text-3xl md:text-5xl text-white mb-4">Need help scaling your app?</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you build a scalable, high-performance application
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("contact")}
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
