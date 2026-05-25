"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Backend Systems",
    description:
      "Designing scalable APIs, authentication systems, database architectures, and production-grade backend workflows.",
  },
  {
    title: "Startup Engineering",
    description:
      "Building products with business logic, user psychology, scalability, and real-world deployment thinking.",
  },
  {
    title: "AI Integration",
    description:
      "Experimenting with AI-powered systems, intelligent automation, and next-generation digital experiences.",
  },
];

export default function About() {
  return (
    <section className="relative py-32 section-padding">

      {/* SECTION LABEL */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6 text-xs uppercase tracking-[0.35em] text-purple-400"
      >
        SYSTEM PROFILE
      </motion.p>

      {/* TOP GRID */}
      <div className="grid gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="
            text-5xl
            font-black
            leading-[0.95]
            tracking-[-0.04em]
            sm:text-6xl
          ">
            Founder-minded engineer building scalable digital products.
          </h2>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-slate-400"
        >

          <p>
            My journey started with C and C++ problem solving, evolved into Java ecosystem development, and eventually expanded into full-stack engineering, scalable backend systems, and immersive digital experiences.
          </p>

          <p>
            Beyond development, I actively think like a product builder — focusing on scalability, user experience, business logic, and long-term system architecture.
          </p>

          <p>
            I’m also a director at TryCompanioLab LLP, where I explore startup-oriented product engineering and real-world problem solving.
          </p>

        </motion.div>

      </div>

      {/* CAPABILITY CARDS */}
      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-purple-400/20
              hover:bg-white/[0.05]
            "
          >

            {/* Glow */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-br
              from-purple-500/0
              to-cyan-500/0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            " />

            <div className="relative z-10">

              <h3 className="text-2xl font-bold text-white">
                {card.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {card.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}