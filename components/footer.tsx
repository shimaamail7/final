import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

// Custom X (Twitter) icon since lucide doesn't have the new X logo
function XIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

const navLinksCol1 = [
    { label: "About us", href: "/about" },
    { label: "Our lenses", href: "/lenses" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Order system", href: "/order-system" },
    { label: "Quality standards", href: "/quality-standards" },
]

const navLinksCol2 = [

    { label: "Blog", href: "/blog" },
    { label: "Support", href: "/support" },
    { label: "Contact us", href: "/contact" },
    { label: "Resources", href: "/resources" },
    { label: "Manufacturing", href: "/manufacturing" },
]

const legalLinks = [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Cookies settings", href: "/cookies" },
]

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: XIcon, href: "https://x.com", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
    return (
        <footer className="bg-black pt-20 2xl:pt-10 text-white">
            {/* Main footer content */}
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 xl:px-20 ">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Logo and contact info */}
                    <div className="space-y-6 ">
                        {/* Script logo */}
                        <Link href="/" className="inline-block">
                            <span className="font-serif text-2xl italic text-white">Optika</span>
                        </Link>

                        {/* Address */}
                        <div>
                            <p className="text-xs font-medium text-gray-400">Address</p>
                            <p className="mt-1 text-sm text-white">Prague, Czech Republic</p>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="text-xs font-medium text-gray-400">Contact</p>
                            <div className="mt-1 space-y-0.5">
                                <Link
                                    href="tel:+420257311111"
                                    className="block text-sm text-white underline hover:text-gray-300"
                                >
                                    +420 2 5731 1111
                                </Link>
                                <Link
                                    href="mailto:hello@optika.com"
                                    className="block text-sm text-white underline hover:text-gray-300"
                                >
                                    hello@optika.com
                                </Link>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-gray-400"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Empty spacer on larger screens */}
                    <div className="hidden lg:block " />
                    <div className="flex gap-3 flex-1 w-full px-4 md:px-0 xl:w-[25vw] justify-between">
                        {/* Nav column 1 */}
                        <nav aria-label="Footer navigation column 1">
                            <ul className="space-y-3">
                                {navLinksCol1.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white transition-colors hover:text-gray-400"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Nav column 2 */}
                        <nav aria-label="Footer navigation column 2">
                            <ul className="space-y-3">
                                {navLinksCol2.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white transition-colors hover:text-gray-400"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-10 lg:px-16 xl:px-20">
                    <p className="text-xs text-gray-400">
                        &copy; 2025 Optika. All rights reserved.
                    </p>
                    <nav aria-label="Legal links" className="flex flex-wrap items-center gap-4 sm:gap-6">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-xs text-gray-400 underline transition-colors hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}
