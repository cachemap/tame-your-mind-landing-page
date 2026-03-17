"use server";

import { addToMailerLite } from "@/lib/mailerlite";
import { runPreflight, type SubscribeResult } from "./_subscribeHelpers";

export async function subscribeMailerLiteAction(
  formData: FormData
): Promise<SubscribeResult> {
  try {
    const preflight = await runPreflight(formData);
    if (!preflight.ok) return preflight.result;

    const { firstName, lastName, email } = preflight.data;

    await addToMailerLite(email, firstName, lastName);

    return {
      success: true,
      message: "Check your inbox for a confirmation email!",
    };
  } catch (error) {
    console.error("MailerLite subscription error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
