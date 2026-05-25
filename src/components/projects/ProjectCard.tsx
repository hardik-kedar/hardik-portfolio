"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  stack,
}: ProjectCardProps) {

  return (
    <section id="projects">

    
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >

      {/* Image */}
      <div className="relative h-[320px] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#070B14]
          via-[#070B14]/30
          to-transparent
        " />

      </div>

      {/* Content */}
      <div className="relative p-8">

        {/* Top */}
        <div className="
          flex
          items-start
          justify-between
          gap-6
        ">

          <div>

            <h3 className="
              text-3xl
              font-black
              tracking-tight
              text-white
            ">
              {title}
            </h3>

            <p className="
              mt-4
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-400
            ">
              {description}
            </p>

          </div>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
            "
          >

            <ArrowUpRight />

          </motion.div>

        </div>

        {/* Stack */}
        <div className="
          mt-8
          flex
          flex-wrap
          gap-3
        ">

          {stack.map((tech) => (
            <div
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-sm
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:text-white
              "
            >
              {tech}
            </div>
          ))}

        </div>

      </div>

      {/* Glow */}
      <div className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-gradient-to-br
        from-purple-500/5
        via-transparent
        to-cyan-500/5
      " />

    </motion.div>
    </section>
  );
  
}