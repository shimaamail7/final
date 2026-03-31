"use client"

import { useState, useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import { LenisProvider, useLenis } from "@/lib/lenis-context"
import { Loader } from "@/components/loader"

import { PhilosophySection } from "@/components/philosophy-section"
import { CraftSection } from "@/components/craft-section"
import { InnovationSection } from "@/components/innovation-section"
import { FixedHeader } from "@/components/fixed-header"
import { LeftSidebar } from "@/components/left-sidebar"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

const GlassesCanvas = dynamic(
  () => import("@/components/glasses-model").then((mod) => mod.GlassesCanvas),
  { ssr: false }
)

const SECTIONS = [
  { id: "philosophy", number: "01", label: "Philosophy" },
  { id: "craft", number: "02", label: "Craft" },
  { id: "innovation", number: "03", label: "Innovation" },
]

function MainContent({ isReady }: { isReady: boolean }) {
  const { lenis } = useLenis()

  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el && lenis) {
      lenis.scrollTo(el, { offset: 0, duration: 1.2 })
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [lenis])

  return (
    <main id="main-scroll-container" style={{ backgroundColor: "#000000" }}>
      {/* Global black gradient for Philosophy and Innovation */}
      <div id="global-gradient-bg-dark" className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ width: '100%', height: '100vh' }}>
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(0, 0, 0)"
          gradientBackgroundEnd="rgb(0, 0, 0)"
          firstColor="221, 74, 255"
          secondColor="221, 74, 255"
          thirdColor="200, 50, 50"

          pointerColor="140, 100, 255"
          blendingValue="screen"
          interactive={false}
        />
      </div>

      {/* Global beige gradient for Craft */}
      <div id="global-gradient-bg-light" className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ width: '100%', height: '100vh', opacity: 0 }}>
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(252, 245, 226)"
          gradientBackgroundEnd="rgb(252, 245, 226)"
          firstColor="180, 100, 255"
          secondColor="255, 120, 80"
          thirdColor="180, 100, 255"
          forthColor="180, 100, 255"
          pointerColor="140, 100, 255"
          blendingValue="hard-light"
          interactive={false}
        />
      </div>

      <FixedHeader isDark={true} />

      <LeftSidebar
        sections={SECTIONS}
        isVisible={true}
        onNavigate={handleNavigate}
      />

      {/* ── Philosophy ────────────────────────────────────────────────────── */}
      <div className="relative" id="philosophy">
        <div className="pointer-events-none fixed left-0 top-0 z-30 h-screen w-full">
          <GlassesCanvas
            isVisible={isReady}
            className="h-full w-full"
          />
        </div>

        <PhilosophySection />
      </div>

      {/* ── Craft ─────────────────────────────────────────────────────────── */}
      <div className="relative" id="craft">
        <CraftSection />
      </div>

      {/* ── Innovation ────────────────────────────────────────────────────── */}
      <div className="relative" id="innovation">
        <InnovationSection />
      </div>

    </main>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual"
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isLoading])

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }, [])

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      <LenisProvider
        options={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        }}
      >
        <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
          <MainContent isReady={showContent} />
        </div>
      </LenisProvider>
    </>
  )
}
