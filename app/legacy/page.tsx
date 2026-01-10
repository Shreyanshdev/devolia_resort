"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { gsap, ScrollTrigger } from "@/components/animations/gsap-utils";
import { OrnamentDivider, DiamondSeparator, BotanicalElement, TrustIcon, ExcellenceIcon, CareIcon, LegacyIcon } from "@/components/PremiumSVGs";

// Timeline milestones
const milestones = [
    { year: "1985", title: "The Beginning", description: "The foundation of our family's business journey in petroleum trading." },
    { year: "2005", title: "Diversification", description: "Expansion into hospitality with a vision to create memorable experiences." },
    { year: "2015", title: "Devolia Born", description: "The dream of a premium wedding destination takes shape on our ancestral land." },
    { year: "2018", title: "Grand Opening", description: "Devolia Resort opens its doors, hosting its first celebrations." },
    { year: "2024", title: "New Horizons", description: "Expansion plans including a boutique hotel to serve our growing family of guests." },
];

// Business ventures
const businesses = [
    {
        name: "Devolia Resort",
        category: "Hospitality",
        description: "Our flagship property — a premium wedding and event destination that has hosted over 500+ celebrations.",
        status: "Established",
        image: "/images/img1.png", // REPLACE: business-resort.jpg
        link: "/",
    },
    {
        name: "Petroleum Division",
        category: "Energy",
        description: "The bedrock of our family enterprise, operating in petroleum trading and distribution for nearly four decades.",
        status: "Since 1985",
        image: "/images/img1.png", // REPLACE: business-petroleum.jpg
        link: null,
    },
    {
        name: "Boutique Hotel",
        category: "Hospitality",
        description: "Coming soon — an intimate luxury hotel for destination weddings and curated getaways.",
        status: "Coming 2025",
        image: "/images/img1.png", // REPLACE: business-hotel.jpg
        link: null,
    },
];

// Values with Premium SVG Icons
const values = [
    { Icon: TrustIcon, title: "Trust", description: "Built over generations, earned through every interaction." },
    { Icon: ExcellenceIcon, title: "Excellence", description: "No detail too small, no standard too high." },
    { Icon: CareIcon, title: "Care", description: "Every guest is family, every celebration is personal." },
    { Icon: LegacyIcon, title: "Legacy", description: "Building memories that outlast generations." },
];

