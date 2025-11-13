"use client"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Play, Zap, Shield, Target } from "lucide-react"

export function HeroSection() {
  const [showModal, setShowModal] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [result, setResult] = useState<"idle" | "win" | "lose">("idle")
  const videoRef = useRef<HTMLVideoElement | null>(null)
  
  // helper: scroll to section#trailer with retries for cases where target not yet mounted
  const scrollToTrailer = () => {
    const tryScroll = () => {
      const el = document.getElementById("trailer") || document.querySelector("section#trailer")
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return true
      }
      return false
    }

    if (tryScroll()) return

    const start = Date.now()
    const maxWait = 2000
    const id = window.setInterval(() => {
      if (tryScroll()) {
        clearInterval(id)
        return
      }
      if (Date.now() - start > maxWait) {
        clearInterval(id)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }, 100)
  }
  

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/dark-interrogation-room-with-dramatic-spotlight--c.jpg"
            alt="Interrogation room background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        </div>

        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle floating-particles"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-full epic-glow animate-delay-100" />
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-secondary/30 rounded-full epic-glow-blue animate-delay-300" />
        <div className="absolute top-1/2 left-20 w-2 h-20 bg-gradient-to-b from-primary to-transparent animate-delay-500" />
        <div className="absolute top-1/3 right-32 w-2 h-16 bg-gradient-to-b from-secondary to-transparent animate-delay-700" />

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="mb-12 epic-slide-in">
            <div className="relative inline-block">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <h1 className="text-8xl md:text-[12rem] font-black text-shimmer mb-2 tracking-tighter text-balance leading-none">
                PROYECTO
              </h1>
              <h1 className="text-8xl md:text-[12rem] font-black epic-gradient-text mb-6 tracking-tighter text-balance leading-none">
                UMBRAL
              </h1>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            </div>
          </div>

          <div className="epic-glass rounded-3xl p-10 mb-16 max-w-4xl mx-auto epic-border epic-fade-up animate-delay-200">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-primary mr-4" />
              <Zap className="w-8 h-8 text-primary" />
              <div className="w-12 h-1 bg-primary ml-4" />
            </div>

            <p className="text-3xl md:text-4xl text-foreground font-bold mb-6 italic text-shimmer">
              "Entre la rehabilitación o la perdición."
            </p>

            <div className="w-48 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8 epic-glow" />

            <p className="text-xl md:text-2xl text-foreground/95 leading-relaxed mb-6">
              Un programa secreto del gobierno mexicano donde el tiempo se usa para juzgar a los culpables y
              cada condenado debe afrontar sus propios crímenes.
            </p>

            <p className="text-lg md:text-xl text-secondary font-semibold">
              Cada sala es un espejo de sus actos. Cada decisión define el destino.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 epic-scale-in animate-delay-400">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl px-16 py-8 font-black rounded-2xl shadow-2xl epic-hover epic-glow group relative overflow-hidden"
              onClick={() => {
                // abrir modal y reproducir nivel 1
                setShowModal(true)
                setShowQuestion(false)
                setResult("idle")
                // intentar reproducir tras abrir modal (click del usuario)
                setTimeout(() => {
                  try {
                    videoRef.current?.play().catch(() => {
                      /* ignore autoplay policies */
                    })
                  } catch {
                    /* ignore */
                  }
                }, 50)
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download className="mr-4 h-8 w-8 relative z-10" />
              <span className="relative z-10">PROBAR DEMO</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-2xl px-16 py-8 font-black rounded-2xl epic-hover epic-glow-blue group relative overflow-hidden bg-transparent"
              onClick={() => {
                  // Scroll suave a la sección del trailer (si existe en la misma página)
                  scrollToTrailer()
                }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Play className="mr-4 h-8 w-8 relative z-10" />
              <span className="relative z-10">VER TRAILER</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto epic-fade-up animate-delay-600">
            <div className="epic-glass rounded-2xl p-8 text-center epic-hover group">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-12 h-12 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <div className="text-5xl font-black text-primary mb-3 group-hover:text-shimmer transition-all duration-300">
                4
              </div>
              <div className="text-lg text-foreground font-semibold uppercase tracking-wider">Salas Únicas</div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 group-hover:via-secondary transition-all duration-300" />
            </div>

            <div className="epic-glass rounded-2xl p-8 text-center epic-hover group">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-12 h-12 text-secondary group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="text-5xl font-black text-secondary mb-3 group-hover:text-shimmer transition-all duration-300">
                2
              </div>
              <div className="text-lg text-foreground font-semibold uppercase tracking-wider">Personajes</div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mt-4 group-hover:via-primary transition-all duration-300" />
            </div>

            <div className="epic-glass rounded-2xl p-8 text-center epic-hover group">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-12 h-12 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <div className="text-5xl font-black text-primary mb-3 group-hover:text-shimmer transition-all duration-300">
                ∞
              </div>
              <div className="text-lg text-foreground font-semibold uppercase tracking-wider">Posibilidades</div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 group-hover:via-secondary transition-all duration-300" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 epic-fade-up animate-delay-800">
            <div className="w-8 h-14 border-3 border-primary rounded-full flex justify-center epic-glow relative">
              <div className="w-2 h-4 bg-primary rounded-full mt-3 floating-particles" />
              <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-primary" />
              <div className="absolute -right-8 top-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <p className="text-primary text-sm font-semibold mt-3 tracking-wider">SCROLL</p>
          </div>
        </div>
      </section>

      {/* Modal para reproducir nivel 1 y pregunta */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className={`absolute inset-0 transition-colors duration-300 ${
              result === "win" ? "bg-green-900/80" : result === "lose" ? "bg-red-900/80" : "bg-black/80"
            }`}
          />

          <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
            <div className="bg-black rounded-lg overflow-hidden w-full max-w-5xl h-[70vh] flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                onEnded={() => {
                  setShowQuestion(true)
                }}
                src={encodeURI("/nivel 1.mp4")}
                playsInline
              />
            </div>

            <button
              onClick={() => {
                setShowModal(false)
                setShowQuestion(false)
                setResult("idle")
              }}
              className="absolute top-6 right-6 z-20 bg-card/80 hover:bg-card text-primary border border-primary/30 rounded-full p-3"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {showQuestion && result === "idle" && (
            <div className="absolute inset-0 z-30 flex items-center justify-center p-6">
              <div className="bg-gradient-to-br from-card/90 to-background/90 backdrop-blur-md border border-primary/20 rounded-2xl p-8 max-w-2xl w-full text-center">
                <h3 className="text-2xl font-bold mb-4">🕰️ Pregunta</h3>
                <p className="mb-6">¿Quién manipuló el reloj para alterar la escena del crimen?</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
  className="px-4 py-3 rounded-lg bg-muted text-foreground/90 border border-primary/10 relative"
  onClick={() => {
    setResult("win")

    // Crear alerta personalizada grande
    const alertBox = document.createElement("div")
    alertBox.innerHTML = `
      <div id="customAlert" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
        animation: fadeIn 0.3s ease;
      ">
        <div style="
          background: #fff;
          color: #333;
          padding: 40px 50px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          width: 90%;
          max-width: 500px;
          text-align: center;
          font-family: system-ui, sans-serif;
          animation: popIn 0.35s ease;
        ">
          <h3 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 16px; color: #16a34a;">
            ✅ ¡Respuesta correcta!
          </h3>
          <p style="font-size: 1rem; line-height: 1.6; color: #444; margin-bottom: 25px;">
            A) “El Mecánico”<br><br>
            Lógica: las huellas de aceite, la frase sobre “el motor”, y la mención a relojería apuntan directamente a él.
          </p>
          <button id="closeAlert" style="
            background: #16a34a;
            color: white;
            border: none;
            padding: 10px 22px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            transition: background 0.25s, transform 0.1s;
          ">Aceptar</button>
        </div>
      </div>

      <style>
        @keyframes popIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        #closeAlert:hover {
          background: #15803d;
          transform: scale(1.03);
        }
      </style>
    `

    document.body.appendChild(alertBox)

    // Cerrar alerta al presionar el botón
    document.getElementById("closeAlert").onclick = () => {
      document.getElementById("customAlert").remove()
      setShowModal(false)
      setShowQuestion(false)
      setResult("idle")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }}
>
  A) “El Mecánico”
</button>


                  <button
                    className="px-4 py-3 rounded-lg bg-muted text-foreground/90 border border-primary/10"
                    onClick={() => {
                      setResult("lose")
                      setTimeout(() => {
                        setShowModal(false)
                        setShowQuestion(false)
                        setResult("idle")
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }, 2200)
                    }}
                  >
                    B) “La Viuda”
                  </button>

                  <button
                    className="px-4 py-3 rounded-lg bg-muted text-foreground/90 border border-primary/10"
                    onClick={() => {
                      setResult("lose")
                      setTimeout(() => {
                        setShowModal(false)
                        setShowQuestion(false)
                        setResult("idle")
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }, 2200)
                    }}
                  >
                    C) “El Cura”
                  </button>

                  <button
                    className="px-4 py-3 rounded-lg bg-muted text-foreground/90 border border-primary/10"
                    onClick={() => {
                      setResult("lose")
                      setTimeout(() => {
                        setShowModal(false)
                        setShowQuestion(false)
                        setResult("idle")
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }, 2200)
                    }}
                  >
                    D) “El Chino”
                  </button>
                </div>
              </div>
            </div>
          )}

          {result === "win" && (
            <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
              <div className="text-center text-white">
                <div className="text-6xl font-black mb-4">¡Ganaste!</div>
              </div>
            </div>
          )}
{result === "lose" && (
  <div className="absolute inset-0 z-40 flex flex-col items-center justify-center">
    {/* 🎥 Video de derrota */}
    <video
      src="/perdiste.mp4"
      autoPlay
      playsInline
      className="w-full h-full object-cover absolute inset-0"
      onEnded={() => {
        setShowModal(false)
        setShowQuestion(false)
        setResult("idle")
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    />

    {/* 🔴 Capa roja semitransparente */}
    <div className="absolute inset-0 bg-red-700/60 backdrop-blur-sm"></div>

    {/* 💀 Texto de derrota */}
    <div className="text-center text-white z-10 drop-shadow-lg">
      <div className="text-6xl font-black mb-4 animate-pulse">PERDISTE</div>
      <p className="text-xl font-semibold">Inténtalo de nuevo...</p>
    </div>
  </div>
)}
        </div>
      )}
    </>
  )
}
