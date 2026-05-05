"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GroundsPreview from "@/components/GroundsPreview";
import FacilitiesSection from "@/components/FacilitiesSection";
import PackagesPreview from "@/components/PackagesPreview";
import QuoteSection from "@/components/QuoteSection";
import GalleryPreview from "@/components/GalleryPreview";
import Image from "next/image";
import { OrnamentDivider, DiamondSeparator, BotanicalElement } from "@/components/PremiumSVGs";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <Hero
        // REPLACE WITH: hero-video.mp4 (cinematic wedding video) OR hero-main.jpg (stunning venue shot)
        imageSrc="/images/img1.png"
        subtitle="Premium Wedding Destination"
        title="Where Dreams Become Timeless Celebrations"
        description="Experience the grandeur of Devolia Resort — where every moment is crafted with elegance, every celebration becomes a cherished memory."
        primaryCTA={{ label: "Plan Your Wedding", href: "/contact" }}
        secondaryCTA={{ label: "Explore Grounds", href: "/grounds" }}
        overlayOpacity={0.6}
      />

      {/* Intro Section - Authority Statement with Image */}
      <section
        style={{
          padding: "var(--section-padding-y) var(--section-padding-x)",
          backgroundColor: "var(--background)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-2xl)",
            maxWidth: "1200px",
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <div>
            <DiamondSeparator />
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-4xl)",
                fontWeight: 400,
                lineHeight: 1.3,
                marginTop: "var(--space-lg)",
                color: "var(--color-charcoal)",
              }}
            >
              A Legacy of Celebrations
            </h2>
            <p
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: 300,
                lineHeight: 1.8,
                marginTop: "var(--space-lg)",
                color: "var(--color-brown)",
              }}
            >
              For generations, Devolia Resort has been the canvas for unforgettable weddings.
              Our grounds tell stories of love, our halls echo with joyous celebrations,
              and our commitment to excellence ensures your special day is nothing short of extraordinary.
            </p>
            <p
              style={{
                fontSize: "var(--text-base)",
                fontWeight: 300,
                lineHeight: 1.8,
                marginTop: "var(--space-md)",
                color: "var(--color-brown)",
              }}
            >
              Nestled in the heart of Orai, Uttar Pradesh, our 15-acre property offers
              multiple venues, world-class amenities, and a dedicated team committed
              to making your celebration perfect.
            </p>
            <a
              href="/legacy"
              className="btn btn-primary"
              style={{ marginTop: "var(--space-xl)", display: "inline-block" }}
            >
              Our Story
            </a>
          </div>

          {/* Image */}
          <div
            style={{
              position: "relative",
              height: "500px",
              borderRadius: "var(--border-radius-lg)",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(45, 42, 38, 0.15)",
            }}
          >
            <Image
              src="/images/img1.png" // REPLACE WITH: intro-legacy.jpg (historic venue photo or family photo)
              alt="Devolia Resort legacy"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Floated badge */}
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                right: "30px",
                padding: "var(--space-md) var(--space-lg)",
                backgroundColor: "var(--accent)",
                color: "var(--color-charcoal)",
                borderRadius: "var(--border-radius-md)",
                textAlign: "center",
              }}
            >
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 400 }}>
                Est. 1985
              </p>
              <p style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                38 Years of Trust
              </p>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <style jsx>{`
          @media (max-width: 900px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Grounds Preview Section */}
      <GroundsPreview />

      {/* Quote Section - Full Width with Background Image */}
      <QuoteSection />

      {/* Gallery Preview Section */}
      <GalleryPreview />

      {/* Facilities Section - Split Layout */}
      <FacilitiesSection />

      {/* Packages Section */}
      <PackagesPreview />

      {/* Final CTA Section with Background Image */}
      <section
        style={{
          position: "relative",
          padding: "calc(var(--section-padding-y) * 1.5) var(--section-padding-x)",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Image
            src="/images/img1.png" // REPLACE WITH: cta-background.jpg (beautiful venue at sunset or decorated hall)
            alt="Devolia Resort venue"
            fill
            style={{ objectFit: "cover", opacity: 0.25 }}
          />
        </div>

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(45, 42, 38, 0.95) 0%, rgba(45, 42, 38, 0.85) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BotanicalElement size={50} color="var(--accent)" />
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-4xl)",
              fontWeight: 400,
              color: "var(--color-ivory)",
              marginTop: "var(--space-lg)",
              marginBottom: "var(--space-md)",
            }}
          >
            Begin Your Journey
          </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <OrnamentDivider width={120} color="var(--accent)" />
          </div>
          <p
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: 300,
              color: "rgba(255, 251, 245, 0.8)",
              marginTop: "var(--space-lg)",
              marginBottom: "var(--space-xl)",
              lineHeight: 1.7,
            }}
          >
            Let us craft the wedding of your dreams. Our team is ready to turn your vision into reality.
            Schedule a visit to experience the magic of Devolia Resort firsthand.
          </p>
          <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn-primary" style={{ color: "var(--color-ivory)" }}>
              Plan Your Wedding
            </a>
            <a href="tel:+91XXXXXXXXXX" className="btn btn-glass">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "var(--space-2xl) var(--section-padding-x) var(--space-xl)",
          backgroundColor: "var(--color-charcoal)",
          borderTop: "1px solid rgba(196, 169, 98, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "var(--space-xl)",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-2xl)",
                color: "var(--color-ivory)",
                marginBottom: "var(--space-md)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--accent)",
                  borderRadius: "50%",
                }}
              />
              Devolia Resort
            </p>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "rgba(255, 251, 245, 0.5)",
                lineHeight: 1.7,
              }}
            >
              Premium wedding destination in Orai, Uttar Pradesh.
              Creating timeless celebrations since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                marginBottom: "var(--space-md)",
              }}
            >
              Explore
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
              {["Experience", "Gallery", "Grounds", "Packages", "Legacy"].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "rgba(255, 251, 245, 0.6)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                marginBottom: "var(--space-md)",
              }}
            >
              Contact
            </p>
            <div style={{ fontSize: "var(--text-sm)", color: "rgba(255, 251, 245, 0.6)", lineHeight: 2 }}>
              <p>Orai, Uttar Pradesh, India</p>
              <p>+91 XXX XXX XXXX</p>
              <p>hello@devolia.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                marginBottom: "var(--space-md)",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "rgba(255, 251, 245, 0.6)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            marginTop: "var(--space-2xl)",
            paddingTop: "var(--space-lg)",
            borderTop: "1px solid rgba(196, 169, 98, 0.1)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(255, 251, 245, 0.3)",
            }}
          >
            © 2026 Devolia Resort. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
