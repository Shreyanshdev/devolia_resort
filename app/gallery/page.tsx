"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { gsap, ScrollTrigger } from "@/components/animations/gsap-utils";
import { OrnamentDivider, DiamondSeparator, BotanicalElement } from "@/components/PremiumSVGs";

// Gallery Images - Random rotations and sizes for artistic effect
const galleryImages = [
    { src: "/images/img1.png", alt: "Wedding ceremony", size: "large", rotate: -3 },
    { src: "/images/img1.png", alt: "Bride portrait", size: "medium", rotate: 2 },
    { src: "/images/img1.png", alt: "Mandap decoration", size: "small", rotate: -1 },
    { src: "/images/img1.png", alt: "Reception dance", size: "medium", rotate: 4 },
    { src: "/images/img1.png", alt: "Couple moment", size: "large", rotate: -2 },
    { src: "/images/img1.png", alt: "Haldi ceremony", size: "small", rotate: 3 },
    { src: "/images/img1.png", alt: "Family photo", size: "medium", rotate: -4 },
    { src: "/images/img1.png", alt: "Mehendi hands", size: "small", rotate: 1 },
    { src: "/images/img1.png", alt: "Night celebration", size: "large", rotate: -1 },
    { src: "/images/img1.png", alt: "Venue aerial", size: "medium", rotate: 2 },
    { src: "/images/img1.png", alt: "Floral decor", size: "small", rotate: -3 },
    { src: "/images/img1.png", alt: "Sangeet night", size: "medium", rotate: 1 },
    { src: "/images/img1.png", alt: "Poolside event", size: "large", rotate: 3 },
    { src: "/images/img1.png", alt: "Ring ceremony", size: "small", rotate: -2 },
    { src: "/images/img1.png", alt: "Guest candid", size: "medium", rotate: 4 },
    { src: "/images/img1.png", alt: "Food display", size: "small", rotate: -1 },
];

// Featured Reels/Videos
const reels = [
    {
        id: 1,
        thumbnail: "/images/img1.png", // REPLACE: reel-1-thumb.jpg
        title: "A Royal Wedding",
        duration: "0:45",
        views: "12K"
    },
    {
        id: 2,
        thumbnail: "/images/img1.png", // REPLACE: reel-2-thumb.jpg
        title: "Haldi Moments",
        duration: "0:32",
        views: "8.5K"
    },
    {
        id: 3,
        thumbnail: "/images/img1.png", // REPLACE: reel-3-thumb.jpg
        title: "First Dance",
        duration: "0:58",
        views: "15K"
    },
    {
        id: 4,
        thumbnail: "/images/img1.png", // REPLACE: reel-4-thumb.jpg
        title: "Family Blessings",
        duration: "0:40",
        views: "9.2K"
    },
    {
        id: 5,
        thumbnail: "/images/img1.png", // REPLACE: reel-5-thumb.jpg
        title: "Midnight Pheras",
        duration: "1:12",
        views: "20K"
    },
    {
        id: 6,
        thumbnail: "/images/img1.png", // REPLACE: reel-6-thumb.jpg
        title: "Reception Glow",
        duration: "0:50",
        views: "11K"
    },
];

// Featured Stories
const stories = [
    {
        couple: "Priya & Arjun",
        date: "December 2024",
        description: "A winter wonderland wedding that spanned three magical days...",
        image: "/images/img1.png", // REPLACE: story-1.jpg
    },
    {
        couple: "Ananya & Rohan",
        date: "November 2024",
        description: "Where tradition met modern elegance under a thousand lights...",
        image: "/images/img1.png", // REPLACE: story-2.jpg
    },
    {
        couple: "Meera & Vikram",
        date: "October 2024",
        description: "A celebration of love that brought two families together as one...",
        image: "/images/img1.png", // REPLACE: story-3.jpg
    },
];

