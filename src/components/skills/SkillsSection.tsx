"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Systems",
    description:
      "Scalable APIs, authentication systems, database architecture, modular backend engineering, and production workflows.",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST APIs",
      "TypeScript",
    ],
  },

  {
    title: "Frontend Engineering",
    description:
      "Premium UI/UX systems, responsive architectures, modern frontend tooling, animations, and immersive interactions.",
    stack: [
      "React",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "GSAP",
      "Responsive Design",
    ],
  },

  {
    title: "Java Ecosystem",
    description:
      "Strong backend foundation through Java technologies and enterprise-oriented development concepts.",
    stack: [
      "Core Java",
      "JDBC",
      "Servlets",
      "JSP",
      "Spring Core",
    ],
  },

  {
    title: "System Thinking",
    description:
      "Startup-oriented product thinking focused on scalability, performance, architecture, and long-term engineering decisions.",
    stack: [
      "Architecture",
      "Scalability",
      "Product Logic",
      "Security",
      "Optimization",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills"className="relative py-32 section-padding">

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6 text-xs uppercase tracking-[0.35em] text-cyan-400"
      >
        ENGINEERING CAPABILITIES
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          max-w-5xl
          text-5xl
          font-black
          leading-[0.9]
          tracking-[-0.05em]
          sm:text-6xl
        "
      >
        Building scalable
        digital systems with
        modern engineering.
      </motion.h2>

      {/* Grid */}
      <div className="mt-20 grid gap-6 md:grid-cols-2">

        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-cyan-400/20
              hover:bg-white/[0.05]
            "
          >

            {/* Glow */}
            <div className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-gradient-to-br
              from-cyan-500/5
              via-transparent
              to-purple-500/5
            " />

            {/* Number */}
            <div className="
              relative
              z-10
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              text-lg
              font-bold
            ">
              0{index + 1}
            </div>

            {/* Title */}
            <h3 className="
              relative
              z-10
              mt-8
              text-3xl
              font-bold
              text-white
            ">
              {category.title}
            </h3>

            {/* Description */}
            <p className="
              relative
              z-10
              mt-5
              text-lg
              leading-relaxed
              text-slate-400
            ">
              {category.description}
            </p>

            {/* Stack */}
            <div className="
              relative
              z-10
              mt-8
              flex
              flex-wrap
              gap-3
            ">

              {category.stack.map((tech) => (
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

          </motion.div>
        ))}

      </div>

    </section>
  );
}