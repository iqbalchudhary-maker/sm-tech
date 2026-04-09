import { prisma } from "@/lib/prisma";

export type ProjectCard = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type TeamCard = {
  id: string;
  name: string;
  role: string;
  bio: string;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  portfolioUrl?: string | null;
};

export async function getProjectsForLanding(): Promise<ProjectCard[]> {
  try {
    const projects = await prisma.project.findMany({
      where: { status: { in: ["ACTIVE", "COMPLETED"] } },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
      take: 6
    });

    if (projects.length === 0) return [];

    return projects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.summary,
      href: p.liveUrl ?? "#"
    }));
  } catch {
    return [];
  }
}

export async function getTeamForLanding(): Promise<TeamCard[]> {
  try {
    const team = await prisma.user.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "asc" },
      take: 6
    });

    return team.map((member) => ({
      id: member.id,
      name: member.name,
      role: member.role === "ADMIN" ? "Admin / Leadership" : "Developer",
      bio: member.bio ?? "Portfolio profile placeholder.",
      githubUrl: member.githubUrl ?? "https://github.com",
      linkedinUrl: member.linkedinUrl ?? "https://linkedin.com",
      portfolioUrl: member.portfolioUrl ?? "https://example.com"
    }));
  } catch {
    return [];
  }
}
