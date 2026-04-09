import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { CompletedProjects, Management, MissionVision, Services, Team, Testimonials } from "@/components/landing/Sections";
import { StealthChatWidget } from "@/components/chat/StealthChatWidget";
import { getProjectsForLanding, getTeamForLanding } from "@/lib/site-data";

export default async function HomePage() {
  const [projects, team] = await Promise.all([getProjectsForLanding(), getTeamForLanding()]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionVision />
      <Management />
      <Services />
      <CompletedProjects projects={projects} />
      <Team team={team} />
      <Testimonials />
      <Footer />
      <StealthChatWidget />
    </main>
  );
}
