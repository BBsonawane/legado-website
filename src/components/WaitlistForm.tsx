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

  return (
    <div id={id} className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Enter your work email"
          className="flex-1 px-4 py-3.5 bg-primary-card border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-[0.9rem] shadow-sm"
          disabled={status === "loading" || status === "success"}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3.5 bg-accent hover:bg-accent-secondary text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-[0.9rem] whitespace-nowrap min-h-[44px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          {status === "loading" ? (
            <>
              <span className="spinner" />
              Joining...
            </>
          ) : status === "success" ? (
            "You're in! ✓"
          ) : (
            "Join the Waitlist"
          )}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-accent-secondary text-sm font-medium animate-fade-in">
          You&apos;re on the list. We&apos;ll reach out before anyone else.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600 text-sm animate-fade-in">{errorMsg}</p>
      )}
      {status === "idle" && (
        <p className="mt-3 text-text-muted text-xs">
          Free to join. No spam. Ever.
        </p>
      )}
    </div>
  );
}
