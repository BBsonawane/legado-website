import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Legado",
  description: "Terms of Service for Legado.",
};

export default function TermsPage() {
  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="section-container">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-text-primary mb-3">
            Terms of Service
          </h1>
          <p className="text-text-muted text-sm mb-10">Last updated: April 2026</p>

          <div className="bg-primary-card border border-border-light rounded-2xl p-8 sm:p-10 space-y-6 text-text-secondary text-base leading-relaxed shadow-sm">
            <p>
              Our Terms of Service govern your use of Legado. By using our app or
              website, you agree to these terms.
            </p>
            <p>
              For questions about our terms, contact us at{" "}
              <a href="mailto:contact.support.legado@gmail.com" className="text-accent-secondary hover:text-accent hover:underline font-medium">
                contact.support.legado@gmail.com
              </a>
            </p>
            <p className="text-text-muted italic">
              Full terms coming soon. We are finalising our legal documentation ahead of launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
