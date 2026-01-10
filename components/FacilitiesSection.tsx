"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "./animations/gsap-utils";
import { SuitesIcon, CuisineIcon, EventsIcon, ParkingIcon, CameraIcon, SecurityIcon } from "./PremiumSVGs";

interface Facility {
    Icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
    title: string;
    description: string;
}

const facilities: Facility[] = [
    {
        Icon: SuitesIcon,
        title: "Luxury Suites",
        description: "50+ premium rooms for family and guests",
    },
    {
        Icon: CuisineIcon,
        title: "Multi-Cuisine",
        description: "Expert chefs crafting global cuisines",
    },
    {
        Icon: EventsIcon,
        title: "Event Planning",
        description: "Dedicated team for seamless execution",
    },
    {
        Icon: ParkingIcon,
        title: "Valet Parking",
        description: "Complimentary parking for 500+ cars",
    },
    {
        Icon: CameraIcon,
        title: "Photo Studios",
        description: "Multiple scenic backdrops on property",
    },
    {
        Icon: SecurityIcon,
        title: "24/7 Security",
        description: "Discrete, professional protection",
    },
];

export default function FacilitiesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Image parallax
            gsap.fromTo(
                imageRef.current,
                { y: 50 },
                {
                    y: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );

            // Content animation
            gsap.fromTo(
                contentRef.current?.querySelectorAll(".facility-item") || [],
                { opacity: 0, x: 30 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 80%",
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
                padding: "var(--section-padding-y) 0",
                backgroundColor: "var(--background)",
                overflow: "hidden",
            }}
        >
            <div
                className="facilities-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "var(--space-2xl)",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 var(--section-padding-x)",
                    alignItems: "center",
                }}
            >
                {/* Left - Large Image */}
                <div
                    ref={imageRef}
                    className="facilities-image"
                    style={{
                        position: "relative",
                        height: "700px",
                        borderRadius: "var(--border-radius-lg)",
                        overflow: "hidden",
                        boxShadow: "0 30px 80px rgba(45, 42, 38, 0.2)",
                    }}
                >
                    <Image
                        src="/images/img1.png" // REPLACE WITH: facilities-main.jpg (resort exterior or lobby)
                        alt="Devolia Resort facilities"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    {/* Overlay with stats */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "var(--space-xl)",
                            background: "linear-gradient(to top, rgba(45, 42, 38, 0.95), transparent)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                textAlign: "center",
                            }}
                        >
                            {[
                                { value: "500+", label: "Weddings Hosted" },
                                { value: "15", label: "Acres of Grounds" },
                                { value: "38", label: "Years of Legacy" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "clamp(1.5rem, 3vw, var(--text-3xl))",
                                            color: "var(--accent)",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "var(--text-xs)",
                                            color: "rgba(255, 251, 245, 0.7)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.1em",
                                        }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right - Content */}
                <div ref={contentRef}>
                    <p
                        style={{
                            fontSize: "var(--text-sm)",
                            textTransform: "uppercase",
                            letterSpacing: "0.25em",
                            color: "var(--accent)",
                            marginBottom: "var(--space-sm)",
                        }}
                    >
                        Why Choose Us
                    </p>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(1.75rem, 4vw, var(--text-4xl))",
                            fontWeight: 400,
                            color: "var(--color-charcoal)",
                            marginBottom: "var(--space-md)",
                        }}
                    >
                        Built for Celebrations
                    </h2>
                    <p
                        style={{
                            fontSize: "var(--text-base)",
                            fontWeight: 300,
                            color: "var(--color-brown)",
                            marginBottom: "var(--space-xl)",
                            lineHeight: 1.7,
                        }}
                    >
                        Every detail of our resort has been designed with your celebration in mind.
                        From grand venues to intimate corners, we provide everything needed for
                        a flawless wedding experience.
                    </p>

                    {/* Facilities Grid */}
                    <div
                        className="facilities-items"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "var(--space-md)",
                        }}
                    >
                        {facilities.map((facility) => (
                            <div
                                key={facility.title}
                                className="facility-item"
                                style={{
                                    padding: "var(--space-md)",
                                    backgroundColor: "var(--background-alt)",
                                    borderRadius: "var(--border-radius-md)",
                                    border: "1px solid rgba(196, 169, 98, 0.1)",
                                    transition: "all 0.4s ease",
                                }}
                            >
                                <div
                                    className="facility-icon-wrapper"
                                    style={{
                                        marginBottom: "var(--space-sm)",
                                        display: "inline-block",
                                    }}
                                >
                                    <facility.Icon size={28} color="var(--accent)" />
                                </div>
                                <h4
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "var(--text-base)",
                                        fontWeight: 400,
                                        color: "var(--color-charcoal)",
                                        marginBottom: "4px",
                                    }}
                                >
                                    {facility.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        fontWeight: 300,
                                        color: "var(--color-brown)",
                                    }}
                                >
                                    {facility.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Responsive & Animation styles */}
            <style jsx global>{`
                /* Icon Animations */
                .facility-icon {
                    transition: transform 0.3s ease;
                }
                
                .facility-item:hover .facility-icon {
                    transform: scale(1.1);
                }
                
                .facility-item:hover {
                    border-color: var(--accent) !important;
                    box-shadow: 0 8px 25px rgba(196, 169, 98, 0.1);
                }
                
                .icon-steam {
                    animation: steamFloat 2s ease-in-out infinite;
                }
                
                .icon-dot {
                    animation: dotPulse 1.5s ease-in-out infinite;
                }
                
                .icon-blink {
                    animation: blink 2s ease-in-out infinite;
                }
                
                .icon-pulse {
                    animation: pulse 2s ease-in-out infinite;
                }
                
                .icon-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                .icon-check {
                    stroke-dasharray: 20;
                    stroke-dashoffset: 20;
                    animation: drawCheck 1.5s ease-out forwards;
                }
                
                @keyframes steamFloat {
                    0%, 100% { opacity: 0.6; transform: translateY(0); }
                    50% { opacity: 1; transform: translateY(-2px); }
                }
                
                @keyframes dotPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                }
                
                @keyframes blink {
                    0%, 90%, 100% { opacity: 1; }
                    95% { opacity: 0.3; }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.05); }
                }
                
                @keyframes shimmer {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
                
                @keyframes drawCheck {
                    to { stroke-dashoffset: 0; }
                }
                
                /* Responsive */
                @media (max-width: 1024px) {
                    .facilities-grid {
                        grid-template-columns: 1fr !important;
                        gap: var(--space-xl) !important;
                    }
                    .facilities-image {
                        height: 400px !important;
                        order: -1;
                    }
                }
                
                @media (max-width: 600px) {
                    .facilities-items {
                        grid-template-columns: 1fr !important;
                    }
                    .facilities-image {
                        height: 300px !important;
                    }
                }
            `}</style>
        </section>
    );
}
