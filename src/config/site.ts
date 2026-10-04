export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
}

export const siteConfig = {
  name: "S Solutions",
  email: "mibusiness641@gmail.com",
  phoneDisplay: "0328-8131351",
  phoneInternationalDisplay: "+92 (328) 8131351",
  whatsappDigits: "923288131351",
  location: "Lahore, Pakistan",
  social: { facebook: "", instagram: "", linkedin: "", tiktok: "" } satisfies SocialLinks,
  portfolioUrl: "",
  bookingUrl: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappDigits}`;
