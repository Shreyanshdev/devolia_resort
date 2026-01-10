"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// GSAP default configuration for luxury feel
gsap.defaults({
    ease: "power3.out",
    duration: 1.2,
});

/**
 * Custom hook for fade-in animation on scroll
 */
export function useFadeIn(options?: {
    y?: number;
    delay?: number;
    duration?: number;
    trigger?: string;
}) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(element, { opacity: 1, y: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    y: options?.y ?? 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: options?.duration ?? 1,
                    delay: options?.delay ?? 0,
                    scrollTrigger: {
                        trigger: options?.trigger ?? element,
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [options?.y, options?.delay, options?.duration, options?.trigger]);

    return ref;
}

/**
 * Custom hook for parallax effect
 */
export function useParallax(speed: number = 0.5) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.to(element, {
                y: () => window.innerHeight * speed * 0.3,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, [speed]);

    return ref;
}

/**
 * Custom hook for stagger animation on children
 */
export function useStagger(options?: {
    stagger?: number;
    y?: number;
    delay?: number;
}) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(element.children, { opacity: 1, y: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                element.children,
                {
                    opacity: 0,
                    y: options?.y ?? 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: options?.stagger ?? 0.15,
                    delay: options?.delay ?? 0,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [options?.stagger, options?.y, options?.delay]);

    return ref;
}

/**
 * Fade in animation for initial load (no scroll trigger)
 */
export function fadeIn(
    element: HTMLElement | null,
    options?: { delay?: number; duration?: number; y?: number }
) {
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
        gsap.set(element, { opacity: 1, y: 0 });
        return;
    }

    gsap.fromTo(
        element,
        { opacity: 0, y: options?.y ?? 30 },
        {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 1,
            delay: options?.delay ?? 0,
        }
    );
}

/**
 * Kill all ScrollTriggers - useful for cleanup
 */
export function killAllScrollTriggers() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export { gsap, ScrollTrigger };
