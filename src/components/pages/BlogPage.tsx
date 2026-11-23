import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

interface BlogPageProps {
  onNavigate?: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const { t } = useTranslation();
  const featured = {
    title: "Building Scalable Mobile Apps: Lessons from Processing 2M Daily Users",
    excerpt: "A deep dive into the architecture, tools, and strategies we used to build a mobile banking app that handles millions of transactions daily with 99.9% uptime.",
    author: "Sarah Chen",
    date: "Nov 15, 2025",
    category: "Engineering",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1080&q=80",
  };

  const posts = [
    {
      title: "The Future of Web Development: What's Next in 2025",
      excerpt: "Exploring emerging trends in web development including AI integration, edge computing, and the evolution of React.",
      author: "Alex Rivera",
      date: "Nov 12, 2025",
      category: "Technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1080&q=80",
    },
    {
      title: "Designing for Conversion: 10 Proven Landing Page Strategies",
      excerpt: "How we achieved 25%+ conversion rates through strategic design, psychology, and relentless A/B testing.",
      author: "Marcus Johnson",
      date: "Nov 8, 2025",
      category: "Design",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80",
    },
    {
      title: "From Idea to Launch: Our 12-Week Startup Playbook",
      excerpt: "The exact process we use to take startups from concept to market in just three months.",
      author: "Emily Watson",
      date: "Nov 5, 2025",
      category: "Product",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080&q=80",
    },
    {
      title: "Security Best Practices for Modern Applications",
      excerpt: "Essential security measures every application needs, from authentication to data encryption.",
      author: "David Kim",
      date: "Nov 1, 2025",
      category: "Security",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1080&q=80",
    },
    {
      title: "Why Startups Choose React Native for Mobile Development",
      excerpt: "The benefits and tradeoffs of cross-platform mobile development for early-stage companies.",
      author: "Lisa Anderson",
      date: "Oct 28, 2025",
      category: "Mobile",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1080&q=80",
    },
    {
      title: "Cloud Infrastructure 101: AWS vs Vercel vs Azure",
      excerpt: "A practical comparison of cloud platforms and how to choose the right one for your project.",
      author: "James Park",
      date: "Oct 25, 2025",
      category: "DevOps",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1080&q=80",
    },
  ];

  const categories = [t("blog.categories.all"), "Engineering", "Design", "Product", "Security", "Mobile", "DevOps"];

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
            {t("blog.hero.title").split(" ").slice(0, 1).join(" ")} &
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("blog.hero.title").split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            {t("blog.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  index === 0
                    ? "bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
                    : "glass text-white/70 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 text-sm font-medium">
                    {t("blog.featured.badge")}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 bg-black/40 backdrop-blur-xl flex flex-col justify-center">
                <span className="text-teal-400 text-sm mb-4">{featured.category}</span>
                <h2 className="text-white text-3xl md:text-4xl mb-4">{featured.title}</h2>
                <p className="text-white/70 mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-white/50">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {featured.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {featured.date}
                  </span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onNavigate && onNavigate("blog-detail")}
                  className="px-6 py-3 rounded-full glass-strong text-white inline-flex items-center gap-2 w-fit group/btn"
                >
                  {t("blog.featured.readArticle")}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-12"
          >
            {t("blog.latest.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => onNavigate && onNavigate("blog-detail")}
                className="gradient-border rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-xl">
                  <span className="text-teal-400 text-xs mb-3 block">{post.category}</span>
                  <h3 className="text-white text-xl mb-3 leading-snug">{post.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              <TrendingUp size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl text-white mb-4">{t("blog.newsletter.title")}</h2>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                {t("blog.newsletter.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("blog.newsletter.placeholder")}
                  className="flex-1 px-6 py-3 rounded-full glass text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium whitespace-nowrap"
                >
                  {t("blog.newsletter.button")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
