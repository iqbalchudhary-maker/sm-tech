export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Management", href: "#management" },
  { label: "Services", href: "#services" },
  { label: "Completed Projects", href: "#projects" },
  { label: "Our Team", href: "#team" }
];

export const heroSlides = [
  {
    title: "Neural Networks at Enterprise Scale",
    subtitle: "Advanced model orchestration across business-critical systems.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Autonomous Robotic Interface Systems",
    subtitle: "Human-centered interfaces powering autonomous digital operations.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Cloud-native AI Infrastructure",
    subtitle: "Architected, distributed, and autonomous compute layers for modern enterprises.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Operational Intelligence Dashboards",
    subtitle: "Real-time insight pipelines with automated decision support.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Secure Agentic Workflow Automation",
    subtitle: "Resilient agents with policy-aware execution and auditability.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Omnichannel AI Customer Experience",
    subtitle: "Unified automation across web, chat, and messaging touchpoints.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
  }
];

export const services = [
  "AutoMarketing",
  "AI Staff Layer",
  "WhatsApp Funnels",
  "ERP/School Systems",
  "RAG Chatbots",
  "Social Content Engine"
];

export const projects = Array.from({ length: 6 }, (_, i) => ({
  title: `Project ${i + 1}`,
  description: "Enterprise automation implementation placeholder.",
  href: "#"
}));

export const testimonials = [
  { name: "Ahsan R.", role: "COO, Retail Group", text: "SM Technology shipped our AI funnel in record time.", rating: 5 },
  { name: "Mariam S.", role: "Director, EdTech", text: "Their ERP modernization transformed daily operations.", rating: 5 },
  { name: "Rahul K.", role: "CTO, SaaS Platform", text: "Outstanding architecture discipline and communication.", rating: 5 },
  { name: "Khalid M.", role: "Founder, Logistics", text: "Their RAG assistant reduced support workload drastically.", rating: 4 },
  { name: "Sarah L.", role: "Head of Growth", text: "Practical AI execution with premium UX polish.", rating: 5 }
];
