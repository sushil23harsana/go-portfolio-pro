import { Code2, Server, Database, Cloud } from "lucide-react";

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
  return (
    <section id="about" className="py-24 relative">
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
              I'm a <span className="text-foreground font-medium">Software Engineer</span> with 
              a deep passion for building robust backend systems. A B.Tech graduate in Computer 
              Science from Graphic Era University, I've had the privilege of working 
              with innovative startups.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              At <span className="text-primary font-semibold">Resollect</span>, I built real-time 
              lawyer operations platforms using Django and Celery. At{" "}
              <span className="text-primary font-semibold">Seller Setu</span>, I migrated production 
              API gateways from Django to Golang, significantly improving throughput.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              My expertise lies in designing distributed systems, implementing message queues 
              with RabbitMQ, and creating high-performance APIs that handle millions of requests.
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
