"use client";

import { useEffect, useRef, useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { count, ref };
}

function useFadeIn() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
  return ref;
}

export default function Home() {
  const painRef = useFadeIn();
  const howRef = useFadeIn();
  const remitRef = useFadeIn();
  const proofRef = useFadeIn();
  const ctaRef = useFadeIn();
  const { count, ref: counterRef } = useCountUp(1200, 2000);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden">
        <div className="glow-effect w-[600px] h-[600px] -top-40 -right-40 animate-glow-pulse" />
        <div className="glow-effect w-[400px] h-[400px] bottom-0 left-0 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading leading-[1.15] tracking-tight text-text-primary text-balance animate-fade-in">
              You moved here for work. You&apos;re earning well.{" "}
              <span className="text-accent-secondary">
                So why does your bank account feel like a lie?
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Legado is the financial guide nobody gave you growing up. Built for
              immigrants and first-generation earners navigating the US money
              system alone.
            </p>

            <div className="mt-8 sm:mt-10 relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-xl animate-glow-pulse" />
              <div className="relative">
                <WaitlistForm source="hero" id="hero-waitlist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PAIN POINTS ====== */}
      <section ref={painRef} className="fade-section section-padding bg-primary-card">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-heading text-text-primary text-center mb-14 sm:mb-16">
            Sound familiar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hover bg-primary-bg border border-border-light rounded-2xl p-7 sm:p-8">
              <span className="text-4xl mb-5 block">💸</span>
              <h3 className="text-lg font-heading text-text-primary mb-3">
                Six months of a good salary. Almost nothing saved.
              </h3>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                You earn more than you ever have. So where is it all going?
              </p>
            </div>

            <div className="card-hover bg-primary-bg border border-border-light rounded-2xl p-7 sm:p-8">
              <span className="text-4xl mb-5 block">📋</span>
              <h3 className="text-lg font-heading text-text-primary mb-3">
                A 401k form sitting in your inbox since month one.
              </h3>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                The words make no sense. You&apos;ll figure it out later. You haven&apos;t.
              </p>
            </div>

            <div className="card-hover bg-primary-bg border border-border-light rounded-2xl p-7 sm:p-8">
              <span className="text-4xl mb-5 block">📞</span>
              <h3 className="text-lg font-heading text-text-primary mb-3">
                Mom called again. You said yes. You always say yes.
              </h3>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                Sending money home matters. But it&apos;s silently draining everything
                you&apos;re building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW LEGADO WORKS ====== */}
      <section ref={howRef} className="fade-section section-padding">
        <div className="section-container">
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-heading text-text-primary mb-4">
              Your financial life, finally explained
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto">
              Legado gives you three things no one else does
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 max-w-2xl mx-auto">
            <div className="flex gap-6 items-start">
              <span className="text-5xl sm:text-6xl font-black text-accent/25 leading-none shrink-0 font-body">
                01
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-heading text-text-primary mb-3">
                  A mirror, not a lecture
                </h3>
                <p className="text-text-secondary text-[0.9rem] sm:text-base leading-relaxed">
                  Legado starts by showing you exactly where your money is going —
                  broken down simply, without judgment. No overwhelming dashboards.
                  Just clarity.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="text-5xl sm:text-6xl font-black text-accent/25 leading-none shrink-0 font-body">
                02
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-heading text-text-primary mb-3">
                  A plan for your actual life
                </h3>
                <p className="text-text-secondary text-[0.9rem] sm:text-base leading-relaxed">
                  Got a 401k form? Just got a raise? Sending money home? Legado
                  gives you a step-by-step playbook for the exact situation you&apos;re
                  in — not generic advice written for someone else.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="text-5xl sm:text-6xl font-black text-accent/25 leading-none shrink-0 font-body">
                03
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-heading text-text-primary mb-3">
                  A guide who never judges
                </h3>
                <p className="text-text-secondary text-[0.9rem] sm:text-base leading-relaxed">
                  Ask anything. How do I build credit? What&apos;s an HSA? Should I pay
                  off debt or invest? Legado answers like a knowledgeable friend —
                  not a condescending advisor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== REMITTANCE ====== */}
      <section ref={remitRef} className="fade-section section-padding">
        <div className="section-container">
          <div className="bg-gradient-to-br from-accent-secondary to-accent rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden text-white">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center opacity-20">
              <svg viewBox="0 0 200 400" className="w-full h-full" fill="none">
                <path d="M20 0 C60 80, 140 120, 100 200 S40 320, 80 400" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
                <path d="M60 0 C100 80, 180 120, 140 200 S80 320, 120 400" stroke="#fff" strokeWidth="1" opacity="0.4" />
                <path d="M100 0 C140 80, 60 120, 180 200 S120 320, 160 400" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
                <circle cx="100" cy="200" r="4" fill="#fff" opacity="0.8" />
                <circle cx="140" cy="100" r="3" fill="#fff" opacity="0.5" />
                <circle cx="80" cy="300" r="3" fill="#fff" opacity="0.5" />
              </svg>
            </div>

            <div className="relative z-10 max-w-xl">
              <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-4 block font-body">
                For Immigrants, By Design
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-heading mb-6 leading-tight">
                The one thing every finance app ignores
              </h2>
              <p className="text-white/90 text-[0.9rem] sm:text-base leading-relaxed">
                Sending money home isn&apos;t a mistake to fix. It&apos;s a responsibility
                you carry with pride. Legado is the only financial app that treats
                remittances as a real part of your financial life — and helps you do
                it without sabotaging everything else you&apos;re building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SOCIAL PROOF ====== */}
      <section ref={proofRef} className="fade-section section-padding bg-primary-card">
        <div className="section-container text-center" ref={counterRef}>
          <p className="text-5xl sm:text-6xl md:text-7xl font-black text-accent-secondary mb-4 font-body">
            {count.toLocaleString()}+
          </p>
          <p className="text-xl sm:text-2xl font-heading text-text-primary mb-4">
            immigrants and first-gen earners already on the waitlist
          </p>
          <p className="text-text-muted text-[0.9rem] sm:text-base max-w-lg mx-auto">
            From software engineers in Dallas to nurses in New Jersey — they&apos;re
            all waiting for the guide nobody gave them.
          </p>
        </div>
      </section>

      {/* ====== BOTTOM CTA ====== */}
      <section ref={ctaRef} className="fade-section section-padding bg-primary-subtle">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-heading text-text-primary mb-4">
            Be the first to know when Legado launches
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mb-10 max-w-md mx-auto">
            Early waitlist members get 3 months of Legado Pro free at launch.
          </p>
          <div className="flex justify-center">
            <WaitlistForm source="bottom_cta" />
          </div>
        </div>
      </section>
    </>
  );
}
