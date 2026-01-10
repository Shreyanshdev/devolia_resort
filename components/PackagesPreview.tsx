"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "./animations/gsap-utils";
import { DiamondSeparator } from "./PremiumSVGs";

// Package options based on venue combinations
const packages = [
    {
        name: "Poolside Experience",
        tagline: "Intimate Celebrations",
        description: "Perfect for pre-wedding ceremonies and intimate gatherings with royal décor options.",
        venues: ["Poolside Deck"],
        features: [
            "150-200 Guests",
            "Haldi & Mehendi Setup",
            "Photoshoot Ready",
            "Basic Decoration",
            "Catering Available",
        ],
        idealFor: "Pre-wedding, Birthdays, Engagement",
    },
    {
        name: "Complete Package",
        tagline: "Most Popular Choice",
        description: "Book one main ground with poolside for the complete wedding experience across multiple events.",
        venues: ["Sanskar/Sagun Ground", "Poolside Deck"],
        features: [
            "500+ Guests (Ground)",
            "150-200 Guests (Poolside)",
            "Dedicated Mandap with Stage",
            "AC for Midnight Ceremonies",
            "Premium Decoration",
            "Multi-cuisine Catering",
            "Event Coordinator",
        ],
        idealFor: "Full Wedding Celebration",
        featured: true,
    },
    {
        name: "Full Estate",
        tagline: "Exclusive Experience",
        description: "Book all three venues for maximum flexibility, privacy, and the ultimate celebration experience.",
        venues: ["Sanskar Ground", "Sagun Ground", "Poolside Deck"],
        features: [
            "1000+ Total Capacity",
            "All Three Venues",
            "Complete Privacy",
            "Parallel Event Capability",
            "Custom Theme Design",
            "Full Accommodation",
            "Personal Concierge",
        ],
        idealFor: "Large Families, VIP Celebrations",
    },
];

export default function PackagesPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const cards = cardsRef.current?.querySelectorAll(".package-card");
            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 60, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.15,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 80%",
                            once: true,
                        },
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                padding: "var(--section-padding-y) var(--section-padding-x)",
                backgroundColor: "var(--background)",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                    <DiamondSeparator />
                    <p
                        style={{
                            fontSize: "var(--text-sm)",
                            textTransform: "uppercase",
                            letterSpacing: "0.25em",
                            color: "var(--accent)",
                            marginTop: "var(--space-lg)",
                            marginBottom: "var(--space-sm)",
                        }}
                    >
                        Flexible Booking
                    </p>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2rem, 5vw, var(--text-5xl))",
                            fontWeight: 400,
                            color: "var(--color-charcoal)",
                            marginBottom: "var(--space-md)",
                        }}
                    >
                        Booking Options
                    </h2>
                    <p
                        style={{
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "var(--color-brown)",
                            maxWidth: "600px",
                            margin: "0 auto",
                            padding: "0 var(--space-md)",
                        }}
                    >
                        Choose the venues that fit your celebration. Most families book a ground + poolside.
                    </p>
                </div>

                {/* Packages Grid */}
                <div
                    ref={cardsRef}
                    className="packages-grid"
                    style={{
                        display: "grid",
                        gap: "var(--space-lg)",
                        alignItems: "stretch",
                    }}
                >
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className="package-card"
                            style={{
                                padding: "var(--space-xl)",
                                backgroundColor: pkg.featured ? "var(--color-charcoal)" : "var(--background-alt)",
                                color: pkg.featured ? "var(--color-ivory)" : "var(--color-charcoal)",
                                borderRadius: "var(--border-radius-lg)",
                                border: pkg.featured ? "2px solid var(--accent)" : "1px solid rgba(196, 169, 98, 0.15)",
                                position: "relative",
                                overflow: "hidden",
                                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                            onMouseEnter={(e) => {
                                if (!pkg.featured) {
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!pkg.featured) {
                                    e.currentTarget.style.borderColor = "rgba(196, 169, 98, 0.15)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }
                            }}
                        >
                            {/* Featured badge */}
                            {pkg.featured && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                        padding: "6px 14px",
                                        backgroundColor: "var(--accent)",
                                        color: "var(--color-charcoal)",
                                        fontSize: "var(--text-xs)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        borderRadius: "50px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Most Popular
                                </div>
                            )}

                            {/* Package Name */}
                            <p
                                style={{
                                    fontSize: "var(--text-xs)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    color: "var(--accent)",
                                    marginBottom: "var(--space-xs)",
                                }}
                            >
                                {pkg.tagline}
                            </p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "clamp(1.5rem, 3vw, var(--text-2xl))",
                                    fontWeight: 400,
                                    marginBottom: "var(--space-sm)",
                                }}
                            >
                                {pkg.name}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: "var(--text-sm)",
                                    fontWeight: 300,
                                    lineHeight: 1.6,
                                    marginBottom: "var(--space-md)",
                                    opacity: 0.85,
                                }}
                            >
                                {pkg.description}
                            </p>

                            {/* Venues Included */}
                            <div style={{ marginBottom: "var(--space-md)" }}>
                                <p
                                    style={{
                                        fontSize: "var(--text-xs)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        marginBottom: "8px",
                                        opacity: 0.7,
                                    }}
                                >
                                    Venues Included
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                    {pkg.venues.map((venue) => (
                                        <span
                                            key={venue}
                                            style={{
                                                padding: "4px 10px",
                                                fontSize: "var(--text-xs)",
                                                backgroundColor: pkg.featured ? "rgba(196, 169, 98, 0.2)" : "rgba(196, 169, 98, 0.1)",
                                                color: "var(--accent)",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            {venue}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    marginBottom: "var(--space-lg)",
                                    flex: 1,
                                }}
                            >
                                {pkg.features.map((feature) => (
                                    <li
                                        key={feature}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            padding: "8px 0",
                                            borderBottom: `1px solid ${pkg.featured ? "rgba(255,251,245,0.1)" : "rgba(45,42,38,0.08)"}`,
                                            fontSize: "var(--text-sm)",
                                            fontWeight: 300,
                                        }}
                                    >
                                        <span style={{ color: "var(--accent)", fontSize: "12px" }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Ideal For */}
                            <p
                                style={{
                                    fontSize: "var(--text-xs)",
                                    fontStyle: "italic",
                                    opacity: 0.7,
                                    marginBottom: "var(--space-lg)",
                                }}
                            >
                                Ideal for: {pkg.idealFor}
                            </p>

                            {/* CTA */}
                            <Link
                                href="/contact"
                                className={`btn ${pkg.featured ? "btn-secondary" : "btn-primary"}`}
                                style={{
                                    width: "100%",
                                    justifyContent: "center",
                                    color: pkg.featured ? "var(--color-ivory)" : undefined,
                                    marginTop: "auto",
                                }}
                            >
                                Get Quote
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "var(--space-xl)",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-brown)",
                        fontStyle: "italic",
                        padding: "0 var(--space-md)",
                    }}
                >
                    All bookings are customizable. Contact us for personalized quotations based on your requirements.
                </p>
            </div>

            {/* Responsive styles */}
            <style jsx global>{`
                .packages-grid {
                    grid-template-columns: repeat(3, 1fr);
                }
                
                @media (max-width: 1024px) {
                    .packages-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .packages-grid > *:last-child {
                        grid-column: span 2;
                    }
                }
                
                @media (max-width: 700px) {
                    .packages-grid {
                        grid-template-columns: 1fr;
                    }
                    .packages-grid > *:last-child {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </section>
    );
}
