"use client";

import React from "react";

// Premium SVG Decorative Elements for Devolia Resort

// Elegant flourish/ornament divider
export function OrnamentDivider({
    width = 200,
    color = "var(--accent)",
    className = "",
}: {
    width?: number;
    color?: string;
    className?: string;
}) {
    return (
        <svg
            width={width}
            height="24"
            viewBox="0 0 200 24"
            fill="none"
            className={className}
            style={{ display: "block" }}
        >
            <path
                d="M100 12C100 12 85 4 70 12C55 20 40 12 40 12"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M100 12C100 12 115 4 130 12C145 20 160 12 160 12"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="100" cy="12" r="3" fill={color} />
            <circle cx="40" cy="12" r="2" fill={color} opacity="0.6" />
            <circle cx="160" cy="12" r="2" fill={color} opacity="0.6" />
            <line x1="0" y1="12" x2="30" y2="12" stroke={color} strokeWidth="1" opacity="0.4" />
            <line x1="170" y1="12" x2="200" y2="12" stroke={color} strokeWidth="1" opacity="0.4" />
        </svg>
    );
}

// Diamond separator
export function DiamondSeparator({
    color = "var(--accent)",
    className = "",
}: {
    color?: string;
    className?: string;
}) {
    return (
        <svg
            width="120"
            height="20"
            viewBox="0 0 120 20"
            fill="none"
            className={className}
            style={{ display: "block" }}
        >
            <line x1="0" y1="10" x2="45" y2="10" stroke={color} strokeWidth="1" opacity="0.5" />
            <rect x="52" y="3" width="16" height="14" rx="1" fill={color} transform="rotate(45 60 10)" />
            <line x1="75" y1="10" x2="120" y2="10" stroke={color} strokeWidth="1" opacity="0.5" />
        </svg>
    );
}

// Elegant corner flourish
export function CornerFlourish({
    size = 80,
    color = "var(--accent)",
    position = "top-left",
    className = "",
}: {
    size?: number;
    color?: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    className?: string;
}) {
    const transforms: Record<string, string> = {
        "top-left": "",
        "top-right": "scaleX(-1)",
        "bottom-left": "scaleY(-1)",
        "bottom-right": "scale(-1, -1)",
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 80 80"
            fill="none"
            className={className}
            style={{ display: "block", transform: transforms[position] }}
        >
            <path
                d="M5 5C5 5 20 5 35 20C50 35 50 50 50 50"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
            />
            <path
                d="M5 15C5 15 15 15 25 25C35 35 35 45 35 45"
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
            />
            <circle cx="5" cy="5" r="2.5" fill={color} />
        </svg>
    );
}

// Luxury leaf/botanical element
export function BotanicalElement({
    size = 60,
    color = "var(--accent)",
    className = "",
    flip = false,
}: {
    size?: number;
    color?: string;
    className?: string;
    flip?: boolean;
}) {
    return (
        <svg
            width={size}
            height={size * 1.5}
            viewBox="0 0 60 90"
            fill="none"
            className={className}
            style={{ display: "block", transform: flip ? "scaleX(-1)" : undefined }}
        >
            <path
                d="M30 90V45"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M30 45C30 45 10 40 10 20C10 5 25 0 30 0C35 0 50 5 50 20C50 40 30 45 30 45Z"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.8"
            />
            <path
                d="M30 35C30 35 20 30 20 18C20 10 27 7 30 7"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.5"
            />
            <path
                d="M30 35C30 35 40 30 40 18C40 10 33 7 30 7"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.5"
            />
        </svg>
    );
}

// Star/sparkle decorator
export function Sparkle({
    size = 24,
    color = "var(--accent)",
    className = "",
}: {
    size?: number;
    color?: string;
    className?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            style={{ display: "block" }}
        >
            <path
                d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
                fill={color}
                opacity="0.9"
            />
        </svg>
    );
}

