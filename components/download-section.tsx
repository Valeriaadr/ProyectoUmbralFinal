import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Monitor } from "lucide-react"

export function DownloadSection() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-card border-border file-texture shadow-2xl">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold tracking-wider mb-4">
                ACCESO AUTORIZADO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">DESCARGA LA DEMO</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experimenta los primeros capítulos del Proyecto Umbral. Sumérgete en el interrogatorio psicológico más
                intenso jamás creado.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-12 py-6 font-bold shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-3 h-6 w-6" />
                DESCARGAR DEMO PARA WINDOWS
              </Button>

              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Monitor className="h-4 w-4" />
                Próximamente disponible para más plataformas
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
