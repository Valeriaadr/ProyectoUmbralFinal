"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState, useEffect } from "react"

export function FixedDownloadButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Button
        size="lg"
        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold px-6 py-3 transition-all duration-300 hover:scale-105"
      >
        <Download className="mr-2 h-5 w-5" />
        DESCARGAR
      </Button>
    </div>
  )
}
