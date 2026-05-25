"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-[#070B14]
          "
        >

          {/* Glow */}
          <div className="
            absolute
            h-[300px]
            w-[300px]
            rounded-full
            bg-purple-500/10
            blur-[120px]
          " />

          {/* Content */}
          <div className="relative text-center">

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                text-xs
                uppercase
                tracking-[0.5em]
                text-cyan-400
              "
            >
              INITIALIZING SYSTEM
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="
                mt-6
                text-5xl
                font-black
                tracking-[-0.05em]
                text-white
                sm:text-7xl
              "
            >
              HARDIK
            </motion.h1>

            {/* Loading Line */}
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "220px",
              }}
              transition={{
                duration: 1.6,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="
                mx-auto
                mt-10
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
              "
            />

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}