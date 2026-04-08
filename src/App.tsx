/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// --- Components ---

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-white text-boho-ink font-sans antialiased min-h-screen transition-colors duration-300 relative">
      {/* Side Patterns */}
      <div className="side-patterns" />
      
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-boho-clay/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Nails by Kaela"
                className="h-10 md:h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="ml-3 uppercase tracking-[0.2em] text-lg md:text-xl font-serif font-light text-boho-clay hidden sm:block">
                Nails by Kaela
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`uppercase tracking-widest text-xs font-semibold transition ${
                    location.pathname === link.href
                      ? "text-boho-clay border-b-2 border-boho-clay"
                      : "text-boho-sage hover:text-boho-clay"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-boho-sage hover:text-boho-clay p-2 transition"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-boho-sand overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block uppercase tracking-widest text-sm font-semibold transition ${
                      location.pathname === link.href
                        ? "text-boho-clay"
                        : "text-boho-sage hover:text-boho-clay"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-boho-sage text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] font-serif font-light mb-8">
            Let's Create Beautiful Nails
          </h2>
          <p className="mb-10 text-boho-sand/80 font-light text-sm md:text-base serif italic">
            Located in the heart of Layton.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a
              href="https://book.squareup.com/appointments/7gfoi8huvotqzg/location/L0A6KM278AF3H/services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-boho-sage px-10 py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-boho-sand transition w-full sm:w-auto text-center"
            >
              Book Now
            </a>
            <a
              href="https://www.instagram.com/nails.bykaela/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/20 px-10 py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-white/10 transition text-white w-full sm:w-auto text-center"
            >
              Instagram
            </a>
          </div>
          <div className="pt-8 border-t border-white/10">
            <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-40">
              &copy; {new Date().getFullYear()} Nails by Kaela. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Pages ---

function Home() {
  return (
    <header className="py-16 md:py-32 bg-cactus relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 py-16 md:py-24 px-6 md:px-10 rounded-[3rem] flex flex-col items-center shadow-sm border border-boho-clay/5 backdrop-blur-sm"
        >
          <img
            src="/logo.png"
            alt="Nails by Kaela Logo"
            className="w-48 md:w-80 h-auto mb-10 drop-shadow-md"
            referrerPolicy="no-referrer"
          />

          <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase tracking-[0.2em] font-serif font-medium text-boho-clay mb-8 leading-tight">
            Nails by Kaela
          </h1>
          <p className="text-base md:text-xl text-boho-ink mb-10 max-w-2xl mx-auto font-medium leading-relaxed serif italic">
            Specializing in acrylics, gels, and custom hand-painted designs. Elevating your natural beauty with precision and art.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://book.squareup.com/appointments/7gfoi8huvotqzg/location/L0A6KM278AF3H/services"
              target="_blank"
              rel="noopener noreferrer"
              className="boho-button"
            >
              Book Appointment
            </a>
            <Link
              to="/gallery"
              className="boho-button-outline"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function Gallery() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl uppercase tracking-[0.2em] font-serif font-medium text-boho-clay mb-6">
          Portfolio Gallery
        </h2>
        <p className="text-boho-ink max-w-2xl mx-auto font-medium serif italic text-lg">
          A showcase of recent work, custom designs, and artistic nail sets.
        </p>
      </motion.div>

      <div className="flex flex-col items-center space-y-12">
        <div className="text-center">
          <a
            href="https://www.instagram.com/nails.bykaela/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-boho-sage hover:text-boho-clay font-semibold transition inline-flex items-center gap-2 text-sm md:text-base"
          >
            <Instagram className="w-5 h-5" />
            Follow @nails.bykaela on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Instagram Embeds */}
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DWVSFjcD_RC/"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "280px",
                padding: 0,
                width: "100%",
              }}
            ></blockquote>
          </div>
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DWaUrbDl4Fq/?img_index=1"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "280px",
                padding: 0,
                width: "100%",
              }}
            ></blockquote>
          </div>
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DWnIq0wFBPK/?img_index=1"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "280px",
                padding: 0,
                width: "100%",
              }}
            ></blockquote>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[540px] min-w-[280px] aspect-square bg-boho-cream rounded-2xl flex items-center justify-center border-2 border-dashed border-boho-clay/20">
              <p className="text-boho-sage uppercase tracking-widest text-xs font-medium">More coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [openCategory, setOpenCategory] = useState<string | null>("Manicures");

  const categories = [
    {
      name: "Manicures",
      items: [
        { title: "Classic Gel Manicure", desc: "Cuticle care, shaping, and solid gel polish.", price: "$45+" },
        { title: "Structured Gel Manicure", desc: "Added strength for natural nails using builder gel.", price: "$55+" },
        { title: "Gel-X Extensions", desc: "Full coverage soft gel extensions for instant length.", price: "$75+" },
      ]
    },
    {
      name: "Acrylics",
      items: [
        { title: "Acrylic Full Set", desc: "Extensions with custom length and shape.", price: "$65+" },
        { title: "Acrylic Fill", desc: "Maintenance for existing acrylic sets (2-3 weeks).", price: "$50+" },
        { title: "Acrylic Overlay", desc: "Acrylic applied over natural nails for strength.", price: "$55+" },
      ]
    },
    {
      name: "Art & Add-ons",
      items: [
        { title: "Tier 1 Nail Art", desc: "Simple designs, French tip, or chrome on 2-4 nails.", price: "$10+" },
        { title: "Tier 2 Nail Art", desc: "Detailed hand-painted designs on all nails.", price: "$25+" },
        { title: "Charms & Gems", desc: "3D accents, crystals, and luxury charms.", price: "$5/nail" },
      ]
    }
  ];

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-[0.2em] font-serif font-medium text-boho-clay mb-6">
            Services Menu
          </h2>
          <p className="text-boho-ink font-medium serif italic text-lg">
            Professional nail care and artistic designs tailored to your style.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-16">
          {categories.map((cat) => (
            <div key={cat.name} className="md:block">
              {/* Mobile/Tablet Toggle */}
              <button 
                onClick={() => toggleCategory(cat.name)}
                className="w-full flex justify-between items-center text-xl uppercase tracking-[0.3em] font-serif font-medium text-boho-clay/60 mb-4 border-b border-boho-clay/10 pb-4 md:hidden"
              >
                <span>{cat.name}</span>
                {openCategory === cat.name ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {/* Desktop Header (Always Visible) */}
              <h3 className="hidden md:block text-xl uppercase tracking-[0.3em] font-serif font-medium text-boho-clay/40 mb-8 border-b border-boho-clay/10 pb-2">
                {cat.name}
              </h3>

              {/* Content (Conditional on Mobile, Always on Desktop) */}
              <AnimatePresence initial={false}>
                {(openCategory === cat.name || window.innerWidth >= 1024) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden md:!h-auto md:!opacity-100"
                  >
                    <div className="space-y-4 md:space-y-6 pb-8 md:pb-0">
                      {cat.items.map((service) => (
                        <div
                          key={service.title}
                          className="flex flex-col sm:flex-row justify-between sm:items-center p-6 bg-white/50 md:bg-transparent hover:bg-white transition rounded-[2rem] group border border-boho-clay/5 md:border-transparent md:hover:border-boho-clay/5 hover:shadow-sm"
                        >
                          <div className="mb-4 sm:mb-0">
                            <h4 className="uppercase tracking-widest text-sm font-medium text-boho-ink group-hover:text-boho-clay transition">
                              {service.title}
                            </h4>
                            <p className="text-sm text-boho-sage font-light mt-1 max-w-md">
                              {service.desc}
                            </p>
                          </div>
                          <span className="font-serif font-medium text-boho-clay text-xl">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://book.squareup.com/appointments/7gfoi8huvotqzg/location/L0A6KM278AF3H/services"
            target="_blank"
            rel="noopener noreferrer"
            className="boho-button"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-20 md:py-32 max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-[0.2em] font-serif font-medium text-boho-clay mb-6">
            Get In Touch
          </h2>
          <p className="text-boho-ink font-medium serif italic text-lg">
            Have questions or want to discuss a custom design? I'd love to hear from you.
          </p>
        </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-boho-clay/5">
          <h3 className="text-2xl uppercase tracking-widest font-serif font-light mb-8 text-boho-clay">
            Contact Info
          </h3>
          <div className="space-y-8">
            <div>
              <p className="uppercase tracking-widest text-[10px] text-boho-sage mb-1 font-bold">Location</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1904+E+75+S+Layton+UT+84040" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-boho-ink font-medium hover:text-boho-clay transition underline decoration-boho-clay/20 underline-offset-4"
              >
                Located in the heart of Layton.
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[10px] text-boho-sage mb-1 font-bold">Instagram</p>
              <a
                href="https://www.instagram.com/nails.bykaela/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-boho-ink font-medium hover:text-boho-clay transition"
              >
                @nails.bykaela
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[10px] text-boho-sage mb-1 font-bold">Booking</p>
              <p className="text-boho-ink font-medium">Exclusively through Square Appointments.</p>
            </div>
          </div>
        </div>

        <div className="bg-boho-sage text-white p-10 rounded-[2.5rem] shadow-xl">
          <h3 className="text-2xl uppercase tracking-widest font-serif font-light mb-6">Policies</h3>
          <ul className="space-y-6 text-sm font-light text-boho-sand/80">
            <li className="flex gap-4">
              <span className="text-boho-clay">•</span>
              <p>Please arrive with clean nails unless a soak-off is booked.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-boho-clay">•</span>
              <p>Cancellations must be made at least 24 hours in advance.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-boho-clay">•</span>
              <p>No extra guests or children allowed in the studio.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-boho-clay">•</span>
              <p>A non-refundable deposit is required for all new clients.</p>
            </li>
          </ul>
          <div className="mt-10">
            <a
              href="https://book.squareup.com/appointments/7gfoi8huvotqzg/location/L0A6KM278AF3H/services"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-boho-sage py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-boho-sand transition text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Main App ---

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
