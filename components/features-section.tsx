import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Cast as Mask, Clock } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Explora cuartos llenos de pistas ocultas",
    description:
      "Cada habitación contiene evidencias cuidadosamente colocadas que revelan la verdad detrás de los crímenes.",
  },
  {
    icon: FileText,
    title: "Revisa expedientes y pruebas oficiales",
    description:
      "Examina documentos gubernamentales, reportes policiales y evidencia forense para descubrir la verdad.",
  },
  {
    icon: Mask,
    title: "Toma decisiones que definen tu destino",
    description: "Cada elección que hagas determinará si logras la rehabilitación o caes en la perdición.",
  },
  {
    icon: Clock,
    title: "Vive la tensión de un escape room psicológico",
    description: "Experimenta la presión constante mientras el tiempo se agota y los secretos se revelan.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">CARACTERÍSTICAS PRINCIPALES</h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
