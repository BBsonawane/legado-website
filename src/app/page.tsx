import Image from "next/image";
import styles from "./page.module.css";
import WaitlistForm from "@/components/WaitlistForm";
import { FiGlobe, FiShield, FiTrendingUp } from "react-icons/fi";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container animate-fade-in">
          <h1 className={styles.headline}>
            You moved here for work. You're earning well. So why does your bank account feel like a lie?
          </h1>
          <p className={styles.subheadline}>
            Legado is the financial guidance app built specifically for immigrants who are settling abroad. We cut through the confusion of cross-border taxes, foreign investments, and long-term planning, so you can build wealth with confidence.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className={styles.socialProof}>
        <div className="container">
          <h3>Trusted by expats from</h3>
          <div className={styles.logos}>
            <div className={styles.logoPlaceholder}>Google</div>
            <div className={styles.logoPlaceholder}>Amazon</div>
            <div className={styles.logoPlaceholder}>Meta</div>
            <div className={styles.logoPlaceholder}>Microsoft</div>
            <div className={styles.logoPlaceholder}>Spotify</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Built for your unique financial journey</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiGlobe />
              </div>
              <h3 className={styles.featureTitle}>Cross-Border Clarity</h3>
              <p className={styles.featureDesc}>
                Understand how your home country's laws interact with your new home's taxes. No more surprises when you transfer money or invest globally.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiTrendingUp />
              </div>
              <h3 className={styles.featureTitle}>Optimised Investing</h3>
              <p className={styles.featureDesc}>
                Don't leave your cash in a low-interest checking account. Learn the right tax-advantaged accounts to open and the right index funds to buy.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiShield />
              </div>
              <h3 className={styles.featureTitle}>Secure Your Legacy</h3>
              <p className={styles.featureDesc}>
                Whether you plan to stay forever or eventually return home, we help you structure a resilient financial plan that protects your family's future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
