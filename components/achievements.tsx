import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, BookOpen, Award } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Research Publication",
      description: "Published a research paper in international journal Research Matrix",
      date: "December 2024",
      type: "Research",
      icon: BookOpen,
      details: "Contributing to academic knowledge through peer-reviewed research publication",
    },
    {
      title: "Second Place - Flash IT Exhibition 2024",
      description: "AgriCare Plant Disease Detection Flutter Application",
      date: "2024",
      type: "Competition",
      icon: Trophy,
      details: "Developed innovative Flutter application for plant disease detection using AI/ML",
    },
    {
      title: "Academic Excellence",
      description: "Consistent academic performance throughout BCA program",
      date: "2023-2026",
      type: "Academic",
      icon: Award,
      details: "Maintaining strong academic standing with 70% graduation percentage and 7.0 CGPA",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research":
        return "bg-blue-100 text-blue-800"
      case "Competition":
        return "bg-green-100 text-green-800"
      case "Academic":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognition and accomplishments in research, competitions, and academics
          </p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getTypeColor(achievement.type)}>{achievement.type}</Badge>
                      <p className="text-sm text-muted-foreground mt-2">{achievement.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{achievement.details}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
