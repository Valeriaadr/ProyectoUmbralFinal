import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-card border-border file-texture">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Créditos del equipo */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">EQUIPO DE DESARROLLO</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Dirección: [Nombre del Director]</p>
                  <p>Programación: [Equipo de Dev]</p>
                  <p>Arte: [Equipo de Arte]</p>
                  <p>Narrativa: [Escritores]</p>
                </div>
              </div>

              {/* Redes sociales */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">SÍGUENOS</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-muted-foreground hover:text-secondary transition-colors">
                    Twitter: @ProyectoUmbral
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-secondary transition-colors">
                    Instagram: @proyecto.umbral
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-secondary transition-colors">
                    YouTube: Proyecto Umbral
                  </a>
                </div>
              </div>

              {/* Contacto */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">CONTACTO</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>contacto@proyectoumbral.com</p>
                  <p>Prensa: prensa@proyectoumbral.com</p>
                </div>
                <Badge variant="outline" className="mt-4 border-secondary text-secondary">
                  CLASIFICADO
                </Badge>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-muted-foreground text-sm">
                © 2024 Proyecto Umbral. Todos los derechos reservados.
                <span className="text-primary font-semibold"> Programa gubernamental clasificado.</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  )
}
