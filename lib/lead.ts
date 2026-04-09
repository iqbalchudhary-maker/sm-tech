export type LeadPayload = {
  name: string;
  contact: string;
  query: string;
};

export function formatLeadMessage(payload: LeadPayload): string {
  return [
    "New Lead Captured for SM Technology!",
    `Name: ${payload.name}`,
    `Query: ${payload.query}`,
    `Contact: ${payload.contact}`
  ].join("\n");
}

export async function sendLeadNotification(payload: LeadPayload): Promise<{ sent: boolean; detail: string }> {
  const message = formatLeadMessage(payload);
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "SM Technology <onboarding@resend.dev>";
  const to = process.env.RESEND_TO_EMAIL ?? process.env.OWNER_EMAIL;

  if (!resendApiKey || !from || !to) {
    return { sent: false, detail: "Resend is not configured." };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "New Lead Captured for SM Technology",
      text: `${message}\n\nOwner Contact Target: 00923010637955`
    })
  });

  if (!res.ok) {
    return { sent: false, detail: `Resend failed with status ${res.status}.` };
  }
  return { sent: true, detail: "Resend notification sent." };
}
