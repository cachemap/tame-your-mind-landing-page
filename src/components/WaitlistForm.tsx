"use client";

import { useState, useTransition } from "react";
import { SubscribeResult } from "@/actions/_subscribeHelpers";
import { subscribeMailerLiteAction } from "@/actions/subscribeMailerLite";
// import { posthog } from "@/lib/posthog";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import styles from "./WaitlistForm.module.scss";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
};

export function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result: SubscribeResult = await subscribeMailerLiteAction(formData);

      if (result.success) {
        setFormState({
          status: "success",
          message: result.message,
        });

        // Track successful signup
        // posthog.capture("waitlist_signup", {
        //   email: formData.get("email"),
        // });
      } else {
        setFormState({
          status: "error",
          message: result.message,
          errors: result.errors,
        });
      }
    });
  }

  if (formState.status === "success") {
    return (
      <Card variant="glass" className={styles.card}>
        <CardContent className={styles.successContent}>
          <div className={styles.successIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>You're on the list!</h3>
          <p className={styles.successMessage}>{formState.message}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="glass" className={styles.card}>
      <CardHeader>
        <CardTitle>Ready to Tame Your Mind?</CardTitle>
        <CardDescription>
          Join the waitlist for the next cohort + get a free AI thinking guide
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className={styles.form}>
          {/* Honeypot field for bot detection */}
          <div className="sr-only" aria-hidden="true">
            <Input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className={styles.nameFields}>
            <Input
              name="firstName"
              label="First name"
              placeholder="John"
              required
              error={formState.errors?.firstName}
              disabled={isPending}
            />
            <Input
              name="lastName"
              label="Last name"
              placeholder="Doe"
              required
              error={formState.errors?.lastName}
              disabled={isPending}
            />
          </div>

          <Input
            name="email"
            type="email"
            label="Email address"
            placeholder="you@example.com"
            required
            error={formState.errors?.email}
            disabled={isPending}
          />

          {formState.status === "error" && !formState.errors && (
            <p className={styles.errorMessage} role="alert">
              {formState.message}
            </p>
          )}

          <Button type="submit" size="lg" isLoading={isPending} className={styles.submitButton}>
            {isPending ? "Joining..." : "Join the Waitlist"}
          </Button>

          <p className={styles.privacy}>
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

