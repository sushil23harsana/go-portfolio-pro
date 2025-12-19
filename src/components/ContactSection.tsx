import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">05. Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 hover-lift hover-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:sushil23harsana@gmail.com"
                      className="font-medium hover:text-primary transition-colors duration-300"
                    >
                      sushil23harsana@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 hover-lift hover-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+919106014404"
                      className="font-medium hover:text-primary transition-colors duration-300"
                    >
                      +91 9106014404
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 hover-lift hover-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bengaluru, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/sushil23harsana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass rounded-xl py-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sushil-harsana-2b604b258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass rounded-xl py-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Send className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:sushil23harsana@gmail.com">
                  Say Hello
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
