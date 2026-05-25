"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.5,
  };

  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden
        h-6
        w-6
        rounded-full
        border
        border-cyan-400/50
        bg-cyan-400/10
        backdrop-blur-sm
        mix-blend-screen
        lg:block
      "
      style={{
        x,
        y,
      }}
    />
  );
}