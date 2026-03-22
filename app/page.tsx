import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import JourneyMap from "@/components/JourneyMap";
import ExperienceSection from "@/components/ExperienceSection";
import StatsBar from "@/components/StatsBar";
import ProjectsSection from "@/components/ProjectsSection";
import WritingSection from "@/components/WritingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <JourneyMap />
      <ExperienceSection />
      <StatsBar />
      <ProjectsSection />
      <WritingSection />
    </>
  );
}
