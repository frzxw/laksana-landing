import { motion } from "framer-motion";
import { Star, Quote, Building2, TrendingUp, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function TestimonialsPage() {
  const featured = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      content:
        "Laksana didn't just build our mobile app—they transformed our entire digital strategy. The app now serves 2 million users daily with zero downtime. Their technical expertise, attention to detail, and commitment to our vision was extraordinary. Best investment we've ever made.",
      rating: 5,
      project: "Mobile Banking App",
      results: ["2M daily users", "99.9% uptime", "$5B+ transactions"],
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "FinanceHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      content:
        "The analytics dashboard they built processes billions in transactions daily with incredible speed and reliability. Their architecture is rock-solid. We've scaled 10x without any performance issues. The team is brilliant, responsive, and truly understands enterprise needs.",
      rating: 5,
      project: "Enterprise Analytics Platform",
      results: ["10TB daily data", "500ms query time", "Zero downtime"],
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "HealthSync",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      content:
        "Our booking platform now handles 500,000 appointments monthly thanks to Laksana's scalable architecture. They anticipated growth challenges we hadn't even considered. The automated reminders alone have reduced no-shows by 60%. Game-changing work.",
      rating: 5,
      project: "Healthcare Booking System",
      results: ["500K monthly bookings", "60% fewer no-shows", "40% revenue increase"],
    },
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "VP Product, RetailPro",
      content:
        "The POS system revolutionized our retail operations across 200+ locations. Inventory sync is flawless, checkout is 40% faster, and the analytics help us make better business decisions every day.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Director, LogiChain",
      content:
        "Their inventory management solution tracks our global supply chain with perfect accuracy. Real-time updates, predictive analytics, and seamless integrations. Absolutely worth every penny.",
      rating: 5,
    },
    {
      name: "James Park",
      role: "COO, EduLearn",
      content:
        "Laksana delivered our learning platform ahead of schedule with features we didn't even ask for. The mobile experience is exceptional, and students love it. Support has been outstanding.",
      rating: 5,
    },
    {
      name: "Rachel Thompson",
      role: "Marketing Director, GrowthCo",
      content:
        "The landing pages they built convert at 25%+. Lightning-fast load times, beautiful design, and SEO that actually works. Our lead generation has tripled since launch.",
      rating: 5,
    },
    {
      name: "Alex Martinez",
      role: "CEO, StartupX",
      content:
        "As a startup, we needed to move fast. Laksana delivered a full mobile app and web platform in 12 weeks. Quality was exceptional, and their guidance on product strategy was invaluable.",
      rating: 5,
    },
    {
      name: "Jennifer Lee",
      role: "Operations Manager, ServicePro",
      content:
        "The custom CRM they built has transformed how we manage 50,000+ customers. Integrations work perfectly, automation saves us 20 hours weekly, and the team is always there when we need them.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
    { icon: Building2, value: "3+", label: "Countries" },
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
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              industry leaders
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Don't just take our word for it—hear from the companies we've helped transform
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

      {/* Featured Testimonials */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {featured.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-border rounded-3xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 right-8 text-teal-400/20" size={60} />

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-teal-400 text-teal-400" />
                    ))}
                  </div>

                  <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="mb-6">
                    <div className="text-white text-lg">{testimonial.name}</div>
                    <div className="text-white/60">{testimonial.role}</div>
                    <div className="text-teal-400 text-sm">{testimonial.company}</div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {testimonial.results.map((result, rIndex) => (
                      <span key={rIndex} className="px-4 py-2 rounded-full glass text-white/80 text-sm">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Testimonials */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-white mb-12 text-center"
          >
            More client stories
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="gradient-border rounded-2xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 text-teal-400/20" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-teal-400 text-teal-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
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
              <h2 className="text-3xl md:text-5xl text-white mb-4">Join our success stories</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Let's build something extraordinary together
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium inline-flex items-center gap-2 group"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
