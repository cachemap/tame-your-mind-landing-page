import { Hero } from "@/components/Hero";
import { WaitlistForm } from "@/components/WaitlistForm";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <section className={styles.solution}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            A 12-Week System to Tame Your Mind &amp; Unlock Your Potential
          </h2>
          <p className={styles.sectionSubtitle}>
            This isn&apos;t a productivity hack. This isn&apos;t another app to
            download. This is a <em>complete transformation</em> — rewiring how
            you think, learn, organize, and create.
          </p>

          <div className={styles.notThis}>
            <p>
              We combine <strong>mind management</strong>,{" "}
              <strong>personal knowledge systems</strong>, and{" "}
              <strong>life design</strong> into one intensive coaching program.
            </p>
            <p className={styles.emphasis}>
              Every week produces{" "}
              <em>tangible artifacts</em> — systems, workflows, and creative
              outputs that are yours to keep forever.
            </p>
          </div>

          <div className={styles.diffGrid}>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🎯</span>
              <h3>Weekly Live Sessions</h3>
              <p>
                2-hour structured coaching, live exercises, system building, and
                discussion (1-on-1 or small group).
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🧠</span>
              <h3>Personalized PKMS</h3>
              <p>
                Your own knowledge management workspace in Notion, built
                together during the program.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>💬</span>
              <h3>Async Support</h3>
              <p>
                Get answers and feedback between sessions via Slack/Discord
                (48hr response).
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>📝</span>
              <h3>Exercises with Feedback</h3>
              <p>
                Every assignment produces something you keep and use — not
                throwaway homework.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🤖</span>
              <h3>AI-Native Workflows</h3>
              <p>
                Learn to use AI as a thinking partner for research, ideation,
                and organization.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🏗️</span>
              <h3>Creative Capstone</h3>
              <p>
                Apply your new system to a real personal goal, creative project,
                or life transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.phases}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Three Phases. Twelve Weeks. Complete Transformation.
          </h2>
          <p className={styles.sectionSubtitle}>
            ~5–6 hours per week. Manageable alongside a full life. Each week
            builds on the last.
          </p>

          <div className={styles.phaseGrid}>
            <div className={styles.phaseCard}>
              <div className={styles.phaseNumber}>Phase 1</div>
              <h3 className={styles.phaseTitle}>Tame Your Mind</h3>
              <p className={styles.phaseWeeks}>Weeks 1–4</p>
              <p className={styles.phaseGoal}>
                Build the operating system for your brain. Stop drowning, start
                directing.
              </p>
              <ul className={styles.phaseTopics}>
                <li>Full brain dump — get everything out of your head and into a trusted system</li>
                <li>Personal knowledge system built in Notion from scratch</li>
                <li>Daily and weekly review rituals that actually stick</li>
                <li>Energy management, deep focus habits, and mental decluttering</li>
              </ul>
              <p className={styles.phaseOutcome}>
                <strong>Outcome:</strong> A trusted PKMS you actually use daily
                and a clarity system that eliminates the &ldquo;drowning&rdquo;
                feeling for good.
              </p>
            </div>

            <div className={styles.phaseCard}>
              <div className={styles.phaseNumber}>Phase 2</div>
              <h3 className={styles.phaseTitle}>Connect the Dots</h3>
              <p className={styles.phaseWeeks}>Weeks 5–8</p>
              <p className={styles.phaseGoal}>
                Turn captured knowledge into creative fuel. Learn to think in
                systems, not silos.
              </p>
              <ul className={styles.phaseTopics}>
                <li>Link ideas across domains — see patterns others miss</li>
                <li>Build a personal idea engine that compounds over time</li>
                <li>Use AI to accelerate research, synthesis, and creative exploration</li>
                <li>Decision-making frameworks for navigating complexity with confidence</li>
              </ul>
              <p className={styles.phaseOutcome}>
                <strong>Outcome:</strong> A networked knowledge base that
                surfaces insights on demand and an AI-assisted creative workflow
                you can apply to anything.
              </p>
            </div>

            <div className={styles.phaseCard}>
              <div className={styles.phaseNumber}>Phase 3</div>
              <h3 className={styles.phaseTitle}>Create Your Future</h3>
              <p className={styles.phaseWeeks}>Weeks 9–12</p>
              <p className={styles.phaseGoal}>
                Apply everything to a real project. Turn your system into output
                the world can see.
              </p>
              <ul className={styles.phaseTopics}>
                <li>Design your personal life roadmap using your PKMS</li>
                <li>Creative capstone: launch a blog, plan a business, write a book outline, design a passion project</li>
                <li>AI as a creative collaborator — ideation, drafting, and refinement workflows</li>
                <li>Capstone presentation + personalized 90-day growth plan</li>
              </ul>
              <p className={styles.phaseOutcome}>
                <strong>Outcome:</strong> A completed creative project, a life
                roadmap you believe in, and a 90-day plan to keep the momentum
                going.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.momentum}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            This Isn&apos;t Just Organizing — It&apos;s Transformation
          </h2>
          <p className={styles.momentumText}>
            Once your thinking has a home, once you stop losing ideas to the
            chaos of daily life… Once you become an architect of your own mind —
            everything changes.
          </p>
          <p className={styles.momentumHighlight}>
            That&apos;s when you start making decisions with clarity instead of
            anxiety. That&apos;s when creative ideas stop slipping away and start
            building on each other. That&apos;s when people ask how you stay so
            calm, so organized, so ahead.
          </p>
        </div>

        <div className={styles.ctaMotivation}>
          <p>
            The world is drowning in information.
          </p>
          <p className={styles.chain}>This system gives you clarity.</p>
          <p className={styles.chain}>Clarity turns into confidence.</p>
          <p className={styles.chain}>Confidence turns into creative power.</p>
          <p className={styles.chainFinal}>
            That&apos;s what makes you <u>dangerous</u> in a world of abundance.
            <br />
            That&apos;s what makes you <u>ready</u> for whatever comes next.
          </p>
        </div>
      </section>

      <section className={styles.ai}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            AI Is Changing Everything. We&apos;ll Make Sure You&apos;re Ready.
          </h2>
          <p className={styles.aiText}>
            Everyone&apos;s talking about AI. Few people know how to actually use
            it to think better.
          </p>
          <p className={styles.aiText}>
            You&apos;ll learn to use AI as a research partner, brainstorming
            tool, and creative accelerator — not a replacement for your own
            thinking. You&apos;ll build workflows that combine your knowledge
            system with AI to generate ideas, solve problems, and create things
            that are uniquely yours.
          </p>
          <p className={styles.aiHighlight}>
            You&apos;ll work <em>with</em> AI — not just hear about it. Build
            real workflows that make you more creative and capable.
          </p>
          <p className={styles.aiText}>
            Worst case? You become fluent with the most powerful thinking tools
            ever created — a skill that compounds no matter where life takes you.
          </p>
        </div>
      </section>

      <section className={styles.differentiators}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Makes This Different</h2>
          <p className={styles.sectionSubtitle}>
            No app, course, or self-help book combines all of this.
          </p>

          <div className={styles.diffGrid}>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🧠</span>
              <h3>Mind Management First</h3>
              <p>
                We start with how you think, not what tools you use. The system
                works because it&apos;s built on your brain&apos;s natural patterns, not
                against them.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🛠️</span>
              <h3>Built by a Practitioner</h3>
              <p>
                Not theory from a textbook. Real systems built by someone who
                uses them every day and has coached others to do the same.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🤖</span>
              <h3>AI-Native</h3>
              <p>
                Work with AI, not just hear about it. Build real workflows that
                make you more creative and capable.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>📦</span>
              <h3>Artifacts Over Assignments</h3>
              <p>
                Every exercise produces something you keep: templates, workflows,
                dashboards, and creative outputs that are yours forever.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🌱</span>
              <h3>Holistic by Design</h3>
              <p>
                Energy, habits, environment, and routines. Growth requires fuel,
                not just frameworks.
              </p>
            </div>
            <div className={styles.diffCard}>
              <span className={styles.diffIcon}>🎯</span>
              <h3>Personalized, Not Prescriptive</h3>
              <p>
                Your system is built around your life, your goals, and your
                creative ambitions. No cookie-cutter templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Don&apos;t Just Take Our Word for It
          </h2>
          <p className={styles.sectionSubtitle}>
            Real results from real people.
          </p>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <blockquote className={styles.testimonialQuote}>
                <p>
                  My mentor has been an advisor to me since my college days.
                  With his guidance, I&apos;ve been able to level up not only
                  in my career but also in my personal life.
                </p>
                <p>
                  One area I really struggled with after college was digital
                  note-taking — it always felt like a tedious task that got
                  tossed to the side. This is where he really shines.{" "}
                  <strong>
                    His organizational structure is one of my favorite qualities
                    that has rubbed off on me and positively impacted my life.
                  </strong>
                </p>
                <p>
                  Beyond that, he has a unique ability to abstract knowledge in
                  a way that&apos;s easy to consume. This trait, combined with
                  his high emotional intelligence, will serve him well as he
                  continues on the path toward leadership.
                </p>
                <p>
                  I&apos;m truly grateful to have his guidance as I continue
                  along my journey — he has been an invaluable resource.
                </p>
              </blockquote>
              <div className={styles.testimonialAttribution}>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>Neel</span>
                  <span className={styles.testimonialRole}>
                    Principal Distributed Systems Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="signup">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to Tame Your Mind?</h2>
              <p className={styles.ctaSubtitle}>
                <strong>
                  You don&apos;t need another app.
                </strong>
              </p>
              <p className={styles.ctaSubtitle}>
                You need a system, a guide, and a map that actually leads
                somewhere.
              </p>

              <div className={styles.ctaPromise}>
                <p>Drop your email and we&apos;ll send you:</p>
                <ul>
                  <li>
                    A free guide on using AI as a creative thinking partner
                  </li>
                  <li>
                    A full breakdown of the 12-week program and what&apos;s
                    inside
                  </li>
                  <li>
                    Priority access to apply before the next cohort opens
                  </li>
                </ul>
              </div>

              <div className={styles.ctaPricing}>
                <p className={styles.ctaPriceLabel}>Investment in Yourself</p>
                <p className={styles.ctaPrice}>
                  $200<span>/week × 12 weeks</span>
                </p>
                <p className={styles.ctaPriceCompare}>
                  Compare: life coaches ($150–400/session), productivity courses
                  ($500–2,000 with no support), therapy ($150–300/session with no
                  system to show for it).
                </p>
                <p className={styles.ctaPriceGroup}>
                  Group discount available for cohorts of 2–4.
                </p>
              </div>
            </div>

            <div className={styles.ctaForm}>
              <WaitlistForm />
              <p className={styles.ctaTagline}>
                Let&apos;s make this the turning point.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} tame your mind — Built for people who
          refuse to plateau.
        </p>
      </footer>
    </main>
  );
}
