import { Card } from "@/components/ui/card"

export function StorySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-border file-texture p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold tracking-wider mb-4">
              EXPEDIENTE CLASIFICADO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">HISTORIA DEL PROYECTO</h2>
          </div>

          <div className="prose prose-lg max-w-none text-card-foreground">
            <p className="text-lg leading-relaxed mb-6">
              El gobierno mexicano ha creado el <span className="text-primary font-semibold">Proyecto Umbral</span>: una
              prueba secreta donde un detective confronta a los criminales con sus propios pecados.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              El <span className="text-secondary font-semibold">Detective Alejandro Camarena</span> somete a
              <span className="text-primary font-semibold"> Rodrigo "El Jaguar" Montalvo</span>, un narcotraficante de
              alto perfil, a este programa experimental de rehabilitación.
            </p>

            <p className="text-lg leading-relaxed text-center font-medium text-secondary">
              Cada sala es un espejo de sus actos. ¿Lograrás escapar de tu pasado o quedarás atrapado en él?
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
