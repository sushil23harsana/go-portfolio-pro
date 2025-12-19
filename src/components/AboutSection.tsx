import { Code2, Server, Database, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Building scalable microservices and APIs with Golang, Django, and FastAPI",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Expert in PostgreSQL, MongoDB, Redis, and DynamoDB for optimal data solutions",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, tested, and well-documented code that scales",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Docker containerization, CI/CD pipelines, and cloud infrastructure",
  },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">01. About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Passionate About <span className="text-gradient">Backend Engineering</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Backend Engineer with hands-on experience building and maintaining backend systems 
              using <span className="text-primary font-semibold">Golang</span> and{" "}
              <span className="text-primary font-semibold">Python</span> in startup environments.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Worked on API gateways, asynchronous task processing, message queues, and production 
              debugging. Strong foundation in backend fundamentals, concurrency, and distributed 
              systems, with a focus on writing reliable and scalable services.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              B.Tech in Computer Science from Graphic Era University Dehradun (2021-2025). 
              Currently working at startups, taking ownership of backend features and collaborating 
              directly with founders.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Golang", "Django", "FastAPI", "PostgreSQL", "RabbitMQ", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-lg text-sm font-mono text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 hover-lift hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
