"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="section-padding">

        {/* NAVBAR CONTAINER */}
        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            rounded-[24px]
            border
            border-white/10
            bg-[#0B1020]/60
            px-5
            py-4
            shadow-[0_0_30px_rgba(255,255,255,0.03)]
            backdrop-blur-2xl
          "
        >

          {/* LOGO */}
          <Link
            href="/"
            className="
              text-xl
              font-black
              tracking-tight
              text-white
              transition-opacity
              duration-300
              hover:opacity-80
            "
          >
            Hardik
            <span className="gradient-text">.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-10 md:flex">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:text-white
                "
              >

                {/* Hover Line */}
                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

                <span className="relative z-10">
                  {item.name}
                </span>

              </Link>
            ))}

          </nav>

          {/* DESKTOP RESUME BUTTON */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              rounded-2xl
              border
              border-white/10
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
              md:block
            "
          >
            Resume
          </a>

          {/* MOBILE MENU */}
          <Sheet>

            <SheetTrigger asChild>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-2.5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/[0.08]
                  md:hidden
                "
              >
                <Menu size={22} />
              </button>

            </SheetTrigger>

            {/* MOBILE SHEET */}
            <SheetContent
              side="right"
              className="
                border-white/10
                bg-[#050816]/95
                text-white
                backdrop-blur-2xl
              "
            >

              <div className="mt-20 flex flex-col gap-8">

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                      text-3xl
                      font-bold
                      tracking-tight
                      text-slate-300
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >
                    {item.name}
                  </Link>
                ))}

                {/* MOBILE RESUME BUTTON */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    rounded-2xl
                    bg-white
                    px-6
                    py-4
                    text-center
                    font-semibold
                    text-black
                  "
                >
                  Resume
                </a>

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>
    </motion.header>
  );
}