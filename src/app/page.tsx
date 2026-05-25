import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

import GridBackground from "../components/animations/GridBackground";
import GradientOrb from "../components/animations/GradientOrb";
import NoiseOverlay from "../components/animations/NoiseOverlay";
import PageReveal from "../components/animations/PageReveal";
import CustomCursor from "../components/animations/CustomCursor";
import Loader from "../components/animations/Loader";

import About from "../components/about/About";
import AboutSection from "../components/about/AboutSection";

import SkillsSection from "../components/skills/SkillsSection";

import ExperienceSection from "../components/experience/ExperienceSection";

import FeaturedProject from "../components/projects/FeaturedProject";

import ContactSection from "../components/contact/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Cinematic Loader */}
      <Loader />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Intro Reveal */}
      <PageReveal />

      {/* Background Layers */}
      <NoiseOverlay />

      <GridBackground />

      <GradientOrb />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About / Identity */}
      <AboutSection />

      <About />

      {/* Skills */}
      <SkillsSection />

      {/* Experience */}
      <ExperienceSection />

      {/* Featured Work */}
      <FeaturedProject />

      {/* Contact */}
      <ContactSection />

    </main>
  );
}