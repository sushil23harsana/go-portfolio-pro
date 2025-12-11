const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Golang", level: 90 },
      { name: "Django", level: 85 },
      { name: "FastAPI", level: 85 },
      { name: "Spring Boot", level: 75 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "DynamoDB", level: 70 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
      { name: "RabbitMQ", level: 80 },
      { name: "AWS", level: 70 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">04. Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 hover-lift"
            >
              <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Java Full Stack Developer",
              "Generative AI Unleashed",
              "Goldman Sachs Engineering Virtual Program",
              "Tata Crucible Finalist",
              "Tech Team Lead - Designovation Hub",
            ].map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 glass rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
