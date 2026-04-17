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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-[20px] border-b border-border shadow-sm h-16"
          : "bg-transparent h-[72px]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,4rem)] h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-full bg-accent-green mb-0.5" />
            <span className="text-text-primary font-extrabold text-[1.375rem] tracking-[-0.02em]">
              Legado
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/about"
              className="text-text-secondary hover:text-text-primary transition-colors text-[0.9375rem] font-medium relative py-1 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-green transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-text-primary transition-colors text-[0.9375rem] font-medium relative py-1 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-green transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href={pathname === "/" ? "#hero-waitlist" : "/"}
              onClick={handleWaitlistClick}
              className="bg-accent-primary hover:bg-[#333333] text-white font-semibold text-[0.9375rem] px-5 py-2 rounded-[8px] transition-all duration-200 hover:shadow-md"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[300px] shadow-lg" : "max-h-0"
          }`}
        >
          <div className="flex flex-col p-6 gap-6">
            <Link
              href="/about"
              className="text-text-secondary hover:text-text-primary text-[1.0625rem] font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-text-primary text-[1.0625rem] font-medium"
            >
              Contact
            </Link>
            <Link
              href={pathname === "/" ? "#hero-waitlist" : "/"}
              onClick={handleWaitlistClick}
              className="bg-accent-primary text-white font-semibold text-[1.0625rem] px-5 py-4 rounded-[8px] text-center"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
