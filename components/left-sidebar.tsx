"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface Section {
  id: string
  number: string
  label: string
}

interface LeftSidebarProps {
  sections: Section[]
  isVisible?: boolean
  className?: string
  onNavigate?: (sectionId: string) => void
}

export function LeftSidebar({
  sections,
  isVisible = true,
  className = "",
  onNavigate,
}: LeftSidebarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const lineAnimated = useRef(false)

  // Line is always gray - never highlighted
  const lineColor = "#555555"

  // Animate the continuous vertical line on mount
  useEffect(() => {
    if (!lineRef.current || !isVisible || lineAnimated.current) return

    // GSAP fromTo animation for drawing effect
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        onComplete: () => {
          lineAnimated.current = true
        },
      }
    )
  }, [isVisible])

  // Handle click to navigate
  const handleClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId)
    } else {
      // Default smooth scroll behavior
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={`fixed left-6 z-40 md:left-10 lg:left-16 ${className}`}
      style={{
        top: "80px", // Below header
        bottom: "40px", // Above footer area
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-out",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* Single continuous vertical line - always gray, never highlighted */}
      <div
        ref={lineRef}
        className="absolute left-0 top-0"
        style={{
          width: "1px",
          height: "100%",
          backgroundColor: lineColor,
          transform: "scaleY(0) translateZ(0)",
          transformOrigin: "top center",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Navigation items - Philosophy at top, Craft centered, Innovation at bottom */}
      <nav
        className="relative ml-6 flex h-full flex-col justify-between"
        aria-label="Section navigation"
      >
        {sections.map((section, i) => {
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`gs-nav-${i + 1} group flex flex-col items-start gap-1 text-left transition-transform duration-200 hover:translate-x-1`}
              style={{ cursor: "pointer" }}
            >
              <span
                className="gs-dynamic-text-light font-mono text-[10px]"
                style={{
                  color: "#9999", // GSAP will override this via gs-dynamic-text-light when ready, but giving a default
                }}
              >
                {section.number}
              </span>
              <span
                className="gs-dynamic-text font-sans text-xs font-medium uppercase tracking-[0.15em]"
                style={{
                  color: "#ffffff" // default white for Philosophy, GSAP overwrites to dark later
                }}
              >
                {section.label}
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
