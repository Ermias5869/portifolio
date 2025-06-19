import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import Skills from "@/components/Skills";
import { profile } from "@/data/profile";

export default function Home() {
  const { workExperience, skills, projects } = profile;
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#512c64] text-white">
      <AboutSection />
      <Skills skills={skills} />
      <PortfolioSection projects={projects} />
      <ExperienceSection workExperience={workExperience} />
    </div>
  );
}
