"use client"

import { useState } from "react"
import { ChevronDown, Menu, X, ArrowRight, LayoutGrid, LineChart, Eye, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/terms", label: "Terms" },
]

const faqs = [
    {
        question: "What makes Optika lenses different?",
        answer:
            "Optika lenses are manufactured in the Czech Republic using cutting-edge digital technology and tested to the highest industry standards. Every lens is customized to meet the specific needs of the wearer, ensuring unmatched visual clarity and comfort.",
    },
    {
        question: "How long does delivery take?",
        answer:
            "Most orders are delivered within 48 hours of production completion. We optimize every step of our workflow to ensure your lenses arrive on time and ready to perform.",
    },
    {
        question: "Can I customize my orders?",
        answer:
            "Yes. Our digital ordering system allows eye care professionals to customize every aspect of their lens orders. You control the specifications, and we handle the precision manufacturing.",
    },
    {
        question: "What quality standards do you follow?",
        answer:
            "Every lens meets global industry standards and passes through rigorous quality controls at every stage of production. We test what matters and deliver what works.",
    },
    {
        question: "Do you offer bulk ordering?",
        answer:
            "We serve eye care professionals of all sizes. Our system scales to your needs, whether you are ordering a few lenses or managing high-volume production.",
    },
    {
        question: "Reach out to our team for more information.",
        answer:
            "Our lenses combine Czech precision manufacturing with advanced digital technology. Each lens is customized to the wearer's exact specifications and tested rigorously before delivery. You get clarity that performs.",
    },
    {
        question: "What sets Optika apart?",
        answer:
            "We handle the ordering through a streamlined digital system designed for eye care professionals. You specify what you need, we manufacture with precision, and delivery happens within 48 hours. The process is built for efficiency.",
    },
    {
        question: "How does ordering work?",
        answer:
            "Every lens passes through strict quality controls at every production stage. We test what matters and only ship what meets our standards. Your patients will notice the difference immediately.",
    },
]

