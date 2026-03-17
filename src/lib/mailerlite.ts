'use server';

const API_BASE = "https://connect.mailerlite.com/api";

export async function addToMailerLite(
  email: string,
  firstName: string,
  lastName: string
) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey) {
    console.warn(
      "[MailerLite] MAILERLITE_API_KEY is not set — skipping subscriber sync."
    );
    return;
  }

  if (!groupId) {
    console.warn(
      "[MailerLite] MAILERLITE_GROUP_ID is not set — subscriber will be added without a group."
    );
  }

  const body: Record<string, unknown> = {
    email,
    fields: { name: firstName, last_name: lastName },
  };

  if (groupId) {
    body.groups = [groupId];
  }

  const res = await fetch(`${API_BASE}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(`MailerLite API error (${res.status}): ${JSON.stringify(error)}`);
  }

  return res.json();
}
