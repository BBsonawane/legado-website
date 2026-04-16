"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleWaitlistClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const heroForm = document.getElementById("hero-waitlist");
      if (heroForm) {
        heroForm.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-bg/90 backdrop-blur-xl border-b border-border-light shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo — serif for premium financial feel */}
          <Link
            href="/"
            className="font-heading text-accent-secondary text-2xl sm:text-[1.65rem] tracking-tight hover:text-accent transition-colors"
          >
            Legado
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-text-secondary hover:text-text-primary transition-colors text-[0.9rem] font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-text-primary transition-colors text-[0.9rem] font-medium"
            >
              Contact
            </Link>
            <Link
              href={pathname === "/" ? "#hero-waitlist" : "/"}
              onClick={handleWaitlistClick}
              className="bg-accent hover:bg-accent-secondary text-white font-semibold text-[0.9rem] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            <Link
              href="/about"
              className="text-text-secondary hover:text-text-primary transition-colors text-base font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-text-primary transition-colors text-base font-medium py-2"
            >
              Contact
            </Link>
            <Link
              href={pathname === "/" ? "#hero-waitlist" : "/"}
              onClick={handleWaitlistClick}
              className="bg-accent hover:bg-accent-secondary text-white font-semibold text-base px-5 py-3 rounded-full transition-all duration-200 text-center w-fit"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
