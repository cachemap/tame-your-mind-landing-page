import type { Metadata } from "next";
import { PostHogProvider } from "@/components/PostHogProvider";
import { Header } from "@/components/Header";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Tame Your Mind | Build the System for Clarity, Creativity & Control",
  description:
    "A 12-week coaching program that combines mind management, personal knowledge systems, and AI-native workflows to turn overwhelm into clarity and ideas into action.",
  openGraph: {
    title: "Tame Your Mind | Build the System for Clarity, Creativity & Control",
    description:
      "Stop drowning in your own thoughts. Build a system that turns chaos into clarity and ideas into action.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tame Your Mind | Build the System for Clarity, Creativity & Control",
    description:
      "Stop drowning in your own thoughts. Build a system that turns chaos into clarity and ideas into action.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <PostHogProvider>
          <Header />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
