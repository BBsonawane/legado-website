"use client";

import { useState } from "react";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzgbc4bsGvdebZnLkEAUKGh26wf9GquDbNByQ_gmgQr4-PZhVpaN6Q3BDs-5MsH76cnsA/exec";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (em: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error"); setErrorMsg("Please fill in all fields."); return;
    }
    if (!validateEmail(email)) {
      setStatus("error"); setErrorMsg("Please enter a valid email address."); return;
    }
    setStatus("loading");
    try {
      fetch(ENDPOINT, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "contact", message: name + ": " + message }),
      });
      setTimeout(() => { setStatus("success"); setName(""); setEmail(""); setMessage(""); }, 1000);
    } catch {
      setStatus("error"); setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-text-primary mb-3">
            Get in touch
          </h1>
          <p className="text-text-secondary text-base sm:text-lg mb-12">
            We read every message. Seriously.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-text-primary text-sm font-medium mb-2">Name</label>
                  <input id="name" type="text" value={name}
                    onChange={(e) => { setName(e.target.value); if (status === "error") setStatus("idle"); }}
                    className="w-full px-4 py-3.5 bg-primary-card border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-[0.9rem] shadow-sm"
                    placeholder="Your name" disabled={status === "loading" || status === "success"} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-primary text-sm font-medium mb-2">Email</label>
                  <input id="email" type="email" value={email}
                    onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                    className="w-full px-4 py-3.5 bg-primary-card border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-[0.9rem] shadow-sm"
                    placeholder="you@email.com" disabled={status === "loading" || status === "success"} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-text-primary text-sm font-medium mb-2">Message</label>
                  <textarea id="message" value={message} rows={5}
                    onChange={(e) => { setMessage(e.target.value); if (status === "error") setStatus("idle"); }}
                    className="w-full px-4 py-3.5 bg-primary-card border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-[0.9rem] resize-none shadow-sm"
                    placeholder="What's on your mind?" disabled={status === "loading" || status === "success"} />
                </div>
                <button type="submit" disabled={status === "loading" || status === "success"}
                  className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-secondary text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-[0.9rem] min-h-[44px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  {status === "loading" ? (<><span className="spinner" />Sending...</>) : status === "success" ? "Sent ✓" : "Send Message"}
                </button>
                {status === "success" && <p className="text-accent-secondary text-sm font-medium animate-fade-in">Message sent. We&apos;ll get back to you within 48 hours.</p>}
                {status === "error" && <p className="text-red-600 text-sm animate-fade-in">{errorMsg}</p>}
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-primary-card border border-border-light rounded-2xl p-7 space-y-6 shadow-sm">
                <div>
                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-2">Email</p>
                  <a href="mailto:contact.support.legado@gmail.com" className="text-accent-secondary hover:text-accent hover:underline text-sm font-medium break-all">
                    contact.support.legado@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-2">Response time</p>
                  <p className="text-text-primary text-sm font-medium">Usually within 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
