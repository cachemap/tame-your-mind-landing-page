import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import styles from "../page.module.scss";

export default function OverviewPage() {
  return (
    <main className={styles.main}>
      <section className={styles.solution}>
        <div className={styles.container}>
          <p className={styles.sectionSubtitle}>
            <Link href="/" className={styles.calcCalloutLink}>
              ← Full program details
            </Link>
          </p>
          <h1 className={styles.sectionTitle}>
            Become the Engineer <em>AI Can&apos;t Replace</em>
          </h1>
          <p className={styles.sectionSubtitle}>
            You can write code — but not yet <em>why</em> it works. The gap to
            senior isn&apos;t more tutorials. It&apos;s a system. 12 weeks.
          </p>
        </div>
      </section>

      <section className={styles.solution}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            12 weeks. Mind → Craft → Architecture.
          </h2>
          <p className={styles.sectionSubtitle}>
            Not a bootcamp. Not a course. A <em>system</em> — mind management,
            technical depth, and real team experience. ~5–6 hrs/week. Portfolio
            artifacts every week, not busywork.
          </p>
          <div className={styles.benefits}>
            <ul className={styles.benefitsList}>
              <li>
                <span className={styles.benefitIcon}>🎯</span> Live sessions ·
                PKMS setup · Async support
              </li>
              <li>
                <span className={styles.benefitIcon}>🏗️</span> Capstone with
                PRs + code review
              </li>
              <li>
                <span className={styles.benefitIcon}>🤖</span> Work{" "}
                <em>with</em> AI — review its code, build your prompts
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.calcCallout}>
        <div className={styles.container}>
          <div className={styles.calcCalloutCard}>
            <span className={styles.calcCalloutIcon}>📊</span>
            <div className={styles.calcCalloutContent}>
              <h2 className={styles.calcCalloutTitle}>
                What&apos;s accelerating to senior <em>actually</em> worth?
              </h2>
              <p className={styles.calcCalloutText}>
                Entry → senior can mean <strong>$1M+</strong> over 15 years.{" "}
                <Link
                  href="/calc/compensation-impact"
                  className={styles.calcCalloutLink}
                >
                  Run the numbers →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="signup">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to level up?</h2>
              <p className={styles.ctaSubtitle}>
                Drop your email. We&apos;ll send the program breakdown, a free
                AI guide, and priority access.
              </p>
              <div className={styles.ctaPricing}>
                <p className={styles.ctaPrice}>
                  $200<span>/week × 12 weeks</span>
                </p>
                <p className={styles.ctaPriceCompare}>Group discount for 2–4.</p>
              </div>
            </div>

            <div className={styles.ctaForm}>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} cachemap — Built for engineers who refuse
          to plateau.
        </p>
      </footer>
    </main>
  );
}
