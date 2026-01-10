"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "./animations/gsap-utils";

interface GalleryImage {
    src: string;
    alt: string;
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
    rotate?: number;
}

// Manually positioned grid for perfect layout with no gaps
const galleryImages: GalleryImage[] = [
    // Row 1
    {
        src: "/images/img1.png", // REPLACE: gallery-1.jpg
        alt: "Wedding ceremony",
        row: 1, col: 1, rowSpan: 2, colSpan: 1,
        rotate: -2,
    },
    {
        src: "/images/img1.png", // REPLACE: gallery-2.jpg
        alt: "Couple portrait",
        row: 1, col: 2, rowSpan: 1, colSpan: 1,
        rotate: 1,
    },
    {
        src: "/images/img1.png", // REPLACE: gallery-3.jpg
        alt: "Reception decor",
        row: 1, col: 3, rowSpan: 1, colSpan: 1,
        rotate: -1,
    },
    // Row 2
    {
        src: "/images/img1.png", // REPLACE: gallery-4.jpg
        alt: "Mandap setup",
        row: 2, col: 2, rowSpan: 1, colSpan: 2,
        rotate: 0,
    },
    // Row 3
    {
        src: "/images/img1.png", // REPLACE: gallery-5.jpg
        alt: "Haldi ceremony",
        row: 3, col: 1, rowSpan: 1, colSpan: 1,
        rotate: 2,
    },
    {
        src: "/images/img1.png", // REPLACE: gallery-6.jpg
        alt: "Night celebration",
        row: 3, col: 2, rowSpan: 2, colSpan: 1,
        rotate: -1,
    },
    {
        src: "/images/img1.png", // REPLACE: gallery-7.jpg
        alt: "Family moment",
        row: 3, col: 3, rowSpan: 1, colSpan: 1,
        rotate: 1,
    },
    // Row 4
    {
        src: "/images/img1.png", // REPLACE: gallery-8.jpg
        alt: "Guest celebration",
        row: 4, col: 1, rowSpan: 1, colSpan: 1,
        rotate: -2,
    },
    {
        src: "/images/img1.png", // REPLACE: gallery-9.jpg
        alt: "Poolside event",
        row: 4, col: 3, rowSpan: 1, colSpan: 1,
        rotate: 2,
    },
];

export default function GalleryPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const items = gridRef.current?.querySelectorAll(".gallery-item");
            if (items) {
                gsap.fromTo(
                    items,
                    { opacity: 0, scale: 0.9, y: 30 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        stagger: 0.08,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
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
                backgroundColor: "var(--background-alt)",
            }}
        >
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                <p
                    style={{
                        fontSize: "var(--text-sm)",
                        textTransform: "uppercase",
                        letterSpacing: "0.25em",
                        color: "var(--accent)",
                        marginBottom: "var(--space-sm)",
                    }}
                >
                    Captured Moments
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
                    Gallery
                </h2>
                <p
                    style={{
                        fontSize: "var(--text-lg)",
                        fontWeight: 300,
                        color: "var(--color-brown)",
                        maxWidth: "550px",
                        margin: "0 auto",
                        padding: "0 var(--space-md)",
                    }}
                >
                    Glimpses of joy, love, and celebration from our past events
                </p>
            </div>

            {/* Masonry Grid - 3x4 layout with positioned items */}
            <div
                ref={gridRef}
                className="gallery-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(4, 160px)",
                    gap: "var(--space-md)",
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        style={{
                            position: "relative",
                            borderRadius: "var(--border-radius-md)",
                            overflow: "hidden",
                            cursor: "pointer",
                            gridRow: `${image.row} / span ${image.rowSpan || 1}`,
                            gridColumn: `${image.col} / span ${image.colSpan || 1}`,
                            transform: `rotate(${image.rotate || 0}deg)`,
                            transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                            boxShadow: "0 8px 30px rgba(45, 42, 38, 0.12)",
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{
                                objectFit: "cover",
                                transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                            }}
                            className="gallery-img"
                        />
                        {/* Hover overlay */}
                        <div
                            className="gallery-overlay"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, rgba(45, 42, 38, 0.85), rgba(45, 42, 38, 0.2), transparent)",
                                opacity: 0,
                                transition: "opacity 0.4s ease",
                                display: "flex",
                                alignItems: "flex-end",
                                padding: "var(--space-md)",
                            }}
                        >
                            <p
                                style={{
                                    color: "var(--color-ivory)",
                                    fontSize: "var(--text-sm)",
                                    fontWeight: 400,
                                }}
                            >
                                {image.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
                <Link href="/gallery" className="btn btn-secondary">
                    View Full Gallery
                </Link>
            </div>

            {/* Hover & Responsive styles */}
            <style jsx global>{`
                .gallery-item:hover {
                    transform: rotate(0deg) scale(1.02) !important;
                    z-index: 10;
                    box-shadow: 0 15px 50px rgba(196, 169, 98, 0.25) !important;
                }
                .gallery-item:hover .gallery-img {
                    transform: scale(1.1);
                }
                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }
                
                @media (max-width: 900px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        grid-template-rows: repeat(5, 140px) !important;
                    }
                    .gallery-item {
                        grid-row: auto !important;
                        grid-column: auto !important;
                        transform: rotate(0deg) !important;
                    }
                    .gallery-item:nth-child(1),
                    .gallery-item:nth-child(6) {
                        grid-column: span 1 !important;
                        grid-row: span 2 !important;
                    }
                    .gallery-item:nth-child(4) {
                        grid-column: span 2 !important;
                        grid-row: span 1 !important;
                    }
                }
                
                @media (max-width: 600px) {
                    .gallery-grid {
                        grid-template-columns: 1fr 1fr !important;
                        grid-template-rows: repeat(5, 120px) !important;
                        gap: 10px !important;
                    }
                    .gallery-item {
                        grid-row: auto !important;
                        grid-column: auto !important;
                    }
                    .gallery-item:nth-child(1),
                    .gallery-item:nth-child(6) {
                        grid-row: span 1 !important;
                    }
                    .gallery-item:nth-child(4) {
                        grid-column: span 2 !important;
                    }
                }
            `}</style>
        </section>
    );
}
