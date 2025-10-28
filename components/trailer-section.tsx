"use client"

import { useState, useRef } from "react"
import { Play, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrailerSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  // Nueva función para alternar reproducción con clic
  const togglePlayVideo = (vid?: HTMLVideoElement | null) => {
    const v = vid ?? videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().catch(() => {
        // ignorar errores de reproducción por políticas del navegador
      })
    } else {
      v.pause()
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)

    // Reproducir automáticamente al entrar en pantalla completa
    setTimeout(() => {
      if (!isFullscreen && fullscreenVideoRef.current) {
        fullscreenVideoRef.current.play().catch(() => {
          /* ignore */
        })
      }
    }, 200)
  }

  return (
    <>
      <section id="trailer" className="relative py-32 overflow-hidden">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

        {/* Partículas decorativas */}
        <div className="particles-container">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>

        {/* Bordes decorativos */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-primary/30 epic-glow" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-secondary/30 epic-glow-blue" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-secondary/30 epic-glow-blue" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-primary/30 epic-glow" />

        <div className="container relative z-10 mx-auto px-4">
          {/* Título */}
          <div className="text-center mb-16 epic-fade-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-primary" />
                <Play className="w-8 h-8 text-primary epic-glow" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary to-primary" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 epic-gradient-text">TRAILER OFICIAL</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sumérgete en el mundo de <strong>Proyecto Umbral</strong> con nuestro trailer cinematográfico.
            </p>
          </div>

          {/* Contenedor del video */}
          <div className="max-w-6xl mx-auto epic-scale-in animate-delay-200">
            <div className="relative group">
              {/* Añadida pointer-events-none para que los clics lleguen al video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
              <div className="relative epic-glass rounded-lg overflow-hidden border-2 border-primary/20">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover cursor-pointer"
                    controls
                    poster="/fototrailer.png"
                    onPlay={handlePlay}
                    onClick={() => togglePlayVideo()}
                    playsInline
                  >
                    {/* Ruta actualizada al archivo en public: public\traileroficial.mp4 */}
                    <source src="/traileroficial.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>

                  
                </div>

                {/* Esquinas decorativas */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-primary" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-secondary" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-secondary" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-primary" />
              </div>
            </div>

            {/* Tarjetas informativas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="epic-glass rounded-lg p-6 border border-primary/20 epic-hover text-center">
                <div className="text-4xl font-bold text-primary mb-2">4K</div>
                <div className="text-sm text-muted-foreground">Ultra HD Quality</div>
              </div>
              <div className="epic-glass rounded-lg p-6 border border-secondary/20 epic-hover text-center">
                <div className="text-4xl font-bold text-secondary mb-2">60 FPS</div>
                <div className="text-sm text-muted-foreground">Smooth Playback</div>
              </div>
              <div className="epic-glass rounded-lg p-6 border border-primary/20 epic-hover text-center">
                <div className="text-4xl font-bold text-primary mb-2">1:02</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de pantalla completa */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <Button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-card/80 hover:bg-card backdrop-blur-sm border border-primary/30 z-10"
            size="icon"
          >
            <X className="w-6 h-6 text-primary" />
          </Button>

          <div className="w-full h-full p-8 flex items-center justify-center">
            <video
              ref={fullscreenVideoRef}
              className="max-w-full max-h-full rounded-lg"
              controls
              autoPlay
              poster="/fototrailer.png"
            >
              <source src="/traileroficial.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
