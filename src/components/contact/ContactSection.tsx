"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Link,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Globe,
    href: "https://github.com/hardik-kedar",
  },

  {
    name: "LinkedIn",
    icon: Link,
    href: "https://www.linkedin.com/in/hardik-kedar-b236a02b8/",
  },

  {
    name: "Email",
    icon: Mail,
    href: "mailto:kedar2004@getMaxListeners.com",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 section-padding">

      {/* Ambient Glow */}
      <div className="
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-purple-500/10
        blur-[140px]
      " />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          mb-6
          text-xs
          uppercase
          tracking-[0.35em]
          text-cyan-400
        "
      >
        LET’S BUILD SOMETHING
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          max-w-5xl
          text-5xl
          font-black
          leading-[0.9]
          tracking-[-0.05em]
          sm:text-6xl
          lg:text-7xl
        "
      >
        Building scalable
        products, immersive
        experiences, and
        future-ready systems.
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          mt-8
          max-w-3xl
          text-xl
          leading-relaxed
          text-slate-400
        "
      >
        Open to freelance opportunities, engineering collaborations,
        startup-oriented projects, and impactful product development.
      </motion.p>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-emerald-400/20
          bg-emerald-400/10
          px-5
          py-3
          text-sm
          text-emerald-300
          backdrop-blur-xl
        "
      >

        <div className="
          h-2.5
          w-2.5
          rounded-full
          bg-emerald-400
          shadow-[0_0_20px_rgba(74,222,128,0.8)]
        " />

        Available for opportunities

      </motion.div>

      {/* Social Cards */}
      <div className="
        relative
        z-10
        mt-20
        grid
        gap-6
        md:grid-cols-3
      ">

        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
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
                delay: index * 0.12,
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

              <div className="relative z-10">

                <div className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                ">
                  <Icon size={24} />
                </div>

                <div className="
                  mt-10
                  flex
                  items-center
                  justify-between
                ">

                  <h3 className="
                    text-2xl
                    font-bold
                    text-white
                  ">
                    {social.name}
                  </h3>

                  <ArrowUpRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />

                </div>

              </div>

            </motion.a>
          );
        })}

      </div>

      {/* Footer */}
      <div className="
        relative
        z-10
        mt-24
        border-t
        border-white/10
        pt-10
      ">

        <div className="
          flex
          flex-col
          gap-6
          text-sm
          text-slate-500
          md:flex-row
          md:items-center
          md:justify-between
        ">

          <p>
            © 2026 Hardik Kedar. Engineered with precision.
          </p>

          <p>
            Full Stack Engineer · Founder Mindset · Product Builder
          </p>

        </div>

      </div>

    </section>
  );
}