import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-card">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left: Logo */}
          <div>
            <Link
              href="/"
              className="font-heading text-accent-secondary text-2xl tracking-tight"
            >
              Legado
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-center">
            <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
              Home
            </Link>
            <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
              About
            </Link>
            <Link href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
              Contact
            </Link>
          </nav>

          {/* Right: Tagline */}
          <p className="text-text-muted text-sm md:text-right italic">
            Built for the ones who figured it out alone.
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-border-light">
        <div className="section-container py-5">
          <p className="text-text-muted text-xs text-center">
            © 2026 Legado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
