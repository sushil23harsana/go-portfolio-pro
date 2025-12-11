import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CampusConnect",
    description: "University Ecosystem Platform - Unified portal where students access campus opportunities using college-email SSO. Features student posts, alumni referrals, faculty research openings, and a pre-owned marketplace.",
    techStack: ["Node.js", "FastAPI", "LangChain", "React"],
    featured: true,
  },
  {
    title: "AI-Driven Personal Finance Manager",
    description: "AI-powered finance system providing smart insights using RAG pipelines. Deployed modular microservices using Spring Boot and FastAPI for intelligent financial recommendations.",
    techStack: ["FastAPI", "RAG", "LangChain", "Spring Boot", "Mistral"],
    featured: true,
  },
  {
    title: "Smart Contact Management System",
    description: "Secure full-stack application with OAuth2 login, AWS S3 storage, and email-integrated contact management. Enterprise-grade security with Spring Security.",
    techStack: ["Spring Boot", "Spring Security", "JPA", "AWS S3", "OAuth2"],
    featured: false,
  },
  {
    title: "AI Travel Assistant",
    description: "Conversational travel assistant providing personalized suggestions with long-term memory persistence using Azure Cosmos DB for context-aware recommendations.",
    techStack: ["FastAPI", "LangChain", "React", "Azure Cosmos DB"],
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">03. Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className={`relative grid lg:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Project Image Placeholder */}
                <div
                  className={`lg:col-span-7 relative group ${
                    index % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""
                  }`}
                >
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-card group-hover:border-primary/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-primary/30" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`lg:col-span-6 lg:absolute ${
                    index % 2 === 1 ? "lg:left-0" : "lg:right-0"
                  } z-10`}
                >
                  <span className="font-mono text-primary text-sm">Featured Project</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                  
                  <div className="glass rounded-xl p-6 shadow-card mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-mono text-primary/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-muted-foreground">Other Noteworthy Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="glass rounded-2xl p-6 hover-lift hover-glow group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
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
