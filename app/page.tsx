import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { AboutUs, CompletedProjects, FAQSection, Management, Services, Testimonials, WhyChooseUs } from "@/components/landing/Sections";
import { StealthChatWidget } from "@/components/chat/StealthChatWidget";
import { getProjectsForLanding } from "@/lib/site-data";

export default async function HomePage() {
  const [projects] = await Promise.all([getProjectsForLanding()]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Management />
      <Services />
      <CompletedProjects projects={projects} />
      <FAQSection />
      <Testimonials />
      <Footer />
      <StealthChatWidget />
    </main>
  );
}
