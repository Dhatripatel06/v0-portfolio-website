import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Oracle Certified Generative AI Professional",
      issuer: "Oracle",
      category: "AI/ML",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=14B28E2C8840F7237450363C0DF05EB473E02E29F2C26EDBF77FD940841CCD8A",
    },
    {
      title: "AI Foundations Associate",
      issuer: "Industry Certification",
      category: "AI/ML",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DF8C64BD7F6F8A01E7054216FE3DCF500FF14185A741F5976264A9F6BB25A31D",
    },
    {
      title: "Tata - GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata",
      category: "Data Analytics",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_xDq94JGbT5yXrAYxs_1756790664413_completion_certificate.pdf",
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Deloitte",
      category: "Data Analytics",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_xDq94JGbT5yXrAYxs_1754149132517_completion_certificate.pdf",
    },
    {
      title: "Summer Analytics 2025",
      issuer: "Analytics Program",
      category: "Data Analytics",
      link: "https://certificate.givemycertificate.com/c/2887752f-d313-4e9e-a368-f9c39b7bf2e4",
    },
    {
      title: "Salesforce Certified",
      issuer: "Salesforce",
      category: "Cloud Platform",
      link: "https://media.geeksforgeeks.org/auth-certificates/1751999400/feea77551e8072f275dfd73771c5e466.png",
    },
    {
      title: "Generative AI Mastery Workshop",
      issuer: "Workshop Certification",
      category: "AI/ML",
      link: "https://cdn1.ccbp.in/misc/workshop-openai-nxtwave-buildathon-genai-online-workshop-participation/J4G0C3HB0S.png",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-blue-100 text-blue-800"
      case "Data Analytics":
        return "bg-green-100 text-green-800"
      case "Cloud Platform":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications and specialized training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <Badge className={getCategoryColor(cert.category)}>{cert.category}</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
