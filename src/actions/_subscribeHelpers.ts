import { z } from "zod";
import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rate-limit";

export const subscribeSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or less")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or less")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be 255 characters or less")
    .toLowerCase()
    .trim(),
});

export type SubscribeData = z.infer<typeof subscribeSchema>;

export type SubscribeResult = {
  success: boolean;
  message: string;
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
};

type PreflightError = { ok: false; result: SubscribeResult };
type PreflightSuccess = { ok: true; data: SubscribeData };

/**
 * Runs honeypot detection, rate limiting, and Zod validation.
 * Returns either an early result to short-circuit or validated subscriber data.
 */
export async function runPreflight(
  formData: FormData
): Promise<PreflightError | PreflightSuccess> {
  // Bot detection via honeypot field
  if (formData.get("website")) {
    return {
      ok: false,
      result: { success: true, message: "Check your inbox for a confirmation email!" },
    };
  }

  // Rate limiting by IP
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0] ?? headersList.get("x-real-ip") ?? "unknown";

  const rateLimitResult = checkRateLimit(ip);
  if (!rateLimitResult.success) {
    const resetSeconds = Math.ceil(rateLimitResult.resetIn / 1000);
    return {
      ok: false,
      result: {
        success: false,
        message: `Too many requests. Please try again in ${resetSeconds} seconds.`,
      },
    };
  }

  // Input validation
  const rawData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  };

  const validationResult = subscribeSchema.safeParse(rawData);
  if (!validationResult.success) {
    const fieldErrors = validationResult.error.flatten().fieldErrors;
    return {
      ok: false,
      result: {
        success: false,
        message: "Please correct the errors below.",
        errors: {
          firstName: fieldErrors.firstName?.[0],
          lastName: fieldErrors.lastName?.[0],
          email: fieldErrors.email?.[0],
        },
      },
    };
  }

  return { ok: true, data: validationResult.data };
}
