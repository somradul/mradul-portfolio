import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ExperienceSection from "@/components/ExperienceSection";
import StatsBar from "@/components/StatsBar";
import WritingSection from "@/components/WritingSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ExperienceSection />
      <StatsBar />
      <ProjectsSection />
      <WritingSection />
    </>
  );
}
