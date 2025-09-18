import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Brain, Users, Lightbulb } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Java", "Python", "SQL"],
      color: "text-blue-600",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML/CSS", "React", "Node.js", "Web APIs"],
      color: "text-green-600",
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: ["SQL", "Git Version Control", "VS Code", "Database Management"],
      color: "text-purple-600",
    },
    {
      title: "AI/ML & Analytics",
      icon: Brain,
      skills: ["Machine Learning", "Data Analytics", "Generative AI", "Problem Solving"],
      color: "text-orange-600",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Collaboration", "Public Speaking", "Client Interaction", "Project Coordination"],
      color: "text-pink-600",
    },
    {
      title: "Core Competencies",
      icon: Lightbulb,
      skills: ["Innovative Thinking", "Analytical Problem Solving", "Multitasking", "Reliability"],
      color: "text-indigo-600",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
