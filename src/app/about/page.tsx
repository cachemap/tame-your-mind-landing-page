import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
  title: "About | Why I Built This",
  description:
    "The story behind cachemap — why I'm obsessed with helping developers break through the plateau and level up for real.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Why I'm Building This
          </h1>
          <p className={styles.subtitle}>
            Because I've been exactly where you are — and I know what actually
            works.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyBlock}>
            <h2>The Short Version</h2>
            <p>
              I spent years doing everything "right" — tutorials, side projects,
              LeetCode, networking — and still felt stuck. The problem wasn't
              effort. It was <em>approach</em>.
            </p>
            <p>
              Once I discovered the power of knowledge management systems,
              deliberate practice, and learning how to <em>think</em> like a
              senior engineer instead of just code like one, everything changed.
            </p>
            <p>
              I went from feeling like an imposter to leading design discussions,
              mentoring teammates, and getting promoted — not because I suddenly
              got smarter, but because I finally had a <em>system</em>.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <h2>The Problem I Keep Seeing</h2>
            <p>
              Every week I talk to developers who are talented, motivated, and
              working hard — but going nowhere. They've got tutorial fatigue.
              They've got imposter syndrome. They've got a GitHub full of
              half-finished projects and a LinkedIn full of rejection emails.
            </p>
            <p>
              The industry tells them to "just keep grinding." But grinding
              without direction is just burning out with extra steps.
            </p>
            <p>
              And now, with AI changing the landscape every month, the gap
              between "can write code" and "can engineer software" is getting
              wider. Juniors are competing with GPT for the same tasks. The bar
              is rising and nobody's giving them a ladder.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <h2>What I Believe</h2>
            <div className={styles.beliefList}>
              <div className={styles.belief}>
                <span className={styles.beliefIcon}>🧠</span>
                <div>
                  <strong>Your mind is your most important tool.</strong>
                  <p>
                    Before you can write better code, you need to manage your
                    thoughts, knowledge, and energy. That's why we start with a
                    PKMS — not a framework tutorial.
                  </p>
                </div>
              </div>
              <div className={styles.belief}>
                <span className={styles.beliefIcon}>🛠️</span>
                <div>
                  <strong>Experience can't be shortcut, but it can be compressed.</strong>
                  <p>
                    You don't need 10 years to think like a senior. You need
                    deliberate practice, real feedback, and a system that forces
                    you to level up every week.
                  </p>
                </div>
              </div>
              <div className={styles.belief}>
                <span className={styles.beliefIcon}>🤖</span>
                <div>
                  <strong>AI is a tool, not a replacement.</strong>
                  <p>
                    The engineers who thrive will be the ones who know how to
                    direct AI, review its output, and think critically about
                    what it can't do. We train that skill.
                  </p>
                </div>
              </div>
              <div className={styles.belief}>
                <span className={styles.beliefIcon}>🌱</span>
                <div>
                  <strong>Growth is holistic.</strong>
                  <p>
                    Sleep, nutrition, energy management, workspace setup — these
                    aren't "extras." They're the foundation that makes
                    everything else sustainable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.storyBlock}>
            <h2>What This Isn't</h2>
            <p>
              This isn't a bootcamp trying to turn beginners into developers in
              12 weeks. It's not another Udemy course collecting dust in your
              library. And it's definitely not a "just watch me code" YouTube
              channel.
            </p>
            <p>
              This is a structured, mentorship-driven acceleration program for
              developers who already know the basics but can't seem to break
              through to the next level. It's intensive. It's personal. And it
              actually works.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Ready to Stop Spinning Your Wheels?</h2>
            <p>
              Join the waitlist and get a free guide on using AI creatively to
              accelerate your learning — plus early access to the next cohort.
            </p>
            <Link href="/#signup" className={styles.ctaButton}>
              Join the Waitlist →
            </Link>
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
