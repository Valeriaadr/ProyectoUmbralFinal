import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const characters = [
  {
    name: "Detective Alejandro Camarena",
    role: "INVESTIGADOR PRINCIPAL",
    description:
      "Un detective experimentado con métodos poco convencionales. Su voz firme guía el interrogatorio, siempre oculto tras las sombras del programa secreto.",
    traits: ["Metódico", "Implacable", "Misterioso"],
    image: "/detective-alejandro-camarena-serious-police-detective.jpg",
  },
  {
    name: 'Rodrigo "El Jaguar" Montalvo',
    role: "SUJETO DE PRUEBA",
    description:
      "Narcotraficante carismático de alto perfil, ahora atrapado en su propio laberinto psicológico. Cada sala refleja una parte oscura de su pasado.",
    traits: ["Carismático", "Peligroso", "Atormentado"],
    image: "/rodrigo-el-jaguar-montalvo-dangerous-criminal.jpg",
  },
]

export function CharactersSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full blur-xl animate-pulse animate-delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 fade-in-up">PERSONAJES PRINCIPALES</h2>
          <div className="w-24 h-1 bg-secondary mx-auto scale-in animate-delay-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <Card
              key={index}
              className={`bg-card border-border character-card epic-hover ${
                index === 0 ? "slide-in-left" : "slide-in-right"
              } animate-delay-${(index + 1) * 200}`}
            >
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <div className="relative inline-block">
                    <img
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-secondary pulse-glow-blue"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <Badge variant="secondary" className="mb-2 font-bold pulse-glow-blue">
                    {character.role}
                  </Badge>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 gradient-text">{character.name}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-center">{character.description}</p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {character.traits.map((trait, traitIndex) => (
                    <Badge
                      key={traitIndex}
                      variant="outline"
                      className={`border-secondary/50 text-secondary epic-hover animate-delay-${(traitIndex + 1) * 100} fade-in-up`}
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
