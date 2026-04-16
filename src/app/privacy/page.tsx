import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Legado",
  description: "Legado's privacy policy. We are committed to protecting your financial data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="section-container">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-text-primary mb-3">
            Privacy Policy
          </h1>
          <p className="text-text-muted text-sm mb-10">Last updated: April 2026</p>

          <div className="bg-primary-card border border-border-light rounded-2xl p-8 sm:p-10 mb-8 shadow-sm">
            <p className="text-text-secondary text-base leading-relaxed">
              Our full privacy policy is available below. Legado is committed to
              protecting your financial data with the highest standards of security
              and transparency.
            </p>
          </div>

          <div
            id="privacy-content"
            className="bg-primary-card border border-border-light rounded-2xl p-8 sm:p-10 text-text-secondary text-sm leading-relaxed shadow-sm"
          >
            <p>Privacy policy content loading...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
