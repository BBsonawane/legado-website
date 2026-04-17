"use client";

import { useState } from "react";

interface WaitlistFormProps {
  source: string;
  id?: string;
}

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzgbc4bsGvdebZnLkEAUKGh26wf9GquDbNByQ_gmgQr4-PZhVpaN6Q3BDs-5MsH76cnsA/exec";

export default function WaitlistForm({ source, id }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      setTimeout(() => {
        setStatus("success");
        setEmail("");
      }, 1000);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const [focus, setFocus] = useState(false);

  return (
    <div id={id} className="w-full">
      <div 
        className={`bg-white border border-border p-7 rounded-2xl shadow-lg transition-all duration-300 ${
          focus ? "ring-[3px] ring-accent-green/10 border-accent-green" : ""
        }`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="Enter your email"
            className="w-full px-4 py-3.5 bg-primary-secondary border border-border-strong rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-green transition-all text-base"
            disabled={status === "loading" || status === "success"}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full px-6 py-3.5 bg-accent-primary hover:bg-[#333333] text-white font-bold rounded-lg transition-all duration-200 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm border-none"
          >
            {status === "loading" ? (
              <span className="spinner border-white border-t-accent-green" />
            ) : status === "success" ? (
              "You're in! ✓"
            ) : (
              "Join the Waitlist →"
            )}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-accent-green text-sm font-semibold animate-fade-in text-center">
            You&apos;re on the list. We&apos;ll reach out soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-sm animate-fade-in text-center">{errorMsg}</p>
        )}
        
        <p className="mt-4 text-text-muted text-[0.8125rem] text-center">
          Free to join · No spam · Ever
        </p>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[
          { icon: "🔒", text: "Bank-level security" },
          { icon: "🇺🇸", text: "Built for the US system" },
          { icon: "💬", text: "No financial jargon" },
        ].map((badge, i) => (
          <span 
            key={i}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-primary-tertiary border border-border rounded-full text-[0.75rem] font-medium text-text-muted"
          >
            <span>{badge.icon}</span>
            {badge.text}
          </span>
        ))}
      </div>
    </div>
  );
}
