"use client"

import Image from "next/image"

const SUBTITLE_TEXT = "UNLEASH YOUR STYLE"

export function PhilosophySection() {
  return (
    <section className="relative flex min-h-screen items-center bg-transparent">
      {/* 
        The background gradient is now gracefully handled globally in page.tsx 
        to allow seamless crossfading between sections via GSAP.
      */}

      {/*
        Content panel — right half, z-20 so the 3D canvas (z-30) overlaps.
        Model occupies the left ~55% via 3D positioning.
      */}
      <div className="relative z-20 ml-auto flex w-full flex-col items-center justify-center px-8 py-20 text-center md:w-[48%] md:items-center md:px-12 lg:px-16">

        {/* VISIONARY headline */}
        <h2
          className="gs-scene-1-title gs-dynamic-text mb-3 font-sans font-black uppercase text-white"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 900,
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          VISIONARY
        </h2>

        {/* Subtitle — below VISIONARY */}
        <div className="gs-scene-1-sub mb-5">
          <span
            className="gs-dynamic-text-light font-sans uppercase tracking-[0.3em] text-white/60"
            style={{ fontWeight: 400, fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)" }}
          >
            {SUBTITLE_TEXT}
          </span>
        </div>

        {/* Description */}
        <p
          className="gs-scene-1-p gs-dynamic-text-light font-sans leading-relaxed text-white/40"
          style={{
            maxWidth: "38ch",
            lineHeight: 1.75,
            fontWeight: 400,
            fontSize: "clamp(0.7rem, 1.1vw, 0.82rem)",
          }}
        >
          Experience the pinnacle of optical engineering. Designed to
          provide unmatched clarity while making a bold statement.
        </p>
      </div>

      {/* SCROLL indicator — bottom center, just the word */}
      <div className="gs-scene-1-scroll absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <span className="gs-dynamic-text-light font-sans text-[10px] uppercase tracking-[0.25em] text-white/50">
          SCROLL
        </span>
      </div>
    </section>
  )
}
