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
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />
        
        {/* Shadow Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-green/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-green/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Early Access Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-green-light border border-accent-green-border text-accent-green text-[0.75rem] font-bold rounded-full mb-8 animate-fade-in tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
              Early Access Now Open
            </div>

            <h1 className="text-[clamp(2.75rem,6vw,4.75rem)] font-[900] leading-[1.05] tracking-[-0.03em] text-text-primary mb-8 animate-fade-in">
              You moved here for work. You&apos;re earning well.{" "}
              <span className="text-accent-green italic font-bold">
                So why does your bank account feel like a lie?
              </span>
            </h1>

            <p className="text-lg sm:text-[1.125rem] text-text-secondary max-w-[580px] mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Legado is the financial guide nobody gave you growing up. Built for
              immigrants and first-generation earners navigating the US money
              system alone.
            </p>

            <div className="max-w-[460px] mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <WaitlistForm source="hero" id="hero-waitlist" />
              <p className="mt-6 text-text-light text-[0.75rem] leading-relaxed">
                Legado provides financial education only. Not investment advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PAIN POINTS ====== */}
      <section ref={painRef} className="reveal bg-primary-secondary py-[clamp(4rem,10vw,7rem)] border-y border-border">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.875rem,4vw,2.75rem)] font-extrabold text-text-primary mb-4">
              Sound <span className="text-accent-green italic">familiar?</span>
            </h2>
            <p className="text-text-muted text-[1.125rem]">
              If you moved abroad for work, you know these feelings intimately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💸",
                title: "Six months of a good salary. Almost nothing saved.",
                desc: "You earn more than you ever have. So where is it all going?",
              },
              {
                icon: "📋",
                title: "A 401k form sitting in your inbox since month one.",
                desc: "The words make no sense. You'll figure it out later. You haven't.",
              },
              {
                icon: "📞",
                title: "Mom called again. You said yes. You always say yes.",
                desc: "Sending money home matters. But it's silently draining everything you're building.",
              },
            ].map((item, i) => (
              <div key={i} className="card-premium p-8">
                <div className="w-[52px] h-[52px] bg-accent-green-light border border-accent-green-border rounded-xl flex items-center justify-center text-[1.375rem] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[1.0625rem] font-bold text-text-primary mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-[0.9375rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section ref={howRef} className="reveal py-[clamp(4rem,10vw,7rem)] bg-white">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(1.875rem,4vw,2.75rem)] font-extrabold text-text-primary mb-4">
              Your financial life, finally explained
            </h2>
            <p className="text-text-muted text-[1.125rem] max-w-lg mx-auto">
              Legado gives you three things no one else does.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {[
              {
                num: "01",
                title: "A mirror, not a lecture",
                desc: "Legado starts by showing you exactly where your money is going — broken down simply, without judgment. No overwhelming dashboards. Just clarity.",
              },
              {
                num: "02",
                title: "A plan for your actual life",
                desc: "Got a 401k form? Just got a raise? Sending money home? Legado gives you a step-by-step playbook for the exact situation you're in — not generic advice written for someone else.",
              },
              {
                num: "03",
                title: "A guide who never judges",
                desc: "Ask anything. How do I build credit? What's an HSA? Should I pay off debt or invest? Legado answers like a knowledgeable friend — not a condescending advisor.",
              },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-8 md:gap-16 p-8 hover:bg-primary-secondary rounded-2xl transition-all duration-300 border-b border-border-subtle last:border-0 items-start">
                <div className="flex flex-col items-center shrink-0 w-16">
                  <span className="text-[4rem] font-[900] text-black/5 leading-none tracking-[-0.04em] tabular-nums">
                    {item.num}
                  </span>
                  {i < 2 && (
                    <div className="w-[2px] h-[60px] bg-border-default mt-4 hidden md:block" />
                  )}
                </div>
                <div className="md:pt-4">
                  <h3 className="text-[1.25rem] font-bold text-text-primary mb-3 tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-[1.0625rem] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== REMITTANCE ====== */}
      <section ref={remitRef} className="reveal px-[clamp(1rem,4vw,3rem)] py-12">
        <div className="bg-gradient-dark rounded-[24px] overflow-hidden">
          <div className="section-container py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <span className="inline-flex items-center px-3 py-1 bg-accent-green/20 border border-accent-green/40 text-[#4ADE80] text-[0.75rem] font-bold rounded-full mb-6 uppercase tracking-wider">
                  For Immigrants, By Design
                </span>
                <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white mb-6 leading-tight">
                  The one thing every finance app ignores
                </h2>
                <p className="text-white/70 text-[1.125rem] leading-relaxed">
                  Sending money home isn&apos;t a mistake to fix. It&apos;s a responsibility
                  you carry with pride. Legado is the only financial app that treats
                  remittances as a real part of your financial life — and helps you do
                  it without sabotaging everything else you&apos;re building.
                </p>
              </div>

              <div className="relative aspect-square max-w-[400px] mx-auto lg:ml-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Globe outline */}
                  <circle cx="200" cy="200" r="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                  <ellipse cx="200" cy="200" rx="160" ry="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  <ellipse cx="200" cy="200" rx="60" ry="160" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  
                  {/* Arcs */}
                  <path d="M100 200 Q200 100 300 200" stroke="#22C55E" strokeWidth="2" fill="none" strokeDasharray="400" strokeDashoffset="400" className="animate-[dash_3s_ease-in-out_infinite]" />
                  <path d="M80 150 Q200 50 320 150" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeDasharray="450" strokeDashoffset="450" className="animate-[dash_4s_ease-in-out_infinite]" />
                  <path d="M120 250 Q200 350 280 250" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeDasharray="400" strokeDashoffset="400" className="animate-[dash_5s_ease-in-out_infinite]" />
                  
                  {/* Dollar symbols */}
                  <text x="300" y="200" fill="white" fontSize="14" className="animate-pulse">$</text>
                  <text x="320" y="150" fill="white" fontSize="14" className="animate-pulse" style={{ animationDelay: '1s' }}>$</text>
                  <circle cx="100" cy="200" r="4" fill="#22C55E" />
                </svg>
                <style jsx>{`
                  @keyframes dash {
                    to { stroke-dashoffset: 0; }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SOCIAL PROOF ====== */}
      <section ref={proofRef} className="reveal bg-primary-secondary border-y border-border py-[clamp(4rem,10vw,7rem)]">
        <div className="section-container">
          <div className="text-center mb-16" ref={counterRef}>
            <p className="text-[clamp(3.5rem,8vw,6rem)] font-[900] text-text-primary leading-none tracking-[-0.04em] tabular-nums mb-4">
              {count.toLocaleString()}<span className="text-accent-green">+</span>
            </p>
            <p className="text-[1.125rem] font-semibold text-text-secondary uppercase tracking-wider">
              immigrants and first-gen earners already on the waitlist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                text: "Legado finally explained my 401k match in a way that didn't make me feel stupid.",
                author: "Software Engineer, Dallas",
                initials: "JD"
              },
              { 
                text: "I've been sending money home for 5 years. This is the first app that actually accounts for it.",
                author: "Nurse, New Jersey",
                initials: "MK"
              },
              { 
                text: "The 'no-jargon' promise is real. It feels like talking to a friend who actually knows money.",
                author: "Designer, San Francisco",
                initials: "AL"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white border border-border p-6 rounded-xl shadow-sm relative pt-12">
                <span className="absolute top-4 left-6 text-accent-green text-[3rem] font-serif leading-none opacity-20 hover:opacity-100 transition-opacity">“</span>
                <p className="text-text-secondary text-[0.9375rem] leading-relaxed italic mb-4 relative z-10">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-primary text-white text-[0.75rem] font-bold flex items-center justify-center">
                    {t.initials}
                  </div>
                  <p className="text-text-muted text-[0.8125rem] font-bold uppercase tracking-tight">
                    {t.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-text-light text-[0.75rem] font-medium uppercase tracking-[0.1em]">
            Early beta tester feedback
          </p>
        </div>
      </section>

      {/* ====== BOTTOM CTA ====== */}
      <section ref={ctaRef} className="reveal py-[clamp(4rem,10vw,7rem)] bg-white">
        <div className="section-container text-center">
          <div className="max-w-[560px] mx-auto">
            <div className="w-10 h-[3px] bg-accent-green rounded-full mx-auto mb-6" />
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-text-primary mb-4 leading-tight">
              Be the first to know when Legado launches
            </h2>
            <p className="text-text-muted text-[1.125rem] mb-10 leading-relaxed">
              Early waitlist members get 3 months of Legado Pro free at launch.
            </p>
            <div className="flex justify-center">
              <WaitlistForm source="bottom_cta" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
