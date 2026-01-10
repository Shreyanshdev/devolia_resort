"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { gsap, ScrollTrigger } from "@/components/animations/gsap-utils";
import { OrnamentDivider, DiamondSeparator, BotanicalElement, WhatsAppIcon, InstagramIcon, FacebookIcon, EmailIcon, PhoneIcon, MessageIcon, SendIcon } from "@/components/PremiumSVGs";

// Contact info
const contactInfo = {
    phone: "+91 80460 59184",
    phoneAlt: "+91 80460 57308",
    email: "contact@devolia.in",
    whatsapp: "+918046059184",
    address: "Devoliya Garden, Jalaun-Churkhi Bypass Road",
    addressLine2: "Near Mayur Vihar, Orai, Jalaun",
    pincode: "285001, Uttar Pradesh, India",
    hours: "9:30 AM - 9:00 PM (All Days)",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.620138402747!2d79.4415947!3d26.0148725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7fd68fb3b129%3A0xf078b9e6bbd983e6!2sDevolia%20Resort!5e0!3m2!1sen!2sin",
};

// Social links with SVG icons
const socialLinks = [
    { name: "WhatsApp", Icon: WhatsAppIcon, href: `https://wa.me/${contactInfo.whatsapp}`, color: "#25D366" },
    { name: "Instagram", Icon: InstagramIcon, href: "https://instagram.com/devolia_resort", color: "#E4405F" },
    { name: "Facebook", Icon: FacebookIcon, href: "https://facebook.com/devolia_resort", color: "#1877F2" },
    { name: "Email", Icon: EmailIcon, href: `mailto:${contactInfo.email}`, color: "#EA4335" },
];

// Form options
const occasionOptions = [
    "Wedding",
    "Reception",
    "Engagement",
    "Birthday Party",
    "Corporate Event",
    "Family Reunion",
    "Anniversary",
    "Other",
];

const reasonOptions = [
    "General Inquiry",
    "Book a Visit",
    "Get Quotation",
    "Check Availability",
    "Discuss Packages",
    "Feedback",
    "Partnership Inquiry",
    "Other",
];

