import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const [openIndex,setOpenIndex]=useState(null);

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "You get 3 completely free room redesigns without needing to sign up or provide a credit card. Simply upload your room photo, choose your preferred style, and get instant AI-generated designs. After your free uses, you can purchase credit packages to continue using the service.",
    },
    {
      question: "What types of rooms can I redesign?",
      answer:
        "Our AI can redesign any indoor space including living rooms, bedrooms, kitchens, bathrooms, offices, dining rooms, and more. The AI works best with clear, well-lit photos that show the entire room from a good angle.",
    },
    {
      question: "How long does it take to generate a design?",
      answer:
        "Our AI typically generates your new room design in 30-60 seconds. The exact time may vary depending on the complexity of your room and current server load, but most designs are ready in under a minute.",
    },
    {
      question: "What image formats do you accept?",
      answer:
        "We accept JPG, PNG, and WebP image formats. For best results, upload high-resolution images (at least 1024x768 pixels) that are well-lit and show the entire room clearly. Avoid blurry or very dark images.",
    },
    {
      question: "Can I choose different design styles?",
      answer:
        "Yes! We offer various design styles including Modern, Contemporary, Traditional, Scandinavian, Industrial, Bohemian, Minimalist, and more. You can experiment with different styles using your free credits to see which one you prefer.",
    },
    {
      question: "What happens after I use my 3 free designs?",
      answer:
        "After using your free credits, you can purchase additional credits through our flexible pricing plans. We offer packages starting from ₹19 for 5 credits, with better value on larger packages. Each credit gives you one room redesign.",
    },
    {
      question: "Can I download and use the generated images commercially?",
      answer:
        "Yes, all generated designs are yours to use. You can download high-resolution versions and use them for personal projects, client presentations, or commercial purposes. There are no additional licensing fees or restrictions.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "If you're not happy with a generated design, you can try different styles or angles with your remaining credits. For paid credits, we offer a satisfaction guarantee - contact our support team if you encounter any issues with your designs.",
    },
    {
      question: "Do you store my uploaded images?",
      answer:
        "We temporarily store your images only for processing purposes and delete them within 24 hours. We take privacy seriously and never share your images with third parties. You can also request immediate deletion of your images by contacting support.",
    },
    {
      question: "Can I use this on mobile devices?",
      answer:
        "Our platform is fully responsive and works great on smartphones and tablets. You can upload photos directly from your phone's camera or gallery and get instant results on any device.",
    },
  ];

  const toggleFaq=(index)=>{
    setOpenIndex(openIndex=== index?null:index);
  }
  
  return (
    <div className="px-20 flex items-center justify-center flex-col gap-4">
      <h2 className="text-6xl font-bold ">Frequently Asked Questions</h2>
      <motion.div className="space-y-4 w-full ">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 border-violet-200 rounded-lg p-4 cursor-pointer w-full" onClick={()=>toggleFaq(index)}>
            <h4 className="text-lg font-bold ">{faq.question}</h4>
            <AnimatePresence>
              {openIndex===index && (
                <motion.p
                key={`faq-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Faq;
