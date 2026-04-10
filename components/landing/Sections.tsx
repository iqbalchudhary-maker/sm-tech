"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin, Star, Target, Rocket, Mail, Phone, ChevronDown, Shield } from "lucide-react";
import type { ProjectCard } from "@/lib/site-data";
import { managementTeam, faqs, professionalTestimonials } from "@/lib/data";
import { useState } from "react";

// --- Types ---

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
};

export function AboutUs() {
  return (
    <section id="about" className="section-shell py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neonBlue/5 blur-[120px] pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            About <span className="text-neonBlue">SM Technology</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              SM Technology is a premier <span className="text-white font-bold">AI Automation Company</span> and <span className="text-white font-bold">Web Development</span> firm dedicated to driving <span className="text-neonBlue font-bold">Digital Transformation</span> for businesses globally. We specialize in architecting <span className="text-white font-bold">Enterprise AI Solutions</span> and <span className="text-white font-bold">Custom SaaS</span> products that redefine operational efficiency.
            </p>
            <p>
              Our journey is rooted in professional excellence and legal compliance. <span className="text-neonBlue font-semibold italic">Registration No. 2747, Registered on 3 December 2019, according to Partnership Act 1932.</span> This foundation allows us to provide high-trust engineering and reliable automation services to our international clientele.
            </p>
            <p>
              Whether it&apos;s building autonomous reasoning agents or scaling omnichannel AI bots, our mission is to empower enterprises with resilient technology that eliminates repetitive manual tasks, allowing human talent to focus on high-impact growth.
            </p>
          </div>
        </motion.div>

        <motion.div 
          {...fadeIn}
          className="relative aspect-square rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl overflow-hidden p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/20 to-transparent" />
          <div className="relative h-full flex flex-col justify-center items-center text-center space-y-8">
            <div className="h-24 w-24 rounded-3xl bg-neonBlue/10 flex items-center justify-center border border-neonBlue/20">
              <Shield className="text-neonBlue w-12 h-12" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Registered & Trusted</h3>
              <p className="text-slate-400">Operating under the Partnership Act 1932 since 2019, delivering quality and security in every line of code.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-neonBlue">5+ Years</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Experience</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-neonBlue">100+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Global Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    { title: "100% Customer Satisfaction", desc: "Our commitment to excellence ensures every client receives a solution that exceeds expectations.", icon: Star },
    { title: "Global Project Expertise", desc: "Successfully delivered 100+ high-impact projects across UAE, Pakistan, and international markets.", icon: Target },
    { title: "Enterprise-Grade Security", desc: "We build private, secure AI systems with end-to-end encryption for your sensitive business data.", icon: Shield },
    { title: "High-Performance Engineering", desc: "Scalable Custom SaaS and AI architectures optimized for speed and reliability.", icon: Rocket },
  ];

  return (
    <section className="section-shell py-20 bg-slateDeep/30 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          Why <span className="text-neonBlue">Choose</span> Us?
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto italic">
          Delivering 100% Customer Satisfaction through intelligent, scalable, and secure technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-neonBlue/40 transition-all duration-500"
          >
            <div className="h-14 w-14 rounded-2xl bg-neonBlue/10 flex items-center justify-center border border-neonBlue/20 mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="text-neonBlue w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Management() {
  return (
    <section id="management" className="section-shell py-20 bg-transparent">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
          Management <span className="text-neonBlue">Team</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Expert minds leading our global AI Automation and Digital Transformation initiatives.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {managementTeam.map((member, index) => (
          <motion.div 
            key={member.name} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full rounded-[3rem] border border-white/10 bg-white/5 p-8 hover:border-neonBlue/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-neonBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl mb-8">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
            </div>

            <div className="relative flex flex-col flex-grow">
              <span className="text-xs uppercase tracking-[0.3em] text-neonBlue font-bold mb-2">{member.role}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{member.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                  <Phone size={16} className="text-neonBlue" />
                  <span>{member.contact}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                  <Mail size={16} className="text-neonBlue" />
                  <span>{member.email}</span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <p className="text-xs text-slate-400 italic max-w-[70%]">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-neonBlue hover:text-slateDeep transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell py-20 bg-slateDeep/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Common <span className="text-neonBlue">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-xl font-bold text-white">{faq.question}</span>
                <ChevronDown className={`text-neonBlue transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
          Client <span className="text-neonBlue">Feedback</span>
        </h2>
        <p className="mt-4 text-slate-400 italic">&ldquo;Professional landscape of business transformation success stories.&rdquo;</p>
      </div>

      <div className="flex flex-col gap-8">
        {professionalTestimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 p-10 rounded-[3rem] border border-white/10 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-2xl group hover:border-neonBlue/30 transition-all duration-500"
          >
            <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0 rounded-[2rem] overflow-hidden border-2 border-neonBlue/20">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-neonBlue text-neonBlue" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-slate-200 font-medium italic mb-6 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                <p className="text-neonBlue text-sm font-bold uppercase tracking-widest">{t.role}</p>
              </div>
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
    <section id="services" className="section-shell py-20 relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
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

export function CompletedProjects({ projects: _projects }: { projects: ProjectCard[] }) {
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

  return (
    <section id="projects" className="section-shell py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
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