"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AutoScroller from "@/components/AutoScroller";
import { gsap, ScrollTrigger } from "@/components/animations/gsap-utils";
import { OrnamentDivider, DiamondSeparator, BotanicalElement } from "@/components/PremiumSVGs";

// Image data for auto-scrollers
const weddingImages = [
    { src: "/images/img1.png", alt: "Wedding ceremony setup" }, // REPLACE: wedding-1.jpg
    { src: "/images/img1.png", alt: "Mandap decoration" }, // REPLACE: wedding-2.jpg
    { src: "/images/img1.png", alt: "Couple portraits" }, // REPLACE: wedding-3.jpg
    { src: "/images/img1.png", alt: "Reception dance" }, // REPLACE: wedding-4.jpg
    { src: "/images/img1.png", alt: "Haldi ceremony" }, // REPLACE: wedding-5.jpg
    { src: "/images/img1.png", alt: "Night celebrations" }, // REPLACE: wedding-6.jpg
];

const birthdayImages = [
    { src: "/images/img1.png", alt: "Kids birthday party" }, // REPLACE: birthday-1.jpg
    { src: "/images/img1.png", alt: "Birthday decorations" }, // REPLACE: birthday-2.jpg
    { src: "/images/img1.png", alt: "Cake cutting" }, // REPLACE: birthday-3.jpg
    { src: "/images/img1.png", alt: "Birthday celebration" }, // REPLACE: birthday-4.jpg
    { src: "/images/img1.png", alt: "Party games" }, // REPLACE: birthday-5.jpg
];

const corporateImages = [
    { src: "/images/img1.png", alt: "Conference setup" }, // REPLACE: corporate-1.jpg
    { src: "/images/img1.png", alt: "Team building activity" }, // REPLACE: corporate-2.jpg
    { src: "/images/img1.png", alt: "Corporate dinner" }, // REPLACE: corporate-3.jpg
    { src: "/images/img1.png", alt: "Presentation" }, // REPLACE: corporate-4.jpg
    { src: "/images/img1.png", alt: "Networking event" }, // REPLACE: corporate-5.jpg
];

const celebrationImages = [
    { src: "/images/img1.png", alt: "Anniversary celebration" }, // REPLACE: celebration-1.jpg
    { src: "/images/img1.png", alt: "Engagement party" }, // REPLACE: celebration-2.jpg
    { src: "/images/img1.png", alt: "Family reunion" }, // REPLACE: celebration-3.jpg
    { src: "/images/img1.png", alt: "Golden jubilee" }, // REPLACE: celebration-4.jpg
    { src: "/images/img1.png", alt: "Celebration dinner" }, // REPLACE: celebration-5.jpg
];

