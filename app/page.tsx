import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { FeaturesSection } from "@/components/features-section"
import { CharactersSection } from "@/components/characters-section"
import { TrailerSection } from "@/components/trailer-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
import { FixedDownloadButton } from "@/components/fixed-download-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <CharactersSection />
      <TrailerSection />
      <DownloadSection />
      <Footer />
      <FixedDownloadButton />
    </main>
  )
}
