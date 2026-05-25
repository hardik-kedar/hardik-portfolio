"use client";

import { motion } from "framer-motion";
import ProfileCard from "../hero/profileCard";

const features = [
  {
    title: "Production Backend Architecture",
    description:
      "Designed scalable backend systems using Node.js, Express, TypeScript, MongoDB, JWT authentication, and role-based access control.",
  },
  {
    title: "Business-Oriented Engineering",
    description:
      "Integrated subscription systems, commission models, booking lifecycle management, and real-world platform logic.",
  },
  {
    title: "Scalable Product Thinking",
    description:
      "Focused on long-term scalability, modular APIs, pagination systems, dashboard analytics, and geo-based discovery architecture.",
  },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="relative py-32 section-padding">

      {/* Section Label */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6 text-xs uppercase tracking-[0.35em] text-cyan-400"
      >
        FEATURED SYSTEM
      </motion.p>

      <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">

        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-32 lg:h-fit">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              text-5xl
              font-black
              leading-[0.9]
              tracking-[-0.05em]
              sm:text-6xl
            "
          >
            Companio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              mt-8
              max-w-md
              text-lg
              leading-relaxed
              text-slate-400
            "
          >
            A production-oriented marketplace platform engineered with scalability, modular backend architecture, subscription systems, and real-world business workflows.
          </motion.p>

          {/* Tech Pills */}
          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "JWT",
              "Razorpay",
            ].map((tech) => (
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
                  backdrop-blur-xl
                "
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >

              <div className="
                mb-6
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-purple-500/20
                to-cyan-500/20
                text-lg
                font-bold
              ">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}