export default function ExperiencePage() {
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

            // Image reveals
            const imageContainers = document.querySelectorAll(".image-reveal");
            imageContainers.forEach((container) => {
                gsap.fromTo(
                    container,
                    { clipPath: "inset(0 100% 0 0)" },
                    {
                        clipPath: "inset(0 0% 0 0)",
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 75%",
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
            {/* HERO SECTION - Cinematic Opening */}
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
                        src="/images/img1.png" // REPLACE: experience-hero.jpg (cinematic aerial venue shot)
                        alt="Devolia Resort Experience"
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
                        Experiences at Devolia
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
                        Every Occasion,<br />
                        <span style={{ color: "var(--accent)" }}>Elevated</span>
                    </h1>

                    <p
                        style={{
                            marginTop: "var(--space-xl)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.8)",
                            maxWidth: "600px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        From weddings that span generations to intimate celebrations —
                        discover how Devolia transforms moments into memories.
                    </p>

                    {/* Quick Navigation Buttons */}
                    <div
                        style={{
                            marginTop: "var(--space-2xl)",
                            display: "flex",
                            gap: "var(--space-md)",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { id: "weddings", label: "Weddings" },
                            { id: "birthdays", label: "Birthdays" },
                            { id: "corporate", label: "Corporate" },
                            { id: "celebrations", label: "Celebrations" },
                        ].map((exp) => (
                            <a
                                key={exp.id}
                                href={`#${exp.id}`}
                                style={{
                                    padding: "12px 24px",
                                    fontSize: "var(--text-sm)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    color: "var(--color-ivory)",
                                    border: "1px solid rgba(255, 251, 245, 0.3)",
                                    borderRadius: "50px",
                                    textDecoration: "none",
                                    transition: "all 0.4s ease",
                                    backdropFilter: "blur(10px)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--accent)";
                                    e.currentTarget.style.color = "var(--color-charcoal)";
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = "var(--color-ivory)";
                                    e.currentTarget.style.borderColor = "rgba(255, 251, 245, 0.3)";
                                }}
                            >
                                {exp.label}
                            </a>
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
            </section >

            {/* ============================================= */}
            {/* WEDDINGS - Full Cinematic Section */}
            {/* ============================================= */}
            <section id="weddings" style={{ backgroundColor: "var(--background)" }}>
                {/* Full-width Hero Image */}
                <div
                    className="fade-section"
                    style={{
                        position: "relative",
                        height: "80vh",
                        minHeight: "600px",
                        display: "flex",
                        alignItems: "flex-end",
                        overflow: "hidden",
                    }}
                >
                    <Image
                        src="/images/img1.png" // REPLACE: wedding-hero.jpg (stunning wedding ceremony, wide shot)
                        alt="Wedding at Devolia"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(0deg, rgba(45,42,38,0.9) 0%, rgba(45,42,38,0.2) 50%, transparent 100%)",
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
                        <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--accent)" }}>
                            Premier Experience
                        </p>
                        <h2
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                fontWeight: 400,
                                color: "var(--color-ivory)",
                                marginTop: "var(--space-sm)",
                                lineHeight: 1.1,
                            }}
                        >
                            Weddings
                        </h2>
                        <p
                            style={{
                                marginTop: "var(--space-md)",
                                fontSize: "var(--text-lg)",
                                fontWeight: 300,
                                color: "rgba(255, 251, 245, 0.8)",
                                maxWidth: "600px",
                                lineHeight: 1.7,
                            }}
                        >
                            A Day at Devolia — where every hour unfolds with grace,
                            from morning preparations to midnight celebrations.
                        </p>
                    </div>
                </div>

                {/* Wedding Timeline - Editorial Layout */}
                <div style={{ padding: "var(--section-padding-y) var(--section-padding-x)", maxWidth: "1400px", margin: "0 auto" }}>

                    {/* Morning */}
                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "var(--space-2xl)",
                            alignItems: "center",
                            marginBottom: "var(--section-padding-y)",
                        }}
                    >
                        <div className="image-reveal" style={{ position: "relative", height: "500px", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
                            <Image
                                src="/images/img1.png" // REPLACE: wedding-morning.jpg (venue setup, flowers, mandap being prepared)
                                alt="Morning wedding preparations"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div style={{ padding: "var(--space-xl)" }}>
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)" }}>
                                The Beginning
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                                Morning Preparations
                            </h3>
                            <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-lg)", fontWeight: 300, color: "var(--color-brown)", lineHeight: 1.8 }}>
                                As the first light touches our grounds, a quiet symphony begins.
                                Flowers arranged with precision, fabrics draped with care, the mandap
                                rising like a promise. Our staff moves with purpose, ensuring every
                                detail aligns with your vision.
                            </p>
                            <p style={{ marginTop: "var(--space-md)", fontSize: "var(--text-base)", fontWeight: 300, color: "var(--color-brown)", lineHeight: 1.8, fontStyle: "italic" }}>
                                "The calm before the celebration — where anticipation becomes tangible."
                            </p>
                        </div>
                    </div>

                    {/* Afternoon - Reversed */}
                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "var(--space-2xl)",
                            alignItems: "center",
                            marginBottom: "var(--section-padding-y)",
                        }}
                    >
                        <div style={{ padding: "var(--space-xl)", order: 1 }}>
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)" }}>
                                Traditions
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                                Afternoon Rituals
                            </h3>
                            <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-lg)", fontWeight: 300, color: "var(--color-brown)", lineHeight: 1.8 }}>
                                The poolside deck transforms into a canvas of color and laughter.
                                Haldi, Mehendi, Sangeet — each ritual celebrated with the intimacy
                                it deserves. Family gathers, music plays, and memories are born.
                            </p>
                            <ul style={{ marginTop: "var(--space-md)", listStyle: "none", padding: 0 }}>
                                {["Haldi Ceremony", "Mehendi Session", "Sangeet Night", "Family Gatherings"].map((item) => (
                                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0", fontSize: "var(--text-base)", color: "var(--color-brown)" }}>
                                        <span style={{ width: "6px", height: "6px", backgroundColor: "var(--accent)", borderRadius: "50%" }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="image-reveal" style={{ position: "relative", height: "500px", borderRadius: "var(--border-radius-lg)", overflow: "hidden", order: 2 }}>
                            <Image
                                src="/images/img1.png" // REPLACE: wedding-haldi.jpg (haldi/mehendi ceremony, colorful, joyful)
                                alt="Afternoon wedding rituals"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/* Evening - Full Width */}
                    <div
                        className="fade-section"
                        style={{
                            position: "relative",
                            height: "70vh",
                            minHeight: "500px",
                            borderRadius: "var(--border-radius-lg)",
                            overflow: "hidden",
                            marginBottom: "var(--section-padding-y)",
                        }}
                    >
                        <Image
                            src="/images/img1.png" // REPLACE: wedding-ceremony.jpg (main ceremony, grand setup, evening lighting)
                            alt="Evening wedding ceremony"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(45,42,38,0.9) 0%, rgba(45,42,38,0.3) 60%, transparent 100%)" }} />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "var(--section-padding-x)",
                                transform: "translateY(-50%)",
                                maxWidth: "500px",
                                zIndex: 10,
                            }}
                        >
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)" }}>
                                The Main Event
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-ivory)", marginTop: "var(--space-sm)" }}>
                                Evening Ceremony
                            </h3>
                            <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-lg)", fontWeight: 300, color: "rgba(255,251,245,0.85)", lineHeight: 1.8 }}>
                                As the sun sets, the Grand Lawn transforms. Thousands of lights
                                illuminate the mandap, the pheras begin, and two lives become one.
                                This is the moment everything leads to.
                            </p>
                        </div>
                    </div>

                    {/* Night */}
                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "var(--space-2xl)",
                            alignItems: "center",
                        }}
                    >
                        <div className="image-reveal" style={{ position: "relative", height: "500px", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
                            <Image
                                src="/images/img1.png" // REPLACE: wedding-reception.jpg (reception, dance, lights, celebration)
                                alt="Night wedding celebrations"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div style={{ padding: "var(--space-xl)" }}>
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)" }}>
                                The Celebration
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 400, color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                                Night of Joy
                            </h3>
                            <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-lg)", fontWeight: 300, color: "var(--color-brown)", lineHeight: 1.8 }}>
                                The reception unfolds in our Royal Banquet Hall. A feast for
                                every sense — exquisite cuisine, live music, dance floors
                                that never empty. The celebration continues until the stars
                                fade and a new chapter begins.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wedding Gallery Auto-Scroller */}
                <div
                    className="fade-section"
                    style={{
                        padding: "var(--space-2xl) 0",
                        backgroundColor: "var(--background)",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: "var(--space-lg)" }}>
                        <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)" }}>
                            Gallery
                        </p>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-charcoal)", marginTop: "var(--space-xs)" }}>
                            Wedding Moments
                        </h3>
                    </div>
                    <AutoScroller images={weddingImages} speed={35} height="350px" />
                </div>

                {/* Wedding CTA */}
                <div
                    className="fade-section"
                    style={{
                        padding: "var(--space-2xl) var(--section-padding-x)",
                        backgroundColor: "var(--background-alt)",
                        textAlign: "center",
                    }}
                >
                    <Link href="/contact" className="btn btn-primary">
                        Plan Your Dream Wedding
                    </Link>
                </div>
            </section>

            {/* ============================================= */}
            {/* BIRTHDAYS - Magazine Style */}
            {/* ============================================= */}
            <section
                id="birthdays"
                style={{
                    backgroundColor: "var(--color-charcoal)",
                    padding: "var(--section-padding-y) 0",
                }}
            >
                <div style={{ padding: "0 var(--section-padding-x)", maxWidth: "1400px", margin: "0 auto" }}>
                    {/* Section Header */}
                    <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                        <DiamondSeparator />
                        <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "#E8B4B8" }}>
                            Celebrations of Life
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-5xl)", fontWeight: 400, color: "var(--color-ivory)", marginTop: "var(--space-sm)" }}>
                            Birthdays
                        </h2>
                        <p style={{ marginTop: "var(--space-md)", fontSize: "var(--text-lg)", fontWeight: 300, color: "rgba(255,251,245,0.7)", maxWidth: "600px", margin: "var(--space-md) auto 0" }}>
                            From magical childhoods to golden milestones — every age deserves grandeur.
                        </p>
                    </div>

                    {/* Two Column Feature */}
                    <div
                        className="fade-section"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "var(--space-lg)",
                        }}
                    >
                        {/* Kids Birthdays */}
                        <div
                            style={{
                                position: "relative",
                                height: "600px",
                                borderRadius: "var(--border-radius-lg)",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/images/img1.png" // REPLACE: birthday-kids.jpg (colorful kids party, balloons, decorations)
                                alt="Kids birthday party"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(45,42,38,0.9) 0%, transparent 60%)" }} />
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-xl)" }}>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", color: "var(--color-ivory)", marginBottom: "var(--space-sm)" }}>
                                    Kids & Teens
                                </h3>
                                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,251,245,0.8)", lineHeight: 1.7 }}>
                                    Themed wonderlands on our lawns. Clowns, magicians, bounce houses,
                                    and memories that last a childhood. We handle everything —
                                    you just bring the birthday star.
                                </p>
                            </div>
                        </div>

                        {/* Milestone Birthdays */}
                        <div
                            style={{
                                position: "relative",
                                height: "600px",
                                borderRadius: "var(--border-radius-lg)",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/images/img1.png" // REPLACE: birthday-milestone.jpg (elegant 50th/60th party, sophisticated setup)
                                alt="Milestone birthday celebration"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(45,42,38,0.9) 0%, transparent 60%)" }} />
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-xl)" }}>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", color: "var(--color-ivory)", marginBottom: "var(--space-sm)" }}>
                                    Milestone Celebrations
                                </h3>
                                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,251,245,0.8)", lineHeight: 1.7 }}>
                                    50th, 60th, 75th — decades of life deserve an elegant stage.
                                    Intimate dinners in our banquet, heartfelt speeches, and an
                                    evening that honors the journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Birthday Gallery Auto-Scroller */}
                    <div
                        style={{
                            padding: "var(--space-2xl) 0",
                            marginTop: "var(--space-xl)",
                        }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "var(--space-lg)" }}>
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "#E8B4B8" }}>
                                Gallery
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-ivory)", marginTop: "var(--space-xs)" }}>
                                Birthday Celebrations
                            </h3>
                        </div>
                        <AutoScroller images={birthdayImages} speed={30} direction="right" height="300px" variant="dark" />
                    </div>

                    {/* Birthday CTA */}
                    <div className="fade-section" style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
                        <Link href="/contact" className="btn btn-secondary" style={{ color: "var(--color-ivory)", borderColor: "#E8B4B8" }}>
                            Plan a Birthday
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* CORPORATE - Professional Elegance */}
            {/* ============================================= */}
            <section id="corporate" style={{ backgroundColor: "var(--background)", padding: "var(--section-padding-y) 0" }}>
                {/* Full-width Header Image */}
                <div
                    className="fade-section"
                    style={{
                        position: "relative",
                        height: "60vh",
                        minHeight: "450px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <Image
                        src="/images/img1.png" // REPLACE: corporate-hero.jpg (professional event setup, conference room, or team activity)
                        alt="Corporate events at Devolia"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(45,42,38,0.7)" }} />
                    <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "800px", padding: "0 var(--section-padding-x)" }}>
                        <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "#4A6741" }}>
                            Beyond the Boardroom
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-5xl)", fontWeight: 400, color: "var(--color-ivory)", marginTop: "var(--space-sm)" }}>
                            Corporate Events
                        </h2>
                        <p style={{ marginTop: "var(--space-md)", fontSize: "var(--text-lg)", fontWeight: 300, color: "rgba(255,251,245,0.8)" }}>
                            Where business meets tranquility. Retreats that inspire,
                            conferences that impress, celebrations that unite.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div style={{ padding: "var(--section-padding-y) var(--section-padding-x)", maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="fade-section" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-xl)" }}>
                        {[
                            { title: "Team Retreats", desc: "Escape the office. Build bonds in nature. Our grounds offer space for team activities, workshops, and relaxation.", icon: "🏕️" },
                            { title: "Conferences", desc: "State-of-the-art AV, flexible seating for 500+, and catering that impresses international delegates.", icon: "🎤" },
                            { title: "Corporate Dinners", desc: "Award nights, annual celebrations, client appreciation — served with elegance in our banquet halls.", icon: "🍽️" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                style={{
                                    padding: "var(--space-xl)",
                                    backgroundColor: "var(--background-alt)",
                                    borderRadius: "var(--border-radius-lg)",
                                    textAlign: "center",
                                    border: "1px solid rgba(74, 103, 65, 0.2)",
                                }}
                            >
                                <span style={{ fontSize: "3rem" }}>{item.icon}</span>
                                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", color: "var(--color-charcoal)", marginTop: "var(--space-md)" }}>
                                    {item.title}
                                </h4>
                                <p style={{ marginTop: "var(--space-sm)", fontSize: "var(--text-base)", color: "var(--color-brown)", lineHeight: 1.7 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Corporate Gallery Auto-Scroller */}
                    <div
                        style={{
                            padding: "var(--space-2xl) 0",
                            marginTop: "var(--space-lg)",
                        }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "var(--space-lg)" }}>
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A6741" }}>
                                Gallery
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-charcoal)", marginTop: "var(--space-xs)" }}>
                                Corporate Events
                            </h3>
                        </div>
                        <AutoScroller images={corporateImages} speed={32} height="280px" />
                    </div>

                    <div className="fade-section" style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
                        <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#4A6741", borderColor: "#4A6741" }}>
                            Plan Your Corporate Event
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* CELEBRATIONS - Life's Milestones */}
            {/* ============================================= */}
            <section id="celebrations" style={{ backgroundColor: "var(--background-alt)", padding: "var(--section-padding-y) 0" }}>
                <div style={{ padding: "0 var(--section-padding-x)", maxWidth: "1400px", margin: "0 auto" }}>
                    {/* Header */}
                    <div className="fade-section" style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
                        <DiamondSeparator />
                        <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.3em", color: "#8B7355" }}>
                            Life's Special Moments
                        </p>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-5xl)", fontWeight: 400, color: "var(--color-charcoal)", marginTop: "var(--space-sm)" }}>
                            Celebrations
                        </h2>
                    </div>

                    {/* Three Column Showcase */}
                    <div className="fade-section" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-lg)" }}>
                        {[
                            { title: "Anniversaries", desc: "25th, 50th, or any year worth celebrating. Rekindle the romance in the same elegance as your first day.", image: "/images/img1.png" },
                            { title: "Engagement Parties", desc: "The first celebration of many. Intimate, romantic, and unforgettable — set the tone for what's to come.", image: "/images/img1.png" },
                            { title: "Family Reunions", desc: "Generations together. Space for 100+ family members, activities for all ages, and meals that bring everyone to the table.", image: "/images/img1.png" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                style={{
                                    position: "relative",
                                    height: "500px",
                                    borderRadius: "var(--border-radius-lg)",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={item.image} // REPLACE: anniversary.jpg, engagement.jpg, reunion.jpg
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(45,42,38,0.9) 0%, rgba(45,42,38,0.2) 50%, transparent 100%)" }} />
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-lg)" }}>
                                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-ivory)" }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ marginTop: "var(--space-sm)", fontSize: "var(--text-sm)", color: "rgba(255,251,245,0.8)", lineHeight: 1.6 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Celebrations Gallery Auto-Scroller */}
                    <div
                        style={{
                            padding: "var(--space-2xl) 0",
                            marginTop: "var(--space-lg)",
                        }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "var(--space-lg)" }}>
                            <p style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8B7355" }}>
                                Gallery
                            </p>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-charcoal)", marginTop: "var(--space-xs)" }}>
                                Celebrations & Milestones
                            </h3>
                        </div>
                        <AutoScroller images={celebrationImages} speed={28} direction="right" height="300px" />
                    </div>

                    <div className="fade-section" style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
                        <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#8B7355", borderColor: "#8B7355" }}>
                            Plan Your Celebration
                        </Link>
                    </div>
                </div>
            </section >

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
                        src="/images/img1.png" // REPLACE: experience-finale.jpg (stunning venue at golden hour)
                        alt="Devolia Resort"
                        fill
                        style={{ objectFit: "cover", opacity: 0.15 }}
                    />
                </div>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(45,42,38,0.8) 0%, rgba(45,42,38,0.95) 100%)", zIndex: 1 }} />

                <div className="fade-section" style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto" }}>
                    <BotanicalElement size={60} color="var(--accent)" />

                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-xl)",
                            lineHeight: 1.2,
                        }}
                    >
                        Every Celebration Has a Story.<br />
                        <span style={{ color: "var(--accent)" }}>We Take Care of Every Chapter.</span>
                    </h2>

                    <p
                        style={{
                            marginTop: "var(--space-xl)",
                            fontSize: "var(--text-xl)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.75)",
                            lineHeight: 1.8,
                        }}
                    >
                        Whatever the occasion — we provide the canvas, the expertise,
                        and the care. You bring the vision and the people you love.
                    </p>

                    <div style={{ marginTop: "var(--space-2xl)", display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn btn-primary" style={{ color: "var(--color-ivory)" }}>
                            Start Planning
                        </Link>
                        <Link href="/grounds" className="btn btn-glass">
                            Explore Venues
                        </Link>
                        <Link href="/gallery" className="btn btn-glass">
                            View Gallery
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
          div[style*="order: 1"], div[style*="order: 2"] {
            order: unset !important;
          }
        }
      `}</style>
        </div >
    );
}
