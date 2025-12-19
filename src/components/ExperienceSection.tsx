import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Resollect",
    role: "Software Engineer (SDE-1)",
    period: "June 2025 – September 2025",
    techStack: ["Django", "Celery", "Python", "PostgreSQL"],
    highlights: [
      "Built and maintained backend modules for a lawyer operations platform using Django and Celery",
      "Implemented asynchronous workflows for background task processing and third-party integrations",
      "Debugged and resolved production issues, improving system stability and reliability",
      "Worked closely with founders, taking ownership of backend features in a fast-paced startup environment",
    ],
  },
  {
    company: "Seller Setu",
    role: "Software Engineer Intern",
    period: "Apr 2024 – Jun 2024",
    techStack: ["Golang", "RabbitMQ", "Django", "Microservices"],
    highlights: [
      "Migrated critical API gateway components from Django to Golang to improve performance under high traffic",
      "Implemented rate limiting and traffic control mechanisms to safely handle peak load",
      "Integrated RabbitMQ for inter-service communication, ensuring reliable message delivery",
      "Worked with backend services in a microservice-oriented architecture",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">02. Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 bg-primary rounded-full shadow-glow md:-translate-x-1/2 md:translate-x-1/2 z-10" style={{
                  left: index % 2 === 0 ? 'auto' : '-8px',
                  right: index % 2 === 0 ? '-8px' : 'auto',
                }} />

                <div className="ml-8 md:ml-0 glass rounded-2xl p-6 hover-lift hover-glow">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">{exp.company}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <ul className={`space-y-2 mb-4 text-left`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 rounded-full text-xs font-mono text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
