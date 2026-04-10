"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Linkedin, Star, Target, Rocket, Quote } from "lucide-react";
import type { ProjectCard, TeamCard } from "@/lib/site-data";

// --- Types ---
type TeamProps = {
  team: TeamCard[];
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
};

export function MissionVision() {
  return (
    <section className="section-shell grid gap-8 pb-10 md:grid-cols-2 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-neonBlue/5 blur-[120px] pointer-events-none" />
  
      <motion.article 
        {...fadeIn} 
        className="group relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 backdrop-blur-2xl transition-all duration-500 hover:border-neonBlue/40 hover:shadow-[0_0_50px_-12px_rgba(0,243,255,0.3)]"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-neonBlue/10 flex items-center justify-center border border-neonBlue/20">
            <Target className="text-neonBlue" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Our <span className="text-neonBlue">Mission</span></h2>
        </div>
        
        <p className="text-lg leading-relaxed text-slate-300">
          Our mission is to empower enterprises with <span className="text-white font-semibold">Resilient AI Systems</span> that eliminate repetitive manual tasks, allowing your team to focus on high-impact growth. We deliver automation with a focus on <span className="text-neonBlue font-bold">Measurable ROI</span> and high-trust engineering.
        </p>
        
        <div className="mt-8 flex items-center gap-2 text-sm text-neonBlue font-medium">
          <div className="h-1 w-12 bg-neonBlue/30 rounded-full" />
          Scaling your success through intelligence.
        </div>
      </motion.article>
  
      <motion.article 
        {...fadeIn} 
        className="group relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
            <Rocket className="text-purple-400" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Our <span className="text-purple-400">Vision</span></h2>
        </div>
  
        <p className="text-lg leading-relaxed text-slate-300">
          We envision a global digital ecosystem where every business operates on <span className="text-white font-semibold">Autonomous Intelligence</span>. Our goal is to provide secure, adaptive technology that manages your operations <span className="text-purple-400 font-bold">24/7</span>, ensuring seamless continuity and innovation.
        </p>
  
        <div className="mt-8 flex items-center gap-2 text-sm text-purple-400 font-medium">
          <div className="h-1 w-12 bg-purple-500/30 rounded-full" />
          Building the future of digital workforce.
        </div>
      </motion.article>
    </section>
  );
}