export default function ContactPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        occasion: "",
        reason: "",
        expectedGuests: "",
        preferredDate: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    occasion: "",
                    reason: "",
                    expectedGuests: "",
                    preferredDate: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyles: React.CSSProperties = {
        width: "100%",
        padding: "16px 20px",
        fontSize: "var(--text-base)",
        fontFamily: "var(--font-body)",
        backgroundColor: "var(--background)",
        border: "1px solid rgba(45, 42, 38, 0.15)",
        borderRadius: "var(--border-radius-sm)",
        color: "var(--color-charcoal)",
        transition: "all 0.3s ease",
        outline: "none",
    };

    const labelStyles: React.CSSProperties = {
        display: "block",
        marginBottom: "8px",
        fontSize: "var(--text-sm)",
        fontWeight: 500,
        color: "var(--color-charcoal)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
    };

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
                    minHeight: "70vh",
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
                        src="/images/img1.png" // REPLACE: contact-hero.jpg
                        alt="Contact Devolia"
                        fill
                        style={{ objectFit: "cover", opacity: 0.3 }}
                        priority
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(45,42,38,0.5) 0%, rgba(45,42,38,0.9) 100%)",
                        zIndex: 1,
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        textAlign: "center",
                        maxWidth: "800px",
                        padding: "0 var(--section-padding-x)",
                    }}
                >
                    <OrnamentDivider width={100} color="var(--accent)" />

                    <h1
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.5rem, 6vw, 5rem)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-lg)",
                            lineHeight: 1.1,
                        }}
                    >
                        Let's Plan Your<br />
                        <span style={{ color: "var(--accent)" }}>Celebration</span>
                    </h1>

                    <p
                        style={{
                            marginTop: "var(--space-lg)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 300,
                            color: "rgba(255, 251, 245, 0.8)",
                        }}
                    >
                        We're here to bring your vision to life. Reach out and let's start the conversation.
                    </p>
                </div>
            </section>

            {/* ============================================= */}
            {/* CONTACT SECTION */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--background)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.2fr 1fr",
                            gap: "var(--space-2xl)",
                        }}
                    >
                        {/* Contact Form */}
                        <div className="fade-section">
                            <DiamondSeparator />
                            <h2
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "var(--text-3xl)",
                                    fontWeight: 400,
                                    color: "var(--color-charcoal)",
                                    marginTop: "var(--space-lg)",
                                }}
                            >
                                Send Us a Message
                            </h2>
                            <p
                                style={{
                                    marginTop: "var(--space-sm)",
                                    fontSize: "var(--text-base)",
                                    color: "var(--color-brown)",
                                }}
                            >
                                Fill in the details below and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} style={{ marginTop: "var(--space-xl)" }}>
                                {/* Row 1: Name & Phone */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md)", marginBottom: "var(--space-md)" }}>
                                    <div>
                                        <label style={labelStyles}>Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your full name"
                                            style={inputStyles}
                                            onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                            onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyles}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                            style={inputStyles}
                                            onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                            onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email */}
                                <div style={{ marginBottom: "var(--space-md)" }}>
                                    <label style={labelStyles}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@example.com"
                                        style={inputStyles}
                                        onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                        onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                    />
                                </div>

                                {/* Row 3: Occasion & Reason */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md)", marginBottom: "var(--space-md)" }}>
                                    <div>
                                        <label style={labelStyles}>Occasion Type</label>
                                        <select
                                            name="occasion"
                                            value={formData.occasion}
                                            onChange={handleInputChange}
                                            style={{ ...inputStyles, cursor: "pointer" }}
                                            onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                            onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                        >
                                            <option value="">Select occasion...</option>
                                            {occasionOptions.map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={labelStyles}>Reason for Contact</label>
                                        <select
                                            name="reason"
                                            value={formData.reason}
                                            onChange={handleInputChange}
                                            style={{ ...inputStyles, cursor: "pointer" }}
                                            onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                            onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                        >
                                            <option value="">Select reason...</option>
                                            {reasonOptions.map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 4: Guests & Date */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md)", marginBottom: "var(--space-md)" }}>
                                    <div>
                                        <label style={labelStyles}>Expected Guests</label>
                                        <input
                                            type="text"
                                            name="expectedGuests"
                                            value={formData.expectedGuests}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 300-500"
                                            style={inputStyles}
                                            onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                            onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyles}>Preferred Date</label>
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleInputChange}
                                            style={inputStyles}
                                            onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                            onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                        />
                                    </div>
                                </div>

                                {/* Row 5: Message */}
                                <div style={{ marginBottom: "var(--space-lg)" }}>
                                    <label style={labelStyles}>Your Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your celebration plans, any specific requirements, or questions you have..."
                                        style={{ ...inputStyles, resize: "vertical", minHeight: "120px" }}
                                        onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                                        onBlur={(e) => e.target.style.borderColor = "rgba(45, 42, 38, 0.15)"}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-submit"
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "12px",
                                        opacity: isSubmitting ? 0.7 : 1,
                                        cursor: isSubmitting ? "not-allowed" : "pointer",
                                    }}
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message <SendIcon size={18} />
                                        </>
                                    )}
                                </button>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div
                                        style={{
                                            marginTop: "var(--space-md)",
                                            padding: "16px",
                                            backgroundColor: "rgba(74, 103, 65, 0.1)",
                                            border: "1px solid rgba(74, 103, 65, 0.3)",
                                            borderRadius: "var(--border-radius-sm)",
                                            color: "#4A6741",
                                            textAlign: "center",
                                        }}
                                    >
                                        ✓ Thank you! Your message has been sent. We'll get back to you soon.
                                    </div>
                                )}
                                {submitStatus === "error" && (
                                    <div
                                        style={{
                                            marginTop: "var(--space-md)",
                                            padding: "16px",
                                            backgroundColor: "rgba(220, 53, 69, 0.1)",
                                            border: "1px solid rgba(220, 53, 69, 0.3)",
                                            borderRadius: "var(--border-radius-sm)",
                                            color: "#dc3545",
                                            textAlign: "center",
                                        }}
                                    >
                                        ✗ Something went wrong. Please try again or contact us directly.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="fade-section">
                            {/* Quick Contact Card */}
                            <div
                                style={{
                                    backgroundColor: "var(--color-charcoal)",
                                    borderRadius: "var(--border-radius-lg)",
                                    padding: "var(--space-xl)",
                                    marginBottom: "var(--space-lg)",
                                }}
                            >
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-ivory)", marginBottom: "var(--space-lg)" }}>
                                    Quick Contact
                                </h3>

                                <div style={{ marginBottom: "var(--space-lg)" }}>
                                    <p style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "8px" }}>
                                        Call Us
                                    </p>
                                    <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} style={{ fontSize: "var(--text-lg)", color: "var(--color-ivory)", textDecoration: "none" }}>
                                        {contactInfo.phone}
                                    </a>
                                    <br />
                                    <a href={`tel:${contactInfo.phoneAlt.replace(/\s/g, "")}`} style={{ fontSize: "var(--text-base)", color: "rgba(255,251,245,0.7)", textDecoration: "none" }}>
                                        {contactInfo.phoneAlt}
                                    </a>
                                </div>

                                <div style={{ marginBottom: "var(--space-lg)" }}>
                                    <p style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "8px" }}>
                                        Email
                                    </p>
                                    <a href={`mailto:${contactInfo.email}`} style={{ fontSize: "var(--text-base)", color: "var(--color-ivory)", textDecoration: "none" }}>
                                        {contactInfo.email}
                                    </a>
                                </div>

                                <div style={{ marginBottom: "var(--space-lg)" }}>
                                    <p style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "8px" }}>
                                        Hours
                                    </p>
                                    <p style={{ fontSize: "var(--text-base)", color: "var(--color-ivory)" }}>
                                        {contactInfo.hours}
                                    </p>
                                </div>

                                <div>
                                    <p style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "8px" }}>
                                        Address
                                    </p>
                                    <p style={{ fontSize: "var(--text-base)", color: "var(--color-ivory)", lineHeight: 1.6 }}>
                                        {contactInfo.address}<br />
                                        {contactInfo.addressLine2}<br />
                                        {contactInfo.pincode}
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div
                                style={{
                                    backgroundColor: "var(--background-alt)",
                                    borderRadius: "var(--border-radius-lg)",
                                    padding: "var(--space-xl)",
                                    marginBottom: "var(--space-lg)",
                                }}
                            >
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", color: "var(--color-charcoal)", marginBottom: "var(--space-md)" }}>
                                    Connect With Us
                                </h3>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-sm)" }}>
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "12px 16px",
                                                backgroundColor: "var(--background)",
                                                borderRadius: "var(--border-radius-sm)",
                                                textDecoration: "none",
                                                color: "var(--color-charcoal)",
                                                fontSize: "var(--text-sm)",
                                                fontWeight: 500,
                                                transition: "all 0.3s ease",
                                                border: "1px solid rgba(45,42,38,0.1)",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = social.color;
                                                e.currentTarget.style.color = "#fff";
                                                e.currentTarget.style.borderColor = social.color;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = "var(--background)";
                                                e.currentTarget.style.color = "var(--color-charcoal)";
                                                e.currentTarget.style.borderColor = "rgba(45,42,38,0.1)";
                                            }}
                                        >
                                            <social.Icon size={20} color="currentColor" />
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Venue Preview Image */}
                            <div
                                style={{
                                    position: "relative",
                                    height: "250px",
                                    borderRadius: "var(--border-radius-lg)",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src="/images/img1.png" // REPLACE: contact-venue.jpg
                                    alt="Devolia Resort"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(45,42,38,0.8) 0%, transparent 50%)" }} />
                                <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
                                    <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-lg)", color: "var(--color-ivory)" }}>
                                        Visit Us Today
                                    </p>
                                    <Link
                                        href="https://www.google.com/maps/place/Devolia+Resort/@26.0148725,79.4415947,17z/data=!3m1!4b1!4m6!3m5!1s0x399d7fd68fb3b129:0xf078b9e6bbd983e6!8m2!3d26.0148725!4d79.4415947"
                                        target="_blank"
                                        style={{ fontSize: "var(--text-sm)", color: "var(--accent)", textDecoration: "none" }}
                                    >
                                        Get Directions →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* MAP SECTION */}
            {/* ============================================= */}
            <section
                className="fade-section"
                style={{
                    backgroundColor: "var(--background-alt)",
                    padding: "var(--section-padding-y) var(--section-padding-x)",
                }}
            >
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", color: "var(--color-charcoal)" }}>
                            Find Us
                        </h2>
                        <p style={{ marginTop: "var(--space-sm)", color: "var(--color-brown)" }}>
                            Located in the heart of Orai, easily accessible from all major routes.
                        </p>
                    </div>

                    <div
                        style={{
                            position: "relative",
                            height: "450px",
                            borderRadius: "var(--border-radius-lg)",
                            overflow: "hidden",
                            border: "1px solid rgba(45,42,38,0.1)",
                        }}
                    >
                        <iframe
                            src={contactInfo.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Devolia Resort Location"
                        />
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* CLOSING CTA */}
            {/* ============================================= */}
            <section
                style={{
                    backgroundColor: "var(--color-charcoal)",
                    padding: "calc(var(--section-padding-y) * 1.5) var(--section-padding-x)",
                    textAlign: "center",
                }}
            >
                <div className="fade-section" style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <BotanicalElement size={40} color="var(--accent)" />

                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "var(--text-3xl)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            marginTop: "var(--space-lg)",
                        }}
                    >
                        Prefer a Direct Conversation?
                    </h2>

                    <p
                        style={{
                            marginTop: "var(--space-md)",
                            fontSize: "var(--text-lg)",
                            color: "rgba(255,251,245,0.7)",
                        }}
                    >
                        Call us right now or send a WhatsApp message. We're always ready to help.
                    </p>

                    <div style={{ marginTop: "var(--space-xl)", display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                        <a
                            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                            className="btn btn-primary"
                            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                        >
                            <PhoneIcon size={18} color="currentColor" /> Call Now
                        </a>
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-glass"
                            style={{ backgroundColor: "rgba(37, 211, 102, 0.2)", borderColor: "#25D366", color: "#25D366", display: "inline-flex", alignItems: "center", gap: "8px" }}
                        >
                            <MessageIcon size={18} color="currentColor" /> WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style jsx global>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1.2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
