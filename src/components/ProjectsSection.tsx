import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "BitTorrent Client",
    description: "Built a lightweight BitTorrent client from scratch in Go with peer-to-peer file sharing. Implemented concurrent downloads, piece-based transfer, and SHA-1 integrity verification. Focused on distributed systems fundamentals, network protocols, and Go concurrency.",
    techStack: ["Go", "TCP/UDP", "SHA-1", "Concurrency"],
    period: "Nov 2025 – Dec 2025",
  },
  {
    title: "CampusConnect",
    description: "Developed backend services for a university platform using college-email authentication. Designed APIs for posts, referrals, listings, and marketplace with modular backend design.",
    techStack: ["Python", "FastAPI", "PostgreSQL"],
    period: "Nov 2025",
  },
  {
    title: "AI-Assisted Personal Finance Manager",
    description: "Built backend services for a finance analysis system that generates insights from user data using GenAI-assisted retrieval techniques. Implemented LLM-backed workflows for summarization and insight generation.",
    techStack: ["FastAPI", "LangChain", "PostgreSQL", "GenAI"],
    period: "Mar 2025 – Jul 2025",
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">03. Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-xl p-6 hover-lift hover-glow group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    {project.period}
                  </span>
                </div>
                <a
                  href="https://github.com/sushil23harsana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 shrink-0"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-xs font-mono text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com/sushil23harsana" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
