"use client"

export function CraftSection() {
  return (
    <section
      className="relative w-full h-[150vh]"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Background color and gradient are handled globally in page.tsx */}
      {/* Sticky container that locks the text on the screen while the user scrolls through the 50vh 'resting' zone */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center p-6">
        {/* Center text content */}
        <div className="relative z-20 flex w-full flex-col items-center justify-center text-center">
          {/* Sans title matching other sections */}
          <h2
            className="gs-scene-2-title gs-dynamic-text mb-6 font-sans text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl"
            style={{
              fontWeight: 900,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              color: "#1a1a2e",
            }}
          >
            Precision Crafted
          </h2>

          {/* Description */}
          <p
            className="gs-scene-2-p gs-dynamic-text-light max-w-lg font-sans text-sm leading-relaxed md:text-base"
            style={{
              lineHeight: 1.8,
              color: "#666666",
            }}
          >
            Every curve is meticulously sculpted to fit the natural contours of your face.
          </p>
        </div>
      </div>
    </section>
  )
}
