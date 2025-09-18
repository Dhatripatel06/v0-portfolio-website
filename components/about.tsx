import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A passionate computer engineering student with a drive for innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">My Journey</h3>
                <p className="text-muted-foreground text-pretty">
                  I am a dedicated Computer Engineering student, currently pursuing my BCA degree at Shree Swaminarayan
                  College of Computer Science. With a strong foundation in computer science fundamentals, I am eager to
                  apply my knowledge to real-world challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">My Passion</h3>
                <p className="text-muted-foreground text-pretty">
                  I am passionate about technology and committed to lifelong learning, with a particular interest in
                  AI/ML, data analytics, and software development. I consistently seek opportunities to expand my
                  skillset and stay current with emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Research & Innovation</h3>
                <p className="text-muted-foreground text-pretty">
                  I have published research in international journals and developed innovative applications like the
                  AgriCare plant disease detection Flutter application, which earned second place in the Flash IT
                  exhibition 2024.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Future Goals</h3>
                <p className="text-muted-foreground text-pretty">
                  My goal is to contribute meaningfully to the field of computer science upon graduation, leveraging my
                  technical skills and research experience to solve complex problems and drive innovation in technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
