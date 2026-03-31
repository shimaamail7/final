"use client"

interface FixedHeaderProps {
  className?: string
  isDark?: boolean
}

export function FixedHeader({ className = "", isDark = true }: FixedHeaderProps) {
  const primaryColor = isDark ? "#ffffff" : "#1a1a2e"
  const mutedColor = isDark ? "#888888" : "#666666"
  const hoverColor = isDark ? "#ffffff" : "#1a1a2e"

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-colors duration-300 md:px-10 lg:px-16 ${className}`}
    >
      {/* Logo - AURA text */}
      <div className="flex items-center">
        <span
          className="font-sans text-xl font-black uppercase tracking-wider transition-colors duration-300"
          style={{
            fontWeight: 900,
            letterSpacing: "0.1em",
            color: primaryColor,
          }}
        >
          AURA
        </span>
      </div>

      {/* Navigation - VISION, CRAFT, LEGACY */}
      <nav className="hidden items-center gap-10 md:flex">
        <a
          href="#philosophy"
          className="font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300"
          style={{ color: mutedColor }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
        >
          Vision
        </a>
        <a
          href="#craft"
          className="font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300"
          style={{ color: mutedColor }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
        >
          Craft
        </a>
        <a
          href="#legacy"
          className="font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300"
          style={{ color: mutedColor }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
        >
          Legacy
        </a>
      </nav>

      {/* Menu button for mobile */}
      <button
        className="flex flex-col gap-1.5 md:hidden"
        aria-label="Open menu"
      >
        <span
          className="transition-colors duration-300"
          style={{
            width: "24px",
            height: "1px",
            backgroundColor: primaryColor,
          }}
        />
        <span
          className="transition-colors duration-300"
          style={{
            width: "16px",
            height: "1px",
            backgroundColor: primaryColor,
          }}
        />
      </button>
    </header>
  )
}
