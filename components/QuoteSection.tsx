"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "./animations/gsap-utils";
import { QuoteMark } from "./PremiumSVGs";

export default function QuoteSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        once: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "0",
                backgroundColor: "var(--color-charcoal)",
                overflow: "hidden",
            }}
        >
            {/* Full-width background image */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            >
                <Image
                    src="/images/img1.png" // REPLACE WITH: quote-background.jpg (atmospheric wedding scene, couple silhouette, or venue at dusk)
                    alt="Devolia Resort atmosphere"
                    fill
                    style={{ objectFit: "cover", opacity: 0.3 }}
                />
            </div>

            {/* Gradient overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(45, 42, 38, 0.9) 0%, rgba(45, 42, 38, 0.7) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div
                ref={contentRef}
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "calc(var(--section-padding-y) * 1.2) var(--section-padding-x)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                {/* Gold decorative line */}
                <div
                    style={{
                        width: "60px",
                        height: "2px",
                        background: "var(--accent)",
                        marginBottom: "var(--space-xl)",
                    }}
                />

                <QuoteMark size={50} color="var(--accent)" opening={true} />

                <h3
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                        lineHeight: 1.5,
                        color: "var(--color-ivory)",
                        marginTop: "var(--space-lg)",
                        marginBottom: "var(--space-lg)",
                    }}
                >
                    Every wedding we host becomes a chapter in our legacy —
                    a story of love, trust, and timeless celebration that echoes
                    through generations.
                </h3>

                <QuoteMark size={50} color="var(--accent)" opening={false} />

                <div
                    style={{
                        marginTop: "var(--space-xl)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--space-xs)",
                    }}
                >
                    <p
                        style={{
                            fontSize: "var(--text-base)",
                            fontWeight: 500,
                            color: "var(--color-ivory)",
                            letterSpacing: "0.1em",
                        }}
                    >
                        The Devolia Family
                    </p>
                    <p
                        style={{
                            fontSize: "var(--text-sm)",
                            color: "rgba(255, 251, 245, 0.5)",
                        }}
                    >
                        Serving celebrations since 1985
                    </p>
                </div>

                {/* Gold decorative line */}
                <div
                    style={{
                        width: "60px",
                        height: "2px",
                        background: "var(--accent)",
                        marginTop: "var(--space-xl)",
                    }}
                />
            </div>
        </section>
    );
}
