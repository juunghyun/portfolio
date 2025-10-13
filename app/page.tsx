import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { GithubSection } from "@/components/github-section"
import { ProjectsSection } from "@/components/projects-section"
import { CareerSection } from "@/components/career-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GithubSection />
      <ProjectsSection />
      <CareerSection />
      <Footer />
    </main>
  )
}
