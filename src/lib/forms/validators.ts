import { z } from "zod";

const base = {
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Valid email required."),
  message: z.string().min(10, "Message is too short."),
};

export const contactSchema = z.object({
  ...base,
  subject: z.string().min(2, "Subject is required."),
  turnstileToken: z.string().min(1),
});

export const partnerSchema = z.object({
  ...base,
  organization: z.string().min(2, "Organization is required."),
  turnstileToken: z.string().min(1),
});

export const volunteerSchema = z.object({
  ...base,
  area: z.string().min(2, "Area of interest is required."),
  turnstileToken: z.string().min(1),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type PartnerInput = z.infer<typeof partnerSchema>;
export type VolunteerInput = z.infer<typeof volunteerSchema>;
