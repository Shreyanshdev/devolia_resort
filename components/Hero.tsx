"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "./animations/gsap-utils";
import { OrnamentDivider, ScrollIndicator } from "./PremiumSVGs";

interface HeroProps {
    videoSrc?: string;
    imageSrc?: string;
    subtitle?: string;
    title: string;
    description?: string;
    primaryCTA?: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
    overlayOpacity?: number;
}

export default function Hero({
    videoSrc,
    imageSrc = "/images/hero-bg.jpg",
    subtitle = "Premium Wedding Destination",
    title = "Where Dreams Become Timeless Celebrations",
    description = "Experience the grandeur of Devolia Resort — where every moment is crafted with elegance, every celebration becomes a cherished memory.",
    primaryCTA = { label: "Plan Your Wedding", href: "/contact" },
    secondaryCTA = { label: "Explore Grounds", href: "/grounds" },
    overlayOpacity = 0.5,
}: HeroProps) {
    const heroRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const mediaRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Set loaded state to trigger CSS animations
        setIsLoaded(true);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Only add parallax effect for media - no fade animations that conflict
            gsap.to(mediaRef.current, {
                y: "15%",
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                height: "100svh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* Background Media */}
            <div
                ref={mediaRef}
                className={`hero-media ${isLoaded ? "loaded" : ""}`}
                style={{
                    position: "absolute",
                    top: "-5%",
                    left: 0,
                    width: "100%",
                    height: "110%",
                    zIndex: 0,
                }}
            >
                {videoSrc ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${imageSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "var(--color-charcoal)",
                        }}
                    />
                )}
            </div>

            {/* Gradient Overlay */}
            <div
                ref={overlayRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(
            180deg,
            rgba(45, 42, 38, 0.4) 0%,
            rgba(45, 42, 38, ${overlayOpacity}) 50%,
            rgba(45, 42, 38, ${overlayOpacity + 0.1}) 100%
          )`,
                    zIndex: 1,
                }}
            />

            {/* Side decorative lines */}
            <div
                className={`hero-line ${isLoaded ? "loaded" : ""}`}
                style={{
                    position: "absolute",
                    left: "clamp(20px, 5vw, 80px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1px",
                    height: "200px",
                    background: "linear-gradient(180deg, transparent, var(--accent), transparent)",
                    zIndex: 2,
                }}
            />
            <div
                className={`hero-line ${isLoaded ? "loaded" : ""}`}
                style={{
                    position: "absolute",
                    right: "clamp(20px, 5vw, 80px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1px",
                    height: "200px",
                    background: "linear-gradient(180deg, transparent, var(--accent), transparent)",
                    zIndex: 2,
                }}
            />

            {/* Content */}
            <div
                ref={contentRef}
                className={`hero-content ${isLoaded ? "loaded" : ""}`}
                style={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    maxWidth: "1000px",
                    padding: "0 clamp(24px, 5vw, 80px)",
                    color: "var(--color-ivory)",
                }}
            >
                {/* Ornament */}
                <div className="hero-element" style={{ display: "flex", justifyContent: "center", marginBottom: "var(--space-md)" }}>
                    <OrnamentDivider width={150} color="var(--accent)" />
                </div>

                {/* Subtitle */}
                <p
                    className="hero-element"
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-sm)",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        letterSpacing: "0.3em",
                        color: "var(--accent)",
                        marginBottom: "var(--space-md)",
                        textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)",
                    }}
                >
                    {subtitle}
                </p>

                {/* Main Title */}
                <h1
                    className="hero-element hero-title"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(2.5rem, 6vw, 5rem)",
                        fontWeight: 400,
                        lineHeight: 1.1,
                        marginBottom: "var(--space-lg)",
                        color: "var(--color-ivory)",
                        letterSpacing: "-0.01em",
                        textShadow: "0 2px 15px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    {title}
                </h1>

                {/* Description */}
                <p
                    className="hero-element"
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-lg)",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        maxWidth: "650px",
                        margin: "0 auto",
                        marginBottom: "var(--space-xl)",
                        opacity: 0.9,
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    {description}
                </p>

                {/* CTA Buttons */}
                <div
                    className="hero-element"
                    style={{
                        display: "flex",
                        gap: "var(--space-md)",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <a href={primaryCTA.href} className="btn btn-primary" style={{ color: "var(--color-ivory)" }}>
                        {primaryCTA.label}
                    </a>
                    <a href={secondaryCTA.href} className="btn btn-glass">
                        {secondaryCTA.label}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={`hero-scroll ${isLoaded ? "loaded" : ""}`}>
                <ScrollIndicator color="var(--accent)" />
            </div>

            {/* Removed bottom gradient fade as requested */}

            {/* CSS Animations - More reliable than GSAP for entrance */}
            <style jsx>{`
        .hero-media {
          opacity: 0;
          transform: scale(1.1);
          transition: opacity 1.5s ease-out, transform 2s ease-out;
        }
        .hero-media.loaded {
          opacity: 1;
          transform: scale(1);
        }

        .hero-line {
          opacity: 0;
          transition: opacity 1s ease-out 1.2s;
        }
        .hero-line.loaded {
          opacity: 0.4;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out 0.8s, transform 1s ease-out 0.8s;
        }
        .hero-content.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-content .hero-element {
          opacity: 0;
          transform: translateY(20px);
        }
        .hero-content.loaded .hero-element {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-content.loaded .hero-element:nth-child(1) { transition: all 0.8s ease-out 1s; }
        .hero-content.loaded .hero-element:nth-child(2) { transition: all 0.8s ease-out 1.15s; }
        .hero-content.loaded .hero-element:nth-child(3) { transition: all 0.8s ease-out 1.3s; }
        .hero-content.loaded .hero-element:nth-child(4) { transition: all 0.8s ease-out 1.45s; }
        .hero-content.loaded .hero-element:nth-child(5) { transition: all 0.8s ease-out 1.6s; }

        .hero-scroll {
          position: absolute;
          bottom: clamp(30px, 5vh, 60px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          opacity: 0;
          transition: opacity 1s ease-out 2s;
        }
        .hero-scroll.loaded {
          opacity: 1;
          animation: float 3s ease-in-out infinite 2s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-media,
          .hero-line,
          .hero-content,
          .hero-content .hero-element,
          .hero-scroll {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-scroll {
            transform: translateX(-50%) !important;
            animation: none !important;
          }
        }
      `}</style>
        </section>
    );
}
