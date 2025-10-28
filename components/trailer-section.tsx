"use client"

import { useState } from "react"
import { Play, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrailerSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

        {/* Decorative particles */}
        <div className="particles-container">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-primary/30 epic-glow" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-secondary/30 epic-glow-blue" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-secondary/30 epic-glow-blue" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-primary/30 epic-glow" />

        <div className="container relative z-10 mx-auto px-4">
          {/* Section title */}
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
              Sumérgete en el mundo de Proyecto Umbral con nuestro trailer cinematográfico
            </p>
          </div>

          {/* Video container */}
          <div className="max-w-6xl mx-auto epic-scale-in animate-delay-200">
            <div className="relative group">
              {/* Epic border frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative epic-glass rounded-lg overflow-hidden border-2 border-primary/20">
                {/* Video element - placeholder for now */}
                <div className="relative aspect-video bg-card/50">
                  {/* Placeholder for video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center epic-glow">
                        <Play className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-primary mb-2">Video Trailer</p>
                      <p className="text-muted-foreground">El video se agregará próximamente</p>
                    </div>
                  </div>

                  {/* Video element ready for file */}
                  <video className="w-full h-full object-cover" controls poster="/dark-cinematic-game-trailer-poster.jpg">
                    <source src="/videos/trailer.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>

                  {/* Fullscreen button */}
                  <Button
                    onClick={toggleFullscreen}
                    className="absolute top-4 right-4 bg-card/80 hover:bg-card backdrop-blur-sm border border-primary/30 epic-glow"
                    size="icon"
                  >
                    <Maximize2 className="w-5 h-5 text-primary" />
                  </Button>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-primary" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-secondary" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-secondary" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-primary" />
              </div>
            </div>

            {/* Video info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="epic-glass rounded-lg p-6 border border-primary/20 epic-hover">
                <div className="text-4xl font-bold text-primary mb-2">4K</div>
                <div className="text-sm text-muted-foreground">Ultra HD Quality</div>
              </div>
              <div className="epic-glass rounded-lg p-6 border border-secondary/20 epic-hover">
                <div className="text-4xl font-bold text-secondary mb-2">60 FPS</div>
                <div className="text-sm text-muted-foreground">Smooth Gameplay</div>
              </div>
              <div className="epic-glass rounded-lg p-6 border border-primary/20 epic-hover">
                <div className="text-4xl font-bold text-primary mb-2">2:30</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen modal */}
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
            <video className="max-w-full max-h-full" controls autoPlay poster="/dark-cinematic-game-trailer-poster.jpg">
              <source src="/videos/trailer.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
