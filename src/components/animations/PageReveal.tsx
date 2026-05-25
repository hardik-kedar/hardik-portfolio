"use client";

import { motion } from "framer-motion";

export default function PageReveal() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] bg-[#050816]"
    />
  );
}