"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "./animations/gsap-utils";

interface GroundCard {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    href: string;
    capacity: string;
    area: string;
    idealFor: string[];
}

const grounds: GroundCard[] = [
    {
        id: "sanskar",
        title: "Sanskar Ground",
        description: "Our flagship wedding ground with dedicated mandap area beside stage, perfect for grand ceremonies and receptions with climate-controlled comfort.",
        image: "/images/img1.png", // REPLACE: sanskar-preview.jpg
        imageAlt: "Sanskar Ground wedding venue",
        href: "/grounds#sanskar",
        capacity: "500+ Guests",
        area: "15,000 sq. ft.",
        idealFor: ["Weddings", "Receptions", "Large Events"],
    },
    {
        id: "sagun",
        title: "Sagun Ground",
        description: "Twin celebration space equally grand as Sanskar, ideal for parallel events or families desiring privacy with full amenities and mandap.",
        image: "/images/img1.png", // REPLACE: sagun-preview.jpg
        imageAlt: "Sagun Ground wedding venue",
        href: "/grounds#sagun",
        capacity: "500+ Guests",
        area: "15,000 sq. ft.",
        idealFor: ["Weddings", "Receptions", "Parallel Events"],
    },
    {
        id: "poolside",
        title: "Poolside Deck",
        description: "A versatile multipurpose space for intimate ceremonies with stunning water backdrop, royal theme décor options, and perfect natural lighting.",
        image: "/images/img1.png", // REPLACE: poolside-preview.jpg
        imageAlt: "Poolside Deck venue",
        href: "/grounds#poolside",
        capacity: "150-200 Guests",
        area: "5,000 sq. ft.",
        idealFor: ["Haldi", "Mehendi", "Birthdays", "Photoshoots"],
    },
];

export default function GroundsPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current?.children || [],
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            // Cards stagger animation
            const cards = cardsRef.current?.querySelectorAll(".ground-card");
            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.2,
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
            {/* Section Title */}
            <div
                ref={titleRef}
                style={{
                    textAlign: "center",
                    marginBottom: "var(--space-2xl)",
                }}
            >
                <p
                    style={{
                        fontSize: "var(--text-sm)",
                        textTransform: "uppercase",
                        letterSpacing: "0.25em",
                        color: "var(--accent)",
                        marginBottom: "var(--space-sm)",
                    }}
                >
                    Our Venues
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
                    The Grounds
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
                    Three distinct venues designed to create unforgettable celebrations
                </p>
            </div>

            {/* Cards Grid */}
            <div
                ref={cardsRef}
                className="grounds-grid"
                style={{
                    display: "grid",
                    gap: "var(--space-lg)",
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                {grounds.map((ground) => (
                    <Link
                        key={ground.id}
                        href={ground.href}
                        className="ground-card"
                        style={{
                            display: "grid",
                            textDecoration: "none",
                            borderRadius: "var(--border-radius-lg)",
                            overflow: "hidden",
                            backgroundColor: "var(--background-alt)",
                            transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                            boxShadow: "0 8px 30px rgba(45, 42, 38, 0.08)",
                        }}
                    >
                        {/* Image Container */}
                        <div
                            className="ground-card-image"
                            style={{
                                position: "relative",
                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={ground.image}
                                alt={ground.imageAlt}
                                fill
                                style={{
                                    objectFit: "cover",
                                    transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                                }}
                                className="card-img"
                            />
                            {/* Gradient overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "120px",
                                    background: "linear-gradient(to top, rgba(45, 42, 38, 0.7), transparent)",
                                    pointerEvents: "none",
                                }}
                            />
                            {/* Capacity & Area Badge */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "16px",
                                    right: "16px",
                                    display: "flex",
                                    gap: "8px",
                                    flexWrap: "wrap",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <span
                                    style={{
                                        padding: "6px 14px",
                                        backgroundColor: "rgba(255, 251, 245, 0.95)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "50px",
                                        fontSize: "var(--text-xs)",
                                        fontWeight: 500,
                                        color: "var(--color-charcoal)",
                                    }}
                                >
                                    {ground.capacity}
                                </span>
                                <span
                                    style={{
                                        padding: "6px 14px",
                                        backgroundColor: "rgba(196, 169, 98, 0.95)",
                                        borderRadius: "50px",
                                        fontSize: "var(--text-xs)",
                                        fontWeight: 500,
                                        color: "var(--color-charcoal)",
                                    }}
                                >
                                    {ground.area}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: "var(--space-lg)" }}>
                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "clamp(1.25rem, 3vw, var(--text-2xl))",
                                    fontWeight: 400,
                                    color: "var(--color-charcoal)",
                                    marginBottom: "var(--space-sm)",
                                }}
                            >
                                {ground.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "var(--text-sm)",
                                    fontWeight: 300,
                                    color: "var(--color-brown)",
                                    lineHeight: 1.6,
                                    marginBottom: "var(--space-md)",
                                }}
                            >
                                {ground.description}
                            </p>

                            {/* Ideal For Tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "var(--space-md)" }}>
                                {ground.idealFor.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "4px 10px",
                                            fontSize: "var(--text-xs)",
                                            backgroundColor: "rgba(196, 169, 98, 0.1)",
                                            color: "var(--accent)",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontSize: "var(--text-sm)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    color: "var(--accent)",
                                    fontWeight: 500,
                                }}
                            >
                                View Details
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path
                                        d="M1 6H15M15 6L10 1M15 6L10 11"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Responsive & Hover styles */}
            <style jsx global>{`
                .grounds-grid {
                    grid-template-columns: repeat(3, 1fr);
                }
                
                .ground-card-image {
                    height: 280px;
                }
                
                .ground-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 60px rgba(196, 169, 98, 0.15);
                }
                
                .ground-card:hover .card-img {
                    transform: scale(1.05);
                }
                
                @media (max-width: 1024px) {
                    .grounds-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .ground-card-image {
                        height: 240px;
                    }
                }
                
                @media (max-width: 700px) {
                    .grounds-grid {
                        grid-template-columns: 1fr;
                    }
                    .ground-card-image {
                        height: 220px;
                    }
                }
            `}</style>
        </section>
    );
}
