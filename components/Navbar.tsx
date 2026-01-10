"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "./animations/gsap-utils";

interface DropdownItem {
    href: string;
    label: string;
    description?: string;
    image?: string; // Image path for dropdown item
}

interface NavLink {
    href: string;
    label: string;
    dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    {
        href: "/experience",
        label: "Experience",
        dropdown: [
            {
                href: "/experience#weddings",
                label: "Weddings",
                description: "A day at Devolia",
                image: "/images/img1.png" // Replace with: experience-wedding.jpg
            },
            {
                href: "/experience#birthdays",
                label: "Birthdays",
                description: "Celebrations of life",
                image: "/images/img1.png" // Replace with: experience-birthday.jpg
            },
            {
                href: "/experience#corporate",
                label: "Corporate Events",
                description: "Beyond the boardroom",
                image: "/images/img1.png" // Replace with: experience-corporate.jpg
            },
            {
                href: "/experience#celebrations",
                label: "Celebrations",
                description: "Anniversaries & more",
                image: "/images/img1.png" // Replace with: experience-celebration.jpg
            },
        ],
    },
    {
        href: "/grounds",
        label: "Grounds",
        dropdown: [
            {
                href: "/grounds#sanskar",
                label: "Sanskar Ground",
                description: "Grand wedding venue",
                image: "/images/img1.png" // Replace with: sanskar-preview.jpg
            },
            {
                href: "/grounds#sagun",
                label: "Sagun Ground",
                description: "Twin celebration space",
                image: "/images/img1.png" // Replace with: sagun-preview.jpg
            },
            {
                href: "/grounds#poolside",
                label: "Poolside Deck",
                description: "Intimate ceremonies",
                image: "/images/img1.png" // Replace with: poolside-preview.jpg
            },
        ],
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/legacy", label: "Legacy" },
];

interface NavbarProps {
    variant?: "light" | "dark";
}

export default function Navbar({ variant = "light" }: NavbarProps) {
    const navRef = useRef<HTMLElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navbar entrance animation
    useEffect(() => {
        if (!navRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(navRef.current, { opacity: 1, y: 0 });
            return;
        }

        gsap.fromTo(
            navRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
        );
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        if (isMobileMenuOpen) {
            gsap.fromTo(
                mobileMenuRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: "power2.out" }
            );

            gsap.fromTo(
                mobileMenuRef.current.querySelectorAll(".mobile-link"),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.15 }
            );
        }
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const handleDropdownEnter = (label: string) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setActiveDropdown(label);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    const isDark = variant === "dark";

    return (
        <>
            {/* Top gradient overlay for navbar visibility */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isScrolled ? "0px" : "120px",
                    background: isScrolled
                        ? "transparent"
                        : "linear-gradient(180deg, rgba(45, 42, 38, 0.6) 0%, rgba(45, 42, 38, 0.3) 50%, transparent 100%)",
                    zIndex: 999,
                    pointerEvents: "none",
                    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
            />
            <nav
                ref={navRef}
                className="main-navbar"
                style={{
                    position: "fixed",
                    top: isScrolled ? "15px" : 0,
                    left: 0,
                    right: 0,
                    width: isScrolled ? "min(75%, 1100px)" : "100%",
                    margin: isScrolled ? "0 auto" : 0,
                    zIndex: 1000,
                    padding: isScrolled ? "10px 30px" : "20px 0",
                    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                    backgroundColor: isScrolled
                        ? "rgba(45, 42, 38, 0.85)"
                        : "transparent",
                    backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "blur(8px)",
                    WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "blur(8px)",
                    borderRadius: isScrolled ? "60px" : "0",
                    border: isScrolled
                        ? "1px solid rgba(196, 169, 98, 0.25)"
                        : "1px solid transparent",
                    boxShadow: isScrolled
                        ? "0 10px 40px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.05)"
                        : "none",
                }}
            >
                <div
                    style={{
                        maxWidth: isScrolled ? "100%" : "1400px",
                        margin: "0 auto",
                        padding: isScrolled ? "0" : "0 clamp(1.5rem, 5vw, 4rem)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo with elegant styling */}
                    <Link
                        href="/"
                        className="nav-logo"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: isScrolled ? "clamp(1.3rem, 2.5vw, 1.6rem)" : "clamp(1.6rem, 3vw, 2rem)",
                            fontWeight: 400,
                            color: "var(--color-ivory)",
                            textDecoration: "none",
                            letterSpacing: "0.05em",
                            transition: "all 0.4s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            textShadow: isScrolled ? "none" : "0 2px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        Devolia Resort
                    </Link>

                    {/* Desktop Navigation */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "clamp(2rem, 4vw, 3.5rem)",
                        }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.href}
                                style={{ position: "relative" }}
                                onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <Link
                                    href={link.href}
                                    className="nav-link"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: isScrolled ? "0.75rem" : "0.85rem",
                                        fontWeight: 400,
                                        color: "var(--color-ivory)",
                                        textDecoration: "none",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.12em",
                                        transition: "all 0.3s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "8px 0",
                                        position: "relative",
                                        textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    {link.label}
                                    {link.dropdown && (
                                        <svg
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            style={{
                                                transition: "transform 0.3s ease",
                                                transform: activeDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)",
                                            }}
                                        >
                                            <path
                                                d="M1 1L5 5L9 1"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </Link>

                                {/* Animated underline */}
                                <span
                                    className="nav-underline"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "var(--accent)",
                                        transform: "scaleX(0)",
                                        transformOrigin: "right",
                                        transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                    }}
                                />

                                {/* Dropdown Menu with Images */}
                                {link.dropdown && activeDropdown === link.label && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            paddingTop: "16px",
                                            minWidth: "480px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                background: "rgba(255, 251, 245, 0.98)",
                                                backdropFilter: "blur(24px)",
                                                WebkitBackdropFilter: "blur(24px)",
                                                borderRadius: "20px",
                                                padding: "12px",
                                                boxShadow: "0 25px 80px rgba(45, 42, 38, 0.18), 0 0 0 1px rgba(196, 169, 98, 0.12)",
                                                animation: "dropdownFadeIn 0.35s ease forwards",
                                            }}
                                        >
                                            {link.dropdown.map((item, index) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "16px",
                                                        padding: "14px 16px",
                                                        borderRadius: "14px",
                                                        textDecoration: "none",
                                                        transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                                                        animation: `dropdownItemFadeIn 0.35s ease ${index * 0.06}s forwards`,
                                                        opacity: 0,
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = "rgba(196, 169, 98, 0.1)";
                                                        const img = e.currentTarget.querySelector('.dropdown-img') as HTMLElement;
                                                        if (img) {
                                                            img.style.transform = "scale(1.05)";
                                                            img.style.boxShadow = "0 8px 25px rgba(196, 169, 98, 0.25)";
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = "transparent";
                                                        const img = e.currentTarget.querySelector('.dropdown-img') as HTMLElement;
                                                        if (img) {
                                                            img.style.transform = "scale(1)";
                                                            img.style.boxShadow = "0 4px 12px rgba(45, 42, 38, 0.08)";
                                                        }
                                                    }}
                                                >
                                                    {/* Text Content */}
                                                    <div style={{ flex: 1 }}>
                                                        <span
                                                            style={{
                                                                display: "block",
                                                                fontFamily: "var(--font-heading)",
                                                                fontSize: "1.15rem",
                                                                color: "var(--color-charcoal)",
                                                                marginBottom: "4px",
                                                                transition: "color 0.3s ease",
                                                            }}
                                                        >
                                                            {item.label}
                                                        </span>
                                                        {item.description && (
                                                            <span
                                                                style={{
                                                                    display: "block",
                                                                    fontSize: "0.82rem",
                                                                    color: "var(--color-brown)",
                                                                    fontWeight: 300,
                                                                    letterSpacing: "0.01em",
                                                                }}
                                                            >
                                                                {item.description}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Image on Right */}
                                                    {item.image && (
                                                        <div
                                                            className="dropdown-img"
                                                            style={{
                                                                width: "80px",
                                                                height: "56px",
                                                                borderRadius: "10px",
                                                                overflow: "hidden",
                                                                flexShrink: 0,
                                                                boxShadow: "0 4px 12px rgba(45, 42, 38, 0.08)",
                                                                transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                                                                border: "1px solid rgba(196, 169, 98, 0.15)",
                                                            }}
                                                        >
                                                            <Image
                                                                src={item.image}
                                                                alt={item.label}
                                                                width={80}
                                                                height={56}
                                                                style={{
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Premium CTA Button */}
                        <Link
                            href="/contact"
                            className="nav-cta"
                            style={{
                                position: "relative",
                                padding: isScrolled ? "8px 20px" : "12px 28px",
                                fontFamily: "var(--font-body)",
                                fontSize: isScrolled ? "0.7rem" : "0.8rem",
                                fontWeight: 500,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                color: "var(--color-charcoal)",
                                backgroundColor: "var(--accent)",
                                border: "none",
                                borderRadius: "50px",
                                overflow: "hidden",
                                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                boxShadow: "0 0 20px rgba(196, 169, 98, 0.3)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--color-ivory)";
                                e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 251, 245, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--accent)";
                                e.currentTarget.style.boxShadow = "0 0 20px rgba(196, 169, 98, 0.3)";
                            }}
                        >
                            Plan Wedding
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Premium Design */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="mobile-menu-btn"
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "10px",
                            zIndex: 1001,
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                width: "32px",
                                height: "24px",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    display: "block",
                                    width: isMobileMenuOpen ? "24px" : "28px",
                                    height: "2px",
                                    backgroundColor: isScrolled || isMobileMenuOpen ? "var(--color-charcoal)" : isDark ? "var(--color-ivory)" : "var(--color-charcoal)",
                                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                    transform: isMobileMenuOpen ? "rotate(45deg)" : "translateY(-8px)",
                                    borderRadius: "2px",
                                }}
                            />
                            <span
                                style={{
                                    display: "block",
                                    width: "20px",
                                    height: "2px",
                                    backgroundColor: isScrolled || isMobileMenuOpen ? "var(--color-charcoal)" : isDark ? "var(--color-ivory)" : "var(--color-charcoal)",
                                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                    transform: isMobileMenuOpen ? "translateX(10px)" : "translateX(0)",
                                    borderRadius: "2px",
                                }}
                            />
                            <span
                                style={{
                                    position: "absolute",
                                    display: "block",
                                    width: isMobileMenuOpen ? "24px" : "28px",
                                    height: "2px",
                                    backgroundColor: isScrolled || isMobileMenuOpen ? "var(--color-charcoal)" : isDark ? "var(--color-ivory)" : "var(--color-charcoal)",
                                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                    transform: isMobileMenuOpen ? "rotate(-45deg)" : "translateY(8px)",
                                    borderRadius: "2px",
                                }}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Premium Full Screen */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "var(--background)",
                        zIndex: 999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "var(--space-md)",
                        padding: "var(--space-xl)",
                    }}
                >
                    {/* Decorative element */}
                    <div
                        className="mobile-link"
                        style={{
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
                            marginBottom: "var(--space-lg)",
                        }}
                    />

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "clamp(2rem, 5vw, 3rem)",
                                fontWeight: 300,
                                color: "var(--color-charcoal)",
                                textDecoration: "none",
                                transition: "all 0.4s ease",
                                position: "relative",
                                padding: "8px 0",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--accent)";
                                e.currentTarget.style.letterSpacing = "0.05em";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--color-charcoal)";
                                e.currentTarget.style.letterSpacing = "0";
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile CTA */}
                    <Link
                        href="/contact"
                        className="btn btn-primary mobile-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ marginTop: "var(--space-lg)" }}
                    >
                        Plan Your Wedding
                    </Link>

                    {/* Contact info */}
                    <div
                        className="mobile-link"
                        style={{
                            marginTop: "var(--space-xl)",
                            textAlign: "center",
                            color: "var(--color-brown)",
                            fontSize: "var(--text-sm)",
                        }}
                    >
                        <p>+91 XXX XXX XXXX</p>
                        <p style={{ marginTop: "4px" }}>hello@devolia.com</p>
                    </div>
                </div>
            )}

            {/* Styles */}
            <style jsx global>{`
        /* Desktop - Full nav */
        @media (min-width: 901px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }

        /* Tablet - 768px to 900px */
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        /* Mobile - Improved touch targets */
        @media (max-width: 480px) {
          .mobile-link {
            padding: 12px 0 !important;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Landscape mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .mobile-link {
            font-size: 1.5rem !important;
            padding: 6px 0 !important;
          }
        }

        /* Safe area for notched devices */
        @supports (padding-top: env(safe-area-inset-top)) {
          nav {
            padding-top: max(12px, env(safe-area-inset-top)) !important;
          }
        }

        .nav-link:hover {
          color: var(--accent) !important;
        }

        .nav-link:hover + .nav-underline,
        .nav-link:hover ~ .nav-underline {
          transform: scaleX(1) !important;
          transform-origin: left !important;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes dropdownItemFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          margin: auto;
          width: 0;
          height: 0;
          background: var(--accent);
          border-radius: inherit;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: -1;
        }

        /* Focus styles for accessibility */
        .nav-link:focus-visible,
        .nav-cta:focus-visible,
        .mobile-link:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
          border-radius: 4px;
        }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .nav-link,
          .nav-underline,
          .nav-cta,
          .dropdown-img {
            transition: none !important;
          }
          @keyframes dropdownFadeIn {
            from { opacity: 1; transform: translateX(-50%); }
            to { opacity: 1; transform: translateX(-50%); }
          }
          @keyframes dropdownItemFadeIn {
            from { opacity: 1; transform: none; }
            to { opacity: 1; transform: none; }
          }
        }
      `}</style>
        </>
    );
}
