"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      {/* Ambient Glow */}
      <div className="
        absolute
        h-[420px]
        w-[420px]
        rounded-full
        bg-purple-500/10
        blur-[120px]
      " />

      {/* Glass Card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.04]
          p-4
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(139,92,246,0.12)]
        "
      >
        {/* Top Gradient Overlay */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-br
          from-purple-500/10
          via-transparent
          to-cyan-500/10
        " />

        {/* Image */}
        <div className="
          relative
          h-[380px]
          w-[300px]
          overflow-hidden
          rounded-[24px]
          sm:h-[460px]
          sm:w-[360px]
          xl:h-[520px]
          xl:w-[400px]
        ">
          <Image
            src="/images/profile.png"
            alt="Hardik Kedar"
            fill
            priority
            sizes="(max-width: 640px) 300px, (max-width: 1280px) 360px, 400px"
            className="object-cover"
          />
        </div>

        {/* Bottom Info */}
        <div className="relative z-10 mt-5 px-2 pb-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Hardik Kedar
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Full Stack Engineer · Founder Mindset
              </p>
            </div>

            {/* Status Dot */}
            <div className="flex items-center gap-2">
              <div className="
                h-2.5
                w-2.5
                rounded-full
                bg-emerald-400
                shadow-[0_0_20px_rgba(74,222,128,0.8)]
              " />
              <span className="text-xs text-slate-400">Available</span>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}