export default function LegacyPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Hero parallax
            const heroBg = heroRef.current?.querySelector(".hero-bg");
            if (heroBg) {
                gsap.to(heroBg, {
                    y: "25%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            }

            // Timeline animation
            const timelineItems = document.querySelectorAll(".timeline-item");
            timelineItems.forEach((item, i) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            once: true,
                        },
                    }
                );
            });

            // Fade sections
            const sections = document.querySelectorAll(".fade-section");
            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            once: true,
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef}>
            <Navbar />

            {/* ============================================= */}
            {/* HERO SECTION */}
            {/* ============================================= */}
            <section
                ref={heroRef}
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor: "var(--color-charcoal)",
                }}
            >
                <div
                    className="hero-bg"
                    style={{
                        position: "absolute",
                        top: "-10%",
                        left: 0,
                        width: "100%",
                        height: "120%",
                        zIndex: 0,
                    }}
                >
                    <Image
                        src="/images/img1.png" // REPLACE: legacy-hero.jpg (family portrait or heritage shot)
                        alt="The Legacy of Devolia"
                        fill
                        style={{ objectFit: "cover", opacity: 0.3 }}
                        priority
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(45,42,38,0.5) 0%, rgba(45,42,38,0.9) 100%)",
                        zIndex: 1,
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        textAlign: "center",
                        maxWidth: "950px",
                        padding: "0 var(--section-padding-x)",
                    }}
                >
                    <OrnamentDivider width={120} color="var(--accent)" />

                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-sm)",
                            textTransform: "uppercase",
                            letterSpacing: "0.4em",
                            color: "var(--accent)",
                        }}
                    >
                        Our Story
                    </p>

                    <h1
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(3rem, 8vw, 6rem)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-md)",
                            lineHeight: 1.1,
                        }}
                    >
                        A Legacy of<br />
                        <span style={{ color: "var(--accent)" }}>Hospitality</span>
                    </h1>

                    <p
                        style={{
                            marginTop: "var(--space-xl)",
                            fontSize: "var(--text-xl)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.85)",
                            maxWidth: "700px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        For nearly four decades, our family has built enterprises on a simple
                        foundation: trust, excellence, and an unwavering commitment to those we serve.
                    </p>
                </div>
            </section>

            {/* ============================================= */}
            {/* FAMILY STORY */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--background)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "var(--space-2xl)",
                            alignItems: "center",
                        }}
                    >
                        {/* Image */}
                        <div
                            style={{
                                position: "relative",
                                height: "600px",
                                borderRadius: "var(--border-radius-lg)",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/images/img1.png" // REPLACE: family-photo.jpg (warm family portrait)
                                alt="The Family Behind Devolia"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    left: "20px",
                                    backgroundColor: "var(--color-ivory)",
                                    padding: "15px 25px",
                                    borderRadius: "var(--border-radius-sm)",
                                }}
                            >
                                <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-lg)", color: "var(--color-charcoal)" }}>
                                    The Devolia Family
                                </p>
                                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-brown)", marginTop: "2px" }}>
                                    Three Generations of Hospitality
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <DiamondSeparator />
                            <h2
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "var(--text-4xl)",
                                    fontWeight: 400,
                                    color: "var(--color-charcoal)",
                                    marginTop: "var(--space-lg)",
                                    lineHeight: 1.2,
                                }}
                            >
                                From Humble Beginnings<br />
                                to Celebrated Destinations
                            </h2>

                            <p
                                style={{
                                    marginTop: "var(--space-lg)",
                                    fontSize: "var(--text-lg)",
                                    fontWeight: 300,
                                    color: "var(--color-brown)",
                                    lineHeight: 1.8,
                                }}
                            >
                                What started as a small petroleum trading business in 1985 has grown into
                                a diversified family enterprise spanning energy and hospitality. But through
                                every venture, one thing has remained constant: our belief that business is
                                about people, relationships, and trust.
                            </p>

                            <p
                                style={{
                                    marginTop: "var(--space-md)",
                                    fontSize: "var(--text-lg)",
                                    fontWeight: 300,
                                    color: "var(--color-brown)",
                                    lineHeight: 1.8,
                                }}
                            >
                                Devolia Resort was born from a simple dream — to create a place where families
                                come together to celebrate life's most precious moments. On land that has been
                                in our family for generations, we built not just a venue, but a home away from
                                home for every guest who walks through our gates.
                            </p>

                            <blockquote
                                style={{
                                    marginTop: "var(--space-xl)",
                                    paddingLeft: "var(--space-lg)",
                                    borderLeft: "3px solid var(--accent)",
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "var(--text-xl)",
                                    fontStyle: "italic",
                                    color: "var(--color-charcoal)",
                                    lineHeight: 1.5,
                                }}
                            >
                                "We don't just host events — we become part of your family's story."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* TIMELINE - OUR JOURNEY */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--color-charcoal)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                        <OrnamentDivider width={80} color="var(--accent)" />
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-ivory)", marginTop: "var(--space-lg)" }}>
                            Our Journey
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div style={{ position: "relative" }}>
                        {/* Center line */}
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: 0,
                                bottom: 0,
                                width: "2px",
                                backgroundColor: "rgba(196, 169, 98, 0.3)",
                                transform: "translateX(-50%)",
                            }}
                        />

                        {milestones.map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className="timeline-item"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "var(--space-xl)",
                                    justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                                }}
                            >
                                <div
                                    style={{
                                        width: "45%",
                                        padding: "var(--space-lg)",
                                        backgroundColor: "rgba(255, 251, 245, 0.05)",
                                        borderRadius: "var(--border-radius-lg)",
                                        border: "1px solid rgba(196, 169, 98, 0.2)",
                                        textAlign: index % 2 === 0 ? "right" : "left",
                                        order: index % 2 === 0 ? 0 : 1,
                                    }}
                                >
                                    <p style={{ fontSize: "var(--text-sm)", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em" }}>
                                        {milestone.year}
                                    </p>
                                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", color: "var(--color-ivory)", marginTop: "var(--space-xs)" }}>
                                        {milestone.title}
                                    </h3>
                                    <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,251,245,0.7)", marginTop: "var(--space-sm)", lineHeight: 1.6 }}>
                                        {milestone.description}
                                    </p>
                                </div>

                                {/* Center dot */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "16px",
                                        height: "16px",
                                        backgroundColor: "var(--accent)",
                                        borderRadius: "50%",
                                        border: "3px solid var(--color-charcoal)",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* VALUES / PHILOSOPHY */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--background-alt)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                        <DiamondSeparator />
                        <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--accent)" }}>
                            What Guides Us
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                            Our Values
                        </h2>
                    </div>

                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "var(--space-lg)",
                        }}
                    >
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="value-card"
                                style={{
                                    textAlign: "center",
                                    padding: "var(--space-xl)",
                                    backgroundColor: "var(--background)",
                                    borderRadius: "var(--border-radius-lg)",
                                    transition: "all 0.4s ease",
                                    border: "1px solid rgba(196, 169, 98, 0.1)",
                                }}
                            >
                                <div className="value-icon" style={{ display: "inline-block", marginBottom: "var(--space-sm)" }}>
                                    <value.Icon size={40} color="var(--accent)" />
                                </div>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                                    {value.title}
                                </h3>
                                <p style={{ marginTop: "var(--space-sm)", fontSize: "var(--text-sm)", color: "var(--color-brown)", lineHeight: 1.6 }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* OUR BUSINESSES */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--background)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                        <OrnamentDivider width={80} color="var(--accent)" />
                        <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--accent)" }}>
                            Portfolio
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                            Our Ventures
                        </h2>
                        <p style={{ marginTop: "var(--space-md)", fontSize: "var(--text-lg)", color: "var(--color-brown)", maxWidth: "600px", margin: "var(--space-md) auto 0" }}>
                            From energy to hospitality, our family enterprises share a common thread: dedication to excellence.
                        </p>
                    </div>

                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "var(--space-lg)",
                        }}
                    >
                        {businesses.map((business) => (
                            <div
                                key={business.name}
                                style={{
                                    position: "relative",
                                    height: "450px",
                                    borderRadius: "var(--border-radius-lg)",
                                    overflow: "hidden",
                                    cursor: business.link ? "pointer" : "default",
                                }}
                            >
                                <Image
                                    src={business.image}
                                    alt={business.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(45,42,38,0.95) 0%, rgba(45,42,38,0.3) 60%, transparent 100%)" }} />

                                {/* Status Badge */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "20px",
                                        right: "20px",
                                        padding: "6px 14px",
                                        backgroundColor: business.status.includes("Coming") ? "rgba(196, 169, 98, 0.9)" : "rgba(74, 103, 65, 0.9)",
                                        color: business.status.includes("Coming") ? "var(--color-charcoal)" : "var(--color-ivory)",
                                        fontSize: "var(--text-xs)",
                                        fontWeight: 600,
                                        borderRadius: "50px",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    {business.status}
                                </div>

                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-lg)" }}>
                                    <p style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)" }}>
                                        {business.category}
                                    </p>
                                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-ivory)", marginTop: "var(--space-xs)" }}>
                                        {business.name}
                                    </h3>
                                    <p style={{ marginTop: "var(--space-sm)", fontSize: "var(--text-sm)", color: "rgba(255,251,245,0.8)", lineHeight: 1.6 }}>
                                        {business.description}
                                    </p>
                                    {business.link && (
                                        <Link
                                            href={business.link}
                                            style={{
                                                display: "inline-block",
                                                marginTop: "var(--space-md)",
                                                fontSize: "var(--text-sm)",
                                                color: "var(--accent)",
                                                textDecoration: "none",
                                                borderBottom: "1px solid var(--accent)",
                                                paddingBottom: "2px",
                                            }}
                                        >
                                            Explore →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* CLOSING CTA */}
            {/* ============================================= */}
            <section
                style={{
                    position: "relative",
                    padding: "calc(var(--section-padding-y) * 2) var(--section-padding-x)",
                    backgroundColor: "var(--color-charcoal)",
                    textAlign: "center",
                    overflow: "hidden",
                }}
            >
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                        src="/images/img1.png" // REPLACE: legacy-cta.jpg
                        alt="Devolia Resort"
                        fill
                        style={{ objectFit: "cover", opacity: 0.15 }}
                    />
                </div>

                <div className="fade-section" style={{ position: "relative", zIndex: 10, maxWidth: "800px", margin: "0 auto" }}>
                    <BotanicalElement size={50} color="var(--accent)" />

                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "var(--text-4xl)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-lg)",
                            lineHeight: 1.3,
                        }}
                    >
                        Become Part of<br />
                        <span style={{ color: "var(--accent)" }}>Our Growing Legacy</span>
                    </h2>

                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.75)",
                            lineHeight: 1.7,
                        }}
                    >
                        Join the hundreds of families who have celebrated their most precious
                        moments with us. Your story becomes part of ours.
                    </p>

                    <div style={{ marginTop: "var(--space-xl)", display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Story
                        </Link>
                        <Link href="/gallery" className="btn btn-glass">
                            View Gallery
                        </Link>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style jsx global>{`
                /* Value Card Animations */
                .value-card:hover {
                    border-color: var(--accent) !important;
                    box-shadow: 0 10px 30px rgba(196, 169, 98, 0.1);
                    transform: translateY(-4px);
                }
                
                .value-card:hover .value-icon {
                    transform: scale(1.15);
                }
                
                .value-icon {
                    transition: transform 0.4s ease;
                }
                
                @media (max-width: 1024px) {
                    div[style*="grid-template-columns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                    div[style*="grid-template-columns: repeat(3, 1fr)"] {
                        grid-template-columns: 1fr !important;
                    }
                    div[style*="grid-template-columns: repeat(4, 1fr)"] {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    .timeline-item {
                        justify-content: center !important;
                    }
                    .timeline-item > div:first-child {
                        width: 80% !important;
                        text-align: center !important;
                    }
                }

                @media (max-width: 600px) {
                    div[style*="grid-template-columns: repeat(4, 1fr)"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
