"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Logo } from "./logo"

interface HeroProps {
  videoSrc?: string
  title?: string
  subtitle?: string
}

export function Hero({
  videoSrc = "video.mp4",
  title = "Crafting Digital Experiences",
  subtitle = "Where vision meets precision",
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<SVGSVGElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Initial states
    gsap.set([logoRef.current, titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 30,
    })
    gsap.set(overlayRef.current, { opacity: 0 })
    gsap.set(scrollIndicatorRef.current, { opacity: 0, y: -10 })

    // Create entrance timeline
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    })

    // Staggered reveal animation
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.8,
    })
      .to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .to(
        scrollIndicatorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      )

    // Scroll indicator animation (continuous)
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 2,
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient Overlay for legibility */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <Logo
          ref={logoRef}
          className="mb-8 w-48 md:w-64 lg:w-80"
          fill="#ffffff"
        />

        <h1
          ref={titleRef}
          className="mb-4 font-sans text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          {title}
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-md font-sans text-sm font-light tracking-wide text-white/70 md:text-base lg:text-lg"
        >
          {subtitle}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="mb-2 text-xs uppercase tracking-widest text-white/50">
          Scroll
        </span>
        <div className="h-8 w-[1px] bg-white/30" />
      </div>
    </section>
  )
}
