"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  ArrowUp,
  Sparkles,
  Home,
  Layout,
  CreditCard,
  HelpCircle,
  Shield,
  FileText,
  Users,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    product: [
      { name: "ReRoom.AI", href: "/designer", icon: Layout },
      { name: "Style Gallery", href: "/gallery", icon: Star },
      { name: "Before & After", href: "/showcase", icon: Home },
      { name: "Pricing Plans", href: "/pricing", icon: CreditCard },
      { name: "Mobile App", href: "/mobile", icon: Phone },
    ],
    company: [
      { name: "About Us", href: "/about", icon: Users },
      { name: "Our Story", href: "/story", icon: Heart },
      { name: "Careers", href: "/careers", icon: Users },
      { name: "Blog", href: "/blog", icon: FileText },
      { name: "Press Kit", href: "/press", icon: FileText },
    ],
    support: [
      { name: "Help Center", href: "/help", icon: HelpCircle },
      { name: "Contact Us", href: "/contact", icon: Mail },
      { name: "Live Chat", href: "/chat", icon: Phone },
      { name: "Video Tutorials", href: "/tutorials", icon: Youtube },
      { name: "Community", href: "/community", icon: Users },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy", icon: Shield },
      { name: "Terms of Service", href: "/terms", icon: FileText },
      { name: "Cookie Policy", href: "/cookies", icon: Shield },
      { name: "Refund Policy", href: "/refunds", icon: CreditCard },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-300",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com",
      color: "hover:text-red-400",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "1M+", label: "Designs Created" },
    { number: "4.9", label: "Average Rating" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden mt-20    ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-secondary/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      
      <motion.div
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Newsletter Section */}
        <motion.div
          className="border-b border-white/20"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Stay Updated with AI Design Trends
                </h3>
                <p className="text-white/80">
                  Get the latest interior design tips, AI updates, and exclusive
                  offers delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/20 hover:border-white/40 px-6">
                  Subscribe
                  <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="border-b border-white/20"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="w-full mx-auto px-4 py-16 flex">
          <div className="flex flex-row ">
            {/* Brand Section */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-white/20 to-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      height={24}
                      width={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <h2 className="text-2xl font-bold">ReRoom.AI</h2>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Helping you bring your dream room to life with AI-powered
                designs. Transform any space into your perfect sanctuary with
                cutting-edge artificial intelligence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <motion.a
                  href="mailto:singhmohak999@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>singhmohak999@gmail.com</span>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/80 transition-all duration-300 border border-white/20 hover:border-white/40 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Product Links */}
            

            {/* Company Links */}
           

            {/* Support Links */}
            
            {/* Legal Links */}
            
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span>© 2025 ReRoom.AI.</span>
                <span>Designed and Developed with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>for the Community.</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
