"use client"

import { motion } from "framer-motion"
import PricingCard from "./PricingCard"

function Pricing() {
  const creditOptions = [
    {
      credits: 5,
      amount: 19,
      tagline: "Start Small",
      description: "Great for exploring basic features and trying things out.",
      badge: "Starter",
      popular: false,
    },
    {
      credits: 10,
      amount: 49,
      tagline: "Better Value",
      description: "Get a bit more room to explore and design freely.",
      badge: "Popular",
      popular: true,
    },
    {
      credits: 25,
      amount: 149,
      tagline: "Most Loved",
      description: "Perfect for regular users with moderate needs.",
      badge: "Best Value",
      popular: false,
    },
    {
      credits: 50,
      amount: 259,
      tagline: "Heavy User",
      description: "Designed for power users and creative professionals.",
      badge: "",
      popular: false,
    },
    {
      credits: 100,
      amount: 499,
      tagline: "All In",
      description: "Go unlimited with maximum credits and full access.",
      badge: "Pro Plan",
      popular: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className="py-20 px-4 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={headerVariants}
          >
            Pricing That Goes{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-violet-500">
              Perfect
            </span>{" "}
            With Your Budget
          </motion.h2>
          <motion.p className="text-2xl md:text-3xl font-medium text-muted-foreground" variants={headerVariants}>
            Just starting from <span className="text-primary font-bold">₹19</span>
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-4"
          variants={containerVariants}
        >
          {creditOptions.map((creditOption, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  },
                },
              }}
            >
              <PricingCard creditOption={creditOption} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div className="text-center mt-16" variants={headerVariants}>
          <motion.p className="text-lg text-muted-foreground mb-6" variants={headerVariants}>
            Need a custom plan? We've got you covered.
          </motion.p>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            variants={headerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales
          </motion.button>
        </motion.div> */}
      </div>
    </motion.section>
  )
}

export default Pricing
