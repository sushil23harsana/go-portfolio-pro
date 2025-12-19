import { ExternalLink, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const blogs = [
  {
    title: "Building Bittorrent Client from Scratch in Golang",
    description: "A comprehensive guide to implementing a BitTorrent client from the ground up using Go, covering peer-to-peer networking, file handling, and the BitTorrent protocol.",
    link: "https://medium.com/@sushil23harsana",
  },
];

export const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="blogs"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">05. Blogs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Technical <span className="text-gradient">Writing</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I write about backend engineering, distributed systems, and lessons learned from building production systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {blogs.map((blog) => (
            <a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass rounded-xl p-6 hover-lift hover-glow group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://medium.com/@sushil23harsana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-mono text-sm hover:underline"
          >
            View all articles on Medium →
          </a>
        </div>
      </div>
    </section>
  );
};
