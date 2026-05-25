"use client";

import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const timeline = [
  {
    year: "FOUNDATION",
    title: "Started with C & C++",
    description:
      "Built strong programming fundamentals through problem solving, arrays, strings, linked lists, and logical thinking.",
  },
  {
    year: "BACKEND SHIFT",
    title: "Transitioned into Java Ecosystem",
    description:
      "Learned Core Java, JDBC, Servlets, JSP, and enterprise-oriented backend development principles.",
  },
  {
    year: "SYSTEM THINKING",
    title: "Full Stack Product Engineering",
    description:
      "Moved toward scalable backend systems, premium UI/UX engineering, authentication architecture, APIs, and startup-focused development.",
  },
  {
    year: "FOUNDER MINDSET",
    title: "Building Beyond Projects",
    description:
      "Co-founded TryCompanioLab LLP, worked on freelance systems, and focused on creating production-oriented digital products with long-term scalability.",
  },
];

export default function AboutSection() {
  return (
    <section id ="about"className="relative py-32 section-padding">

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6 text-xs uppercase tracking-[0.35em] text-purple-400"
      >
        MY JOURNEY
      </motion.p>

      {/* Heading */}
<Reveal>
  <h2
    className="
      max-w-5xl
      text-5xl
      font-black
      leading-[0.9]
      tracking-[-0.05em]
      sm:text-6xl
    "
  >
    Engineering systems,
    products, and a
    founder-driven mindset.
  </h2>
</Reveal>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          mt-8
          max-w-3xl
          text-lg
          leading-relaxed
          text-slate-400
        "
      >
        My journey started with programming fundamentals and evolved into
        scalable backend systems, premium frontend experiences, and
        startup-oriented product engineering. I focus on building digital
        systems that are efficient, scalable, and designed with long-term
        thinking.
      </motion.p>

      {/* Timeline */}
      <div className="relative mt-24">

        {/* Vertical Line */}
        <div className="
          absolute
          left-4
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-purple-500/40
          via-cyan-500/20
          to-transparent
        " />

        <div className="space-y-16">

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative pl-16"
            >

              {/* Dot */}
              <div className="
                absolute
                left-0
                top-2
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-purple-400/30
                bg-[#0b1020]
                shadow-[0_0_30px_rgba(139,92,246,0.25)]
              ">

                <div className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-purple-400
                " />

              </div>

              {/* Card */}
              <div className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-purple-500/20
                hover:bg-white/[0.05]
              ">

                <p className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400
                ">
                  {item.year}
                </p>

                <h3 className="
                  mt-4
                  text-3xl
                  font-bold
                  text-white
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-4
                  text-lg
                  leading-relaxed
                  text-slate-400
                ">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}