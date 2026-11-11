export interface SocialLinks {
  facebook: string;
  instagram: string;
  tiktok: string;
  linkedin: string;
}

export const siteConfig = {
  name: "S Solutions",
  email: "mibusiness641@gmail.com",
  phoneDisplay: "0328-8131351",
  phoneInternationalDisplay: "+92 (328) 8131351",
  whatsappDigits: "923288131351",
  location: "Lahore, Pakistan",
  social: {
    facebook: "https://www.facebook.com/share/14umor9UV8L/",
    instagram: "https://www.instagram.com/_s_solutions",
    tiktok: "https://www.tiktok.com/@_s_solutions",
    linkedin: "https://www.linkedin.com/company/s-solutions-agency/home/",
  } satisfies SocialLinks,
  portfolioUrl: "",
  bookingUrl: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappDigits}`;
