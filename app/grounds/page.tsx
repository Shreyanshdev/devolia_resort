"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AutoScroller from "@/components/AutoScroller";
import { gsap, ScrollTrigger } from "@/components/animations/gsap-utils";
import { OrnamentDivider, DiamondSeparator, BotanicalElement } from "@/components/PremiumSVGs";

// Venue Data
const venues = [
    {
        id: "sanskar",
        name: "Sanskar Ground",
        tagline: "Where Grand Celebrations Begin",
        description: "Our flagship wedding ground, designed to host the most magnificent celebrations. With space for hundreds of guests, elegant lighting arrangements, and a dedicated mandap area, Sanskar Ground transforms every wedding into an unforgettable spectacle.",
        capacity: "500+ Guests",
        area: "15,000 sq. ft.",
        features: [
            "Dedicated Mandap Area with Stage",
            "Climate-Controlled for All Seasons",
            "AC Facility for Midnight Ceremonies",
            "Premium Sound & Lighting Systems",
            "Separate Bride & Groom Waiting Areas",
            "Direct Kitchen Access for Catering",
        ],
        idealFor: ["Grand Weddings", "Receptions", "Large Corporate Events", "Sangeet Nights"],
        color: "#C4A962",
        images: [
            { src: "/images/img1.png", alt: "Sanskar Ground Overview" }, // REPLACE: sanskar-1.jpg
            { src: "/images/img1.png", alt: "Sanskar Mandap Setup" }, // REPLACE: sanskar-2.jpg
            { src: "/images/img1.png", alt: "Sanskar Wedding Decor" }, // REPLACE: sanskar-3.jpg
            { src: "/images/img1.png", alt: "Sanskar Night Event" }, // REPLACE: sanskar-4.jpg
            { src: "/images/img1.png", alt: "Sanskar Stage Setup" }, // REPLACE: sanskar-5.jpg
        ],
    },
    {
        id: "sagun",
        name: "Sagun Ground",
        tagline: "A Canvas for Your Dreams",
        description: "Equally grand as its twin, Sagun Ground offers the same premium experience with a distinct character. Perfect for families who wish to host parallel events or desire privacy for intimate ceremonies within the celebration.",
        capacity: "500+ Guests",
        area: "15,000 sq. ft.",
        features: [
            "Dedicated Mandap Area with Stage",
            "Fully Covered for Winter Events",
            "Independent Power & Sound Systems",
            "Flexible Layout Configurations",
            "Premium Guest Seating Arrangements",
            "Valet Parking Access",
        ],
        idealFor: ["Grand Weddings", "Receptions", "Parallel Events", "Large Gatherings"],
        color: "#8B7355",
        images: [
            { src: "/images/img1.png", alt: "Sagun Ground Overview" }, // REPLACE: sagun-1.jpg
            { src: "/images/img1.png", alt: "Sagun Wedding Setup" }, // REPLACE: sagun-2.jpg
            { src: "/images/img1.png", alt: "Sagun Reception" }, // REPLACE: sagun-3.jpg
            { src: "/images/img1.png", alt: "Sagun Night Lighting" }, // REPLACE: sagun-4.jpg
            { src: "/images/img1.png", alt: "Sagun Mandap" }, // REPLACE: sagun-5.jpg
        ],
    },
    {
        id: "poolside",
        name: "Poolside Deck",
        tagline: "Intimate Moments, Royal Settings",
        description: "A versatile space that transforms for every occasion. From vibrant Haldi ceremonies to romantic photoshoots, the Poolside Deck offers a stunning backdrop with royal-themed décor possibilities and an intimate atmosphere.",
        capacity: "150-200 Guests",
        area: "5,000 sq. ft.",
        features: [
            "Stunning Water Feature Backdrop",
            "Royal Theme Décor Options",
            "Perfect Natural Lighting for Photos",
            "Intimate & Cozy Atmosphere",
            "Flexible Furniture Arrangements",
            "Evening Fairy Light Setup",
        ],
        idealFor: ["Haldi Ceremony", "Mehendi Function", "Birthdays", "Photoshoots", "Engagement", "Cocktail Party"],
        color: "#4A6741",
        images: [
            { src: "/images/img1.png", alt: "Poolside Overview" }, // REPLACE: poolside-1.jpg
            { src: "/images/img1.png", alt: "Poolside Haldi" }, // REPLACE: poolside-2.jpg
            { src: "/images/img1.png", alt: "Poolside Mehendi" }, // REPLACE: poolside-3.jpg
            { src: "/images/img1.png", alt: "Poolside Photoshoot" }, // REPLACE: poolside-4.jpg
            { src: "/images/img1.png", alt: "Poolside Birthday" }, // REPLACE: poolside-5.jpg
        ],
    },
];

