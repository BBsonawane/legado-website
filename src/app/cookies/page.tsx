import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Legado",
  description: "Legado's cookie policy.",
};

export default function CookiesPage() {
  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="section-container">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-text-primary mb-10">
            Cookie Policy
          </h1>

          <div className="bg-primary-card border border-border-light rounded-2xl p-8 sm:p-10 space-y-8 shadow-sm">
            <div>
              <h2 className="text-xl font-heading text-text-primary mb-3 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                Essential Cookies
              </h2>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                We use essential cookies that are strictly necessary for our website to function.
                These cookies enable core features like page navigation, secure access, and
                remembering your preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading text-text-primary mb-3 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                Analytics Cookies
              </h2>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                We use analytics cookies (Google Analytics) to understand how visitors interact
                with our website. This helps us improve our content and user experience. These
                cookies collect information in an aggregated and anonymous form.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading text-text-primary mb-3 flex items-center gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full shrink-0" />
                Advertising Cookies
              </h2>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                We <strong className="text-text-primary">do not</strong> use advertising cookies.
                Your browsing data is never shared with advertisers or used for targeted ad campaigns.
              </p>
            </div>

            <div className="pt-6 border-t border-border-light">
              <h2 className="text-xl font-heading text-text-primary mb-3">
                Requesting Cookie Data Deletion
              </h2>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                If you would like to request the deletion of any cookie data, please contact us at{" "}
                <a href="mailto:contact.support.legado@gmail.com" className="text-accent-secondary hover:text-accent hover:underline font-medium">
                  contact.support.legado@gmail.com
                </a>
                . We will process your request promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
