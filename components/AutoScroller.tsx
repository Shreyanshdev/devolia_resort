"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "./animations/gsap-utils";

interface AutoScrollerProps {
    images: { src: string; alt: string }[];
    speed?: number; // Duration in seconds for one complete cycle
    direction?: "left" | "right";
    height?: string;
    pauseOnHover?: boolean;
    variant?: "light" | "dark"; // For background color matching
}

export default function AutoScroller({
    images,
    speed = 30,
    direction = "left",
    height = "400px",
    pauseOnHover = true,
    variant = "light",
}: AutoScrollerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion || !trackRef.current) return;

        const track = trackRef.current;
        const trackWidth = track.scrollWidth / 2; // Since we duplicate images

        // Set initial position
        if (direction === "right") {
            gsap.set(track, { x: -trackWidth });
        }

        // Create infinite scroll animation
        animationRef.current = gsap.to(track, {
            x: direction === "left" ? -trackWidth : 0,
            duration: speed,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => {
                    const xNum = parseFloat(x);
                    if (direction === "left") {
                        return xNum % trackWidth;
                    } else {
                        return (xNum % trackWidth) - trackWidth;
                    }
                }),
            },
        });

        return () => {
            animationRef.current?.kill();
        };
    }, [speed, direction]);

    const handleMouseEnter = () => {
        if (pauseOnHover && animationRef.current) {
            animationRef.current.pause();
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover && animationRef.current) {
            animationRef.current.resume();
        }
    };

    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height,
                overflow: "hidden",
                position: "relative",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Gradient overlays for fade effect */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "100px",
                    background: variant === "dark"
                        ? "linear-gradient(90deg, var(--color-charcoal) 0%, transparent 100%)"
                        : "linear-gradient(90deg, var(--background) 0%, transparent 100%)",
                    zIndex: 10,
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100px",
                    background: variant === "dark"
                        ? "linear-gradient(270deg, var(--color-charcoal) 0%, transparent 100%)"
                        : "linear-gradient(270deg, var(--background) 0%, transparent 100%)",
                    zIndex: 10,
                    pointerEvents: "none",
                }}
            />

            {/* Scrolling track */}
            <div
                ref={trackRef}
                style={{
                    display: "flex",
                    gap: "20px",
                    width: "max-content",
                }}
            >
                {duplicatedImages.map((image, index) => (
                    <div
                        key={`${image.alt}-${index}`}
                        style={{
                            position: "relative",
                            height,
                            width: `calc(${height} * 1.5)`, // 3:2 aspect ratio
                            borderRadius: "var(--border-radius-lg)",
                            overflow: "hidden",
                            flexShrink: 0,
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
