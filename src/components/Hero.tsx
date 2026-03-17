"use client";

import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gradientBackground}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
        <div className={styles.gradientOrb4} />
        <div className={styles.noiseOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Now accepting applications for the next cohort
        </div>

        <h1 className={styles.headline}>
          Become the Person<br />
          <span className={styles.accent}>the Future Was Built For</span>
        </h1>

        <div className={styles.pain}>
          <p>You have ideas but no way to capture and connect them.</p>
          <p>You consume endless content but can&apos;t recall what matters.</p>
          <p>You feel the world accelerating and wonder if you&apos;re falling behind.</p>
          <p className={styles.dimmed}>You know you&apos;re capable of more — you just can&apos;t access it.</p>
        </div>

        <div className={styles.insight}>
          <p className={styles.insightLabel}>Here&apos;s the truth:</p>
          <p className={styles.insightBold}>
            The gap between &ldquo;overwhelmed&rdquo; and &ldquo;in control&rdquo; isn&apos;t more willpower.
          </p>
          <p>
            It&apos;s a <em>system</em> — for how you think, capture, organize, and create.
          </p>
          <p className={styles.highlight}>
            In 12 weeks, you&apos;ll have a mind management system that turns chaos into clarity and ideas into action.
          </p>
        </div>
      </div>
    </section>
  );
}
