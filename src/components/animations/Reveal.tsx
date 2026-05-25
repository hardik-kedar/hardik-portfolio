"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}