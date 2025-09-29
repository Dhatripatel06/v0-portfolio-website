import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-balance">
              <span className="text-foreground">Dhatri Patel</span>
              <br />
              <span className="text-primary"></span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance">
              Computer Engineering Student | AI/ML Enthusiast | Research Publications
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground text-pretty">
              Dedicated BCA student with a strong foundation in computer science fundamentals, passionate about
              technology and committed to lifelong learning. Eager to apply knowledge to real-world challenges in AI/ML
              and software development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:dhatripatel67@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href="tel:+919163555064" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