export default function GalleryPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const [activeFilter, setActiveFilter] = useState("all");

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
                    y: "20%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            }

            // Gallery items stagger
            const galleryItems = document.querySelectorAll(".gallery-item");
            gsap.fromTo(
                galleryItems,
                { opacity: 0, y: 80, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".gallery-grid",
                        start: "top 80%",
                        once: true,
                    },
                }
            );

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

    const getSizeStyles = (size: string) => {
        switch (size) {
            case "large":
                return { gridColumn: "span 2", gridRow: "span 2" };
            case "medium":
                return { gridColumn: "span 1", gridRow: "span 2" };
            default:
                return { gridColumn: "span 1", gridRow: "span 1" };
        }
    };

    return (
        <div ref={pageRef}>
            <Navbar />

            {/* ============================================= */}
            {/* HERO SECTION - Artistic Opening */}
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
                {/* Scattered floating images in background */}
                <div className="hero-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    {[
                        { top: "10%", left: "5%", rotate: -15, size: 200, opacity: 0.3 },
                        { top: "20%", right: "8%", rotate: 12, size: 180, opacity: 0.25 },
                        { bottom: "15%", left: "12%", rotate: 8, size: 160, opacity: 0.2 },
                        { bottom: "25%", right: "5%", rotate: -10, size: 220, opacity: 0.35 },
                        { top: "60%", left: "45%", rotate: 5, size: 140, opacity: 0.15 },
                    ].map((img, i) => (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                top: img.top,
                                left: img.left,
                                right: img.right,
                                bottom: img.bottom,
                                width: img.size,
                                height: img.size * 1.3,
                                transform: `rotate(${img.rotate}deg)`,
                                opacity: img.opacity,
                                borderRadius: "8px",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/images/img1.png"
                                alt=""
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse at center, rgba(45,42,38,0.7) 0%, rgba(45,42,38,0.95) 100%)",
                        zIndex: 1,
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        textAlign: "center",
                        maxWidth: "900px",
                        padding: "0 var(--section-padding-x)",
                    }}
                >
                    <OrnamentDivider width={100} color="var(--accent)" />

                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-sm)",
                            textTransform: "uppercase",
                            letterSpacing: "0.4em",
                            color: "var(--accent)",
                        }}
                    >
                        Captured Moments
                    </p>

                    <h1
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(3rem, 10vw, 7rem)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-sm)",
                            lineHeight: 1.05,
                        }}
                    >
                        Gallery
                    </h1>

                    <p
                        style={{
                            marginTop: "var(--space-xl)",
                            fontSize: "var(--text-xl)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.8)",
                            fontStyle: "italic",
                            maxWidth: "600px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Every frame tells a story. Every story holds a lifetime of memories.
                    </p>

                    {/* Decorative scattered polaroids below text */}
                    <div
                        style={{
                            marginTop: "var(--space-2xl)",
                            display: "flex",
                            justifyContent: "center",
                            gap: "var(--space-md)",
                            position: "relative",
                        }}
                    >
                        {[-12, 0, 12].map((rotate, i) => (
                            <div
                                key={i}
                                style={{
                                    width: "100px",
                                    height: "130px",
                                    backgroundColor: "#fff",
                                    padding: "8px 8px 30px 8px",
                                    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                                    transform: `rotate(${rotate}deg) translateY(${Math.abs(rotate)}px)`,
                                    transition: "transform 0.4s ease",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#ddd" }}>
                                    <Image
                                        src="/images/img1.png"
                                        alt=""
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll hint */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                        color: "var(--accent)",
                        fontSize: "var(--text-sm)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                    }}
                >
                    Scroll to explore
                </div>
            </section>

            {/* ============================================= */}
            {/* ARTISTIC MASONRY GALLERY */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--background)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                {/* Section Header */}
                <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                    <DiamondSeparator />
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "var(--text-4xl)",
                            fontWeight: 400,
                            color: "var(--color-charcoal)",
                            marginTop: "var(--space-lg)",
                        }}
                    >
                        Moments That Matter
                    </h2>
                    <p
                        style={{
                            marginTop: "var(--space-md)",
                            fontSize: "var(--text-lg)",
                            color: "var(--color-brown)",
                            maxWidth: "600px",
                            margin: "var(--space-md) auto 0",
                        }}
                    >
                        A curated collection of celebrations, emotions, and timeless memories.
                    </p>

                    {/* Filter Tabs */}
                    <div
                        style={{
                            marginTop: "var(--space-xl)",
                            display: "flex",
                            gap: "var(--space-sm)",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {["All", "Weddings", "Ceremonies", "Celebrations", "Decor"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter.toLowerCase())}
                                style={{
                                    padding: "10px 24px",
                                    fontSize: "var(--text-sm)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    backgroundColor: activeFilter === filter.toLowerCase() ? "var(--accent)" : "transparent",
                                    color: activeFilter === filter.toLowerCase() ? "var(--color-charcoal)" : "var(--color-brown)",
                                    border: "1px solid",
                                    borderColor: activeFilter === filter.toLowerCase() ? "var(--accent)" : "rgba(45,42,38,0.2)",
                                    borderRadius: "50px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Artistic Masonry Grid */}
                <div
                    className="gallery-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridAutoRows: "150px",
                        gap: "20px",
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            style={{
                                ...getSizeStyles(img.size),
                                position: "relative",
                                borderRadius: "12px",
                                overflow: "hidden",
                                transform: `rotate(${img.rotate}deg)`,
                                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                                cursor: "pointer",
                                transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = `rotate(0deg) scale(1.02)`;
                                e.currentTarget.style.zIndex = "10";
                                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = `rotate(${img.rotate}deg) scale(1)`;
                                e.currentTarget.style.zIndex = "1";
                                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.15)";
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(0deg, rgba(45,42,38,0.7) 0%, transparent 50%)",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease",
                                }}
                                className="img-overlay"
                            />
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
                    <button
                        style={{
                            padding: "14px 40px",
                            fontSize: "var(--text-sm)",
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            backgroundColor: "transparent",
                            color: "var(--color-charcoal)",
                            border: "2px solid var(--color-charcoal)",
                            borderRadius: "50px",
                            cursor: "pointer",
                            transition: "all 0.4s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--color-charcoal)";
                            e.currentTarget.style.color = "var(--color-ivory)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--color-charcoal)";
                        }}
                    >
                        Load More Memories
                    </button>
                </div>
            </section>

            {/* ============================================= */}
            {/* REELS / VIDEOS SECTION */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--color-charcoal)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                        <OrnamentDivider width={80} color="var(--accent)" />
                        <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--accent)" }}>
                            Watch & Feel
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-ivory)", marginTop: "var(--space-sm)" }}>
                            Cinematic Moments
                        </h2>
                        <p style={{ marginTop: "var(--space-md)", fontSize: "var(--text-lg)", fontWeight: 300, color: "rgba(255,251,245,0.7)", maxWidth: "550px", margin: "var(--space-md) auto 0" }}>
                            Short films capturing the essence of celebrations at Devolia.
                        </p>
                    </div>

                    {/* Reels Grid - Phone-style vertical cards */}
                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(6, 1fr)",
                            gap: "var(--space-md)",
                        }}
                    >
                        {reels.map((reel, index) => (
                            <div
                                key={reel.id}
                                style={{
                                    position: "relative",
                                    aspectRatio: "9/16",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
                                    e.currentTarget.style.zIndex = "10";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = `rotate(${index % 2 === 0 ? -2 : 2}deg) scale(1)`;
                                    e.currentTarget.style.zIndex = "1";
                                }}
                            >
                                <Image
                                    src={reel.thumbnail}
                                    alt={reel.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 50%)" }} />

                                {/* Play button */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(255,251,245,0.9)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-charcoal)">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>

                                {/* Info */}
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-md)" }}>
                                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-ivory)", marginBottom: "4px" }}>
                                        {reel.title}
                                    </p>
                                    <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,251,245,0.6)" }}>
                                        {reel.duration} • {reel.views} views
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* FEATURED WEDDING STORIES */}
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
                            Love Stories
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                            Featured Weddings
                        </h2>
                    </div>

                    {/* Stories - Overlapping Cards */}
                    <div
                        className="fade-section"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "var(--space-lg)",
                            flexWrap: "wrap",
                        }}
                    >
                        {stories.map((story, index) => (
                            <div
                                key={story.couple}
                                style={{
                                    position: "relative",
                                    width: "320px",
                                    transform: `rotate(${(index - 1) * 3}deg) translateY(${index === 1 ? -20 : 0}px)`,
                                    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "rotate(0deg) translateY(-10px) scale(1.02)";
                                    e.currentTarget.style.zIndex = "10";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = `rotate(${(index - 1) * 3}deg) translateY(${index === 1 ? -20 : 0}px)`;
                                    e.currentTarget.style.zIndex = "1";
                                }}
                            >
                                {/* Polaroid style */}
                                <div
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "15px 15px 60px 15px",
                                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                                    }}
                                >
                                    <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
                                        <Image
                                            src={story.image}
                                            alt={story.couple}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div style={{ position: "absolute", bottom: "15px", left: "15px", right: "15px", textAlign: "center" }}>
                                        <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-lg)", color: "var(--color-charcoal)" }}>
                                            {story.couple}
                                        </p>
                                        <p style={{ fontSize: "var(--text-xs)", color: "var(--color-brown)", marginTop: "4px" }}>
                                            {story.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
                        <Link href="/experience" className="btn btn-primary">
                            Explore All Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* QUOTE / TESTIMONIAL */}
            {/* ============================================= */}
            <section
                className="fade-section"
                style={{
                    position: "relative",
                    padding: "calc(var(--section-padding-y) * 1.5) var(--section-padding-x)",
                    backgroundColor: "var(--background)",
                    textAlign: "center",
                }}
            >
                <BotanicalElement size={40} color="var(--accent)" />
                <blockquote
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "var(--text-3xl)",
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "var(--color-charcoal)",
                        maxWidth: "900px",
                        margin: "var(--space-lg) auto 0",
                        lineHeight: 1.5,
                    }}
                >
                    "We don't just host weddings — we create the backdrop
                    for your most cherished memories."
                </blockquote>
                <p
                    style={{
                        marginTop: "var(--space-lg)",
                        fontSize: "var(--text-sm)",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "var(--accent)",
                    }}
                >
                    — The Devolia Family
                </p>
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
                <div className="fade-section" style={{ position: "relative", zIndex: 10, maxWidth: "800px", margin: "0 auto" }}>
                    <OrnamentDivider width={100} color="var(--accent)" />

                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "var(--text-4xl)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-xl)",
                            lineHeight: 1.3,
                        }}
                    >
                        Ready to Create<br />
                        <span style={{ color: "var(--accent)" }}>Your Own Memories?</span>
                    </h2>

                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.75)",
                        }}
                    >
                        Let's turn your vision into a celebration worth remembering.
                    </p>

                    <div style={{ marginTop: "var(--space-xl)", display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn btn-primary">
                            Start Planning
                        </Link>
                        <Link href="/grounds" className="btn btn-glass">
                            Explore Venues
                        </Link>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style jsx global>{`
        .gallery-item:hover .img-overlay {
          opacity: 1 !important;
        }

        @media (max-width: 1200px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="grid-template-columns: repeat(6, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: repeat(6, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </div>
    );
}
