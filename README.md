# Email Funnel Landing Page

A modern Next.js 14+ waitlist landing page with animated gradients, glassmorphism effects, and full-stack integrations for email capture, transactional emails, and analytics.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Neon (Serverless Postgres)
- **ORM**: Prisma
- **Email**: Resend
- **Analytics**: PostHog
- **Styling**: Sass Modules with oklch color theme
- **Package Manager**: pnpm

## Features

- ✨ Animated mesh gradient background
- 🎨 Glassmorphism card design
- 📧 Email capture with validation
- 🚀 Server Actions for form handling
- 🛡️ Rate limiting & honeypot spam protection
- 📊 PostHog analytics integration
- 📬 Resend welcome email
- 🌙 Dark mode by default

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- A [Neon](https://neon.tech/) database
- A [Resend](https://resend.com/) account
- A [PostHog](https://posthog.com/) account (optional)

### Installation

1. **Clone and install dependencies**

```bash
git clone <your-repo-url>
cd email-funnel-landing-page
pnpm install
```

2. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
DATABASE_URL="your-neon-pooled-connection-string"
DIRECT_URL="your-neon-direct-connection-string"
RESEND_API_KEY="your-resend-api-key"
NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
```

3. **Set up the database**

```bash
pnpm prisma generate
pnpm prisma db push
```

4. **Run the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon pooled connection string |
| `DIRECT_URL` | Neon direct connection (for migrations) |
| `RESEND_API_KEY` | Resend API key for transactional emails |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host URL |

## Project Structure

```
src/
├── app/
│   ├── globals.scss     # Global styles + oklch theme
│   ├── layout.tsx       # Root layout with PostHog
│   ├── page.tsx         # Landing page
│   └── page.module.scss # Landing page styles
├── actions/
│   └── subscribe.ts     # Server Action for subscriptions
├── components/
│   ├── ui/              # Reusable UI components
│   ├── Hero.tsx         # Hero section
│   ├── WaitlistForm.tsx # Email capture form
│   └── PostHogProvider.tsx
├── lib/
│   ├── prisma.ts        # Prisma client singleton
│   ├── resend.ts        # Resend client
│   ├── rate-limit.ts    # IP-based rate limiting
│   └── posthog.ts       # PostHog configuration
├── emails/
│   └── WelcomeEmail.tsx # React Email template
└── prisma/
    └── schema.prisma    # Database schema
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/)
3. Add all environment variables in the Vercel dashboard
4. Deploy!

The `postinstall` script automatically generates the Prisma client during build.

### Database Migrations

For production deployments:

```bash
pnpm prisma migrate deploy
```

## Customization

### Theme Colors

Edit the oklch theme variables in `src/app/globals.scss`:

```scss
:root {
  --primary: oklch(0.67 0.17 153.85);
  --background: oklch(0.99 0 0);
  // ... more variables
}

.dark {
  --primary: oklch(0.67 0.17 153.85);
  --background: oklch(0.15 0.02 269.18);
  // ... more variables
}
```

### Email Template

Customize the welcome email in `src/emails/WelcomeEmail.tsx`. Uses [React Email](https://react.email/) components.

### Rate Limiting

Adjust rate limits in `src/lib/rate-limit.ts`:

```typescript
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;      // 5 requests per window
```

## License

MIT
