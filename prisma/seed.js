/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "abbas@smtechnology.local" },
    update: {
      name: "Abbas",
      passwordHash: "abbas123",
      role: "ADMIN",
      bio: "Leading AI automation architecture and strategic delivery.",
      linkedinUrl: "https://linkedin.com",
      githubUrl: "https://github.com"
    },
    create: {
      name: "Abbas",
      email: "abbas@smtechnology.local",
      passwordHash: "abbas123",
      role: "ADMIN",
      bio: "Leading AI automation architecture and strategic delivery.",
      linkedinUrl: "https://linkedin.com",
      githubUrl: "https://github.com"
    }
  });

  const developer = await prisma.user.upsert({
    where: { email: "developer@smtechnology.local" },
    update: {
      name: "Developer",
      passwordHash: "developer123",
      role: "DEVELOPER",
      bio: "Building scalable AI workflows and implementation pipelines.",
      githubUrl: "https://github.com"
    },
    create: {
      name: "Developer",
      email: "developer@smtechnology.local",
      passwordHash: "developer123",
      role: "DEVELOPER",
      bio: "Building scalable AI workflows and implementation pipelines.",
      githubUrl: "https://github.com"
    }
  });

  const projects = [
    { title: "AutoMarketing Engine", slug: "automarketing-engine", ownerId: admin.id, liveUrl: "https://example.com/automarketing-engine" },
    { title: "AI Staff Layer", slug: "ai-staff-layer", ownerId: developer.id, liveUrl: "https://example.com/ai-staff-layer" },
    { title: "WhatsApp Funnel Suite", slug: "whatsapp-funnel-suite", ownerId: admin.id, liveUrl: "https://example.com/whatsapp-funnel-suite" },
    { title: "School ERP Cloud", slug: "school-erp-cloud", ownerId: developer.id, liveUrl: "https://example.com/school-erp-cloud" },
    { title: "RAG Chat Assistant", slug: "rag-chat-assistant", ownerId: admin.id, liveUrl: "https://example.com/rag-chat-assistant" },
    { title: "Social Content Engine", slug: "social-content-engine", ownerId: developer.id, liveUrl: "https://example.com/social-content-engine" }
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        title: project.title,
        summary: `${project.title} implementation for enterprise workflow automation.`,
        status: "COMPLETED",
        ownerId: project.ownerId,
        liveUrl: project.liveUrl,
        category: "AI Automation"
      },
      create: {
        title: project.title,
        slug: project.slug,
        summary: `${project.title} implementation for enterprise workflow automation.`,
        status: "COMPLETED",
        ownerId: project.ownerId,
        liveUrl: project.liveUrl,
        category: "AI Automation"
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed complete.");
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
