import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
  title: "Resources | Curated Learning for Developers",
  description:
    "A hand-picked collection of the best resources for developers looking to level up — from CS fundamentals to system design to productivity.",
};

const RESOURCE_CATEGORIES = [
  {
    title: "CS Fundamentals",
    emoji: "🧮",
    description:
      "Core computer science concepts that actually matter in day-to-day engineering.",
    resources: [
      {
        title: "Teach Yourself Computer Science",
        url: "https://teachyourselfcs.com",
        description:
          "The single best roadmap for self-taught engineers to fill in CS gaps. Opinionated and practical.",
      },
      {
        title: "Base CS by Vaidehi Joshi",
        url: "https://medium.com/basecs",
        description:
          "Beautifully illustrated explanations of CS fundamentals — from linked lists to graph traversal.",
      },
    ],
  },
  {
    title: "System Design",
    emoji: "🏗️",
    description:
      "Think like an architect. Understand trade-offs at scale.",
    resources: [
      {
        title: "System Design Primer",
        url: "https://github.com/donnemartin/system-design-primer",
        description:
          "Comprehensive, open-source resource covering everything from load balancing to database sharding.",
      },
      {
        title: "Designing Data-Intensive Applications",
        url: "https://dataintensive.net",
        description:
          "Martin Kleppmann's masterpiece. The single best book on distributed systems and data architecture.",
      },
      {
        title: "ByteByteGo Newsletter",
        url: "https://blog.bytebytego.com",
        description:
          "Visual breakdowns of real-world system designs. Great for building intuition over time.",
      },
    ],
  },
  {
    title: "Software Craft",
    emoji: "🛠️",
    description:
      "Writing clean, maintainable code that your future self (and teammates) will thank you for.",
    resources: [
      {
        title: "Refactoring Guru",
        url: "https://refactoring.guru",
        description:
          "Design patterns and refactoring techniques explained with clear examples and beautiful illustrations.",
      },
      {
        title: "The Pragmatic Programmer",
        url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
        description:
          "Timeless wisdom on the craft of software development. A must-read for every serious engineer.",
      },
      {
        title: "Clean Code by Robert C. Martin",
        url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
        description:
          "Love it or debate it — the principles here will shape how you think about code quality.",
      },
    ],
  },
  {
    title: "Engineering Practices",
    emoji: "⚙️",
    description:
      "The team-level skills that separate code writers from effective engineers. This is how seniors actually operate.",
    resources: [
      {
        title: "How to Write a Great Pull Request",
        url: "https://google.github.io/eng-practices/review/developer/",
        description:
          "Google's guide to writing code that reviewers love. A great PR tells a story — small scope, clear description, and zero surprises. This is the skill that gets your code shipped faster.",
      },
      {
        title: "Breaking Down Problems — The Senior Engineer's Superpower",
        url: "https://addyosmani.com/blog/software-engineering-soft-parts/",
        description:
          "Senior engineers don't solve big problems — they decompose them until each piece is trivial. Learn to take a vague business requirement and turn it into a clear set of user stories and shippable tasks.",
      },
      {
        title: "Shape Up by Basecamp",
        url: "https://basecamp.com/shapeup",
        description:
          "A free book on how to scope, shape, and ship work in cycles. The best mental model for turning ambiguous requirements into concrete deliverables without drowning in process.",
      },
    ],
  },
  {
    title: "Productivity & Knowledge Management",
    emoji: "🧠",
    description:
      "Build the operating system for your brain. Stop drowning, start directing.",
    resources: [
      {
        title: "Building a Second Brain by Tiago Forte",
        url: "https://www.buildingasecondbrain.com",
        description:
          "The foundational text on personal knowledge management. Transform how you capture and use information.",
      },
      {
        title: "Getting Things Done by David Allen",
        url: "https://gettingthingsdone.com",
        description:
          "The classic productivity system. Still the gold standard for managing tasks, projects, and mental clarity.",
      },
      {
        title: "Four Thousand Weeks by Oliver Burkeman",
        url: "https://www.oliverburkeman.com/books",
        description:
          "A reality check on time management. Stop optimizing and start choosing what actually matters — essential reading for anyone drowning in productivity advice.",
      },
    ],
  },
  {
    title: "Tools",
    emoji: "🧰",
    description:
      "The apps and platforms we use and recommend for knowledge management and AI-native development.",
    resources: [
      {
        title: "Cursor",
        url: "https://cursor.sh",
        description:
          "The AI-native code editor. Built on VS Code but deeply integrated with AI — tab completion, inline chat, and codebase-aware reasoning. Once you try it, you can't go back.",
      },
      {
        title: "Claude Code",
        url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
        description:
          "Anthropic's agentic coding tool. Runs in your terminal, reads your entire project, and reasons about architecture — not just autocomplete. The best AI pair programmer available.",
      },
      {
        title: "openclaw",
        url: "https://docs.openclaw.ai",
        description:
          "Agentic workflows for power users. Simple as that.",
      },
      {
        title: "Notion",
        url: "https://www.notion.so",
        description:
          "The Swiss Army knife of knowledge management. Databases, wikis, project boards — all in one workspace. Great for building a developer PKMS.",
      },
      {
        title: "Obsidian",
        url: "https://obsidian.md",
        description:
          "Local-first, Markdown-based note-taking with powerful linking. Perfect for building a networked knowledge graph that you actually own.",
      },
      {
        title: "Instapaper",
        url: "https://www.instapaper.com",
        description:
          "Save articles, blog posts, and documentation to read later — distraction-free. The first step in a solid capture workflow.",
      },
    ],
  },
  {
    title: "AI & Engineering",
    emoji: "🤖",
    description:
      "Work with AI, not lean on it. Build the skills the next era of engineering demands.",
    resources: [
      {
        title: "Simon Willison's Blog",
        url: "https://simonwillison.net",
        description:
          "One of the best practitioners in AI-assisted development. Practical, thoughtful, and always current.",
      },
      {
        title: "Andrej Karpathy — Intro to Large Language Models",
        url: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
        description:
          "The single best primer on how LLMs actually work, from one of the field's most respected researchers. Watch this before forming opinions about AI.",
      },
      {
        title: "Latent Space Podcast",
        url: "https://www.latent.space",
        description:
          "Deep-dive conversations with AI engineers and researchers. Covers the intersection of AI and software engineering with real technical depth.",
      },
    ],
  },
  {
    title: "Career Growth",
    emoji: "🚀",
    description:
      "Navigate the industry, negotiate better, and build a career — not just a job.",
    resources: [
      {
        title: "Staff Engineer by Will Larson",
        url: "https://staffeng.com/book",
        description:
          "Understand what comes after senior. Even if you're not there yet, it shapes how you think about growth.",
      },
      {
        title: "The Missing README",
        url: "https://themissingreadme.com",
        description:
          "Everything they don't teach you in school about being an effective software engineer on a team.",
      },
      {
        title: "Levels.fyi",
        url: "https://www.levels.fyi",
        description:
          "Transparent compensation data. Know your market value before your next negotiation.",
      },
    ],
  },
] as const;

export default function ResourcesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Resources</h1>
          <p className={styles.subtitle}>
            A curated collection of the best learning material out there — the
            stuff I actually recommend to every engineer I mentor.
          </p>
        </div>
      </section>

      <section className={styles.resources}>
        <div className={styles.container}>
          {RESOURCE_CATEGORIES.map((category) => (
            <div key={category.title} className={styles.category}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryEmoji}>{category.emoji}</span>
                <div>
                  <h2 className={styles.categoryTitle}>{category.title}</h2>
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                </div>
              </div>

              <div className={styles.resourceList}>
                {category.resources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resourceCard}
                  >
                    <h3 className={styles.resourceTitle}>
                      {resource.title}
                      <span className={styles.externalIcon}>↗</span>
                    </h3>
                    <p className={styles.resourceDescription}>
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Want Structured Guidance?</h2>
            <p>
              These resources are great for self-study, but our 12-week program
              combines the best of all of them into a guided, mentored
              experience with real accountability.
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