export default function AboutPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        })
    }

    return (
        <div className="relative min-h-screen w-full bg-white">
            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/about-hero.jpg"
                    alt="Modern office interior with natural lighting"
                    fill
                    className="object-cover object-center"
                    priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />



                {/* Hero Content */}
                <div className="relative z-10 flex h-full items-center">
                    <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16">
                        <div className="max-w-md">
                            {/* Eyebrow text */}
                            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:mb-4 sm:text-xs">
                                Our Story
                            </p>

                            {/* Main Heading */}
                            <h1 className="mb-4 text-[28px] font-bold uppercase leading-[0.95] tracking-tight text-white sm:mb-5 sm:text-[36px] md:text-[44px] lg:text-[52px]">
                                Exceptional
                                <br />
                                Optical
                                <br />
                                Solutions
                            </h1>

                            {/* Description */}
                            <p className="mb-8 max-w-[280px] text-[12px] leading-[1.6] text-white/60 sm:mb-10 sm:max-w-[300px] sm:text-[13px]">
                                Optika delivers to you Premium Digital Lenses and Solutions manufactured to the highest standards.
                            </p>

                            {/* Scroll Down Button */}
                            <button
                                onClick={scrollToContent}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-all hover:border-white hover:bg-white sm:h-10 sm:w-10 [&:hover>svg]:text-black"
                                aria-label="Scroll down"
                            >
                                <ChevronDown className="h-4 w-4 text-white transition-colors sm:h-5 sm:w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 2: BEHIND OPTIKA
      ═══════════════════════════════════════════════════════════════════════════ */}

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 3: GENUINE ASPIRATION BANNER
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="w-full bg-[#1a1a1a] px-6 py-14 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-[900px] text-center">
                    <h2 className="mb-4 text-[22px] font-bold uppercase leading-[1.1] tracking-tight text-white sm:mb-5 sm:text-[28px] md:text-[34px] lg:text-[40px]">
                        Genuine Aspiration Toward
                        <br />
                        Excellence
                    </h2>
                    <p className="mx-auto max-w-[600px] text-[12px] leading-[1.7] text-white/60 sm:text-[13px] md:text-sm">
                        Optika positions itself with unwavering commitment to industry best practices. We deliver and manufacture what works and we prioritize performance.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 4: THREE PRODUCT CARDS
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="w-full bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="relative flex flex-col">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Person wearing glasses"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-4 left-4 rounded bg-black/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white">
                                ®Lenses
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-gray-100 p-6 sm:p-8">
                            <div>
                                <h3 className="mb-3 text-[14px] font-bold uppercase tracking-wide text-black sm:text-[15px]">
                                    Exceptional
                                    <br />
                                    Performance
                                </h3>
                                <p className="text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                    {"Optika's"} digital ordering system allows eye care professionals to customize every aspect of their lens orders. You control the specifications, and we handle the precision manufacturing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative flex flex-col">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Woman wearing stylish sunglasses"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-4 left-4 text-[14px] font-bold tracking-tight text-white sm:text-[16px]">
                                OPTIKA
                            </div>
                            <div className="absolute top-4 right-4">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
                                    <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <circle cx="20" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6 sm:p-8">
                            <div>
                                <h3 className="mb-3 text-[14px] font-bold uppercase tracking-wide text-black sm:text-[15px]">
                                    High Standard
                                    <br />
                                    Testing
                                </h3>
                                <p className="text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                    Through our certified laboratories, Optika tests all lenses under varying conditions. To validate optical quality, every lens passes strict quality checks before delivery.
                                </p>
                            </div>
                            <button className="mt-6 inline-flex w-fit items-center gap-2 border border-black bg-white px-5 py-2.5 text-[11px] font-medium text-black transition-colors hover:bg-black hover:text-white sm:text-xs">
                                Contact us
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative flex flex-col">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Person with premium eyewear"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-4 right-4">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
                                    <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <circle cx="20" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-gray-100 p-6 sm:p-8">
                            <div>
                                <h3 className="mb-3 text-[14px] font-bold uppercase tracking-wide text-black sm:text-[15px]">
                                    Customised
                                    <br />
                                    Solutions
                                </h3>
                                <p className="text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                    Optikamic offers flexibility, integration, and access to world-class solutions. Our advanced professionals increases control, efficiency, and collaboration through technology investments and pursuit of glory.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 5: EVERYTHING YOU NEED TO SUCCEED
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="w-full bg-white px-6 py-16 sm:px-10 sm:py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
                <div className="mx-auto max-w-[1000px]">
                    {/* Section Header */}
                    <div className="mb-10 text-center sm:mb-12 lg:mb-16">
                        <h2 className="mb-3 text-[22px] font-bold uppercase tracking-tight text-black sm:text-[28px] md:text-[32px] lg:text-[36px]">
                            Everything You Need
                            <br />
                            To Succeed
                        </h2>
                        <p className="mx-auto max-w-[500px] text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                            Our integrated platform streamlines every aspect of lens ordering, production, and delivery.
                        </p>
                    </div>

                    {/* 2x2 Feature Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
                        {/* Custom order */}
                        <div className="border border-gray-200 p-6 sm:p-8">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center">
                                <LayoutGrid className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="mb-2 text-[13px] font-bold text-black sm:text-sm">Custom order</h3>
                            <p className="text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                Place detailed orders through our advanced digital system with complete customization options.
                            </p>
                        </div>

                        {/* Production stages */}
                        <div className="border border-gray-200 p-6 sm:p-8">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center">
                                <LineChart className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="mb-2 text-[13px] font-bold text-black sm:text-sm">Production stages</h3>
                            <p className="text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                Follow your lenses through each production phase with complete visibility and control.
                            </p>
                        </div>

                        {/* Real-time tracking */}
                        <div className="border border-gray-200 p-6 sm:p-8">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center">
                                <Eye className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="mb-2 text-[13px] font-bold text-black sm:text-sm">Real-time tracking</h3>
                            <p className="text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                Monitor your lens production at every stage from manufacturing through quality control.
                            </p>
                        </div>

                        {/* Delivery management */}
                        <div className="border border-gray-200 p-6 sm:p-8">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center">
                                <Truck className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="mb-2 text-[13px] font-bold text-black sm:text-sm">Delivery management</h3>
                            <p className="text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                Seamless delivery coordination ensures your lenses arrive on time and in perfect condition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 6: DESIGNED TO PERFORM
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="w-full bg-[#1a1a1a] px-6 py-16 sm:px-10 sm:py-20 md:px-12 md:py-24 lg:px-16 lg:py-32">
                <div className="mx-auto max-w-[900px]">
                    <h2 className="text-[24px] font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-[32px] md:text-[40px] lg:text-[48px]">
                        Designed to Perform
                        <br />
                        Well Today and
                        <br />
                        Remain Adaptable
                        <br />
                        Tomorrow.
                    </h2>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 7: FAQ
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="w-full bg-white px-6 py-16 sm:px-10 sm:py-20 md:px-12 md:py-24 lg:px-16">
                <div className="mx-auto max-w-[1100px]">
                    {/* Header */}
                    <div className="mb-10 sm:mb-12 lg:mb-14">
                        <h2 className="mb-2 text-[28px] font-bold tracking-tight text-black sm:text-[32px] md:text-[36px]">
                            FAQ
                        </h2>
                        <p className="text-[12px] text-gray-500 sm:text-[13px]">
                            Find answers to questions about our lenses and ordering process.
                        </p>
                    </div>

                    {/* Two-column grid */}
                    <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-t border-gray-200 pt-5">
                                <h3 className="mb-2 text-[12px] font-bold text-black sm:text-[13px]">
                                    {faq.question}
                                </h3>
                                <p className="text-[11px] leading-[1.7] text-gray-500 sm:text-xs">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 8: STILL HAVE QUESTIONS BANNER
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="relative w-full overflow-hidden" style={{ minHeight: "200px" }}>
                {/* Background Image */}
                <Image
                    src="/images/contact-bg.jpg"
                    alt="Team discussion"
                    fill
                    className="object-cover object-center"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex min-h-[200px] flex-col justify-end px-6 py-10 sm:px-10 sm:py-12 md:px-12 lg:px-16">
                    <h2 className="text-[20px] font-bold text-white sm:text-[24px] md:text-[28px]">
                        Still have questions?
                    </h2>
                    <p className="mt-1 text-[11px] text-white/60 sm:text-xs">
                        Questions about lenses or ordering or even about us?
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 9: CONTACT US / ENQUIRY FORM
      ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="w-full bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Contact us */}
                    <div className="flex flex-col justify-between border-b border-gray-200 px-6 py-10 sm:border-b-0 sm:border-r sm:px-10 sm:py-12 md:px-12 lg:px-16">
                        <div>
                            <h3 className="text-[16px] font-bold text-black sm:text-[18px]">Contact us</h3>
                            <p className="mt-3 max-w-[280px] text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                Reach out straight to our mail and our teams will reach back right away
                            </p>
                        </div>
                        <button className="mt-8 inline-flex w-fit items-center gap-3 bg-black px-6 py-3 text-[11px] font-medium text-white transition-colors hover:bg-gray-800 sm:text-xs">
                            Contact us
                            <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                    </div>

                    {/* Enquiry form */}
                    <div className="flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 md:px-12 lg:px-16">
                        <div>
                            <h3 className="text-[16px] font-bold text-black sm:text-[18px]">Enquiry from</h3>
                            <p className="mt-3 max-w-[320px] text-[11px] leading-[1.6] text-gray-500 sm:text-xs">
                                Fill out our enquiry and select from our pre defined categories and specify your requirements, so we deliver faster, more precise response to your Enquiry.
                            </p>
                        </div>
                        <button className="mt-8 inline-flex w-fit items-center gap-3 bg-black px-6 py-3 text-[11px] font-medium text-white transition-colors hover:bg-gray-800 sm:text-xs">
                            Fill Form
                            <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </section>


        </div>
    )
}
