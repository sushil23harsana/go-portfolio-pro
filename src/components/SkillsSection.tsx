import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Award, Code2, Database, Server, Cloud } from "lucide-react";

const coreSkills = [
  { name: "Golang", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "Django", icon: Server },
  { name: "FastAPI", icon: Server },
  { name: "Spring Boot", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Redis", icon: Database },
  { name: "Docker", icon: Cloud },
  { name: "RabbitMQ", icon: Server },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: Code2 },
  { name: "Linux", icon: Server },
];

const certifications = [
  { name: "Java Full Stack Developer", icon: Award },
  { name: "Generative AI Unleashed", icon: Award },
  { name: "Goldman Sachs Engineering Virtual Program", icon: Award },
  { name: "Tata Crucible Finalist", icon: Award },
  { name: "Tech Team Lead - Designovation Hub", icon: Award },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-primary text-sm">04. Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Backend engineer specializing in distributed systems and scalable architectures
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
          {coreSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <skill.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications - Compact */}
        <div className="glass rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="text-sm font-mono text-primary mb-4 text-center">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {certifications.map((cert) => (
              <span
                key={cert.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-md text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Award className="w-3 h-3" />
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
