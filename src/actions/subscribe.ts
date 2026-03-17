"use server";

import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { WelcomeEmail } from "@/emails/WelcomeEmail";
import { runPreflight, type SubscribeResult } from "./_subscribeHelpers";

export type { SubscribeResult };

export async function subscribeAction(formData: FormData): Promise<SubscribeResult> {
  try {
    const preflight = await runPreflight(formData);
    if (!preflight.ok) return preflight.result;

    const { firstName, lastName, email } = preflight.data;

    // Check if subscriber already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return {
        success: true,
        message: "You're already on the list! Check your inbox for updates.",
      };
    }

    // Create subscriber
    await prisma.subscriber.create({
      data: { firstName, lastName, email },
    });

    // Send welcome email
    try {
      await resend.emails.send({
        from: "Waitlist <onboarding@resend.dev>",
        to: email,
        subject: "Welcome to the waitlist!",
        react: WelcomeEmail({ firstName }),
      });
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
    }

    return {
      success: true,
      message: "Check your inbox for a confirmation email!",
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
