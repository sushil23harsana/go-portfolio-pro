import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Backend Developer",
  "Golang Engineer",
  "API Architect",
  "System Designer",
];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Photo - Shows first on mobile */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              
              {/* Photo Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float">
                <img 
                  src={profilePhoto} 
                  alt="Sushil Harsana - Backend Developer" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="font-mono text-primary text-xs sm:text-sm md:text-base mb-2 sm:mb-4 block">
                Hi there, I'm
              </span>
            </div>
            
            <h1 className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display block mb-2">
                Sushil Harsana
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gradient block min-h-[1.2em]">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Crafting scalable backend systems with{" "}
              <span className="text-primary font-semibold">Golang</span>,{" "}
              <span className="text-primary font-semibold">Django</span>, and{" "}
              <span className="text-primary font-semibold">FastAPI</span>. 
              Based in <span className="text-primary font-semibold">Bengaluru</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://github.com/sushil23harsana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushil-harsana-2b604b258/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:sushil23harsana@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-up hidden sm:block" style={{ animationDelay: '0.8s' }}>
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
