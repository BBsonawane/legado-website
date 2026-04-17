import Link from "next/link";

export default function Footer() {
  return (
<footer className="bg-[#0A0A0A] text-white pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Left: Logo & Tagline */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <span className="w-2 h-2 rounded-full bg-accent-green mb-0.5" />
              <span className="text-white font-extrabold text-[1.375rem] tracking-[-0.02em]">
                Legado
              </span>
            </Link>
            <p className="text-white/45 text-[0.875rem] italic leading-relaxed max-w-[240px]">
              Built for the ones who figured it out alone.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="md:col-span-4 flex flex-col md:items-center gap-4">
            <h4 className="text-white text-[0.875rem] font-bold uppercase tracking-wider mb-2">Platform</h4>
            <nav className="flex flex-col gap-3 md:items-center">
              <Link href="/" className="text-white/50 hover:text-white transition-colors text-[0.875rem]">Home</Link>
              <Link href="/about" className="text-white/50 hover:text-white transition-colors text-[0.875rem]">About</Link>
              <Link href="/contact" className="text-white/50 hover:text-white transition-colors text-[0.875rem]">Contact</Link>
            </nav>
          </div>

          {/* Right: Legal & Contact */}
          <div className="md:col-span-4 flex flex-col md:items-end gap-4">
            <h4 className="text-white text-[0.875rem] font-bold uppercase tracking-wider mb-2">Legal</h4>
            <nav className="flex flex-col gap-3 md:items-end text-left md:text-right">
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors text-[0.875rem]">Privacy Policy</Link>
              <Link href="/terms" className="text-white/50 hover:text-white transition-colors text-[0.875rem]">Terms of Service</Link>
              <a href="mailto:hello@legado.com" className="text-white/50 hover:text-white transition-colors text-[0.875rem]">hello@legado.com</a>
            </nav>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/35 text-[0.75rem]">
          <p>© 2026 Legado. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Built for the US System</p>
            <p>Legado provides financial education only.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
