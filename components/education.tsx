import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My academic journey in computer science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Bachelor in Computer Application (BCA)</CardTitle>
                    <p className="text-muted-foreground">Shree Swaminarayan College of Computer Science (SSCCS)</p>
                    <p className="text-sm text-muted-foreground">Bhavnagar, Gujarat</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    2023 - 2026
                  </div>
                  <Badge variant="secondary">CGPA: 7.0</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Data Structures & Algorithms</Badge>
                    <Badge variant="outline">Database Management Systems</Badge>
                    <Badge variant="outline">Web Development</Badge>
                    <Badge variant="outline">Software Engineering</Badge>
                    <Badge variant="outline">Computer Networks</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Academic Highlights</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Consistent academic performance with 70% graduation percentage</li>
                    <li>• Active participation in technical exhibitions and competitions</li>
                    <li>• Research publication in international journal</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
