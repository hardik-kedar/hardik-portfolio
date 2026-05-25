"use client";

import { motion } from "framer-motion";

export default function GradientOrb() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl"
      />
    </>
  );
}