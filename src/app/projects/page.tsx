import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Maciej B\u0142\u0119dowski",
  description: "Personal and professional projects.",
};

export default function ProjectsPage() {
  return (
    <div className="section-container">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Projects</h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Things I&apos;m building, maintaining, and experimenting with. From
          AI-powered tools to self-hosted infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
