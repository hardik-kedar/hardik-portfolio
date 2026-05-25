"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Co-Founder & Director",
    company: "TryCompanioLab LLP",
    period: "2025 — Present",
    description:
      "Co-founded and helped architect a scalable digital product ecosystem focused on marketplace systems, backend scalability, and startup-oriented engineering workflows.",
    points: [
      "Product architecture & backend systems",
      "Business logic engineering",
      "Platform scalability planning",
      "Founder-driven execution mindset",
    ],
  },

  {
    role: "Freelance Full Stack Developer",
    company: "Independent Projects",
    period: "2024 — Present",
    description:
      "Worked with clients to build production-ready digital solutions with modern frontend systems, scalable backend architecture, and responsive UI/UX.",
    points: [
      "Custom web applications",
      "Modern responsive interfaces",
      "Backend API development",
      "Real-world deployment workflows",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-32 section-padding">

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6 text-xs uppercase tracking-[0.35em] text-purple-400"
      >
        EXPERIENCE & LEADERSHIP
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
        Engineering products,
        building systems,
        and thinking like a founder.
      </motion.h2>

      {/* Cards */}
      <div className="mt-20 space-y-8">

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
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
              delay: index * 0.15,
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
              hover:border-purple-500/20
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
              from-purple-500/5
              via-transparent
              to-cyan-500/5
            " />

            <div className="
              relative
              z-10
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-start
              lg:justify-between
            ">

              {/* Left */}
              <div className="max-w-2xl">

                <p className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400
                ">
                  {exp.period}
                </p>

                <h3 className="
                  mt-4
                  text-3xl
                  font-bold
                  text-white
                ">
                  {exp.role}
                </h3>

                <p className="
                  mt-2
                  text-lg
                  text-slate-300
                ">
                  {exp.company}
                </p>

                <p className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-slate-400
                ">
                  {exp.description}
                </p>

              </div>

              {/* Right */}
              <div className="
                grid
                gap-3
                sm:grid-cols-2
              ">

                {exp.points.map((point) => (
                  <div
                    key={point}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-4
                      text-sm
                      text-slate-300
                    "
                  >
                    {point}
                  </div>
                ))}

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}