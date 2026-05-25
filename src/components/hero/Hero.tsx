// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import AmbientLights from "../animations/AmbientLights";
// import RevealText from "../animations/RevealText";
// import ProfileCard from "../hero/profileCard";
// import Magnetic from "../animations/Magnetic";



// export default function Hero() {
//   return (
//     <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-32 pb-16 section-padding lg:flex-row lg:items-center lg:justify-between">
// <AmbientLights />
//       {/* LEFT SIDE */}
//       <div className="relative z-10 w-full flex-1">

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-6 text-xs uppercase tracking-[0.35em] text-purple-400 sm:text-sm"
//         >
//           Full Stack Engineer • Product Builder
//         </motion.p>

//         {/* RIGHT SIDE */}
// <div className="relative hidden flex-1 items-center justify-center xl:flex">
//   <ProfileCard />
// </div>

//         {/* Heading */}
// <RevealText
//   text="Engineering scalable systems for modern digital experiences."
//   className="
//     max-w-4xl
//     text-4xl
//     font-black
//     leading-[0.9]
//     tracking-[-0.05em]
//     sm:text-5xl
//     md:text-6xl
//     lg:text-[5.5rem]
//   "
// />
//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="
//             mt-8
//             max-w-xl
//             text-base
//             leading-relaxed
//             text-slate-400
//             sm:text-lg
//           "
//         >
//           Full Stack Developer focused on scalable backend systems,
//           premium UI/UX, AI-powered applications, startup engineering,
//           and immersive digital experiences.
//         </motion.p>

//         {/* Buttons */}
// <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1.2 }}
//   className="mt-10 flex flex-wrap items-center gap-4"
// >

//   <Magnetic>

//     <button className="group flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]">

//       View Projects

//       <ArrowRight
//         size={18}
//         className="transition-transform duration-300 group-hover:translate-x-1"
//       />

//     </button>

//   </Magnetic>

//   <Magnetic>

//     <button className="glass rounded-2xl px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10">

//       Contact Me

//     </button>

//   </Magnetic>

// </motion.div>

//       </div>




//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import AmbientLights from "../animations/AmbientLights";
import RevealText from "../animations/RevealText";
import ProfileCard from "../hero/profileCard";
import Magnetic from "../animations/Magnetic";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        flex-col
        overflow-hidden
        pt-32
        pb-16
        section-padding
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-16
      "
    >
      <AmbientLights />

      {/* LEFT SIDE */}
      <div className="relative z-10 w-full flex-1">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-purple-400 sm:text-sm"
        >
          Full Stack Engineer • Product Builder
        </motion.p>

        {/* Heading */}
        <RevealText
          text="Engineering scalable systems for modern digital experiences."
          className="
            max-w-4xl
            text-4xl
            font-black
            leading-[0.9]
            tracking-[-0.05em]
            sm:text-5xl
            md:text-6xl
            lg:text-[5.5rem]
          "
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            mt-8
            max-w-xl
            text-base
            leading-relaxed
            text-slate-400
            sm:text-lg
          "
        >
          Full Stack Developer focused on scalable backend systems,
          premium UI/UX, AI-powered applications, startup engineering,
          and immersive digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-6
                py-3
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]
              "
            >
              View Projects

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </Magnetic>

          <Magnetic>
            <button
              className="
                glass
                rounded-2xl
                px-6
                py-3
                font-medium
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/10
              "
            >
              Contact Me
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          relative
          mt-16
          flex
          w-full
          flex-1
          justify-center
          lg:mt-0
          lg:justify-end
        "
      >
        <ProfileCard />
      </div>
    </section>
  );
}