// Booking Combinations
const bookingOptions = [
    {
        title: "Complete Package",
        venues: ["Sanskar Ground", "Poolside Deck"],
        description: "Most Popular — Host your grand wedding on Sanskar and all pre-wedding ceremonies at the Poolside.",
        popular: true,
    },
    {
        title: "Full Estate",
        venues: ["Sanskar Ground", "Sagun Ground", "Poolside Deck"],
        description: "The Ultimate Experience — Book all three venues for maximum flexibility and privacy.",
        popular: false,
    },
    {
        title: "Twin Grounds",
        venues: ["Sanskar Ground", "Sagun Ground"],
        description: "Perfect for parallel ceremonies or very large guest lists requiring two separate spaces.",
        popular: false,
    },
];

export default function GroundsPage() {
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

            // Fade in sections
            const sections = document.querySelectorAll(".fade-section");
            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
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
                        src="/images/img1.png" // REPLACE: grounds-hero.jpg (aerial view of all grounds)
                        alt="Devolia Resort Grounds"
                        fill
                        style={{ objectFit: "cover", opacity: 0.35 }}
                        priority
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(45,42,38,0.4) 0%, rgba(45,42,38,0.85) 100%)",
                        zIndex: 1,
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        textAlign: "center",
                        maxWidth: "1000px",
                        padding: "0 var(--section-padding-x)",
                    }}
                >
                    <OrnamentDivider width={120} color="var(--accent)" />

                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-sm)",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                            color: "var(--accent)",
                        }}
                    >
                        Our Venues
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
                        The Grounds of<br />
                        <span style={{ color: "var(--accent)" }}>Devolia</span>
                    </h1>

                    <p
                        style={{
                            marginTop: "var(--space-xl)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.8)",
                            maxWidth: "650px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Three distinct venues, one seamless experience. From grand wedding celebrations
                        to intimate family rituals — every space tells its own story.
                    </p>

                    {/* Quick Stats */}
                    <div
                        style={{
                            marginTop: "var(--space-2xl)",
                            display: "flex",
                            gap: "var(--space-xl)",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { value: "3", label: "Venues" },
                            { value: "35,000+", label: "Sq. Ft. Total" },
                            { value: "1000+", label: "Guest Capacity" },
                        ].map((stat) => (
                            <div key={stat.label} style={{ textAlign: "center" }}>
                                <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", color: "var(--accent)" }}>
                                    {stat.value}
                                </p>
                                <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,251,245,0.7)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                        textAlign: "center",
                        color: "var(--accent)",
                    }}
                >
                    <div style={{
                        width: "1px",
                        height: "60px",
                        backgroundColor: "var(--accent)",
                        margin: "0 auto",
                        animation: "scrollLine 2s ease-in-out infinite",
                    }} />
                </div>
            </section>

            {/* ============================================= */}
            {/* VENUE SECTIONS */}
            {/* ============================================= */}
            {venues.map((venue, index) => (
                <section
                    key={venue.id}
                    id={venue.id}
                    style={{
                        backgroundColor: index % 2 === 0 ? "var(--background)" : "var(--background-alt)",
                        padding: "var(--section-padding-y) 0",
                    }}
                >
                    {/* Full-width Hero Image for Venue */}
                    <div
                        className="fade-section"
                        style={{
                            position: "relative",
                            height: "70vh",
                            minHeight: "500px",
                            display: "flex",
                            alignItems: "flex-end",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={venue.images[0].src}
                            alt={venue.images[0].alt}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(0deg, rgba(45,42,38,0.95) 0%, rgba(45,42,38,0.3) 50%, transparent 100%)",
                            }}
                        />
                        <div
                            style={{
                                position: "relative",
                                zIndex: 10,
                                padding: "var(--section-padding-y) var(--section-padding-x)",
                                maxWidth: "900px",
                            }}
                        >
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: venue.color }}>
                                Venue {String(index + 1).padStart(2, "0")}
                            </p>
                            <h2
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                    fontWeight: 400,
                                    color: "var(--color-ivory)",
                                    marginTop: "var(--space-sm)",
                                    lineHeight: 1.1,
                                }}
                            >
                                {venue.name}
                            </h2>
                            <p
                                style={{
                                    marginTop: "var(--space-sm)",
                                    fontSize: "var(--text-xl)",
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    color: venue.color,
                                }}
                            >
                                {venue.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Venue Details */}
                    <div
                        className="fade-section"
                        style={{
                            padding: "var(--section-padding-y) var(--section-padding-x)",
                            maxWidth: "1400px",
                            margin: "0 auto",
                        }}
                    >
                        {/* Two Column Layout */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "var(--space-2xl)",
                                alignItems: "start",
                            }}
                        >
                            {/* Left: Description & Stats */}
                            <div>
                                <p
                                    style={{
                                        fontSize: "var(--text-lg)",
                                        fontWeight: 300,
                                        color: "var(--color-brown)",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {venue.description}
                                </p>

                                {/* Stats */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "var(--space-xl)",
                                        marginTop: "var(--space-xl)",
                                        paddingTop: "var(--space-lg)",
                                        borderTop: "1px solid rgba(45, 42, 38, 0.1)",
                                    }}
                                >
                                    <div>
                                        <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-brown)", marginBottom: "4px" }}>
                                            Capacity
                                        </p>
                                        <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: venue.color }}>
                                            {venue.capacity}
                                        </p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-brown)", marginBottom: "4px" }}>
                                            Area
                                        </p>
                                        <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: venue.color }}>
                                            {venue.area}
                                        </p>
                                    </div>
                                </div>

                                {/* Ideal For */}
                                <div style={{ marginTop: "var(--space-xl)" }}>
                                    <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-brown)", marginBottom: "var(--space-md)" }}>
                                        Ideal For
                                    </p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        {venue.idealFor.map((item) => (
                                            <span
                                                key={item}
                                                style={{
                                                    padding: "8px 16px",
                                                    fontSize: "var(--text-sm)",
                                                    backgroundColor: `${venue.color}15`,
                                                    color: venue.color,
                                                    borderRadius: "50px",
                                                    border: `1px solid ${venue.color}30`,
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Features */}
                            <div
                                style={{
                                    backgroundColor: index % 2 === 0 ? "var(--background-alt)" : "var(--background)",
                                    padding: "var(--space-xl)",
                                    borderRadius: "var(--border-radius-lg)",
                                }}
                            >
                                <h3
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "var(--text-xl)",
                                        color: "var(--color-charcoal)",
                                        marginBottom: "var(--space-lg)",
                                    }}
                                >
                                    Features & Amenities
                                </h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {venue.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px",
                                                padding: "12px 0",
                                                borderBottom: i < venue.features.length - 1 ? "1px solid rgba(45,42,38,0.08)" : "none",
                                                fontSize: "var(--text-base)",
                                                color: "var(--color-brown)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: "8px",
                                                    height: "8px",
                                                    backgroundColor: venue.color,
                                                    borderRadius: "50%",
                                                    flexShrink: 0,
                                                }}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Venue Gallery Auto-Scroller */}
                    <div
                        className="fade-section"
                        style={{
                            padding: "var(--space-xl) 0",
                        }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "var(--space-lg)" }}>
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: venue.color }}>
                                Gallery
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-charcoal)", marginTop: "var(--space-xs)" }}>
                                {venue.name} Moments
                            </h3>
                        </div>
                        <AutoScroller
                            images={venue.images}
                            speed={30 + index * 5}
                            direction={index % 2 === 0 ? "left" : "right"}
                            height="300px"
                        />
                    </div>
                </section>
            ))}

            {/* ============================================= */}
            {/* BOOKING COMBINATIONS */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--color-charcoal)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                        <DiamondSeparator />
                        <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--accent)" }}>
                            Flexible Booking
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-ivory)", marginTop: "var(--space-sm)" }}>
                            Choose Your Combination
                        </h2>
                        <p style={{ marginTop: "var(--space-md)", fontSize: "var(--text-lg)", fontWeight: 300, color: "rgba(255,251,245,0.7)", maxWidth: "600px", margin: "var(--space-md) auto 0" }}>
                            Most families book a main ground with the Poolside. Select what works for your celebration.
                        </p>
                    </div>

                    {/* Booking Options Grid */}
                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "var(--space-lg)",
                        }}
                    >
                        {bookingOptions.map((option) => (
                            <div
                                key={option.title}
                                style={{
                                    position: "relative",
                                    padding: "var(--space-xl)",
                                    backgroundColor: "rgba(255, 251, 245, 0.05)",
                                    borderRadius: "var(--border-radius-lg)",
                                    border: option.popular ? "2px solid var(--accent)" : "1px solid rgba(255,251,245,0.1)",
                                    transition: "all 0.4s ease",
                                }}
                            >
                                {option.popular && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "-12px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            padding: "6px 16px",
                                            backgroundColor: "var(--accent)",
                                            color: "var(--color-charcoal)",
                                            fontSize: "var(--text-xs)",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.1em",
                                            borderRadius: "50px",
                                        }}
                                    >
                                        Most Popular
                                    </div>
                                )}
                                <h3
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "var(--text-2xl)",
                                        color: "var(--color-ivory)",
                                        marginBottom: "var(--space-md)",
                                        marginTop: option.popular ? "var(--space-sm)" : 0,
                                    }}
                                >
                                    {option.title}
                                </h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "var(--space-md)" }}>
                                    {option.venues.map((venue) => (
                                        <span
                                            key={venue}
                                            style={{
                                                padding: "6px 12px",
                                                fontSize: "var(--text-xs)",
                                                backgroundColor: "rgba(196, 169, 98, 0.2)",
                                                color: "var(--accent)",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            {venue}
                                        </span>
                                    ))}
                                </div>
                                <p
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        color: "rgba(255,251,245,0.7)",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {option.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* MANDAP HIGHLIGHT */}
            {/* ============================================= */}
            <section
                className="fade-section"
                style={{
                    position: "relative",
                    height: "80vh",
                    minHeight: "500px",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <Image
                    src="/images/img1.png" // REPLACE: mandap-highlight.jpg (beautiful mandap shot)
                    alt="Mandap at Devolia"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(45,42,38,0.9) 0%, rgba(45,42,38,0.5) 50%, transparent 100%)" }} />
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        padding: "var(--section-padding-x)",
                        maxWidth: "600px",
                    }}
                >
                    <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--accent)" }}>
                        Special Feature
                    </p>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "var(--text-4xl)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-sm)",
                            lineHeight: 1.2,
                        }}
                    >
                        The Sacred Mandap
                    </h2>
                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "rgba(255,251,245,0.85)",
                            lineHeight: 1.8,
                        }}
                    >
                        Each ground features a dedicated mandap area beside the main stage — perfect for
                        midnight pheras and traditional ceremonies. Climate-controlled for every season:
                        fully air-conditioned for summer, and enclosed & heated for winter celebrations.
                    </p>
                    <ul style={{ marginTop: "var(--space-lg)", listStyle: "none", padding: 0 }}>
                        {["Midnight Ceremony Ready", "All-Weather Comfort", "Traditional Design", "Family-Focused Space"].map((item) => (
                            <li
                                key={item}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    padding: "8px 0",
                                    fontSize: "var(--text-base)",
                                    color: "var(--color-ivory)",
                                }}
                            >
                                <span style={{ color: "var(--accent)" }}>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ============================================= */}
            {/* CLOSING CTA */}
            {/* ============================================= */}
            <section
                style={{
                    position: "relative",
                    padding: "calc(var(--section-padding-y) * 2) var(--section-padding-x)",
                    backgroundColor: "var(--background)",
                    textAlign: "center",
                }}
            >
                <div className="fade-section" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <BotanicalElement size={50} color="var(--accent)" />

                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "var(--text-4xl)",
                            fontWeight: 400,
                            color: "var(--color-charcoal)",
                            marginTop: "var(--space-lg)",
                            lineHeight: 1.3,
                        }}
                    >
                        Ready to See the Grounds?
                    </h2>

                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "var(--color-brown)",
                        }}
                    >
                        Schedule a visit to experience the grandeur in person. Our team will walk you through
                        every space and help you envision your celebration.
                    </p>

                    <div style={{ marginTop: "var(--space-xl)", display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn btn-primary">
                            Schedule a Visit
                        </Link>
                        <Link href="/experience" className="btn btn-secondary">
                            Explore Experiences
                        </Link>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style jsx global>{`
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(0.5); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
