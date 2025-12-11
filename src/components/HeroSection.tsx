import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="font-mono text-primary text-sm md:text-base mb-4 block">
                Hello, I'm
              </span>
            </div>
            
            <h1 className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold font-display block mb-2">
                Sushil Harsana
              </span>
              <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gradient block">
                Backend Developer
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Crafting scalable backend systems with{" "}
              <span className="text-primary font-semibold">Golang</span>,{" "}
              <span className="text-primary font-semibold">Django</span>, and{" "}
              <span className="text-primary font-semibold">FastAPI</span>. 
              Passionate about building high-performance distributed systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com/sushil23harsana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushil-harsana-2b604b258/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sushil23harsana@gmail.com"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float">
                <div className="absolute inset-0 bg-gradient-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">SH</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Your photo here</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-lg animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