// Animated scroll indicator
export function ScrollIndicator({
    color = "var(--accent)",
    className = "",
}: {
    color?: string;
    className?: string;
}) {
    return (
        <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <svg
                width="28"
                height="44"
                viewBox="0 0 28 44"
                fill="none"
                style={{ display: "block" }}
            >
                <rect
                    x="1"
                    y="1"
                    width="26"
                    height="42"
                    rx="13"
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                />
                <circle
                    cx="14"
                    cy="12"
                    r="4"
                    fill={color}
                    style={{
                        animation: "scrollBounce 2s ease-in-out infinite",
                    }}
                />
            </svg>
            <style jsx>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}

// Decorative ring element
export function DecorativeRing({
    size = 200,
    color = "var(--accent)",
    className = "",
}: {
    size?: number;
    color?: string;
    className?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            fill="none"
            className={className}
            style={{ display: "block" }}
        >
            <circle
                cx="100"
                cy="100"
                r="95"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.2"
            />
            <circle
                cx="100"
                cy="100"
                r="80"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                strokeDasharray="8 8"
            />
            <circle
                cx="100"
                cy="100"
                r="65"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.4"
            />
        </svg>
    );
}

// Quote marks
export function QuoteMark({
    size = 40,
    color = "var(--accent)",
    opening = true,
    className = "",
}: {
    size?: number;
    color?: string;
    opening?: boolean;
    className?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            className={className}
            style={{ display: "block", transform: opening ? undefined : "rotate(180deg)" }}
        >
            <path
                d="M8 25C8 20 12 15 18 15C18 15 14 18 14 22C14 26 17 28 17 28L12 32C8 28 8 25 8 25Z"
                fill={color}
                opacity="0.6"
            />
            <path
                d="M22 25C22 20 26 15 32 15C32 15 28 18 28 22C28 26 31 28 31 28L26 32C22 28 22 25 22 25Z"
                fill={color}
                opacity="0.6"
            />
        </svg>
    );
}

// ============================================
// PREMIUM FACILITY ICONS WITH ANIMATIONS
// ============================================

// Luxury Suites Icon
export function SuitesIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <rect x="4" y="8" width="24" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M4 14H28" stroke={color} strokeWidth="1.5" />
            <rect x="8" y="18" width="6" height="5" rx="1" stroke={color} strokeWidth="1.2" fill="none" />
            <rect x="18" y="18" width="6" height="5" rx="1" stroke={color} strokeWidth="1.2" fill="none" />
            <path d="M16 4V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16" cy="3" r="1.5" fill={color} className="icon-dot" />
        </svg>
    );
}

// Multi-Cuisine Icon
export function CuisineIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <ellipse cx="16" cy="22" rx="12" ry="4" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M4 22V18C4 14.5 9.5 12 16 12C22.5 12 28 14.5 28 18V22" stroke={color} strokeWidth="1.5" fill="none" />
            <ellipse cx="16" cy="18" rx="8" ry="2.5" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M16 4V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" className="icon-steam" />
            <path d="M12 6V9" stroke={color} strokeWidth="1.2" strokeLinecap="round" className="icon-steam" style={{ animationDelay: "0.2s" }} />
            <path d="M20 6V9" stroke={color} strokeWidth="1.2" strokeLinecap="round" className="icon-steam" style={{ animationDelay: "0.4s" }} />
        </svg>
    );
}

// Event Planning Icon
export function EventsIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <rect x="5" y="6" width="22" height="20" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M5 12H27" stroke={color} strokeWidth="1.5" />
            <path d="M10 3V7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 3V7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="11" cy="17" r="1.5" fill={color} className="icon-dot" style={{ animationDelay: "0s" }} />
            <circle cx="16" cy="17" r="1.5" fill={color} className="icon-dot" style={{ animationDelay: "0.15s" }} />
            <circle cx="21" cy="17" r="1.5" fill={color} className="icon-dot" style={{ animationDelay: "0.3s" }} />
            <circle cx="11" cy="22" r="1.5" fill={color} opacity="0.5" />
            <circle cx="16" cy="22" r="1.5" fill={color} opacity="0.5" />
        </svg>
    );
}

// Valet Parking Icon
export function ParkingIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <rect x="3" y="12" width="26" height="14" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="9" cy="24" r="2.5" stroke={color} strokeWidth="1.3" fill="none" />
            <circle cx="23" cy="24" r="2.5" stroke={color} strokeWidth="1.3" fill="none" />
            <path d="M6 12L9 6H23L26 12" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
            <path d="M10 8H22" stroke={color} strokeWidth="1" opacity="0.5" />
            <circle cx="8" cy="16" r="1" fill={color} className="icon-blink" />
            <circle cx="24" cy="16" r="1" fill={color} className="icon-blink" style={{ animationDelay: "0.5s" }} />
        </svg>
    );
}

// Photo Studios Icon
export function CameraIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <rect x="3" y="9" width="26" height="18" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="16" cy="17" r="5" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="16" cy="17" r="2.5" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M10 5H22L24 9H8L10 5Z" stroke={color} strokeWidth="1.3" fill="none" />
            <circle cx="24" cy="13" r="1.5" fill={color} className="icon-blink" />
            <rect x="6" y="12" width="3" height="2" rx="0.5" fill={color} opacity="0.5" />
        </svg>
    );
}

