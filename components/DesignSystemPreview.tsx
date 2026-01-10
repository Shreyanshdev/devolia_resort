"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./animations/gsap-utils";
import Navbar from "./Navbar";
import {
    OrnamentDivider,
    DiamondSeparator,
    CornerFlourish,
    BotanicalElement,
    Sparkle,
    ScrollIndicator,
    DecorativeRing,
    QuoteMark,
} from "./PremiumSVGs";

export default function DesignSystemPreview() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headingsRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const colorsRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Hero entrance animation - staggered reveal
            const heroElements = heroRef.current?.querySelectorAll(".hero-animate");
            if (heroElements) {
                gsap.fromTo(
                    heroElements,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.15,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 0.3,
                    }
                );
            }

            // Scroll indicator gentle bounce
            gsap.to(".scroll-indicator", {
                y: 10,
                duration: 1.5,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
            });

            // Headings - slide up on scroll with text reveal
            gsap.fromTo(
                headingsRef.current?.children || [],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12,
                    duration: 0.9,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headingsRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            // Buttons - fade and slide with stagger
            gsap.fromTo(
                buttonsRef.current?.children || [],
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: buttonsRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // Colors - scale pop effect
            gsap.fromTo(
                colorsRef.current?.children || [],
                { opacity: 0, scale: 0.8, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.7,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: colorsRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // SVG elements - fade and rotate in
            const svgElements = svgRef.current?.querySelectorAll(".svg-animate");
            if (svgElements) {
                gsap.fromTo(
                    svgElements,
                    { opacity: 0, scale: 0.5, rotation: -10 },
                    {
                        opacity: 1,
                        scale: 1,
                        rotation: 0,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: svgRef.current,
                            start: "top 80%",
                            once: true,
                        },
                    }
                );
            }

            // Quote reveal - split animation
            gsap.fromTo(
                quoteRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: quoteRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // Decorative ring rotation
            gsap.to(".ring-rotate", {
                rotation: 360,
                duration: 60,
                ease: "none",
                repeat: -1,
            });

            // Parallax effect on decorative elements
            gsap.to(".parallax-slow", {
                y: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <main style={{ overflow: "hidden" }}>
            <Navbar />
            {/* Hero Section */}
            <section
                ref={heroRef}
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "var(--section-padding-x)",
                    background:
                        "linear-gradient(180deg, var(--background) 0%, var(--background-alt) 100%)",
                    position: "relative",
                }}
            >
                {/* Decorative corners */}
                <div style={{ position: "absolute", top: 40, left: 40, opacity: 0.6 }} className="parallax-slow">
                    <CornerFlourish position="top-left" />
                </div>
                <div style={{ position: "absolute", top: 40, right: 40, opacity: 0.6 }} className="parallax-slow">
                    <CornerFlourish position="top-right" />
                </div>

                {/* Decorative ring behind */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        opacity: 0.1,
                        pointerEvents: "none",
                    }}
                    className="ring-rotate"
                >
                    <DecorativeRing size={500} />
                </div>

                <div className="hero-animate">
                    <OrnamentDivider width={180} />
                </div>
                <p
                    className="uppercase text-muted hero-animate"
                    style={{
                        fontSize: "var(--text-sm)",
                        marginTop: "var(--space-md)",
                        marginBottom: "var(--space-md)",
                        letterSpacing: "0.25em",
                    }}
                >
                    Premium Wedding Destination
                </p>
                <h1
                    className="hero-animate"
                    style={{ marginBottom: "var(--space-lg)", maxWidth: "900px" }}
                >
                    Devolia Resort
                </h1>
                <p
                    className="text-muted hero-animate"
                    style={{
                        fontSize: "var(--text-xl)",
                        maxWidth: "600px",
                        fontWeight: 300,
                    }}
                >
                    Where timeless elegance meets unforgettable celebrations
                </p>
                <div
                    className="hero-animate"
                    style={{
                        display: "flex",
                        gap: "var(--space-md)",
                        marginTop: "var(--space-xl)",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <button className="btn btn-primary">Plan Your Wedding</button>
                    <button className="btn btn-secondary">Explore Grounds</button>
                </div>

                {/* Scroll indicator */}
                <div
                    className="hero-animate scroll-indicator"
                    style={{
                        position: "absolute",
                        bottom: 40,
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <ScrollIndicator />
                </div>
            </section>

            {/* Quote Section */}
            <section className="section section-alt" style={{ textAlign: "center" }}>
                <div
                    ref={quoteRef}
                    className="container container-narrow"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--space-md)",
                    }}
                >
                    <QuoteMark size={36} opening={true} />
                    <h4
                        className="text-serif"
                        style={{
                            fontStyle: "italic",
                            fontWeight: 300,
                            lineHeight: 1.6,
                            maxWidth: "700px",
                        }}
                    >
                        Every wedding we host becomes a chapter in our legacy — a story of
                        love, trust, and timeless celebration.
                    </h4>
                    <QuoteMark size={36} opening={false} />
                    <p className="text-muted uppercase" style={{ fontSize: "var(--text-sm)", marginTop: "var(--space-sm)" }}>
                        — The Devolia Family
                    </p>
                </div>
            </section>

            {/* Typography Section */}
            <section className="section">
                <div
                    className="container container-narrow"
                    style={{ textAlign: "center" }}
                >
                    <DiamondSeparator />
                    <p
                        className="uppercase text-accent"
                        style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-sm)" }}
                    >
                        Typography
                    </p>
                    <h2 style={{ marginBottom: "var(--space-xl)" }}>Design System</h2>

                    <div ref={headingsRef} style={{ textAlign: "left" }}>
                        <h1 style={{ marginBottom: "var(--space-md)" }}>Heading One</h1>
                        <h2 style={{ marginBottom: "var(--space-md)" }}>Heading Two</h2>
                        <h3 style={{ marginBottom: "var(--space-md)" }}>Heading Three</h3>
                        <h4 style={{ marginBottom: "var(--space-md)" }}>Heading Four</h4>
                        <h5 style={{ marginBottom: "var(--space-md)" }}>Heading Five</h5>
                        <h6 style={{ marginBottom: "var(--space-md)" }}>Heading Six</h6>
                        <p>
                            Body text using Source Sans 3 in light weight. This creates a
                            calm, readable experience that complements the editorial serif
                            headings. The typography system uses fluid sizing for seamless
                            responsiveness.
                        </p>
                    </div>
                </div>
            </section>

            {/* Premium SVG Elements Section */}
            <section className="section section-dark">
                <div className="container" style={{ textAlign: "center" }}>
                    <DiamondSeparator color="var(--color-gold)" />
                    <p
                        className="uppercase"
                        style={{
                            color: "var(--accent)",
                            marginTop: "var(--space-md)",
                            marginBottom: "var(--space-sm)",
                        }}
                    >
                        Decorative Elements
                    </p>
                    <h3
                        style={{ marginBottom: "var(--space-xl)", color: "var(--color-ivory)" }}
                    >
                        Premium SVGs
                    </h3>

                    <div
                        ref={svgRef}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "var(--space-xl)",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        <div className="svg-animate" style={{ textAlign: "center" }}>
                            <OrnamentDivider color="var(--accent)" />
                            <p style={{ marginTop: "var(--space-sm)", color: "rgba(255,251,245,0.6)", fontSize: "var(--text-sm)" }}>
                                Ornament Divider
                            </p>
                        </div>
                        <div className="svg-animate" style={{ textAlign: "center" }}>
                            <BotanicalElement color="var(--accent)" />
                            <p style={{ marginTop: "var(--space-sm)", color: "rgba(255,251,245,0.6)", fontSize: "var(--text-sm)" }}>
                                Botanical
                            </p>
                        </div>
                        <div className="svg-animate" style={{ textAlign: "center" }}>
                            <CornerFlourish color="var(--accent)" />
                            <p style={{ marginTop: "var(--space-sm)", color: "rgba(255,251,245,0.6)", fontSize: "var(--text-sm)" }}>
                                Corner Flourish
                            </p>
                        </div>
                        <div className="svg-animate" style={{ textAlign: "center" }}>
                            <Sparkle size={40} color="var(--accent)" />
                            <p style={{ marginTop: "var(--space-sm)", color: "rgba(255,251,245,0.6)", fontSize: "var(--text-sm)" }}>
                                Sparkle
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section className="section">
                <div className="container" style={{ textAlign: "center" }}>
                    <DiamondSeparator />
                    <p
                        className="uppercase text-accent"
                        style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-sm)" }}
                    >
                        Palette
                    </p>
                    <h3 style={{ marginBottom: "var(--space-xl)" }}>Color System</h3>

                    <div
                        ref={colorsRef}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                            gap: "var(--space-md)",
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        {[
                            { name: "Ivory", color: "#FFFBF5", textDark: true },
                            { name: "Charcoal", color: "#2D2A26", textDark: false },
                            { name: "Brown", color: "#6B5E53", textDark: false },
                            { name: "Gold", color: "#C4A962", textDark: true },
                        ].map((item) => (
                            <div
                                key={item.name}
                                style={{
                                    backgroundColor: item.color,
                                    color: item.textDark ? "#2D2A26" : "#FFFBF5",
                                    padding: "var(--space-lg)",
                                    borderRadius: "var(--border-radius-md)",
                                    boxShadow: "var(--shadow-md)",
                                }}
                            >
                                <p style={{ fontWeight: 500, marginBottom: "var(--space-xs)" }}>
                                    {item.name}
                                </p>
                                <p style={{ fontSize: "var(--text-sm)", opacity: 0.8 }}>
                                    {item.color}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Buttons Section */}
            <section className="section section-alt">
                <div className="container" style={{ textAlign: "center" }}>
                    <DiamondSeparator />
                    <p
                        className="uppercase text-accent"
                        style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-sm)" }}
                    >
                        Components
                    </p>
                    <h3 style={{ marginBottom: "var(--space-xl)" }}>Button Styles</h3>

                    <div
                        ref={buttonsRef}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "var(--space-lg)",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <button className="btn btn-primary">Primary Button</button>
                        <button className="btn btn-secondary">Secondary Button</button>
                    </div>

                    <p
                        className="text-muted"
                        style={{
                            marginTop: "var(--space-xl)",
                            fontSize: "var(--text-sm)",
                            maxWidth: "500px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Hover to see the premium expanding fill effect with smooth color transition
                    </p>
                </div>
            </section>

            {/* Glass Button Demo */}
            <section
                className="section"
                style={{
                    background: "linear-gradient(135deg, var(--color-charcoal) 0%, #1a1815 100%)",
                    position: "relative",
                }}
            >
                <div className="container" style={{ textAlign: "center" }}>
                    <h3
                        style={{ marginBottom: "var(--space-lg)", color: "var(--color-ivory)" }}
                    >
                        Glass Button
                    </h3>
                    <p
                        style={{
                            color: "rgba(255,251,245,0.6)",
                            marginBottom: "var(--space-xl)",
                            maxWidth: "500px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Premium glassmorphism effect on dark backgrounds
                    </p>
                    <button className="btn btn-glass">Glass Effect Button</button>
                </div>
            </section>

            {/* Footer Preview */}
            <section className="section section-dark" style={{ textAlign: "center" }}>
                <div className="container">
                    <BotanicalElement
                        size={40}
                        color="var(--accent)"
                        className="svg-animate"
                    />
                    <h4
                        style={{
                            marginTop: "var(--space-md)",
                            marginBottom: "var(--space-md)",
                            color: "var(--color-ivory)",
                        }}
                    >
                        Devolia Resort
                    </h4>
                    <OrnamentDivider width={120} color="var(--accent)" />
                    <p
                        className="text-muted"
                        style={{ color: "rgba(255,251,245,0.6)", marginTop: "var(--space-md)" }}
                    >
                        Orai, Uttar Pradesh, India
                    </p>
                    <p
                        style={{
                            marginTop: "var(--space-xl)",
                            fontSize: "var(--text-sm)",
                            color: "rgba(255,251,245,0.4)",
                        }}
                    >
                        © 2026 Devolia Resort. All rights reserved.
                    </p>
                </div>
            </section>
        </main>
    );
}
