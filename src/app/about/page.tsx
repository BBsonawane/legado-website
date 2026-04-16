import { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "About — Legado",
  description: "Why we built Legado: the financial guide for immigrants navigating the US money system alone.",
};

export default function AboutPage() {
  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-text-primary mb-10 leading-tight">
            Why we built Legado
          </h1>

          <div className="space-y-6 text-text-secondary text-base sm:text-[1.05rem] leading-[1.8]">
            <p>
              Six months into your first US job, you open your bank app on a
              Sunday night. You do the math. The number is smaller than it should
              be. Much smaller.
            </p>
            <p>
              You&apos;ve been earning well. You haven&apos;t been irresponsible. But
              nobody taught you how the American money system works. Not your
              parents — they navigated a completely different system. Not your
              colleagues — it would be embarrassing to ask. Not the internet —
              every article assumes you already have an emergency fund, a credit
              score, and a basic understanding of what a 401k match even means.
            </p>
            <p className="text-text-primary font-medium">
              So you close the app and try not to think about it.
            </p>
            <p>
              Legado exists for that moment. We&apos;re building the financial guide
              that should have existed the day you landed.
            </p>
            <p>
              No judgment. No jargon. No generic advice written for someone who
              grew up here. Just clear, specific, actionable guidance for your
              actual situation.
            </p>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-heading text-text-primary mb-6">
              Join the waitlist
            </h2>
            <WaitlistForm source="about" />
          </div>
        </div>
      </div>
    </section>
  );
}
