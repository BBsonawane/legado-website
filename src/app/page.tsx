import Image from "next/image";
import styles from "./page.module.css";
import WaitlistForm from "@/components/WaitlistForm";
import { FiPieChart, FiCalendar, FiCompass } from "react-icons/fi";

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
            Most immigrants earn well but watch their money quietly disappear — because nobody in their life can tell them what to do with it. Legado gives you a clear, personalised plan so you always know exactly what to do with your money.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Built for your unique financial journey</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiPieChart />
              </div>
              <h3 className={styles.featureTitle}>Financial Health Snapshot</h3>
              <p className={styles.featureDesc}>
                See exactly where your money is going the moment you open the app. No jargon, no guesswork — just a clear picture of your financial reality.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiCalendar />
              </div>
              <h3 className={styles.featureTitle}>Your Payday Plan</h3>
              <p className={styles.featureDesc}>
                Every time you get paid, Legado tells you exactly what to do with that paycheck — how much to save, how much to send home, and how much to keep.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiCompass />
              </div>
              <h3 className={styles.featureTitle}>Life Event Playbooks</h3>
              <p className={styles.featureDesc}>
                Just got a raise? Renewing your visa? Legado gives you a step-by-step financial playbook for every major moment in your immigrant life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
