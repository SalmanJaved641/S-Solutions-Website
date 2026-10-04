import { z } from "zod";
import { serviceOptions } from "@/content/contact";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.enum(serviceOptions),
  message: z.string().trim().min(20, "Please share at least 20 characters about your project.").max(5000),
  companyWebsite: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
