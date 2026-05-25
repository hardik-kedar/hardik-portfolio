"use client";

import { motion } from "framer-motion";

export default function AmbientLights() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[10%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          top-[30%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-10%]
          left-[30%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
        "
      />

    </div>
  );
}