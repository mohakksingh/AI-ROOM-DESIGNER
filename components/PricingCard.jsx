"use client";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import Link from "next/link";

function PricingCard({ creditOption, index }) {
  const isPopular = creditOption.popular || creditOption.badge === "Popular";
  const isBestValue = creditOption.badge === "Best Value";
  const isPro = creditOption.badge === "Pro Plan";

  const getBadgeIcon = () => {
    if (isPro) return <Zap className="w-3 h-3" />;
    if (isBestValue) return <Star className="w-3 h-3" />;
    return null;
  };

  const getBadgeColor = () => {
    if (isPro) return "bg-gradient-to-r from-purple-500 to-pink-500";
    if (isBestValue) return "bg-gradient-to-r from-amber-500 to-orange-500";
    if (isPopular) return "bg-gradient-to-r from-blue-500 to-cyan-500";
    return "bg-gradient-to-r from-gray-500 to-gray-600";
  };

  const getCardStyle = () => {
    if (isPopular) {
      return "border-2 border-primary shadow-xl shadow-primary/20 scale-105";
    }
    if (isBestValue) {
      return "border-2 border-amber-500 shadow-xl shadow-amber-500/20";
    }
    if (isPro) {
      return "border-2 border-purple-500 shadow-xl shadow-purple-500/20";
    }
    return "border border-border";
  };

  return (
    <motion.div
      className="relative h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        </motion.div>
      )}

      <motion.div
        className={`relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col ${getCardStyle()} hover:shadow-2xl transition-all duration-300`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-muted/30 rounded-2xl" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-6">
            <motion.h3
              className="text-xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {creditOption.tagline}
            </motion.h3>

            {/* Badge */}
            {creditOption.badge && (
              <motion.div
                className="inline-flex items-center gap-1 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <span
                  className={`${getBadgeColor()} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}
                >
                  {getBadgeIcon()}
                  {creditOption.badge}
                </span>
              </motion.div>
            )}

            {/* Price */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold">
                  ₹{creditOption.amount}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">
                For {creditOption.credits} Credits
              </p>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            className="flex-grow mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed text-center">
              {creditOption.description}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="mb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-500" />
              <span>{creditOption.credits} AI generations</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-500" />
              <span>High-quality outputs</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-500" />
              <span>24/7 support</span>
            </div>
            {(isPro || isBestValue) && (
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Priority processing</span>
              </div>
            )}
          </motion.div>

          {/* CTA Button */}
          <Link href={"/dashboard/buy-credits"} > 
            <motion.button
              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                isPopular || isBestValue || isPro
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </Link>

          {/* Value Indicator */}
          <motion.div
            className="text-center mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
          >
            <span className="text-xs text-muted-foreground">
              ₹{(creditOption.amount / creditOption.credits).toFixed(1)} per
              credit
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PricingCard;
