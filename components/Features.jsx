"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

function Features() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const fadeInLeft = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const arrowAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -45,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-violet-500 mb-4"
            variants={fadeInUp}
          >
            What Do We Do?
          </motion.h2>
          <motion.p className="text-muted-foreground text-lg max-w-2xl mx-auto" variants={fadeInUp}>
            Transform your creative vision into stunning reality with our innovative process
          </motion.p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16"
          variants={containerVariants}
        >
          {/* Before Image */}
          <motion.div
            className="group relative"
            variants={fadeInLeft}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
              animate={{
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className="relative bg-background rounded-xl p-2">
              <Image
                src="/feature1.jpg"
                alt="Original idea or concept"
                width={320}
                height={240}
                className="rounded-lg object-cover w-full h-60 lg:w-80 lg:h-60"
              />
              <motion.div
                className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                Your Idea
              </motion.div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div className="flex items-center justify-center" variants={arrowAnimation}>
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative bg-primary/10 backdrop-blur-sm rounded-full p-4 lg:p-6 border border-primary/20"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-8 h-8 lg:w-12 lg:h-12 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* After Image */}
          <motion.div
            className="group relative"
            variants={fadeInRight}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
              animate={{
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <div className="relative bg-background rounded-xl p-2">
              <Image
                src="/aigenerated.png"
                alt="AI-generated result"
                width={320}
                height={240}
                className="rounded-lg object-cover w-full h-60 lg:w-80 lg:h-60"
              />
              <motion.div
                className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                AI Enhanced
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div className="text-center" variants={fadeInUp}>
          <motion.h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight" variants={fadeInUp}>
            We Turn Your{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-violet-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Ideas
            </motion.span>{" "}
            into{" "}
            <motion.span
              className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-violet-500"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Reality
            </motion.span>
          </motion.h3>
          <motion.p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
            Our cutting-edge AI technology transforms your creative concepts into polished, professional results that
            exceed your expectations.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: "Fast Processing",
              description: "Get results in minutes, not hours",
            },
            {
              title: "High Quality",
              description: "Professional-grade output every time",
            },
            {
              title: "Easy to Use",
              description: "Simple interface, powerful results",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              custom={index}
            >
              <motion.div
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <ArrowRight className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.h4 className="font-semibold mb-2" variants={fadeInUp}>
                {feature.title}
              </motion.h4>
              <motion.p className="text-sm text-muted-foreground" variants={fadeInUp}>
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Features