export function Management() {
  const leaders = [
    {
      role: "Director (UAE)",
      name: "Tanvir Hussain Chatcha",
      title: "AI Automation Strategist",
      message: "Dedicated to scaling UAE businesses through secure, autonomous AI ecosystems. My mission is to drive 10x operational efficiency and maximize ROI for our partners by deploying high-trust automation that works 24/7.",
      image: "/images/tanvir.jpeg",
      imagePosition: "center 20%"
    },
    {
      role: "Director (Pakistan)",
      name: "Ghulam Abbas Bhatti",
      title: "Principal AI Architect & Full Stack Expert",
      message: "Building the future of automation in Pakistan by transforming complex manual workflows into seamless AI-driven growth engines. We don't just write code; we build intelligent systems that increase your sales and slash overhead costs.",
      image: "/images/abbass.png",
      imagePosition: "center 25%"
    },
    {
      role: "CEO & Growth Lead",
      name: "Professional Executive",
      title: "Strategic Innovation & Customer Success",
      message: "Ensuring customer satisfaction is at the heart of SM Technology. We specialize in modernizing business flows with ethical AI, making sure every automation we build results in measurable success and sustainable international growth.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      imagePosition: "center 15%"
    }
  ];

  return (
    <section id="management" className="section-shell py-10 bg-slateDeep/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Our <span className="text-neonBlue">Leadership</span> Team
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Expert minds dedicated to building the next generation of AI agents that empower your business to scale globally.
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {leaders.map((leader) => (
          <motion.div 
            key={leader.name} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 hover:border-neonBlue/40 transition-all duration-500 group"
          >
            <div className="aspect-square w-full overflow-hidden rounded-[1.5rem] border border-white/20 bg-slate-900 shadow-2xl relative">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                style={{ objectPosition: leader.imagePosition }}
              />
            </div>

            <div className="mt-6 flex flex-col flex-grow">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neonBlue font-bold">{leader.role}</span>
              <h3 className="mt-1 text-xl font-bold text-white">{leader.name}</h3>
              <p className="text-xs font-medium text-slate-400 italic mb-4">{leader.title}</p>
              <div className="h-px w-full bg-gradient-to-r from-neonBlue/50 to-transparent mb-4" />
              <p className="text-[14px] leading-relaxed text-slate-300 italic">
                &ldquo;{leader.message}&rdquo;
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  const serviceData = [
    {
      title: "Autonomous Reasoning Agents",
      desc: "AI agents that think and execute complex business logic independently to save your time.",
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
      color: "group-hover:border-cyan-500/50",
      glow: "bg-cyan-500/10"
    },
    {
      title: "Workflow Automation",
      desc: "Connecting tools like n8n and Make for 24/7 automated systems that boost efficiency.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png",
      color: "group-hover:border-amber-500/50",
      glow: "bg-amber-500/10"
    },
    {
      title: "Enterprise RAG Systems",
      desc: "Private AI brains trained on your company documents for secure and instant knowledge retrieval.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Locked%20with%20Key.png",
      color: "group-hover:border-purple-500/50",
      glow: "bg-purple-500/10"
    },
    {
      title: "Omni-Channel AI Bots",
      desc: "WhatsApp and Social Media bots that engage customers and close sales automatically.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968841.png",
      color: "group-hover:border-green-500/50",
      glow: "bg-green-500/10"
    },
    {
      title: "Custom AI Dashboards",
      desc: "Full-stack portals to monitor your AI agents and visualize business growth metrics.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bar%20Chart.png",
      color: "group-hover:border-rose-500/50",
      glow: "bg-rose-500/10"
    },
    {
      title: "AI Voice Automation",
      desc: "Human-like voice agents for customer support and automated calling to scale outreach.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Microphone.png",
      color: "group-hover:border-indigo-500/50",
      glow: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="services" className="section-shell py-10 relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Our <span className="text-neonBlue">Core</span> Expertise
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto italic">
          &ldquo;We build intelligent systems that increase your sales and streamline your business operations.&rdquo;
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 ${service.color} hover:-translate-y-2`}
          >
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${service.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <div className="relative z-10">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/50 border border-white/10 group-hover:scale-110 transition-transform duration-500 p-2 shadow-inner">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-neonBlue transition-colors">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400 group-hover:text-slate-200">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CompletedProjects({ projects }: { projects: ProjectCard[] }) {
  const completedData = [
    {
      id: "fb-poster",
      title: "AI Content Auto-Poster",
      description: "Automated social media marketing system that generates and posts targeted ads to Facebook and LinkedIn using AI.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Postbox.png",
      testimonial: "This automation has cut our marketing time by 70%. Simply brilliant!",
      role: "CEO, TechLaunch Solutions"
    },
    {
      id: "linkedin-hunter",
      title: "LinkedIn Lead Hunter",
      description: "Smart AI agent designed to scrape and identify high-potential B2B leads and professional connections.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Magnifying%20Glass%20Tilted%20Right.png",
      testimonial: "The accuracy of lead generation is unmatched. A game-changer for our sales team.",
      role: "Manager Operations, Global Outreach Group"
    },
    {
      id: "ai-synopsis",
      title: "AI Synopsis Tool",
      description: "Multi-language rewrite and translation system powered by OpenAI for professional content creators.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Books.png",
      testimonial: "Effortless translation and high-quality rewrites. Highly recommended!",
      role: "Content Lead, MediaStream Ltd"
    },
    {
      id: "uswa-gpt",
      title: "Educational AI Agent",
      description: "Custom RAG-based AI assistant built for USWA College to handle student queries and staff support.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Graduation%20Cap.png",
      testimonial: "Transformed how our students interact with college resources. Exceptionally smart.",
      role: "Principal, Educational Excellence Hub"
    },
    {
      id: "bukhari-estore",
      title: "Bukhari E-Store",
      description: "Full-stack E-commerce platform for premium footwear and apparel with secure AI-driven dashboard.",
      image: "https://cdn-icons-png.flaticon.com/512/3659/3659914.png", 
      testimonial: "The interface is perfect for our fashion brand. User experience and security are top-notch.",
      role: "Owner, Bukhari Retail Group"
    },
    {
      id: "ali-sale-agent",
      title: "AI Sales Closing Agent",
      description: "Automated reasoning agent that engages customers and handles sales objections in real-time.",
      image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Money%20with%20Wings.png",
      testimonial: "It's like having a 24/7 salesperson who never gets tired. Remarkable ROI.",
      role: "Director Marketing, Innovate Pro"
    }
  ];

  console.log("Projects data:", projects);

  return (
    <section id="projects" className="section-shell py-10 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Completed <span className="text-neonBlue">Projects</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto italic">
          Alhamdulillah, we have successfully deployed **more than 100+ projects**. Here are a few featured samples of our work.
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {completedData.map((project) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-neonBlue/30 hover:bg-white/[0.07] hover:-translate-y-2"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/50 border border-white/10 group-hover:scale-110 transition-transform duration-500 p-2 shadow-inner">
              <Image 
                src={project.image} 
                alt={project.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-neonBlue transition-colors italic">
              {project.title}
            </h3>
            
            <p className="mt-3 text-[14px] leading-relaxed text-slate-400 mb-6">
              {project.description}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-xs italic text-slate-300 mb-2">
                &ldquo;{project.testimonial}&rdquo;
              </p>
              <span className="text-[11px] font-bold uppercase tracking-widest text-neonBlue/80">
                — {project.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Team({ team }: TeamProps) {
  const placeholders = Array.from({ length: 6 }, (_, i) => ({
    id: `dev-${i + 1}`,
    name: `Developer ${i + 1}`,
    role: "Developer",
    bio: "Portfolio card placeholder",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    portfolioUrl: "https://example.com"
  }));
  
  // Added optional chaining for safety
  const data = [...(team || []), ...placeholders].slice(0, 6);

  return (
    <section id="team" className="section-shell py-14">
      <h2 className="text-3xl font-semibold text-white">Our Team</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((dev) => (
          <div key={dev.id} className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <div className="h-44 rounded-xl border border-dashed border-white/20 bg-slate-900/70" />
            <h3 className="mt-4 font-medium text-white">{dev.name}</h3>
            <p className="text-xs text-neonBlue">{dev.role}</p>
            <p className="mt-1 text-sm text-slate-300">{dev.bio}</p>
            <div className="mt-3 flex items-center gap-2 text-slate-300">
              {dev.linkedinUrl && (
                <a href={dev.linkedinUrl} target="_blank" rel="noreferrer">
                  <Linkedin size={16} />
                </a>
              )}
              {dev.githubUrl && (
                <a href={dev.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={16} />
                </a>
              )}
              {dev.portfolioUrl && (
                <a href={dev.portfolioUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const testimonialsData = [
    { text: "SM Technology shipped our AI funnel in record time. Their automation logic is flawless.", role: "COO, Retail Group", rating: 5, date: "3 month ago" },
    { text: "The LinkedIn Hunter tool they built for us has completely transformed our B2B lead generation process.", role: "Manager Operations, Global Outreach", rating: 5, date: "1 month ago" },
    { text: "Exceptional work on our School ERP. The AI integration for student queries is saving us 20+ hours weekly.", role: "Principal, Uswa Group of Colleges", rating: 5, date: "3 days ago" },
    { text: "Professional, fast, and very technical. They don't just code; they build business solutions.", role: "CEO, TechLaunch Solutions", rating: 5, date: "Just now" },
    { text: "Our WhatsApp sales bot is closing deals even while we sleep. SM Tech is the best in the business.", role: "Director Marketing, Innovate Pro", rating: 5, date: "2 month ago" },
    { text: "Highly secure and scalable E-commerce architecture. Their dashboard is world-class.", role: "Owner, Bukhari Retail Group", rating: 5, date: "2 weeks ago" }
  ];

  return (
    <section id="testimonials" className="section-shell py-10 bg-transparent">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Client <span className="text-neonBlue">Feedback</span>
        </h2>
        <p className="mt-4 text-slate-400 italic">&ldquo;Real stories from businesses we&apos;ve transformed.&rdquo;</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300 group"
          >
            <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-neonBlue/20 transition-colors" size={40} />
            <div className="flex gap-1 mb-4 text-yellow-500">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-[15px] leading-relaxed text-slate-200 italic mb-6">&ldquo;{t.text}&rdquo;</p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neonBlue">{t.role}</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase">{t.date}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neonBlue/20 to-purple-500/20 border border-white/10" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}