// Security Icon
export function SecurityIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <path d="M16 3L5 8V14C5 21 10 27 16 29C22 27 27 21 27 14V8L16 3Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M16 7L9 10V14C9 18.5 12 23 16 25C20 23 23 18.5 23 14V10L16 7Z" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M12 15L15 18L21 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon-check" />
        </svg>
    );
}

// Trust Icon (Handshake)
export function TrustIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <path d="M4 13L10 9L16 13L22 9L28 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M10 9V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 9V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 17H16L19 20L22 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="16" cy="13" r="2" fill={color} className="icon-pulse" />
        </svg>
    );
}

// Excellence Icon (Star)
export function ExcellenceIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <path d="M16 4L19 12H28L21 17L24 26L16 21L8 26L11 17L4 12H13L16 4Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M16 8L18 13H23L19 16L20 21L16 18L12 21L13 16L9 13H14L16 8Z" fill={color} opacity="0.3" className="icon-shimmer" />
        </svg>
    );
}

// Care Icon (Heart)
export function CareIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <path d="M16 28L5 17C2 14 2 9 5 6C8 3 13 3 16 7C19 3 24 3 27 6C30 9 30 14 27 17L16 28Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M16 23L9 16C7 14 7 11 9 9C11 7 14 7 16 10C18 7 21 7 23 9C25 11 25 14 23 16L16 23Z" fill={color} opacity="0.2" className="icon-pulse" />
        </svg>
    );
}

// Legacy Icon (Tree)
export function LegacyIcon({ size = 32, color = "var(--accent)", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`facility-icon ${className}`}>
            <path d="M16 28V16" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M16 16C16 16 8 14 8 8C8 4 12 2 16 2C20 2 24 4 24 8C24 14 16 16 16 16Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M16 12C16 12 11 10 11 7C11 5 13 4 16 4C19 4 21 5 21 7C21 10 16 12 16 12Z" fill={color} opacity="0.3" />
            <path d="M12 24C12 24 10 22 10 20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 24C20 24 22 22 22 20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    );
}

// ============================================
// SOCIAL MEDIA ICONS
// ============================================

// WhatsApp Icon
export function WhatsAppIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.55 3.35 17L2 22L7.15 20.7C8.55 21.45 10.2 21.9 12 21.9C17.52 21.9 22 17.42 22 11.9C22 6.48 17.52 2 12 2Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M8.5 9.5C8.5 9.5 9 8 9.5 8C10 8 10.5 8.5 10.5 8.5L11.5 10C11.5 10 11.5 10.5 11 11C10.5 11.5 10.5 12 11.5 13C12.5 14 13 14 13.5 13.5C14 13 14.5 13 14.5 13L16 14C16 14 16.5 14.5 16.5 15C16.5 15.5 16 16 16 16C15.5 16.5 15 16 14 15.5C13 15 11.5 14 10.5 13C9.5 12 8.5 10.5 8 9.5C7.5 8.5 8 8 8.5 7.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </svg>
    );
}

// Instagram Icon
export function InstagramIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="17.5" cy="6.5" r="1.5" fill={color} />
        </svg>
    );
}

// Facebook Icon
export function FacebookIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M15.5 8H14C13 8 12.5 8.5 12.5 9.5V11H15L14.5 14H12.5V21H10V14H8V11H10V9C10 7.5 11 6 13 6H15.5V8Z" stroke={color} strokeWidth="1.3" fill="none" />
        </svg>
    );
}

// Email Icon
export function EmailIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M3 7L12 13L21 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
    );
}

// Phone Icon
export function PhoneIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <path d="M5 4H9L11 9L8.5 10.5C9.5 12.5 11.5 14.5 13.5 15.5L15 13L20 15V19C20 20 19 21 18 21C10 21 3 14 3 6C3 5 4 4 5 4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    );
}

// Message/Chat Icon
export function MessageIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <path d="M21 12C21 16.5 17 20 12 20C10.5 20 9 19.7 7.7 19.2L3 21L4.5 17C3.5 15.5 3 13.8 3 12C3 7.5 7 4 12 4C17 4 21 7.5 21 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="8" cy="12" r="1" fill={color} />
            <circle cx="12" cy="12" r="1" fill={color} />
            <circle cx="16" cy="12" r="1" fill={color} />
        </svg>
    );
}

// Check/Success Icon
export function CheckIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M8 12L11 15L16 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Send Icon (Paper Plane)
export function SendIcon({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`social-icon ${className}`}>
            <path d="M22 2L11 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
